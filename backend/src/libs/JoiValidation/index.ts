import Joi from 'joi'

import { runValidation } from './RunValidation';
import { errorMessages } from './ErrorMessages';

export const joiValidateFields = ( schemasToReceive: any, dataFromInputFields: any ) => {

    const schemas = Joi.object(schemasToReceive).messages(errorMessages)

    const responseValidate = runValidation(schemas, dataFromInputFields)

    return responseValidate

}