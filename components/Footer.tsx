import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full lg:mb-0 md:mb-[50px] mb-[100px] pb-10"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to elevate your business with <span className="text-purple">AI?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect and explore how AI-driven strategies can empower your enterprise.
        </p>
        <a
          href="mailto:saumya.smriti@gmail.com"
          title="Send an email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row mt-16 justify-between items-center text-center md:text-left">
        <p className="md:text-base text-sm md:font-normal font-light">
          © {new Date().getFullYear()} <span className="text-purple">Saumya Smriti</span>. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 mt-10 lg:mt-0 md:mt-0 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={
                  info.link.startsWith("http")
                    ? info.link
                    : `https://${info.link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={String(info.id)}
              >
                <img src={info.img} alt={`${info.id} icon`} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
