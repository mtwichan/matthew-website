const BlogPreview = () => {
    return (
        <a href="/project">
            <div className="flex mt-4 bg-cyan-50 hover:bg-cyan-100 border-black border-solid border-2">
                <div className="pr-4"><img src="../assets/img/test-img.png"></img></div>
                <div>
                    <div>
                        <h1 className="text-3xl font-bold">Title</h1>
                    </div>
                    <div>
                        <h3 className="text-sm font-italic">date</h3>
                    </div>
                    <div>
                        <h2 className="text-sm bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-4 mr-4 rounded text-center">Tag</h2>
                    </div>
                    <div>
                        <p>description</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default BlogPreview;