import Button from '@/Components/Button'
import Consultation from '@/Components/Consultation'
import DownloadSection from '@/Components/DownloadSection'
import Faq from '@/Components/Faq'
import HashBanner from '@/Components/HashBanner'
import Carousel from '@/Components/Home/PortfolioBlog/Carousel'
import HeroSection from '@/Components/Services/Online Reputation Management/HeroSection'
import WhatWeDo from '@/Components/Services/Online Reputation Management/WhatWeDo'
import Work from '@/Components/Services/OurWork'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ORMPage = () => {

  const items = [
    {
      title: 'What is online reputation management in social media marketing?',
      content: ` Online reputation management in social media marketing involves monitoring, shaping perception, and maintaining a positive brand image. It includes managing content, interactions, and feedback. Strategies comprise monitoring mentions, addressing negativity, promoting positive content, engaging followers, and building a strong brand presence. We provide effective online reputation management enhancing credibility and visibility of your business on the online domain, ensuring a favourable image in social media.`,
    },
    {
      title: 'Why do I require an Online Reputation Management Company?',
      content: `Choosing an ORM company provides expertise in managing online reputations, professional analysis, damage control, content optimization, review management, brand protection, enhanced online presence, time-saving, focus on core activities, long-term reputation maintenance, and a competitive advantage. We as an online reputation management company in Bangalore ensure effective online reputation management, leading to sustained business success.`,
    },
    {
      title: 'Why choose an Online Reputation management company in Bangalore?',
      content: `Selecting an ORM company in Bangalore offers local expertise, cultural understanding, proximity, industry connections, market insights, and a proven track record. We understand the local market, tailor strategies accordingly, have established networks, and provide guidance to stay ahead in reputation management effectively. We provide expertise in managing online reputations, professional analysis, damage control, content optimization, review management, brand protection, enhanced online presence, time-saving, focus on core activities, long-term reputation maintenance, and a competitive advantage.`,
    },
    {
      title: 'Who requires an online reputation management agency?',
      content: `An online reputation management agency can effectively help boost and manage the reputation of businesses, executives, professionals, startups, e-commerce businesses, service providers, influencers, celebrities, educational institutions, and non-profit organisations. These entities rely on their online reputation for trust and success. With an agency's expertise like ours, effective management and enhancement of online reputation, address feedback, and can help you position yourself positively in the market. By partnering with an online reputation management agency like Social Agent, you can safeguard your reputation, build credibility, and achieve success in your field.`,
    },
    {
      title: 'What are the six(6) ways to maintain Online Reputation management?',
      content: `To maintain online reputation management, these six vital strategies are undertaken. Firstly, monitor your online presence regularly to track mentions and reviews. Secondly, respond promptly and professionally to customer feedback. Thirdly, encourage positive reviews and testimonials to counterbalance any negative sentiment. Fourthly, create high-quality content to establish credibility. Fifthly, build a strong social media presence through consistent posting and engagement. Lastly, proactively address potential issues and maintain transparency to foster trust. Implementing these tactics consistently will support a positive online reputation and strengthen customer relationships. We as a top online reputation management company in Bengaluru effectively undertake these steps to provide top notch services. `,
    },
  ]

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
                <title>Online Reputation Management</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <HeroSection />
                <WhatWeDo />
                <HashBanner p='Let Us Build Your' h1='DIGITAL LEGACY' />
                <Work/>
                <Carousel mobile={mobileView} />
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

export default ORMPage