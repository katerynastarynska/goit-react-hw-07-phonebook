import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64aebc77c85640541d4d9eb6.mockapi.io' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: (contact) => ({
                url: '/contacts',
                method: 'POST',
                body: contact,
            }),

            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    })
})
export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi

