import { prisma } from "../../prisma";
import { UserCreateData, UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  async create({ email, password, user_type, studentId }: UserCreateData) {
    await prisma.user.create({
      data: {
        email, password, 
        user_type, 
        studentId
      }
    })
  }
}