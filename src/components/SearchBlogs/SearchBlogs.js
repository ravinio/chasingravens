import { useState, useContext } from "react"
import { Context } from "../../context/Context"
import { Flex, Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react"
import Post from "../Post/Post"
import Loader from "../Loader/Loader"
import { Search2Icon } from "@chakra-ui/icons"

function SearchPost(){
    const {blogPost, isBlogLoading} = useContext(Context)
    // search keyword
    const [searchKeyword, setSearchKeyword] = useState('');

    if (isBlogLoading) {
        return <Loader />
    }

    if (!Array.isArray(blogPost) || !blogPost.length) {
        return null
    }

    return (
        <>
            <Flex
                justifyContent="center"
                width={{ base: "100%", md: "450px" }}
                margin="0 auto"
                padding="0 20px 20px"
            >
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={
                            <Search2Icon color="gray.300" />
                        }
                    />
                    <Input
                        color="#FFF"
                        borderRadius="0px"
                        focusBorderColor="#FF2173"
                        placeholder="search"
                        value={searchKeyword}
                        onChange={(event) => {
                        setSearchKeyword(event.target.value);
                    }}
                    />
                </InputGroup>
            </Flex>
            
            <SimpleGrid
                className="titleHelp"
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 3, sm: 4, lg: 5 }}
                padding={{ base: "0px 20px 100px", md: "0px 50px 100px" }}
            >
            {blogPost
            .filter((item) => {
                if (searchKeyword === "") {
                return null;
                } else if (
                item.postTitle
                    .toLowerCase()
                    .includes(searchKeyword.toLocaleLowerCase())
                ) {
                return item;
                }
            })
            .sort((a, b) => (b.postDate > a.postDate ? 1 : -1))
            .map((item) => {
                const {
                    id, 
                    postTitle,
                    postLocationImg, 
                    postFoodImg, 
                    postDate, 
                    postLocation, 
                    postAtmosphere, 
                    postFood, 
                    postService, 
                    postValue, 
                    postOverall, 
                    postSink
                } = item
                return (
                    <div key={id}>
                        <Post 
                            postTitle={postTitle} 
                            postFoodImg={postFoodImg} 
                            postLocation={postLocation} 
                            postFood={postFood} 
                            postService={postService} 
                            postValue={postValue} 
                            postOverall={postOverall} 
                            postSink={postSink} 
                            postAtmosphere={postAtmosphere} 
                            postLocationImg={postLocationImg} 
                            postDate={postDate} 
                        />           
                    </div>
                );
            })}
        </SimpleGrid>
        </>
    )
}

export default SearchPost;