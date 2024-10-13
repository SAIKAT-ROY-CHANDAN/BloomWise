import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        editProfile: builder.mutation({
            query: ({ formData, token, userId }) => {
                console.log(formData, token, userId);
                return {
                    url: `auth/update/${userId}`,
                    method: 'PUT',
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
        }),
        
    })
})

export const {
    useEditProfileMutation,
    useLoginMutation,
} = authApi