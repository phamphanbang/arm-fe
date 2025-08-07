import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface CreateItemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (item: { name: string; category: string; price: number }) => void;
}

export default function CreateItemModal({
  open,
  onOpenChange,
  onCreate,
}: CreateItemModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | undefined>(undefined);

  const resetForm = () => {
    setName("");
    setCategory("");
    setPrice(undefined);
  };

  // Reset form whenever modal is closed
  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category || price === undefined) return;

    onCreate({ name, category, price });
    setName("");
    setCategory("");
    setPrice(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Item</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new item.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Price"
            value={price ?? ""}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />

          <DialogFooter>
            <Button type="submit" className="bg-green-600 text-white text-base">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
