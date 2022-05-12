import { prisma } from "../../prisma";
import { StudentCreateData, StudentsRepository } from "../students-repository";

export class PrismaStudentsRepository implements StudentsRepository {
  async create({ first_name, last_name, birth_date, goal }: StudentCreateData) {
    await prisma.student.create({
      data: {
        first_name, 
        last_name, 
        birth_date, 
        goal 
      }
    })
  }
}