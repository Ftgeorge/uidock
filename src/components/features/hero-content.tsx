"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiMinus, FiChevronDown, FiBell, FiUser, FiSettings, FiSun, FiMoon, FiCalendar, FiPieChart, FiTrendingUp, FiGrid, FiArrowRight, FiLayers } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Link from "next/link";
import { MotionH1, MotionP, MotionDiv } from "../ui/motion";
import { Card, CardHeader, CardContent } from "../ui/card";

const CARD_ANIMATIONS = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

const SIDE_CARD_ANIMATIONS = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
};

const ANALYTICS_DATA = [30, 45, 25, 60, 40, 20, 75];

const NOTIFICATIONS = [
    { text: "New component added", time: "2 minutes ago" },
    { text: "Update available", time: "1 hour ago" }
];

export default function IsometricUISection() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        // Update date every minute
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const formatMonthYear = (date: Date) => {
        return date.toLocaleString('default', { month: 'long', year: 'numeric' });
    };

    if (!mounted) return null;

    return (
        <section className="relative overflow-hidden py-10">
            {/* Enhanced grid background */}
            <div className="absolute w-full h-full flex justify-end inset-0 z-0 overflow-hidden">
                <div className="relative w-7/12 h-full">
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
                                width="40"
                                height="40"
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
                                    <stop offset="15%" stopColor="white" stopOpacity="0.3" />
                                    <stop offset="85%" stopColor="white" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="sideFadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                                    <stop offset="15%" stopColor="white" stopOpacity="0.3" />
                                    <stop offset="85%" stopColor="white" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                                <rect width="100%" height="100%" fill="url(#sideFadeGradient)" />
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
                        className="text-center xl:text-left text-2xl font-bold sm:text-5xl md:text-4xl lg:text-4xl xl:text-3xl"
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
                        <Button href="/docs" variant="default" className="group">
                            Get Started
                            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button href="/code-blocks" variant="ghost" asChild className="group">
                            Explore Code Blocks
                            <FiLayers className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </MotionDiv>
                </div>


                {/* Isometric Cards Layout */}
                <div className="w-[800px] h-[610px] relative hidden xl:block overflow-visible">
                    {/* Connecting Lines - Linear lines only */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        <defs>
                            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2">
                                    <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                                </stop>
                                <stop offset="50%" stopColor="currentColor" stopOpacity="0.8">
                                    <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                                </stop>
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0.2">
                                    <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                                </stop>
                            </linearGradient>
                        </defs>
                        {/* Base lines - grayscale */}
                        <path
                            d="M 130 72 L 130 315 L 340 315"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/10"
                        />
                        <path
                            d="M 580 72 L 580 315 L 360 315"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/10"
                        />
                        <path
                            d="M 580 528 L 580 335 L 360 335"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/10"
                        />
                        <path
                            d="M 130 528 L 130 335 L 340 335"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/10"
                        />
                        <path
                            d="M 352 0 L 352 315"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/10"
                        />
                        <path
                            d="M 352 600 L 352 300"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-primary/10"
                        />

                        {/* Animated lines */}
                        <path
                            d="M 130 72 L 130 315 L 340 315"
                            stroke="url(#pulseGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="text-primary/40"
                        >
                            <animate
                                attributeName="stroke-dasharray"
                                values="0,1000;1000,0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <path
                            d="M 580 72 L 580 315 L 360 315"
                            stroke="url(#pulseGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="text-primary/40"
                        >
                            <animate
                                attributeName="stroke-dasharray"
                                values="0,1000;1000,0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <path
                            d="M 580 528 L 580 335 L 360 335"
                            stroke="url(#pulseGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="text-primary/40"
                        >
                            <animate
                                attributeName="stroke-dasharray"
                                values="0,1000;1000,0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <path
                            d="M 130 528 L 130 335 L 340 335"
                            stroke="url(#pulseGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="text-primary/40"
                        >
                            <animate
                                attributeName="stroke-dasharray"
                                values="0,1000;1000,0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <path
                            d="M 352 0 L 352 315"
                            stroke="url(#pulseGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="text-primary/40"
                        >
                            <animate
                                attributeName="stroke-dasharray"
                                values="0,1000;1000,0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <path
                            d="M 352 600 L 352 300"
                            stroke="url(#pulseGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="text-primary/40"
                        >
                            <animate
                                attributeName="stroke-dasharray"
                                values="0,1000;1000,0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                    </svg>

                    {/* Top Component */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute -top-24 left-[240px] z-40 w-64"
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
                                    <linearGradient id="topPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1">
                                            <animate attributeName="stop-opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                                        </stop>
                                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.4">
                                            <animate attributeName="stop-opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
                                        </stop>
                                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1">
                                            <animate attributeName="stop-opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="p-4 bg-white dark:bg-[#111] rounded-xl shadow-2xl border border-light-200 dark:border-dark-200" style={{ mask: 'url(#topFadeMask)' }}>
                                <div className="relative">
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-50"
                                        style={{
                                            background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary) 50%, var(--primary) 100%)',
                                            backgroundSize: '200% 100%',
                                            animation: 'pulse 2s infinite'
                                        }}
                                    />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <FiLayers className="text-primary h-5 w-5" />
                                                <h4 className="font-medium text-sm text-dark dark:text-light">Components</h4>
                                            </div>
                                            <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                                New
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-dark dark:text-light">UI Sections</span>
                                                <span className="text-dark-600 dark:text-light-600">24</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-dark dark:text-light">Code Blocks</span>
                                                <span className="text-dark-600 dark:text-light-600">156</span>
                                            </div>
                                        </div>
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
                        className="absolute -bottom-24 left-[240px] z-40 w-64"
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
                                    <linearGradient id="bottomPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1">
                                            <animate attributeName="stop-opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                                        </stop>
                                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.4">
                                            <animate attributeName="stop-opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
                                        </stop>
                                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1">
                                            <animate attributeName="stop-opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="p-4 bg-white dark:bg-[#111] rounded-t-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-light-200 dark:border-dark-200" style={{ mask: 'url(#bottomFadeMask)' }}>
                                <div className="relative">
                                    <div
                                        className="absolute inset-0 rounded-t-xl opacity-50"
                                        style={{
                                            background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary) 50%, var(--primary) 100%)',
                                            backgroundSize: '200% 100%',
                                            animation: 'pulse 2s infinite'
                                        }}
                                    />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <FiTrendingUp className="text-primary h-5 w-5" />
                                                <h4 className="font-medium text-sm text-dark dark:text-light">Statistics</h4>
                                            </div>
                                            <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                                Live
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-dark dark:text-light">Active Users</span>
                                                <span className="text-dark-600 dark:text-light-600">1.2k</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-dark dark:text-light">Downloads</span>
                                                <span className="text-dark-600 dark:text-light-600">3.4k</span>
                                            </div>
                                        </div>
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
                            className="absolute top-[48%] left-[315px] -translate-y-1/2 z-50"
                        >
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="rounded-lg bg-light dark:bg-dark border border-text-primary/20 h-16 w-16 flex items-center justify-center">
                                    <div className="bg-dark dark:bg-light border rounded-lg h-14 w-14 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white dark:text-black">U</span>
                                    </div>
                                </div>
                                <span className="text-lg font-semibold">UIDOCK</span>
                            </div>
                        </MotionDiv>
                    </div>

                    {/* Theme Toggle Card */}
                    <motion.div
                        {...SIDE_CARD_ANIMATIONS}
                        transition={{ ...SIDE_CARD_ANIMATIONS.transition, delay: 0.1 }}
                        className="absolute top-10 left-0 z-40 w-64"
                    >
                        <Card variant="bordered" className="shadow-2xl">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                        <span className="font-medium text-sm text-dark dark:text-light">Theme Settings</span>
                                    </div>
                                    <div className="text-xs text-dark-600 dark:text-light-600">System</div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col space-y-2">
                                    {[
                                        { icon: FiSun, label: 'Light Mode', value: 'light' },
                                        { icon: FiMoon, label: 'Dark Mode', value: 'dark' },
                                        { icon: FiGrid, label: 'System Default', value: 'system' }
                                    ].map(({ icon: Icon, label, value }) => (
                                        <Button
                                            key={value}
                                            onClick={() => setTheme(value)}
                                            variant={theme === value ? "default" : "ghost"}
                                            className="justify-start"
                                        >
                                            <Icon className="h-5 w-5 mr-3" />
                                            <span className="text-sm font-medium">{label}</span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Calendar Card */}
                    <motion.div
                        {...SIDE_CARD_ANIMATIONS}
                        transition={{ ...SIDE_CARD_ANIMATIONS.transition, delay: 0.2 }}
                        className="absolute top-10 right-0 z-40 w-80"
                    >
                        <Card variant="bordered" className="shadow-2xl">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                        <FiCalendar className="text-primary h-5 w-5" />
                                        <h4 className="font-medium text-sm text-dark dark:text-light">Calendar</h4>
                                    </div>
                                    <div className="text-xxs text-dark-600 dark:text-light-600">{formatMonthYear(currentDate)}</div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xxs text-dark-600 dark:text-light-600">
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                        <div key={day}>{day}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-1 text-center text-xxs">
                                    {Array.from({ length: 42 }, (_, i) => {
                                        const firstDay = getFirstDayOfMonth(currentDate);
                                        const daysInMonth = getDaysInMonth(currentDate);
                                        const prevMonthDays = getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
                                        const dayNumber = i - firstDay + 1;
                                        const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
                                        const isToday = isCurrentMonth && dayNumber === currentDate.getDate();
                                        const displayDay = isCurrentMonth
                                            ? dayNumber
                                            : dayNumber <= 0
                                                ? prevMonthDays + dayNumber
                                                : dayNumber - daysInMonth;

                                        return (
                                            <div
                                                key={i}
                                                className={`p-1.5 rounded-full ${isToday
                                                    ? 'bg-primary text-white dark:text-black'
                                                    : isCurrentMonth
                                                        ? 'text-black dark:text-white'
                                                        : 'text-black/40 dark:text-white/40'
                                                    }`}
                                            >
                                                {displayDay}
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Analytics Card */}
                    <motion.div
                        {...CARD_ANIMATIONS}
                        transition={{ ...CARD_ANIMATIONS.transition, delay: 0.3 }}
                        className="absolute bottom-10 right-0 z-40 w-72"
                    >
                        <Card className="shadow-2xl" variant="bordered">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-sm text-dark dark:text-light">Analytics</h4>
                                    <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                        +12.5%
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-end space-x-1 h-24 mb-2">
                                    {ANALYTICS_DATA.map((height, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-dark dark:bg-light rounded-t transition-all duration-300 hover:bg-primary/30 dark:hover:bg-primary/40"
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-xs text-dark-600 dark:text-light-600">
                                    <span>This Week</span>
                                    <div className="flex items-center">
                                        <FiTrendingUp className="text-primary mr-1 h-3 w-3" />
                                        <span>Growth Trend</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Notification Card */}
                    <motion.div
                        {...SIDE_CARD_ANIMATIONS}
                        transition={{ ...SIDE_CARD_ANIMATIONS.transition, delay: 0.4 }}
                        className="absolute left-0 bottom-10 z-40 w-72"
                    >
                        <Card variant="bordered" className="shadow-2xl">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <FiBell className="text-primary h-5 w-5" />
                                        <h4 className="font-medium text-sm text-dark dark:text-light">Notifications</h4>
                                    </div>
                                    <div className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                                        3 New
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {NOTIFICATIONS.map((notification, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <div>
                                                <p className="text-sm text-dark dark:text-light">{notification.text}</p>
                                                <p className="text-xs text-dark-600 dark:text-light-600">{notification.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <style jsx>{`
                @keyframes pulse {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </section>
    );
}