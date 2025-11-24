import React from 'react';
import Image from 'next/image';
import img1 from './../../../../img/content-img-1.png'
import img2 from './../../../../img/content-img-2.png'
import img3 from './../../../../img/content-img-3.png'

const JourneyLeft = () => {
    return (
        <div className='relative' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className='border w-90 h-136 ml-30 rounded-tl-[60px] border-[#07a596]'>

            </div>
            <div className='flex gap-8 justify-center items-center absolute top-[-32]'>
                <div>
                    <Image className='rounded-tl-[55px]  rounded-br-[55px] ' src={img1} height={200} width={300} alt='img'></Image>
                </div>
                <div>
                    <Image className='rounded-tr-[55px] rounded-bl-[55px]' src={img2} height={200} width={300} alt='img'></Image>
                    <Image className='mt-6 rounded-tl-[55px]  rounded-br-[55px] ' src={img3} height={20} width={300} alt='img'></Image>
                </div>

            </div>
        </div>
    );
};

export default JourneyLeft;