import { database } from "../../../src/config/firebaseAccountService"
import { createTask } from "../../../src/models/TaskModel"

import { deleteAllTasksFactory, taskCreateDataFactory } from "../factories/TaskFactory"
import { deleteUserFactory, userFactory } from "../factories/UserFactory"

describe("TaskModel > CreateTask", () => {

    beforeAll( async () => await database )

    afterEach( async () => { 
        await deleteAllTasksFactory()
        await deleteUserFactory() 
    })

    it("Deve criar uma tarefa com sucesso", async () => {
        const user = await userFactory()
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