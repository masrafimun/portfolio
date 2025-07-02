import React from 'react';
import { SiReact } from "react-icons/si";


import { SiNextdotjs, SiMongodb, SiExpress, SiBootstrap, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
const Technologies = () => {
    return (
        <div className='container mx-auto px-8 border-b border-neutral-800 pb-24 '>
            <h1 className='my-20 text-center text-4xl '>Technologies</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <SiNextdotjs className='text-5xl text-white'/>
                </div>

                 <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <SiMongodb className='text-5xl text-green-400'/>
                </div>

                 <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <SiExpress className='text-5xl text-[#303030]'/>
                </div>

                 <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <SiBootstrap className='text-5xl text-[#7952B3]'/>
                </div>

                 <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <SiTailwindcss className='text-5xl text-sky-400'/>
                </div>

                 <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <FaNodeJs className='text-5xl text-green-500'/>
                </div>

                 <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                    <SiReact className='text-5xl text-cyan-400'/>
                </div>
            </div>
        </div>
    );
};

export default Technologies;