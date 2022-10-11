import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl = '', headers = {} }) =>
  async ({ url, method, data }, { _, getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    try {
      const result = await axios({
        url: baseUrl + url,
        method: method,
        data: data,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token
    //   // headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ1MjU0NGNkNzI3YzAwMTY4OTI1YjEiLCJpYXQiOjE2NjU0Nzc0NTZ9.wDwyMvFwhgfaQoZOpAu-Pl5k6-a8BAtTzoTENkaJxiY`
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  tagTypes: ['Contacts'],
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/contacts', method: 'get' }),
      providesTags: ['Contacts'],
      keepUnusedDataFor: 0,
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'post',
        data: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'delete' }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: (id, { name, number }) => ({
        url: `/contacts/${id}`,
        method: 'patch',
        data: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
