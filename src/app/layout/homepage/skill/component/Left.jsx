import React from 'react';
import { LuPhoneCall } from "react-icons/lu";

const Left = () => {
    return (
        <div className='flex gap-8'  data-aos="fade-right">
            <div >
                <img className='rounded-bl-[60px] rounded-tr-[60px] border-6 border-white outline outline-gray-300' src="https://html.rrdevs.net/edcare/assets/img/images/about-img-1.jpg" alt="" />
                <div className='bg-[#07a596] flex justify-center items-center gap-4 py-7 mt-5 rounded-bl-[50px] rounded-tr-[50px]'>
                    <div className='text-2xl bg-white p-4 rounded-full text-[#07a596] '>
                        <LuPhoneCall />
                    </div>
                    <div className='text-sm uppercase  font-semibold '>
                        <p className='text-sm uppercase text-white'>online support</p>
                        <h2 className='text-2xl font-bold text-white'>01756-966372</h2>
                    </div>
                </div>
            </div>
            <div >
                    <img className='rounded-br-[60px] rounded-tl-[60px] mt-36' src="https://html.rrdevs.net/edcare/assets/img/images/about-img-2.jpg" alt="" />
                </div>
        </div>
    );
};

export default Left;