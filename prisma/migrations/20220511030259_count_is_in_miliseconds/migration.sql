/*
  Warnings:

  - Changed the type of `time_count` on the `time_counts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "time_counts" DROP COLUMN "time_count",
ADD COLUMN     "time_count" INTEGER NOT NULL;
