import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Crypto Exchange",
    description:
      "Cryptoexchange is an online platform that is used to fetch real time data such as price,volume,& capitalization using coingeko api.",
    image: "/cry.jpg",
    github: "https://github.com/sagar3595/cyptocoins",
    link: "https://cyptocoins-gcc973juk-sagar3595.vercel.app/",
  },
  {
    name: "Currency Convertor",
    description:
      "A powerful yet simple currency converter, Currency provides up-to-date exchange rates for over 160 currencies and countries! Great for when you travel abroad",
    image: "/currency.png",
    github: "https://github.com/sagar3595/Currency-Convertor",
    link: "https://currency-convertor-pfzctpmqp-sagar3595.vercel.app/",
  },
  {
    name: "Spotify Clone",
    description:
      "Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.",
    image: "/spotify.jpg",
    github: "https://github.com/sagar3595/spotify-clone-2.0",
    link: "https://spotify-clone-2-0-3j0s5wk4f-sagar3595.vercel.app/",
  },
  {
    name: "Mern Stack Todo App",
    description:
      "The MERN stack todo app is a web application built using four key technologies: MongoDB, Express.js, React.js, and Node.js. It allows users to manage and organize their tasks in a convenient and intuitive way.",
    image: "/Todo.jpg",
    github: "https://github.com/sagar3595/Mern-todo-app",
    link: "https://ill-pink-skunk-hose.cyclic.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
