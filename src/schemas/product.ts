import { removeTrailSlash } from '@/lib/utils';
import { z } from 'zod';

export const ProductDetailsFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  url: z.string().url().min(1, 'URL is required').transform((removeTrailSlash)),
  description: z.string().optional(),
});
