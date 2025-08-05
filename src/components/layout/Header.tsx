// src/components/layout/Header.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const { pathname } = useLocation();

  const getTitle = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About";
    if (pathname === "/items") return "Items";
    return "Dashboard";
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b bg-white dark:bg-background">
      <h2 className="text-xl font-semibold">{getTitle()}</h2>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
