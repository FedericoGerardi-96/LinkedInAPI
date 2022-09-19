const express = require("express");
const ruta = express.Router();
const { getCodeLoginUser } = require("../../controller/auth/login");

ruta.route("/").post(getCodeLoginUser);

module.exports = ruta;
