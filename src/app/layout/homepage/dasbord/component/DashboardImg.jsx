import React from 'react';
import img1 from './../../../../img/faq-img.png'
import Image from 'next/image';
const DashboardImg = () => {
    return (
        <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='relative'>
                <Image  className='rounded-4xl ml-30' src={img1} width={420} height={300} alt=''></Image>
                <div className='bg-white/10 backdrop-blur-sm w-60 flex flex-col items-center justify-center py-8 rounded-2xl absolute top-50'>
                    <h2 className='text-xl font-semibold text-gray-700 mb-2'>Total student</h2>
                     <div className='flex items-center  '>
                        <img className='border rounded-full border-white' src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-1.png" alt="" />
                        <img className='ml-[-18px] border rounded-full border-white' src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-2.png" alt="" />
                        <img  className='ml-[-18px] border rounded-full border-white'  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-3.png" alt="" />
                        <img  className='ml-[-18px] border rounded-full border-white' src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-4.png" alt="" />
                        <div>
                            <p className='text-sm bg-[#07a596] py-2.5 px-2 rounded-full text-white border border-white ml-[-18] font-semibold'>25+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardImg;