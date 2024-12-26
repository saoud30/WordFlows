"use client";

import { Keyboard } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { TextLengthToggle } from "./text-length-toggle";
import { TextLength } from "@/lib/text-length";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  textLength: TextLength;
  onTextLengthChange: (length: TextLength) => void;
}

export function Navbar({ textLength, onTextLengthChange }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3">
            <Keyboard className="h-7 w-7 text-neutral-200" />
            <span className="text-xl font-semibold text-neutral-200">WordFlows</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-neutral-200",
                pathname === "/" ? "text-neutral-200" : "text-neutral-400"
              )}
            >
              Practice
            </Link>
            <Link 
              href="/extra-practice" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-neutral-200",
                pathname === "/extra-practice" ? "text-neutral-200" : "text-neutral-400"
              )}
            >
              Extra
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <TextLengthToggle
            currentLength={textLength}
            onLengthSelect={onTextLengthChange}
          />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}