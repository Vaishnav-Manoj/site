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
      </div>
    
  );
}