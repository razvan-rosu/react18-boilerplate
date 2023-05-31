import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import ErrorBoundary from "../utils/ErrorBoundary";
import { fetchComments } from "../utils/requests";
import MyCard from "component-library/packages/my-card";
import EachComment from "../components/EachComment";

const Comments = () => {
  const { id } = useParams();
  const results = useQuery(["comments", id], fetchComments);

  if (results.isLoading) {
    return (
      <p className="loader">
        loading...
      </p>
    );
  }

  if (results.isError) {
    return <h1>Error, your app crashed!</h1>;
  }

  const allComments = results.data;

  return (
    <MyCard>
      <Link className="text-wisteria text-500 leading-5 underline mb-lg" to='/posts'>&lt; Back to listing</Link>
      <h1 className="text-900 leading-9 mb-lg">Comments for PostID {id}</h1>

      {!allComments.length ? (
        <h1>No Comments found</h1>
      ) : (
        allComments.map((item) => {
          return (
            <EachComment
              key={item.postId}
              name={item.name}
              quote={item.body}
              email={item.email}
            />
          );
        })
      )}
    </MyCard>
  );
};

function CommentsErrorBoundary(props) {
  return (
    <ErrorBoundary errorComponent={
      <section>
        <h1>Error Page</h1>
        <p>Your app has crashed!</p>
        <Link to="/">Back to homepage</Link>
      </section>
    }>
      <Comments {...props} />
    </ErrorBoundary>
  );
}

export default CommentsErrorBoundary;
