import Image from 'next/image';
import { projects } from '@/data/config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className=" mt-8">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText rounded-xl mb-4 duration-500 ease select-none hover:bg-cardLight dark:md:hover:bg-cardDark"
            > 
              <div className = "flex flex-wrap gap-y-3 gap-x-1">
              <h3>{item.title}</h3>{item.stack.map((item, index) => (
              
              <h3><span className="border border-lightText rounded-lg px-3 py-1 py-transition duration-500 ease select-none hover:bg-butLight dark:md:hover:bg-butDark" key={index}>
      {item}
      </span></h3>
                
            ))}
                </div>
              <p>{item.description}</p>
                
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                  <FontAwesomeIcon icon={faLink} />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.link}
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                  <FontAwesomeIcon icon={faFileCode} />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}