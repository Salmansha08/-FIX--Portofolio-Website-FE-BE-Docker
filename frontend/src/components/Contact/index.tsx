'use client';

import React from 'react';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import Link from 'next/link';

function SectionContact() {
  const handleSubmit = async (event: { preventDefault: () => void; target: { email: { value: any }; subject: { value: any }; message: { value: any } } }) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: event.target.email.value,
          subject: event.target.subject.value,
          message: event.target.message.value,
        }),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="grid md:grid-cols-8 grid-cols-1 my-4 md:my-4 py-4">
        <div className="md:col-span-5">
          <h3 className="text-3xl font-bold text-white my-2">Let&apos;s Connect</h3>
          <p className="text-[#adb7be] mb-2 max-w-xl">I&apos;m currently looking for new opportunities. Feel free to reach out if you think I&apos;ll be a good fit.</p>
          <div className="socials flex flex-row gap-2 mb-4 sm:h-30 sm:w-auto">
            <Link href="https://github.com/Salmansha08" target="_blank">
              <GithubLogo size={32} color="#ffffff" weight="bold" className="hover:bg-primary-500 rounded-md" />
            </Link>
            <Link href="https://www.linkedin.com/in/salman-wiharja/" target="_blank">
              <LinkedinLogo size={32} color="#ffffff" weight="bold" className="hover:bg-primary-500 rounded-md" />
            </Link>
            <Link href="mailto:salmanwiharja8@gmail.com" target="_blank">
              <EnvelopeSimple size={32} color="#ffffff" weight="bold" className="hover:bg-primary-500 rounded-md" />
            </Link>
          </div>
        </div>
        <div className="md:col-span-3">
          <form
            className="flex flex-col gap-3"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event as React.FormEvent<HTMLFormElement> & { target: { email: { value: any }; subject: { value: any }; message: { value: any } } })}
          >
            <div>
              <label htmlFor="email" className="text-white block text-sm font-medium my-1">
                Your email
              </label>
              <input type="email" id="email" name="email" className="input rounded-lg px-3 py-1 border border-[#adb7be] placeholder-[#adb7be] text-[#121212] text-sm block w-full" required placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="subject" className="text-white block text-sm font-medium my-1">
                Subject
              </label>
              <input type="text" id="subject" name="subject" className="input rounded-lg px-3 py-1 border border-[#adb7be] placeholder-[#adb7be] text-[#121212] text-sm block w-full" required placeholder="Enter your subject!" />
            </div>
            <div>
              <label htmlFor="message" className="text-white block text-sm font-medium my-1">
                Message
              </label>
              <textarea id="message" name="message" className="rounded-lg px-3 py-1 border border-[#adb7be] placeholder-[#adb7be] text-[#121212] text-sm block w-full" required placeholder="Enter your message" />
            </div>
            <button type="submit" className="btn w-fit text-sm md:place-self-end place-self-center mt-3 px-5 py-2 rounded-lg hover:bg-primary-600 bg-primary-700 text-white font-medium hover:text-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
