import React from 'react';
import Link from "next/link";

const YourComponent: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-sans bg-[#ffffff] text-[#000000]">
      <header className="flex items-center h-16 px-4 border-b shrink-0">
        <nav className="flex flex-row items-center justify-between w-full gap-6 text-lg font-medium md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" passHref>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                <path d="M12 3v6"></path>
              </svg>
              <span>Troulette</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 md:gap-8 md:p-10">
        <div className="flex flex-row gap-4 justify-center">
          {/* ... (rest of the content) ... */}
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 self-center border border-gray-300 bg-[#ed4264] text-[#ffffff] py-8 px-8 text-lg">
          Troulette
        </button>
        <div className="flex justify-center gap-8">
          {/* ... (rest of the content) ... */}
        </div>
      </main>
      <footer className="flex items-center justify-center h-16 px-4 border-t text-sm text-gray-500 dark:text-gray-400">
        <span>© 2024 Troulette. All rights reserved. | </span>
        <Link href="#" passHref>
          <span className="ml-2">Privacy Policy</span>
        </Link>
        <span className="mx-2">|</span>
        <Link href="#" passHref>
          <span className="mr-2">Terms of Service</span>
        </Link>
      </footer>
    </div>
  );
};

export default YourComponent;