import { z } from 'zod';

export const personalSavingsSchema = z.object({
  user_id: z.string().min(1, 'user_id is required'),
});