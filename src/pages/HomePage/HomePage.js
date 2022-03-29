import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FeaturedProject from '../FeaturedProject/FeaturedProject';
import Home from '../Home/Home';
import RecentWork from '../RecentWork/RecentWork';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Banner></Banner>
            <RecentWork></RecentWork>
            <FeaturedProject></FeaturedProject>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;