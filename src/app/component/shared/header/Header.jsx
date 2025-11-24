import React from 'react';
import Top from './component/Top';
import Bottom from './component/Bottom';
import Menu from './component/Menu';

const Header = () => {
    return (
        <div className='font-[poppins]  stick top-0 bg-white z-7'>
            <Top></Top>
            <Bottom></Bottom>
            <Menu></Menu>
        </div>
    );
};

export default Header;