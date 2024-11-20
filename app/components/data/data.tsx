export const NavData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Our Edge",
    url: "#edge",
  },
  {
    id: 3,
    title: "Our Team",
    url: "#team",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

export const marqueeData = [
  {
    id: 1,
    title: "Generative AI",
  },
  {
    id: 2,
    title: "Social Media Marketing",
  },
  {
    id: 3,
    title: "Offshore Development",
  },
  {
    id: 4,
    title: "AI & Social Media Expertise",
  },
  {
    id: 5,
    title: "Affordable Apps Creation",
  },
  {
    id: 6,
    title: "Affordable Websites Creation",
  },
  {
    id: 7,
    title: "Social Media Marketing",
  },
  {
    id: 8,
    title: "SEO",
  },
  {
    id: 9,
    title: "Graphics Design",
  },
];

export type StepData = {
  id: string | number;
  title: string;
  description: string;
};
export const edgeData: StepData[] = [
  {
    id: 1,
    title: "Step",
    description: "Share your dream app with our affordable offshore team",
  },
  {
    id: 2,
    title: "Step",
    description: "We use the latest AIs to make it better and faster",
  },
  {
    id: 3,
    title: "Step",
    description: "We use social media trends to market it better and faster",
  },
  {
    id: 4,
    title: "Step",
    description: "PROFIT!",
  },
];

export interface CarouselItem {
  imgSrc: string;
  urlSrc: string;
  alt: string;
  title: string;
  position: string;
  description: string;
}

export const carouselItems = [
  {
    imgSrc: "/images/teams/chris.png",
    urlSrc: "#",
    alt: "Chris",
    title: "Chris",
    position: "Project Manager",
    description:
      "I have always been a leader in team-building. One of my jobs as an AI researcher at Georgia Tech was to get isolated AI research groups collaborating together; then I did it again for IBM's Qistkit community. This was harder than it sounds, but I was good at it. I grew up reading Asimov, Herbert, Verne, Dick, Wells, and Shirow and watching Star Trek TNG. Inspired by characters like Data and Wesley, I never forgot my passion for AI and never gave up on the idea that my dreams were possible.",
  },
  {
    imgSrc: "/images/teams/Victor.png",
    urlSrc: "#",
    alt: "Victor",
    title: "Victor",
    position: "Mobile Developer",
    description:
      "Hi, I’m Victor! I’ve been an Android developer for 2 years, turning caffeine and code into apps that make life easier. From fitness guides to reporting tools and even a smoke detector app, I’ve tackled it all with a keyboard and some creativity.",
  },
  {
    imgSrc: "/images/teams/ardy.png",
    urlSrc: "#",
    alt: "Ardy",
    title: "Ardy",
    position: "Backend Developer",
    description:
      "As a backend development enthusiast with a background in Python, machine learning, and data science, I’m passionate about building efficient and scalable systems. I enjoy exploring new tech in AI and backend development, always bringing a solutions-driven approach to my work.",
  },
  {
    imgSrc: "/images/teams/jury.png",
    urlSrc: "#",
    alt: "Jury",
    title: "Jury",
    position: "Frontend Developer",
    description:
      "Hi there! I'm a passionate Frontend Developer with a knack for crafting seamless and user-centric web applications. I'm dedicated to creating innovative solutions that blend creativity and functionality. Let's collaborate to bring your digital vision to life!",
  },
  {
    imgSrc: "/images/teams/christine.png",
    urlSrc: "#",
    alt: "Christine",
    title: "Christine",
    position: (
      <>
        Social Media Manager <br /> & Graphic Designer
      </>
    ),
    description:
      "As a graphic designer and social media manager, I bring a background in art, including experience with acrylic abstracts and portraits, that adds a hands-on perspective to my approach to color and design. I also create content for YouTube and TikTok, sharing my love of art with others and reaching new audiences. I’m excited to contribute both my artistic and social media skills to our team and help connect with our community in meaningful ways.",
  },
  {
    imgSrc: "/images/teams/kent.png",
    urlSrc: "#",
    alt: "Kent",
    title: "Kent",
    position: "Mobile Developer",
    description:
      "I’m Kent, a mobile developer with 4 years of experience working on various projects, including IoT, GPS-based time tracking, and emergency assistance apps. I’ve had the opportunity to lead small teams, ensuring tasks are completed and projects delivered on time. I was also involved in building a startup, which taught me a lot about project execution and the challenges of securing clients. ",
  },
  {
    imgSrc: "/images/teams/nash.png",
    urlSrc: "#",
    alt: "Nash",
    title: "Nash",
    position: "Mobile Developer",
    description:
      "Nash has been a member of Shrader Technology since 2024. Currently, he serves as a Junior Mobile Developer on a part-time basis. Bondoc has gained valuable experience in both front-end and back-end development through handling client contracts from multiple universities and is eager to expand his knowledge in these areas. ",
  },
];
