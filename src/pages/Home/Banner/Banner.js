import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 col-start-2 md:grid-cols-2 gap-4 mt-10 items-center'>
            <div>
                <h2 className='text-7xl font-bold leading-none tracking-wider'>Increase traffic <br />& leads from <br />search</h2>
                <p>
                    Increase traffic & leads from search
                    Do you want to increase sales? You can use search engine optimization and our SEO agency to achieve your goals.</p>
                <button className='btn btn-outline mt-5 mb-5'>Get Started</button>
                <div className='flex items-center'>
                    <img src="https://i.ibb.co/74xbPM0/people.jpg" alt="" />
                    <p>Trusted by 1M+ people around the globe</p>
                </div>
            </div>
            <div>
                <img className='rounded-xl' src="https://i.ibb.co/XxnWdHT/Untitled-design-18.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;