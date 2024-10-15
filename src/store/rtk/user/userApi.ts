import { api } from "../../service/api";

export const user = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/posts/",
      }),
      transformResponse: (response: { id: number; title: string }[]) =>
        response.map((user) => {
          return { label: user.title.replace(/ .*/, ""), value: user.id };
        }),
      // transformErrorResponse: (response: { status: string | number }) => {
      //   return response.status;
      // },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = user;
