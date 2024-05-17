import Joi from 'joi'

import { runValidationIn } from './RunValidation';

export const validateFields = ( schemasToReceive: any, dataFromInputFields: any ) => {

    //Recebe schemas, exemplo: Schema de Login
    const schemas = Joi.object(schemasToReceive)

    //Valida os dados a partir do schema
    //Retorna todos os erros possíveis
    const responseValidate = runValidationIn(schemas).With(dataFromInputFields)

    return responseValidate

}