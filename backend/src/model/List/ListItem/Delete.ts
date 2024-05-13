import { ITask } from "../../../@types"
import { database } from "../../../config/firebaseAccountService"

export const deleteTask = async (data: ITask) => {

    try {
        const { UserID } = data

        await database.collection(UserID).doc(data.Task.ID).delete()
    }
    
    catch {
        throw new Error('Runtime error in function "deleteTask()" in "ListItemModel"')
    }

}