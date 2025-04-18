import React from 'react';
import Banner from '../../component/Banner/Banner';
import Slide from '../../component/Slide/Slide';
import BookFeaturs from '../../component/BookFeaturs/BookFeaturs';
import BookCategory from '../../component/BookCategory/BookCategory';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Slide></Slide>
             <BookCategory></BookCategory>
             <BookFeaturs></BookFeaturs>
        </div>
    );
};

export default Home;