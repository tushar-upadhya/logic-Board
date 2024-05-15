import { Linkedin, Github, Twitter } from "lucide-react";

// Define the icons as functions that return JSX elements
const LinkedinIcon = () => <Linkedin />;
const GithubIcon = () => <Github />;
const TwitterIcon = () => <Twitter />;

export const socials = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/tushar-upadhyay-54029b135/",
    name: "LinkedIn",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/tushar-upadhya",
    name: "Github",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/upadhyay0405",
    name: "Twitter",
  },
];
