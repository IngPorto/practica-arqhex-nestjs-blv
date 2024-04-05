import { Task } from '../../entities/Task';

export interface TaskService {
  save(task: Task): Promise<Task>;
  findById(id: number): Promise<Task>;
  findAll(): Promise<Task[]>;
  update(task: Task): Promise<Task>;
  delete(id: number): Promise<void>;
}
