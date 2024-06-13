import { HttpsRequestError } from "./HttpsRequestError"
import { CONFLICT_CODE } from "./statusCodeHttps"

export class UserServiceError extends HttpsRequestError {
    constructor( message: string ) {
        super(message)
    }

    get name() { return "UserServiceError" }
}

export class EmailAlreadyExistsError extends UserServiceError {
    constructor() {
        super("The previus email is already in use.")
    }

    get name() { return "EmailAlreadyExistsError" }

    get statusCode() { return CONFLICT_CODE }
}