const noteTitleEl = document.querySelector('#title');
const noteBodyEl= document.querySelector('#text');
const displayArea = document.querySelector('#note-list');

const printResults = note => {
    let note = { noteTitleEl, noteBodyEl }
    console.log(note);
  
    const noteHTML = note.map(({ noteTitleEl, noteBodyEl}) => {
      return `
    <div class="note">
        <h1 class="title">${noteTitleEl}</h1>
        <p>${noteBodyEl}</p>
    </div>
      `;
    });
    displayArea.innerHTML = noteHTML;

};

const getNotes = (noteData = {}) => { 
    let queryUrl = '/api/notes?';

    Object.entries(noteData).forEach(([key, value]) => {
        queryUrl += `${key}=${value}&`;
});
fetch(queryUrl)
.then(response => {
  if (!response.ok) {
    return alert('Error: ' + response.statusText);
  }
  return response.json();
})
.then(noteData => {
  console.log(noteData);
  printResults(noteData);
    });
};


getNotes();