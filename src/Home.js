import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First blog! 😎", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Hello There! 😉", body: "lorem ipsum...", author: "kim", id: 2 },
    { title: "Web Tips 🏃‍♀️🏃‍♀️", body: "lorem ipsum...", author: "lee", id: 3 },
  ]);

  const [name, setName] = useState("kim");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("🙄💜", name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
      <button
        onClick={() => {
          setName("lee");
        }}
      >
        UseEffect Button 😉
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
