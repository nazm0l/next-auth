"use client";
import { Menu } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export default function Navbar() {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <div className="h-12 bg-gray-200 flex items-center px-4">
      <div className="flex w-full justify-between items-center">
        {isMobile ? (
          <div>
            <Menu onClick={toggleSidebar} />
          </div>
        ) : null}
        <div>
          <h2>Nav</h2>
        </div>
      </div>
    </div>
  );
}
