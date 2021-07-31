const router = require('express').Router();
const { createNewNote, validateNote, findById } = require('../../lib/notes');
const notes  = require('../../data/db.json');
const generateUniqueId = require('generate-unique-id');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  res.json(notes);
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
  req.body.id = generateUniqueId();
  console.log(req.body);
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
    console.log(notes);
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  });

  router.delete('/notes/:id', (req,res) => {


    const newArray = notes.filter((note) =>{
     
      if(req.params.id === note.id){
        return false;
      } else {
        return true
      }

      



    });
    console.log(newArray);

    fs.writeFileSync(
      path.join(__dirname, '../../data/db.json'),
      JSON.stringify(newArray)

  );
    res.json(newArray);
  });

  module.exports = router;