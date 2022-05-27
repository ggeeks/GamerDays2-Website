import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../assets/lone-logo.png"
import { AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"
import { FaInstagramSquare, FaDiscord, FaWhatsapp, FaTelegram, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='text-white h-full overflow-x-hidden revamp  bg-6'>
     
      <header className=" revamp">
      <nav className=" flex  justify-between   items-center p-4">
        <div className="md:flex-[0.5] flex-initial bg-transparent z-10 justify-between  items-center">
          <Link href='/' alt=''>
          <div className="flex flex-row justify-center cursor-pointer items-center">
            <div className="w-20 h-20 rounded-full items-center">
              <Image
                src={Logo}
                alt="home"
                className="w-20 h-20 rounded-full  object-cover"
              />
            </div>
          <h1 className='items-center text-xl py-5'><span className='text-orange-400'>Gaming </span>Geeks</h1>
        </div>
        </Link>
        </div>
        <div className="text-white md:flex hidden  flex-row  items-center ">
          <div className="flex flex-row justify-evenly  navbar-brand items-center">
            <ul className='flex text-xl '>
              <Link
              href="/"
              className="text-lg block justify-evenly scroll-smooth"
            >
              <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                Home
              </li>
            </Link>
            {/* <Link href="/Games" className="text-lg justify-center">
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Games
              </li>
            </Link> 
            <Link href="/Gallery" className="text-lg justify-center">
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Gallery
              </li>
            </Link> */}
            <Link href="/Sponser" className="text-lg justify-center">
              <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                Sponser
              </li>
            </Link>
            <Link href="/Contact" className="text-lg justify-center">
              <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                Contact
              </li>
            </Link>
{/*         <Link href='/Register'>
              <li className='justify-items-center hover:text-[#fdfd96] px-2'>
                Register
              </li>
            </Link> */}
            </ul>
            
          </div>
        </div>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <div className='items-center'>
              <ul className='flex flex-col text-xl'>
              <Link
              href="/"
              className="text-lg block justify-center scroll-smooth"
            >
              <li className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                Home
              </li>
            </Link>
            {/* <Link href="/Games" className=" text-lg justify-center">
              <li className="py-3 justify-items-center hover:text-[#fdfd96] px-2">
                Games
              </li>
            </Link>
            <Link href="/Gallery" className="text-lg justify-center">
              <li className="justify-items-center  py-3 hover:text-[#fdfd96] px-2">
                Gallery
              </li>
            </Link> */}
            <Link href="/Sponser" className="text-lg justify-center">
              <div className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                Sponser
              </div>
            </Link>
            <Link href="/Contact" className="text-lg justify-center">
              <div className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                Contact
              </div>
            </Link>
            {/* <Link href='/Register'>
              <li className='justify-items-center  py-3 hover:text-[#fdfd96] px-2'>
                Register
              </li>
            </Link> */}
            </ul>
                </div>
              </ul>
          )}
        </div>
      </nav>
    </header>
      {/* <hr /> */}
      <div className='md:mx-20 md:my-7 mx-5 my-3  text-center'>
        <Component {...pageProps} />
      </div>
      <hr />
      <footer className='revamp'>
        <div className=' md:text-3xl text-[20px]  py-3'>
          <div className='flex md:flex-row flex-col py-3 text-center justify-center overflow-hidden md:justify-between px-20 '>
            <div className=' grid grid-cols-6'>
              <div className=''>
                <a target='_blank' href='https://www.youtube.com/channel/UC0up2cGfG13O9oWqachTunQ' className=''>
                  <FaYoutube className='m-3' />
                </a>
              </div>
              <div className=''>
                <a target='_blank' href='http://instagram.com/gamers.platform_'>
                  <FaInstagram className='m-3'  />
                </a>
              </div>
              <div className=''>
                <a target='_blank' href='https://discord.gg/YRmKyN498W'>
                  <FaDiscord className='m-3' />
                </a>
              </div>
              <div className=''>
                <a target='_blank' href='https://www.linkedin.com/company/gaming-geeks'>
                  <FaLinkedin className='m-3'/>
                </a>
              </div>
              <div className=' '>
                <a target='_blank' href='https://t.me/ggeeks'>
                  <FaTelegram className='m-3' />
                </a>
              </div>
              <div className=' '>
                <a  target='_blank' alt='whatsapp' href='https://chat.whatsapp.com/CB1DwNyUm7C35wFi0IC5JE'>
                  <FaWhatsapp className='m-3' />
                </a>
              </div>
            </div>
          
          <div className='text-center py-3'> 
            <h1 className='md:text-xl text-[14px] '>© 2022 All right reserved</h1>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MyApp