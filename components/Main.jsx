// import React from "react";

// const Main = () => {
//   return (
//     <div className="w-full h-screen text-center">
//       <div className="max-w-[1240px] w-full mx-auto justify-center items-center">
//         <div>
//           <p className="uppercase text-sm tracking-widest text-black">
//             Hello Guys
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Age from "../public/assets/portlogo1.png";

const Main = () => {
  return (
    <div id="home" className="flex w-full h-screen text-center">
      <div>
        <Image src={Age}></Image>
      </div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#d7cb3c]"> Akshat</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/akshat-jangid-524927200/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-yellow-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Akshat171"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-yellow-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-yellow-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
