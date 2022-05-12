/*
  Warnings:

  - You are about to drop the column `student_id` on the `matters` table. All the data in the column will be lost.
  - You are about to drop the column `matter_id` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `matter_id` on the `time_counts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "matters" DROP CONSTRAINT "matters_student_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_matter_id_fkey";

-- DropForeignKey
ALTER TABLE "time_counts" DROP CONSTRAINT "time_counts_matter_id_fkey";

-- DropForeignKey
ALTER TABLE "time_counts" DROP CONSTRAINT "time_counts_student_id_fkey";

-- DropIndex
DROP INDEX "matters_student_id_key";

-- DropIndex
DROP INDEX "time_counts_matter_id_key";

-- DropIndex
DROP INDEX "time_counts_student_id_key";

-- AlterTable
ALTER TABLE "matters" DROP COLUMN "student_id";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "matter_id";

-- AlterTable
ALTER TABLE "time_counts" DROP COLUMN "matter_id";

-- CreateTable
CREATE TABLE "_MatterToStudent" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MatterToTimeCount" (
    "A" INTEGER NOT NULL,
    "B" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MatterToStudent_AB_unique" ON "_MatterToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_MatterToStudent_B_index" ON "_MatterToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MatterToTimeCount_AB_unique" ON "_MatterToTimeCount"("A", "B");

-- CreateIndex
CREATE INDEX "_MatterToTimeCount_B_index" ON "_MatterToTimeCount"("B");

-- AddForeignKey
ALTER TABLE "time_counts" ADD CONSTRAINT "time_counts_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatterToStudent" ADD CONSTRAINT "_MatterToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "matters"("matter_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatterToStudent" ADD CONSTRAINT "_MatterToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "students"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatterToTimeCount" ADD CONSTRAINT "_MatterToTimeCount_A_fkey" FOREIGN KEY ("A") REFERENCES "matters"("matter_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatterToTimeCount" ADD CONSTRAINT "_MatterToTimeCount_B_fkey" FOREIGN KEY ("B") REFERENCES "time_counts"("c_date") ON DELETE CASCADE ON UPDATE CASCADE;
