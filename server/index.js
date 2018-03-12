import path from 'path';
import express from 'express';
import ServeStatic from 'serve-static';
import AppLoader from './app-loader';

const app = express();

app.use(ServeStatic(path.join(__dirname, './../public')));
app.use(AppLoader);

app.listen(3000);
