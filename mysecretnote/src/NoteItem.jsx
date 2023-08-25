export function NoteItem({id, title, deleteNote}){
    const date = new Date().toDateString();


  
    return(
        <div>
        <li>
                
                <div >
                {date}
               <h1>           

               </h1>
                </div>
                
               {title}
              
       
          
              
              

               </li>
                { <button onClick={()=>deleteNote(id)} className="btn btn-danger">Delete</button> }
               </div>
                
    )


}