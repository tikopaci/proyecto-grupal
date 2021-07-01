const pool = require('./../utils/bd');

const auth = async(username, pass) => {
    const query = "SELECT id FROM ?? WHERE username = ? AND pass = ? AND habilitado = 0 AND eliminado = 0";
    const params = [process.env.T_USUARIOS, username, pass];
    return await pool.query(query, params);
}

module.exports = { auth };