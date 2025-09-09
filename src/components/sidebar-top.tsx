"use client";

import * as React from "react";
import { X } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function SidebarTop() {
  const { state, toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div
            className={`font-bold transition-all duration-200 ${
              state === "collapsed" ? "hidden" : "text-2xl px-4"
            }`}
          >
            Nex
          </div>
          {/* Expand/Collapse Button */}
          {isMobile ? (
            <X className="mr-2" onClick={toggleSidebar} />
          ) : (
            <SidebarTrigger className="" />
          )}
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
