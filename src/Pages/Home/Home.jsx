import React from 'react'
import Ready from './Ready/Ready'
import Rights from './Rights/Rights'
import Footer from '../../Components/Footer/Footer'
import Engine_Text from './Engine_Text/Engine_Text'
import Sell_Car from './Sell_Car/Sell_Car'
import Frequently_Questions from './Frequently_Questions/Frequently_Questions'

function Home() {
  return (
    <div>
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