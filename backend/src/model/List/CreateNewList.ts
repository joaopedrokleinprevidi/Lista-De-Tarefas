import database from '../../config/firebaseAccountService'
import { I_CreateNewList } from '../../@types'

//Cria uma lista de tarefas vazia utilizando o UID do usuário. 
export const CreateNewList = async ({uid}: I_CreateNewList) => {
    database.collection("tarefas").doc(uid)
}