'use client'
import React from 'react';


const Me = () => {


    return (
        <div className='border-b-2 border-[#fcebe3] bg=[#fef8f5] max-w-[1250px] h-[80vh] overflow-hidden px-12 py-32 flex flex-col-reverse sm:flex-row justify-center gap-9' id='me' >
            <div className='flex-[2] pr-3 flex flex-col gap-5'>
                <h1 className='md:text-4xl text-3xl font-bold me-text text-[#4e4039]'>
                    I am Abd eldjalil a Full stack develop <br />
                    with big skills
                </h1>
                <span className='text-[#a08f86] text-2xl'>
                    I'm just a university student hope you like my portfolio
                </span>
                <a className='bg-[#eb5d1e] text-[#fff] inline-block w-fit rounded-[0.2rem] px-5 tracking-wider py-[0.3rem]' href='#about'>
                    About me
                </a>
            </div>
            <div className='flex-[3]'>
                <h1 className='text-4xl font-bold' >
                    I am Abd eldjalil a Full stack developer, <br />
                    with big skills
                </h1>
            </div>
        </div>
    );
};
export default Me;