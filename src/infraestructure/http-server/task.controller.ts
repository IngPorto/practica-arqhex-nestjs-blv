import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { TaskUseCase } from 'src/core/application/TaskUseCase';
import { TASK_USE_CASE } from 'src/core/core.module';
import { CreateTaskDTO } from 'src/core/shared/dto/CreateTaskDTO';

@Controller('/task')
export class TaskController {
  constructor(@Inject(TASK_USE_CASE) private taskUseCase: TaskUseCase) {}

  @Get()
  async getTasks() {
    return this.taskUseCase.giveMyTasks();
  }
  @Post()
  async createTasks(@Body() newTask: CreateTaskDTO) {
    return this.taskUseCase.makeMyTask(newTask);
  }
}
