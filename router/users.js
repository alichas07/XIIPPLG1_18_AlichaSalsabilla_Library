const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/users");

//menampilkan semua data user
router.get("/users", usercontroller.index);

//menampilkan data dengan id tertentu
router.get("/users/:id", usercontroller.show);

//menyimpan data
router.post("/users", usercontroller.store);

//menyimpan perubahan data dengan id tertentu
router.put("/users/:id", usercontroller.update);

//menghapus data dengan id tertentu
router.delete("/users/:id", usercontroller.delete);

module.exports = router;
