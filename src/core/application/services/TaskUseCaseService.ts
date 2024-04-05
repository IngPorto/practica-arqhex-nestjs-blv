import { CreateTaskDTO } from 'src/core/shared/dto/CreateTaskDTO';
import { TaskUseCase } from '../TaskUseCase';
import { Task } from 'src/core/domain/entities/Task';
import { Status } from 'src/core/shared/enum/Status';
import { TaskService } from 'src/core/domain/ports/inbound/TaskService';

export class TaskUseCaseService implements TaskUseCase {
  constructor(private taskDomainService: TaskService) {}

  async makeMyTask(newTask: CreateTaskDTO): Promise<Task> {
    const id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(11)
      .substring(1);

    const task = Task.create(
      id,
      newTask.title,
      newTask.description,
      Status.TODO,
    );
    return this.taskDomainService.save(task);
  }

  async giveMyTasks(): Promise<Task[]> {
    if (this.taskDomainService === undefined) {
      console.log('this.taskDomainService === undefined');
      return;
    }
    return this.taskDomainService.findAll();
  }
}
