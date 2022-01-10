import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  // const blogs = props.blogs;
  return (
    <div className="blog-list">
      <h2>All Blogs 💙</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" href="/" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p> Written By {blog.author} </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
