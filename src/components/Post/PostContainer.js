import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { SimpleGrid  } from '@chakra-ui/react'
import Loader from '../Loader/Loader'
import Post from './Post'

const PostContainer = () => {
    const {blogPost, isBlogLoading} = useContext(Context)

    if (isBlogLoading) {
        return <Loader />
    }

    // If there are no slides to display, then do not render the component
    if (!Array.isArray(blogPost) || !blogPost.length) {
        return null
    }
    
    return (
        <SimpleGrid className='postContainer' columns={{ base: 2, lg: 3 }} spacing={5} padding={{ base: '0px 20px', md: '0px 50px' }}>
            {blogPost.map((item) => {
                const {id, postTitle, postLocationImg, postFoodImg, postDate, postLocation, postAtmosphere, postFood, postService, postValue, postOverall, postSink} = item
                return (
                    <div key={id}>
                        <Post postTitle={postTitle} postFoodImg={postFoodImg} postLocation={postLocation} postFood={postFood} postService={postService} postValue={postValue} postOverall={postOverall} postSink={postSink} postAtmosphere={postAtmosphere} postLocationImg={postLocationImg} postDate={postDate} />           
                    </div>
                )
            })}
        </SimpleGrid>
    )
}

export default PostContainer