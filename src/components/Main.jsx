import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Main = () => {
  return (
    <div className="flex justify-center py-20 sm:py-36">
      <div className=" px-8 w-[70%]">
        <span className="sm:text-4xl text-2xl font-semibold leading-snug">
          Web Developer designing beautiful, intuitive web apps
        </span>
        <span className="text-link_text_hover font-semibold">.</span>
        <div className="sm:text-lg leading-snug">
          <p className="font-normal py-5 ">
            Hello, I am Sunny Shankar, an India-based backend developer. I build
            Production level APIs using Python.
          </p>
          <p className="font-normal py-2">
            I'm a full-time developer at{" "}
            <a href="https://poonawallafincorp.com/">
              <span className="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link cursor-pointer">
                Poonawalla Fincorp
              </span>{" "}
            </a>
            in Pune and and a part-time consultant at{" "}
            <a href="https://digital-mozarts.com/">
              <span className="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link cursor-pointer">
                Digital Mozarts.
              </span>{" "}
            </a>
            I am passionate about the Technology and and I enjoy designing web
            interface.
          </p>
          <p className="py-2">
            Outside of my work-life, I enjoy playing video games, listening to
            music and hanging out with friends. You can follow me on Instagram
            or Twitter. I post very rarely so you might not find many posts on
            either.
          </p>
        </div>
        {/* icon */}
        <div className="flex justify-between items-center pt-7">
          <div className="sm:text-4xl text-3xl flex gap-4">
            <AiOutlineGithub className="cursor-pointer" />
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillInstagram className="cursor-pointer" />
          </div>
          <a href="mailto: sunny.shankar44@gmail.com">
            <div className="font-semibold sm:px-4 px-3 sm:py-2 py-1 rounded shadow bg-action_back border border-p_text cursor-pointer">
              Email me
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Main;
