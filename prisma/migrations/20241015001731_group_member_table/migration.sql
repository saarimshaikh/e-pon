-- CreateEnum
CREATE TYPE "GroupRoles" AS ENUM ('admin', 'member');

-- CreateTable
CREATE TABLE "GroupMembers" (
    "member_id" UUID NOT NULL,
    "group_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role" "GroupRoles" NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GroupMembers_pkey" PRIMARY KEY ("member_id")
);

-- AddForeignKey
ALTER TABLE "GroupMembers" ADD CONSTRAINT "GroupMembers_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Groups"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembers" ADD CONSTRAINT "GroupMembers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
