import React from 'react';
import LibrarySong from './librarySong';

 const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs}) =>{
   return(
     <div className="music-library">
       <h2>Library</h2>
       <div className="library">
         {
           songs.map(song => <LibrarySong key={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>)
         }
       </div>
     </div>
   )
 }

 export default Library;