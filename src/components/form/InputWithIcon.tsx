// src/components/form/InputWithIcon.tsx

import { Input } from "@/components/ui/input";
import { type LucideIcon } from "lucide-react";

interface InputWithIconProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  icon: LucideIcon;
}

export default function InputWithIcon({
  id,
  label,
  placeholder = "",
  type = "text",
  icon: Icon,
}: InputWithIconProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="pl-10"
        />
      </div>
    </div>
  );
}
