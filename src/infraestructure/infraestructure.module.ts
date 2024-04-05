import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { TaskRepositoryAdapter } from './adapters/task.repository.adapter';
import { TaskController } from './http-server/task.controller';
import { TaskEntity } from './persistence/fake-mysql/task.entity';

@Module({
  imports: [
    CoreModule.register({
      modules: [InfraestructureModule],
      adapters: {
        taskRepository: TaskRepositoryAdapter,
      },
    }),
  ],
  controllers: [TaskController],
  providers: [TaskRepositoryAdapter, TaskEntity],
  exports: [TaskRepositoryAdapter],
})
export class InfraestructureModule {}
