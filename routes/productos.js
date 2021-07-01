const express = require('express');
const router = express.Router();
const {getAll} = require('./../models/productos');

const all = async (req, res) => {
    const productos = await getAll();
    res.render('productos', {productos});
}

router.get('/', all);
module.exports = router;