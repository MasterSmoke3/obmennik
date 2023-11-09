const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

app.post('/upload', upload.single('fileInput'), (req, res) => {
  // Обработка загрузки файла на сервер
  // ...
  res.sendStatus(200);
});

app.get('/files', (req, res) => {
  // Получение списка файлов
  // ...
  res.json(files);
});

app.get('/sort', (req, res) => {
  const sortOption = req.query.option;
  // Сортировка файлов по выбранному параметру
  // ...
  res.json(sortedFiles);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});