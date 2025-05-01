const express = require('express');
const cors = require('cors'); // Импортируем cors
const axios = require('axios');

const app = express();
const PORT = 8000;

// Middleware для парсинга JSON
app.use(express.json());
app.use(cors()); // Включаем CORS

// Простой массив для хранения данных (вместо базы данных)
let feedbacks = [];

// Получить все элементы
app.get('/feedbacks', (req, res) => {
    res.json(feedbacks);
});

// Создать новый элемент
app.post('/feedbacks', (req, res) => {
    const newItem = {
        id: feedbacks.length + 1,
        feedback: req.body.feedback,
        info: req.body.text,
    };
    feedbacks.push(newItem);
    res.status(201).json(newItem);
});

// Обновить элемент по ID
app.put('/feedbacks/:id', (req, res) => {
    const item = feedbacks.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.feedback = req.body.feedback; // Исправлено на правильное поле
    item.info = req.body.info; // Исправлено на правильное поле
    res.json(item);
});

// Удалить элемент по ID
app.delete('/feedbacks/:id', (req, res) => {
    const itemIndex = feedbacks.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex < 0) return res.status(404).send('Item not found');

    feedbacks.splice(itemIndex, 1); // Исправлено на правильное имя массива
    res.status(204).send();
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});