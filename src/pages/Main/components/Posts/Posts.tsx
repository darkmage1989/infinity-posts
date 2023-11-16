import { useEffect, useState } from "react";
import { Data } from "../../../../../interfaces/DataInterface";
import { useInView } from "react-intersection-observer";
import { useGetPostsApiQuery } from "../../../../app/shared/apis/postsApi";
import UserPost from "../UserPost/UserPost";
const Posts = () => {
  const [firstPost, setFirstPost] = useState(0);
  const { data, isLoading, error } = useGetPostsApiQuery({
    start: firstPost,
  });
  const isEmptyList = !isLoading && !data;
  const { ref: refFirstPost, inView: inViewFirstPost } = useInView({
    threshold: 0,
  });

  const { ref: refLastPost, inView: inViewLastPost } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inViewFirstPost) {
      setFirstPost((prev) => (prev > 0 ? prev - 2 : prev));
    }
  }, [inViewFirstPost]);

  useEffect(() => {
    if (inViewLastPost) {
      setFirstPost((prev) => prev + 2);
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
          <div key={post.id} ref={refFirstPost}>
            <UserPost post={post} />
          </div>
        ) : index === arr.length - 1 ? (
          <div key={post.id} ref={refLastPost}>
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
