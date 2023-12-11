import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://heliverse-pi.vercel.app/api/",
    baseUrl: "https://accredian-backend-task-lake.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["user", "singleUser", "team"],
  endpoints: () => ({}),
});
