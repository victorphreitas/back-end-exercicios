const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let k = -1;

app.get('/', (req, res) => { 
  k++;
  if (k === jogadores.length) {
    k = 0;   
  }
  res.render('pages/player', {data: jogadores[k]});
});
      
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}.`);
});