const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello Jenkins!', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(\`App listening at http://localhost:\${port}\`);
  });
}

module.exports = app;
