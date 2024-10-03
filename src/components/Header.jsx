import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Header() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isPlacementsOpen, setIsPlacementsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Wrap the logo in a Link component */}
              <Link to="/">
                <div className="h-8 w-26 flex items-center rounded">
                  <h1 className="text-lg font-bold text-gray-500 text-2xl ">
                    <span className="text-blue-300 text-3xl">&lt;</span>
                    <span className="text-blue-500 text-3xl">M</span>entor
                    <span className="text-blue-500 text-3xl">P</span>ick
                    <span className="text-blue-300 text-3xl"> /&gt;</span>
                  </h1>
                </div>
              </Link>
            </div>

            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Programs Dropdown */}
              <div
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
                className="relative"
              >
                <a
                  href="#"
                  className="text-gray-900 inline-flex items-center px-3 py-1 text-base font-medium mx-5 text-xl"
                >
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                {isProgramsOpen && (
                  <Dropdown>
                    <a href="#" className="block px-4 py-2 text-gray-700">
                      Program 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700">
                      Program 2
                    </a>
                  </Dropdown>
                )}
              </div>

              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 inline-flex items-center px-3 py-1 text-base font-medium text-xl"
              >
                Hire from MentorPick
              </a>

              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 inline-flex items-center px-3 py-1 text-base font-medium text-xl"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 inline-flex items-center px-3 py-1 text-base font-medium text-xl"
              >
                Blog
              </a>

              {/* Placements Dropdown */}
              <div
                onMouseEnter={() => setIsPlacementsOpen(true)}
                onMouseLeave={() => setIsPlacementsOpen(false)}
                className="relative"
              >
                <a
                  href="#"
                  className="text-gray-900 inline-flex items-center px-3 py-1 text-base font-medium text-xl"
                  
                >
                  Placements <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                {isPlacementsOpen && (
                  <Dropdown>
                    <div className="w-full rounded-md bg-green-50" >
                      <div className="px-4 py-2 text-gray-700">
                        Placement 1
                      </div>
                      <div className="px-4 py-2 text-gray-700">
                        Placement 2
                      </div>
                    </div>
                  </Dropdown>
                )}
              </div>
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="px-4 py-2 border-2 border-black text-xl font-medium rounded-[10px] text-black bg-white hover:border-green-900 hover:bg-green-900 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-between font-bold">
              
              <Link to="/login" element={Login}>Sign In</Link>
              <ChevronRight />
            </button>

            <button className="mx-5 ml-3 px-4 py-2 border border-transparent text-xl font-medium rounded-[10px] text-black bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 flex items-center">
              Book Your Trial, Now
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Dropdown({ children }) {
  return (
    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">{children}</div>
    </div>
  );
}
