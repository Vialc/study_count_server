import { MattersRepository } from "../repositories/matters-repository";

interface SubmitMatterUseCaseRequest {
  matter: string;
  matter_student: {
    connect: {
      student_id: string
    }
  };
}

export class SubmitMatterUseCase {
  constructor(
    private mattersRepository: MattersRepository,
  ) {}

  async execute(request: SubmitMatterUseCaseRequest) {
    const { matter, matter_student } = request;

    await this.mattersRepository.create({
      matter, 
      matter_student
    })

  }
}