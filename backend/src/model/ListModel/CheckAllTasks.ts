import { IUserID } from "../../@types";
import { database } from "../../config/firebaseAccountService"

let dynamicBoolean: boolean = true;

export const ModelCheckAllTasks = async ({UserID}: IUserID) => {
    
    try {
        //Se for true, vira falso. Se for falso, vira true.
        if(dynamicBoolean){
            dynamicBoolean = false
        } else {
            dynamicBoolean = true
        }

        //"runTransaction" responsável por atualização em massa de documentos
        await database.runTransaction(async (transition) => {
            //Pega todos documentos (todas tarefas do usuário)
            const reference = await database.collection(UserID).get()

            //Pega cada documento, itera sobre ele.
            reference.docs.forEach((doc) => {
                //Transforma todos documentos em checked: true, ou checked: false
                transition.update(doc.ref, { Checked: dynamicBoolean })
            }) 
        })

    }

    catch {
        throw new Error('Runtime error in function "ModelCheckAllTasks()" in "Backend >> Model >> ListItem >> CheckAllTasks.ts"')
    }

 }