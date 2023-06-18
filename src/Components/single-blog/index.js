import BlogHeader from "./BlogHeader";
import SingleBlogContent from "./SingleBlogContent";
import BlogDescription from "./BlogDescription";
import ScrollBlog from "./ScrollBlog";

const SingleBlog = ({blogData}) => {
    return(
        <div>
            <BlogHeader/>
            <SingleBlogContent blogData={blogData}/>
            <BlogDescription blogData={blogData}/>
            <ScrollBlog blogData={blogData} />
        </div>
    )
}

export default SingleBlog;