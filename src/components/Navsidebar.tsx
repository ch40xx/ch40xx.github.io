import { Book, FlaskConical, Github, ZoomIn } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { SidebarProvider } from "./ui/sidebar";

const pages = [
  {
    title: "Blog",
    url: "/",
    icon: Book,
  },
  {
    title: "Projects",
    url: "/",
    icon: FlaskConical,
  },
  {
    title: "About",
    url: "/about",
    icon: ZoomIn,
  },
];

const foots = [
  {
    name: "Github",
    url: "www.github.com/ch40xx",
    icon: Github,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/ch40x/",
    icon: SiLeetcode,
  },
];

export default function Navsidebar() {
  return (
    <SidebarProvider>
      <Sidebar variant="floating" className="w-[225px]">
        <SidebarHeader></SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {pages.map((page) => (
              <SidebarMenuItem key={page.title} className="p-1">
                <SidebarMenuButton asChild>
                  <a href={page.url}>
                    <page.icon />
                    <span>{page.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              {foots.map((foot) => (
                <SidebarMenuButton asChild key={foot.name}>
                  <a href={foot.url}>
                    <foot.icon /> <span>{foot.name}</span>
                  </a>
                </SidebarMenuButton>
              ))}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
