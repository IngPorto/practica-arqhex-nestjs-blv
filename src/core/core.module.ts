import { Module, Type, DynamicModule } from '@nestjs/common';
import { TaskUseCaseService } from './application/services/TaskUseCaseService';
import { TaskDomainService } from './domain/services/TaskDomainService';
import { TaskRepository } from './domain/ports/outbound/TaskRepository';
/**
 * Custom providers y módulos dinámicos en Nestjs
 */

/**
 * Options for core module
 */
export type CoreModuleOptions = {
  modules: Type[];
  adapters?: {
    taskRepository: Type<TaskRepository>;
  };
};

/**
 * Providers token for netsjs injection
 */
export const TASK_USE_CASE = 'TASK_USE_CASE';
export const TASK_SERVICE = 'TASK_SERVICE';

@Module({})
export class CoreModule {
  static register({ modules, adapters }: CoreModuleOptions): DynamicModule {
    const { taskRepository } = adapters;

    const TaskUseCaseProvider = {
      provide: TASK_USE_CASE,
      useFactory(task: TaskDomainService) {
        return new TaskUseCaseService(task);
      },
      inject: [taskRepository],
    };

    return {
      module: CoreModule,
      imports: [...modules],
      providers: [TaskUseCaseProvider],
      exports: [TASK_USE_CASE],
    };
  }
}
