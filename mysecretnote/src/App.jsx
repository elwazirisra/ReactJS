import  './style.css';
import { useState } from 'react';
import { NewNoteForm } from './NewNoteForm';
import {Notes} from './Notes';
import { useEffect } from 'react';

import { Container } from 'react-bootstrap';


//anytime you wan t touse a current value pass in a function otherwise you can pass a value to the set in usestate

function App(){
const [notes, setNotes] = useState(()=>{
  const localValue= localStorage.getItem("ITEMS");
  if (localValue == null) return[]
  return JSON.parse(localValue)
});
const d = new Date();
useEffect(()=>{
  localStorage.setItem("ITEMS", JSON.stringify(notes))
},[notes] )

function addNote(title){
   setNotes(currentNotes =>{
     return[
       ...currentNotes, 
       {id: crypto.randomUUID(), title, date: d.toDateString() }
     ]
   })

}


function deleteNote(id){
  
   setNotes(currentNotes=>{
      return currentNotes.filter(note => note.id !== id)
   })
  
}

 return(
  
   <Container className='flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
       
       <NewNoteForm onSubmit={addNote}/>
      <Notes deleteNote= {deleteNote} notes={notes}/>
    
       </Container>
     
 
 )
}
export default App;
