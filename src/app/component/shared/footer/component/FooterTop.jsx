import React from 'react';
import { CiMail } from "react-icons/ci";
const FooterTop = () => {
    return (
        <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
            <div className='' >
                <div className='border px-22 flex  items-center gap-26 w-full border-gray-600 py-23 bg-white/5 backdrop-blur-xl rounded-xl'>
                    <h2 className='text-[29px] font-semibold text-white '>Subscribe Our Newsletter For <br />
                        Latest Updates</h2>
                    <div className='flex  items-center gap-5'>
                        <div className='flex items-center gap-2 border border-gray-600 py-3.5 pl-8 rounded-full w-[160%]'>
                            <div className='text-xl text-white'>
                                <CiMail />
                            </div>
                            <div>
                                <input className='text-white border-none outline-none pr-44' type="email" placeholder='Enter Your E-mail'/>
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-white bg-[#07a596] px-14 py-3.5 rounded-full
                            '>Subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;