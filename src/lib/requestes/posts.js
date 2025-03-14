import axiosInstance from "../axios/axios"

export const fetchPosts = async () =>{
    const response = await axiosInstance.get('/posts')

    return response.data
}