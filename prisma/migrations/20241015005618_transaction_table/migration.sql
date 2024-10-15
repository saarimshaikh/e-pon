-- CreateEnum
CREATE TYPE "TransactionTypes" AS ENUM ('deposit', 'withdrawal');

-- CreateTable
CREATE TABLE "Transactions" (
    "transaction_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "group_id" UUID,
    "saving_id" UUID NOT NULL,
    "type" "TransactionTypes" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("transaction_id")
);

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Groups"("group_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_saving_id_fkey" FOREIGN KEY ("saving_id") REFERENCES "Savings"("saving_id") ON DELETE RESTRICT ON UPDATE CASCADE;
