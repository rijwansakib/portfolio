import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FeaturedProject from '../FeaturedProject/FeaturedProject';
import Home from '../Home/Home';


const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Banner></Banner>
            <FeaturedProject></FeaturedProject>
            <Contact></Contact>

        </div>
    );
};

export default HomePage;