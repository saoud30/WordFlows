"use client";

import { TextCategory, textCategories } from "@/lib/categories";
import { Button } from "./ui/button";

interface CategorySelectorProps {
  currentCategory: TextCategory;
  onCategorySelect: (category: TextCategory) => void;
}

export function CategorySelector({ currentCategory, onCategorySelect }: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {(Object.keys(textCategories) as TextCategory[]).map((category) => (
        <Button
          key={category}
          variant={currentCategory === category ? "default" : "outline"}
          onClick={() => onCategorySelect(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}