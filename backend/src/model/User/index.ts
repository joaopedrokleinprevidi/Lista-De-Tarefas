import { getAuth } from 'firebase-admin/auth'
import { CreateNewList } from '../List'
import { ICreateUser } from '../../@types';

const createNewUser = async ({userEmail, userPassword}: ICreateUser) => {
    getAuth()
    //Cria um novo usuário com o Firebase Authentication.
    //Espera receber email and password do /Controller.
        .createUser({
            email: userEmail,
            password: userPassword
        })
        .then((userAttributes) => {
            //Caso o usuário seja criado com sucesso: Será atribuída a ele sua própria lista de tarefas.
            const userUid: any = userAttributes.uid
            CreateNewList(userUid)
            
            console.log("Usuário criado com sucesso.")
        })
        .catch((error) => {
            //Caso contrário: erro.
            throw new Error(`Runtime error in function "createNewUser()" in "UsersModel": ${error}`)
        });
} 

export const usersModel = {
    createNewUser  
} 
