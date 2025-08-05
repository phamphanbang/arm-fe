// src/components/SidebarItem.tsx
import { NavLink } from "react-router";
import { type LucideIcon } from "lucide-react";

interface SidebarItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  isOpen: boolean;
}

export default function SidebarItem({
  to,
  label,
  icon: Icon,
  isOpen,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded hover:bg-gray-800 ${
          isActive ? "bg-gray-800" : ""
        }`
      }
    >
      <Icon className="w-5 h-5 shrink-0 transition-none" />
      <span
        className={`
      transition-all duration-300 overflow-hidden whitespace-nowrap
      ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
    `}
      >
        {label}
      </span>
    </NavLink>
  );
}
