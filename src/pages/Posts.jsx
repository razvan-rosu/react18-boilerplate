import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../utils/requests";

import EachPost from "../components/EachPost";

const Posts = () => {
  const results = useQuery(["posts"], fetchPosts);

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

  const allPosts = results.data;

  return (
    <section className="card">
      <h1>Posts</h1>
      <ul>
        {allPosts.map((item) => {
            return (
              <li key={item.postId}>
                <EachPost
                  id={item.id}
                  title={item.title}
                  text={item.body}
                />
              </li>
            );
          })
        }
        <li>
          <EachPost
            id={1337}
            title="Post without comments"
            text="This post doesn&apos;t have any comments." />
        </li>
      </ul>
    </section>
  );
};

export default Posts;
