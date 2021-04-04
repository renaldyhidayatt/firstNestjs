import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './tasks.entity';
//import { Task, TaskStatus } from './tasks.models';
import { TaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async showAll() {
    return await this.taskRepository.find();
  }

  async create(data: TaskDto) {
    const task = this.taskRepository.create(data);
    await this.taskRepository.save(data);
    return task;
  }

  async findById(id: number): Promise<TaskDto> {
    return await this.taskRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  // async read(id: number){
  //   return await this.userRepository.findOne()
  // }

  async update(id: number, data: Partial<TaskDto>) {
    await this.taskRepository.update({ id }, data);
    return await this.taskRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.taskRepository.delete({ id });
    return { deleted: true };
  }
}
