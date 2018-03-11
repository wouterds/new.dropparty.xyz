import path from 'path';
import Express from 'express';
import ServeStatic from 'serve-static';
import ReactApp from './app';

const express = Express();

express.use(ReactApp);
express.use(ServeStatic(path.join(__dirname, './../public')));

express.listen(3000);
