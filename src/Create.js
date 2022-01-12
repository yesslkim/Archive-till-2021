import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("kim");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form className="blog-form" onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog body: </label>
        <textarea
          name=""
          id=""
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog author: </label>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="kim">kim</option>
          <option value="lee">lee</option>
          <option value="park">park</option>
        </select>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
