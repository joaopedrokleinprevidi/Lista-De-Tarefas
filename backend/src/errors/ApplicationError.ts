export class CustomApplicationError extends Error {
    constructor( message?: string ) {
        super(message || "Unknown error.")
    }

    get name() { return "CustomApplicationError" }
}

export class UnhandledError extends CustomApplicationError {
    constructor( message: string ) {
        super(message)
    }

    get name() { return "UnhandledError" }
}
