// Correct placement of the "use client" directive
'use client'

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import your icons here
//import Package2Icon from "@/components/component/home";
//import UserIcon from "@/components/component/home";
import { useRouter } from 'next/navigation';

function Profile() {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push('/profile');
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-[#ffffff] text-[#000000]">
      {/* ... (existing code) */}
      <header className="flex items-center h-16 px-4 border-b shrink-0">
        <nav className="flex flex-row items-center justify-between w-full gap-6 text-lg font-medium md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" passHref>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <Package2Icon className="w-6 h-6" />
              <span>Troulette</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            {/* Render UserIcon as a button */}
            <Button className="rounded-full" size="icon" variant="ghost" onClick={navigateToProfile}>
              <UserIcon className="w-4 h-4" />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-row gap-4 md:gap-8 md:p-10">
        <div className="flex flex-col gap-4 w-1/2 items-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Profile</h2>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex justify-between w-full">
              <div className="relative w-1/2 pr-2">
                <label className="block text-sm font-medium text-gray-700">First Name:</label>
                <input className="text-sm text-gray-600" value="John" />
              </div>
              <div className="relative w-1/2 pl-2">
                <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                <input className="text-sm text-gray-600" value="Doe" />
              </div>
            </div>
            <div className="relative w-full">
              <label className="block text-sm font-medium text-gray-700">Email Address:</label>
              <p className="text-sm text-gray-600">john.doe@example.com</p>
            </div>
            <div className="relative w-full">
              <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input className="text-sm text-gray-600" value="+1 (234) 567-8901" />
            </div>
            <div className="relative w-full">
              <label className="block text-sm font-medium text-gray-700">Address:</label>
              <input className="text-sm text-gray-600" value="123 Main St, Anytown, Anystate, 12345" />
            </div>
            <div className="relative w-full">
              <label className="block text-sm font-medium text-gray-700">Credit Card Number:</label>
              <input className="text-sm text-gray-600" value="**** **** **** 1234" />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Button className="bg-[#ed4264] hover:bg-[#db3a5b] text-white w-[133.08px] h-[66px]" variant="destructive">
                Edit
              </Button>
              <Button className="bg-[#ed4264] hover:bg-[#db3a5b] text-white w-[133.08px] h-[66px]" variant="destructive">
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2 items-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Personalizations</h2>
          <div className="flex flex-row justify-center gap-2 w-full">
            <div className="flex flex-col gap-4 w-1/2 items-start">
              <div className="relative w-full">
                <h3 className="text-lg font-semibold mb-2">Destinations</h3>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Tropical</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Mountain</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">City</span>
                </label>
              </div>
              <div className="relative w-full">
                <h3 className="text-lg font-semibold mb-2">Interests</h3>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Food Culture</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Nightlife</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Watersports</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Family Friendly</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2 items-start">
              <div className="relative w-full">
                <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Accessibility</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Non-Smoking</span>
                </label>
              </div>
              <div className="relative w-full">
                <h3 className="text-lg font-semibold mb-2">Vehicle</h3>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Electric</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Compact</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Mid-size</span>
                </label>
                <label className="flex items-center mb-1">
                  <input className="form-checkbox h-5 w-5 text-[#ed4264]" type="checkbox" />
                  <span className="ml-2 text-sm text-gray-700">Full-size</span>
                </label>
              </div>
            </div>
          </div>
          <Button className="mt-4 bg-[#ed4264] hover:bg-[#db3a5b] text-white w-[133.08px] h-[66px]" variant="destructive">
            Save
          </Button>
        </div>
      </main>
      <footer className="flex items-center justify-center h-16 px-4 border-t text-sm text-gray-500 dark:text-gray-400">
        <span>© 2024 Troulette. All rights reserved. |</span>
        <Link className="ml-2" href="#">
          Privacy Policy
        </Link>
        <span className="mx-2">|</span>
        <Link className="mr-2" href="#">
          Terms of Service
        </Link>
      </footer>
    </div>
  )
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default Profile;