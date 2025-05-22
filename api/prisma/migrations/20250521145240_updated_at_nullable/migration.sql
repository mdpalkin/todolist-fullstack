/*
  Warnings:

  - Made the column `description` on table `Todolist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Todolist" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
