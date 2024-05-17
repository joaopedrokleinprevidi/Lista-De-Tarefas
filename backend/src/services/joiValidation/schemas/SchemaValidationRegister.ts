import Joi from 'joi'
import { loginSchema } from './SchemaValidationLogin'
import { globalErrorMessages } from '../errorMessages/ErrorMessagesGlobal'

const {email, password} = loginSchema
  
export const registerSchema = {
    email,
    password,
    repeatEmail: Joi.string().email().valid(Joi.ref('email')).messages(globalErrorMessages).required(),
    repeatPassword: Joi.string().min(6).max(20).valid(Joi.ref('password')).messages(globalErrorMessages).required()
}