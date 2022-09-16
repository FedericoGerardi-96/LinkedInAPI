const express = require("express");
const ruta = express.Router();

const {
  getLinkedInUser,
  getLinkedInImage,
  getLinkedEmail,
  PostLinked,
} = require("../controller/LinkedIn");

ruta.route("/").get(getLinkedInUser);
ruta.route("/img").get(getLinkedInImage);
ruta.route("/email").get(getLinkedEmail);
ruta.route("/").post(PostLinked);

module.exports = ruta;
