import Button from '@/Components/Button'
import Consultation from '@/Components/Consultation'
import DownloadSection from '@/Components/DownloadSection'
import Faq from '@/Components/Faq'
import HashBanner from '@/Components/HashBanner'
import Carousel from '@/Components/Home/PortfolioBlog/Carousel'
import Work from '@/Components/Services/OurWork'
import HeroSection from '@/Components/Services/Social Media Marketing/HeroSection'
import WhatWeDo from '@/Components/Services/Social Media Marketing/WhatWeDo'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SMMPage = () => {

  const items = [
    {
      title:'Does your brand need a social media marketing agency to promote your products or services in Bangalore?',
      content: 'Wondering why your brand needs a social media marketing agency. The reasons to consider are to benefit from expertise, dedicated resources, and time savings. We develop a tailored strategy and leverage creative professionals for captivating content. Access advanced analytics for data-driven decisions and stay updated with evolving trends. Enjoy scalability and flexibility as your brand grows. Maximise your social media presence and drive success with a trusted SMO digital marketing agency.',
    },
    {
      title:'Does digital marketing agencies also do social media marketing?',
      content: 'Digital marketing agencies frequently provide social media marketing services as a core offering. Social media marketing is integral to digital marketing, aiding in brand awareness, audience engagement, and conversions. We are expertise in strategy development, account management, content creation, ad campaigns, and performance analysis. By integrating social media marketing with other digital marketing strategies, we offer holistic solutions to drive business success. With our comprehensive approach and specialised skills, we help businesses effectively leverage the power of social media for impactful online marketing.',
    },
    {
      title:'What are the different Social media marketing services that are essential to your brand?',
      content: "We elevate your brand's social media presence, considering essential social media marketing services. We craft a tailored strategy aligned with your goals and audience to optimise and establish profiles on relevant platforms. We create engaging content through posts, images, videos, and infographics and respond to messages. Leveraging social media advertising and influencer partnership help us to analyse the metrics of  performance tracking and data-driven decision-making and monitor brand mentions and conduct competitor analysis offering training and consulting for effective social media marketing. We Implement these services to enhance your brand's visibility, engagement and overall marketing success.",
    },
    {
      title:'What are the key factors to be considered to choose the best social media marketing agency in Bangalore?',
      content: "When selecting a social media marketing company in Bangalore, the key factors are that we look for extensive experience and expertise, we offer smm services that includes strategy, content creation, advertising, and analytics. we ensure to understand your industry and target audience to seek a collaborative approach, transparent communication and proven results. We have a dedicated creative team and a positive reputation. Our agency demonstrates its ability to meet your social media needs and drive your brand's success in Bangalore.",
    },
    {
      title:'Do Social Media marketing companies deliver results through Influencer marketing?',
      content: "Social media marketing companies frequently achieve results by incorporating influencer marketing strategies. Influencer marketing involves collaborating with influential individuals in the best niches for SMM to promote brands or products to their engaged audience. By harnessing the credibility and reach of these influencers, social marketing agency generate brand awareness, drive engagement, and facilitate conversions. Influencer marketing expands brand reach, connects with target audiences, and leverages the trust and authority of influencers to accomplish marketing objectives. Partnering with influencers is an effective approach employed by social media marketing agency to deliver measurable outcomes",
    },
  ];

  const [mobileView, setMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth<=500){
        setMobileView(true)
      }else{
        setMobileView(false)
      }
    };

    // Initial screen size
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Socail Media Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <HeroSection />
        <WhatWeDo />
        <HashBanner p='Let Us Ignite Your' h1='SOCAIL PRESENCE' />
        <Work/>
        <Carousel mobile={mobileView}/>
        <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
        <Link href='/Portfolio'>
        <Button
            value="View More"
            color="#ffffff"
            bg='var(--P700)'
        />
        </Link>
        </div>
        <DownloadSection />
        <Consultation/>
        <Faq items={items}/>
      </> 
    </>
  )
}

export default SMMPage