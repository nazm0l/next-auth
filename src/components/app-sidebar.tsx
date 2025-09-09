"use client";

import * as React from "react";
import {
  AudioWaveform,
  Building2,
  Clock1,
  Command,
  ExternalLink,
  Frame,
  GalleryVerticalEnd,
  Map,
  MapPin,
  Menu,
  PieChart,
  Shield,
  SquareTerminal,
  UserCog,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { SidebarTop } from "@/components/sidebar-top";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Administration",
      url: "/administration",
      icon: Shield,
      items: [
        {
          title: "Manage Role",
          url: "/administration/manage-role",
          icon: Shield,
        },
        {
          title: "Manage User",
          url: "/administration/manage-user",
          icon: Users,
        },
        {
          title: "Manage User Types",
          url: "/administration/manage-user-types",
          icon: UserCog,
        },
        {
          title: "Manage External User",
          url: "/administration/manage-external-user",
          icon: ExternalLink,
        },
        {
          title: "Manage Department",
          url: "/administration/manage-department",
          icon: Building2,
        },
        {
          title: "Location Management",
          url: "/administration/manage-location",
          icon: MapPin,
        },
        {
          title: "Country List",
          url: "/administration/manage-country",
          icon: MapPin,
        },
        {
          title: "Manage Menu Order",
          url: "/administration/manage-menu-order",
          icon: Menu,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarTop />
        <Separator className="my-1" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
