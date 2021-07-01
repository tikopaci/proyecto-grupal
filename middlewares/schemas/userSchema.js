const Joi = require('@hapi/joi');

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty" : "Campo obligatorio."
        }),
        pass: Joi.string().min(3).max(20).required().messages({
            "string.empty" : "Campo obligatorio.",
            "string.max" : "La contraseña puede tener 20 char como máximo.",
            "string.min" : "La contraseña debe tener al menos 3 chars."
        })
    })
}


module.exports = { schemas };