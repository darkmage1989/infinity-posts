import { useEffect, useRef, useState } from "react";
import { Data } from "../../../../../interfaces/DataInterface";
import { useInView } from "react-intersection-observer";
import { useGetPostsApiQuery } from "../../../../redux/apis/postsApi";
import UserPost from "../UserPost/UserPost";
const Posts = () => {
  const [fearstPost, setFearstPost] = useState(0);
  const { data, isLoading, error } = useGetPostsApiQuery({
    start: fearstPost,
  });
  const isEmptyList = !isLoading && !data;
  const { ref: firstPost, inView: inViewFirstPost } = useInView({
    threshold: 0,
  });

  const { ref: lastPost, inView: inViewLastPost } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewFirstPost) {
      setFearstPost((prev) => (prev > 0 ? prev - 5 : prev));
    }
  }, [inViewFirstPost]);

  useEffect(() => {
    if (inViewLastPost) {
      setFearstPost((prev) => prev + 5);
    }
  }, [inViewLastPost]);
  if (isLoading) {
    return <span>Загрузка</span>;
  }

  if (error) {
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <div>An error has occurred:</div>
          <div>{message}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  if (isEmptyList) {
    return <p>No users</p>;
  }
  return (
    <>
      {data.map((post: Data, index: number, arr: []) =>
        index === 0 ? (
          <div key={post.id} ref={firstPost}>
            <UserPost post={post} />
          </div>
        ) : index === arr.length - 1 ? (
          <div key={post.id} ref={lastPost}>
            <UserPost post={post} />
          </div>
        ) : (
          <div key={post.id}>
            <UserPost post={post} />
          </div>
        )
      )}
    </>
  );
};

export default Posts;
