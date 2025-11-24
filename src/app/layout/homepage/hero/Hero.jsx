import React from 'react';
import Left from './component/Left';
import Right from './component/Right';

const Hero = () => {
    return (
      <div className='bg-[#eff2f9] font-[poppins] py-20'>
          <div className='grid grid-cols-12 container mx-auto px-16 items-center  justify-center'>
            <div className='col-span-7'>
                <Left></Left>
            </div>
            <div className='col-span-5'>
                
            <Right></Right>
            </div>
        </div>
      </div>
    );
};

export default Hero;