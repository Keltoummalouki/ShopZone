// const express = require("express")
// const cors = require('cors');
// const file = require('./Products.json')
// const port = process.env.PORT || 5000

// const app = express();
// app.use(cors());
// app.use(express.json())

// app.get("/products", (req, res)=>{
//     res.status(200).json(file)
// })

// app.listen(port, ()=>{
//     console.log('salam');
// })

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); 
const app = express();
const port = 5000;
app.use(cors());




const productsJsonPath = path.join(__dirname, 'Products.json');


app.get('/api/products', (req, res) => {
    fs.readFile(productsJsonPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error: 'i cant fund data'});
        }
        else {
            const products = JSON.parse(data);
            res.json(products);
        } 

    });
});




app.listen(port, () => {
    console.log("API server is running at: http://localhost:${port}");
})