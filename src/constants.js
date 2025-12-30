// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
      { name: 'Redux', logo: reduxLogo },
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
   
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Frontend Developer",
      company: "One Root",
      date: "june 2025-Aug 2025",
      desc: "Engineered a React + Firebase gym management platform with secure authentication and reliable role-based access control. Optimized the database schema to ensure accurate access across multiple user roles, while automating billing cycles, payment reminders, and member updates to reduce manual administrative work by 60%. The platform also includes a supplement store and personalized member features, improving user experience and operational efficiency.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Firebase",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Backend Developer",
      company: "Chaintech Network",
      date: "Sep 2025– Oct 2025",
      desc: "Developed a React web application that generates AI-powered alt text for Shopify images using OpenAI and Gemini APIs. Integrated Shopify REST APIs for store data management, authentication, and settings, with secure API key handling to ensure reliable data synchronization. Designed MongoDB schemas for sessions and store–app linking, built responsive full-stack components using shadcn UI (improving usability by 50%), and resolved complex issues related to authentication, access tokens, and build processes.",
      skills: [
        "ReactJS",
        "MongoDB",
        " shadcn UI",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
        " REST APIs ",
      ],
    },
 
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Indian Institute of Technology, Roorkee",
      date: "Oct 2022 - May 2026",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) at Indian Institute of Technology, Roorkee (2022–2026), where I am developing a strong foundation in computer science and engineering. My coursework includes Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering, strengthening my problem-solving and technical skills. Alongside academics, I work on hands-on projects and technical activities, gaining practical experience in full-stack development and AI-based applications, which continues to shape my growth as a software professional.",
      degree: "Bachelor of Technology in Metallurgy Engineering",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "New Sri Chaitanya PU College",
      date: "june 2020 - March 2022",
     
      desc: "I completed my Senior Secondary education (PCMC) from New Sri Chaitanya PU College in 2022, where I built a strong foundation in Physics, Chemistry, Mathematics, and Computer Science. During this period, I focused intensively on competitive exam preparation and successfully cracked the IIT Roorkee entrance, earning admission to one of India’s premier engineering institutions. This phase of my academic journey strengthened my analytical thinking, problem-solving skills, and discipline, and played a key role in shaping my interest in engineering and technology.",
      degree: "Senior Secondary-PCMC (Computers) ",
    },
   
    {
      id: 3,
      img: vpsLogo,
      school: "Kendriya Vidyalaya Ballari",
      date: "Apr 2010 - March 2020",
      
      desc: "I completed my Secondary education from Kendriya Vidyalaya Ballari in 2020, where I developed a strong academic foundation and disciplined learning habits. My schooling emphasized conceptual understanding, problem-solving, and overall personality development, which helped prepare me for higher secondary education and competitive examinations.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Prescripto– Hospital Management System",
      description:
        "Built a hospital management system with multi-level authentication supporting 500+ concurrent users, featuring doctor search, appointment booking, and secure payments via REST APIs. Developed responsive doctor and admin dashboards to manage appointments and profiles, improving workflow efficiency.",
      image: githubdetLogo,
      tags: [" React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/yashwant04-hub/prescripto-2",
    
    },
    {
      id: 1,
      title: "Edemy- Learning Management System",
      description:
        "Built a full-stack Learning Management System (LMS) for tech courses, supporting  student enrollments and 50+ educator-published courses. Integrated Clerk authentication and Stripe payments to ensure secure and reliable transactions, and developed an educator dashboard to track members and earnings.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express",  "Tailwind CSS","RESTful APIs", "Clerk Auth", ],
      github: "https://github.com/yashwant04-hub/LMS",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Imagify– AI SaaS Platform",
      description:
        "Created an AI-powered SaaS platform for text-to-image generation using the ClipDrop API, processing over 1K image requests. Implemented a credit-based usage system with integrated payments for secure transactions, along with robust authentication and account management using MongoDB, supporting  registered users.",
      image: movierecLogo,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "ClipDrop API"],
      github: "https://github.com/yashwant04-hub/Imagify-",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "GYM-Management System",
      description:
        "Engineered a gym management platform using HTML, CSS, JavaScript, and Firebase with secure authentication and role-based access control. Automated billing, payment reminders and added a supplement store with personalized member features to improve user experience and workflow efficiency.",
      image: npmLogo,
      tags: ["HTML","css","JavaScript","Firebase"],
      github: "https://github.com/yashwant04-hub/Gym-Management",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Admin Dashboard",
      description:
        "Developed a comprehensive Admin Dashboard application featuring a dynamic dashboard with multiple pages, integrated apps, Implemented advanced tools such as a calendar, Kanban board, WYSIWYG editor, and color picker, and built the application using Syncfusion UI components.",
      image: taskremLogo,
      tags: ["React js","Tailwind CSS","syncfusion"],
      github: "https://github.com/yashwant04-hub/Admin-dashboard-App",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Real EState Platform",
      description:
        "Developed a modern real estate website using React and Tailwind CSS, featuring a responsive and user-friendly interface for browsing property listings. Implemented clean UI components, smooth navigation,  delivering a fast and visually appealing platform for showcasing real estate properties.",
      image: webverLogo,
      tags: ["React js","Tailwind CSS"],
      github: "https://github.com/yashwant04-hub/Real-estate-Website",
      webapp: "https://webversedigital.com/",
    },
    
  ];  