import React, { useEffect,useState } from 'react'
import CoinItem from './CoinItem';
import axios from 'axios'

const CoinSearch = () => {
    const [searchText, setSearchText] = useState('')
    
    const [coins, setCoins] = useState([])

    const [curl, setcurl] = useState(1)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page='+curl+'&sparkline=true&locale=en'
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setCoins(response.data)
      })
    }, [url])

  return (
    <div className='rounded-div my-4'>
        <div className='flex flex-col justify-between pt-4 pb-6 text-center md:text-center'>
            <form>
                <input className='w-11/12 bg-primary border border-input my-4 px-4 py-2 rounded-2xl shadow-xl' onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Search a coin' />
            </form>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                   <th className='text-left px-2'>COIN</th>
                   <th>PRICE</th>
                   <th>24H CHANGE</th>
                   <th className='hidden md:table-cell'>MARKET CAP</th>
                </tr>
            </thead>
            <tbody>
            {coins
            .filter((value)=>{
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }else{
                return null;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
            </tbody>
        </table>
        <div className='flex flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            {curl===1? <button onClick={()=>{if(curl!==1){setcurl(curl-1)}}} className='font-bold w-50 m-2 p-3 bg-slate-500 text-gray-400 rounded-2xl shadow-xl'>Back</button>: <button onClick={()=>{if(curl!==1){setcurl(curl-1)}}} className='font-bold w-50 m-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Back</button>}
            <p className='h-10 font-bold mt-4'>{curl}</p>
            <button onClick={()=>{setcurl(curl+1)}} className='font-bold w-50 m-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Next</button>
        </div>
    </div>
  )
}

export default CoinSearch