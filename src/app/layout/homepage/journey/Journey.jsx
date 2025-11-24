import React from 'react';
import JourneyLeft from './component/JourneyLeft';
import JourneyRight from './component/JourneyRight';

const Journey = () => {
    return (
        <div>
            <div className='grid grid-cols-12 container mx-auto px-20 gap-10 py-20'>
                <div className='col-span-6'>
                    <JourneyLeft></JourneyLeft>
                </div>
                <div className='col-span-6'>
                    <JourneyRight></JourneyRight>
                </div>
            </div>
        </div>
    );
};

export default Journey;