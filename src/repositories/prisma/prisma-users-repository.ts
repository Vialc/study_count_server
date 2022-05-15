import { prisma } from "../../prisma";
import { UserCreateData, UsersRepository } from "../users-repository";


export class PrismaUsersRepository implements UsersRepository {
  async create({ first_name, birth_date, goal, last_name, student_id, user }: UserCreateData) {
    await prisma.student.create({
      data: {
        student_id,
        first_name , 
        birth_date, 
        goal, 
        last_name,
        student_as_user: {
          create: {
            user_id: user.create.user_id,
            email: user.create.email,
            password: user.create.password,
            user_type: user.create.user_type,
          } 
        }
      }
    })
  }
}