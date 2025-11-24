'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuLeftAlt } from "react-icons/cg";

const Menu = () => {
    const pathName = usePathname()

    return (
        <div className="bg-white">
            <div className='container mx-auto px-16 flex items-center gap-2'>
                <div className='text-2xl'>
                    <CgMenuLeftAlt />
                </div>
                <h4 className='text-xl font-semibold border-gray-300  text-gray-700 border-r py-6 pr-8 uppercase'>Categories</h4>
                <div className="pl-10 flex items-center gap-12 font-semibold uppercase">
                    <Link href="/">
                    <p className={pathName ==="/" ? 'text-[#07a596]' : 'text-gray-700'} >Home</p>
                    </Link>
                    <Link href="/course">
                    <p className={pathName ==="/course" ? 'text-[#07a596]' : 'text-gray-700'} >Courses</p>
                    </Link>
                    <Link href="/shop">
                    <p className={pathName ==="/shop" ? 'text-[#07a596]' : 'text-gray-700'} >Shop</p>
                    </Link>
                    <Link href="/pages">
                    <p className={pathName ==="/pages" ? 'text-[#07a596]' : 'text-gray-700'} >pages</p>
                    </Link>
                    <Link href="/blog">
                    <p className={pathName ==="/blog" ? 'text-[#07a596]' : 'text-gray-700'} >Blog</p>
                    </Link>
                    <Link href="/contact">
                    <p className={pathName ==="/contact" ? 'text-[#07a596]' : 'text-gray-700'} >Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;