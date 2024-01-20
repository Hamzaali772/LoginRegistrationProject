import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/user' }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (userData) =>{
        return {
          url:'/register',
          method:'POST',
          body:userData,
          headers:{
              'Content-type':'application/json'
            }
        }
      },
    }),
    userLogin: builder.mutation({
      query: (userData) =>{
        return {
          url:'/login',
          method:'POST',
          body:userData,
          headers:{
              'Content-type':'application/json'
            }
        }
      },
    }),
    userLogged: builder.query({
      query: (token) =>{
        return {
          url:'/loggeduser',
          method:'GET',
          headers:{
              'authorization':`Bearer ${token}`
            }
        }
      },
    }),
    // userUpdateData: builder.mutation({
    //   query: ({ id, formData }) => {
    //     const formDataObj = new FormData();
    //     Object.entries(formData).forEach(([key, value]) => {
    //       formDataObj.append(key, value);
    //     });
    
    //     console.log(formDataObj.get('image')); // Make sure 'image' is being appended correctly
    
    //     return {
    //       url: `/update/${id}`,
    //       method: 'PUT',
    //       body: formDataObj,
    //       headers: {
    //         // Set the Content-Type header for file uploads
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     };
    //   },
    // }),
    userDelete: builder.mutation({
      query: (id) =>{
        return {
          url:`/delete/${id}`,
          method:'DELETE',
        }
      },
    }),
    changePassword: builder.mutation({
      query: ({id,pass,token}) =>{
        return {
          url:`/passwordchange/${id}`,
          method:'put',
          headers: {
            authorization: `Bearer ${token}`,
          },
          body:pass
        }
      },
    }),
  }),
})

export const { useUserRegisterMutation, useUserLoginMutation ,useUserLoggedQuery ,useUserDeleteMutation ,useChangePasswordMutation } = userApi