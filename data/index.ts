// === Navigation ===
export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// === Hero Grid Items ===
export const gridItems = [
  {
    id: 1,
    title:
      "Collaboration-first consulting with clear communication and results.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available across global time zones for seamless client engagement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI Strategist & Thought Leader.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "On a mission to redefine digital workflows using AI.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s build something transformative together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// === Featured Projects ===
export const projects = [
  {
    id: 1,
    title: "Copilot for Pharma CRM",
    des: "Custom Microsoft Copilot solution to automate data workflows and insight generation for a global pharma client.",
    img: "/pharmacrm.png",
    iconLists: ["/azure.png", "/copilot.svg", "/powerbi.svg"],
    link: "private",
  },
  {
    id: 2,
    title: "TeamSync AI",
    des: "AI-powered team collaboration platform with group chat, file sharing, and project management.",
    img: "/chat.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/chatgpt.svg"],
    link: "https://teamsync-ai.saumyasmriti.vercel.app",
  },
  {
    id: 3,
    title: "Electric Vehicles in India",
    des: "Techno-economic study on EV adoption with policy recommendations, in collaboration with UPEC Paris.",
    img: "/ev.png",
    iconLists: ["/research.png", "/strategy.png"],
    link: "private",
  },
  {
    id: 4,
    title: "Mentorship Platform (Topmate)",
    des: "One-on-one mentorship at scale with a focus on GenAI tools, career strategy, and interviews.",
    img: "/topmate.png",
    iconLists: ["/guidance.png", "/consulting.png"],
    link: "https://topmate.io/saumyasmriti",
  },
];

// === Testimonials ===
export const testimonials = [
  {
    quote:
      "Working with Saumya on our GenAI initiative was transformative. Her ability to translate business goals into AI-driven workflows exceeded expectations.",
    name: "Arjun Mehta",
    title: "Senior Product Manager, Global Pharma Client",
  },
  {
    quote:
      "Saumya brings a rare blend of technical depth and business acumen. Our Copilot implementation was seamless and impactful thanks to her leadership.",
    name: "Neha Kapoor",
    title: "Director of Digital Transformation, ZS",
  },
];

// === Logos / Partner Companies (Placeholder for now) ===
export const companies = [
  {
    id: 1,
    name: "Microsoft",
    img: "/ms.svg",
    nameImg: "/msName.svg",
  },
  {
    id: 2,
    name: "ZS Associates",
    img: "/zs.svg",
    nameImg: "/zsName.svg",
  },
  {
    id: 3,
    name: "Topmate",
    img: "/topmate.svg",
    nameImg: "/topmateName.svg",
  },
];

// === Work Experience ===
export const workExperience = [
  {
    id: 1,
    title: "Associate Consultant - ZS",
    desc: "Led GenAI & Copilot deployments for large-scale pharma clients, driving measurable business impact.",
    className: "md:col-span-2",
    thumbnail: "/exp-zs.svg",
  },
  {
    id: 2,
    title: "Mentor - Topmate",
    desc: "Rated Top 1% mentor, helping professionals and students break into AI careers.",
    className: "md:col-span-2",
    thumbnail: "/exp-topmate.svg",
  },
  {
    id: 3,
    title: "Research Intern - UPEC Paris",
    desc: "Published research on EV adoption in India and government policy recommendations.",
    className: "md:col-span-2",
    thumbnail: "/exp-upec.svg",
  },
];

// === Social Media Links ===
export const socialMedia = [
  {
    id: "github",
    img: "/git.svg",
    link: "https://github.com/saumyasmriti",
  },
  {
    id: "twitter",
    img: "/twit.svg",
    link: "https://x.com/SaumyaSmriti1",
  },
  {
    id: "linkedin",
    img: "/link.svg",
    link: "https://linkedin.com/in/saumyasmriti",
  },
  {
    id: "instagram",
    img: "/insta.svg",
    link: "https://instagram.com/saumyasmriti",
  },
];
