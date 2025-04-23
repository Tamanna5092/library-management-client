import React from 'react';
import Banner from '../../component/Banner/Banner';
import Slide from '../../component/Slide/Slide';
import BookFeaturs from '../../component/BookFeaturs/BookFeaturs';
import BookCategory from '../../component/BookCategory/BookCategory';
import ReadingBlog from '../../component/ReadingBlog/ReadingBlog';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Slide></Slide>
             <BookCategory></BookCategory>
             <BookFeaturs></BookFeaturs>
             <ReadingBlog></ReadingBlog>
        </div>
    );
};

export default Home;