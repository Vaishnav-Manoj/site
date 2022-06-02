import Image from 'next/image';
import { resume } from '@/data/config';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import Time from '@/components/Time.jsx'
import Link from 'next/link';
export default function Projects() {
  const {english} = resume
  const { theme, setTheme } = useTheme();
  return ( 
    <div class="mt-6 max-w-screen-lg md:flex mx-auto">
      <div class="md:w-1/3 p-2 relative">
        <div class="md:fixed">
          <div class="md:block">
            <img
              class="h-32 w-32 rounded-full mx-auto mx-4"
              src="https://avatars3.githubusercontent.com/u/59800600?s=460&amp;u=95f222387f598c85508c9b6d5d8662ebf4ae8b85&amp;v=4"
            />
            <div class="mb-12 text-center mt-4 justify-center items-center">
              <h1 class="text-2xl text-xl text-gray-800 font-bold">
                Mohamad Usman
              </h1>
              <div class="md:text-lg text-gray-600">Software Engineer</div>
              <div class="text-gray-600 md:hidden mt-1">
                (moh.usman168@gmail.com)
              </div>
            </div>
          </div>
          <div class="mx-4 my-4 hidden md:block">
            <div class="my-5 text-lg text-gray-600 flex">
              <div class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"
                  />
                  <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                </svg>
              </div>
              moh.usman168@gmail.com
            </div>
            <div class="my-5 text-lg text-gray-600 flex">
              <div class="mr-2">
                <svg
                  class="text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"
                  />
                  <path
                    d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"
                  />
                </svg>
              </div>
              Bogor, Indonesia
            </div>
            <a
              href="https://www.linkedin.com/in/usman168"
              class="my-5 text-blue-500 text-lg text-gray-600 flex"
            >
              <div class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"
                  />
                </svg>
              </div>
              LinkedIn
            </a>
          </div>
          <div class="mx-4 hidden md:block">
            <a
              href="mailto:moh.usman168@gmail.com"
              class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-base"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
      <div class="md:w-2/3 p-2 w-full">
        <div class="mx-4 mb-6">
          <h1 class="mb-4 text-4xl text-gray-700 font-bold">Summary</h1>
          <p class="text-lg">
            Enthusiastically explore new technologies for efficiency, always
            looking for ways to solve the problem as efficiently as possible,
            giving priority simplicity of code.
          </p>
        </div>
        <div class="mx-4">
          <h1 class="mb-4 text-4xl text-gray-700 font-bold">Experience</h1>
          <ul>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Golang Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" ></i>
                  <small class="text-base text-gray-800">
                    PT. Sigma Cipta Caraka (Telkomsigma) 
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm"></i>
                  <small class="text-sm text-gray-600">Jan 2021 - Present                 </small>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Data Engineer (ETL, Data Pipeline)
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings"></i>
                  <small class="text-base text-gray-800">
                    PT. Sigma Cipta Caraka (Telkomsigma)
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" ></i>
                  <small class="text-sm text-gray-600">Jan 2020 - Present</small>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Full Stack Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" ></i>
                  <small class="text-base text-gray-800">
                    PT. Sigma Cipta Caraka (Telkomsigma)
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" ></i>
                  <small class="text-sm text-gray-600"
                    >Jan 2020 - Mar 2020</small
                  >
                </div>
              </div>
            </li>

            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Senior Frontend Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" ></i>
                  <small class="text-base text-gray-800">
                    Freelance
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" ></i>
                  <small class="text-sm text-gray-600"
                    >Jan 2020 - Mar 2020</small
                  >
                </div>
              </div>
            </li>

            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Backend Developer 
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" ></i>
                  <small class="text-base text-gray-800">
                    PT. Bonet Utama
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" ></i>
                  <small class="text-sm text-gray-600"
                    >Dec 2018 - Dec 2019</small
                  >
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Data Center (Linux Sysadmin) 
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings text-sm" ></i>
                  <small class="text-base text-gray-800">
                    PT. Bonet Utama
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" ></i>
                  <small class="text-sm text-gray-600"
                    >Agu 2017 - Okt 2018</small
                  >
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                IT Support Internship
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" ></i>
                  <small class="text-base text-gray-800">
                    PT. Nutrifood Indonesia
                  </small>
                </div>
                <div class="">
                  <i class="bx bx-calendar" ></i>
                  <small class="text-sm text-gray-600">3 Month</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mx-4">
          <h1 class="mb-4 text-4xl text-gray-700 font-bold">Skill</h1>
          <ul>
            <li class="mb-6 flex flex-wrap">
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Flask</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Python Pandas</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >ETL Automation</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Laravel/Lumen</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Composer Dependency</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Codeigniter</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Slim</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >ExpressJS</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Code Principles</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Design Database</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Design Pattern</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >System Analysis</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >VueJS</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >ReactJS</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Tailwind css/Bootstrap</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Sass/Scss</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Web Server</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Mail Server</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >PostgreSQL</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Mysql/MariaDB</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >MonggoDB</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Linux Sysadmin</span
              >
              <span
                class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"
                >Networking</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
); 
}