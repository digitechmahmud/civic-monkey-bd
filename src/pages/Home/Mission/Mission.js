import React from 'react';
import { FaChevronCircleRight } from "react-icons/fa";

const Mission = () => {
    return (
        <div className='grid grid-cols-1 col-start-2 md:grid-cols-2 gap-6 mt-20 items-center'>
            <div className='mr-10'>
                <img className='rounded-xl' src="https://i.ibb.co/XxnWdHT/Untitled-design-18.png" alt="" />
            </div>
            <div className='mt-4'>
                <h2 className='text-5xl font-bold leading-none tracking-wider'>Mission driven. People <br/>focused.</h2>
                <p className='mt-2 text-xl mt-5'>In the right hands, search engine optimization (SEO) can attract new customers and qualified leads to your website.</p>
                <div className='flex items-center mt-5 text-xl'>
                    <FaChevronCircleRight /><p className='font-semibold ml-2'>Certified SEO experts</p>
                </div>
                <div className='flex items-center mt-2 text-xl'>
                    <FaChevronCircleRight /><p className='font-semibold ml-2'>Certified SEO experts</p>
                </div>
                <button className='btn btn-outline mt-5 mb-5'>Get Started</button>
            </div>
            
        </div>
    );
};

export default Mission;