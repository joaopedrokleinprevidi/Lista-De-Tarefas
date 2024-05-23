import Joi from "joi";

export const taskSchema = {
    userID: Joi.string().max(30).required(),

    task: {
        name: Joi.string().min(3).max(50).required(),
        created_at: Joi.date(),
        checked: Joi.boolean(),
        category: Joi.string().max(50),
        description: Joi.string().max(255),
        conclusion_at: Joi.date()
    }
}
