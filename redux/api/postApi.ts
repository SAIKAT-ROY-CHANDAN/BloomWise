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
            },
            providesTags: ['Posts', 'Votes']
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
        upvotePost: builder.mutation({
            query: ({ token, id }) => ({
                url: `post/upvote/${id}`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['Votes'],
        })


    })
})

export const {
    useCreateNewPostMutation,
    useGetNewPostsQuery,
    useGetUserOwnPostsQuery,
    useUpvotePostMutation
} = postApi