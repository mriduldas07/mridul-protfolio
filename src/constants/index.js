import {
  backend,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  typescript,
  web,
} from "../assets";
import filterImg from "../assets/filter.jpg";
import foreachmap from "../assets/foreachmap.jpg";
import newportal from "../assets/new-portal.png";
import taskmanager from "../assets/task-manager.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mearn Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const blogs = [
  {
    id: 1,
    title: "Difference Between forEach and map in JavaScript",
    description:
      "In JavaScript, both forEach and map are used to iterate over arrays, but they serve different purposes and have distinct behaviors. The forEach method executes a provided function once for each array element and is primarily used for executing side effects, such as logging or modifying external variables, without altering the original array or returning a new one. In contrast, map also applies a function to each array element but returns a new array containing the results of these function calls, making it suitable for transforming data while preserving the original array. Unlike forEach, which returns undefined, map ensures the creation of a new array, enabling functional programming practices by maintaining immutability and allowing method chaining.",
    image: foreachmap,
  },
  {
    id: 2,
    title:
      "Leveraging the Power of JavaScript's Filter Method With Visual Image",
    description:
      "The JavaScript filter method is a powerful tool for working with arrays, enabling developers to create a new array populated with elements that pass a specified test implemented by a provided function. When filter is called, it iterates over each element of the array, applying the given function, which returns a boolean value. If the function returns true, the element is included in the new array; if false, it is excluded. This method does not mutate the original array, ensuring immutability—a core principle of functional programming. filter is particularly useful for scenarios such as extracting specific items from an array based on conditions, cleaning up datasets by removing unwanted values, or creating subsets of data for further processing. Its concise and readable syntax makes it a favorite among developers for writing clean and maintainable code.",
    image: filterImg,
  },
];

const projects = [
  {
    name: "News Portal",
    description:
      "Web-based platform that allows users to search, read, and a verified autho can write news artical. It's a very popular web app for e-paper industry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: newportal,
    source_code_link: "https://github.com/mriduldas07/news-portal",
  },
  {
    name: "Task Manager",
    description:
      "Web application that enables users to search for created tasks, view tasks,creates task, update their task and delete also.They can share their task with others.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/mriduldas07/task-taker",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { blogs, experiences, projects, services, technologies, testimonials };
