import Head from 'next/head'
import HeroSection from '@/Components/Home/HeroSection'
import Review from '@/Components/Home/Review'
import WhySocialAgent from '@/Components/Home/WhySocialAgent'
import HashBanner from '@/Components/HashBanner'
import DownloadSection from '@/Components/DownloadSection'
import PortfolioBlogs from '@/Components/Home/PortfolioBlog/PortfolioBlogs'
import { useEffect, useState } from 'react'
import Faq from '../Components/Faq'
import AllServices from '@/Components/Home/AllServices'
import Consultation from '@/Components/Consultation'

export default function Home() {

  const items = [
    {
        title: 'Why do businesses need digital marketing services in Bangalore?',
        content: 'When people hear about your business, they first check your online presence. If they are not able to find it, chances are you lose customers. If you want your business to stay competitive in 2023, then you need to be investing in all the latest digital marketing tools and technologies. '
    },
    {
        title: ' What are the best strategies followed by Digital Marketing Agencies in Bangalore?',
        content: 'We are a Digital marketing agency in Bangalore that have various SEO-friendly strategies to enhance online visibility and drive business goals. We include SEO for improved website rankings, social media marketing for targeted audience engagement, PPC advertising for focused campaigns, and content marketing to provide valuable information. We also utilise email marketing, CRO, influencer marketing, video marketing, mobile marketing, and data-driven analytics. These strategies help businesses to optimise their online presence, attract relevant traffic, and achieve marketing success.'
    },
    {
        title: ' Why Choose Social Agent as your Digital Marketing company in Bangalore?',
        content: 'Choose Social Agent as your top digital marketing company in Bangalore for extensive experience, comprehensive services, industry expertise, and customised strategies that benefit from transparent communication, a results-driven approach, and client satisfaction. Our competitive pricing ensures value for money. With a proven track record, our team delivers tangible results through holistic approaches such as SEO, website design, social media marketing, and content creation. Stay ahead of the competition with our knowledge of industry trends and algorithms. Trust us to boost your online presence and achieve marketing success.'
    },
    {
        title: 'What among Website development, SMM & SEO will drive better results',
        content: 'To drive optimal results in Bangalore, we leverage the power of Website Development, Social Media Marketing, and Search Engine Marketing (SEM). A well-designed website enhances online presence and user experience, while Social Media Marketing fosters engagement and brand awareness. SEM, through paid search advertising, targets potential customers with precision. Finding the right balance among these strategies depends on the industry, audience, and goals. Combining these approaches in a comprehensive digital marketing plan can yield superior outcomes. Research, competitor analysis, and expert consultation ensure tailored strategies for success.'
    },
    {
        title: 'How Long Does it take to see results from Digital Marketing?',
        content: 'The timeline for seeing results from a digital marketing agency can vary depending on the industry, competition, target audience, and strategies employed. Short-term results may be achieved within weeks through activities like PPC advertising, social media advertising, and email marketing. Mid-term results may take several months with efforts in SEO, content marketing, and social media marketing. Long-term results, spanning 6 months to a year or more, involve consistent efforts to establish an online presence, build brand authority, and drive sustained growth. Patience and strategic execution are key to achieving desired outcomes.'
    },
    {
        title: 'What Does the Digital Marketing Agency Do?',
        content: 'As a leading digital marketing agency in Bangalore, we specialise in various services to boost online presence and achieve marketing goals. Our offerings include digital strategy development, website design and development, SEO, PPC advertising, social media marketing, content marketing, email marketing, analytics and reporting, CRO, online reputation management, and influencer marketing. With a focus on delivering value and engaging target audiences, we help businesses establish and enhance their online presence. Partner with us to leverage our expertise and drive meaningful results for your brand.'
    },
];

  const [title, setTitle] = useState('Social Agent')
  useEffect(() => {
    window.onblur = function () {
      setTitle('Come back!');
    }
    window.onfocus = function () {
      setTitle('Social Agent');
    }
  }, [title])
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />  
        <AllServices />
        <WhySocialAgent />
        <HashBanner p='Your Digital Bridge To' h1='SUCCESS' />
        <PortfolioBlogs/>
        <Review />
        <DownloadSection />
        <Consultation/>
        <Faq items={items}/>
      </div>
    </div>
  )
}
