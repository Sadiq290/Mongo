const express = require('express')
const app = express()
const rootCall = (req, res) => {
    res.send("I know how to open Node.. YAY")
}
app.get('/', rootCall)
app.listen(3001, () => console.log("Hello 3000"))