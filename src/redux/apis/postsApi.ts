import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: ({ limit = 20, start = 0 }) => {
        return {
          url: `posts`,
          params: {
            _limit: limit,
            _start: start,
          },
        };
      },
    }),
    getPostByIdApi: builder.query({
      query: ({id}) => {
        return {
          url: `/posts/${id}`,
        };
      },
    }),
  }),
});
export const { useGetPostsApiQuery, useGetPostByIdApiQuery } = postsApi;
