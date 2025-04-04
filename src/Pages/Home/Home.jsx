import React from 'react'
import Ready from './Ready/Ready'
import Rights from './Rights/Rights'
import Footer from '../../Components/Footer/Footer'
import Engine_Text from './Engine_Text/Engine_Text'
import Sell_Car from './Sell_Car/Sell_Car'
import Frequently_Questions from './Frequently_Questions/Frequently_Questions'
import Contact_Us from './Contact_Us/Contact_Us'
import About_Us from './About_Us/About_Us'
import Buy_All from './Buy_All/Buy_All'
import Customer_Says from './Customer_Says/Customer_Says'
import Why_Choose from './Why_Choose/Why_Choose'
import How_Works from './How_Works/How_Works'
import Navbar from '../../Components/Navbar/Navbar'
//import Carouselx from './Carousel/Carouselx'
import Carousel from './Carousel/Carouselx'
import FixedBottom from './FixedBottom/FixedBottom'

function Home() {
  return (
    <div>
        <Navbar />
        <FixedBottom />
        <Why_Choose />
        <How_Works />
        <About_Us />
        <Carousel />
        {/* <Buy_All /> */}
        <Contact_Us />
        <Customer_Says />
        <Ready />
        <Frequently_Questions />
        <Sell_Car />
        <Engine_Text />
        <Footer />
        <Rights />
        {/* <Carousel /> */}
    </div>

  )
}

export default Home;