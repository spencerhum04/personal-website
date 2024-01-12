import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from '../style';

import { close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    return (
        <nav className={`${styles.paddingX} w-full flex items-center fixed py-5 top-0 ${scrolled ? "bg-white" : "bg-transparent"}`}>

            <div className={`${styles.paddingX} w-full flex justify-between mx-auto items-center`}>
                <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0);}}>
                    <span className="text-cyan-200 font-poppins font-medium text-[25px] leading-[23px] px-[0px]">spencerhum</span>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`${active == nav.title ? "text-white" : "text-zinc-400"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className="w-[28px] h-[28px] object-contain cursor-pointer" 
                    onClick={() => setToggle((prev) => !prev)} 
                    />

                    <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded -xl sidebar`}
                    >
                        <ul className="list-none flex flex-col justify-end items-center flex-1">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                                >
                                    <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar