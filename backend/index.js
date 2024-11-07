const express = require("express")
const cors = require('cors');
const file = require('./data.json')
const port = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json())

app.get("/products", (req, res)=>{
    res.status(200).json(file)
})

app.listen(port, ()=>{
    console.log('salam');
})