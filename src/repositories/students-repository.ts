export interface StudentCreateData {
  first_name: string;
  last_name: string;
  birth_date: string;
  goal: string;
}

export interface StudentsRepository {
  create: (data: StudentCreateData) => Promise<void>;
}