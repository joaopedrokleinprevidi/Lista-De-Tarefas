import express from "express"

import { AuthMiddleware } from "./middlewares/authMiddleware"

import {
    CreateTaskController,
    DeleteTaskController,
    GetAllTasksController,
    UpdateTaskController,
    CheckAllTasksController,
    UncheckAllTasksController 
} from "./modules/controllers/TaskControllers"

import { CreateUserController } from "./modules/controllers/UserControlles"

const router = express.Router()

router.post("/auth/signUp", CreateUserController)

router.get("/tasks/getAll", GetAllTasksController)

router.post("/tasks/create", CreateTaskController)

router.delete("/tasks/delete", AuthMiddleware.VerifyUser, DeleteTaskController)

router.put("/tasks/update", AuthMiddleware.VerifyUser, UpdateTaskController)

router.put("/tasks/checkAll", AuthMiddleware.VerifyUser, CheckAllTasksController)

router.put("/tasks/uncheckAll", AuthMiddleware.VerifyUser, UncheckAllTasksController)



//testes abaixo

import { validateFields } from "./services/joiValidation/JoiLibrary"
// import { loginSchema } from "./services/joiValidation/schemas/SchemaValidationLogin"
// import { registerSchema } from "./services/joiValidation/schemas/SchemaValidationRegister"
import { taskSchema } from "./services/joiValidation/schemas/SchemaValidationTasks"

router.post("/teste", (req, res) => {

    const responseValidate = validateFields(taskSchema, req.body)

    if (responseValidate === undefined){
        res.status(200).json({ "message": "Tudo certo.", "validationResponse": `${responseValidate}` })
    }
    else {
        res.status(422).json({ "message": "Erros encontrados", "validationResponse": `${responseValidate}`})
    }
})



// import Joi from 'joi'

// const messagesError = {
//     //Mensagem quando um campo obrigatório não é fornecido.
//     "any.required": "O campo {#label} é obrigatório.",
//     //Mensagem quando uma string está vazia.
//     "string.empty": "O campo {#label} não pode estar vazio.",
//     //Mensagem quando o valor de um campo deve ser uma string.
//     "string.base": "O campo {#label} deve conter apenas caracteres.",
//     //Mensagem quando a string é menor do que o número mínimo de caracteres permitido.
//     "string.min": "O campo {#label} deve conter pelo menos {#limit} caracteres.",
//     //Mensagem quando a string é maior do que o número máximo de caracteres permitido.
//     "string.max": "O campo {#label} deve conter no máximo {#limit} caracteres.",
//     //Mensagem quando o email é inválido.
//     "string.email": "O campo {#label} precisa ser válido."
// }

// const userSchema = Joi.object({
//     name: Joi.string().min(3).max(10).messages(messagesError).required(),
//     email: Joi.string().email().required().messages(messagesError),
//     password: Joi.string().min(6).max(15).messages(messagesError).required()
// })


// router.post("/teste", (req, res) => {
//     const validation = userSchema.validate(req.body , { abortEarly: false});    

//     if(validation.error) {
//         const errors = validation.error.details.map(detail => detail.message);
//         return res.status(422).send(errors)
//     }
//     else {
//         return res.status(200).send({ validate: validation})
//     }
// })


export default router;