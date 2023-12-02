const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use('/static', express.static('D:/uploads'))

app.use(require('./routes/addAdmin'));
app.use(require('./routes/login'));
app.use(require('./routes/addProduct'));
app.use(require('./routes/profile'));
app.use(require('./routes/cart'));
app.use(require('./routes/orderProduct'));

mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err)
});

app.listen(process.env.PORT, () => {
    console.log('server is running');
})
