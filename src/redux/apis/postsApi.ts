import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: () => {
        return {
          url: `posts`,
        };
      },
    }),
  }),
});
export const { useGetPostsApiQuery } = postsApi;
