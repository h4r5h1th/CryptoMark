import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
      <Trending/>
      <CoinSearch/>
    </div>
  )
}

export default Home