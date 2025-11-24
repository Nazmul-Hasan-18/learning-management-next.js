'use client'
import React, { useState } from 'react';
import CourseCard from './CourseCard';
const items = [
    { id: 1, name: "Business" },
    { id: 2, name: "Development" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Finance" },
    { id: 5, name: "Gaming" },
    { id: 6, name: "Design" },
    { id: 7, name: "Data Science" },
];

const Categories = () => {
    const [selectedId, setSelectedId] = useState(null);
    const handleClick = (id) => {
        setSelectedId(id);
    };
    return (
        <div >
            <div className="container mx-auto px-20 items-center   mt-8" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div className="flex flex-wrap justify-between items-center ">

                    <p
                        className={`py-3 px-9 rounded-full cursor-pointer ${selectedId === null
                            ? 'bg-[#07a596] text-white'
                            : 'bg-white text-gray-700'
                            }`}
                        onClick={() => handleClick(null)}
                    >
                        All Categories
                    </p>

                    {items.map(item => (
                        <p
                            key={item.id}
                            className={`py-3 px-8 rounded-full cursor-pointer ${selectedId === item.id
                                ? 'bg-[#07a596] text-white'
                                : 'bg-white text-gray-700'
                                }`}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <CourseCard selectedId={selectedId}></CourseCard>
            </div>
        </div>
    );
};

export default Categories;
