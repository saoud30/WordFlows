"use client";

import { useEffect, useState } from 'react';
import { Trophy, Target, Zap, Clock } from 'lucide-react';

interface StatsCardProps {
  bestWPM: number;
  accuracy: number;
  streak: number;
  totalTime: number;
}

export function StatsCard({ bestWPM, accuracy, streak, totalTime }: StatsCardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-8">
      <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="text-sm text-neutral-400">Best WPM</span>
        </div>
        <p className="text-2xl font-bold text-neutral-200">{bestWPM}</p>
      </div>
      
      <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Target className="h-5 w-5 text-green-500" />
          <span className="text-sm text-neutral-400">Accuracy</span>
        </div>
        <p className="text-2xl font-bold text-neutral-200">{accuracy}%</p>
      </div>
      
      <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="h-5 w-5 text-orange-500" />
          <span className="text-sm text-neutral-400">Streak</span>
        </div>
        <p className="text-2xl font-bold text-neutral-200">{streak}</p>
      </div>
      
      <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-5 w-5 text-blue-500" />
          <span className="text-sm text-neutral-400">Time Spent</span>
        </div>
        <p className="text-2xl font-bold text-neutral-200">{Math.floor(totalTime / 60)}m</p>
      </div>
    </div>
  );
}