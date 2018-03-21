const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({credentials: true, origin: true}));

app.use(express.static('public'))


let items = [];
let id = 0;
let paintingTickets = [];
let photoTickets = [];
let tickets = [];
let doImport = true;
let importItems = [];
let importId = 0;
let paintings = [
          {id: 0, path: '../static/images/self.jpg', likes: 0},
          {id: 1, path: '../static/images/earth.jpg', likes: 0},
          {id: 2, path: '../static/images/smoothies.jpg', likes: 0},
          {id: 3, path: '../static/images/violin.jpg', likes: 0},
          {id: 4, path: '../static/images/marblev.jpg', likes: 0},
          {id: 5, path: '../static/images/bird.jpg', likes: 0},
       ];
let photos = [
          {id: 0, path: '../static/images/itsaboy.jpg', likes: 0},
          {id: 1, path: '../static/images/portia.jpg', likes: 0},
          {id: 2, path: '../static/images/christmas1.jpg', likes: 0},
          {id: 3, path: '../static/images/christmas2.jpg', likes: 0},
          {id: 4, path: '../static/images/christmas3.jpg', likes: 0},
          {id: 5, path: '../static/images/vonnie1.jpg', likes: 0},
          {id: 6, path: '../static/images/vonnie2.jpg', likes: 0},
          {id: 7, path: '../static/images/vonnie3.jpg', likes: 0},
          {id: 8, path: '../static/images/ellisisland.jpg', likes: 0},
          {id: 9, path: '../static/images/green.jpg', likes: 0},
          {id: 10, path: '../static/images/cathedral.jpg', likes: 0},
          {id: 11, path: '../static/images/vonniev.jpg', likes: 0},
       ];

// app.get('/api/tickets', (req, res) => {
//   res.send(tickets);
// });
app.get('/api/paintingTickets', (req, res) => {
  res.send(paintingTickets);
});
app.get('/api/photoTickets', (req, res) => {
  res.send(photoTickets);
});
// app.get('/api/paintings', (req, res) => {
//   res.send(paintings.path);
// });
// app.get('/api/photos', (req, res) => {
//   res.send(photos.path);
// });
// app.post('/api/tickets', (req, res) => {
//   id = id + 1;
//   let ticket = {id:id, name:req.body.name, problem: req.body.problem};
//   tickets.push(ticket);
//   res.send(ticket);
// });
app.post('/api/paintingTickets', (req, res) => {
  id = id + 1;
  let paintingTicket = {id:id, name:req.body.name, problem: req.body.problem};
  paintingTickets.push(paintingTicket);
  res.send(paintingTicket);
});
app.post('/api/photoTickets', (req, res) => {
  id = id + 1;
  let photoTicket = {id:id, name:req.body.name, problem: req.body.problem};
  photoTickets.push(photoTicket);
  res.send(photoTicket);
});

app.delete('/api/paintingTickets/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = paintingTickets.map(paintingTicket => { return paintingTicket.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that ticket doesn't exist");
    return;
  }
  paintingTickets.splice(removeIndex, 1);
  res.sendStatus(200);
});
app.delete('/api/photoTickets/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = photoTickets.map(photoTicket => { return photoTicket.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that ticket doesn't exist");
    return;
  }
  photoTickets.splice(removeIndex, 1);
  res.sendStatus(200);
});



// app.get('/api/photos', (req, res) => {
//   res.send(photos);
// });

// app.post('/api/photos', (req, res) => {
//   id = id + 1;
//   let photo = {id:id, likes:req.body.likes};
//   photos.push(photo);
//   console.log(photo.priority);
//   res.send(photo);
//   console.log(photo);
// });

// app.delete('/api/photos/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   let removeIndex = photos.map(photo => { return photo.id; }).indexOf(id);
//   if (removeIndex === -1) {
//     res.status(404).send("Sorry, that item doesn't exist");
//     return;
//   }
//   items.splice(removeIndex, 1);
//   res.sendStatus(200);
// });

app.put('/api/photos/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = photos.map(photo => { return photo.id; });
  let index = itemsMap.indexOf(id);
  let photo = photos[index];
  photo.likes = req.body.likes;
  
  res.send(photo);
  console.log(photo);
});
app.put('/api/paintings/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = paintings.map(painting => { return painting.id; });
  let index = itemsMap.indexOf(id);
  let painting = paintings[index];
  painting.likes = req.body.likes;
  
  res.send(painting);
  console.log(painting);
});


app.listen(3000, () => console.log('Server listening on port 3001!'))
