import { marked } from 'marked'
import DOMPurify from 'dompurify'

export const getHTMLData = (rawData) => {
    const htmlString = marked(rawData)
    const sanitizedHTMLString = DOMPurify.sanitize(htmlString)
    return sanitizedHTMLString
}

export const cleanUpAbout = (rawData) => {
    const {sys, fields} = rawData
    const {id} = sys
    const aboutTitle = fields.title
    const aboutContent = getHTMLData(fields.content)
    const aboutImage = fields.image.fields.file.url
    let cleanAbout = { id, aboutTitle, aboutContent, aboutImage }

    return cleanAbout
}

export const cleanUpCarouselSllides = (rawData) => {
    const cleanSlides = rawData.map((slide) => {
        const {sys, fields} = slide
        const {id} = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        const slideBg = fields.image.fields.file.url
        const updatedSlide = {id, slideTitle, slideDescription, slideBg}
        return updatedSlide
    })

    return cleanSlides
}

export const cleanUpBlogPost = (rawData) => {
    const cleanPost = rawData.map((post) => {
        const {sys, fields} = post
        const {id} = sys
        const postTitle = fields.restaurantName
        const postLocationImg = fields.featureImage.fields.file.url
        const postFoodImg = fields.foodImage.fields.file.url
        const postDate = fields.date
        const postLocation = fields.location
        const postAtmosphere = fields.atmosphereRating
        const postFood = fields.foodRating
        const postService = fields.serviceRating
        const postValue = fields.valueRating
        const postOverall = fields.overallRating
        const postSink = fields.sinkRating
        const updatedPost = {id, postTitle, postLocationImg, postFoodImg, postDate, postLocation, postAtmosphere, postFood, postService, postValue, postOverall, postSink}
        return updatedPost
    })

    return cleanPost
}

export const cleanUpExpandedBlog = (rawData) => {
    const {sys, fields} = rawData
    const {id} = sys
    const postTitle = fields.restaurantName
    const postLocationImg = fields.locationImage.fields.file.url
    const postFoodImg = fields.foodImage.fields.file.url
    const postDate = fields.date
    const postLocation = fields.location
    const postAtmosphere = fields.atmosphereRating
    const postFood = fields.foodRating
    const postService = fields.serviceRating
    const postValue = fields.valueRating
    const postOverall = fields.overallRating
    const postSink = fields.sinkRating
    let cleanExpandedBlog = { id, postTitle, postLocationImg, postFoodImg, postDate, postLocation, postAtmosphere, postFood, postService, postValue, postOverall, postSink }

    return cleanExpandedBlog
}