import fs from 'fs';
import path from 'path';
import { renderToNodeStream } from 'react-dom/server';
import React from 'react';
import createMemoryHistory from 'history/createMemoryHistory'
import { parsePath } from 'history/PathUtils';

import ReactApp from './../public/ssr';

const AppLoader = (request, response) => {
  const filePath = path.join(__dirname, './../public', 'index.html');

  fs.readFile(filePath, 'utf8', (error, file) => {
    if (error) {
      console.error(error);
      return response.status(404).end();
    }

    const initialLocation = parsePath(request.url);
    const history = createMemoryHistory({
      initialEntries: [initialLocation],
    });

    const [head, tail] = file.split('<!-- react-app -->');
    const reactElement = React.createElement(ReactApp, { history: history });
    const stream = renderToNodeStream(reactElement);

    response.write(head);
    stream.pipe(response, { end: false });
    stream.on('end', () => {
      response.write(tail);
      response.end();
    });
  });
};

module.exports = AppLoader;
