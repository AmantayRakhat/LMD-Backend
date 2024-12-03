const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require("cors");

// Инициализация
dotenv.config();
connectDB();
const app = express(); // Создание экземпляра приложения Express

// Middleware
app.use(cors()); // Подключаем CORS после инициализации `app`
app.use(bodyParser.json());

// Маршруты
app.use('/api/auth', require('./routes/auth'));

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
