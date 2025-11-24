'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillFilePdf, AiFillTags } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
import { GoCalendar } from "react-icons/go";
import { BiSolidTagAlt, BiUser, BiWallet } from "react-icons/bi";
import { IoHomeOutline, IoShareSocialSharp } from "react-icons/io5";
import { MdOutlinePlayLesson, MdOutlineQuiz } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
const CourseDetails = () => {
    const { course_id } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch('http://localhost:3000/category.json')
            const data = await res.json()
            setItems(data)
        }
        getData()
    }, [])
    const matchCategory = items.find(data => data.id == course_id)
    console.log(matchCategory);
    return (
        <div className="py-12">
            {
                matchCategory ? (
                    <div className="container mx-auto px-16 flex  gap-10" key={matchCategory.id}>
                        <div className=" border px-8 border-gray-300 rounded-2xl w-[74%]">
                            <Image className=" mt-7  rounded-2xl" src={matchCategory.course_image} height={200} width={1200} alt=''></Image>
                            <div className="py-8">
                                <h2 className="text-3xl font-semibold text-gray-700 tracking-wider">{matchCategory.course_title}</h2>
                                <div className="flex gap-10 mt-6">
                                    <div className=" flex  gap-3 items-center ">
                                        <Image className="   rounded-2xl" src={matchCategory.instructor.image} height={40} width={40} alt=''></Image>
                                        <p className=""><span className="text-[#07a596] font-normal">Instructor: </span> {matchCategory.instructor.name}</p>
                                    </div>
                                    <div className="flex items-center gap-10">
                                        <div className="flex  items-center gap-2">
                                            <div className="text-lg text-[#07a596]">
                                                <AiFillFilePdf />
                                            </div>
                                            <p className="">Web Development</p>
                                        </div>
                                        <div className="flex  items-center gap-2">
                                            <div className="text-lg text-[#07a596]">
                                                <GoCalendar />
                                            </div>
                                            <p className="">04 April, 2022</p>
                                        </div>
                                        <div className="text-[#07a596] flex items-center gap-1 text-lg">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <p>(4.9)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 border border-gray-300 mt-8 rounded-md bg-gray-100">
                                    <div className="flex flex-col items-center justify-center  py-4 border-[#07a596] border-t-2">
                                        <div className="flex items-center gap-1 text-[#07a596]">
                                            <div className="text-xl rotate-270 w-5 ">
                                                <BiSolidTagAlt />
                                            </div>
                                            <h2 className="t">Overview</h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center border-r border-l py-4 border-gray-300">
                                        <div className="flex items-center gap-1 text-gray-700">
                                            <div className="text-xl 0 w-5 ">
                                                <BiWallet />
                                            </div>
                                            <h2 className="t">Curriculam</h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center border-r py-4 border-gray-300">
                                        <div className="flex items-center gap-1 text-gray-700">
                                            <div className="text-xl w-5 ">
                                                <BiUser />
                                            </div>
                                            <h2 className="t">Instructor</h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center ">
                                        <div className="flex items-center gap-1 text-gray-700">
                                            <div className="text-xl  w-5 ">
                                                <FaRegStar />
                                            </div>
                                            <h2 className="">Review</h2>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-8">
                                    <h2 className="text-2xl text-gray-700 font-semibold">Drescription</h2>
                                    <p className="text-sm text-gray-500 mt-4 leading-7">Rapidiously develop parallel e-markets via worldwide paradigms. Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or "organic" sources. Energistically reinvent distinctive value via parallel services. Phosfluorescently deploy extensive paradigms vis-a-vis cross-unit manufactured products. Uniquely coordinate impactful services whereas team building e-services. Globally grow multimedia based benefits vis-a-vis client-based niches.</p>

                                    <p className="text-sm text-gray-500 mt-4 leading-7">Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p>
                                </div>
                                <div className="mt-8">
                                    <h2 className="text-2xl text-gray-700 font-semibold">What Will You Learn?</h2>
                                    <p className="text-sm text-gray-500 mt-4 leading-7">Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or "organic" sources. Energistically reinvent distinctive value via parallel services extensive paradigms cross-unit manufactured products.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" border border-gray-300 py-7 rounded-xl px-5">
                                <div className="">
                                    <div className="flex items-center gap-3  ">
                                        <h2 className="text-3xl font-semibold">${matchCategory.price}</h2>
                                        <p className="text-[11px] bg-[#07a596] py-1 px-3 rounded-full text-white">25% Off</p>
                                    </div>
                                    <h4 className="border px-20 mt-6  py-4 uppercase  rounded-sm bg-[#07a596] duration-500 text-white cursor-pointer font-semibold">Add To Card</h4>
                                    <h4 className="border px-20 mt-3 text-gray-700 py-4 uppercase border-[#07a596] rounded-sm hover:bg-[#07a596] duration-500 hover:text-white cursor-pointer font-semibold">buy now</h4>

                                </div>
                            </div>
                            <div  className=" border border-gray-300 py-7 rounded-xl px-5 mt-9">
                                <div>
                                    <div>
                                        <h2 className="text-2xl font-semibold  pb-5 text-gray-700 border-b border-gray-300">Course Information</h2>
                                        <div className="flex items-center gap-2 py-5 border-b border-gray-300">
                                            <div className="text-lg text-[#07a596]">
                                                <IoHomeOutline />
                                            </div>
                                            <p className="text-sm">Instuctor : <span className="text-gray-500"> {matchCategory.instructor.name}</span></p>
                                        </div>
                                        <div className="flex items-center gap-2 py-5 border-b border-gray-300">
                                            <div className="text-lg text-[#07a596]">
                                               <MdOutlinePlayLesson />
                                            </div>
                                            <p className="text-sm">Lessons: <span className="text-gray-500"> {matchCategory.lessons}</span></p>
                                        </div>
                                        <div className="flex items-center gap-2 py-5 border-b border-gray-300">
                                            <div className="text-lg text-[#07a596]">
                                               <IoMdTimer />
                                            </div>
                                            <p className="text-sm">Duration : <span className="text-gray-500">15h 30m 23s </span></p>
                                        </div>
                                        <div className="flex items-center gap-2 py-5 border-b border-gray-300">
                                            <div className="text-lg text-[#07a596]">
                                               <AiFillTags />
                                            </div>
                                            <p className="text-sm">Course level : <span className="text-gray-500"> Bigenners</span></p>
                                        </div>
                                        <div className="flex items-center gap-2 py-5 border-b border-gray-300">
                                            <div className="text-lg text-[#07a596]">
                                                <GrLanguage />
                                            </div>
                                            <p className="text-sm">Language : <span className="text-gray-500"> English</span></p>
                                        </div>
                                        <div className="flex items-center gap-2 py-5">
                                            <div className="text-lg text-[#07a596]">
                                               <MdOutlineQuiz />
                                            </div>
                                            <p className="text-sm"> Guizzes : <span className="text-gray-500"> 06</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[#07a596] text-center flex  items-center justify-center gap-2 mt-5 bg-gray-100 py-4  rounded-md cursor-pointer font-semibold ">
                                    <div className="text-xl">
                                        <IoShareSocialSharp />
                                    </div>
                                    <h4 >Share This Course </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : <p>data not found</p>
            }
        </div>
    );
};

export default CourseDetails;