const db = require("../config/db");


module.exports = {
    //menampilkan semua buku
    getAllBooks: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM books', [], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    },


    getBookById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM books WHERE id=?', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    },


    addBook: (title, writer, user_id, category_id, publisher, year) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO books (title, writer, user_id, category_id, publisher, year) VALUES (?, ?, ?, ?, ?, ?)', 
                [title, writer, user_id, category_id, publisher, year], 
                (err, result) => {
                if (err) return reject(err);
                resolve(result.insertId);
            });
        });
    },


    updateBook: (id, title, writer, user_id, category_id, publisher, year) => {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE books SET title = ?, writer = ?, user_id = ?, category_id = ?, publisher = ?, year = ? WHERE id = ?', 
                [title, writer, user_id, category_id, publisher, year, id], 
                (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },


    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                'DELETE FROM books WHERE id = ?', [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
}

