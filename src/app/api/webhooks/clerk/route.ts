import { env } from '@/app/data/env/server';
import { createUserSubscription } from '@/server/db/subscription';
import deleteUser from '@/server/db/users';
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
      await createUserSubscription({
        clerkUserId: event.data.id,
        tier: 'Free',
      });
      break;
    case 'user.deleted':
      if (event.data.id != null) {
        await deleteUser(event.data.id);

        // TODO: Remove Stripe subscription
      }
      break;
    default:
      console.log('Unhandled event:', event.type);
  }

  return new Response('Webhook received', { status: 200 });
}
