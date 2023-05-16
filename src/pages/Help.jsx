import React from 'react';
import {FaRegCheckCircle, FaHandsHelping} from 'react-icons/fa';


const Help = () => {
  return (
    <div className='rounded-div my-12 py-8'>
      <div className='py-4'>
        <p className='text-2xl font-bold m-2 p-2 flex items-center'><FaHandsHelping className='mr-4'/>Help</p>
        <ul className='mt-8'>
          <li className='m-4 p-2 flex items-center'><FaRegCheckCircle className='mr-4'/>Click on trending coins cards to get more details about them.</li>
          <li className='m-4 p-2 flex items-center'><FaRegCheckCircle className='mr-4'/>Click on Coins name or image from the coins list to get more details about that specific coin.</li>
          <li className='m-4 p-2 flex items-center'><FaRegCheckCircle className='mr-4'/>The search bar only filters the list of cions that is present in the current list of the table.</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;