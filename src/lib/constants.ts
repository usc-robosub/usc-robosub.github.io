// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Join Us" },
  { href: "/sponsors", label: "Sponsors" },
] as const;

// External links
export const externalLinks = {
  github: "https://github.com/usc-robosub",
  discord: "https://discord.gg/7jPvyPWc8T",
  interestForm: "https://docs.google.com/forms/d/e/1FAIpQLSfZnhGsQTUPIkCJLfJcP2tE20nZVszWjG6SglmbcWH-VuExug/viewform",
  calendar: "https://calendar.google.com/calendar/u/0?cid=Y183ZGU0MmEyMGI0M2ZiNzQ0OWUzN2EwNzNmMjMwMjkyNTk5Zjc4ZmMyNDgyMTc2ZjNiYzI2ZDUzZWUxOWQ4MWY4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
  sponsorshipPacket: "/auv-sponsorship-packet-2025.pdf",
} as const;

// Stats data
export const stats = [
  { value: 21, suffix: "", label: "Years Active" },
  { value: 8, suffix: "", label: "Thrusters" },
  { value: 45, suffix: "kg", label: "Vehicle Weight" },
  { value: 7, suffix: "", label: "E-Board Members" },
] as const;

// Technologies
export const technologies = [
  {
    id: "solidworks",
    name: "SOLIDWORKS",
    description: "3D CAD software for mechanical design & simulation",
    category: "Mechanical",
  },
  {
    id: "ros",
    name: "ROS",
    description: "Robotics middleware for distributed computing & sensor integration",
    category: "Software",
  },
  {
    id: "docker",
    name: "Docker",
    description: "Containerization for consistent development & deployment",
    category: "DevOps",
  },
  {
    id: "altium",
    name: "Altium Designer",
    description: "Professional PCB design & electronic schematic software",
    category: "Electrical",
  },
] as const;

// Core values
export const coreValues = [
  {
    id: "excellence",
    title: "Engineering for Impact",
    description:
      "We align with the Viterbi spirit of engineering solutions that matter. Whether developing custom hull seals for Barracuda 2.0 or refining localization algorithms, our work is driven by the goal of advancing marine autonomy to solve real-world problems.",
  },
  {
    id: "innovation",
    title: "Collaborative Innovation",
    description:
      "We draw strength from the multi-disciplinary diversity of the USC student body. By uniting Mechanical, Electrical, and Software engineers with business strategists, we reflect the university’s commitment to collaborative, cross-functional problem-solving.",
  },
  {
    id: "learning",
    title: "Continuous Learning",
    description:
      "We are a student-run organization that prioritizes the mentorship pipeline. From our ROS 2 Humble workflows to our custom Topside UI, we treat every sprint as an opportunity to bridge classroom curriculum with industry-standard robotics practice.",
  },
  {
    id: "collaboration",
    title: "Resilience Under Pressure",
    description:
      "Rooted in our 20-year history of overcoming technical bottlenecks, we value the grit required to move from a dry-dock prototype to a successful full-system pool operation. We believe the fastest way to improve a system is to make every component inspectable, serviceable, and trustworthy in the field.",
  },
] as const;

// Team members (E-Board)
export const teamMembers = [
  {
    id: "lauryn-hills",
    name: "Lauryn Hills",
    role: "President",
    major: "Electrical & Computer Engineering",
    year: "Junior",
    email: "lhills@usc.edu",
    linkedin: "#",
    image: "/team/lauryn-hills.jpg",
  },
  {
    id: "ekamresh-vasudevan",
    name: "Ekamresh Vasudevan",
    role: "Vice President & Electrical Co-Lead",
    major: "Electrical & Computer Engineering",
    year: "Senior",
    email: "evasudev@usc.edu",
    linkedin: "https://www.linkedin.com/in/ekamresh-vasudevan-4840b0230/",
    image: "/team/ekamresh-vasudevan.jpg",
  },
  {
    id: "joseph-ibalio",
    name: "Joseph Ibalio",
    role: "Electrical Co-Lead",
    major: "Electrical Engineering",
    year: "Junior",
    email: "jibalio@usc.edu",
    linkedin: "https://www.linkedin.com/in/joseph-ibalio/",
    image: "/team/joseph-ibalio.jpg",
  },
  {
    id: "alejandro-arteaga",
    name: "Alejandro Arteaga",
    role: "Software Co-Lead",
    major: "Computer Science",
    year: "Masters",
    email: "ajarteag@usc.edu",
    linkedin: "https://www.linkedin.com/in/ajarteag/",
    image: "/team/alejandro-arteaga.jpg",
  },
  {
    id: "taka-soeda",
    name: "Takatoshi Soeda",
    role: "Software Co-Lead",
    major: "Computer Science",
    year: "Masters",
    email: "soeda@usc.edu",
    linkedin: "https://www.linkedin.com/in/taka-soeda-jp/",
    image: "/team/taka-soeda.jpg",
  },
  {
    id: "hugh-thompson",
    name: "Hugh Thompson",
    role: "Mechanical Lead",
    major: "Mechanical Engineering",
    year: "Junior",
    email: "hueythom@usc.edu",
    linkedin: "https://www.linkedin.com/in/hugh-thompson1/",
    image: "/team/hugh-thompson.jpg",
  },
  {
    id: "russell-rodriguez",
    name: "Russell Rodriguez",
    role: "Treasurer",
    major: "Electrical Engineering",
    year: "Masters",
    email: "rar72397@usc.edu",
    linkedin: "https://www.linkedin.com/in/russell-rodriguez/",
    image: "/team/russell-rodriguez.jpg",
  },
  /*{
    id: "jessica-yao",
    name: "Jessica Yao",
    role: "Secretary",
    major: "Electrical & Computer Engineering",
    year: "Sophomore",
    email: "jryao@usc.edu",
    linkedin: "https://www.linkedin.com/in/jessica-yao-700a61254/",
    image: "/team/jessica-yao.jpg",
  },
  {
    id: "doris-lai",
    name: "Doris Lai",
    role: "Social Media Chair",
    major: "Business Administration",
    year: "Sophomore",
    email: "dhlai@usc.edu",
    linkedin: "https://www.linkedin.com/in/dorishlai/",
    image: "/team/doris-lai.jpg",
  },*/
] as const;

