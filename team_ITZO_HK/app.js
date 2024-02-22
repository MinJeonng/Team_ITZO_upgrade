const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//미들웨어 설정
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

//라우터 설정
const router = require('./routes');
app.use('/', router);

app.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
