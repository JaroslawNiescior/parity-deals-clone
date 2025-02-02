import { env } from '@/app/data/env/server';
import { db } from '@/drizzle/db';
import { UserSubscriptionTable } from '@/drizzle/schema';
import { WebhookEvent } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';

export async function POST(req: Request) {
  const headerPayload = headers();
  const svixId = (await headerPayload).get('svix-id');
  const svixTimestamp = (await headerPayload).get('svix-timestamp');
  const svixSignature = (await headerPayload).get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error occured -- no svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const webhook = new Webhook(env.CLERK_WEBHOOK_SECRET);
  let event: WebhookEvent;

  try {
    event = webhook.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as WebhookEvent;
  } catch (error) {
    return new Response('Error occured -- invalid svix signature', {
      status: 400,
    });
  }

  switch (event.type) {
    case 'user.created':
      console.log('User created:', event.data);
      await db.insert(UserSubscriptionTable).values({
        clerkUserId: event.data.id,
        tier: 'Free',
      });
      break;
    case 'user.updated':
      console.log('User updated:', event.data);
      break;
    default:
      console.log('Unhandled event:', event.type);
  }

  return new Response('Webhook received', { status: 200 });
}
