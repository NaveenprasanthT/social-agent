import Navbar from '@/Components/Navbar/Navbar'
import Slider from '@/Components/Navbar/Slider'
import '@/styles/globals.css'
import { HoverContext, SliderContext } from '../../Context'
import { useEffect, useState } from 'react'
import Footer from '@/Components/Footer'

export default function App({ Component, pageProps }) {
  const [sliderActive, setSliderActive] = useState(false)
  const [hoverActive, setHoverActive] = useState(false)

  // const [navbarOpen,setNavbarOpen] = useState(true);
  // const blogs = [
  //   "/blog/blog1",
  //   "/blog/blog2",
  //   "/blog/blog3",
  //   "/blog/blog4",
  //   "/blog/blog5",
  //   "/blog/blog6",
  //   "/blog/blog7",
  //   "/blog/blog8",
  //   "/blog/blog9",
  //   "/blog/blog10",
  // ]

  useEffect(() => {
    console.log("hover", hoverActive);
  }, [])

  // useEffect(() => {
  //   const { hostname, pathname } = window.location;
  //   if(blogs.includes(pathname)) {
  //     setNavbarOpen(false);
  //   } else{
  //     setNavbarOpen(true);
  //   }

  // }, []);


  return (
    <SliderContext.Provider value={{ sliderActive, setSliderActive }}>
      <HoverContext.Provider value={{ hoverActive, setHoverActive }}>
        {<Navbar />}
        <Slider />
        <Component {...pageProps} />
        <Footer />
      </HoverContext.Provider>
    </SliderContext.Provider>
  )
}
