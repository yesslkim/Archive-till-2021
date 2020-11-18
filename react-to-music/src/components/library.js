import React from 'react';
import LibrarySong from './librarySong';

 const Library = ({songs}) =>{
   return(
     <div className="music-library">
       <h2>Library</h2>
       <div className="library">
         {
           songs.map(song => <LibrarySong song={song}/>)
         }
         
       </div>
     </div>
   )
 }

 export default Library;