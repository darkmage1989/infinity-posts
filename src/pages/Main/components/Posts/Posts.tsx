import { useState } from "react";
import { Data } from "../../../../../interfaces/DataInterface";
import { useGetPostsApiQuery } from "../../../../redux/apis/postsApi";
import UserPost from "../UserPost/UserPost";
import style from "./Posts.module.css";
const Posts = () => {
  const { data, isLoading, error } = useGetPostsApiQuery(null);
  const isEmptyList = !isLoading && !data;
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
      {data.map((post: Data) => (
        <UserPost key={post.id} post={post} />
      ))}
    </>
  );
};

export default Posts;
