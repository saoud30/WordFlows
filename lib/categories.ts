export type TextCategory =
  | 'movies'
  | 'books'
  | 'speeches'
  | 'programming'
  | 'business'
  | 'markdown';

interface TextContent {
  text: string;
  source?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const textCategories: Record<TextCategory, TextContent[]> = {
  movies: [
    // Existing short content
    {
      text: "Do, or do not. There is no try.",
      source: "Star Wars: The Empire Strikes Back",
      difficulty: "beginner"
    },
    {
      text: "Life is like a box of chocolates.",
      source: "Forrest Gump",
      difficulty: "beginner"
    },
    // New short content
    {
      text: "I'll be back.",
      source: "The Terminator",
      difficulty: "beginner"
    },
    {
      text: "Here's looking at you, kid.",
      source: "Casablanca",
      difficulty: "beginner"
    },
    {
      text: "To infinity and beyond!",
      source: "Toy Story",
      difficulty: "beginner"
    },
    {
      text: "Why so serious?",
      source: "The Dark Knight",
      difficulty: "beginner"
    },
    {
      text: "I see dead people.",
      source: "The Sixth Sense",
      difficulty: "beginner"
    },
    // Existing medium content
    {
      text: "Every moment before this has been building to this moment. All your training, all your preparation - it's all led to this. Now is your time to show the world what you're made of.",
      source: "Rocky Balboa",
      difficulty: "intermediate"
    },
    {
      text: "Sometimes the right path is not the easiest one. You'll face challenges that seem impossible, but remember why you started. Your destiny is in your hands.",
      source: "Pocahontas Extended",
      difficulty: "intermediate"
    },
    // New medium content
    {
      text: "The past can hurt, but you can either run from it or learn from it. What matters most is the path you choose to take from this moment forward.",
      source: "The Lion King Extended",
      difficulty: "intermediate"
    },
    {
      text: "In this world, there are sheep and there are wolves. But sometimes, the bravest sheep must learn to howl with the wolves to protect their flock.",
      source: "Zootopia Extended",
      difficulty: "intermediate"
    },
    {
      text: "Fear is not real. It is a product of thoughts you create. Danger is very real, but fear is a choice.",
      source: "After Earth",
      difficulty: "intermediate"
    },
    // Existing long content
    {
      text: "I know what it's like to lose. To feel so desperately that you're right, yet to fail nonetheless. It's frightening. Turns the legs to jelly. But I ask you, to what end? Dread it. Run from it. Destiny arrives all the same. And now, it's here. Or should I say, I am. The choices we make today will echo through eternity.",
      source: "Avengers: Infinity War Extended",
      difficulty: "advanced"
    },
    // New long content
    {
      text: "The world we live in is but a canvas of infinite possibilities, painted with the brushstrokes of our choices. Each decision, each moment of courage or cowardice, shapes not just our destiny but the very fabric of reality itself. In the end, we are not judged by the powers we possess, but by the wisdom with which we choose to use them.",
      source: "Doctor Strange Extended",
      difficulty: "advanced"
    },
    {
      text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away. In this vast universe, we are all connected, all part of a greater story that unfolds with each passing second. The question is not whether we will leave a mark on this world, but what kind of mark we choose to leave.",
      source: "Interstellar Extended",
      difficulty: "advanced"
    },
    {
      text: "Through the darkest nights and the fiercest storms, hope remains our strongest ally. It's not about how hard you can hit, but how hard you can get hit and keep moving forward. That's how winning is done, that's how legends are born, and that's how history remembers those who dared to dream.",
      source: "Rocky Balboa Extended",
      difficulty: "advanced"
    },
    {
      text: "We've wandered the stars, witnessed the rise and fall of civilizations, and yet, the most profound discoveries often lie within ourselves. The universe is vast, but so too is the potential of the human spirit.",
      source: "Contact Extended",
      difficulty: "advanced"
    }
  ],
  books: [
    // Existing short content
    {
      text: "All happy families are alike; each unhappy family is unhappy in its own way.",
      source: "Anna Karenina",
      difficulty: "beginner"
    },
    {
      text: "It was a bright cold day in April, and the clocks were striking thirteen.",
      source: "1984",
      difficulty: "beginner"
    },
    // New short content
    {
      text: "Call me Ishmael.",
      source: "Moby Dick",
      difficulty: "beginner"
    },
    {
      text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      source: "Pride and Prejudice",
      difficulty: "beginner"
    },
    {
      text: "The man in black fled across the desert, and the gunslinger followed.",
      source: "The Dark Tower",
      difficulty: "beginner"
    },
    {
      text: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
      source: "One Hundred Years of Solitude",
      difficulty: "beginner"
    },
    {
      text: "Happy families are all alike; every unhappy family is unhappy in its own way.",
      source: "Anna Karenina",
      difficulty: "beginner"
    },
    // Existing medium content
    {
      text: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat.",
      source: "The Hobbit",
      difficulty: "intermediate"
    },
    // New medium content
    {
      text: "The past is a foreign country; they do things differently there. Yet memories are the bridges that connect our present to what once was, shaping who we are and who we might become.",
      source: "The Go-Between Extended",
      difficulty: "intermediate"
    },
    {
      text: "Time is not a river flowing in a single direction, but an ocean of infinite possibilities, each wave carrying the potential for change, for redemption, for understanding.",
      source: "The Time Traveler's Wife Extended",
      difficulty: "intermediate"
    },
    {
      text: "Every story has three versions: yours, mine, and the truth. And none of them are wrong, just incomplete, like a book with missing pages.",
      source: "The Blind Assassin Extended",
      difficulty: "intermediate"
    },
    // Existing long content
    {
      text: "The world breaks everyone and afterward many are strong at the broken places. But those that will not break it kills. It kills the very good and the very gentle and the very brave impartially. If you are none of these you can be sure it will kill you too but there will be no special hurry. Life is not a matter of holding good cards, but of playing a poor hand well.",
      source: "A Farewell to Arms",
      difficulty: "advanced"
    },
    // New long content
    {
      text: "In the depths of winter, I finally learned that within me there lay an invincible summer. The world may seem dark and cold, but the human spirit carries within it an eternal flame that cannot be extinguished by any external force. It is this inner light that guides us through our darkest hours, illuminating the path to understanding and self-discovery.",
      source: "The Stranger Extended",
      difficulty: "advanced"
    },
    {
      text: "Reality is not a single thread but a tapestry of infinite complexity, each strand representing a choice, a possibility, a life unlived. We weave our stories through this great fabric of existence, creating patterns that ripple through time and space, touching lives we may never know, changing destinies we may never understand.",
      source: "Cloud Atlas Extended",
      difficulty: "advanced"
    },
    {
      text: "Knowledge is a garden; to tend it, you must be both patient and persistent. Some seeds will sprout quickly, others will take seasons to show their first leaves, but all require constant care, attention, and the wisdom to know when to prune and when to let grow wild.",
      source: "The Name of the Wind Extended",
      difficulty: "advanced"
    },
    {
      text: "The human heart is a resilient thing, capable of holding both immense joy and profound sorrow. Like a well-loved book, it bears the marks of its journey, each crease and tear telling a story of love, loss, and the enduring power of hope.",
      source: "The Little Prince Extended",
      difficulty: "advanced"
    }
  ],
  business: [
    // Existing short content
    {
      text: "Thank you for your prompt response. I look forward to our collaboration.",
      difficulty: "beginner"
    },
    {
      text: "I've reviewed the proposal and would like to schedule a meeting to discuss the details.",
      difficulty: "beginner"
    },
    // New short content
    {
      text: "Please find attached the requested documentation for your review.",
      difficulty: "beginner"
    },
    {
      text: "I confirm receipt of your invoice dated January 15th.",
      difficulty: "beginner"
    },
    {
      text: "The project timeline has been updated as per our discussion.",
      difficulty: "beginner"
    },
    {
      text: "Your feedback on this matter would be greatly appreciated.",
      difficulty: "beginner"
    },
    {
      text: "We look forward to meeting you at the conference next week.",
      difficulty: "beginner"
    },
    // Existing medium content
    {
      text: "I hope this email finds you well. I wanted to follow up on our previous discussion regarding the Q3 marketing strategy. Could we schedule a meeting next week to align on the next steps?",
      difficulty: "intermediate"
    },
    // New medium content
    {
      text: "Following our discussion yesterday, I've prepared a preliminary analysis of the market conditions and their potential impact on our Q4 projections. Please review and share your thoughts.",
      difficulty: "intermediate"
    },
    {
      text: "We've identified several key areas for improvement in our current processes. I'd like to propose a workshop next month to address these challenges and develop actionable solutions.",
      difficulty: "intermediate"
    },
    {
      text: "Based on the recent customer feedback survey, we've compiled a comprehensive report highlighting both our strengths and areas requiring immediate attention.",
      difficulty: "intermediate"
    },
    // Existing long content
    {
      text: "I trust this email finds you well. I'm writing to provide a comprehensive update on our Q4 initiatives and outline our strategic objectives for the upcoming fiscal year. Our team has made significant progress in implementing the proposed changes, and I'd like to share some key achievements that align with our company's long-term vision. Please review the attached report and let me know your thoughts.",
      difficulty: "advanced"
    },
    // New long content
    {
      text: "As we approach the end of the fiscal year, I wanted to take this opportunity to provide a detailed overview of our department's performance metrics and strategic initiatives. The data indicates several promising trends in market penetration and customer engagement, while also highlighting areas where we can optimize our resource allocation and operational efficiency.",
      difficulty: "advanced"
    },
    {
      text: "In light of the recent market developments and our ongoing digital transformation initiatives, I've prepared a comprehensive proposal outlining potential strategies for expanding our market presence while maintaining operational excellence. The document includes detailed analysis of competitive landscapes, resource requirements, and projected ROI calculations.",
      difficulty: "advanced"
    },
    {
      text: "Following our board meeting last week, I've consolidated the key discussion points and action items into a strategic roadmap for the next five years. This includes our planned technological investments, market expansion strategies, and talent development initiatives, all aligned with our core mission of delivering exceptional value to our stakeholders.",
      difficulty: "advanced"
    },
    {
      text: "Our commitment to innovation and customer-centric solutions remains paramount as we navigate the evolving global marketplace. This report details our strategic pivots, investment priorities, and risk mitigation strategies designed to ensure sustainable growth and profitability.",
      difficulty: "advanced"
    }
  ],
  programming: [
    // Existing short content
    {
      text: "const sum = (a, b) => a + b;",
      difficulty: "beginner"
    },
    {
      text: "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
      difficulty: "beginner"
    },
    // New short content
    {
      text: "const multiply = (x, y) => x * y;",
      difficulty: "beginner"
    },
    {
      text: "let isEven = num => num % 2 === 0;",
      difficulty: "beginner"
    },
    {
      text: "const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);",
      difficulty: "beginner"
    },
    {
      text: "function getMax(arr) { return Math.max(...arr); }",
      difficulty: "beginner"
    },
    {
      text: "const filterPositive = arr => arr.filter(num => num > 0);",
      difficulty: "beginner"
    },
    // Existing medium content
    {
      text: "function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.filter((x, i) => i > 0 && x <= pivot);\n  const right = arr.filter(x => x > pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}",
      difficulty: "intermediate"
    },
    // New medium content
    {
      text: "function memoize(fn) {\n  const cache = {};\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (key in cache) return cache[key];\n    const result = fn.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}",
      difficulty: "intermediate"
    },
    {
      text: "class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) { this.items.push(item); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}",
      difficulty: "intermediate"
    },
    {
      text: "function debounce(func, wait) {\n  let timeout;\n  return function executedFunction(...args) {\n    const later = () => {\n      clearTimeout(timeout);\n      func(...args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n}",
      difficulty: "intermediate"
    },
    // Existing long content
    {
      text: "class LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  insert(value) {\n    const newNode = { value, next: null };\n    if (!this.head) {\n      this.head = newNode;\n      return;\n    }\n    let current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    current.next = newNode;\n  }\n\n  delete(value) {\n    if (!this.head) return;\n    if (this.head.value === value) {\n      this.head = this.head.next;\n      return;\n    }\n    let current = this.head;\n    while (current.next && current.next.value !== value) {\n      current = current.next;\n    }\n    if (current.next) {\n      current.next = current.next.next;\n    }\n  }\n}",
      difficulty: "advanced"
    },
    // New long content
    // New long content
    {
      text: "class BinarySearchTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = { value, left: null, right: null };\n    if (!this.root) {\n      this.root = newNode;\n      return;\n    }\n\n    function insertNode(node, newNode) {\n      if (newNode.value < node.value) {\n        if (node.left === null) {\n          node.left = newNode;\n        } else {\n          insertNode(node.left, newNode);\n        }\n      } else {\n        if (node.right === null) {\n          node.right = newNode;\n        } else {\n          insertNode(node.right, newNode);\n        }\n      }\n    }\n\n    insertNode(this.root, newNode);\n  }\n\n  inOrderTraverse(callback) {\n    function inOrder(node, callback) {\n      if (node !== null) {\n        inOrder(node.left, callback);\n        callback(node.value);\n        inOrder(node.right, callback);\n      }\n    }\n    inOrder(this.root, callback);\n  }\n\n  search(value) {\n    function searchNode(node, value) {\n      if (node === null || node.value === value) return node;\n      if (value < node.value) return searchNode(node.left, value);\n      return searchNode(node.right, value);\n    }\n    return searchNode(this.root, value);\n  }\n}",
      difficulty: "advanced"
    },
    {
      text: "class Graph {\n  constructor() {\n    this.vertices = new Map();\n  }\n\n  addVertex(vertex) {\n    if (!this.vertices.has(vertex)) {\n      this.vertices.set(vertex, new Set());\n    }\n  }\n\n  addEdge(vertex1, vertex2) {\n    if (!this.vertices.has(vertex1)) this.addVertex(vertex1);\n    if (!this.vertices.has(vertex2)) this.addVertex(vertex2);\n    \n    this.vertices.get(vertex1).add(vertex2);\n    this.vertices.get(vertex2).add(vertex1);\n  }\n\n  bfs(startVertex) {\n    const visited = new Set();\n    const queue = [startVertex];\n    visited.add(startVertex);\n\n    while (queue.length > 0) {\n      const vertex = queue.shift();\n      const neighbors = this.vertices.get(vertex);\n\n      for (const neighbor of neighbors) {\n        if (!visited.has(neighbor)) {\n          visited.add(neighbor);\n          queue.push(neighbor);\n        }\n      }\n    }\n    return visited;\n  }\n\n  dfs(startVertex) {\n    const visited = new Set();\n\n    const dfsHelper = (vertex) => {\n      visited.add(vertex);\n      const neighbors = this.vertices.get(vertex);\n\n      for (const neighbor of neighbors) {\n        if (!visited.has(neighbor)) {\n          dfsHelper(neighbor);\n        }\n      }\n    };\n\n    dfsHelper(startVertex);\n    return visited;\n  }\n}",
      difficulty: "advanced"
    },
    {
      text: "class MinHeap {\n  constructor() {\n    this.heap = [];\n  }\n\n  getParentIndex(index) {\n    return Math.floor((index - 1) / 2);\n  }\n\n  getLeftChildIndex(index) {\n    return 2 * index + 1;\n  }\n\n  getRightChildIndex(index) {\n    return 2 * index + 2;\n  }\n\n  swap(index1, index2) {\n    const temp = this.heap[index1];\n    this.heap[index1] = this.heap[index2];\n    this.heap[index2] = temp;\n  }\n\n  insert(value) {\n    this.heap.push(value);\n    this.bubbleUp();\n  }\n\n  bubbleUp() {\n    let index = this.heap.length - 1;\n    while (index > 0) {\n      const parentIndex = this.getParentIndex(index);\n      if (this.heap[parentIndex] <= this.heap[index]) break;\n      this.swap(index, parentIndex);\n      index = parentIndex;\n    }\n  }\n\n  extractMin() {\n    if (this.heap.length === 0) return null;\n    if (this.heap.length === 1) return this.heap.pop();\n\n    const min = this.heap[0];\n    this.heap[0] = this.heap.pop();\n    this.bubbleDown();\n\n    return min;\n  }\n\n  bubbleDown() {\n    let index = 0;\n    while (true) {\n      const leftChild = this.getLeftChildIndex(index);\n      const rightChild = this.getRightChildIndex(index);\n      let smallestChild = index;\n\n      if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallestChild]) {\n        smallestChild = leftChild;\n      }\n      if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallestChild]) {\n        smallestChild = rightChild;\n      }\n\n      if (smallestChild === index) break;\n\n      this.swap(index, smallestChild);\n      index = smallestChild;\n    }\n  }\n}",
      difficulty: "advanced"
    },
    {
      text: "async function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n    return null;\n  }\n}",
      difficulty: "advanced"
    }
  ],
  speeches: [
    // Existing short content
    {
      text: "Ask not what your country can do for you – ask what you can do for your country.",
      source: "John F. Kennedy",
      difficulty: "beginner"
    },
    {
      text: "The only thing we have to fear is fear itself.",
      source: "Franklin D. Roosevelt",
      difficulty: "beginner"
    },
    // New short content
    {
      text: "I have a dream.",
      source: "Martin Luther King Jr.",
      difficulty: "beginner"
    },
    {
      text: "Tear down this wall!",
      source: "Ronald Reagan",
      difficulty: "beginner"
    },
    {
      text: "Yes we can!",
      source: "Barack Obama",
      difficulty: "beginner"
    },
    {
      text: "Never give up. Never surrender.",
      source: "Winston Churchill",
      difficulty: "beginner"
    },
    {
      text: "Government of the people, by the people, for the people.",
      source: "Abraham Lincoln",
      difficulty: "beginner"
    },
    // Existing medium content
    {
      text: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.",
      source: "Winston Churchill",
      difficulty: "intermediate"
    },
    // New medium content
    {
      text: "Let us not wallow in the valley of despair, I say to you today, my friends. And so even though we face the difficulties of today and tomorrow, I still have a dream.",
      source: "Martin Luther King Jr.",
      difficulty: "intermediate"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts. Our greatest glory lies not in never falling, but in rising every time we fall.",
      source: "Winston Churchill Extended",
      difficulty: "intermediate"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams. No one can make you feel inferior without your consent.",
      source: "Eleanor Roosevelt",
      difficulty: "intermediate"
    },
    // Existing long content
    {
      text: "Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. But one hundred years later, the Negro still is not free.",
      source: "Martin Luther King Jr.",
      difficulty: "advanced"
    },
    // New long content
    {
      text: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.",
      source: "John F. Kennedy",
      difficulty: "advanced"
    },
    {
      text: "In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility – I welcome it. The energy, the faith, the devotion which we bring to this endeavor will light our country and all who serve it – and the glow from that fire can truly light the world.",
      source: "John F. Kennedy Inaugural",
      difficulty: "advanced"
    },
    {
      text: "Let us therefore brace ourselves to our duties, and so bear ourselves that, if the British Empire and its Commonwealth last for a thousand years, men will still say, 'This was their finest hour.' Let us go forward together with our united strength, knowing that the future belongs not to those who seek to divide and conquer, but to those who stand united in the pursuit of liberty.",
      source: "Winston Churchill Extended",
      difficulty: "advanced"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.",
      source: "Franklin D. Roosevelt Extended",
      difficulty: "advanced"
    }
  ],
  markdown: [
    // Existing short content
    {
      text: "# Project Title\n## Overview\n- Key feature\n- Another feature",
      difficulty: "beginner"
    },
    // New short content
    {
      text: "**Bold text**\n*Italic text*\n~~Strikethrough~~",
      difficulty: "beginner"
    },
    {
      text: "# Header 1\n## Header 2\n### Header 3",
      difficulty: "beginner"
    },
    {
      text: "[Link text](https://example.com)\n![Image alt](image.jpg)",
      difficulty: "beginner"
    },
    {
      text: "1. First item\n2. Second item\n3. Third item",
      difficulty: "beginner"
    },
    {
      text: "> This is a blockquote\n> With multiple lines",
      difficulty: "beginner"
    },
    {
      text: "```\ncode block\n```",
      difficulty: "beginner"
    },
    // Existing medium content
    {
      text: "# Getting Started\n\n## Prerequisites\n- Node.js v14+\n- npm or yarn\n\n## Installation\n1. Clone the repo\n2. Install dependencies\n3. Start the server",
      difficulty: "intermediate"
    },
    // New medium content
    {
      text: "# Project Overview\n\n## Features\n- Feature 1: Description\n- Feature 2: Description\n\n## Usage\n```bash\nnpm install\nnpm start\n```\n\n## Configuration\nEdit `config.js` with your settings.",
      difficulty: "intermediate"
    },
    {
      text: "# Contributing Guidelines\n\n## Code Style\nFollow the existing code style.\n\n## Pull Requests\n1. Fork the repo\n2. Create feature branch\n3. Submit PR\n\n## Testing\nRun `npm test` before submitting.",
      difficulty: "intermediate"
    },
    {
      text: "# Component Documentation\n\n## Props\n| Name | Type | Default | Description |\n|------|------|---------|-------------|\n| size | string | 'md' | Component size |\n\n## Examples\n```jsx\n<Component size=\"lg\" />\n```",
      difficulty: "intermediate"
    },
    // Existing long content
    {
      text: "# API Documentation\n\n## Authentication\nAll API endpoints require a valid JWT token in the Authorization header.\n\n## Endpoints\n\n### GET /api/users\nReturns a list of users.\n\n#### Parameters\n- page (optional): Page number\n- limit (optional): Items per page\n\n#### Response\n```json\n{\n  \"users\": [],\n  \"total\": 0,\n  \"pages\": 1\n}\n```\n\n## Error Handling\nAll errors follow the format:\n```json\n{\n  \"error\": \"Error message\",\n  \"code\": 400\n}\n```",
      difficulty: "advanced"
    },
    // New long content
    {
      text: "# System Architecture\n\n## Overview\nThis document outlines the system architecture and component interactions.\n\n## Components\n\n### Frontend\n- React.js for UI\n- Redux for state management\n- Tailwind CSS for styling\n\n### Backend\n- Node.js Express server\n- PostgreSQL database\n- Redis for caching\n\n## Data Flow\n1. Client sends request\n2. Load balancer distributes traffic\n3. API gateway authenticates\n4. Service processes request\n5. Cache checked before database\n\n## Deployment\n```mermaid\ngraph TD\n    A[Client] --> B[Load Balancer]\n    B --> C[API Gateway]\n    C --> D[Services]\n    D --> E[Database]\n```\n\n## Security Measures\n- JWT authentication\n- Rate limiting\n- Input validation\n- CORS policies",
      difficulty: "advanced"
    },
    {
      text: "# Project Wiki\n\n## Introduction\nWelcome to the project wiki. This document serves as the primary source of documentation.\n\n## Getting Started\n\n### Prerequisites\n- Node.js v16+\n- Docker\n- AWS account\n\n### Development Setup\n```bash\n# Clone repository\ngit clone https://github.com/org/repo.git\n\n# Install dependencies\nnpm install\n\n# Setup environment\ncp .env.example .env\n\n# Start development server\nnpm run dev\n```\n\n## Architecture\n\n### Component Overview\n```mermaid\nflowchart LR\n    A[Frontend] --> B[API]\n    B --> C[Database]\n    B --> D[Cache]\n```\n\n## Deployment Guide\n\n### Production Deployment\n1. Build Docker image\n2. Push to registry\n3. Update K8s configs\n4. Apply changes\n\n### Monitoring\n- Prometheus metrics\n- Grafana dashboards\n- ELK stack for logs",
      difficulty: "advanced"
    },
    {
      text: "# Style Guide\n\n## Code Formatting\n\n### JavaScript\n```javascript\n// Good\nfunction example() {\n  const items = [];\n  return items;\n}\n\n// Bad\nfunction example() {\n  var items = new Array();\n  return items;\n}\n```\n\n### CSS Guidelines\n```css\n/* Good */\n.component {\n  display: flex;\n  padding: 1rem;\n}\n\n/* Bad */\n.component {\n  display: flex;\n  padding: 16px;\n}\n```\n\n## Git Workflow\n\n### Branch Naming\n- feature/description\n- bugfix/description\n- hotfix/description\n\n### Commit Messages\n```\nfeat: add new feature\nfix: resolve bug\ndocs: update documentation\n```\n\n## Review Process\n1. Code review\n2. Testing\n3. Documentation\n4. Deployment",
      difficulty: "advanced"
    },
    {
      text: "# Changelog\n\n## [1.0.0] - 2023-10-27\n\n### Added\n- Initial release of the project.\n- Implemented user authentication.\n- Created core data models.\n\n### Fixed\n- Resolved minor styling issues.\n\n### Changed\n- Updated dependencies to latest versions.",
      difficulty: "advanced"
    },
    {
    text: "# Changelog\n\n## [1.0.0] - 2023-10-27\n\n### Added\n- Initial release of the project.\n- Implemented user authentication.\n- Created core data models.\n\n### Fixed\n- Resolved minor styling issues.\n\n### Changed\n- Updated dependencies to latest versions.",
    difficulty: "advanced"
  }
]
};