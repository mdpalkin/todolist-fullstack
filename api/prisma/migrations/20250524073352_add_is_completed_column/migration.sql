/*
  Warnings:

  - You are about to drop the column `status` on the `Todolist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todolist" DROP COLUMN "status",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "task_status";
