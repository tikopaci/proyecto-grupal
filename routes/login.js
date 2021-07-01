const express = require('express');
const router = express.Router();
const {auth} = require('./../models/usuarios')
const {validateLogin} = require('../middlewares/usuarios');
const sha1 = require('sha1');

const showLogin = (req, res) => {
    res.render('login', {message: ''});
}

const login = async (req, res) => {
    let {username, pass} = req.body;
    pass = sha1(pass);
    const logged = await auth(username, pass);
    if (logged.length === 0) {
        res.render('login', {message: "Usuario o pass incorrectos"})
    }
    res.redirect('/productos');
}

router.get('/', showLogin);
router.post('/logged', validateLogin, login);
module.exports = router;