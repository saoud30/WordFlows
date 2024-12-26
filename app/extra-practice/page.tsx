"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code, FileText, Terminal, Stethoscope, Scale, Calculator, Mail, GitBranch } from "lucide-react";

const categories = {
  programming: {
    icon: <Code className="h-5 w-5" />,
    title: "Programming Languages",
    content: ["Python", "JavaScript", "Java", "C++", "Ruby", "Go", "Rust", "PHP", "Swift", "Kotlin"]
  },
  industry: {
    icon: <FileText className="h-5 w-5" />,
    title: "Industry Terminology",
    content: ["Marketing", "Finance", "HR", "Sales", "Operations", "Management", "Consulting", "Real Estate"]
  },
  technical: {
    icon: <Terminal className="h-5 w-5" />,
    title: "Technical Documentation",
    content: ["API Documentation", "System Architecture", "Database Design", "Network Protocols", "Security Guidelines"]
  },
  medical: {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Medical Terminology",
    content: ["Anatomy", "Physiology", "Pharmacology", "Pathology", "Clinical Procedures", "Medical Abbreviations"]
  },
  legal: {
    icon: <Scale className="h-5 w-5" />,
    title: "Legal Terminology",
    content: ["Contract Law", "Criminal Law", "Civil Law", "Corporate Law", "Intellectual Property", "Legal Procedures"]
  },
  scientific: {
    icon: <Calculator className="h-5 w-5" />,
    title: "Scientific & Math",
    content: ["Scientific Notation", "Mathematical Equations", "Chemical Formulas", "Physics Equations", "Statistical Terms"]
  },
  email: {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Templates",
    content: ["Professional Greetings", "Meeting Requests", "Follow-ups", "Thank You Notes", "Project Updates"]
  },
  git: {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Git Commands",
    content: ["Basic Commands", "Branching", "Merging", "Remote Operations", "Advanced Git", "Git Workflows"]
  }
};

export default function ExtraPractice() {
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div className="min-h-screen bg-black">
      <Navbar textLength="medium" onTextLengthChange={() => {}} />
      
      <main className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-neutral-200 mb-8">Extra Practice</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 bg-white/5 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-neutral-200">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-2">
                  {Object.entries(categories).map(([key, category]) => (
                    <Button
                      key={key}
                      variant={selectedCategory === key ? "default" : "outline"}
                      className="w-full justify-start gap-2"
                      onClick={() => setSelectedCategory(key)}
                    >
                      {category.icon}
                      {category.title}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="col-span-1 lg:col-span-2 bg-white/5 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-neutral-200">
                {categories[selectedCategory as keyof typeof categories].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories[selectedCategory as keyof typeof categories].content.map((item) => (
                    <Button
                      key={item}
                      variant="outline"
                      className="h-auto p-4 justify-start"
                      onClick={() => setSelectedContent(item)}
                    >
                      <div className="text-left">
                        <p className="font-medium">{item}</p>
                        <p className="text-sm text-neutral-400">Click to practice</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}