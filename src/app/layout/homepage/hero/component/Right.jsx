import React from 'react';

const Right = () => {
    return (
        <div className='relative'>
            <img className='ml-20 rounded-[60px]' src="https://html.rrdevs.net/edcare/assets/img/images/hero-img-1.png" alt="" />
            <div className='absolute top-50 right-[-55] '>
                <img className=' myanimate' src="https://html.rrdevs.net/edcare/assets/img/shapes/hero-shape-1.png" alt="" />
            </div>
            <div className='text-center absolute left-[-8] top-60 bg-white py-6 rounded-xl px-9 '>
                <h3 className='text-4xl font-semibold text-[#07a596]'>256+</h3>
                <p className='uppercase text-sm mt-1'>Crashed Courses</p>
            </div>
        </div>
    );
};

export default Right;