const Home = () => {
  const handleClick = (e) => { 
    console.log('testing 😎')
    e.target.style.backgroundColor = 'yellow';
  }

  const handleClickAgain = (name) => { 
    console.log(`hello ${name}!`);
  }

  return ( 
    <div className="home">
      <h2>Hompage</h2>
      <button onClick={ handleClick } type="button">Click Me!</button>
      <button onClick={ (e) => handleClickAgain('kim',e) } type="button">Click Me! Again!</button>
    </div>
   );
}
 
export default Home;