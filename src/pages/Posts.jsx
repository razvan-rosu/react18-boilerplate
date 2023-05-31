import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../utils/requests";

import MyCard from "component-library/packages/my-card";
import EachPost from "../components/EachPost";

import './Posts.css';

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
    <MyCard>
      <h1 className="text-900 leading-9 mb-lg">Posts</h1>
      <ul className="List">
        {allPosts.map((item) => {
            return (
              <li className="List-item relative mb-lg pl-lg text-meadow" key={`post-${item.postId}`}>
                <EachPost
                  id={item.id}
                  title={item.title}
                  text={item.body}
                />
              </li>
            );
          })
        }
        <li className="List-item relative mb-lg pl-lg text-meadow" key={"post-1337"}>
          <EachPost
            id={1337}
            title="Post without comments"
            text="This post doesn&apos;t have any comments." />
        </li>
      </ul>
    </MyCard>
  );
};

export default Posts;
