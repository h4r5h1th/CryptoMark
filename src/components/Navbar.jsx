import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='rounded-div float-root items-center h-20 font-bold'>
        <Link to="/">
            <h1 className='text-2xl my-6 float-left'>CryptoMark</h1>
        </Link>
        <div className='hidden my-4 md:block float-right'>
            <ThemeToggle />
        </div>
        <div className='float-right my-6 hidden md:block'>
            <Link to='/' className='px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl hover:text-accent'>Home</Link>
            <Link to='/help' className='px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl hover:text-accent'>Help</Link>
            <Link to='/about' className='px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl hover:text-accent'>About</Link>
        </div>
        {/*Menu Icon */}
        <div onClick={handleNav} className='block md:hidden float-right my-8 mx-4 cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={21} /> : <AiOutlineMenu size={21} />}
        </div>
        {/*Mobile Menu*/}
        <div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>
            <ul className='w-full p-4'>
                <li className='border-b py-6'>
                    <Link to='/'>
                        <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Home</button>
                    </Link>
                </li>
                <li className='border-b py-6'>
                    <Link to='/help'>
                        <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Help</button>
                    </Link>
                </li>
                <li className='border-b py-6'>
                    <Link to='/about'>
                        <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>About</button>
                    </Link>
                </li>
                <li className='py-6 flex justify-center'>
                    <ThemeToggle />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar