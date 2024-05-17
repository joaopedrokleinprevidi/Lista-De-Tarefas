import { globalErrorMessages } from "./ErrorMessagesGlobal"

export const optionalTaskErrorMessages = {
    "string.max": "O campo {#label} deve conter no máximo {#limit} caracteres.",
}

export const taskErrorMessages = {
    ...globalErrorMessages,
    "boolean.base": "O campo {#label} precisa ser um booleano."
}