import path from 'path';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import ServeStatic from 'serve-static';
import AppLoader from './app-loader';

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(ServeStatic(path.join(__dirname, './../public')));
app.use(AppLoader);

app.listen(3000);
