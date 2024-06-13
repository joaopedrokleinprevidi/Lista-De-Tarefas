import { HttpsRequestError } from "./HttpsRequestError"
import { BAD_REQUEST_CODE } from "./statusCodeHttps"

export class InvalidFieldsError extends HttpsRequestError {
    constructor( private _fieldErrors: String[] ) {
        super("Some fields are invalid.")
    }

    get name() { return "InvalidFieldsError" }

    get statusCode() { return BAD_REQUEST_CODE }

    get fieldErrors() { return this._fieldErrors }

    get json() {
        return {
            name: this.name,
            message: this.message,
            fieldErrors: this.fieldErrors
        }
    }
}