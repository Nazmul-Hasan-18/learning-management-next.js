import React from 'react';
import DashboardImg from './component/DashboardImg';
import DashboardContant from './component/DashboardContant';

const Dashboard = () => {
    return (
        <div className='font-[poppins] container mx-auto px-20 items-center py-20 flex gap-20'>
            <DashboardImg></DashboardImg>
            <DashboardContant></DashboardContant>
        </div>
    );
};

export default Dashboard;