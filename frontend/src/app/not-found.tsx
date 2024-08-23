'use client';
import { useRouter } from 'next/navigation';
import { FileSearch } from '@phosphor-icons/react';
const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={36} className="text-primary-500" />
        <h3 className="text-3xl font-bold text-primary-500 my-4">404 | Not Found</h3>
        <button onClick={() => router.back()} className="text-light text-lg rounded-xl py-1 px-4 bg-primary-500 hover:bg-secondary-500 ">
          Back
        </button>
      </div>
    </div>
  );
};

export default Page;
