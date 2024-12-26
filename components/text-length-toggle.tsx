"use client";

import { Text, TextQuote, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TextLength, textLengthSettings } from "@/lib/text-length";

interface TextLengthToggleProps {
  currentLength: TextLength;
  onLengthSelect: (length: TextLength) => void;
}

export function TextLengthToggle({
  currentLength,
  onLengthSelect,
}: TextLengthToggleProps) {
  const getIcon = (length: TextLength) => {
    switch (length) {
      case "short":
        return <Text className="h-4 w-4" />;
      case "medium":
        return <TextQuote className="h-4 w-4" />;
      case "long":
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Select text length"
        >
          {getIcon(currentLength)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {(Object.keys(textLengthSettings) as TextLength[]).map((length) => (
          <DropdownMenuItem
            key={length}
            onClick={() => onLengthSelect(length)}
            className="flex items-center gap-2 px-3 py-2 cursor-pointer"
          >
            {getIcon(length)}
            <div>
              <p className="font-medium">{textLengthSettings[length].label}</p>
              <p className="text-xs text-neutral-500">
                {textLengthSettings[length].description}
              </p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}