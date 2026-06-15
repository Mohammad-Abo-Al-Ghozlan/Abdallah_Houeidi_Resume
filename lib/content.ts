// All content extracted strictly from Abdallah Houeidi's resume.
// No fabricated metrics, companies, roles, or achievements.

export const profile = {
  name: "Abdallah Houeidi",
  role: "Junior IT, Networking & Web Development",
  tagline:
    "Computer Science student blending networking, cybersecurity, and full-stack web development.",
  phone: "+961 71 225 175",
  email: "abdallahhweidi@gmail.com",
  linkedin: "https://linkedin.com/in/abdallah-houeidi",
  linkedinLabel: "linkedin.com/in/abdallah-houeidi",
}

export const summary =
  "Computer Science student at the Lebanese International University with hands-on experience in networking, cybersecurity, and full-stack web development. Holds CCNA (1–4), Linux Essentials, and Cybersecurity certifications. Eager to contribute to a forward-thinking team as a junior IT, networking, or web development professional."

export const education = [
  {
    school: "Lebanese International University (LIU)",
    credential: "B.S. in Computer Science",
    location: "Sidon, Lebanon",
    status: "In Progress",
  },
  {
    school: "Amgad Institute",
    credential: "Professional Certifications",
    location: "",
    status: "Graduated",
  },
]

export const experience = [
  {
    role: "Software Technician",
    company: "CLICKONCE Lebanon",
    period: "Oct 2025 – Present",
    points: [
      "Diagnosed and resolved hardware and software issues across a portfolio of 5–20 client devices, reducing recurring faults through root-cause analysis and preventive maintenance.",
      "Installed, configured, and deployed operating systems (Windows, Linux) and enterprise software, ensuring smooth onboarding and minimal client downtime.",
      "Set up and troubleshot local area networks, routers, and internet connectivity issues, applying CCNA-level knowledge to deliver reliable network performance.",
      "Assembled, upgraded, and repaired desktop and laptop hardware including storage, RAM, and peripheral components, extending device lifespan for clients.",
      "Trained clients on software usage and IT best practices, translating complex technical concepts into clear, accessible guidance to improve self-sufficiency.",
    ],
  },
]

export const projects = [
  {
    title: "E-Commerce Web Application — Sweets Store",
    stack: ["Laravel", "React", "Node.js"],
    points: [
      "Designed and developed a full-stack e-commerce platform for a sweets retailer, enabling online product browsing, ordering, and management.",
      "Built a dynamic, responsive front-end using React and a robust back-end REST API with Laravel, integrating both layers seamlessly.",
      "Implemented user authentication, product catalog management, and an admin dashboard to streamline store operations.",
    ],
  },
  {
    title: "Network Simulation & Troubleshooting Lab",
    stack: ["Cisco Packet Tracer", "CCNA"],
    points: [
      "Designed and simulated enterprise-grade network topologies using Cisco Packet Tracer, applying CCNA concepts including subnetting, VLANs, and routing protocols.",
      "Configured and tested firewall rules, access control lists (ACLs), and switchover scenarios to demonstrate network resilience and security best practices.",
      "Documented network diagrams and troubleshooting procedures, strengthening systematic problem-solving and technical communication skills.",
    ],
  },
]

export const skillGroups = [
  {
    label: "Networking & Infrastructure",
    items: [
      "TCP/IP",
      "Ethernet",
      "Subnetting",
      "IPv6",
      "VLANs",
      "Firewalls",
      "Routing & Switching",
      "Packet Tracer",
    ],
  },
  {
    label: "Cybersecurity",
    items: [
      "Access Control",
      "Threat Detection",
      "Security Policies",
      "Endpoint Protection (Symantec)",
      "Cloud & Wireless Security",
      "Information Privacy",
    ],
  },
  {
    label: "Programming & Web Development",
    items: ["Java", "C#", "Laravel", "React", "Node.js", "REST APIs"],
  },
  {
    label: "Operating Systems & Tools",
    items: [
      "Linux Server Administration",
      "Windows Server",
      "IoT Fundamentals",
      "System Troubleshooting",
    ],
  },
]

export const certifications = [
  "CCNA 1, 2, 3 & 4",
  "Linux Essentials",
  "Cybersecurity",
  "Introduction to IoT",
]

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
]

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]
