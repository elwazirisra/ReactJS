import {NoteItem} from "./NoteItem";
export function Notes({deleteNote, notes}){
  return(
    <>
           {notes.length ===0 && [<h2 className="h2">No notes</h2>]}
          {notes.length !==0 && [<h2 className="h2">To view your notes hover over the cards!</h2>]}
  
      <ul className="list">
        
   
         
          
         
          {notes.map(note=>{
             return(
                <span className="card" >
                 <NoteItem
                 {...note}
                 key={note.id}
                deleteNote={deleteNote}
                 />
                 </span>
             )
           
          })}
            
      </ul>
 
  
      </>
    
  )
}