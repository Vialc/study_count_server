import { UsersRepository } from "../repositories/users-repository";
import { v4 } from 'uuid'

interface SubmitUserUseCaseRequest {
  student_id: string
  first_name: string
  last_name: string;
  birth_date: string;
  goal:string;
  user: {
    create: {
      user_id: string;
      email: string;
      password: string;
      user_type: string;
      student:{
        student_id: string
      }
    }
  }
}

export class SubmitUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute(request: SubmitUserUseCaseRequest) {
    const { first_name, last_name, birth_date, goal, } = request;
    const userUuid = v4();
    const studentUuid = v4()

    await this.usersRepository.create({
      student_id: studentUuid,
      first_name ,
      last_name ,
      birth_date ,
      goal,
      user: {
        create: {
          user_id: userUuid ,
          email: request.user.create.email ,
          password: request.user.create.password ,
          user_type: request.user.create.user_type ,
          student:{
            student_id: studentUuid,
          }
        }
      }
      
    })

  }
}