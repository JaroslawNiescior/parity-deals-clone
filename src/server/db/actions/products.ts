'use server';

import { ProductDetailsFormSchema } from '@/schemas/product';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import { createProduct as createProductDb } from '@/server/db/products';
import { redirect } from 'next/navigation';

export async function createProduct(
  unsafeData: z.infer<typeof ProductDetailsFormSchema>,
): Promise<{ error: boolean; message: string } | undefined> {
  const { userId } = await auth();
  const { success, data } = ProductDetailsFormSchema.safeParse(unsafeData);

  if (!success || userId === null) {
    return { error: true, message: 'There was an error creating your product' };
  }

  const { id } = await createProductDb({
    ...data,
    clerkUserId: userId,
  });

  redirect(`/dashboard/products/${id}/edit?tab=countries`);
}
