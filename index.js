const express = require('express');
const multer = require('multer');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

// Настройка multer для загрузки изображений
const upload = multer({ dest: 'uploads/' });

// Роут для обработки загрузки изображений
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(chalk.green('Изображение успешно загружено!'));
    res.send('Изображение загружено');
});

// Обработка аргументов командной строки
if (process.argv[2] === 'check') {
    console.log('This app is worked');
    process.exit(0); // Выходим из процесса после вывода сообщения
}

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});