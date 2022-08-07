import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("게시글이 삭제되었습니다. 👼");
      history.push("/");
    });
  };

  return (
    <article className="blog-detail">
      {error && <p className="err-msg">{error}</p>}
      {isLoading && <p className="loading-msg">Loading...</p>}
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <strong>wriiten by {blog.author}</strong>
          <p>{blog.body}</p>
          <button type="button" onClick={handleClick}>
            Delete
          </button>
        </>
      )}
    </article>
  );
};

export default BlogDetails;
