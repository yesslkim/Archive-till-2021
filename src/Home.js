import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("kim");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   console.log("🙄💜", name);
  // }, [name]);

  // useEffect(() => {
  //   console.log("처음 렌더링");
  //   return () => {
  //     console.log("name 바뀌었당!");
  //   };
  // }, [name]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />}
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
