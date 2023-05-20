const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express();

const port = process.env.PORT || 3000

app.get("/",(req, res )=>{
  res.send("<h2>Hello World!</h2>")
})

app.listen(port, ()=> console.log(`App is running on http://localhost:${process.env.PORT}`))

