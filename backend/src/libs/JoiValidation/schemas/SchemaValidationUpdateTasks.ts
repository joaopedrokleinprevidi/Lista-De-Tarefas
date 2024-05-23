import Joi from "joi";

export const updateTaskSchema = {
    userID: Joi.string().max(30).required(),
    taskID: Joi.string().max(30).required(),

    taskUpdated: {
        name: Joi.string().min(3).max(50).required(),
        created_at: Joi.date(),
        checked: Joi.boolean(),
        category: Joi.string().max(50),
        description: Joi.string().max(255),
        conclusion_at: Joi.date()
    }
}
