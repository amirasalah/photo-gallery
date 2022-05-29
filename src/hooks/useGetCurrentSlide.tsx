import React from 'react'

import { SLIDER_INTERVAL } from '../constants'
import useFetchPosts from './useFetchPosts'

const useGetCurrentSlide = () => {
    const { data, isLoading, isError } = useFetchPosts()
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0)

    React.useEffect(() => {
        //Resetting the slide index when the data is loaded
        const numberOfPosts = data?.data.response.posts.length
        if (currentSlideIndex === numberOfPosts - 1) {
            setCurrentSlideIndex(0)
        }

        const intervalId = setInterval(() => {
            setCurrentSlideIndex(currentSlideIndex + 1)
        }, SLIDER_INTERVAL)

        return () => clearInterval(intervalId)
    }, [currentSlideIndex, data?.data.response])

    if (isLoading || isError || !data?.data) return null

    return data.data.response.posts[currentSlideIndex]
}

export default useGetCurrentSlide
