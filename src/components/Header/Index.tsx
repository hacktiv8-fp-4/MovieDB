import { Outlet } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { TbDoorEnter } from "react-icons/tb";
import { BsFillBookmarkFill, BsFillHouseDoorFill } from "react-icons/bs";
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

            <li className="hs-accordion" id="bu-users-accordion">
              <a
                onClick={(e) => e.preventDefault()}
                className="hs-accordion-toggle cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5  hs-accordion-active:hover:bg-transparent text-sm rounded-md hover:bg-indigo-500 text-white dark:hs-accordion-active:text-white">
                <FiGlobe />
                Discover
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"></path>
                </svg>
              </a>

              <div
                id="bu-users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul className="hs-accordion-group flex flex-col gap-2 pl-3 pt-2">
                  <li className="hs-accordion" id="bu-users-accordion-sub-1">
                    <NavLink
                      className={({ isActive }) =>
                        `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                          isActive ? "bg-indigo-500" : "bg-none"
                        } rounded-md hover:bg-indigo-500 text-white`
                      }
                      to="/discover/movies">
                      Movies
                    </NavLink>

                    <div
                      id="bu-users-accordion-sub-1"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"></div>
                  </li>
                  <li className="hs-accordion" id="bu-users-accordion-sub-2">
                    <NavLink
                      className={({ isActive }) =>
                        `flex items-center gap-x-3.5 py-2 px-2.5 text-sm ${
                          isActive ? "bg-indigo-500" : "bg-none"
                        } rounded-md hover:bg-indigo-500 text-white`
                      }
                      to="/discover/tvshows">
                      TV Shows
                    </NavLink>

                    <div
                      id="bu-users-accordion-sub-2"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"></div>
                  </li>
                </ul>
              </div>
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
