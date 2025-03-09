import React from 'react';
import Banner from '../../component/Banner/Banner';
import Slide from '../../component/Slide/Slide';
import BookFeaturs from '../../component/BookFeaturs/BookFeaturs';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Slide></Slide>
             <BookFeaturs></BookFeaturs>
        </div>
    );
};

export default Home;