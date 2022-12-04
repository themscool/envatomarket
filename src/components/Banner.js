import React from 'react'
import { IoSearch } from 'react-icons/io5';

import { banner_img } from '../data'

const Banner = () => {
    return (
        <>
            <section className='py-16'>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* left */}
                        <div className="banner-info">
                            <div className="banner-title my-4">
                                <h1 className='lg:text-4xl  text-lg font-bold text-[#333]'>Professional WordPress Themes & Website Templates for any project</h1>
                                <p className='mt-3'>Discover thousands of easy to customize themes, templates & CMS products, made by world-class developers.</p>
                            </div>
                            <div className="banner-search bg-white shadow-md rounded-lg relative py-6 px-4">
                                <input type="text" name="" placeholder='e.g. responsive Wordpress' id="" className='outline-none px-4 w-full text-gray-500' />
                                <button className="search-btn bg-[#6ca12b] absolute flex items-center py-2 px-4 rounded-md cursor-pointer  right-4 top-4">
                                    <span className='text-white text-xl mr-2 font-medium'><IoSearch /></span>
                                    <span className='text-white font-medium text-xl'>Search</span>
                                </button>
                            </div>
                        </div>
                        {/* right */}
                        <div className="banner-img">
                            <img src={banner_img} alt={banner_img} />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Banner