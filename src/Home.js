import { useState } from 'react';

const Home = () => {
  // let writer = 'stranger';
  const [writer, setWriter] = useState('stranger');
  const [age, setAge] = useState(100);

  const handleClick = () => { 
    setWriter('kim');
    setAge(200);
  }

  const handleClickAgain = (name) => { 
    console.log(`hello ${name}!`);
  }

  return ( 
    <div className="home">
      <h2>Hompage</h2>
      <p>{writer} is {age} years old 😁</p>
      <button onClick={ handleClick } type="button">Click Me!</button>
      <button onClick={ (e) => handleClickAgain('kim',e) } type="button">Click Me! Again!</button>
    </div>
   );
}
 
export default Home;