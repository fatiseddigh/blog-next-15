"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import Avatar from "@/ui/Avatar";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "@/ui/Drawer";
import SideBar from "./SideBar";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`sticky top-0 z-50
                  bg-gradient-to-r from-primary-600/20 via-primary-400/20 to-secondary-500/20
                  backdrop-blur-xl border-b border-white/20 shadow-lg max-w-full`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8 ">
        {/* Drawer toggle for mobile */}
        <ButtonIcon
          className="block lg:hidden border-none"
          variant="outline"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>

        {/* Greeting */}
        <span className="text-sm lg:text-lg font-bold text-primary-800">
          Hi {user?.name}
        </span>

        {/* Profile avatar */}
        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>

        {/* Mobile drawer */}
        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
