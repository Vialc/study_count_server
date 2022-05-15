export interface StudentCreateData {
  first_name: string;
  last_name: string;
  birth_date: string;
  goal: string;
  student_as_user: {
    create: [
      {
        email: string,
        password: string,
        user_type: string,
      }
    ]
  };
}

export interface StudentsRepository {
  create: (data: StudentCreateData) => Promise<void>;
}