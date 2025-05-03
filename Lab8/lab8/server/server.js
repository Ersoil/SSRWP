const express = require('express');
const cors = require('cors'); 
const axios = require('axios');

const app = express();
const PORT = 8000;


app.use(express.json());
app.use(cors()); 


let feedbacks = [];
let users = [
    {
        id:0,
        User: "Example",
        Type: "Admin",
        Email: "example@mail.com"
    }
];


app.get('/feedbacks', (req, res) => {
    res.json(feedbacks);
});
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newItem = {
        id:Date.now()+Math.random(),
        User: req.body.name,
        Type: req.body.type,
        Email: req.body.email,
    };
    users.push(newItem);
    res.status(201).json(newItem);
});

app.post('/feedbacks', (req, res) => {
    const newItem = {
        id: feedbacks.length + 1,
        feedback: req.body.feedback,
        info: req.body.text,
    };
    feedbacks.push(newItem);
    res.status(201).json(newItem);
});



app.put('/users/:id', (req, res) => {
    const item = users.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.User= req.body.name,
    item.Type= req.body.type,
    item.Email= req.body.email,
    res.json(item);
});

app.put('/users/:id', (req, res) => {
    const item = users.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.feedback = req.body.feedback; 
    item.info = req.body.info; 
    res.json(item);
});


app.delete('/feedbacks/:id', (req, res) => {
    const itemIndex = feedbacks.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex < 0) return res.status(404).send('Item not found');

    feedbacks.splice(itemIndex, 1); 
    res.status(204).send();
});

app.delete('/users/:id', (req, res) => {
    const itemIndex = users.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex < 0) return res.status(404).send('Item not found');

    feedbacks.splice(itemIndex, 1); 
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});