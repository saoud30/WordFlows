"use client";

import { Timer, XCircle, TrendingUp, KeyboardIcon } from "lucide-react";
import { AnimatedBorder } from "@/components/ui/animated-border";

interface GameHeaderProps {
  timer: number;
  mistakes: number;
  points: number;
  capsLock: boolean;
}

export function GameHeader({
  timer,
  mistakes,
  points,
  capsLock,
}: GameHeaderProps) {
  return (
    <AnimatedBorder
      className="w-full"
      gradientColors={["#ff5733", "#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"]}
      animationDuration={5}
      strokeWidth={2}
    >
      <div className="rounded-lg bg-white/5 p-4 shadow-[0_0_1rem_0_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <Timer className="h-5 w-5 text-neutral-400" />
            <span className="text-neutral-200">Timer: {timer}s</span>
          </div>
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-neutral-400" />
            <span className="text-neutral-200">Mistakes: {mistakes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-neutral-400" />
            <span className="text-neutral-200">Points: {points}</span>
          </div>
          <div className="flex items-center space-x-2">
            <KeyboardIcon className="h-5 w-5 text-neutral-400" />
            <span className="text-neutral-200">CapsLock: {capsLock ? "ON" : "OFF"}</span>
          </div>
        </div>
      </div>
    </AnimatedBorder>
  );
}