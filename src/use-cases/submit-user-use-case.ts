import { UsersRepository } from "../repositories/users-repository";

interface SubmitUserUseCaseRequest {
  email: string;
  password: string;
  user_type: string;
  studentId: string;
}

export class SubmitUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute(request: SubmitUserUseCaseRequest) {
    const { email, password, user_type, studentId } = request;

    await this.usersRepository.create({
      email, 
      password, 
      user_type, 
      studentId
    })

  }
}