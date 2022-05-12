/*
  Warnings:

  - You are about to drop the `_MatterToTimeCount` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `matter_id` to the `time_counts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_MatterToTimeCount" DROP CONSTRAINT "_MatterToTimeCount_A_fkey";

-- DropForeignKey
ALTER TABLE "_MatterToTimeCount" DROP CONSTRAINT "_MatterToTimeCount_B_fkey";

-- AlterTable
ALTER TABLE "time_counts" ADD COLUMN     "matter_id" INTEGER NOT NULL,
ALTER COLUMN "time_count" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_MatterToTimeCount";

-- AddForeignKey
ALTER TABLE "time_counts" ADD CONSTRAINT "time_counts_matter_id_fkey" FOREIGN KEY ("matter_id") REFERENCES "matters"("matter_id") ON DELETE RESTRICT ON UPDATE CASCADE;
