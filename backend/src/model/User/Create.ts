import { getAuth } from 'firebase-admin/auth'
import { ICreateUser } from '../../@types';

export const CreateNewUserModel = async ({userEmail, userPassword}: ICreateUser) => {
    getAuth()
    //Cria um novo usuário com o Firebase Authentication.
    //Espera receber email and password do /Controller.
        .createUser({
            email: userEmail,
            password: userPassword
        })
        .then(() => {
            console.log("Usuário criado com sucesso.")
        })
        .catch((error) => {
            //Caso contrário: erro.
            throw new Error(`Runtime error in function "CreateNewUserModel()" in "Backend >> Model >> User >> Create.ts": ${error}`)
        });
} 