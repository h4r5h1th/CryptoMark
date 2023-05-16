import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useParams } from 'react-router-dom';

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams()

  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
    });
  }, [url]);

  return (
    <div className='rounded-div my-4 py-4'>
      <div>
        <div className='flex py-8'>
        <img className='w-20 mr-8 rounded-full' src={coin.image?.large} alt='/' />
        <p className='text-3xl font-bold py-4'>{coin?.name}</p>
        </div>
        <div className='text-left md:text-right'>
            {coin.market_data?.current_price ? (
              <p className='text-3xl font-bold'>Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
        </div>
      </div>


     <div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
     </div>

      <div className='my-2'>
          <p className='text-xl font-bold'>Past 7 Day Chart</p>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='#19A7CE' />
            </Sparklines>
      </div>
      <div>
          <p className='text-xl pl-4 font-bold'>Market Stats</p>
          <div className='grid grid-cols-3 p-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : <p>No Data</p>}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className='grid grid-cols-3 p-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>
        </div>
    </div>
  );
};

export default CoinPage;