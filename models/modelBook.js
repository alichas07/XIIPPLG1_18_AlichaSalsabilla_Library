const pool = require("../config/db");

class Book {
  static getAll = async () => {
    const [rows] = await pool.query("SELECT * FROM books");
    return rows;
  };

  static getById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [id]);
    return rows[0];
  };

  static add = async (book) => {
    const { title, writer, user_id, category_id, publisher, year } = book;
    const [result] = await pool.query(
      "INSERT INTO books (title, writer, user_id, category_id, publisher, year) VALUES (?, ?, ?, ?, ?, ?)",
      [title, writer, user_id, category_id, publisher, year]
    );
    return result.insertId;
  };  

  static update = async (id, book) => {
    const { title, writer, user_id, category_id, publisher, year } = book;
    const [result] = await pool.query(
      "UPDATE books SET title = ?, writer = ?, user_id = ?, category_id = ?, publisher = ?, year = ? WHERE id = ?",
      [title, writer, user_id, category_id, publisher, year, id]
    );
    return result.affectedRows;
  };

  static delete = async (id) => {
    const [result] = await pool.query("DELETE FROM books WHERE id = ?", [id]);
    return result.affectedRows;
  };
}

module.exports = Book;