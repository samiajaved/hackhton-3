'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* black div */}
                <div className="  w-[full] h-[45x]  text-white bg-[#272343] flex px-[10px]  justify-between lg:px-[100px] ">
                <div className="flex pt-2 ">
                    {/* <Image src={"/header/Check 1.png"} alt="check" width={4} height={4} className="w-4 h-4" /> */}
                    <h1 className="font-normal lg:text-sm leading-[14.3px] text-xs">Free shipping on all orders over $50</h1>
                </div>

                <div className=" w-[202px] pt-2  md:flex justify-between text-white hidden ">
                    {/* <Image src={"/header/ENG.png"} alt="eng" width={37} height={17} /> */}
                    <Link href="/" className="font-normal text-xs" >eng</Link>
                    <Link href="faqs" className="font-normal text-xs" >Faqs</Link>
                    <div className="w-[87px] h-[17px] gap-[6px] flex text-white">
                    {/* <Image src={"/header/Vector (2).png"} width={10} height={10} alt="logo" /> */}
                    <h1 className="font-normal text-xs" >Need Help</h1>
                    </div>
                </div>
            </div>

            {/* gray div */}
            <div className="w-full h-[84px] flex justify-between py-[20px] lg:px-[100px] px-[30px] bg-[#F0F2F3]">
                <div className="w-[166px] h-[40px] flex justify-between "> 
                    <Image src={'/navbar/Logo icon.png'} alt="logo" width={40} height={40}  />
                    <h1 className="font-medium text-[26px] leading-[31.2px]">Comforty</h1>
                </div>
                <Link href="Cart" className="font-medium text-[26px] leading-[31.2px]">Cart</Link>
            </div>
                      

      {/* white div */}
      <div className=" w-full h-24 justify-between flex items-center px-6">
    

        {/* Menu for larger screens */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5 ">
            <li className="hover:text-yellow-500">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-yellow-500">
              <Link href="/Shop">Shop</Link>
            </li>
            
            <li className="hover:text-yellow-500">
              <Link href="/Products">Products</Link>
            </li>
            
            <li className="hover:text-yellow-500">
              <Link href="/Pages">Pages</Link>
            </li>

            <li className="hover:text-yellow-500">
              <Link href="/About">About</Link>
            </li>
          </ul>
        </div>
        <Link href='/Contact'>Contact: (808)555-0111</Link>
        

        {/* Hamburger Menu for smaller screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none"
          >
            {/* Icon for menu */}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" lg:hidden">
          <ul className="flex flex-col items-start gap-4 p-4">
            <li className="hover:text-yellow-500">
              <Link href="/work" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="About" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/Contact" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/Contact" onClick={() => setIsOpen(false)}>
                Pages
              </Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/Contact" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
