import React from 'react';
import { AiFillSpotify } from 'react-icons/ai';

const TopCourseTop = () => {
    return (
        <div>
             <div className='container mx-auto px-20 text-center items-center justify-center flex flex-col py-10'>
                        <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-55  border border-gray-200'>
                            <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                                <AiFillSpotify />
                            </div>
                            <p>Top Class Course</p>
                        </div>
                        <h1 className='text-4xl font-semibold text-gray-800 mt-5'>Explore Featured Courses</h1>
                    </div>
        </div>
    );
};

export default TopCourseTop;