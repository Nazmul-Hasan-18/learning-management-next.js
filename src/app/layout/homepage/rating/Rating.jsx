import React from 'react';

const Rating = () => {
    return (
        <div className='bg-[#07a596] font-[poppins]'  data-aos="fade-up"
     data-aos-duration="3000">
            <div className='container mx-auto px-20 grid grid-cols-4 '>
                <div className='flex flex-col items-center justify-center border-r border-gray-400 py-25'>
                    <h2 className='text-white text-[42px] font-semibold'>3,192+</h2>
                    <p className=' font-semibold text-white uppercase mt-1'>Successflly Trained</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r border-gray-400 py-27'>
                    <h2 className='text-white text-[42px] font-semibold'>15,485+</h2>
                    <p className=' font-semibold text-white uppercase mt-1'>Classes Completed</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r border-gray-400 py-25'>
                    <h2 className='text-white text-[42px] font-semibold'>97.55%</h2>
                    <p className=' font-semibold text-white uppercase mt-1'>Satisfaction Rate</p>
                </div>
                <div className='flex flex-col items-center justify-center  py-25'>
                    <h2 className='text-white text-[42px] font-semibold'>97.55%</h2>
                    <p className=' font-semibold text-white uppercase mt-1'>Satisfaction Rate</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;