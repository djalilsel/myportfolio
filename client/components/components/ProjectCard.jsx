'use client'
import React, { useState } from 'react';

const ProjectCard = ({ title, preview, description, githuburl, siteurl, tags, githublogo }) => {
    
    tags = tags.split(",")
    const [previeww, setPrevieww] = useState(false)

    return (
        <div className='w-56 h-72 shadow-lg rounded-md relative flex flex-col border border-slate-400 hover:border-amber-500'>
            <div className='flex-1 relative overflow-hidden' onMouseEnter={() => setPrevieww(true)} onMouseLeave={() => setPrevieww(false)}>
                {siteurl && previeww && <a id='livepreview' href={siteurl} target='_blank' className='absolute body-font tracking-wider h-full w-full hover:bg-[rgba(82,25,31,0.4)] text-[#fff] flex justify-center items-center'>
                    Live Site
                </a>}
                <img src={preview ? preview : "https://i.pinimg.com/564x/20/b7/4c/20b74cc25225a73f99c941e9163b80fd.jpg"} alt="preview" className='w-full h-full' />
            </div>
            <div className='flex-1 cursor-default p-1 px-2'>
                <section className='font-bold me-text tracking-wider'>
                    {title}
                </section>
                <section className='body-font text-xs'>
                    {description}
                </section>
                <section className='text-xs text-slate-500'>
                    {tags.map(tag => (<span key={tag}>#{tag} </span>))}
                </section>
            </div>
            <a href={githuburl} className='absolute top-1 right-1 bg-white rounded-full ' target="_blank">
                <img src={githublogo.src} alt="github link" />
            </a>
            
        </div>
    );
};

export default ProjectCard;