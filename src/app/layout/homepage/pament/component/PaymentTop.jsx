import React from 'react';
import { AiFillSpotify } from 'react-icons/ai';

const PaymentTop = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='container mx-auto px-20 text-center items-center justify-center flex flex-col py-10'>
                <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-50'>
                    <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                        <AiFillSpotify />
                    </div>
                    <p>Why Choose Us</p>
                </div>
                <h1 className='text-4xl font-semibold text-white mt-5'>Explore Yourself All Over The World</h1>
            </div>
        </div>

    );
};

export default PaymentTop;