import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export const WEB_APPS = {
  name: "Music Portfilo",
  description: "A gratitude and positive thoughts generator.",
  link: "https://thankfulthoughts.io/",
};

export const SOCIALS = [
  {
    link: "https://github.com/jad-delgadillo",
    icon: (
      <AiOutlineGithub
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
        size={25}
      />
    ),
  },
  {
    link: "https://twitter.com/AlwaysJAD",
    icon: (
      <AiOutlineTwitter
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },

  {
    link: "https://www.linkedin.com/in/alwaysjad/",
    icon: (
      <AiOutlineLinkedin
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },
];
