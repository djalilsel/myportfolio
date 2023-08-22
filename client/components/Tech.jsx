import React from 'react';
import TechCard from './components/TechCard';

const Tech = () => {

    const fakeData = [
        {
            title: 'Html & Css',
        },
        {
            title: 'Java Script',
        },
        {
            title: 'Reactjs',
        },
        {
            title: 'React Router',
        },
        {
            title: 'Nextjs',
        },
        {
            title: 'Tailwindcss',
        },
        {
            title: 'Nodejs',
        },
        {
            title: 'Express',
        },
    ]
    return (
        <div className='max-w-[1250px] w-full px-12 pt-20 mb-2 h-[60vh]' id='tech'>
            <span className='font-bold text-xl me-text'>
                Technologies
            </span>
            <hr className='h-[2px] bg-black' />
            <div className='flex sm:flex-row gap-10 sm:gap-0 flex-col mt-12'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-hidden'>
                    {fakeData.map((tech, index) => {
                        return <TechCard key={index} title={tech.title} />
                    })}
                </div>
                <div className='sm:border-l-2 sm:pl-4 font-medium text-lg sm:ml-2'>
                    I focused on the javascript language, And studied its most powerfull librarys
                </div>
            </div>
        </div>
    );
};

export default Tech;