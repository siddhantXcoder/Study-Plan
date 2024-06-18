import React, { useEffect, useState } from 'react';
import logo from "../../../src/logo/StudyPlan.svg";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProfileWindow from "../core/Auth/ProfileWindow";
import { categories } from '../../services/apis';
import { apiConnector } from "../../services/connection";
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import ACCOUNT_TYPE from '../../Constants/accountType';



const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Catalog', link: '/catalog' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' }
];

export const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItem } = useSelector((state) => state.cart);

    const [subLinks, setSubLinks] = useState([]);
    

    // const fetchSubLinks = async() => {
    //     try {
    //         const res = await apiConnector("GET", categories.CATEGORES_API);
    //         console.log(res);
    //         setSubLinks(res.data.data);
    //     } catch (error) {
    //         console.log("Could fetch")
    //     }
    // }

    // useEffect(() => {
    //     // Fetch sublinks here if needed
    //     fetchSubLinks();
    // }, []);

    const location = useLocation();

    return (
        <div className='flex md:h-14 h-[8rem]  items-center justify-center border-b-[1px] border-white bg-[#001F35]'>
            <div className='flex md:w-11/12 gap-y-2 items-center flex-col md:flex-row justify-evenly'>
                
                <Link to="/">
                    <img src={logo} width={160} height={42} loading='lazy' alt="Logo" />
                </Link>

                 <nav className='md'>
                    <ul className='flex gap-x-6 text-white'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                {
                                    item.text === 'Catalog' ? (
                                        <div className='flex relative items-center justify-center gap-1 group'>
                                            <p>{item.text}</p>
                                            <IoIosArrowDropdownCircle/>
                                            
                                            <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white p-4 text-black opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                                            
                                            </div>

                                           

                                        </div>
                                    ) : (
                                        <Link to={item.link}>
                                            <p className={`${location.pathname === item.link ? 'text-blue-600' : 'text-white'}`}>
                                                {item.text}
                                            </p>
                                        </Link>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
               

                <div className='flex gap-2'>
                    {user && user?.ACCOUNT_TYPE !== "Instructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <AiOutlineShoppingCart/>
                            {
                                totalItem > 0 && (
                                    <span>
                                        {totalItem}
                                    </span>
                                )
                            }                        
                        </Link>
                    )}
                    {token === null && (
                        <>
                            <Link to="/login">
                                <button className='text-white px-[12px] py-[8px] bg-[#012D4D] rounded-lg'>
                                    Log in
                                </button>
                            </Link>
                           
                        </>
                    )}
                    {
                        token === null && (
                            <>
                            <Link to="/signup">
                                <button className='text-[#012D4D] px-[12px] py-[8px] bg-white rounded-lg'>
                                    Sign up
                                </button>
                            </Link>
                            </>
                        )
                    }
                    {
                        token !== null && <ProfileWindow/>
                    } 
                </div>

            </div>
        </div>
    );
};

{/* <nav>
<ul className='flex gap-x-6 text-white'>
    {navItems.map((item, index) => (
        <li key={index}>
            {
                item.text === 'Catalog' ? (
                    <div className='flex relative items-center justify-center gap-1 group'>
                        <p>{item.text}</p>
                        <IoIosArrowDropdownCircle/>
                        
                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white p-4 text-black opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]"></div>
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                    </div>
                ) : (
                    <Link to={item.link}>
                        <p className={`${location.pathname === item.link ? 'text-blue-600' : 'text-white'}`}>
                            {item.text}
                        </p>
                    </Link>
                )
            }
        </li>
    ))}
</ul>
</nav> */}

