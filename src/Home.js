import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First blog! 😎", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Hello There! 😉", body: "lorem ipsum...", author: "kim", id: 2 },
    { title: "Web Tips 🏃‍♀️🏃‍♀️", body: "lorem ipsum...", author: "lee", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
