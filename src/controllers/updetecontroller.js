import { pool } from "../models/db.js";

export const getUpdete = async (req, res) => {
    const { user2, user1, password2, password1 } = req.body;
    const query = 'UPDATE Usuario SET Email = ?, Password = ? WHERE User = ? and Password = ?';

    try {
        const [result] = await pool.query(query, [user2, password2, user1, password1]);

        if (result.affectedRows > 0) {
            return res.status(200).json({ success: true, message: 'Usuario actualizado correctamente', redirect: '/user' });
        } else {
            return res.status(400).json({ success: false, message: 'No se encontró el usuario para actualizar' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

export const getDelete = async (req, res) => {
    const { Email, password } = req.body;
    const query = 'DELETE FROM Usuario WHERE Email = ? and Password = ?';

    try {
        const [result] = await pool.query(query, [Email, password]);

        if (result.affectedRows > 0) {
            return res.status(200).json({ success: true, message: 'Usuario eliminado correctamente', redirect: '/register' });
        } else {
            return res.status(400).json({ success: false, message: 'No se encontró el usuario para eliminar' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};