export const alumniMembers = [
  {
    id: "matthew-jiang",
    name: "Matthew Jiang",
    role: "2024 Vice President & Software Lead",
    major: "Computer Engineering & Computer Science",
    year: "Senior",
    email: "jiangmy@usc.edu",
    linkedin: "https://www.linkedin.com/in/matthewyjiang/",
    image: "/team/matthew-jiang.jpg",
  },
  {
    id: "firstname2-lastname2",
    name: "Firstname2 Lastname2",
    role: "Software Alumni",
    favoriteFish: "Manta Ray",
    contactEmail: "firstname2@usc.edu",
    contactLinkedIn: "https://www.linkedin.com/in/firstname2-lastname2/",
    currentPlacement: "Software Engineer, Company Name",
    image: "/alumni/firstname2-lastname2.jpg",
  },
] as const;

// Barracuda specs
export const barracudaSpecs = {
  name: "The Barracuda",
  year: 2025,
  dimensions: "26 in L x 20 in W x 15 in H approximately",
  weight: "35 kg",
  thrusters: 8,
  battery: "16.2 Ah",
  features: [
    "Fully Integrated Sensor Fusion",
    "Simplified Hydrodynamics",
    "Modular Multi-Hull Design",
    "Doppler Velocity Log",
    "Imaging Sonar for Localization",
    "Containerized & Modular Software",
  ],
} as const;

// Past AUVs
export const pastAUVs = [
  { name: "Mantaray", image: "/history/mantaray.jpg" },
  { name: "Turtle", image: "/history/turtle.jpg" },
  { name: "Seabee", image: "/history/seabee.jpg" },
] as const;

// Sponsors
export const sponsors = {
  platinum: [
    { name: "USC Viterbi School of Engineering", logo: "/sponsors/usc-viterbi.jpg" },
  ],
  gold: [
    { name: "Lockheed Martin", logo: "/sponsors/lockheed-martin.png" },
    { name: "Northrop Grumman", logo: "/sponsors/northrop-grumman.png" },
    { name: "Texas Instruments", logo: "/sponsors/texas-instruments.png" },
  ],
  silver: [],
  bronze: [],
} as const;

// Sponsorship benefits
export const sponsorshipBenefits = [
  "Increase brand visibility among students and professionals",
  "Engage with a passionate community of innovators",
  "Support the development of cutting-edge underwater robotics",
  "Network with future leaders in technology and engineering",
  "Gain access to exclusive events and competitions",
] as const;

// Join benefits
export const joinBenefits = [
  "Gain hands-on experience with underwater robotics",
  "Develop leadership and teamwork skills",
  "Travel to competitions",
  "Develop your technical skills",
  "Make lifelong friends and connections",
] as const;

// Sub-teams
export const subTeams = [
  {
    id: "software",
    name: "Software",
    description: "Developing autonomous control systems, computer vision, and navigation algorithms.",
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Designing power systems, PCBs, and sensor integration for the AUV.",
  },
  {
    id: "mechanical",
    name: "Mechanical",
    description: "Engineering the hull, propulsion systems, and structural components.",
  },
] as const;

// Company/organization info
export const orgInfo = {
  name: "USC AUV",
  fullName: "University of Southern California Autonomous Underwater Vehicle Team",
  tagline: "University of Southern California's Premier Robotics Design Team",
  founded: 2005,
  description: "USC RoboSub is a student-led organization pushing the boundaries of underwater robotics. Combining the expertise of our Software, Electrical, & Mechanical teams, we design & build autonomous underwater vehicles (AUVs) and compete in the annual RoboSub competition.",
} as const;
