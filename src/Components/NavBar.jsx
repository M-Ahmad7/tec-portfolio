// NavBar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Home,
  User,
  Presentation,
  Trophy,
  Mail,
  Settings,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, path: "/home" },
  { name: "About Me", icon: User, path: "/aboutme" },
  { name: "Teaching", icon: Presentation, path: "/teaching" },

  { name: "Achievements", icon: Trophy, path: "/achievements" },

  { name: "Contact", icon: Mail, path: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =========================================================
          MOBILE MENU BUTTON
      ========================================================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed top-4 left-4 z-[100]
          flex lg:hidden
          h-12 w-12 items-center justify-center
          rounded-2xl
          border border-orange-500/30
          bg-black/70
          backdrop-blur-xl
          text-orange-500
          shadow-[0_0_25px_rgba(249,115,22,0.25)]
        "
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* =========================================================
          MOBILE SIDEBAR
      ========================================================= */}
      <div
        className={`
          fixed inset-0 z-[110] lg:hidden
          transition-all duration-300
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* SIDEBAR */}
        <aside
          className={`
            absolute left-0 top-0 h-full w-80 max-w-[85vw]
            border-r border-orange-500/20
            bg-[#0b0b0b]/95
            backdrop-blur-2xl
            shadow-[0_0_80px_rgba(0,0,0,0.8)]
            transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/40 bg-black/70 shadow-[0_0_20px_rgba(249,115,22,0.25)]">
                <GraduationCap className="h-6 w-6 text-orange-500" />
              </div>

              <span className="font-semibold text-white">Navigation</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          <nav className="space-y-2 p-5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? "border border-orange-500/40 bg-orange-500/10 text-orange-500"
                        : "text-gray-300 hover:bg-orange-500/5 hover:text-orange-400"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />

                  <span className="text-sm font-medium">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* SETTINGS */}
          <div className="absolute bottom-6 left-5 right-5">
            <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 transition-all duration-300 hover:bg-orange-500/5 hover:text-orange-400">
              <Settings className="h-5 w-5" />

              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </aside>
      </div>

      {/* =========================================================
          DESKTOP SIDEBAR
      ========================================================= */}
      <aside className="fixed left-4 top-4 z-50 hidden h-[calc(100vh-2rem)] w-24 lg:flex">
        <div className="relative flex h-full w-full flex-col items-center overflow-visible rounded-[2rem] border border-orange-500/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          {/* GLOW */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-b from-orange-500/20 via-transparent to-orange-500/10" />

          {/* =========================================================
              LOGO
          ========================================================= */}
          <NavLink to="/" className="relative z-10 mb-8 mt-6">
            <div className="group relative flex h-14 w-14 items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-orange-500/10 blur-md transition-all duration-500 group-hover:bg-orange-500/20" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/40 bg-black/70 shadow-[0_0_20px_rgba(249,115,22,0.25)]">
                <div className="absolute inset-1 rounded-xl border border-orange-500/20" />

                <GraduationCap className="relative z-10 h-7 w-7 text-orange-500" />
              </div>
            </div>
          </NavLink>

          {/* =========================================================
              NAVIGATION
          ========================================================= */}
          <nav className="relative z-10 flex flex-1 flex-col items-center gap-4 overflow-visible">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="group relative flex items-center justify-center overflow-visible"
                >
                  {({ isActive }) => (
                    <>
                      {/* ACTIVE DOT */}
                      {isActive && (
                        <span className="absolute -left-5 h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
                      )}

                      {/* ICON BUTTON */}
                      <div
                        className={`
                          relative flex h-12 w-12 items-center justify-center rounded-2xl
                          transition-all duration-300
                          ${
                            isActive
                              ? "border border-orange-500/70 bg-orange-500/10 text-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.25)]"
                              : "border border-transparent bg-transparent text-gray-300 hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-400"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* =========================================================
                          TOOLTIP
                      ========================================================= */}
                      <div
                        className="
                          pointer-events-none absolute left-[72px] top-1/2 z-50
                          hidden -translate-y-1/2 whitespace-nowrap
                          rounded-xl border border-orange-500/20
                          bg-[#111]/95 px-3 py-2
                          text-xs font-medium text-white
                          opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                          backdrop-blur-xl transition-all duration-300

                          lg:block

                          translate-x-[-10px]
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      >
                        {item.name}
                      </div>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* DIVIDER */}
          <div className="relative z-10 my-4 h-px w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* SETTINGS */}
          <div className="relative z-10 mb-6">
            <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl text-gray-400 transition-all duration-300 hover:border hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-400">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
