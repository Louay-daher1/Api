const express = require('express')
var bodyParser = require('body-parser');
const cors=require('cors');
const xlsx = require('xlsx');
const PORT=process.env.PORT ||4321;


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

app.get('/', function (req, res) {
  res.send (" Hello world")
})
app.get('/louay', function (req, res) {
   let wb = xlsx.readFile('Data.xlsx');
    let ws = wb.Sheets['Students'];
    let Data = xlsx.utils.sheet_to_json(ws) ; 
    res.send(Data);
  })

app.listen(PORT);