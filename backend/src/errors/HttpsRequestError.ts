import { INTERNAL_SERVER_ERROR_CODE } from "./statusCodeHttps"

export class HttpsRequestError extends Error {
    constructor( message?: string ) {
        super( message || "Internal server error." )
    }

    get name() { return "HttpsRequestError" }

    get statusCode() { return INTERNAL_SERVER_ERROR_CODE }

    get json() {
        return {
            name: this.name,
            message: this.message
        }
    }
}