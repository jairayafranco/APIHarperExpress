const express = require('express')

const app = express()
const PORT = 8000

app.set('json spaces', 2)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

require('./src/routes/routes')(app)

app.listen(PORT, () => {
  console.log(`⚡️ Servidor funcionando en ${PORT}`)
});