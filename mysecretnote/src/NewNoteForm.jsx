import { useState } from "react";

export function NewNoteForm({onSubmit}){
  const[newNote, setNewNote] = useState("");
  const d= new Date();

  function handleSubmit(e){
     e.preventDefault();
     if(newNote === "") return
     onSubmit(newNote);
     setNewNote("");

  }


  return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label htmlFor="note">New Note</label>
    <textarea className="area" 
    rows={15}
    value={newNote} 
    onChange={e => setNewNote(e.target.value)}
    
    id="note">
      Type here
    </textarea>
    <button className="btn" >Add</button>
  
      
    </div>
    </form>
  )
}