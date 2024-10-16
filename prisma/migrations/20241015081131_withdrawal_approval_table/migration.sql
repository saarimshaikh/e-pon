-- CreateEnum
CREATE TYPE "ApprovalStatuses" AS ENUM ('pending', 'approved', 'rejected');

-- CreateTable
CREATE TABLE "WithdrawalApprovals" (
    "approval_id" UUID NOT NULL,
    "transaction_id" UUID NOT NULL,
    "approved_by" UUID,
    "status" "ApprovalStatuses" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WithdrawalApprovals_pkey" PRIMARY KEY ("approval_id")
);

-- AddForeignKey
ALTER TABLE "WithdrawalApprovals" ADD CONSTRAINT "WithdrawalApprovals_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "Transactions"("transaction_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WithdrawalApprovals" ADD CONSTRAINT "WithdrawalApprovals_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "Users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
