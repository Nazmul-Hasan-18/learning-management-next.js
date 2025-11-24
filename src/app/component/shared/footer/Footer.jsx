import React from 'react';
import img from './../../../img/footer-bg.png'
import Image from 'next/image';
import FooterTop from './component/FooterTop';
import FooterMiddle from './component/FooterMiddle';
import FooterBottom from './component/FooterBottom';
const Footer = () => {
    return (
        <div>
            <div className='relative' >
                <Image src={img} height={900} width={1900} alt=''></Image>
                 <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%]'>
                    <div  className='  mx-auto  '>
                        <FooterTop></FooterTop>
                        <FooterMiddle></FooterMiddle>
                    </div>
                    <FooterBottom></FooterBottom>
                </div>
            </div>
        </div>
    );
};

export default Footer;