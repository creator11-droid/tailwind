import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.ctfassets.net/vklsgsrddkxg/14IrEn0aNKW29eLcvXvoSr/064177054409978b2f072150558126a4/Screenshot_2023-07-21_142005.png",
    url: "https://chipper-genie-282402.netlify.app/",
    github: "https://github.com/creator11-droid/MixMaster",
    title: "MixMaster",
    text: "Get your favourite Drinks and the recipe with just a click",
  },
  {
    id: nanoid(),
    img: "https://images.ctfassets.net/vklsgsrddkxg/1iZlhtMjp7hmg1AprqtrXp/d57e5d6bee5126a80e591d13dc8a869a/basketball.png",
    url: "https://extraordinary-tulumba-c4190e.netlify.app/",
    github: "https://github.com/creator11-droid/resposive-basketballa",
    title: "Basketball",
    text: "Follow the NBA season ",
  },
  {
    id: nanoid(),
    img: "https://images.ctfassets.net/vklsgsrddkxg/IU23gmknbpq48uht2U9Qb/695aa22ae6f0e364c4d5acf4778dfa82/gymapp.png",
    url: "https://gymroutes-creator11-droid.vercel.app/",
    github: "https://github.com/creator11-droid/gymroutes",
    title: "Gym Routes",
    text: "How gyms should Go on the web ",
  },
  {
    id: nanoid(),
    img: "https://images.ctfassets.net/vklsgsrddkxg/2kBFAtdqK4b9skZXhkSQpU/c4da1a13dcf40ca558c67775cd301a59/Screenshot_2023-10-27_164830.png",
    url: "https://comfy-y93q.vercel.app/",
    github: "https://github.com/creator11-droid/comfy",
    title: "e-commerce",
    text: "comfy stores ",
  },
];
