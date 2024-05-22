import { ITask } from "../../../src/@types"
import { deleteTask, getAllTasks } from "../../../src/models/TaskModel"
import { getUserByEmail } from "../../../src/services/firebaseAdminService"
import { userCreateDataFactory } from "./UserFactory"

export const taskCreateDataFactory: Omit<ITask, "id"> = {
    name: "Tarefa teste",
    checked: false,
    create_at: new Date().toISOString()
}

export const deleteAllTasksFactory = async () => {
    const user = await getUserByEmail(userCreateDataFactory.email)

    if( !user ) return

    const tasks = await getAllTasks(user.uid)

    await Promise.all( tasks.map( task => deleteTask(user.uid, task.id).catch( error => console.log(error)) ) )
}