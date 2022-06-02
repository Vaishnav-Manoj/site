import Image from 'next/image';
import { contact } from '@/data/config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import {
  faFile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Visit my linkedin:{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={contact.linkedin}
        >
          {contact.linkedin}
        </a>
      </p>
               <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full">
     <div class="flex gap-x-4">
      <Link href="/resume"><button title="My Resume" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faFile} /> </button></Link>
      <Link href="/resume"><button title="My Resume" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faFile} /> </button></Link>
      <Link href="/resume"><button title="My Resume" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"><FontAwesomeIcon icon={faFile} /> </button></Link>
    </div>
           </div>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 hover:scale-110 fill-transparent hover:fill-lightText hover:text-lightText  dark:md:hover:fill-blue-400 dark:md:hover:text-blue-400 transition duration-200 ease-in-and-out" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
          </a>
        )}
        {contact.twitter && (
          <a
            href={`https://twitter.com/${contact.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 hover:scale-110 fill-transparent hover:fill-lightText hover:text-lightText  dark:md:hover:fill-blue-400 dark:md:hover:text-blue-400 transition duration-200 ease-in-and-out" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
          </a>
        )}
        {contact.mail && (
          <a
            href={`mailto:${contact.mail}`}
            target="_blank"
            rel="noreferrer"
          >
<svg xmlns="http://www.w3.org/2000/svg" className="ml-2 hover:scale-110 fill-transparent hover:fill-lightText hover:text-lightText  dark:md:hover:fill-butDark dark:md:hover:text-butLight transition duration-200 ease-in-and-out" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
          </a>
        )}
      </div>

    </div>
  );
}