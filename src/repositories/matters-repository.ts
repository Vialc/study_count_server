export interface MatterCreateData {
  matter: string;
  matter_student: {
    connect: {
      student_id: string
    }
  };
}

export interface MattersRepository {
  create: (data: MatterCreateData) => Promise<void>;
}