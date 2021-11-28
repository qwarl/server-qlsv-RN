const express = require('express');
const path = require('path');
const db = require('./config/db');
const route = require('./routes');
const app = express();
const port = 3000;

//set anh cho trang, cau hinh de su dung static file, link, css
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}
));
app.use(express.json());
//routes init;
route(app);

//connect DB
db.connect();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})