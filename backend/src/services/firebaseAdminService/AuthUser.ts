import { getAuth } from "firebase-admin/auth"
import { IUserService } from "../../@types"

export const authUser: IUserService["authUser"] = async ( token: string ) => {
    const decodedIdToken = await getAuth().verifyIdToken(token)

    if( !decodedIdToken ) throw new Error("Token de autenticação inválido")
}