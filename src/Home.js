import { useState } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'First blog! 😎', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Hello There! 😉', body: 'lorem ipsum...', author: 'kim', id: 2},
    { title: 'Web Tips 🏃‍♀️🏃‍♀️', body: 'lorem ipsum...', author: 'lee', id: 3}
  ]);


  return ( 
    <div className="home">
      {blogs.map(blog => (
        <a className="blog-preview" href="/" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Written By { blog.author} </p>
        </a>
      )) }
    </div>
   );
}
 
export default Home;