"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiMinus, FiChevronDown, FiBell, FiUser, FiSettings, FiSun, FiMoon, FiCalendar, FiPieChart, FiTrendingUp, FiGrid, FiArrowRight, FiLayers } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Link from "next/link";
import { MotionH1, MotionP, MotionDiv } from "../ui/motion";

export default function IsometricUISection() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative overflow-hidden py-10">
            {/* Enhanced grid background */}
            <div className="absolute w-full h-full inset-0 z-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <svg
                        className="w-full h-full opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 1000 1000"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <pattern
                                id="mesh"
                                x="0"
                                y="0"
                                width="20"
                                height="42"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeOpacity="0.2"
                                />
                            </pattern>
                            <mask id="fadeMask">
                                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                                    <stop offset="15%" stopColor="white" stopOpacity="1" />
                                    <stop offset="85%" stopColor="white" stopOpacity="1" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mesh)" mask="url(#fadeMask)" />
                    </svg>
                </div>
            </div>

            {/* Main container */}
            <div className="container relative z-20 flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-12">
                {/* Text content */}
                <div className="relative z-10 w-full lg:w-7/12 xl:w-5/12">
                    <MotionH1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center xl:text-left text-2xl font-bold sm:text-5xl md:text-4xl lg:text-4xl"
                    >
                        Build Beautiful
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            {" "}UI Sections
                        </span>
                    </MotionH1>
                    <MotionP
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-center xl:text-left text-lg text-muted-foreground w-full xl:max-w-2xl"
                    >
                        A collection of modern, accessible, and customizable UI sections built with code blocks.
                        Powered by Radix UI, Tailwind CSS, and Framer Motion.
                    </MotionP>
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex flex-wrap items-center justify-center xl:justify-start gap-4 w-full"
                    >
                        <Button asChild className="group">
                            <Link href="/components">
                                Get Started
                                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild className="group">
                            <Link href="/code-blocks">
                                Explore Code Blocks
                                <FiLayers className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </MotionDiv>
                </div>


                {/* Flowchart-style Cards Layout */}
                <div className="w-full lg:w-7/12 h-[610px] relative hidden xl:block overflow-visible">
                    {/* Connecting Lines - Straight lines only */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        {/* Theme Card Line - Top Left */}
                        <path
                            d="M 130 72 L 130 315 L 340 315"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/20"
                        />
                        {/* Calendar Card Line - Top Right */}
                        <path
                            d="M 580 72 L 580 315 L 360 315"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/20"
                        />
                        {/* Analytics Card Line - Bottom Right */}
                        <path
                            d="M 580 528 L 580 335 L 360 335"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/20"
                        />
                        {/* Notification Card Line - Bottom Left */}
                        <path
                            d="M 130 528 L 130 335 L 340 335"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/20"
                        />
                        {/* Top Component Line */}
                        <path
                            d="M 352 0 L 352 315"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/20"
                        />
                        {/* Bottom Component Line */}
                        <path
                            d="M 352 600 L 352 300"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/20"
                        />
                    </svg>

                    {/* Top Component */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute -top-24 left-[30%] -translate-x-1/2 z-40 w-64 shadow-xl rounded-xl"
                    >
                        <div className="relative">
                            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                                <defs>
                                    <mask id="topFadeMask">
                                        <linearGradient id="topFadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="white" stopOpacity="0" />
                                            <stop offset="40%" stopColor="white" stopOpacity="0" />
                                            <stop offset="60%" stopColor="white" stopOpacity="0.3" />
                                            <stop offset="80%" stopColor="white" stopOpacity="0.6" />
                                            <stop offset="100%" stopColor="white" stopOpacity="1" />
                                        </linearGradient>
                                        <rect width="100%" height="100%" fill="url(#topFadeGradient)" rx="12" ry="12" />
                                    </mask>
                                </defs>
                            </svg>
                            <div className="p-4 bg-white dark:bg-black rounded-xl shadow-2xl border border-black/10 dark:border-white/10 backdrop-blur-sm" style={{ mask: 'url(#topFadeMask)' }}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <FiLayers className="text-primary h-5 w-5" />
                                        <h4 className="font-medium text-sm">Components</h4>
                                    </div>
                                    <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                        New
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span>UI Sections</span>
                                        <span className="text-black/60 dark:text-white/60">24</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Code Blocks</span>
                                        <span className="text-black/60 dark:text-white/60">156</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Component */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute -bottom-24 left-[30%] -translate-x-1/2 z-40 w-64"
                    >
                        <div className="relative">
                            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                                <defs>
                                    <mask id="bottomFadeMask">
                                        <linearGradient id="bottomFadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                                            <stop offset="20%" stopColor="white" stopOpacity="0.6" />
                                            <stop offset="40%" stopColor="white" stopOpacity="0.4" />
                                            <stop offset="60%" stopColor="white" stopOpacity="0.2" />
                                            <stop offset="80%" stopColor="white" stopOpacity="0" />
                                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                        <rect width="100%" height="100%" fill="url(#bottomFadeGradient)" />
                                    </mask>
                                </defs>
                            </svg>
                            <div className="p-4 bg-white dark:bg-black rounded-t-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/10 dark:border-white/10 backdrop-blur-sm" style={{ mask: 'url(#bottomFadeMask)' }}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                        <FiTrendingUp className="text-primary h-5 w-5" />
                                        <h4 className="font-medium text-sm">Statistics</h4>
                                    </div>
                                    <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                        Live
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Active Users</span>
                                        <span className="text-black/60 dark:text-white/60">1.2k</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Downloads</span>
                                        <span className="text-black/60 dark:text-white/60">3.4k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Central Logo */}
                    <div className="flex flex-col items-center space-y-4">
                        <MotionDiv
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className="absolute top-[48%] left-[42%] -translate-x-1/2 -translate-y-1/2 z-50"
                        >
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="rounded-lg border border-text-primary/20 h-16 w-16 flex items-center justify-center">
                                    <div className="bg-black dark:bg-white border rounded-lg h-14 w-14 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white dark:text-black">U</span>
                                    </div>
                                </div>
                                <span className="text-lg font-semibold">UIDOCK</span>
                            </div>
                        </MotionDiv>
                    </div>

                    {/* Theme Toggle Card - Top Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="absolute top-10 left-0 z-40 w-64"
                    >
                        <div className="p-4 bg-white dark:bg-black rounded-xl shadow-2xl border border-black/10 dark:border-white/10 backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span className="font-medium text-sm">Theme Settings</span>
                                </div>
                                <div className="text-xs text-black/60 dark:text-white/60">System</div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <button
                                    onClick={() => setTheme('light')}
                                    className={`p-2 rounded-lg flex items-center space-x-3 transition-all duration-200 ${theme === 'light'
                                        ? 'bg-primary text-white dark:text-black shadow-lg scale-105'
                                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white'
                                        }`}
                                >
                                    <FiSun className="h-5 w-5" />
                                    <span className="text-sm font-medium">Light Mode</span>
                                </button>

                                <button
                                    onClick={() => setTheme('dark')}
                                    className={`p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${theme === 'dark'
                                        ? 'bg-primary text-white dark:text-black shadow-lg scale-105'
                                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white'
                                        }`}
                                >
                                    <FiMoon className="h-5 w-5" />
                                    <span className="text-sm font-medium">Dark Mode</span>
                                </button>

                                <button
                                    onClick={() => setTheme('system')}
                                    className={`p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${theme === 'system'
                                        ? 'bg-primary text-white dark:text-black shadow-lg scale-105'
                                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white'
                                        }`}
                                >
                                    <FiGrid className="h-5 w-5" />
                                    <span className="text-sm font-medium">System Default</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Calendar Card - Top Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute top-10 right-0 z-40 w-80"
                    >
                        <div className="p-4 bg-white dark:bg-black rounded-xl shadow-2xl border border-black/10 dark:border-white/10 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <FiCalendar className="text-primary h-5 w-5" />
                                    <h4 className="font-medium text-sm">Calendar</h4>
                                </div>
                                <div className="text-xs text-black/60 dark:text-white/60">May 2024</div>
                            </div>

                            <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs text-black/60 dark:text-white/60">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                    <div key={day}>{day}</div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                {Array.from({ length: 35 }, (_, i) => (
                                    <div
                                        key={i}
                                        className={`p-1.5 rounded-full ${i === 18
                                            ? 'bg-primary text-white'
                                            : i > 28
                                                ? 'text-black/40 dark:text-white/40'
                                                : ''
                                            }`}
                                    >
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Analytics Card - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute bottom-10 right-0 z-40 w-72"
                    >
                        <div className="p-4 bg-white dark:bg-black rounded-xl shadow-2xl border border-black/10 dark:border-white/10 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-medium text-sm">Analytics</h4>
                                <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                    +12.5%
                                </div>
                            </div>

                            <div className="flex items-end space-x-1 h-24 mb-2">
                                {[30, 45, 25, 60, 40, 20, 75].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-primary/20 dark:bg-primary/30 rounded-t transition-all duration-300 hover:bg-primary/30 dark:hover:bg-primary/40"
                                        style={{ height: `${height}%` }}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-xs text-black/60 dark:text-white/60">
                                <span>This Week</span>
                                <div className="flex items-center">
                                    <FiTrendingUp className="text-primary mr-1 h-3 w-3" />
                                    <span>Growth Trend</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Notification Card - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute left-0 bottom-10 z-40 w-72"
                    >
                        <div className="p-4 bg-white dark:bg-black rounded-xl shadow-2xl border border-black/10 dark:border-white/10 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <FiBell className="text-primary h-5 w-5" />
                                    <h4 className="font-medium text-sm">Notifications</h4>
                                </div>
                                <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                    3 New
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <div>
                                        <p className="text-sm">New component added</p>
                                        <p className="text-xs text-black/60 dark:text-white/60">2 minutes ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <div>
                                        <p className="text-sm">Update available</p>
                                        <p className="text-xs text-black/60 dark:text-white/60">1 hour ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}