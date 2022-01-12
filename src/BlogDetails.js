import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <article className="blog-detail">
      {error && <p className="err-msg">{error}</p>}
      {isLoading && <p className="loading-msg">Loading...</p>}
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <strong>wriiten by {blog.author}</strong>
          <p>{blog.body}</p>
        </>
      )}
    </article>
  );
};

export default BlogDetails;
