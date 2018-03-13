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

// App with router
const router = express.Router();
router.get('/', AppLoader);

// App
app.use('/', router);

// Static files
app.use(ServeStatic(path.join(__dirname, './../public')));

// Fallback
app.use('/', AppLoader);

// Start express and listen on port 3000
app.listen(3000);
