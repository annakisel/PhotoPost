const express = require('express');
const app = express();
const actions = require('./public/server.js');
app.use(express.static('public'));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/getPhotoPost', (req, res) => {
     //console.log(actions.getPhotoPost(req.query.id));
     res.send(actions.getPhotoPost(req.query.id));
});

app.post('/getPhotoPosts',(req, res) => {
    //console.log("GET PHOTO POSTS"+JSON.stringify(actions.getPhotoPosts(req.query.skip, req.query.top, req.body)));
    res.send(actions.getPhotoPosts(req.query.skip, req.query.top, req.body));
});

app.post('/addPhotoPost',(req, res) => {
    //console.log(req.body);
    res.send(actions.addPhotoPost(req.body));
});

app.get('/getNumOfPosts', (req, res) => {
    //console.log(actions.getNumOfPosts());
    res.send(actions.getNumOfPosts().toString());
});

app.get('/getAllPosts', (req, res) => {
    //console.log(actions.getNumOfPosts());
    res.send(actions.getAllPosts());
});

app.put('/editPhotoPost',(req, res) => {
    console.log("/editPhotoPost app.js " + req.body);
    res.send(actions.editPhotoPost(req.query.id, req.body).toString());
});

app.delete('/removePhotoPost',(req, res) => {
    res.send(actions.removePhotoPost(req.query.id).toString());
});

app.listen(3000, function () {
    console.log('open http://localhost:3000/');
});