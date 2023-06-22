import React from 'react';
import PortfolioMain from "@/Components/Portfolio";
import Consultation from "@/Components/Consultation";
import DownloadSection from "@/Components/DownloadSection";
import Faq from "@/Components/Faq";

const Portfolio = () => {
    return(
        <div>
            <PortfolioMain/>
            {/*<Consultation/>*/}
            <DownloadSection />
            <Faq />
        </div>
    )
}

export default Portfolio;