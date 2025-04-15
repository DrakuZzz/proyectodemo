import { pool } from "../models/db.js";

export const getAllProductos = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM producto');
        res.json(rows);
};