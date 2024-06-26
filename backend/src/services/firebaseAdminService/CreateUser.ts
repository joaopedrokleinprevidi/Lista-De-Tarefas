import { getAuth } from 'firebase-admin/auth'
import { IUserService } from '../../@types/services/UserService'

export const createUser: IUserService["createUser"] = async ( email: string, password: string ) => {
    await getAuth().createUser({ email, password })
}