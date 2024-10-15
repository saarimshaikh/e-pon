import { z } from 'zod';

export const transactionSchema = z.object({
  user_id: z.string(),
  group_id: z.string().optional(),
  saving_id: z.string(),
  type: z.enum(['deposit', 'withdrawal']),
  amount: z.number().min(0).max(99999999.99).step(0.01),
});