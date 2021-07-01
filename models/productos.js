const pool = require('./../utils/bd');

const getAll = async() => {
    try{
        const query = "SELECT p.id, p.nombre, p.precio, p.stock FROM productos AS p"
        //const params = [process.env.T_PRODUCTOS]
        const rows = await pool.query(query);
        return rows;
    } catch(e){
        console.error(e);
    }
}

module.exports = { getAll }