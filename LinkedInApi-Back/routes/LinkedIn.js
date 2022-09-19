const express = require("express");
const ruta = express.Router();

const {
  getLinkedInUser,
  getLinkedInImage,
  getLinkedEmail,
  PostLinked,
} = require("../controller/LinkedIn");

ruta.route("/").post(getLinkedInUser);
ruta.route("/img").post(getLinkedInImage);
ruta.route("/email").post(getLinkedEmail);
ruta.route("/post").post(PostLinked);

module.exports = ruta;
