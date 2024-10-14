-- CreateEnum
CREATE TYPE "SavingTypes" AS ENUM ('personal', 'group');

-- CreateTable
CREATE TABLE "Savings" (
    "saving_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "group_id" UUID,
    "amount" DECIMAL(10,2) NOT NULL,
    "type" "SavingTypes" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Savings_pkey" PRIMARY KEY ("saving_id")
);

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
