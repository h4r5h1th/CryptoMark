import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [btc, setbtc] = useState()

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  const url2 = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'

  useEffect(() => {
    axios.get(url2).then((response) => {
      setbtc(response.data.bitcoin.usd);
    });
  }, []);

  return (
    <div className='rounded-div my-2 py-8 text-primary'>
      <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {trending.map((coin, idx) => (
          <Link key={idx} to={`/coin/${coin.item.id}`}>
            <div className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex'>
                  <img
                    className='mr-4 rounded-full'
                    src={coin.item.small}
                    alt='/'
                  />
                  <div className='flex items-center'>
                    <p className='font-bold'>{coin.item.name}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  {(coin.item.price_btc*btc)<0.01 ? <p>${(coin.item.price_btc*btc).toFixed(7)}</p> : <p>${(coin.item.price_btc*btc).toFixed(2)}</p>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;