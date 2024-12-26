"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface GameResultsProps {
  isOpen: boolean;
  onClose: () => void;
  wpm: number;
  totalPoints: number;
  earnedPoints: number;
  mistakes: number;
}

export function GameResults({
  isOpen,
  onClose,
  wpm,
  totalPoints,
  earnedPoints,
  mistakes,
}: GameResultsProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="border border-neutral-800 bg-black/95 text-neutral-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">Game Results</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="space-y-6">
          <p className="text-neutral-400">Here's how you performed in this game:</p>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Words per min:</span>
              <span>{wpm}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Points:</span>
              <span>{totalPoints}</span>
            </div>
            <div className="flex justify-between">
              <span>Points Earned:</span>
              <span>{earnedPoints}</span>
            </div>
            <div className="flex justify-between">
              <span>Letter Mistakes:</span>
              <span>{mistakes}</span>
            </div>
            <div className="mt-4 text-sm text-neutral-500">
              <p>Total Points Calculation:</p>
              <p className="mt-1">({totalPoints} points) - ({mistakes} mistakes) + ({earnedPoints} earned points) = {totalPoints - mistakes + earnedPoints}</p>
            </div>
          </div>
        </div>
        <AlertDialogFooter>
          <Button 
            onClick={onClose}
            className="bg-white text-black hover:bg-neutral-200"
          >
            Play Again
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}