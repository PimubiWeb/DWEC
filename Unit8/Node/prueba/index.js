const express = require('express')
const app = express()
const port = 3000

//app.use(express.static('public')); //aqui te imprime esto primero

app.get('/', (req, res) => {
  res.send('Jose!')
})

app.use(express.static('public')); // aqui ejecutaria el app.get porque lo encuentra primero y ejecuta Jose

app.listen(port, () => {
  console.log(`Example hola app listening on port ${port}`)
})