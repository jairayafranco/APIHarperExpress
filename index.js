const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000

app.set('json spaces', 2)

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', require('./src/routes/routes'))

app.listen(PORT, () => {
  console.log(`⚡️ Servidor funcionando en ${PORT}`)
});