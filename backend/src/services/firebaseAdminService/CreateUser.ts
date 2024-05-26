import { FirebaseAuthError, getAuth } from "firebase-admin/auth"
import { FirebaseAuthErrorsAdapter } from "../../adapters/firebase/FirebaseAuthErrorsAdapter"
import { IUserService } from "../../@types"

export const createUser: IUserService["createUser"] = async ( email: string, password: string ) => {

    try {
        const newUser = await getAuth().createUser({ email, password })

        return { uid: newUser.uid, email: newUser.providerData[0].email }
    }
    
    catch ( error: any ) {
        if( error instanceof FirebaseAuthError ) FirebaseAuthErrorsAdapter(error)

        throw error
    }
}