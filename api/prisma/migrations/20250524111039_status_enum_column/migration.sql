/*
  Warnings:

  - You are about to drop the `Todolist` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "taskStatus" AS ENUM ('created', 'in_progress', 'completed');

-- DropTable
DROP TABLE "Todolist";

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "taskStatus" NOT NULL DEFAULT 'created',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
