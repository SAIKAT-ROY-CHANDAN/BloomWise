import { baseApi } from "./baseApi";

const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createNewPost: builder.mutation({
            query: ({ newPost, token }) => {
                console.log(newPost, token);
                return {
                    url: 'post/create',
                    method: 'POST',
                    body: newPost,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type' : 'application/json'
                    }
                }
            },
            invalidatesTags: ['Posts']
        }),
        getNewPosts: builder.query({
            query: () => {
                return {
                    url: 'post/',
                }
            }
        }),
        getUserOwnPosts: builder.query({
            query: ({ token, page, limit }) => {
                return {
                    url: 'post/user',
                    params: { page, limit },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
            providesTags: ['Posts'],
        }),

    })
})

export const {
    useCreateNewPostMutation,
    useGetNewPostsQuery,
    useGetUserOwnPostsQuery
} = postApi