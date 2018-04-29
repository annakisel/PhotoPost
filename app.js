const express = require('express');
const app = express();
const actions = require('./public/server.js');
app.use(express.static('public'));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/getPhotoPost', (req, res) => {
    console.log(actions.getPhotoPost(req.query.id));
     res.send(actions.getPhotoPost(req.query.id)) ;
});

app.post('/getPhotoPosts',(req, res) => {
    //console.log()
    res.send(actions.getPhotoPosts(req.query.skip, req.query.top, req.body));
});

app.post('/addPhotoPost',(req, res) => {
    console.log(req.body);
    res.send(actions.addPhotoPost(req.body));
});

app.put('/editPhotoPost',(req, res) => {
    console.log(req.body);
    res.send(actions.editPhotoPost(req.query.id, req.body));
});

app.delete('/removePhotoPost',(req, res) => {
    res.send(actions.removePhotoPost(req.query.id));
});

app.listen(3000, function () {
    console.log('open http://localhost:3000/');
});