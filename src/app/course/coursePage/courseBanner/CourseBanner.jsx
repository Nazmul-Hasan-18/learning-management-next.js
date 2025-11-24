import React from 'react';
import img from './../../../img/page-header-bg.png'
import Image from 'next/image';
import Img1 from './../../../img/page-header-shape-1.png'
import Link from 'next/link';
const CourseBanner = () => {
    return (
        <div className='relative py-15'>
            <div className='relative'>
                <div className='flex relative flex-col justify-end items-end'>
                    <Image className='relative' src={img} width={1400} height={100} alt='img'></Image>
                    <div className='bg-gradient-to-r  from-white via-white/89 to-black/5 w-full h-90 absolute top-0'></div>
                </div>
                <div className='translate-y-1/2 absolute top-0 ml-5'>
                    <Image src={Img1} width={220} height={100} alt='img1'></Image>
                </div>
            </div>
            <div className=' absolute top-40 -translate-y-1/2 px-60 mx-auto' data-aos="fade-up"
                data-aos-duration="3000">
                <h2 className='text-5xl font-semibold text-gray-700'>Course Page</h2>
                <div className='font-semibold mt-4 text-gray-700'>
                    <Link href='/'>Home / </Link>
                    <Link href='/course'>Course </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;