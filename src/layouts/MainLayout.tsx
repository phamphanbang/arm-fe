import { useState } from "react";
import { Outlet } from "react-router";
import { Home, Info, Spool } from "lucide-react";
import { Button } from "@/components/ui/button";
import SidebarItem from "@/components/layout/SidebarItem";
import React from "react";
import Header from "@/components/layout/Header";
import { Toaster } from "sonner";

export default React.memo(function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-black text-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-60" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-2">
          <span className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>
            MyApp
          </span>
          <Button
            variant="ghost"
            size="icon"
            className={`text-white ${isOpen ?? "w-full"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "<" : ">"}
          </Button>
        </div>

        <nav className="flex flex-col gap-2 p-2">
          <SidebarItem to="/" label="Home" icon={Home} isOpen={isOpen} />
          <SidebarItem to="/about" label="About" icon={Info} isOpen={isOpen} />
          <SidebarItem to="/items" label="Item" icon={Spool} isOpen={isOpen} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gray-100 dark:bg-background">
        <Header />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
        <Toaster />
      </main>
    </div>
  );
});
