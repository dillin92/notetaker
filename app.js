const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req,res) => {
res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req,res) => {
    let results = res.sendFile(path.join(__dirname, '/db/db.json'));
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});