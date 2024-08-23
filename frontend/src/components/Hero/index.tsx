'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import profilePicture from '/public/profile-salman-1.svg';

const SectionHero = () => {
  return (
    <section className="py-8 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-3 text-center sm:text-left">
          <h1 className="lg:leading-normal text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600">Hello, I&apos;m{''} </span>
            <br></br>
            <TypeAnimation
              className="mb-2"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Salman Wiharja',
                1000,
                'Web Developer',
                1000,
                'Machine Learning Eanthusiast',
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <div>
            <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
              <motion.button whileTap={{ scale: 0.8 }} className="px-5 py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-slate-200 bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-semibold hover:text-black mb-3">
                Hire Me
              </motion.button>
              <motion.button whileTap={{ scale: 0.8 }} className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-transparent text-white hover:bg-slate-200 hover:text-primary-500 font-semibold">
                <span className="block bg-[#181818] rounded-full px-5 py-2">Download CV</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="col-span-1 place-self-center mt-4 lg:mt-0">
          <div className="md:mt-0 mt-6 rounded-full bg-blue-500 w-[350px] h-[350px]  lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px]">
            <Image src={profilePicture} alt="hero-image" className="rounded-full" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
