const {schemas} = require('./schemas/userSchema');

const validateLogin = (req, res, next) => {
    const {error, value} = schemas.login.validate(req.body); // .validate es una función de hapi/joy.
    error ? res.json('login', {message : error.details[0].message}) : next(); 
};

module.exports = { validateLogin }