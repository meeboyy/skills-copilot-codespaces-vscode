// Create web server
// 1. Import express
const express = require('express');
// 2. Create Express app
const app = express();
// 3. Define port
const port = 3000;
// 4. Define route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// 6. Open browser and go to http://localhost:3000
// 7. To stop the server, press Ctrl + C in the terminal