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
        <span className="text-link_text_hover">.</span>
        <div className="sm:text-lg leading-normal">
          <p className="font-normal py-5 ">
            Hi, I'm Sunny Shankar, an India based Full-Stack Web
            Developer/Student @ Pune University. I am specialising in Web
            Development with React js and Django.
          </p>
          <p className=" font-normal py-2">
            I'm currently working full-time for{" "}
            <span className="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link cursor-pointer">
              Poonawalla Fincorp
            </span>{" "}
            in Pune. I am passionate about the Internet and how we can design
            beautiful looking interfaces with programming languages.
          </p>
          <p className="py-2">
            Outside of my work-life, I love to play game, listening to songs, or
            just hanging out with my friends. You can follow me on my Instagram
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
          <div className="font-semibold sm:px-4 px-3 sm:py-2 py-1 rounded shadow bg-action_back border border-p_text cursor-pointer">
            Email me
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
