import Joi from "joi"

export const registerSchema = {
    email: Joi.string().email().label("email").required(),
    password: Joi.string().min(6).max(20).label("password").required(),
    
    repeatEmail: Joi.string().email().valid(Joi.ref("email")).required(),
    repeatPassword: Joi.string().min(6).max(20).valid(Joi.ref("password")).required()
}