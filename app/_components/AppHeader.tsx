"use client";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppHeader = () => {
  return (
    <header className="w-full h-14 px-4 flex items-center border-b bg-background">
      {/* Left */}
      <SidebarTrigger />

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right */}
      <Button>Sign In</Button>
    </header>
  );
};

export default AppHeader;
