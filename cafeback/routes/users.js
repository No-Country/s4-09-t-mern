const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

const { body, checkSchema } = require("express-validator");

router.get("/list", controller.list);

module.exports = router;