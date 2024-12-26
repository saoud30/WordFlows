"use client";

import { useState, useCallback } from "react";
import { TextLength, textLengthSettings } from "@/lib/text-length";
import { TextCategory, textCategories } from "@/lib/categories";

export function useTextSelection() {
  const [text, setText] = useState("");
  const [usedTexts, setUsedTexts] = useState<Set<string>>(new Set());

  const getTextByLength = useCallback((category: TextCategory, length: TextLength) => {
    const categoryTexts = textCategories[category];
    if (!categoryTexts || categoryTexts.length === 0) {
      return { text: "Loading..." };
    }

    // Filter texts by length
    const filteredTexts = categoryTexts.filter((item) => {
      const wordCount = item.text.split(/\s+/).length;
      return (
        wordCount >= textLengthSettings[length].wordRange.min &&
        wordCount <= textLengthSettings[length].wordRange.max
      );
    });

    // Filter out previously used texts
    const availableTexts = filteredTexts.filter(item => !usedTexts.has(item.text));

    // If all texts have been used, reset the used texts
    if (availableTexts.length === 0) {
      setUsedTexts(new Set());
      return filteredTexts[Math.floor(Math.random() * filteredTexts.length)];
    }

    // Get a random text from available texts
    const selectedText = availableTexts[Math.floor(Math.random() * availableTexts.length)];
    
    // Add the selected text to used texts
    setUsedTexts(prev => new Set(prev).add(selectedText.text));

    return selectedText;
  }, [usedTexts]);

  return {
    text,
    setText,
    getTextByLength,
  };
}