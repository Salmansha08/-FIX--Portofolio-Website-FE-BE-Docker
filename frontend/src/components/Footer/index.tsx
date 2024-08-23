import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#adb7be] border-s-transparent text-white">
      <div className="px-8 py-5 justify-between">
        <p className="text-xs sm:text-sm items-center text-center text-slate-200">© 2024 Salman Wiharja. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
