import Joi from 'joi'
import { globalErrorMessages } from '../errorMessages/ErrorMessagesGlobal'

export const loginSchema = {
    email: Joi.string().email().label('email').messages(globalErrorMessages).required(),
    password: Joi.string().min(6).max(20).label('password').messages(globalErrorMessages).required()
}