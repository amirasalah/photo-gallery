import axios, { AxiosResponse } from 'axios'

import { BASE_URL } from '../constants'

export const getPosts = async (): Promise<AxiosResponse<IGetPostsResponse>> => {
    return await axios
        .get(`${BASE_URL}/posts?offset=0&limit=15&api_key=${process.env.REACT_APP_API_KEY}`)
        .catch(error => {
            throw new Error(error)
        })
}

export const getImageData = async (mediaID: string): Promise<AxiosResponse<IGetImageResponse>> => {
    return await axios.get(`${BASE_URL}/medias/${mediaID}?&api_key=${process.env.REACT_APP_API_KEY}`).catch(error => {
        throw new Error(error)
    })
}

export const getUserData = async (userName: string): Promise<AxiosResponse<IGetUserResponse>> => {
    return await axios.get(`${BASE_URL}/users/${userName}?&api_key=${process.env.REACT_APP_API_KEY}`).catch(error => {
        throw new Error(error)
    })
}
