const BlogList = ({ blogs, handleDelete }) => {
  // const blogs = props.blogs;
  return (
    <div className="blog-list">
      <h2>All Blogs 💙</h2>
      {blogs.map((blog) => (
        <a className="blog-preview" href="/" key={blog.id}>
          <h3>{blog.title}</h3>
          <p> Written By {blog.author} </p>
          <button onClick={() => handleDelete(blog.id)}> Delete </button>
        </a>
      ))}
    </div>
  );
};

export default BlogList;
