/*
  Warnings:

  - A unique constraint covering the columns `[student_id]` on the table `matters` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "matters_student_id_key" ON "matters"("student_id");
