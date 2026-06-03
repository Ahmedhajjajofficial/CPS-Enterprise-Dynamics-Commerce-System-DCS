import { 
  LayoutDashboard, 
  Package, 
  Store, 
  ClipboardList, 
  Settings, 
  Users,
  BarChart3,
  ShieldCheck,
  Search
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Package, label: "Inventory", id: "inventory" },
  { icon: Store, label: "Branches", id: "branches" },
  { icon: ClipboardList, label: "Audit Log", id: "audit" },
  { icon: Users, label: "Staff", id: "staff" },
  { icon: BarChart3, label: "Reports", id: "reports" },
]

export function AppSidebar({ activeView, onViewChange }: { activeView: string, onViewChange: (view: string) => void }) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 flex items-center px-6 border-b">
        <div className="flex items-center gap-2 font-bold text-xl">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <span className="group-data-[collapsible=icon]:hidden">DCS Admin</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="px-4 py-2 group-data-[collapsible=icon]:hidden">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    tooltip={item.label}
                    isActive={activeView === item.id}
                    onClick={() => onViewChange(item.id)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
