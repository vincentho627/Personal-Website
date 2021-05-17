const experienceList = {
  '2014-09-01': {
    experience: "Studied Mathematics, Further Mathematics, Chemistry, Physics and did an EPQ on investigating how guitar bracings affect the sound quality",
    company: "Harrow International School",
    position: "Secondary Student",
    link: "https://www.harrowschool.hk/",
    image: process.env.PUBLIC_URL + "/img/Harrow.jpg"
  },
  '2019-09-31': {
    experience: "Currently a second year computing student, looking to study a Master's degree specialising in Artificial Intelligience and Machine Learning",
    company: "Imperial College London",
    position: "Computing Undergraduate",
    link: "https://www.imperial.ac.uk/",
    image: process.env.PUBLIC_URL + "/img/Imperial.jpg"
  },
  '2020-07-05': {
    experience: "During this internship, I was able to develop a deeper understanding of Python, GUIs, and Web Apps. This was done through completing assigned projects throughout the internship and I thoroughly enjoyed it. ",
    company: "August Robotics",
    position: "Software Engineer Intern",
    link: "http://www.augustrobotics.com/",
    image: process.env.PUBLIC_URL + "/img/AugustRobotics.png"
  },
  '2020-08-28': {
    experience: "In charge of building website with react and show casing our events.",
    company: "Interact",
    position: "Web Designer",
    link: "https://www.imperialcollegeunion.org/activities/a-to-z/interact",
    image: process.env.PUBLIC_URL + "/img/Interact.png"
  },
  '2020-10-30': {
    experience: "Currently building a research website to present our research calculations with live time data, connecting our backend data infrastructure to our website with Flask and React.js",
    company: "Algorithmic Trading Society",
    position: "Head of Front-end",
    link: "http://www.algosoc.com/",
    image: process.env.PUBLIC_URL + "/img/ATS.png"
  },
  '2020-11-29': {
    experience: "Working for a start up named Iternal to build a NLP converting paragraphs into a knowledge graph, building Computer Vision features and demos showcasing new features with Flask and Reactjs",
    company: "Iternal",
    position: "Data Science Intern",
    link: "https://www.iternal.app/",
    image: process.env.PUBLIC_URL + "/img/Iternal.jpg"
  },
  '2021-04-08': {
    experience: "Learning about market making, the intricacies of liquid and illiquid markets and how to best take advantage of each, different types of orders and financial markets. First hand experience by participating in Optibook Competition, trading against other teams.",
    company: "Optiver",
    position: "Spring Technology Intern",
    link: "https://www.optiver.com/",
    image: process.env.PUBLIC_URL + "/img/Optiver.jpg"
  },
  '2021-04-20': {
    experience: "Gaining a in depth insight about the firms as well as learning more about the role of software engineering, quantitative research and trading in market making and a hedge fund.",
    company: "Citadel & Citadel Securities",
    position: "Discover Citadel & Citadel Securities",
    link: "https://www.citadel.com/",
    image: process.env.PUBLIC_URL + "/img/Citadel.jpg"
  },

}

var dates = [];
var experiences = [];
for (var key in experienceList) {
  dates.push(key);
  experiences.push(experienceList[key]);
};

export {dates, experiences};
