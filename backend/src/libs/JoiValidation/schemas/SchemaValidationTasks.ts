import Joi from "joi";

export const taskSchema = {
    id: Joi.string().max(80),
    name: Joi.string().min(3).max(50).required(),
    // created_at: Joi.date().min('now').max('now').required(),
    checked: Joi.boolean(),
    category: Joi.string().max(50),
    description: Joi.string().max(255),
    // conclusion_at: Joi.date().min('now').max('now + 99y')
}
