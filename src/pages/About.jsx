import React from 'react';
import {FaPaw, FaMugHot} from 'react-icons/fa';


const About = () => {
  return (
    <div>
      <div className='rounded-div my-12 py-8'>
        <p className='text-2xl font-bold m-2 p-2 flex items-center'><FaMugHot className='mr-4'/>About</p>
        <ul className='mt-8'>
          <li className='m-4 p-2 flex items-center'><FaPaw className='mr-4'/>Welcome to CryptoMark which uses React, Tailwind and React.</li>
          <li className='m-4 p-2 flex items-center'><FaPaw className='mr-4'/>Powered by CoinGecko Api.</li>
          <li className='m-4 p-2 flex items-center'><FaPaw className='mr-4'/>It uses dynamic routing through the React Router DOM package.</li>
          <li className='m-4 p-2 flex items-center'><FaPaw className='mr-4'/>Sometimes it may take time to fetch the data as it has rate limit.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;