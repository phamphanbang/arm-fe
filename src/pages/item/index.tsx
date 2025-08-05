import { useState } from "react";
import ItemSearchBar from "./ItemSearchBar";
import ItemTable from "./ItemTable";

const mockItems = [
  { id: 1, name: "Item A", category: "Electronics", price: 99 },
  { id: 2, name: "Item B", category: "Books", price: 15 },
  { id: 3, name: "Item C", category: "Clothing", price: 45 },
  { id: 4, name: "Item D", category: "Electronics", price: 120 },
  { id: 1, name: "Item A", category: "Electronics", price: 99 },
  { id: 2, name: "Item B", category: "Books", price: 15 },
  { id: 3, name: "Item C", category: "Clothing", price: 45 },
  { id: 4, name: "Item D", category: "Electronics", price: 120 },
  { id: 1, name: "Item A", category: "Electronics", price: 99 },
  { id: 2, name: "Item B", category: "Books", price: 15 },
  { id: 3, name: "Item C", category: "Clothing", price: 45 },
  { id: 4, name: "Item D", category: "Electronics", price: 120 },
];

export default function ItemsPage() {
  const [searchColumn, setSearchColumn] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = mockItems.filter((item) =>
    item[searchColumn as keyof typeof item]
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <ItemSearchBar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        searchColumn={searchColumn}
        onSearchColumnChange={setSearchColumn}
        onSearchClick={() => {}}
        onCreateClick={() => {}}
      />
      <ItemTable items={filteredItems} />
    </div>
  );
}
