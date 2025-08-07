import { useState } from "react";
import ItemSearchBar from "./ItemSearchBar";
import ItemTable from "./ItemTable";
import CreateItemModal from "./CreateItemModal";
import EditItemModal from "./EditItemModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { toast } from "sonner";

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
  const [items, setItems] = useState(mockItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<(typeof items)[0] | null>(
    null
  );
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(
    null
  );
  const filteredItems = mockItems.filter((item) =>
    item[searchColumn as keyof typeof item]
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const handleCreateItem = (newItem: {
    name: string;
    category: string;
    price: number;
  }) => {
    const nextId = items.length + 1;
    setItems([...items, { id: nextId, ...newItem }]);
  };

  const handleEditClick = (item: (typeof items)[0]) => {
    setEditingItem(item);
    setShowEditModal(true);
  };

  const handleUpdate = (updatedItem: (typeof items)[0]) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      duration: 3000
    });
  };

  const handleDeleteClick = (item: (typeof items)[0]) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      setItems((prev) => prev.filter((item) => item.id !== selectedItem.id));
      setSelectedItem(null);
      setDeleteModalOpen(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <ItemSearchBar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        searchColumn={searchColumn}
        onSearchColumnChange={setSearchColumn}
        onSearchClick={() => {}}
        onCreateClick={() => setIsModalOpen(true)}
      />
      <ItemTable
        items={filteredItems}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />

      <CreateItemModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onCreate={handleCreateItem}
      />

      <EditItemModal
        open={showEditModal}
        onOpenChange={setShowEditModal}
        item={editingItem}
        onUpdate={handleUpdate}
      />

      <ConfirmDeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        itemName={selectedItem?.name}
      />
    </div>
  );
}
