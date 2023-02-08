const EachComment = (props) => {
  const { name, email, quote } = props;

  return (
    <section className="comment">
      <blockquote className="comment__author">
        {quote}
      </blockquote>
      <cite>by ${name} / email: ${email}</cite>
    </section>
  );
};

export default EachComment;
