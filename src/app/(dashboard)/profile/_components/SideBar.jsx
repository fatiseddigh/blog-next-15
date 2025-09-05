"use client";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";

function SideBar({ onClose }) {
  return (
    <div
      className="flex flex-col h-screen p-6 pt-10 lg:pt-8
                 bg-gradient-to-b from-primary-600/20 via-primary-400/20 to-secondary-500/20
                 backdrop-blur-xl border-r border-white/20 shadow-2xl"
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-white/20">
        <Link
          href="/"
          className="!inline-flex items-center gap-x-3 text-lg font-bold
                     bg-gradient-to-r from-primary-600 via-primary-400 to-secondary-500 
                     bg-clip-text text-transparent"
        >
          <HomeIcon className="w-6 h-6 text-white" />
          <span>BLOG</span>
        </Link>
      </div>

      {/* Sidebar content */}
      <div className="flex-1 overflow-y-auto space-y-3">
        <SideBarNavs />

        {/* Logout */}
        <button
          className="flex items-center gap-x-3 w-full px-3 py-3 rounded-xl font-medium
                     text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
        >
          <ArrowLeftStartOnRectangleIcon className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
export default SideBar;
