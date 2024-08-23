'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumber = dynamic(() => import('react-animated-numbers'), { ssr: false });

const achievmentList = [
  {
    title: 'Project',
    value: 30,
    postfix: '+',
  },
  {
    prefix: '~',
    title: 'Client',
    value: 1,
  },
  {
    title: 'Awards',
    value: 2,
    postfix: '+',
  },
  {
    title: 'Years',
    value: 2,
    postfix: '+',
  },
];
const SectionAchievement = () => {
  return (
    <section className="xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-4xl font-bold text-white mb-4">My Achievement</h2>
      <div className="border-[#adb7be] border rounded-md lg:flex lg:flex-row grid grid-cols-2 items-center justify-between mb-8">
        {achievmentList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center py-4 sm:px-24">
              <h3 className="text-4xl text-white font-bold py-2">
                <div className="flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumber
                    includeComma
                    animateToNumber={parseInt(String(achievement.value))}
                    locale="en-US"
                    className="text-white text-4xl font-bold flex flex-row"
                    transitions={(index) => ({
                      type: 'spring',
                      duration: index + 0.3,
                    })}
                  />
                  {achievement.postfix}
                </div>
              </h3>
              <p className="text-[#adb7be] text-lg">{achievement.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionAchievement;
