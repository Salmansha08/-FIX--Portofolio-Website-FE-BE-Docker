import React from 'react';
import Link from 'next/link'; // Mengimpor modul Link dari Next.js

function LoginForm() {
  return (
    <form className="rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input id="username" type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input id="password" type="password" placeholder="******************" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button type="button" className="hover:bg-accent-200 bg-gradient-to-br from-primary-500 to-secondary-500 text-white  hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign In
        </button>
        <Link href="/forgot-password">
          {' '}
          <a className="inline-block align-baseline font-bold text-sm text-primary-500 hover:text-secondary-500">Forgot Password?</a>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
