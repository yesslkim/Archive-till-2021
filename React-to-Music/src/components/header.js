import React from 'react';

const Header = ({libraryStatus,setLibraryStatus}) =>{
  return (
    <header className="header">
      <h1>React to Music</h1>
      <button type="button" onClick={()=>{setLibraryStatus(!libraryStatus)}}>
      {libraryStatus ? 'Close' : 'Library'}
      </button>
    </header>
  )
}

export default Header;