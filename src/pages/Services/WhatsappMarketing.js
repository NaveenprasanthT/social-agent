import Button from '@/Components/Button'
import Consultation from '@/Components/Consultation'
import DownloadSection from '@/Components/DownloadSection'
import Faq from '@/Components/Faq'
import HashBanner from '@/Components/HashBanner'
import Carousel from '@/Components/Home/PortfolioBlog/Carousel'
import HeroSection from '@/Components/Services/ContentAndCreative/HeroSection'
import WhatWeDo from '@/Components/Services/ContentAndCreative/WhatWeDo'
import Work from '@/Components/Services/OurWork'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CACPage = () => {

  const items = [
    {
      title: `What is WhatsApp business marketing?`,
      content: `WhatsApp Business marketing involves leveraging the dedicated WhatsApp Business platform for effective promotional and communication strategies. With features like business profiles, automated greetings, and messaging statistics, businesses can reach and engage customers directly. We offer WhatsApp business marketing services along with a personalized channel for sharing product updates, providing customer support, and conducting targeted marketing campaigns. By utilising WhatsApp Business marketing, businesses can enhance customer engagement, drive growth, and establish a strong online presence. It's a valuable tool for businesses to connect with their target audience, boost conversions, and achieve marketing success.`,
    },
    {
      title: `What are the benefits of partnering with a WhatsApp marketing agency in Bangalore?`,
      content: `Partnering with a WhatsApp marketing agency in Bangalore offers numerous benefits. We possess expertise in WhatsApp marketing strategies and stay updated with the latest trends. We help businesses reach their target audience effectively through personalized content and segmented lists. Additionally, we provide creative content creation services, implement automation tools, and integrate WhatsApp marketing with other channels. Analytics and reporting capabilities, alongside ensuring compliance with guidelines and privacy regulations can be done by outsourcing it to a WhatsApp marketing agency in Bangalore like Social Agent that saves time and costs, while enabling performance monitoring and optimization for better campaign results.`,
    },
    {
      title: `How can businesses use WhatsApp for marketing?`,
      content: `Businesses can leverage WhatsApp for marketing by creating business profiles, engaging in personalized one-on-one conversations, sending multimedia content, utilizing the WhatsApp Business API for advanced features, providing customer support, sending order updates, sharing promotions and offers, conducting surveys, utilizing group engagement, and using WhatsApp status for storytelling. We undertake these services while complying with WhatsApp's guidelines, respecting user’s privacy, and optimize strategies based on customer feedback and performance metrics to maximize the impact of WhatsApp marketing efforts.	`,
    },
    {
      title: ` Is WhatsApp marketing effective for small businesses?`,
      content: `WhatsApp marketing is highly effective for small businesses. It enables businesses to reach wider audience, provide personalized conversations, and targeted messaging. With high engagement rates and instant communication, it builds strong customer relationships and drives conversions. We offer cost-effective marketing, enhance customer support, and facilitates creative content delivery. Small businesses can effective use WhatsApp to create impactful campaigns, boost brand visibility, and achieve marketing goals efficiently. Incorporating WhatsApp marketing provides a competitive edge in the digital landscape, benefiting small businesses in reaching and engaging with their target audience by jointly celebrating with us for the same.  `,
    },
    {
      title: `How can businesses comply with WhatsApp marketing guidelines?`,
      content: `To comply with WhatsApp marketing guidelines, businesses must obtain user consent, respect privacy, avoid spam, provide value, be transparent, honor opt-out requests, monitor practices, and seek professional guidance. We follow these guidelines, and assist businesses maintain a positive reputation, foster customer trust, and build strong relationships. It's important to stay updated with WhatsApp's policies and adapt strategies accordingly. Compliance ensures effective and ethical WhatsApp marketing practices that drive engagement and business growth.`,
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
                <title>Content & Creative</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <HeroSection />
                <WhatWeDo />
                <HashBanner p='Let us turn clicks into' h1='CUSTOMERS' />
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

export default CACPage