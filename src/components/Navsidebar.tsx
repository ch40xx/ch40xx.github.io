import { Book, FlaskConical, ZoomIn } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "./ui/sidebar";
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
    url: "/projects",
    icon: FlaskConical,
  },

]

export default function Navsidebar() {
  return (
    <SidebarProvider>
      <Sidebar variant="floating" >
        
        <SidebarHeader>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {pages.map((page) => (
              <SidebarMenuItem key={page.title}>
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
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
