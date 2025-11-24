import React from 'react';
import { AiFillSpotify } from 'react-icons/ai';
import Updateleft from './component/Updateleft';

const Update = () => {
    return (
        <div className='container mx-auto px-20 flex flex-col items-center justify-center py-24'>
            <div className='flex flex-col items-center' data-aos="fade-up"
                data-aos-duration="3000">
                <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-46 border border-gray-200'>
                    <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                        <AiFillSpotify />
                    </div>
                    <p>News & Blogs</p>
                </div>
                <h1 className='text-4xl font-semibold  text-gray-800 leading-12 mt-4 tracking-wider '>
                    Latest News Updates</h1>

            </div>
            <div>
                <div>
                    <Updateleft></Updateleft>
                </div>
            </div>
        </div>
    );
};

export default Update;