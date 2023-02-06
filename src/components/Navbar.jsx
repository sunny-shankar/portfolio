import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
  ];
  return (
    <nav className="w-full fixed bottom-0 sm:top-0 p-3 flex items-center justify-between border-b-[1px] border-border_sm h-16 bg-navbar_back">
      <div className="h-[2px] top-0 absolute left-0 w-full bg-topbar lg:h-1 "></div>
      <div className="font-logo font-semibold text-2xl">Sunny</div>
      <div>
        <ul className="flex justify-between items-center gap-1">
          {navItems.map((item, index) => {
            return (
              <Link to={item.link}>
                <li
                  className="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-sm cursor-pointer font-semibold"
                  key={index}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
