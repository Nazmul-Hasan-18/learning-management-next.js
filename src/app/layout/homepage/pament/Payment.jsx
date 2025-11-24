import React from 'react';
import PaymentTop from './component/PaymentTop';
import PaymentBottom from './component/PaymentBottom';
import img1 from './../../../img/promo-shape-1.png'
import img2 from './../../../img/promo-shape-2.png'
import Image from 'next/image';

const Payment = () => {
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className='bg-[#182125] font-[poppins] py-20' >
                <div className='ml-15 mt-6 absolute '>
                    <Image src={img1} width={130} height={40} alt=''></Image>
                </div>
                <div className='right-10 mt-2  absolute '>
                    <Image src={img2} width={130} height={40} alt=''></Image>
                </div>
                <PaymentTop></PaymentTop>
                <PaymentBottom></PaymentBottom>
            </div>
        </div>
    );
};

export default Payment;