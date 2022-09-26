import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BsSunFill } from 'react-icons/bs';
import logo from '../assets/logo_transparent.png';

const data = [
  { link: '/', name: 'Rockets' },
  { link: '/missions', name: 'Mistions' },
  { link: '/profile', name: 'Profile' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeStyle =
    'w-8 block m-[6px] rounded-full bg-gray-700 h-1 transition-all ease-in-out duration-200 dark:bg-gray-300';

  const handleMode = () => {
    const App = document.getElementById('App');
    App.classList.toggle('dark');
  };

  return (
    <div style={{ fontFamily: 'Montserrat' }} className="mb-10">
      <header className=" bg-slate-100 shadow-lg dark:bg-gray-800 dark:text-slate-100">
        <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[70px]">
            <div className=" w-12  md:w-16   mt-1 ">
              <img className="w-full drop-shadow-2xl " src={logo} alt="logo" />
            </div>
            <div className="md:static relative flex-1">
              <div
                className={` md:translate-x-0 md:translate-y-0 md:static md:w-auto md:opacity-100 md:bg-transparent md:backdrop-blur-0 md:flex-row md:gap-0 flex md:flex-1 transition duration-300 ${
                  !open
                    ? ' -translate-y-96 w-10 md:flex flex-1 justify-between items-center'
                    : 'absolute bg-[#CBD5E155] backdrop-blur-md z-10 flex flex-col gap-5 top-10 w-[100%] mx-auto p-4 rounded-2xl'
                }`}
              >
                <nav className="flex flex-1 flex-col md:flex-row justify-end gap-8 md:gap-0">
                  <div className="flex md:justify-center md:items-center relative w-28">
                    <label
                      htmlFor="AcceptConditions"
                      className="relative w-12 h-[28px] cursor-pointer"
                    >
                      <input type="checkbox" id="AcceptConditions" className="sr-only peer" />
                      <span
                        onClick={handleMode}
                        className="absolute inset-0 bg-[#08ACB4] rounded-full transition peer-checked:bg-gray-700 p-1 flex items-center justify-between"
                      >
                        <BiMoon className=" text-lg text-slate-200" />
                        <BsSunFill className=" text-lg text-amber-500" />
                      </span>
                      <span
                        onClick={handleMode}
                        className="absolute inset-0 w-5 h-5 m-1 bg-white rounded-full transition peer-checked:translate-x-5"
                      />
                    </label>
                  </div>
                  <ul className="flex flex-col md:items-center text-sm md:text-lg gap-6 md:flex-row">
                    {data.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.link}
                          className={` transition hover:text-gray-500/75 ${
                            location.pathname === item.link
                              ? 'text-[#08ACB4]'
                              : 'text-gray-600 dark:text-slate-100'
                          } `}
                          href="/"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden" onClick={() => setOpen(!open)}>
                <span className={`${closeStyle} ${open ? 'rotate-45 translate-y-[10px]' : ''}`} />
                <span className={`${closeStyle} ${open ? 'opacity-0' : ''}`} />
                <span className={`${closeStyle} ${open ? '-rotate-45 -translate-y-[10px]' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
