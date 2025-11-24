import React from 'react';
import CourseTop from './component/CourseTop';
import CourseBottom from './component/CourseBottom';

const Course = () => {
    return (
        <div className='bg-[#f2f4f7]'>
            <CourseTop></CourseTop>
            <CourseBottom></CourseBottom>
        </div>
    );
};

export default Course;