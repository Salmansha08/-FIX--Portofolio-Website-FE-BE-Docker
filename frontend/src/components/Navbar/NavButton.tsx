'use client';
import Link from 'next/link';
import React from 'react';
function NavButton() {
  const user = false; //sementara sebelum ada session
  const actionLabel = user ? 'Logout' : 'Login';
  const actionLink = user ? '/auth/logout' : '/auth/login';

  return (
    <div className="flex gap-5 items-start mt-2 md:mt-0">
      <Link href="/users/dashboard" className="px-4 py-2 w-full sm:w-fit rounded-xl hover:bg-accent-200 bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-semibold hover:text-dark">
        Dashboard
      </Link>
      <Link href={actionLink} className="px-4 py-2 w-full sm:w-fit rounded-xl hover:bg-accent-200 bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-semibold hover:text-dark">
        {actionLabel}
      </Link>
    </div>
  );
}

export default NavButton;
