import { Task } from '../entities/Task';
import { TaskService } from '../ports/inbound/TaskService';
import { TaskRepository } from '../ports/outbound/TaskRepository';

export class TaskDomainService implements TaskService {
  constructor(private repository: TaskRepository) {}

  async save(task: Task): Promise<Task> {
    return this.repository.save(task);
  }

  async findById(id: number): Promise<Task> {
    return this.repository.findById(id);
  }

  async findAll(): Promise<Task[]> {
    return this.repository.findAll();
  }

  async update(task: Task): Promise<Task> {
    return this.repository.update(task);
  }

  async delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
