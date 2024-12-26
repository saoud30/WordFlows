"use client";

import { useEffect, useState } from 'react';

interface LiveStatsProps {
  currentWPM: number;
  accuracy: number;
  progress: number;
}

export function LiveStats({ currentWPM, accuracy, progress }: LiveStatsProps) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 flex items-center gap-6">
      <div className="text-sm">
        <span className="text-neutral-400">WPM: </span>
        <span className="text-neutral-200 font-bold">{currentWPM}</span>
      </div>
      <div className="text-sm">
        <span className="text-neutral-400">Accuracy: </span>
        <span className="text-neutral-200 font-bold">{accuracy}%</span>
      </div>
      <div className="text-sm">
        <span className="text-neutral-400">Progress: </span>
        <span className="text-neutral-200 font-bold">{progress}%</span>
      </div>
    </div>
  );
}