import { Task } from '../domain/entities/Task';
import { CreateTaskDTO } from '../shared/dto/CreateTaskDTO';

export interface TaskUseCase {
  makeMyTask(newTask: CreateTaskDTO): Promise<Task>;
  giveMyTasks(): Promise<Task[]>;
}
