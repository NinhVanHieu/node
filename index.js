const express = require ('express')
const app = express()
const port = 3000
// router
app.get('/tin-tuc', (req, res) => {
    var a=1
    var b=2
    var c=a+b
  return res.send('Hello World!')
})
// 127.0.0.1 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})