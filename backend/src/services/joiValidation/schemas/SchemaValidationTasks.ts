import Joi from "joi";
import { optionalTaskErrorMessages, taskErrorMessages } from "../errorMessages/ErrorMessagesOfTasks";

export const taskSchema = {
    id: Joi.string().max(80),
    name: Joi.string().min(3).max(50).messages(taskErrorMessages).required(),
    checked: Joi.boolean().messages(taskErrorMessages),
    created_at: Joi.date().min('now').max('now').messages(taskErrorMessages).required(),
    
    category: Joi.string().max(50).messages(optionalTaskErrorMessages),
    description: Joi.string().max(255).messages(optionalTaskErrorMessages),
    conclusion_at: Joi.date().min('now').max('now + 99y').messages(optionalTaskErrorMessages)
}
