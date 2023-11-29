const express = require('express');
const path = require('path');

const app = express();
const staticFilesPath = path.resolve(__dirname, './public');
app.use('/', express.static(staticFilesPath));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
