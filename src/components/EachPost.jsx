import { Link } from "react-router-dom";

const EachPost = (props) => {
  const { title, text, id } = props;

  return (
    <section className="Post border-b border-grey-500 pb-md">
      <h3>
        <Link className="text-wisteria underline" to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p className="text-black">{text}</p>
    </section>
  );
};

export default EachPost;
