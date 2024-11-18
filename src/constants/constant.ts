import { navItems } from "@/models/header";
import { userObject } from "@/models/user";
 

export const userinfo : userObject = {
  name: "My profolio",
 
};

export const headerItems: navItems = {
  home: {  label: "Home", page: "Home" },
  about: { label: "About", page: "About" },
   project: {  label: "Project", page: "Project"  },
};

export const userInfo1 = {
  name: 'Shahzaib',
  picture: 'my-pic.jpg',
  heading: 'I&#39;m a Fronted Developer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
  about: `
      <p>I am a passionate Fronted Developer  with a strong background in Web Development, I have been crafting digital experiences for 10 months.</p>
      <p>My journey in IT began in 2023 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
      <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
      `,
  skills: ['React', 'Next', 'Javascript', 'typescript','HTML', 'CSS'],   
}


 