import { TimeCountsRepository } from "../repositories/time_counts-repository";

interface SubmitTimeCountUseCaseRequest {
  time_count: number;
  student_id: string;
  matter_id: number
   
}

export class SubmitTimeCountUseCase {
  constructor(
    private timeCountsRepository: TimeCountsRepository,
  ) {}

  async execute(request: SubmitTimeCountUseCaseRequest) {
    const { time_count, matter_id, student_id } = request;

    await this.timeCountsRepository.create({
      time_count, 
      matter_id, 
      student_id
    })

  }
}