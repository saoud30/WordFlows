"use client";

import { GameMode, gameModeSettings } from "@/lib/modes";
import { Button } from "./ui/button";

interface ModeSelectorProps {
  currentMode: GameMode;
  onModeSelect: (mode: GameMode) => void;
}

export function ModeSelector({ currentMode, onModeSelect }: ModeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {(Object.keys(gameModeSettings) as GameMode[]).map((mode) => (
        <Button
          key={mode}
          variant={currentMode === mode ? "default" : "outline"}
          onClick={() => onModeSelect(mode)}
          className="capitalize"
        >
          {mode.replace(/([A-Z])/g, " $1").toLowerCase()}
        </Button>
      ))}
    </div>
  );
}