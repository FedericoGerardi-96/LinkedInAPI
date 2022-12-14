const dotenv = require("dotenv")
const express = require("express")
const app = express()
// const morgan = require("morgan")
const cors = require("cors")
const errorHandler = require("./middleware/error")

dotenv.config({ path: "./config/config.env" })

// Exporto las rutas donde llamara al controler
const LinkedIn = require("./routes/LinkedIn")
const login = require("./routes/auth/login")

app.use(express.json())
app.use(cors())

app.use("/api/LinkedIn", LinkedIn)
app.use("/api/login", login)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

const server = app.listen(
  3500,
  console.log("Servidor ejecutado en ambiente", process.env.NODE_ENV)
)
// Manejar errores de conexion
process.on("unhandledRejection", (error, promise) => {
  console.log("Errores", error.message)
  server.close(() => process.exit(1))
})
