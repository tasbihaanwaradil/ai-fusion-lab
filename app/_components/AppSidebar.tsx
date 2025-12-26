"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="w-[40px] h-[40px]"
            />
            <h2 className="font-bold text-xl">AI Fusion Lab</h2>
          </div>

          <div className="mt-2">
            {theme === "light" ? (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Switch to dark mode"
                onClick={() => setTheme("dark")}
              >
                <Sun />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Switch to light mode"
                onClick={() => setTheme("light")}
              >
                <Moon />
              </Button>
            )}
          </div>
        </div>

        <div className="mt-10">
        <Button className="mt-7 w-full" size='lg'>+ New Chat</Button>
        </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className='p-3'>
          <h2 className="font-bold text-lg">Chat</h2>
          <p className="text-sm text-muted-foreground">Sign in to start chatting with multiple AI Models</p>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <div />
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-3 mb-10">
          <Button className="w-full" size='lg'>Sign In/Sign Up</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
