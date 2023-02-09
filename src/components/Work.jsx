import { MdOutlineWork } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
const Work = () => {
  const work = [
    {
      organisation: "Poonawalla Fincorp",
      profile: "Deputy Manager - IT",
      from: "20-Nov-2020",
      to: "present",
      location: "Pune",
      work: "full-time",
      current: true,
    },
    {
      organisation: "Digital Mozarts",
      profile: "Developer",
      from: "20-Nov-2020",
      to: "present",
      location: "Bengluru",
      work: "part-time",
      current: true,
    },
    {
      organisation: "Digital Mozarts",
      profile: "Product",
      from: "20-Nov-2020",
      to: "present",
      location: "Bengluru",
      work: "full-time",
      current: false,
    },
  ];

  return (
    <div className="flex w-[70%] mx-auto py-20 sm:py-36 flex-col gap-6">
      {work.map((item, index) => {
        return (
          <div
            className={
              "bg-action_back w-full rounded py-5 px-10 shadow sm:flex justify-between items-center relative"
            }
            key={index}
          >
            {item.current ? (
              <div className="top-0 absolute left-0 w-[4px] bg-link_border_hover h-full"></div>
            ) : (
              ""
            )}
            <div className="flex items-center gap-1">
              <CgOrganisation />
              <span>{item.organisation}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <MdOutlineWork />
                <span>{item.profile}</span>
              </div>
              <div className="flex gap-2 items-center">
                <BsFillCalendarDateFill />
                <span>
                  {item.from} - {item.to}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
