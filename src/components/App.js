import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import TodoList from "./TodoList";
import Addnote from "./addNote";

function App() {
  let [notes, addCard] = useState([])

  function onDelete(id) {
    addCard(prevCard =>{
      return prevCard.filter((item, index) =>{
        return index !== id
      })
    })
  }


  function includeNote(note) {
    addCard(prevCard => {
      console.log(note);
      return ([...prevCard,note]);
    })
  }
  
  return (
    <div id="mainContainer">
      <Header />
      <Addnote
        onAdd={includeNote}
      />
      <div className="cardContainer">
        {notes.map((note,index) => {
          return (<TodoList key={index} id={index} title={note.note.title} content={note.note.content} clicked={onDelete}/>)
        })}
      </div>
      <Footer />
    </div>
  )
}
export default App;