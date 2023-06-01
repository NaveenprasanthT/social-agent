import Navbar from '@/Components/Navbar/Navbar'
import Slider from '@/Components/Navbar/Slider'
import '@/styles/globals.css'
import { HoverContext, SliderContext } from '../../Context'
import { useEffect, useState } from 'react'
import Footer from '@/Components/Footer'

export default function App({ Component, pageProps }) {
  const [sliderActive, setSliderActive] = useState(false)
  const [hoverActive, setHoverActive] = useState(false)

  useEffect(() => {
    console.log("hover", hoverActive);
  }, [])


  return (
    <SliderContext.Provider value={{ sliderActive, setSliderActive }}>
      <HoverContext.Provider value={{ hoverActive, setHoverActive }}>
        <Navbar />
        <Slider />
        <Component {...pageProps} />
        <Footer />
      </HoverContext.Provider>
    </SliderContext.Provider>
  )
}
