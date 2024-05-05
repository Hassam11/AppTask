export interface IUser {
  id: number;
  userName: string;
  password: string;
  tasks?: ITask[];
}

export interface ITask {
  id: number;
  task: string;
  description: string;
  completed: boolean;
}
