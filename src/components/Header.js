import React from 'react';
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { HiShoppingCart } from 'react-icons/hi';
import { HiMenuAlt1 } from 'react-icons/hi';


// import logo from data
import { logoImg } from '../data';
import { navLinks } from '../data';
import { themeforest_logo } from '../data';


const Header = () => {
    return (
        <>
            <header className='bg-[#262626] px-2 lg:px-0'>
                <div className="container mx-auto">
                    <div className="navbar flex items-center justify-between">
                        <div className="phone-menu  cursor-pointer block lg:hidden">
                            <span className=' rounded-md text-white text-lg '><HiMenuAlt1 /></span>
                        </div>
                        <div className="brand-logo hidden lg:block">
                            <img src={logoImg} alt="" className='w-auto h-[1.1rem]' />
                        </div>
                        <div className="brand-logo block lg:hidden">
                            <img src={themeforest_logo} alt="" className='w-auto h-10' />
                        </div>
                        <div className="side-menu flex items-center">
                            <div className="page-items hidden lg:block">
                                <ul className='flex items-center'>
                                    <li className='text-white/60 hover:text-white mx-4'>
                                        <a href="">Forms</a>
                                    </li>
                                    <li className='text-white/60  hover:text-white mx-4'>
                                        <a href="">Start Selling</a>
                                    </li>
                                    <li className='text-white/60  hover:text-white mx-4 flex items-center'>
                                        <span className='mr-3 text-lg cursor-pointer'><CgMenuGridO /></span>
                                        <a href="">  Our Products</a>
                                    </li>
                                    <div className="shop-btn flex items-center bg-[#333] py-4 px-4 text-center ">
                                        <span className='text-white/60 text-lg mr-2'><HiShoppingCart /></span>
                                        <a className='text-white/60  hover:text-white' href="">Sign in</a>
                                    </div>
                                </ul>
                            </div>
                            <div className="phone-profile cursor-pointer block lg:hidden mx-4">
                                <span className='text-lg text-white'><HiShoppingCart /></span>
                            </div>
                            <div className="phone-profile cursor-pointer block lg:hidden">
                                <span className='text-lg text-white'><CgProfile /></span>
                            </div>
                        </div>

                    </div>
                    <div className="nav pt-5 hidden lg:block">
                        <ul className='flex'>
                            <li className='text-white mr-10 pb-3 active'><a href="http://" target="_blank" rel="noopener noreferrer">Web Themes & Templates</a></li>
                            <li className='text-white/60 hover:text-white mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">Code</a></li>
                            <li className='text-white/60 hover:text-white mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">Video</a></li>
                            <li className='text-white/60 hover:text-white mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">Audio</a></li>
                            <li className='text-white/60 hover:text-white mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">Graphics</a></li>
                            <li className='text-white/60 hover:text-white mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">Photos</a></li>
                            <li className='text-white/60 hover:text-white mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">3d Files</a></li>
                            <li><span className='mr-10 text-white/60'>|</span></li>
                            <li className='text-white linegr mr-10 pb-3'><a href="http://" target="_blank" rel="noopener noreferrer">  Unlimited Downloads</a></li>
                        </ul>
                    </div>

                </div>
            </header>
            <div className="bottom-nav  border border-b-gray-200 hidden lg:block bg-[#f5f5f5]">
                <div className="container mx-auto relative">
                    <div className="links-items py-4 ">
                        <ul className='flex'>
                            {navLinks.map((item) => (
                                <li className='text-gray-500 text-sm '><a href="" className='py-2 px-2 hover:bg-gray-400 hover:text-white hover:rounded-md'>{item.linkItems}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="theme-logo absolute bg-[#333] top-[-30px] right-0 rounded-full px-2 py-1 cursor-pointer">
                        <img src={themeforest_logo} alt="" className='w-auto h-10' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header

