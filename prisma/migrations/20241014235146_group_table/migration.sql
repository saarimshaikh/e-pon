-- CreateTable
CREATE TABLE "Groups" (
    "group_id" UUID NOT NULL,
    "group_name" TEXT NOT NULL,
    "created_by" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("group_id")
);

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Groups"("group_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
