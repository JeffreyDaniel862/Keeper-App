import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[note, setNote] = useState([]);

  function AddNote(newnote){
    setNote(prevNote => {
      return [...prevNote, newnote]
    })
  }

  function DeleteNote(id){
    setNote(prevNote => {
      return prevNote.filter((notes, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote}/>
      {note.map((notesitem, index) => {
      return ( <Note key={index} id={index} title= {notesitem.title} content = {notesitem.content} onDel={DeleteNote}/>)
      })}
      
      <Footer />
    </div>
  );
}

export default App;
