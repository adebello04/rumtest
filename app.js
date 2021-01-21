const express = require ('express');
const app = express();

app.get('/', (req, res) => {
res.send("welome to my page")
});

app.listen(3000, () => {
    console.log('app is running')
});