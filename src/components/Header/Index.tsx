import { Outlet } from "react-router-dom";
import { BsCompassFill } from "react-icons/bs";
import { TbDoorEnter } from "react-icons/tb";
import { BsFillHouseDoorFill, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Search from "../InputSearch";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-10 m-4">
        <button
          type="button"
          className="text-slate-200 bg-indigo-500 hover:bg-indigo-600 transition-all  rounded-lg p-1 "
          data-hs-overlay="#docs-sidebar"
          aria-controls="docs-sidebar"
          aria-label="Toggle navigation">
          <span className="sr-only">Toggle Navigation</span>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <Search />
      </div>
      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-neutral-800 border-r border-neutral-900 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y">
        <div className="px-6">
          <NavLink
            className="flex-none text-xl font-semibold text-white"
            to="/"
            aria-label="Brand">
            MovieDB
          </NavLink>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                    isActive ? "bg-indigo-500" : ""
                  } rounded-md hover:bg-indigo-500 text-white`
                }
                to="/">
                <BsFillHouseDoorFill />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                    isActive ? "bg-indigo-500" : ""
                  } rounded-md hover:bg-indigo-500 text-white`
                }
                to="/discover">
                <BsCompassFill />
                Discover
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                    isActive ? "bg-indigo-500" : "bg-none"
                  } rounded-md hover:bg-indigo-500 text-white`
                }
                to="/top_rated">
                <AiFillStar />
                Top Rated
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                    isActive ? "bg-indigo-500" : "bg-none"
                  } rounded-md hover:bg-indigo-500 text-white`
                }
                to="/upcoming">
                <TbDoorEnter />
                Upcoming
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                    isActive ? "bg-indigo-500" : "bg-none"
                  } rounded-md hover:bg-indigo-500 text-white`
                }
                to="/watchlist">
                <BsFillBookmarkFill />
                Watchlist
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main className="mx-5 py-5 text-white pl-0 lg:pl-72 ">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
