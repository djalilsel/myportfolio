'use client'

import React, { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import axios from 'axios'
import { githublogo } from '@/public/fakedata'

const Projects = () => {

    const [projectsData, setProjectsdata] = useState([])
    const [filters, setFilters] = useState("")

    useEffect(() => {
        async function fetchProjects(){
            try{
                const data = await axios.get('http://localhost:8800/api/projects/all')
                setProjectsdata(data.data)
            } catch(err){
                console.log(err);
            }
        }
        fetchProjects()
    }, [])

    return (
        <div className='max-w-[1250px] flex flex-col items-center h-[100vh] pt-20' id='projects'>
            <div className='body-font font-bold text-2xl mb-3'>
                This is my Projects
            </div>
            <hr className='h-[4px] w-28 bg-[#eb5d1e] mx-auto rounded-lg mb-8'/>
            <div className='flex justify-center gap-4 mb-8 body-font font-semibold cursor-pointer'>
                <div style={{color: filters !== "" ? "black" : "#eb5d1e"}} onClick={() => setFilters("")}>All</div>
                <div style={{color: filters !== "nextjs" ? "black" : "#eb5d1e"}} onClick={() => setFilters("nextjs")}>Nextjs</div>
                <div style={{color: filters !== "nodejs" ? "black" : "#eb5d1e"}} onClick={() => setFilters("nodejs")}>Nodejs</div>
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-10'>
                {projectsData.map((project, index) => {
                    if(filters === "") return <ProjectCard
                                                    key={index} 
                                                    title={project.title} 
                                                    preview={project.preview}
                                                    description={project.description}
                                                    githuburl={project.githuburl}
                                                    siteurl={project.siteurl}
                                                    tags={project.tags}
                                                    githublogo={githublogo}
                                                />
                                                
                    const nextjs = project.tags.split(",").map(tag => (tag == filters) )
                    for(let i = 0; i < nextjs.length; i++){
                        if(nextjs[i] == true){
                            return <ProjectCard
                                key={index} 
                                title={project.title} 
                                preview={project.preview}
                                description={project.description}
                                githuburl={project.githuburl}
                                siteurl={project.siteurl}
                                tags={project.tags}
                                githublogo={githublogo}
                            />
                        }
                    }

                    return null
                })}
            </div>
        </div>
    );
};

export default Projects;