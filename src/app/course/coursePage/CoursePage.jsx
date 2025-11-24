import React from 'react';
import AllCourse from './allCourse/AllCourse';
import TopCourseTop from '@/app/layout/homepage/topCourse/component/TopCourseTop';
import CourseBanner from './courseBanner/CourseBanner';

const CoursePage = () => {
    return (
        <div>
            <div>
                <CourseBanner></CourseBanner>
            </div>
            <div>
                <TopCourseTop></TopCourseTop>
                <AllCourse></AllCourse>
            </div>
        </div>
    );
};

export default CoursePage;