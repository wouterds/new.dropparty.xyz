import axios from 'axios';

const FileApiProxy = async (request, response) => {
  const { id } = request.params;
  const fileId = id.split('.')[0];

  const apiResponse = await axios({
    method: 'get',
    url: `https://staging-api.dropparty.xyz/files.get?id=${fileId}`,
    responseType: 'stream',
  });

  if (apiResponse.status !== 200) {
    console.log('Not 200');
    response.status(apiResponse.status);
    response.send();
    return;
  }

  response.set({
    'Content-Type': apiResponse.headers['content-type'],
    'Content-Length': apiResponse.headers['content-length'],
    'Cache-Control': 'max-age=2592000',
  })

  const stream = apiResponse.data;
  stream.pipe(response, { end: false });
  stream.on('end', () => {
    response.end();
  });
};

module.exports = FileApiProxy;
