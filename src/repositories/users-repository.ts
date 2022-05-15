export interface UserCreateData {
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

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<void>;
}