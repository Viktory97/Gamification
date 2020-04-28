const express = require('express')
const app = new express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>')
  })

// PORT
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, (err) => {
    if(err) {console.log(err) };
    console.log(`Server is listening on port ${PORT}...`);
})
