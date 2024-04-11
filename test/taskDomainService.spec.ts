import { Task } from '../src/core/domain/entities/Task';
import { TaskRepository } from 'src/core/domain/ports/outbound/TaskRepository';
import { TaskDomainService } from '../src/core/domain/services/TaskDomainService';
import { Status } from '../src/core/shared/enum/Status';
import { TaskEntity } from '../src/infraestructure/persistence/fake-mysql/task.entity';

function TaskDomainServicerepositoryMock(
  taskEntity: TaskEntity,
): TaskRepository {
  return {
    save: jest.fn().mockReturnValue(Promise.resolve(taskEntity)),
    findAll: jest.fn().mockReturnValue(Promise.resolve([taskEntity])),
    findById: jest.fn().mockReturnValue(Promise.resolve(taskEntity)),
    update: jest.fn().mockReturnValue(Promise.resolve(taskEntity)),
    delete: jest.fn().mockReturnValue(Promise.resolve(taskEntity)),
  };
}

describe('ProductDomainService', () => {
  const databaseEntityORMMock = new TaskEntity();
  let service: TaskDomainService = null;
  let repositoryMock = null;

  beforeEach(async () => {
    repositoryMock = TaskDomainServicerepositoryMock(databaseEntityORMMock);
    service = new TaskDomainService(repositoryMock);
  });

  it('should call TaskDomainServicerepository save', async () => {
    const taskTest = Task.create(
      '1',
      "my task's title",
      "my task's description",
      Status.TODO,
    );

    await service.save(taskTest);
    expect(repositoryMock.save).toHaveBeenCalled();
  });
});
