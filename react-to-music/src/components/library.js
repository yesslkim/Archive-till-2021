import React from 'react';
import LibrarySong from './librarySong';

 const Library = ({songs, setCurrentSong, audioRef, isPlaying}) =>{
   return(
     <div className="music-library">
       <h2>Library</h2>
       <div className="library">
         {
           songs.map(song => <LibrarySong key={song.id} song={song} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}/>)
         }
       </div>
     </div>
   )
 }

 export default Library;