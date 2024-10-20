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
            providesTags: ['Posts', 'Votes', 'Comments']
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
        }),
        addComment: builder.mutation({
            query: ({ token, id, commentText }) => {
                return {
                    url: `post/${id}/comments`,
                    method: 'POST',
                    body: { commentText },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['Comments']
        }),
        getComments: builder.query({
            query: ({ postId, token }) => {
                console.log(postId);
                return {
                    url: `post/${postId}/comments`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
            providesTags: ['Comments']
        }),
        editComment: builder.mutation({
            query: ({ token, postId, commentId, updatedText }) => {
                return {
                    url: `post/${postId}/comments/${commentId}`,
                    method: 'PUT',
                    body: { updatedText },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['Comments']
        }),
    })
})

export const {
    useCreateNewPostMutation,
    useGetNewPostsQuery,
    useGetUserOwnPostsQuery,
    useUpvotePostMutation,
    useAddCommentMutation,
    useGetCommentsQuery,
    useEditCommentMutation
} = postApi