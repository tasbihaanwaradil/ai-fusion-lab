"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main area */}
          <div className="flex-1 flex flex-col">
            <AppHeader />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  );
};

export default Provider;
