// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Frederico",
  middleName: "",
  lastName: "Frazão",
  message: " Passionate about changing the world with Automation.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/fredfrazao",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/fredericofrazao/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "configs" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../configs/IMG_7490.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "configs" directory
//     i.e resume: require("../configs/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../configs/IMG_7490.jpg"),
  imageSize: 375,
  message:
    "Hi there, I'm Frederico Frazão 👋 am currently working on Cloud native, Kubernetes, Infrastructure and Automation Previous experience with: Site Reliability Engineering, Monitoring, Cloud native, Kubernetes, Helm,Docker, AWS, Azure, GCP, On-prem, Hybrid-clouds, CI/CD, GitHub Actions" ,
  resume: "../configs/Frederico.pdf"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "fredfrazao", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../configs/IMG_7490.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../configs/IMG_7490.jpg"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Azure", value: 90 },
    { name: "ansible", value: 75 },
    { name: "Terraform", value: 95 },
    { name: "GitHub Actions", value: 95 },
    { name: "gcp", value: 65 },
    { name: "aws", value: 65 },
    { name: "k8s", value: 90 },
    { name: "helm", value: 65 },
    { name: "Prometheus", value: 75 },
    { name: "Grafana", value: 75 },
    { name: "elasticsearch", value: 65 },
    { name: "Splunk", value: 85 },
    { name: "dynatrace", value: 65 },
    { name: "Docker", value: 80 },
    { name: "Monitoring", value: 80 },
    { name: "Hybrid-clouds", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Leadership", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "frederico.frazao@gmail.com",
};

const experiences = {
  show: true,
  heading: "Last Experiences",
  data: [
    {
      role: 'Devops Engineer ',// Here Add Company Name
      companylogo: require('../assets/img/wtx.jpeg'),
      date: 'June 2022 – Present',
    },
    {
      role: 'Site Reliability Engineer Team Lead',
      companylogo: require('../assets/img/mbio.jpeg'),
      date: 'Jan 2022 - May 2022',
    },
    {
      role: 'Site Reliability Engineer Team Lead',
      companylogo: require('../assets/img/cloudmobility.png'),
      date: 'Jul 2021 – Dec 2021',
    },
   {
     role: 'Site Reliability Engineer',
     companylogo: require('../assets/img/sky.jpeg'),
     date: 'Feb 2016 - Jun 2021',
   },
   {
     role: 'Senior Consultant at Agap2',
     companylogo: require('../assets/img/agap2.jpeg'),
     date: 'OCR 2009 - Feb 2016',
   },
  ]
}



// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
