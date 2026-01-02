"use client";

import React, { ReactNode, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useUser } from "@clerk/nextjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      CreateNewuser();
    }
  }, [user])

  const CreateNewuser = async () => {
    if (!user) return;

    const userRef = doc(db, "users", user.id);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      console.log("Existing User");
      return;
    }

    await setDoc(userRef, {
      name: user.fullName,
      email: user.primaryEmailAddress?.emailAddress,
      createdAt: new Date(),
      remainingMsg: 5,
      plan: "Free",
      credits: 1000,
    });

    console.log("New user data saved");
  };

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
