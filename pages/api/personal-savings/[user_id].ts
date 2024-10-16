import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const userId = req.query.user_id as string;

    // Validate user_id
    if (!userId) {
      return res.status(400).json({ error: 'user_id is required' });
    }

    try {
      // Load user's savings
      const savings = await prisma.savings.findMany({
        where: { user_id: userId },
        include: { user: true },
      });

      // Calculate total savings deposit and withdrawal
      const totalDeposit = savings.reduce((acc, saving) => acc + saving.amount, 0);
      const totalWithdrawal = savings.reduce((acc, saving) => acc + (saving.type === 'withdrawal' ? saving.amount : 0), 0);

      // Calculate total savings
      const totalSavings = totalDeposit - totalWithdrawal;

      // Return response
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
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}