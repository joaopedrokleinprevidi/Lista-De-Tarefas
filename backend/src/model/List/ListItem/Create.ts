import { ITask } from "../../../@types";
import { database } from "../../../config/firebaseAccountService"

export const ModelCreateTask = async (data: ITask) => {

    try {
        const { UserID } = data;
      
        await database.collection(UserID).add(data.Task)  
    }

    catch {
        throw new Error('Runtime error in function "ModelCreateTask()" in "Backend >> Model >> ListItem >> Create.ts"')
    }

 }