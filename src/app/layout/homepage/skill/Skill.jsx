import React from 'react';
import Left from './component/Left';
import Right from './component/Right';

const Skill = () => {
    return (
        <div className='bg-[##ffffff] pt-30 pb-10'>
            <div className='container mx-auto px-16 grid grid-cols-12 '>
                <div className='col-span-6 '>
                    <Left></Left>
                </div>
                <div className='col-span-6 ml-[-40]'>
                    <Right></Right>
                </div>
            </div>
        </div>
    );
};

export default Skill;