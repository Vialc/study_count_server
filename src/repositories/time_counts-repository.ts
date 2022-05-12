export interface TimeCountCreateData {
  time_count: number;
  student_id: string;
  matter_id: number;
  
}

export interface TimeCountsRepository {
  create: (data: TimeCountCreateData) => Promise<void>;
}