const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
