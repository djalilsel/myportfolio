import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-[1250px] h-[100vh] flex w-full px-12 pb-4 pt-20' id='contact'>
            <div className='flex-1 shadow-lg bg-[#fff] border p-4 flex flex-col gap-8'>
                <span className='text-2xl font-semibold underline underline-offset-4'>Contact me:</span>
                <span className='block text-lg'>
                    Email: <a className='text-blue-600' target='_blank' href='mailto:selamnia.a.eldjalil@gmail.com'>selamnia.a.eldjalil@gmail.com</a>
                </span>
                <span className='block text-lg'>
                    Phone: <span className='text-blue-600'>+213799902523</span>
                </span>
                <span className='block text-lg'>
                    Linkedin: <a className='text-blue-700' target='_blank' href='https://www.linkedin.com/in/abdeldjalilselamnia/'>Abd eldjalil Selamnia</a>
                </span>
                <span className='block text-lg'> 
                    Instagram: <a className='text-blue-700' target='_blank' href='https://www.instagram.com/djalil_sel/'>djalil_sel</a>
                </span>
            </div>
            <div className='flex-1 bg-slate-500 p-4'>

            </div>
        </div>
    );
};

export default Contact;