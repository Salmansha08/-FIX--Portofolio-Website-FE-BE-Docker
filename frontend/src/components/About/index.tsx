'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabAbout from '@/components/About/TabAbout';
import Link from 'next/link';
import ProfilePicture from '/public/profile-salman-2.svg';

const TabList = [
  {
    id: 'Certification',
    title: 'Certification',
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link className="hover:text-primary-500 text-white" href={'https://www.credly.com/badges/82931302-47f6-4d2b-9604-8e7235e9f2f2'} target="_blank">
            IC3 Digital Literacy Certification GS6 Level 1
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary-500 text-white" href={'https://www.credential.net/755bb06d-41ee-4232-9cac-60b2b4b7897f'} target="_blank">
            CertNexus AIBIZ™ Credential
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary-500 text-white" href={'https://www.credly.com/badges/c8c6ca75-b625-4acf-ab39-ebcd80504de6'} target="_blank">
            MCE: Microsoft Certified Educator
          </Link>
        </li>
      </ul>
    ),
  },
  {
    id: 'Experience',
    title: 'Experience',
    content: (
      <ul className="list-disc pl-2">
        <li>AI Infrastructure (Study Independent) - Bisa AI</li>
        <li>Cloud Computing (Study Independent) - Bangkit Academy</li>
        <li>Back-End Developer (Scholarship) - SMKDEV</li>
        <li>Web Developer (Internship) - IDCloudHost</li>
        <li>Project Manager (Freelance) - LDK Project</li>
      </ul>
    ),
  },
  {
    id: 'Education',
    title: 'Education',
    content: (
      <ul className="list-disc pl-2">
        <li>(S1)Teknik Komputer - Universitas Pendidikan Indonesia (2020 - 2024)</li>
        <li>(KMMI) Mata Kuliah Keamanan Jaringan Komputer - Universitas Indonesia (2022)</li>
        <li>(Permata Sari) Mata Kuliah Kecerdasan Buatan - Universitas Syiah Kuala (2022)</li>
      </ul>
    ),
  },
  {
    id: 'Skills',
    title: 'Skills',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <ul className="font-bold text-md">Front-End</ul>
          <ul className="list-disc pl-4">
            <li>React</li>
            <li>Next.js</li>
            <li>Vue.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div>
          <ul className="font-bold text-md">Back-End</ul>
          <ul className="list-disc pl-4 text-base lg:text-md md:text-sm">
            <li>Express.js</li>
            <li>Node JS</li>
            <li>Python</li>
            <li>Golang</li>
          </ul>
        </div>
        <div>
          <ul className="font-bold text-md">Database</ul>
          <ul className="list-disc pl-4 text-base lg:text-md md:text-sm">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <ul className="font-bold text-md">Machine Learning</ul>
          <ul className="list-disc pl-4 text-base lg:text-md md:text-sm">
            <li>Tensorflow</li>
            <li>Keras</li>
            <li>PyTorch</li>
          </ul>
        </div>
        <div>
          <ul className="font-bold text-md">Internet of Things (IoT)</ul>
          <ul className="list-disc pl-4 text-base lg:text-md md:text-sm">
            <li>Arduino</li>
            <li>ESP32 and ESP8266</li>
          </ul>
        </div>
        <div>
          <ul className="font-bold text-md">Cloud</ul>
          <ul className="list-disc pl-4 text-base lg:text-md md:text-sm">
            <li>GCP (Google Cloud Platorm)</li>
          </ul>
        </div>
        <div>
          <ul className="font-bold text-md">Other</ul>
          <ul className="list-disc pl-4 text-base lg:text-md md:text-sm">
            <li>Git</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>MS Office</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'Research',
    title: 'Research',
    content: (
      <ul className="list-disc pl-2 italic">
        <li>Pembuatan motif batik baru secara otomatisasi untuk industri menggunakan kecerdasan buatan dengan metode Generative Adversarial Network&apos;s</li>
        <li>Designing a PDF Malware Detection System using Machine Learning</li>
      </ul>
    ),
  },
];

const SectionAbout = () => {
  const [tab, setTab] = useState('Certification');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-8">
        <Image src={ProfilePicture} alt="about-image" className="col-span-4 justify-center rounded-3xl my-4 mx-auto sm:mx-0" width={300} height={300} />
        <div className="col-span-8 md:ml-4 md:mt-0 sm:ml-4 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white my-2">About Me</h2>
          <p className="text-base xl:text-lg lg:text-md md:text-sm justify-normal">
            My name is Salman Abdul Jabbaar Wiharja. I am currently a college student pursuing a bachelor&apos;s degree in Computer Engineering at Universitas Pendidikan Indonesia. In 2022, I gained research experience through a project
            titled &quot;Pembuatan motif batik baru secara otomatisasi untuk industri menggunakan kecerdasan buatan dengan metode Generative Adversarial Network&apos;s.&quot; I have a deep passion for Backend Development, cybersecurity,
            Machine Learning, and the Internet of Things (IoT). I possess strong adaptability to new environments and actively seek opportunities to engage with others, as it enables me to enhance my communication skills continuously. My
            ultimate objective is to develop an IoT-based device or robot that integrates advanced AI (ML/DL) capabilities while prioritizing an exceptional security system.
          </p>
        </div>
      </div>
      <div className="md:flex flex-row justify-start mt-8">
        <TabAbout active={tab === 'Certification'} selectTab={() => handleTabChange('Certification')}>
          Certification
        </TabAbout>
        <TabAbout active={tab === 'Experience'} selectTab={() => handleTabChange('Experience')}>
          Experience
        </TabAbout>
        <TabAbout active={tab === 'Education'} selectTab={() => handleTabChange('Education')}>
          Education
        </TabAbout>
        <TabAbout active={tab === 'Skills'} selectTab={() => handleTabChange('Skills')}>
          Skills
        </TabAbout>
        <TabAbout active={tab === 'Research'} selectTab={() => handleTabChange('Research')}>
          Research
        </TabAbout>
      </div>
      <div className="mt-4">{TabList.find((item) => item.id === tab)?.content}</div>
    </section>
  );
};

export default SectionAbout;
