const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../data/db.json');

router.get('/api/notes', (req, res) => {
  res.send('hello');
  res.json( {notes} );
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  });

  module.exports = router;