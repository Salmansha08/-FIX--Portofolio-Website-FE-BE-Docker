import React from 'react';
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react';

function ButtonOauth() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <button type="button" className="flex flex-row hover:bg-accent-200 bg-gradient-to-br from-primary-500 to-secondary-500 text-white  hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <GoogleLogo size={32} weight="bold" />
          Continue with Google
        </button>

        <button type="button" className="flex flex-row hover:bg-accent-200 bg-gradient-to-br from-primary-500 to-secondary-500 text-white  hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <GithubLogo size={32} weight="bold" />
          Continue with Github
        </button>
      </div>
    </div>
  );
}

export default ButtonOauth;
