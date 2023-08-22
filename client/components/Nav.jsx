'use client'
import React, { useState, useLayoutEffect } from 'react';
import Scrollspy from 'react-scrollspy-highlight';


const Nav = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false)

    const isBrowser = typeof window !== `undefined` 

    return (
        <nav className='bg-[#fff] h-[72px] shadow-md flex justify-center sticky top-0 w-full z-40'>
            <div className='h-full w-full flex justify-between items-center px-12 max-w-[1250px]'>
                <a href='#me' className='text-[24px] cursor-pointer text-[#7a6960] primary-font tracking-widest'>
                        Abd eldjalil
                </a>
                <Scrollspy items={ [ 'me', 'education', 'tech', 'projects', 'contact'] } currentClassName='active-nav' offset={ -130 } className='sm:flex gap-4 body-font text-[#4e4039] text-[15px] cursor-pointer font-thin hidden'>
                    <a href='me'></a>
                    <a href="#education">
                        Education
                    </a>
                    <a href="#tech">
                        Tech
                    </a>
                    <a href="#projects">
                        Projects
                    </a>
                    <a href="#contact">
                        Contact
                    </a>
                </Scrollspy>
                <div onClick={() => setToggleDropdown(!toggleDropdown)} className='sm:hidden cursor-pointer'>
                    X
                </div>
                {toggleDropdown && <div className='absolute top-10 right-10 bg-[#fff] p-12 py-16 flex flex-col gap-8 body-font text-[#4e4039] text-[24px] cursor-pointer font-thin sm:hidden'>
                    <div onClick={() => setToggleDropdown(false)} className='absolute top-4 right-10'>
                        X
                    </div>
                    <a className='hover:text-[#eb5d1e]' href="#me" onClick={() => setToggleDropdown(false)}>
                        Abd eldjalil
                    </a>
                    <a className='hover:text-[#eb5d1e]' href="#tech" onClick={() => setToggleDropdown(false)}>
                        Tech
                    </a>
                    <a className='hover:text-[#eb5d1e]' href="#experience" onClick={() => setToggleDropdown(false)}>
                        Experience
                    </a>
                    <a className='hover:text-[#eb5d1e]' href="#projects" onClick={() => setToggleDropdown(false)}>
                        Projects
                    </a>
                    <a className='hover:text-[#eb5d1e]' href="#contact" onClick={() => setToggleDropdown(false)}>
                        Contact
                    </a>
                </div>}
            </div>
        </nav>
    );
};

export default Nav;