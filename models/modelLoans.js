const pool = require("../config/db");

class Loans {
  static getAll = async () => {
    const [rows] = await pool.query("SELECT * FROM loans");
    return rows;
  };

  static getById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM loans WHERE id = ?", [id]);
    return rows[0];
  };

  static add = async (loans) => {
    const { book_id, user_id, loan_date, return_date, status } = loans;
    const [result] = await pool.query(
      "INSERT INTO loans (book_id, user_id, loan_date, return_date, status) VALUES (?, ?, ?, ?, ?)",
      [book_id, user_id, loan_date, return_date, status]
    );
    return result.insertId;
  };  

  static update = async (id, loans) => {
    const { book_id, user_id, loan_date, return_date, status } = loans;
    const [result] = await pool.query(
      "UPDATE loans SET book_id = ?, user_id = ?, loan_date = ?, return_date = ?, status = ? WHERE id = ?",
      [book_id, user_id, loan_date, return_date, status, id]
    );
    return result.affectedRows;
  };

  static delete = async (id) => {
    const [result] = await pool.query("DELETE FROM loans WHERE id = ?", [id]);
    return result.affectedRows;
  };
}

module.exports = Loans;  