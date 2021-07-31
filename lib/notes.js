const fs = require('fs');
const path = require('path');
const generateUniqueId = require('generate-unique-id');


function findById(id, notes) {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
  }

function createNewNote(body, notes) {
    const id = generateUniqueId();
    console.log(id);
    const note= body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify([... notes] )
    );
      return note;
  }

 

function validateNote(note) {
      if(!note.title || typeof note.title !== 'string') {
          return false;
      }
    if(!note.text || typeof note.text !== 'string') {
      return false;
  }
  return true

};

module.exports = {
    createNewNote,
    findById,
    validateNote
};