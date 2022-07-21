import { Test } from "@nestjs/testing";
import { TasksService } from "./tasks.service";

const mockUser = {
    id: 12,
    username: "testing"
}

const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
    createTask: jest.fn(),
    delete: jest.fn(),
})

describe("TasksService", () => {
    let tasksService;
    let taskRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                TasksService,
                {
                    provide: TaskRepo
                }
            ]
        })
    })
})