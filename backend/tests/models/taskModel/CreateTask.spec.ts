import { createTask } from "../../../src/models/taskModel"
import { deleteAllTasksFactory, taskCreateDataFactory } from "../../factories/TaskFactory"
import { deleteUserFactory, userFactory } from "../../factories/UserFactory"

describe("TaskModel > CreateTask", () => {
    let user: { uid: string }

    beforeAll( async () => user = await userFactory() )

    afterEach( async () => await deleteAllTasksFactory() )

    afterAll( async () => await deleteUserFactory()  )

    it("Must create a task successfully", async () => {
        const taskCreate = taskCreateDataFactory
        const newTask = await createTask(user.uid, taskCreate)
        
        expect(newTask).toMatchObject({
            id: expect.any(String),
            name: taskCreate.name,
            checked: taskCreate.checked,
            create_at: taskCreate.create_at
        })
    })
})