import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ItemSearchBarProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  searchColumn: string;
  onSearchColumnChange: (value: string) => void;
  onSearchClick?: () => void;
  onCreateClick?: () => void;
}

export default function ItemSearchBar({
  searchValue,
  onSearchValueChange,
  searchColumn,
  onSearchColumnChange,
  onSearchClick,
  onCreateClick,
}: ItemSearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex gap-2">
        <Input
          placeholder="Search..."
          className="bg-white"
          value={searchValue}
          onChange={(e) => onSearchValueChange(e.target.value)}
        />
        <Select value={searchColumn} onValueChange={onSearchColumnChange}>
          <SelectTrigger className="w-[150px] bg-white text-black">
            <SelectValue placeholder="Select column" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="category">Category</SelectItem>
            <SelectItem value="price">Price</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="secondary"
          onClick={onSearchClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          <Search />
          Search
        </Button>
      </div>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base"
        onClick={onCreateClick}
      >
        <Plus />
        Create New Item
      </Button>
    </div>
  );
}
