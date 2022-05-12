export interface UserCreateData {
  email: string;
  password: string;
  user_type: string;
  studentId: string;
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<void>;
}