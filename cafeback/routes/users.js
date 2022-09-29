const express = require("express");
const router = express.Router();
const user = require("../controllers/users.js");

const { body, checkSchema } = require("express-validator");

router.get("/list", user.list);
router.post("/create", user.create);
router.patch("/update/:id", user.update);
router.delete("/delete/:id", user.delete);

module.exports = router;