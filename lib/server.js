import express from 'express';
import serverRender from 'renderers/server';

import config from './config';

import { data } from './blog-data';

// const express = require('express');
// const config = require('./config');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
