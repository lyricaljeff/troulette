// Correct placement of the "use client" directive
'use client'

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

// Import your icons here
import Package2Icon from "@/components/component/home";
import UserIcon from "@/components/component/home";
import CalendarDaysIcon from "@/components/component/home";
import PlaneIcon from "@/components/component/home";
import HotelIcon from "@/components/component/home";
import CarIcon from "@/components/component/home";
import DollarSignIcon from "@/components/component/home";
import { useRouter } from 'next/navigation';

function Home() {
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
      <main className="flex flex-1 flex-col gap-4 md:gap-8 md:p-10">
        <div className="flex flex-row gap-4 justify-center">
          <form className="flex-1 sm:flex-initial">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Departing:</label>
              <Input className="sm:w-[300px] md:w-[200px] lg:w-[300px]" placeholder="Departing from..." type="text" />
            </div>
          </form>
          <form className="flex-1 sm:flex-initial">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">From:</label>
              <CalendarDaysIcon className="absolute left-2.5 top-6 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" placeholder="Start date..." type="date" />
            </div>
          </form>
          <form className="flex-1 sm:flex-initial">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">To:</label>
              <CalendarDaysIcon className="absolute left-2.5 top-6 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" placeholder="End date..." type="date" />
            </div>
          </form>
        </div>
        <Button className="self-center border border-gray-300 bg-[#ed4264] text-[#ffffff] py-8 px-8 text-lg">
          Troulette
        </Button>
        <div className="flex justify-center gap-8">
          <Card className="hover:bg-gray-200 transition-colors duration-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Flight
                <br />
                to New York{"\n                          "}
              </CardTitle>
              <PlaneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$123</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Lowest price found</p>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center text-3xl font-bold">+</div>
          <Card className="hover:bg-gray-200 transition-colors duration-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Hotel
                <br />
                in New York{"\n                          "}
              </CardTitle>
              <HotelIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$456</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Lowest price found</p>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center text-3xl font-bold">+</div>
          <Card className="hover:bg-gray-200 transition-colors duration-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Rental Car
                <br />
                in New York{"\n                          "}
              </CardTitle>
              <CarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$789</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Lowest price found</p>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center text-3xl font-bold">=</div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Vacation Price</CardTitle>
              <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1368</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Combined price</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center gap-4 mt-8">
          <p className="text-center text-gray-600">
            Not vibing with the current scene? Craving results that scream &lsquo;you&rsquo;? Let&apos;s get personal! ✨🔍
          </p>
          <Link href="/signup" passHref>
            <Button className="self-center border border-gray-300 bg-[#ed4264] text-[#ffffff] py-4 px-4 text-lg">Sign Up</Button>
          </Link>
          <p className="text-center text-gray-600">
            Score a premium account for just a buck a month
            <br /> or go all-in for the year at a cool $10 upfront! 🚀💸
          </p>
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
}

export default Home;