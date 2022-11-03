import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

import BlogPage from "../../components/Blog/BlogPage";
import { BACKEND_BLOG_API_URL } from "../../constants";


type Post = {
    title: string
    created_on: string,
    description: string,
    slug: string    
}

const Blog = () => {
    const {blogSlug} = useParams();
    console.log(blogSlug)
    const [post, setPost] = useState({})
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(BACKEND_BLOG_API_URL + blogSlug);
                const postData = await response.data;
                await setPost(postData[0]);
            } catch (error) {
                console.log("error calling fetchPost(): ", error);
            }
        }
        fetchPost();
    }, [])
    console.log("posts data >>>", post)
    // const renderBlogPreviews = () => {
    //    return posts.map((post: Post, idx: number) => {
    //         return <BlogPreviewRow key={idx} title={post.title} date={post.created_on} description={post.description} />
    //     })
    // }

    return (
        <>
            <div className="container mx-auto">
                <BlogPage post={post}/>
            </div>
        </>
    )
}
export default Blog;