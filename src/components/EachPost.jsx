import { Link } from "react-router-dom";

const EachPost = (props) => {
  const { title, text, id } = props;

  return (
    <section className="post">
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>{text}</p>
    </section>
  );
};

export default EachPost;
