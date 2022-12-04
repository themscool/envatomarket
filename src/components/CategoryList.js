import React from 'react'


import { categoryData } from '../data'


const CategoryList = () => {
    return (
        <>
            <section className='py-10'>
                <div className="container mx-auto px-4">
                    <div className="category-box grid lg:grid-cols-3 gap-8">
                        {
                            categoryData.map((elem) => (
                                <div className="category-item text-center bg-[#ffffff80] overflow-hidden rounded-md hover:shadow-xl hover:bg-white transition-all ease-in-out  cursor-pointer">
                                    <div className="cat-info p-10">
                                        <div className="category-title">
                                            <h1 className='text-3xl font-bold hover:underline'>{elem.categoryName}</h1>
                                        </div>
                                        <div className="category-des my-3">
                                            <p>{elem.categoryName}</p>
                                        </div>
                                        <div className="category-seller">
                                            <a href="" className='text-blue-500'>{elem.categoryType}</a>
                                        </div>
                                    </div>
                                    <div className="category-scm translate-y-4 relative">
                                        <div className="ct-icons rounded-full  border-white border-4 w-16 h-16 fixed left-[45%] top-[-35px]">
                                            <img src={elem.categoryIcon} alt={elem.categoryIcon} />
                                        </div>
                                        <div className="cate-img border-white border-4 rounded-md mx-16 shadow-xl">
                                            <img src={elem.categoryImg} alt={elem.categoryImg} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>

                    <div className="cate-btn text-center my-16">
                        <a className='text-md font-medium rounded-md border-b-2 border-[#497613] text-white bg-[#6ca12b] py-4 px-6' href="">View all categories</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryList