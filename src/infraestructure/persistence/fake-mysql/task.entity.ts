import { Task } from 'src/core/domain/entities/Task';
import { Injectable } from '@nestjs/common';

// Fake MySQL Entity ORM
@Injectable()
export class TaskEntity {
  list = [];

  constructor() {}

  async save(task: Task): Promise<Task> {
    this.list.push(task);
    return task;
  }

  findById(id: number) {
    return this.list.find((task) => task.id === id);
  }

  async findAll(): Promise<Task[]> {
    return this.list;
  }

  update(task: Task) {
    const index = this.list.findIndex((t) => t.id === task.id);
    this.list[index] = task;
    return task;
  }

  delete(id: number) {
    const index = this.list.findIndex((task) => task.id === id);
    return this.list.splice(index, 1);
  }
}
