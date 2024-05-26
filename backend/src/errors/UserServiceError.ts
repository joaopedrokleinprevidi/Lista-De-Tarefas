export class UserServiceError extends Error {
    public name: string

    constructor( name: string, message: string ) {
        super(message)

        this.name = name || "UserServiceError"
    }
}

export class EmailAlreadyExistsError extends UserServiceError {
    constructor() {
        const name = "EmailAlreadyExistsError"
        const message = "The previus email is already in use."

        super(name, message)
    }
}