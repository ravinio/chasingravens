import React, { useState, useEffect, useCallback } from 'react'
import { client } from './client'
import { cleanUpAbout, cleanUpCarouselSllides, cleanUpBlogPost, cleanUpExpandedBlog } from './helpers'

export const Context = React.createContext()

export const Provider = (props) => {
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)
    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([])
    const [isBlogLoading, setIsBlogLoading] = useState(false)
    const [blogPost, setBlogPost] = useState([])
    const [expandedBlog, setExpandedBlog] = useState({})
    const [isExpandedBlogLoading, setIsExpandedBlogLoading] = useState(false) 

    //About
    const saveAboutData = useCallback((rawData) => {
        const cleanAboutData = cleanUpAbout(rawData)
        setAbout(cleanAboutData)
    }, [])

    const getAbout = useCallback( async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntry('4UqH1glPmT4ew1DmORtLKr')
            if (response) {
                saveAboutData(response)
            } else {
                setAbout({})
            }
            setIsAboutLoading(false)
        } catch (error) {
            console.log(error)
            setIsAboutLoading(false)
        }
    }, [saveAboutData])

    useEffect(()=> {
        getAbout()
    }, [getAbout] )


    //Carousel
    const saveCarouselData = useCallback((rawData) => {
        const cleanCarouselData = cleanUpCarouselSllides(rawData)
        setCarouselSlides(cleanCarouselData)
    }, [])

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'blogCarousel' })
            const responseData = response.items
            if (responseData) {
                saveCarouselData(responseData)
            } else {
                setCarouselSlides([])
            }
            setIsCarouselLoading(false)
        } catch (error) {
            console.log(error)
            setIsCarouselLoading(false)
        }
    }, [saveCarouselData])

    useEffect(() => {
        getCarouselSlides()
    }, [getCarouselSlides])


    //Blog Post
    const saveBlogData = useCallback((rawData) => {
        const cleanBlogData = cleanUpBlogPost(rawData)
        setBlogPost(cleanBlogData)
    }, [])

    const getBlogPost = useCallback(async () => {
        setIsBlogLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'blogPost' })
            const responseData = response.items
            if (responseData) {
                saveBlogData(responseData)
            } else {
                setBlogPost([])
            }
            setIsBlogLoading(false)
        } catch (error) {
            console.log(error)
            setIsBlogLoading(false)
        }
    }, [saveBlogData])

    useEffect(() => {
        getBlogPost()
    }, [getBlogPost])
    

    //Expanded Blog
    const saveExpandedBlogData = useCallback((rawData) => {
        const cleanExpandedBlogData = cleanUpExpandedBlog(rawData)
        setExpandedBlog(cleanExpandedBlogData)
    }, [])

    const getExpandedBlog = useCallback( async () => {
        setIsExpandedBlogLoading(true)
        try {
            const response = await client.getEntry({ content_type: 'blogPost' })
            if (response) {
                saveExpandedBlogData(response)
            } else {
                setExpandedBlog({})
            }
            setIsExpandedBlogLoading(false)
        } catch (error) {
            console.log(error)
            setIsExpandedBlogLoading(false)
        }
    }, [saveExpandedBlogData])

    useEffect(()=> {
        getExpandedBlog()
    }, [getExpandedBlog] )


    const contextData = {
        about,
        isAboutLoading,
        carouselSlides,
        isCarouselLoading,
        blogPost,
        isBlogLoading,
        expandedBlog,
        isExpandedBlogLoading
    }

    return (
        <Context.Provider value={contextData}>
            {props.children}
        </Context.Provider>
    )
}