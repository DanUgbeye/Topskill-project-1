require('dotenv').config()
const express = require('express');
const app = express();
const qrCode = require('qrcode');
const { createUser } = require('./data');

app.use(express.json());

app.route('/').post( (req, res) => {

  //if no body is provided
  if(!req.body) res.send('no data sent');
  const { firstName, lastName } = req.body;
  
  //this creates a user object with the required parameters
  const data = createUser(firstName, lastName);
  const path = `qrcodes/${data.id}.png`;

  //this creates the qrcode and saves it to qrcodes folder
  qrCode.toFile( path, [{
    data: JSON.stringify(data)
  }])

  const qrCodePath = `${process.env.HOST}/${path}`;
  res.send(qrCodePath);
});

const port = process.env.PORT;

//this starts the server
app.listen(port, ()=>{
  console.log('app started');
});