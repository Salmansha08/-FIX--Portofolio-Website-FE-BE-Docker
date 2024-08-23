import React from 'react';
import NavLink from '@/components/Navbar/NavLink';
import NavButton from './NavButton';

const MenuOverlay = ({ links }: { links: { title: string; href: string }[] }) => {
  return (
    <ul className="flex flex-col py-4 z-10 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
      <li>
        <NavButton />
      </li>
    </ul>
  );
};

export default MenuOverlay;
