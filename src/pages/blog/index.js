import React from 'react';
import Consultation from "@/Components/Consultation";
import DownloadSection from "@/Components/DownloadSection";
import Faq from "@/Components/Faq";
import BlogMain from '@/Components/Blog';

const Blog = () => {
    return (
        <div>
            <BlogMain/>
            {/*<Consultation />*/}
            <DownloadSection />
            <Faq />
        </div>
    )
}

export default Blog;