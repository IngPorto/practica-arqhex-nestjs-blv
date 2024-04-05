import { Status } from 'src/core/shared/enum/Status';

export class Task {
  id: string;
  title: string;
  description: string;
  status: Status;

  static create(
    id: string,
    title: string,
    description: string,
    status: Status,
  ) {
    const task = new Task();
    task.id = id;
    task.title = title;
    task.description = description;
    task.status = status;
    return task;
  }
}
