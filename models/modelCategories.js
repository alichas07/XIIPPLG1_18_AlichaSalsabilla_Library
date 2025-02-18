const pool = require("../config/db");

class Categories {
  static getAll = async () => {
    const [rows] = await pool.query("SELECT * FROM categories");
    return rows;
  };

  static getById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [id]);
    return rows[0];
  };

  static add = async (category) => {
    const { name } = category;
    const [result] = await pool.query(
      "INSERT INTO categories (name) VALUES (?)",
      [name]
    );
    return result.insertId;
  };

  static update = async (id, category) => {
    const { name } = category;
    const [result] = await pool.query(
      "UPDATE categories SET name = ? WHERE id = ?",
      [name, id]
    );
    return result.affectedRows;
  };

  static delete = async (id) => {
    const [result] = await pool.query("DELETE FROM categories WHERE id = ?", [id]);
    return result.affectedRows;
  };
}

module.exports = Categories;
