import { StudentsRepository } from "../repositories/students-repository";

interface SubmitStudentUseCaseRequest {
  first_name: string;
  last_name: string;
  birth_date: string;
  goal: string;
}

export class SubmitStudentUseCase {
  constructor(
    private studentsRepository: StudentsRepository,
  ) {}

  async execute(request: SubmitStudentUseCaseRequest) {
    const { first_name, last_name, birth_date, goal } = request;

    await this.studentsRepository.create({
      first_name, 
      last_name, 
      birth_date, 
      goal
    })

  }
}