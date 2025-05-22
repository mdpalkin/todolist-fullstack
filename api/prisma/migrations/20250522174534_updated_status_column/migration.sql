/*
  Warnings:

  - You are about to drop the column `completed` on the `Todolist` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "task_status" AS ENUM ('created', 'in_progress', 'done');

-- AlterTable
ALTER TABLE "Todolist" DROP COLUMN "completed",
ADD COLUMN     "status" "task_status" NOT NULL DEFAULT 'created';
