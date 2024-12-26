// components/ui/animated-border.tsx
"use client";

import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
    className?: string;
    children: React.ReactNode;
    gradientColors?: string[];
    animationDuration?: number;
    strokeWidth?: number;
}

export function AnimatedBorder({
    className,
    children,
    gradientColors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationDuration = 5,
    strokeWidth = 2,
}: AnimatedBorderProps) {
  
    const gradientString = `linear-gradient(to right, ${gradientColors.join(', ')})`;
    return (
        <div className={cn("relative", className)}>
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="8"
                    ry="8"
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray="1000"//set to 1000
                    strokeDashoffset="0" // set to 0
                    style={{
                        animation: `svgAnimation ${animationDuration}s linear infinite`,
                    }}
                />
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        {gradientColors.map((color, index) => (
                            <stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
                        ))}
                    </linearGradient>
                </defs>
            </svg>
            {children}
        </div>
    );
}