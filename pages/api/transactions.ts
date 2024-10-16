import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { transactionSchema } from './validation/transaction.schema';
import { personalSavingsSchema } from './validation/personal-savings.schema';

const prisma = new PrismaClient();

interface TransactionRequest {
  user_id: string;
  group_id?: string;
  saving_id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET' && req.query.user_id) {
    return personalSavingsHandler(req, res);
  }

  if (req.method === 'POST') {
    try {
      const { user_id, group_id, saving_id, type, amount }: TransactionRequest = req.body;

      // Validate the request body
      const result = transactionSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error.issues });
      }

      // Check if the saving amount is sufficient for withdrawal
      if (type === 'withdrawal') {
        const saving = await prisma.savings.findUnique({
          where: { saving_id },
          include: { user: true },
        });
        if (!saving || saving.amount < amount) {
          return res.status(400).json({ error: 'Insufficient saving amount' });
        }
      }

      // Create a new transaction
      const transaction = await prisma.transactions.create({
        data: {
          user_id,
          group_id,
          saving_id,
          type,
          amount,
        },
      });

      return res.status(201).json({ status: 'success', status_code: 201, message: 'Transaction created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

async function personalSavingsHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = personalSavingsSchema.safeParse(req.query);
    if (!result.success) {
      return res.status(400).json({ error: result.error.issues });
    }

    // Call the actual handler function for personal savings
    const userId = req.query.user_id as string;
    const savings = await prisma.savings.findMany({
      where: { user_id: userId },
      include: { user: true },
    });

    const totalDeposit = savings.reduce((acc, saving) => acc + saving.amount, 0);
    const totalWithdrawal = savings.reduce((acc, saving) => acc + (saving.type === 'withdrawal' ? saving.amount : 0), 0);

    const totalSavings = totalDeposit - totalWithdrawal;

    return res.status(200).json({
      status: 'success',
      status_code: 200,
      message: 'User savings loaded successfully',
      data: savings.map((saving) => ({ saving_id: saving.saving_id })),
      total_savings: totalSavings,
      total_deposit: totalDeposit,
      total_withdrawal: totalWithdrawal,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}