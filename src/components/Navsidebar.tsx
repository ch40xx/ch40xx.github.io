import { Book, FlaskConical, ZoomIn } from "lucide-react";
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
    title: "About",
    url: "/about",
    icon: ZoomIn,
  },
  {
    title: "Projects",
    url: "/",
    icon: FlaskConical,
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
        <SidebarFooter></SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
