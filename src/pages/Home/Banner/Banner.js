import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            <div>
                <h2 className='text-7xl font-bold leading-none tracking-wider'>Increase traffic <br/>& leads from <br/>search</h2>
            </div>
            <div>
                <img src="https://storage.googleapis.com/website-production/uploads/2019/07/agency-hierarchy.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;