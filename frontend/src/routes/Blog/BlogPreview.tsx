import { useEffect, useState } from "react";
import axios from "axios";
import BlogPreviewRow from "../../components/Blog/BlogPreviewRow";
import { BACKEND_BLOG_API_URL } from "../../constants";
type Post = {
    preview_img: string,
    title: string
    created_on: string,
    description: string,
    slug: string
}

const BlogPreview = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await axios.get(BACKEND_BLOG_API_URL);
                const postsData = response.data;
                await setPosts(postsData)
            } catch (error) {
                console.log("error calling fetchAllPosts(): ", error)
            }            
        }
        fetchAllPosts();        
    }, [])

    const renderBlogPreviews = () => {
        console.log("Posts metadata >>>", posts)
       return posts.map((post: Post, idx: number) => {
            return <BlogPreviewRow key={idx} previewImg={post.preview_img} title={post.title} date={post.created_on} description={post.description} slug={post.slug}/>
        })
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="mt-5 mb-2">
                    <h1 className="text-4xl underline font-bold">Blog Posts</h1>
                </div>                
                <div>
                    {renderBlogPreviews()}
                </div>
            </div>
        </>
    )
}
export default BlogPreview;