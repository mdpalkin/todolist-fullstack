-- AlterTable
ALTER TABLE "task" ADD COLUMN     "todolistId" TEXT;

-- CreateTable
CREATE TABLE "todolist" (
    "todolistId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "todolist_pkey" PRIMARY KEY ("todolistId")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_todolistId_fkey" FOREIGN KEY ("todolistId") REFERENCES "todolist"("todolistId") ON DELETE SET NULL ON UPDATE CASCADE;
