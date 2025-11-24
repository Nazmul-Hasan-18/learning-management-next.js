import React from 'react';
import TopCourseTop from './component/TopCourseTop';
import Categories from './component/Categories';

const TopCourse = () => {
    return (
        <div className='bg-gray-200 py-15'>
           <TopCourseTop></TopCourseTop>
           <Categories></Categories> 
           
        </div>
    );
};

export default TopCourse;