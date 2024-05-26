import { FirebaseAuthError } from "firebase-admin/auth"
import { EmailAlreadyExistsError } from "../../errors/UserServiceError"

const ErrorCodeAccepted: Record<string, Function> = {
    "auth/email-already-exists": () => new EmailAlreadyExistsError()
}

export const FirebaseAuthErrorsAdapter = ( error: FirebaseAuthError ) => {

    if( error.code in ErrorCodeAccepted ) throw ErrorCodeAccepted[error.code]() 
}