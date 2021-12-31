const BlogList = ({ blogs, handleDelete }) => {
  // const blogs = props.blogs;
  return (
    <div className="blog-list">
      <h2>All Blogs 💙</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" href="/" key={blog.id}>
          <h3>{blog.title}</h3>
          <p> Written By {blog.author} </p>
          <button onClick={() => handleDelete(blog.id)} type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
