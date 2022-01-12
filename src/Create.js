import { useState } from "react";

// const Create = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("kim");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const blog = { title, body, author };

//     console.log(blog);
//   };

//   return (
//     <div className="create">
//       <h2>Add a New Blog</h2>
//       <form className="blog-form" onSubmit={handleSubmit}>
//         <label htmlFor="">Blog Title: </label>
//         <input
//           type="text"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label htmlFor="">Blog body: </label>
//         <textarea
//           name=""
//           id=""
//           required
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         ></textarea>
//         <label htmlFor="">Blog author: </label>
//         <select
//           name=""
//           id=""
//           value={author}
//           onChange={(e) => {
//             setAuthor(e.target.value);
//           }}
//         >
//           <option value="kim">kim</option>
//           <option value="lee">lee</option>
//           <option value="park">park</option>
//         </select>
//         <button type="submit">Add Blog</button>
//       </form>
//     </div>
//   );
// };

const Create = () => {
  const [value, setValue] = useState({ title: "", body: "", author: "" });

  const handleChange = (e) => {
    const updateValue = e.target.value;
    setValue({ ...value, [e.target.name]: updateValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form className="blog-form" onSubmit={handleSubmit}>
        <label htmlFor="blog-title">Blog Title: </label>
        <input
          id="blog-title"
          type="text"
          name="title"
          required
          onChange={handleChange}
        />
        <label htmlFor="blog-body">Blog body: </label>
        <textarea
          name="body"
          id="blog-body"
          required
          onChange={handleChange}
        ></textarea>
        <label htmlFor="blog-author">Blog author: </label>
        <select name="author" id="blog-author" onChange={handleChange}>
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
