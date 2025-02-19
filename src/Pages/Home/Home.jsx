import React from 'react'
import Ready from './Ready/Ready'
import Rights from './Rights/Rights'
import Footer from '../../Components/Footer/Footer'
import Engine_Text from './Engine_Text/Engine_Text'
import Sell_Car from './Sell_Car/Sell_Car'
import Frequently_Questions from './Frequently_Questions/Frequently_Questions'
import Contact_Us from './Contact_Us/Contact_Us'
import About_Us from './About_Us/About_Us'

function Home() {
  return (
    <div>
        <About_Us />
        <Contact_Us />
        <Ready />
        <Frequently_Questions />
        <Sell_Car />
        <Engine_Text />
        <Footer />
        <Rights />
    </div>

  )
}

export default Home