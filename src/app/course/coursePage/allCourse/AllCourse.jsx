'use client'
import SingleCard from "@/app/component/shared/singleCard/SingleCard";
import { useEffect, useState } from "react";

const AllCourse = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const baseurl = process.env.NEXTT_URL  || ''
            const res = await fetch(`${baseurl}/category.json`)
            const data = await res.json()
            setData(data)
        }
        getData()
    }, [])

    return (
        <div className="grid grid-cols-3 gap-8 container mx-auto px-16 py-5" data-aos="fade-up"
            data-aos-duration="3000">
            {
                data.map(data => (
                    <div key={data.id}><SingleCard data={data}></SingleCard></div>
                ))
            }
        </div>
    );
};

export default AllCourse;