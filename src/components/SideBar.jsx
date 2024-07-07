import { NavLink, Outlet } from "react-router-dom";
export default function SideBar() {
  return (
    <>
      <div className=" bg-white grid grid-cols-[auto,1fr]">
        <aside className="relative flex flex-col lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start">
          <div className="relative pl-3 my-5 overflow-y-scroll">
            <div className="flex flex-col w-full font-medium">
              <div className="block pt-5 pb-[.15rem]">
                <div className="px-4 py-[.65rem]">
                  <span className="text-cyan-600 font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                    Users
                  </span>
                </div>
              </div>
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navLink bg-slate-100" : "navLink"
                  }
                >
                  Users List
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/user/create"
                  className={({ isActive }) =>
                    isActive ? "navLink bg-slate-100" : "navLink"
                  }
                >
                  Create User
                </NavLink>
              </div>

              <div className="block pt-5 pb-[.15rem]">
                <div className="px-4 py-[.65rem]">
                  <span className="text-cyan-600 font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                    Applications
                  </span>
                </div>
              </div>

              <div>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    isActive ? "navLink bg-slate-100" : "navLink"
                  }
                >
                  MW
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    isActive ? "navLink bg-slate-100" : "navLink"
                  }
                >
                  MW
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    isActive ? "navLink bg-slate-100" : "navLink"
                  }
                >
                  MW
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    isActive ? "navLink bg-slate-100" : "navLink"
                  }
                >
                  MW
                </NavLink>
              </div>
            </div>
          </div>
        </aside>
        <Outlet />
      </div>
    </>
  );
}
