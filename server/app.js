import fs from 'fs';
import path from 'path';
import { Router } from 'express';
import { renderToNodeStream } from 'react-dom/server';
import React from 'react';
import ReactApp from './../public/ssr';

const router = Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, './../public', 'index.html');

  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      throw err;
    }

    const [head, tail] = file.split('<!-- react-app -->');
    const reactElement = React.createElement(ReactApp);
    const stream = renderToNodeStream(reactElement);

    res.write(head);
    stream.pipe(res, { end: false });
    stream.on('end', () => {
      res.write(tail);
      res.end();
    });
  });
});

module.exports = router;
