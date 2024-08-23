'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import NavLink from '@/components/Navbar/NavLink';
import MenuOverlay from '@/components/Navbar/MenuOverlay';
import NavButton from '@/components/Navbar/NavButton';
import Image from 'next/image';
import Logo from '@/../public/sts-logo.svg';

const NavLinks = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-b-1 border-t-0 border-s-0 border-accent bg-dark bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-aut px-8 py-4">
        <Link href="/" className="px-2 border-4 border-secondary-500 rounded-2xl bg-light">
          <Image src={Logo} alt="logo" width={100} height={100} priority />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navButton">
          <NavButton />
        </div>
        <div className="mobile-menu block md:hidden">
          <button onClick={toggleNavbar} className="flex items-center px-3 py-2 border rounded border-accent text-light hover:text-primary-500 hover:border-primary-500">
            {navbarOpen ? (
              <X size={24} color="#ffffff" />
            ) : (
              <div>
                <List size={24} color="#ffffff" />
              </div>
            )}
          </button>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={NavLinks} />}
    </nav>
  );
}

export default Navbar;
