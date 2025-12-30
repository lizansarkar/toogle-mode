const http = require('http');
http.get('http://localhost:5174/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.slice(0, 8000));
  });
}).on('error', (err) => {
  console.error('ERR', err.message);
  process.exit(1);
});
