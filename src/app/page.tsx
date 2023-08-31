"use client"

import Image from 'next/image'
import useMousePosition from './utils/useMousePosition'
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();  
  const size = isHovered ? 400 : 40;

  return (
    <main className='h-screen'>

    <motion.div className='h-full w-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default absolute mask bg-[#ec4e39]' animate={{
      WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
      WebkitMaskSize: `${size}px`
    }} transition={{type: "tween", ease: "backOut"}}> 
        <p className='w-[1000px]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.</p>
    </motion.div>

    <div className='h-full w-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default'>
      <p className='w-[1000px]'>I'm a <span className='text-[#ec4e39]'>selectively skilled</span> product designer with strong focus on productiong high quality & impactful digital experience.</p>
    </div>

    </main>
  )
}
