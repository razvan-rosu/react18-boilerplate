const EachComment = (props) => {
  const { name, email, quote } = props;

  return (
    <section className="Comment mb-lg pb-lg border-b border-grey-300">
      <blockquote className="comment__author">
        {quote}
      </blockquote>
      <cite>by ${name} / email: ${email}</cite>
    </section>
  );
};

export default EachComment;
