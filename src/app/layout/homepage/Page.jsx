import React from 'react';
import Hero from './hero/Hero';
import Skill from './skill/Skill';
import Course from './course/Course';
import Payment from './pament/Payment';
import TopCourse from './topCourse/TopCourse';
import Rating from './rating/Rating';
import Dashboard from './dasbord/Dashboard';
import Team from './team/Team';
import Journey from './journey/Journey';
import Learning from './learning/Learning';
import Update from './update/Update';

const Page = () => {
    return (
        <div>
            <Hero></Hero>
            <Skill></Skill>
            <Course></Course>
            <Payment></Payment>
            <TopCourse></TopCourse>
            <Rating></Rating>
            <Dashboard></Dashboard>
            <Team></Team>
            <Journey></Journey>
            <Learning></Learning>
            <Update></Update>
        </div>
    );
};

export default Page;