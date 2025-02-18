const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/controllerUser");

//menampilkan semua data user
router.get("/", usercontroller.index);

//menampilkan data dengan id tertentu
router.get("/:id", usercontroller.show);

//menyimpan data
router.post("/", usercontroller.store);

//menyimpan perubahan data dengan id tertentu
router.put("/:id", usercontroller.update);

//menghapus data dengan id tertentu
router.delete("/:id", usercontroller.delete);

module.exports = router;
