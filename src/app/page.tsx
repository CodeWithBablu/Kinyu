import { ArrowRightIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=" m-auto max-w-7xl p-6">
      <div className=" grid auto-cols-min grid-flow-row grid-cols-1 gap-10 md:grid-cols-2">
        <div className="col-span-1 flex h-44 items-end rounded-lg p-4 md:col-span-2 md:h-72">
          <Link href='/' className=" relative w-[200px] md:w-[300px] h-full gap-5 font-comfortaa text-3xl font-semibold">
            <Image fill={true} sizes='(max-width: 768px) 300px, 200px' className='' src={'/logo.png'} alt='logo' />
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="relative h-full w-full overflow-clip">
            <div className="relative z-40 flex h-full w-full justify-center rounded-3xl bg-zinc-800/10 backdrop-blur-2xl">
              <div className="relative z-30 h-full w-full max-w-[22rem] space-y-4 p-10 md:max-w-[25rem]">
                <p
                  className={`text-md text-gray-200 md:text-2xl md:leading-normal`}
                >
                  <strong className=" font-caveat text-[2.5rem]">
                    Welcome to Kinyu
                  </strong>
                  , brought to you by{' '}
                  <span className=" text-blue-500">@codeWithBablu.</span>
                </p>

                <Link
                  href="/login"
                  className="flex w-fit items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                  <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
              </div>
            </div>

            <div className="absolute left-0 top-0 z-0 h-60 w-60 -translate-y-1/2 rounded-full bg-gradient-radial from-teal-900/60 blur-2xl md:h-80 md:w-80"></div>
            <div className="absolute bottom-0 right-0 z-0 h-60 w-60 translate-y-1/2 rounded-full bg-gradient-radial from-indigo-800/60 blur-2xl md:h-80 md:w-80"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            unoptimized
            priority={true}
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
