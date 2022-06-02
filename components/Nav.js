import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
library.add(faFile);
import Time from '@/components/Time.jsx'
import Link from 'next/link';
export default function Hero() {
const { theme, setTheme } = useTheme();
return (
  <nav className="sticky top-0 py-4 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
   <div className="sticky top-0 flex flex-row items-center justify-between w-full">
      <div className="w-20 h-20 rounded-full relative overflow-hidden hover:animate-waving-hand">
         <Link href = "/"><Image
            src="/static/profile.gif"
            alt='Profile'
            layout="fill"
            objectFit="contain"
            alt="gif"
            /></Link>
      </div>
     <div class="flex gap-x-4">
     <Link href="/resume"><button title="My Resume" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faFile} /> </button></Link>
       <Link href="#projects"><button title="My Projects" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faPhone} /> </button></Link>
              <Link href="#stack"><button title="My Stack" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faPhone} /> </button></Link>
            <Link href="#contact"><button title="My Contact Details" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faPhone} /> </button></Link>

      <button title="Change your theme" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all" onClick={() =>
         setTheme(theme === 'dark' ? 'light' : 'dark')}>
         {(
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
            {theme === 'dark' ? (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
               />
            ) : (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
               />
            )}
         </svg>
         )}
      </button>
       </div>
   </div>
    </nav>
);
}