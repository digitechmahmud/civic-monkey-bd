import React from 'react';
import Bannarbrand from './BannarBrand/Bannarbrand';
import Banner from './Banner/Banner';
import Mission from './Mission/Mission';

const Home = () => {
    return (
        <div className='min-h-screen mx-20'>
            <Banner />
            <Bannarbrand />
            <Mission/>
        </div>
    );
};

export default Home;