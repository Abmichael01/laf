"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Package, Search, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Item = {
  id: string;
  title: string;
  description: string;
  location: string;
  status: string;
  type: "found" | "lost";
  date: string;
  image: string;
};

// Mock data - replace with actual API call
const mockItems: Item[] = [
  {
    id: "1",
    title: "Brown Leather Wallet",
    description: "Contains multiple ID cards and travel receipts.",
    location: "Grand Hall Cafeteria",
    status: "Pending Claim",
    type: "found",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Laptop Bag",
    description: "Left my laptop bag in a coffee shop.",
    location: "Coffee Shop Downtown",
    status: "Active",
    type: "lost",
    date: "5 days ago",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
];

export function MyItemsContent() {
  const [items] = useState<Item[]>(mockItems);
  const [filter, setFilter] = useState<"all" | "found" | "lost">("all");

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((item) => item.type === filter);

  const foundItems = filteredItems.filter((item) => item.type === "found");
  const lostItems = filteredItems.filter((item) => item.type === "lost");

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Select value={filter} onValueChange={(value) => setFilter(value as typeof filter)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter items" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Items</SelectItem>
            <SelectItem value="found">Found Items</SelectItem>
            <SelectItem value="lost">Lost Items</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No items found.</p>
        </div>
      ) : (
        <>
          {foundItems.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Found Items</h2>
                <span className="text-sm text-muted-foreground">({foundItems.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {foundItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {lostItems.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Lost Items</h2>
                <span className="text-sm text-muted-foreground">({lostItems.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lostItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="rounded-md border border-border bg-white/5 p-6 space-y-4">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-cover rounded-md border border-border"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold mb-1 truncate">{item.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {item.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{item.location}</span>
            <span>•</span>
            <span>{item.date}</span>
          </div>
          <div className="mt-2">
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                item.status === "Pending Claim" || item.status === "Active"
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {item.status}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-2 border-t border-border">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link href={`/${item.type}/${item.id}`}>
            <Eye className="h-4 w-4 mr-2" />
            View
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
}

