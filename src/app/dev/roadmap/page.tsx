// components/Roadmap.tsx
'use client';

import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {GoCpu} from 'react-icons/go';
import {FaCube} from 'react-icons/fa';
import {HiCodeBracket} from "react-icons/hi2";
import {HiServer} from "react-icons/hi";
import {MdRocketLaunch} from "react-icons/md";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  icon: React.ElementType;
  tags: string[];
  position: { x: number; y: number };
}

const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Protocol Foundation',
    description: 'Implement Minecraft protocol in Rust with zero-copy parsing',
    status: 'completed',
    icon: GoCpu,
    tags: ['Networking', 'Protocol', 'Rust'],
    position: {x: 10, y: 15}
  },
  {
    id: '2',
    title: 'World Engine Core',
    description: 'Build chunk management with async generation pipeline',
    status: 'completed',
    icon: FaCube,
    tags: ['World', 'Performance', 'Async'],
    position: {x: 35, y: 25}
  },
  {
    id: '3',
    title: 'Plugin Architecture',
    description: 'Hot-reloadable WASM plugin system with secure sandboxing',
    status: 'in-progress',
    icon: HiCodeBracket,
    tags: ['Extensibility', 'WASM', 'Security'],
    position: {x: 65, y: 35}
  },
  {
    id: '4',
    title: 'Performance Optimization',
    description: 'Multi-threading with work-stealing for 1000+ concurrent players',
    status: 'in-progress',
    icon: HiServer,
    tags: ['Performance', 'Scalability', 'MT'],
    position: {x: 85, y: 50}
  },
  {
    id: '5',
    title: 'Production Launch',
    description: 'Deploy enterprise-ready server with monitoring and auto-scaling',
    status: 'planned',
    icon: MdRocketLaunch,
    tags: ['Deployment', 'Production', 'DevOps'],
    position: {x: 50, y: 85}
  }
];

const statusColors = {
  completed: 'from-green-400 to-emerald-500',
  'in-progress': 'from-orange-400 to-amber-500',
  planned: 'from-gray-500 to-gray-600'
};

export default function Roadmap() {
  const [pathD, setPathD] = useState('');

  useEffect(() => {
    // Generate smooth SVG path through all points
    const points = roadmapData.map(item => item.position);
    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      // Calculate control points for smooth curves
      const cp1x = prev.x + (curr.x - prev.x) * 0.4 + 4;
      const cp1y = prev.y + (curr.y - prev.y) * 0.1;
      const cp2x = curr.x - (curr.x - prev.x) * 0.4 + 4;
      const cp2y = curr.y - (curr.y - prev.y) * 0.1;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    setPathD(d);
  }, []);

  const y_offset = -9;
  const x_offset = -8;

  return (
          <div className='flex flex-col gap-5'>
            <Header/>
            <div className="overflow-hidden min-h-screen">
              <div className="relative max-w-7xl mx-auto p-8">
                {/* Animated Background Grid */}
                <div className="fixed inset-0 overflow-hidden opacity-10">
                  <div className="
                              absolute inset-0
                              bg-[linear-gradient(orange_1px,transparent_1px),linear-gradient(90deg,orange_1px,transparent_1px)]
                              bg-[length:50px_50px]
                              [transform:perspective(500px)_rotateX(45deg)]
                            "
                  />
                </div>
                {/* Header */}
                <motion.div
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        className="text-center mb-16"
                >
                  <h1 className="text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                FerrumC
              </span>
                    <span className="block text-2xl font-light text-gray-400 mt-2">
                Development Journey
              </span>
                  </h1>
                  <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Following the winding path of building the next-generation Minecraft server software
                  </p>
                </motion.div>

                {/* Curved Timeline Container */}
                <div className="relative w-full min-h-screen max-w-5xl mx-auto aspect-square">
                  <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8"/>
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9"/>
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8"/>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    <motion.path
                            d={pathD}
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="0.8"
                            filter="url(#glow)"
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                    />
                  </svg>

                  {/* Cards pinned to the path */}
                  {roadmapData.map((item, index) => (
                          <motion.div
                                  key={item.id}
                                  className="absolute w-max h-max"
                                  style={{
                                    left: `${item.position.x + x_offset}%`,
                                    top: `${item.position.y + y_offset + (-index * 2)}%`,
                                    transform: "translate(-50%,-50%)"
                                  }}
                                  initial={{scale: 0, opacity: 0}}
                                  animate={{scale: 1, opacity: 1}}
                                  transition={{delay: index * 0.3 + 0.5, type: "spring", stiffness: 200}}
                          >
                            {/* connector */}
                            <motion.div
                                    className="absolute left-1/2 top-full h-8 w-px bg-gradient-to-b from-orange-500 to-transparent"
                                    initial={{scaleY: 0}}
                                    animate={{scaleY: 1}}
                                    transition={{delay: index * 0.3 + 0.8}}
                            />

                            {/* card */}
                            <motion.div
                                    whileHover={{scale: 1.1, rotate: [0, 1, -1, 0]}}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      rotate: {duration: 0.5, ease: "easeInOut"}
                                    }}
                                    className={`relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border-2 transition-all duration-300 ${
                                            item.status === "completed"
                                                    ? "border-green-500/60 shadow-green-500/20"
                                                    : item.status === "in-progress"
                                                            ? "border-orange-500/60 shadow-orange-500/20"
                                                            : "border-gray-600/60 shadow-gray-500/20"
                                    } shadow-lg hover:shadow-xl`}
                            >
                              {/* badge */}
                              <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${statusColors[item.status]} text-white shadow-lg`}>
                                {item.status.replace("-", " ").toUpperCase()}
                              </div>

                              {/* icon */}
                              <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg mb-3 inline-block">
                                <item.icon className="w-5 h-5 text-white"/>
                              </div>

                              {/* title */}
                              <h3 className="text-sm font-bold text-white mb-2 leading-tight">{item.title}</h3>

                              {/* tags */}
                              <div className="flex flex-wrap gap-1">
                                {item.tags.slice(0, 2).map((tag) => (
                                        <span key={tag}
                                              className="px-2 py-1 bg-gray-700/50 text-orange-400 text-xs rounded border border-orange-500/30">
              {tag}
            </span>
                                ))}
                              </div>
                            </motion.div>

                            {/* glow pulse */}
                            <motion.div
                                    animate={{
                                      boxShadow: [
                                        "0 0 20px rgba(251,146,60,0.3)",
                                        "0 0 40px rgba(251,146,60,0.6)",
                                        "0 0 20px rgba(251,146,60,0.3)"
                                      ]
                                    }}
                                    transition={{duration: 2, repeat: Infinity}}
                                    className="absolute inset-0 rounded-xl pointer-events-none"
                            />
                          </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <Footer/>
          </div>
  );
}