import ReactMarkdown from 'react-markdown'

type BlogPageProps = {
    title: string
    created_on: string,
    description: string,
    slug: string 
}

const BlogPage = ({post}: any) => {
    console.log("blog page post data >>>", post)
    return (
        <div className="mt-5 mb-5">
            <div className="border-2 border-ingigo-600 p-5">
                <div className="flex flex-col">
                    <div className='mt-2'>
                        <h2 className="text-3xl font-bold">{post.title}</h2>                        
                    </div>
                    <div className='mt-1'>
                        <h4 className="text-2xl">{post.description}</h4>
                    </div>
                    <div className='mt-1 h-1/2 w-100 max-h-1/3'>
                        <img className="object-scale-down h-auto w-100" src={post.preview_img} alt={`Describing ${post.description}`}></img>
                    </div>
                    
                </div>
                <div className='mt-10'>
                    <ReactMarkdown children={post.content}/>
                </div>
            </div>            
        </div>
    )
}

export default BlogPage;