import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=' max-w-7xl m-auto p-6'>

      <div className=" grid grid-flow-row auto-cols-min grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex items-end h-20 col-span-1 md:col-span-2 rounded-lg bg-blue-500 p-4 md:h-52">
          <div className=' flex items-center text-3xl font-comfortaa font-semibold gap-5'>
            <GlobeAltIcon className='w-10 h-10' />
            <h1>Kinyu</h1>
          </div>
        </div>

        <div className="relative flex justify-center">

          <div className='z-10 space-y-4 relative w-full max-w-[22rem] md:max-w-[25rem] h-full backdrop-blur-2xl rounded-2xl p-10'>
            <p className={`text-md text-gray-200 md:text-2xl md:leading-normal`}>
              <strong className=' font-caveat text-[2.5rem]'>Welcome to Kinyu</strong>
              , brought to you by <span className=' text-blue-500'>@codeWithBablu.</span>
            </p>

            <Link
              href="/login"
              className="flex items-center w-fit gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>

          <div className=' absolute top-0 left-0 bg-gradient-radial from-pink-900/70 rounded-full blur-xl w-60 h-60'></div>

        </div>

        <div className="flex items-center justify-center">

          <Image
            unoptimized
            src="/dashboard.gif"
            width={400}
            height={400}
            className=""
            alt="Screenshots of the dashboard project showing desktop version"
          />

        </div>

      </div>
    </main>
  );
}