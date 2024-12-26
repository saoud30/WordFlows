"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { GameHeader } from "@/components/game-header";
import { GameResults } from "@/components/game-results";
import { ModeSelector } from "@/components/mode-selector";
import { CategorySelector } from "@/components/category-selector";
import { StatsCard } from "@/components/stats-card";
import { LiveStats } from "@/components/live-stats";
import { useGameStore } from "@/lib/store";
import { TextLength } from "@/lib/text-length";
import { GameMode } from "@/lib/modes";
import { TextCategory } from "@/lib/categories";
import { useTextSelection } from "@/hooks/use-text-selection";

export default function Home() {
  const [textLength, setTextLength] = useState<TextLength>("short");
  const [mode, setMode] = useState<GameMode>("standard");
  const [category, setCategory] = useState<TextCategory>("speeches");
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [capsLock, setCapsLock] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [currentWPM, setCurrentWPM] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { 
    points, 
    bestWPM,
    streak,
    totalTime,
    setPoints, 
    addEarnedPoints,
    updateBestWPM,
    incrementTotalTests,
    updateStreak,
    addTime
  } = useGameStore();
  
  const { text, setText, getTextByLength } = useTextSelection();

  // Function to get a new random text
  const getNewText = () => {
    const selectedText = getTextByLength(category, textLength);
    if (selectedText?.text === text) {
      // If we get the same text, try one more time
      const newText = getTextByLength(category, textLength);
      setText(newText?.text || "");
    } else {
      setText(selectedText?.text || "");
    }
  };

  useEffect(() => {
    getNewText();
    inputRef.current?.focus();
  }, [category, textLength]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setCapsLock(e.getModifierState("CapsLock"));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        addTime(1);
      }, 1000);
    } else if (timer === 0) {
      endGame();
    }
    return () => clearInterval(interval);
  }, [isRunning, timer, addTime]);

  const calculateWPM = () => {
    const words = input.trim().split(/\s+/).length;
    const minutes = (60 - timer) / 60;
    return minutes > 0 ? Math.round(words / minutes) : 0;
  };

  const calculateAccuracy = () => {
    if (input.length === 0) return 100;
    return Math.round(((input.length - mistakes) / input.length) * 100);
  };

  const calculateProgress = () => {
    return Math.round((input.length / text.length) * 100);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!isRunning && value.length === 1) {
      setIsRunning(true);
    }

    let mistakeCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== text[i]) {
        mistakeCount++;
      }
    }
    setMistakes(mistakeCount);
    setInput(value);

    const currentWords = value.trim().split(/\s+/).length;
    const elapsedMinutes = (60 - timer) / 60;
    const currentWPM = elapsedMinutes > 0 ? Math.round(currentWords / elapsedMinutes) : 0;
    setCurrentWPM(currentWPM);

    if (value === text) {
      endGame();
    }
  };

  const endGame = () => {
    setIsRunning(false);
    const finalWPM = calculateWPM();
    setWpm(finalWPM);
    updateBestWPM(finalWPM);
    const earnedPoints = Math.round(finalWPM * 2); // Round the points to avoid Infinity
    addEarnedPoints(earnedPoints);
    const finalPoints = Math.round(Math.max(0, points - mistakes + earnedPoints)); // Round and ensure non-negative
    setPoints(finalPoints);
    incrementTotalTests();
    updateStreak(true);
    setShowResults(true);
  };

  const resetGame = () => {
    getNewText(); // Get a new random text
    setInput("");
    setTimer(60);
    setIsRunning(false);
    setMistakes(0);
    setShowResults(false);
    setWpm(0);
    setCurrentWPM(0);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar textLength={textLength} onTextLengthChange={setTextLength} />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl space-y-12">
          <StatsCard 
            bestWPM={bestWPM}
            accuracy={calculateAccuracy()}
            streak={streak}
            totalTime={totalTime}
          />
          <ModeSelector currentMode={mode} onModeSelect={setMode} />
          <CategorySelector currentCategory={category} onCategorySelect={setCategory} />
          <GameHeader
            timer={timer}
            mistakes={mistakes}
            points={points}
            capsLock={capsLock}
          />
          
          <div className="rounded-xl p-8">
            <p className="text-2xl leading-relaxed tracking-wide">
              {text.split("").map((char, index) => {
                let color = "text-neutral-600";
                if (index < input.length) {
                  color = input[index] === char ? "text-neutral-200" : "text-[#ff6b6b]";
                }
                return (
                  <span key={index} className={color}>
                    {char}
                  </span>
                );
              })}
            </p>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInput}
            className="sr-only"
            autoFocus
          />
        </div>
        
        {isRunning && (
          <LiveStats 
            currentWPM={currentWPM}
            accuracy={calculateAccuracy()}
            progress={calculateProgress()}
          />
        )}
        
        {showResults && (
          <GameResults
            isOpen={showResults}
            onClose={resetGame}
            wpm={wpm}
            totalPoints={points}
            earnedPoints={Math.round(wpm * 2)}
            mistakes={mistakes}
          />
        )}
      </main>
    </div>
  );
}