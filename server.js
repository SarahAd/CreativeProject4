const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))


let items = [];
let id = 0;
let tickets = [];


app.get('/api/tickets', (req, res) => {
  res.send(tickets);
});

// app.get('/secret', (req, res) => {
//   res.send('Psst. You are being watched.\n');
// });

// app.get('/api/user/1', (req, res) => {
//   res.send({name: "Amy Caprietti", avatar: "/avatars/supergirl.jpg", role: "admin"});
// });

app.post('/api/tickets', (req, res) => {
  id = id + 1;
  let ticket = {id:id, name:req.body.name, problem: req.body.problem};
  tickets.push(ticket);
  res.send(ticket);
});

app.delete('/api/tickets/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = tickets.map(ticket => { return ticket.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that ticket doesn't exist");
    return;
  }
  tickets.splice(removeIndex, 1);
  res.sendStatus(200);
});


// setup some random data
let doImport = true;
let importItems = [];
let importId = 0;

app.get('/api/items', (req, res) => {
  res.send(items);
});

app.put('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = items.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = items[index];
  item.completed = req.body.completed;
  item.text = req.body.text;
  if (item.completed) {
    item.completedDate = Date.now();
  }
  // handle drag and drop re-ordering
  if (req.body.orderChange) {
    let indexTarget = itemsMap.indexOf(req.body.orderTarget);
    items.splice(index,1);
    items.splice(indexTarget,0,item);
  }
  res.send(item);
});

app.post('/api/items', (req, res) => {
  id = id + 1;
  let item = {id:id, text:req.body.text, completed: req.body.completed};
  if (item.completed) {
    item.completedDate = Date.now();
  }
  items.push(item);
  res.send(item);
});

app.delete('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = items.map(item => { return item.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  items.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
