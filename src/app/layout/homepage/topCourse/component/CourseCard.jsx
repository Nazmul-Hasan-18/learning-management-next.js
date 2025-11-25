'use client'
import SingleCard from "@/app/component/shared/singleCard/SingleCard";
import { useEffect, useState } from "react";
 
const CourseCard =  ({selectedId}) => {
    const [data, setData] = useState([])
 useEffect(()=> {
    async function getData() {
        const baseurl = process.env.NEXTT_URL || ''
         const res = await fetch(`${baseurl}/category.json`)
         const data = await res.json()
         setData(data)
    }
    getData()
 }, [])
   const mathchId = selectedId ? data.filter(data=> data.category_id ==  selectedId) :data
    return (
        <div className="grid grid-cols-3 gap-5 container mx-auto px-16 py-11" data-aos="zoom-out-right">
            {
                mathchId.slice(0,3).map(data=>(
                   <div key={data.id}><SingleCard data={data}></SingleCard></div>
                ))
            }
        </div>
    );
};

export default CourseCard;