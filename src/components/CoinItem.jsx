import React from 'react'
import { Link } from 'react-router-dom';

const CoinItem = ({coin}) => {
  return (
    <tr className='h-[80px] border-b overflow-hidden'>
    <td>
        <Link to={`/coin/${coin.id}`}>
        <div className='flex items-center px-2'>
            <img className='w-6 mr-2 rounded-full hidden sm:block' src={coin.image} alt={coin.id} />
            <p className='text-sm md:text-base'>{coin.name}</p>
        </div>
        </Link>
    </td>
    <td>${coin.current_price.toLocaleString()}</td>
    <td className='w-[180px]'>
        {coin.price_change_percentage_24h > 0 ? (<p className='text-green-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>):(<p className='text-orange-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}
        
    </td>
    <td className='w-[180px] hidden md:table-cell'>${coin.market_cap.toLocaleString()}</td>
</tr>
  )
}

export default CoinItem