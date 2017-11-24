console.log("Start");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status',(req,res)=> res.send({message:'hello'}));

const port = 1337 || process.env.PORT;
app.listen(port,() => console.log(`Server started on http://localhost:${port} `));





