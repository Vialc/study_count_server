import { prisma } from "../../prisma";
import { MatterCreateData, MattersRepository } from "../matters-repository";

export class PrismaMattersRepository implements MattersRepository {
  async create({ matter, matter_student }: MatterCreateData) {
    await prisma.matter.create({
      data: {
        matter, 
        matter_student
      }
    })
  }
}