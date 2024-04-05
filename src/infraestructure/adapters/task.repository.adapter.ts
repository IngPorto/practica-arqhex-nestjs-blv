import { Inject, Injectable } from '@nestjs/common';
import { Task } from 'src/core/domain/entities/Task';
import { TaskRepository } from 'src/core/domain/ports/outbound/TaskRepository';
import { TaskEntity } from '../persistence/fake-mysql/task.entity';

@Injectable()
export class TaskRepositoryAdapter implements TaskRepository {
  constructor(@Inject(TaskEntity) private taskEntity: TaskEntity) {}

  save(newTask: Task): Promise<Task> {
    return this.taskEntity.save(newTask);
  }
  findById(id: number): Promise<Task> {
    throw new Error('Method not implemented.' + id);
  }
  findAll(): Promise<Task[]> {
    return this.taskEntity.findAll();
  }

  update(task: Task): Promise<Task> {
    throw new Error('Method not implemented.' + task);
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.' + id);
  }
}
