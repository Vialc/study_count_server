import { prisma } from "../../prisma";
import { TimeCountCreateData, TimeCountsRepository } from "../time_counts-repository";

export class PrismaTimeCountsRepository implements TimeCountsRepository {
  async create({ time_count, matter_id, student_id }: TimeCountCreateData) {
    await prisma.timeCount.create({
      data: {
        time_count, 
        matter_id, 
        student_id 
      }
    })
  }
}