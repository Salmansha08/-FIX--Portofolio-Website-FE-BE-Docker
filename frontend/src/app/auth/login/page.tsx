import SectionOauth from '@/components/Oauth';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <main>
      <div className="container mt-32 mb-8  mx-16 px-8 py-4 bg-accent-200 rounded-xl">
        <SectionOauth />
      </div>
    </main>
  );
}

export default Page;
