import React from 'react';
import image1 from './../../../../img/promo-4.png'
import image2 from './../../../../img/promo-5.png'
import image3 from './../../../../img/promo-6.png'
import image4 from './../../../../img/promo-img-1 (1).png'
import image5 from './../../../../img/promo-img-2.png'
import image6 from './../../../../img/promo-img-3.png'
import Image from 'next/image';
const PaymentBottom = () => {
    return (
        <div data-aos="fade-down-right">
            <div className='container mx-auto px-20 py-15'>
                <div className='grid grid-cols-3 '>
                    <div className='flex flex-col items-center border-r border-gray-500  '>
                        <div className='relative '>
                            <div>
                                <Image className='  ' src={image4} width={210} height={180} alt=''></Image>
                            </div>
                            <div className=' bg-[#07a596] p-4 rounded-full border-[4px] absolute top-[-34] left-16'>
                                <Image className='  ' src={image1} width={40} height={80} alt=''></Image>
                            </div>
                        </div>
                        <div className='text-white text-center px-17 mt-8'>
                            <h3 className='text-xl  font-semibold  '>Book Free Consultatio</h3>
                            <p className='text-sm mt-3 text-gray-200 leading-5'>Standards in leadership skills synergize
                                optimal expertise rather than innavative leadership skills</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-r border-gray-500  '>
                        <div className='relative '>
                            <div>
                                <Image className='  ' src={image5} width={210} height={180} alt=''></Image>
                            </div>
                            <div className=' bg-[#07a596] p-4 rounded-full border-[4px] absolute top-[-34] left-16'>
                                <Image className='  ' src={image2} width={40} height={80} alt=''></Image>
                            </div>
                        </div>
                        <div className='text-white text-center px-17 mt-8'>
                            <h3 className='text-xl  font-semibold  '>Make Easy Payment</h3>
                            <p className='text-sm mt-3 text-gray-200 leading-5'>Standards in leadership skills synergize
                                optimal expertise rather than innavative leadership skills</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center  '>
                        <div className='relative '>
                            <div>
                                <Image className='  ' src={image6} width={210} height={180} alt=''></Image>
                            </div>
                            <div className=' bg-[#07a596] p-4 rounded-full border-[4px] absolute top-[-34] left-16'>
                                <Image className='  ' src={image2} width={40} height={80} alt=''></Image>
                            </div>
                        </div>
                        <div className='text-white text-center px-17 mt-8'>
                            <h3 className='text-xl  font-semibold  '>Schedule First Lesson</h3>
                            <p className='text-sm mt-3 text-gray-200 leading-5'>Standards in leadership skills synergize
                                optimal expertise rather than innavative leadership skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PaymentBottom;