(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/animations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrowSlide",
    ()=>arrowSlide,
    "buttonHover",
    ()=>buttonHover,
    "buttonTap",
    ()=>buttonTap,
    "cardHover",
    ()=>cardHover,
    "cardHoverSubtle",
    ()=>cardHoverSubtle,
    "charReveal",
    ()=>charReveal,
    "cornerBracketExpand",
    ()=>cornerBracketExpand,
    "counterConfig",
    ()=>counterConfig,
    "createCounterAnimation",
    ()=>createCounterAnimation,
    "createStaggerDelay",
    ()=>createStaggerDelay,
    "defaultTransition",
    ()=>defaultTransition,
    "easing",
    ()=>easing,
    "fadeIn",
    ()=>fadeIn,
    "fadeInScale",
    ()=>fadeInScale,
    "fadeUp",
    ()=>fadeUp,
    "fadeUpBlur",
    ()=>fadeUpBlur,
    "hoverGlow",
    ()=>hoverGlow,
    "hoverLift",
    ()=>hoverLift,
    "hoverScale",
    ()=>hoverScale,
    "iconRotate",
    ()=>iconRotate,
    "letterItem",
    ()=>letterItem,
    "letterStaggerContainer",
    ()=>letterStaggerContainer,
    "lineDrawCenter",
    ()=>lineDrawCenter,
    "lineReveal",
    ()=>lineReveal,
    "lineRevealContainer",
    ()=>lineRevealContainer,
    "lineRevealItem",
    ()=>lineRevealItem,
    "mobileMenuVariants",
    ()=>mobileMenuVariants,
    "navDropdown",
    ()=>navDropdown,
    "navbarVariants",
    ()=>navbarVariants,
    "pageTransition",
    ()=>pageTransition,
    "scaleIn",
    ()=>scaleIn,
    "scrollIndicator",
    ()=>scrollIndicator,
    "slideFromLeft",
    ()=>slideFromLeft,
    "slideFromRight",
    ()=>slideFromRight,
    "slideUpMask",
    ()=>slideUpMask,
    "springConfigs",
    ()=>springConfigs,
    "staggerContainer",
    ()=>staggerContainer,
    "staggerContainerFast",
    ()=>staggerContainerFast,
    "staggerContainerSlow",
    ()=>staggerContainerSlow,
    "staggerItem",
    ()=>staggerItem,
    "staggerItemBlur",
    ()=>staggerItemBlur,
    "telemetryCellReveal",
    ()=>telemetryCellReveal,
    "telemetryPanelReveal",
    ()=>telemetryPanelReveal,
    "terminalCursor",
    ()=>terminalCursor,
    "terminalLineReveal",
    ()=>terminalLineReveal,
    "terminalReveal",
    ()=>terminalReveal,
    "viewportOptions",
    ()=>viewportOptions,
    "viewportOptionsEager",
    ()=>viewportOptionsEager,
    "withDelay",
    ()=>withDelay,
    "wordReveal",
    ()=>wordReveal
]);
const easing = {
    easeOutExpo: [
        0.16,
        1,
        0.3,
        1
    ],
    easeOutQuint: [
        0.22,
        1,
        0.36,
        1
    ],
    easeInOutCirc: [
        0.85,
        0,
        0.15,
        1
    ],
    easeSpring: [
        0.34,
        1.56,
        0.64,
        1
    ],
    easeSmooth: [
        0.4,
        0,
        0.2,
        1
    ],
    easePower4: [
        0.76,
        0,
        0.24,
        1
    ]
};
const defaultTransition = {
    duration: 0.8,
    ease: easing.easeOutExpo
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easing.easeOutExpo
        }
    }
};
const fadeUpBlur = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: easing.easeOutExpo
        }
    }
};
const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing.easeOutQuint
        }
    }
};
const fadeInScale = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easing.easeOutExpo
        }
    }
};
const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easing.easeSpring
        }
    }
};
const slideFromLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easing.easeOutExpo
        }
    }
};
const slideFromRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easing.easeOutExpo
        }
    }
};
const slideUpMask = {
    hidden: {
        y: "100%"
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: easing.easePower4
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};
const staggerContainerFast = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05
        }
    }
};
const staggerContainerSlow = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};
const staggerItem = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easing.easeOutExpo
        }
    }
};
const staggerItemBlur = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: easing.easeOutExpo
        }
    }
};
const charReveal = {
    hidden: {
        opacity: 0,
        y: 50,
        rotateX: -90
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: easing.easeOutQuint
        }
    }
};
const wordReveal = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: easing.easeOutExpo
        }
    }
};
const lineRevealContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
const lineRevealItem = {
    hidden: {
        y: "110%",
        rotateX: -10
    },
    visible: {
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: easing.easePower4
        }
    }
};
const letterStaggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.02
        }
    }
};
const letterItem = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easing.easeOutQuint
        }
    }
};
const lineReveal = {
    hidden: {
        scaleX: 0,
        originX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1,
            ease: easing.easeOutExpo
        }
    }
};
const lineDrawCenter = {
    hidden: {
        scaleX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: easing.easeOutExpo
        }
    }
};
const cornerBracketExpand = {
    hidden: {
        width: 0,
        height: 0,
        opacity: 0
    },
    visible: {
        width: 24,
        height: 24,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing.easeOutExpo
        }
    }
};
const counterConfig = {
    duration: 2,
    delay: 0.5,
    ease: easing.easeOutExpo
};
const createCounterAnimation = (target, duration = 2)=>({
        initial: {
            value: 0
        },
        animate: {
            value: target
        },
        transition: {
            duration,
            ease: easing.easeOutExpo
        }
    });
const hoverScale = {
    scale: 1.02,
    transition: {
        duration: 0.2,
        ease: "easeOut"
    }
};
const hoverLift = {
    y: -4,
    transition: {
        duration: 0.3,
        ease: easing.easeOutExpo
    }
};
const hoverGlow = {
    boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    transition: {
        duration: 0.3
    }
};
const cardHover = {
    y: -8,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    transition: {
        duration: 0.4,
        ease: easing.easeOutExpo
    }
};
const cardHoverSubtle = {
    y: -2,
    borderColor: "rgba(255, 255, 255, 0.1)",
    transition: {
        duration: 0.3,
        ease: easing.easeOutExpo
    }
};
const buttonHover = {
    scale: 1.02,
    transition: {
        duration: 0.2,
        ease: "easeOut"
    }
};
const buttonTap = {
    scale: 0.98
};
const iconRotate = {
    rotate: 45,
    transition: {
        duration: 0.3,
        ease: easing.easeOutExpo
    }
};
const arrowSlide = {
    x: 4,
    transition: {
        duration: 0.2,
        ease: easing.easeOutQuint
    }
};
const pageTransition = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easing.easeOutQuint,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: easing.easeOutQuint
        }
    }
};
const navbarVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing.easeOutExpo
        }
    }
};
const navDropdown = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: easing.easeOutQuint
        }
    }
};
const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        x: "100%"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: easing.easeOutExpo
        }
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: {
            duration: 0.3,
            ease: easing.easeOutQuint
        }
    }
};
const scrollIndicator = {
    hidden: {
        opacity: 0,
        y: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 1.5,
            ease: easing.easeOutQuint
        }
    },
    bounce: {
        y: [
            0,
            10,
            0
        ],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
const telemetryPanelReveal = {
    hidden: {
        opacity: 0,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easing.easeOutExpo,
            staggerChildren: 0.1
        }
    }
};
const telemetryCellReveal = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easing.easeOutQuint
        }
    }
};
const terminalReveal = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easing.easeOutExpo
        }
    }
};
const terminalLineReveal = {
    hidden: {
        opacity: 0,
        x: -10
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: easing.easeOutQuint
        }
    }
};
const terminalCursor = {
    blink: {
        opacity: [
            1,
            0
        ],
        transition: {
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
        }
    }
};
const springConfigs = {
    gentle: {
        type: "spring",
        stiffness: 100,
        damping: 15
    },
    wobbly: {
        type: "spring",
        stiffness: 180,
        damping: 12
    },
    stiff: {
        type: "spring",
        stiffness: 300,
        damping: 20
    },
    slow: {
        type: "spring",
        stiffness: 50,
        damping: 20
    }
};
const viewportOptions = {
    once: true,
    margin: "-100px"
};
const viewportOptionsEager = {
    once: true,
    margin: "-50px"
};
const createStaggerDelay = (index, baseDelay = 0.1)=>index * baseDelay;
const withDelay = (variants, delay)=>{
    const visible = variants.visible;
    const existingTransition = visible?.transition;
    return {
        ...variants,
        visible: {
            ...visible,
            transition: {
                ...existingTransition,
                delay
            }
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript) <export default as IconMenu2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript) <export default as IconChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const navLinks = [
    {
        label: "ABOUT",
        href: "/about",
        dropdown: [
            {
                label: "OUR STORY",
                href: "/about"
            },
            {
                label: "THE BARRACUDA",
                href: "/about#barracuda"
            },
            {
                label: "HISTORY",
                href: "/about#history"
            }
        ]
    },
    {
        label: "TEAM",
        href: "/team"
    },
    {
        label: "SPONSORS",
        href: "/sponsors"
    }
];
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setIsOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarVariants"],
                initial: "hidden",
                animate: "visible",
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    background: scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.8)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
                    transition: "all 0.3s ease"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "72px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/auv-logo.png",
                                        alt: "USC AUV Logo",
                                        width: 40,
                                        height: 40,
                                        style: {
                                            filter: "invert(1)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono, monospace)",
                                            fontWeight: 600,
                                            fontSize: "14px",
                                            letterSpacing: "0.1em"
                                        },
                                        children: "USC AUV"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "32px"
                                },
                                className: "hidden md:flex",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        onMouseEnter: ()=>link.dropdown && setActiveDropdown(link.label),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "nav-link",
                                                style: {
                                                    color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)"
                                                },
                                                children: [
                                                    link.label,
                                                    link.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__["IconChevronDown"], {
                                                        size: 14,
                                                        style: {
                                                            transition: "transform 0.2s ease",
                                                            transform: activeDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: link.dropdown && activeDropdown === link.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navDropdown"],
                                                    initial: "hidden",
                                                    animate: "visible",
                                                    exit: "hidden",
                                                    style: {
                                                        position: "absolute",
                                                        top: "100%",
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        marginTop: "8px",
                                                        background: "var(--bg-card)",
                                                        border: "1px solid var(--border)",
                                                        padding: "8px",
                                                        minWidth: "180px"
                                                    },
                                                    children: link.dropdown.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            style: {
                                                                display: "block",
                                                                padding: "10px 16px",
                                                                fontFamily: "var(--font-mono, monospace)",
                                                                fontSize: "11px",
                                                                letterSpacing: "0.1em",
                                                                color: "var(--text-secondary)",
                                                                textDecoration: "none",
                                                                transition: "all 0.2s ease"
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.color = "var(--text-primary)";
                                                                e.currentTarget.style.background = "var(--bg-secondary)";
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.color = "var(--text-secondary)";
                                                                e.currentTarget.style.background = "transparent";
                                                            },
                                                            children: item.label
                                                        }, item.href, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                className: "hidden md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/join",
                                        className: "btn-secondary",
                                        style: {
                                            height: "40px",
                                            fontSize: "11px",
                                            padding: "0 20px"
                                        },
                                        children: "JOIN US"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/usc-robosub",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn-primary",
                                        style: {
                                            height: "40px",
                                            fontSize: "11px",
                                            padding: "0 20px"
                                        },
                                        children: "GITHUB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "md:hidden",
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "#fff",
                                    cursor: "pointer",
                                    padding: "8px"
                                },
                                "aria-label": "Toggle menu",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 232,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__["IconMenu2"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 232,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileMenuVariants"],
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 99,
                        background: "var(--bg-primary)",
                        paddingTop: "100px"
                    },
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "container",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainerFast"],
                        initial: "hidden",
                        animate: "visible",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px"
                        },
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsOpen(false),
                                        style: {
                                            fontSize: "32px",
                                            fontWeight: 700,
                                            textDecoration: "none",
                                            color: pathname === link.href ? "#fff" : "var(--text-secondary)",
                                            textTransform: "uppercase",
                                            letterSpacing: "-0.02em"
                                        },
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 268,
                                        columnNumber: 19
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                style: {
                                    marginTop: "24px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/join",
                                    onClick: ()=>setIsOpen(false),
                                    className: "btn-primary",
                                    style: {
                                        width: "fit-content"
                                    },
                                    children: "JOIN THE TEAM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 255,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 241,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "UXia3IZynTXyzXgOvZvfoexl/T8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandGithub$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGithub.mjs [app-client] (ecmascript) <export default as IconBrandGithub>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandDiscord$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandDiscord$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandDiscord.mjs [app-client] (ecmascript) <export default as IconBrandDiscord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandLinkedin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandLinkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.mjs [app-client] (ecmascript) <export default as IconBrandLinkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowUpRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowUpRight.mjs [app-client] (ecmascript) <export default as IconArrowUpRight>");
"use client";
;
;
;
;
const navLinks = [
    {
        href: "/about",
        label: "ABOUT"
    },
    {
        href: "/team",
        label: "TEAM"
    },
    {
        href: "/sponsors",
        label: "SPONSORS"
    },
    {
        href: "/join",
        label: "JOIN US"
    }
];
const externalLinks = [
    {
        href: "https://github.com/usc-robosub",
        label: "GITHUB"
    },
    {
        href: "https://discord.gg/7jPvyPWc8T",
        label: "DISCORD"
    },
    {
        href: "https://www.linkedin.com/company/auv-usc/",
        label: "LINKEDIN"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            borderTop: "1px solid var(--border)",
            marginTop: "auto",
            background: "var(--bg-primary)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "80px 0 48px",
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                        gap: "48px"
                    },
                    className: "hero-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "20px",
                                        textDecoration: "none",
                                        color: "inherit"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/auv-logo.png",
                                            alt: "USC AUV Logo",
                                            width: 40,
                                            height: 40,
                                            style: {
                                                filter: "invert(1)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-mono, monospace)",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                letterSpacing: "0.1em"
                                            },
                                            children: "USC AUV"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--text-muted)",
                                        maxWidth: "280px",
                                        lineHeight: 1.7
                                    },
                                    children: "Engineering autonomous underwater vehicles at the University of Southern California since 2005."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mono",
                                    style: {
                                        color: "var(--text-muted)",
                                        marginBottom: "20px"
                                    },
                                    children: "NAVIGATION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px"
                                    },
                                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            style: {
                                                fontFamily: "var(--font-mono, monospace)",
                                                fontSize: "12px",
                                                letterSpacing: "0.08em",
                                                color: "var(--text-secondary)",
                                                textDecoration: "none",
                                                transition: "color 0.2s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = "var(--text-primary)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = "var(--text-secondary)";
                                            },
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mono",
                                    style: {
                                        color: "var(--text-muted)",
                                        marginBottom: "20px"
                                    },
                                    children: "RESOURCES"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px"
                                    },
                                    children: externalLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                fontFamily: "var(--font-mono, monospace)",
                                                fontSize: "12px",
                                                letterSpacing: "0.08em",
                                                color: "var(--text-secondary)",
                                                textDecoration: "none",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "4px",
                                                transition: "color 0.2s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = "var(--text-primary)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = "var(--text-secondary)";
                                            },
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowUpRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowUpRight$3e$__["IconArrowUpRight"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.href, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mono",
                                    style: {
                                        color: "var(--text-muted)",
                                        marginBottom: "20px"
                                    },
                                    children: "CONNECT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/usc-robosub",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                width: "44px",
                                                height: "44px",
                                                border: "1px solid var(--border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--text-muted)",
                                                transition: "all 0.2s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = "var(--text-primary)";
                                                e.currentTarget.style.borderColor = "var(--border-light)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = "var(--text-muted)";
                                                e.currentTarget.style.borderColor = "var(--border)";
                                            },
                                            "aria-label": "GitHub",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandGithub$3e$__["IconBrandGithub"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://discord.gg/7jPvyPWc8T",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                width: "44px",
                                                height: "44px",
                                                border: "1px solid var(--border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--text-muted)",
                                                transition: "all 0.2s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = "var(--text-primary)";
                                                e.currentTarget.style.borderColor = "var(--border-light)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = "var(--text-muted)";
                                                e.currentTarget.style.borderColor = "var(--border)";
                                            },
                                            "aria-label": "Discord",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandDiscord$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandDiscord$3e$__["IconBrandDiscord"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/company/auv-usc/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                width: "44px",
                                                height: "44px",
                                                border: "1px solid var(--border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--text-muted)",
                                                transition: "all 0.2s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = "var(--text-primary)";
                                                e.currentTarget.style.borderColor = "var(--border-light)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = "var(--text-muted)";
                                                e.currentTarget.style.borderColor = "var(--border)";
                                            },
                                            "aria-label": "Linkedin",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandLinkedin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandLinkedin$3e$__["IconBrandLinkedin"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "24px 0",
                        borderTop: "1px solid var(--border)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "16px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-mono, monospace)",
                                fontSize: "11px",
                                letterSpacing: "0.1em",
                                color: "var(--text-muted)"
                            },
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " USC AUTONOMOUS UNDERWATER VEHICLE TEAM"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mono",
                            style: {
                                color: "var(--text-muted)"
                            },
                            children: "VITERBI SCHOOL OF ENGINEERING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TelemetryDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelemetryDashboard",
    ()=>TelemetryDashboard,
    "TelemetryRow",
    ()=>TelemetryRow,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedNumber({ value, decimals = 0, duration = 2 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const spring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, {
        duration: duration * 1000,
        bounce: 0
    });
    const display = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(spring, {
        "AnimatedNumber.useTransform[display]": (current)=>decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
    }["AnimatedNumber.useTransform[display]"]);
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            if (isInView) {
                spring.set(value);
            }
        }
    }["AnimatedNumber.useEffect"], [
        isInView,
        spring,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            const unsubscribe = display.on("change", {
                "AnimatedNumber.useEffect.unsubscribe": (latest)=>{
                    setDisplayValue(latest);
                }
            }["AnimatedNumber.useEffect.unsubscribe"]);
            return ({
                "AnimatedNumber.useEffect": ()=>unsubscribe()
            })["AnimatedNumber.useEffect"];
        }
    }["AnimatedNumber.useEffect"], [
        display
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: displayValue
    }, void 0, false, {
        fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
_s(AnimatedNumber, "B+6IikPP/eR8iuhOLlsPLufnX2w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimatedNumber;
function TelemetryDashboard({ stats, className = "" }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: `telemetry-panel ${className}`,
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telemetryPanelReveal"],
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: stats.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "telemetry-row",
                children: row.map((stat, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "telemetry-cell",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telemetryCellReveal"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "telemetry-label",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "telemetry-value",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                        value: stat.value,
                                        decimals: stat.decimals || 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    stat.unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "telemetry-unit",
                                        children: stat.unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${rowIndex}-${cellIndex}`, true, {
                        fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s1(TelemetryDashboard, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = TelemetryDashboard;
function TelemetryRow({ stats, className = "", size = "md" }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const sizeClasses = {
        sm: "telemetry-value-sm",
        md: "",
        lg: "telemetry-value-lg"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: `telemetry-panel ${className}`,
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telemetryPanelReveal"],
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "telemetry-row",
            children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "telemetry-cell",
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telemetryCellReveal"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "telemetry-label",
                            children: stat.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `telemetry-value ${sizeClasses[size]}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                    value: stat.value,
                                    decimals: stat.decimals || 0
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                stat.unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "telemetry-unit",
                                    children: stat.unit
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/TelemetryDashboard.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s2(TelemetryRow, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = TelemetryRow;
const __TURBOPACK__default__export__ = TelemetryDashboard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedNumber");
__turbopack_context__.k.register(_c1, "TelemetryDashboard");
__turbopack_context__.k.register(_c2, "TelemetryRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TerminalCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeploymentTerminal",
    ()=>DeploymentTerminal,
    "TerminalCard",
    ()=>TerminalCard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function TerminalCard({ title = "terminal", lines, className = "", showDots = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: `terminal ${className}`,
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalReveal"],
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "terminal-header",
                children: [
                    showDots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-dots",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-dot red"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-dot yellow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-dot green"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/TerminalCard.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "terminal-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TerminalCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "terminal-body",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainerFast"],
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                children: lines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "terminal-line",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalLineReveal"],
                        children: [
                            line.prompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-prompt",
                                children: line.prompt
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            line.command && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-command",
                                children: line.command
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            line.output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-output",
                                children: line.output
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            line.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `terminal-status ${line.status}`,
                                children: line.status.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/ui/TerminalCard.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TerminalCard.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(TerminalCard, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = TerminalCard;
function DeploymentTerminal({ environment, prompt, command, deployments, className = "" }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: `terminal ${className}`,
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalReveal"],
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "terminal-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "terminal-dots",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "terminal-dot red"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/TerminalCard.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "terminal-dot yellow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/TerminalCard.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "terminal-dot green"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/TerminalCard.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/TerminalCard.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "terminal-body",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainerFast"],
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "terminal-line",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalLineReveal"],
                        style: {
                            marginBottom: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-prompt",
                                children: prompt
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-command",
                                children: command
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/TerminalCard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    deployments.map((deployment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "terminal-line",
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalLineReveal"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "terminal-prompt",
                                    children: "›"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "terminal-output",
                                    children: [
                                        deployment.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-block",
                                                width: "calc(100% - 200px)",
                                                borderBottom: "1px dotted var(--text-muted)",
                                                margin: "0 8px",
                                                verticalAlign: "middle"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `terminal-status ${deployment.status}`,
                                    children: deployment.status.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/TerminalCard.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/ui/TerminalCard.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/TerminalCard.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TerminalCard.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s1(DeploymentTerminal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = DeploymentTerminal;
const __TURBOPACK__default__export__ = TerminalCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "TerminalCard");
__turbopack_context__.k.register(_c1, "DeploymentTerminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CornerBrackets.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CornerBrackets",
    ()=>CornerBrackets,
    "TwoCornerBrackets",
    ()=>TwoCornerBrackets,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CornerBrackets({ children, className = "", size = 24, offset = 12, color = "var(--text-muted)", animate = true, hoverExpand = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const bracketStyle = {
        position: "absolute",
        width: size,
        height: size,
        borderColor: color,
        borderStyle: "solid",
        pointerEvents: "none",
        transition: hoverExpand ? "all 0.3s ease" : "none"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `relative ${className}`,
        style: {
            position: "relative"
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    ...bracketStyle,
                    top: offset,
                    left: offset,
                    borderWidth: "2px 0 0 2px"
                },
                initial: animate ? {
                    width: 0,
                    height: 0,
                    opacity: 0
                } : false,
                animate: isInView && animate ? {
                    width: size,
                    height: size,
                    opacity: 1
                } : undefined,
                transition: {
                    duration: 0.6,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutExpo,
                    delay: 0.2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CornerBrackets.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    ...bracketStyle,
                    top: offset,
                    right: offset,
                    borderWidth: "2px 2px 0 0"
                },
                initial: animate ? {
                    width: 0,
                    height: 0,
                    opacity: 0
                } : false,
                animate: isInView && animate ? {
                    width: size,
                    height: size,
                    opacity: 1
                } : undefined,
                transition: {
                    duration: 0.6,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutExpo,
                    delay: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CornerBrackets.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    ...bracketStyle,
                    bottom: offset,
                    left: offset,
                    borderWidth: "0 0 2px 2px"
                },
                initial: animate ? {
                    width: 0,
                    height: 0,
                    opacity: 0
                } : false,
                animate: isInView && animate ? {
                    width: size,
                    height: size,
                    opacity: 1
                } : undefined,
                transition: {
                    duration: 0.6,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutExpo,
                    delay: 0.4
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CornerBrackets.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    ...bracketStyle,
                    bottom: offset,
                    right: offset,
                    borderWidth: "0 2px 2px 0"
                },
                initial: animate ? {
                    width: 0,
                    height: 0,
                    opacity: 0
                } : false,
                animate: isInView && animate ? {
                    width: size,
                    height: size,
                    opacity: 1
                } : undefined,
                transition: {
                    duration: 0.6,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutExpo,
                    delay: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CornerBrackets.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CornerBrackets.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(CornerBrackets, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CornerBrackets;
function TwoCornerBrackets({ children, className = "", size = 32, offset = 16, color = "var(--text-muted)" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: offset,
                    left: offset,
                    width: size,
                    height: size,
                    borderTop: `2px solid ${color}`,
                    borderLeft: `2px solid ${color}`,
                    pointerEvents: "none",
                    transition: "all 0.3s ease"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CornerBrackets.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: offset,
                    right: offset,
                    width: size,
                    height: size,
                    borderBottom: `2px solid ${color}`,
                    borderRight: `2px solid ${color}`,
                    pointerEvents: "none",
                    transition: "all 0.3s ease"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CornerBrackets.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CornerBrackets.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c1 = TwoCornerBrackets;
const __TURBOPACK__default__export__ = CornerBrackets;
var _c, _c1;
__turbopack_context__.k.register(_c, "CornerBrackets");
__turbopack_context__.k.register(_c1, "TwoCornerBrackets");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnimatedText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedHeadline",
    ()=>AnimatedHeadline,
    "AnimatedLetters",
    ()=>AnimatedLetters,
    "AnimatedWords",
    ()=>AnimatedWords,
    "BlurInText",
    ()=>BlurInText,
    "FadeUpText",
    ()=>FadeUpText,
    "SectionLabel",
    ()=>SectionLabel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedHeadline({ text, className = "", as: Component = "h1", delay = 0, style }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    const lines = Array.isArray(text) ? text : text.split("\n");
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        className: className,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            style: {
                display: "block"
            },
            variants: containerVariants,
            initial: "hidden",
            animate: isInView ? "visible" : "hidden",
            children: lines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: "block",
                        overflow: "hidden",
                        lineHeight: 1,
                        paddingBottom: "0.1em"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        style: {
                            display: "block"
                        },
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineRevealItem"],
                        children: line
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedText.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/ui/AnimatedText.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/AnimatedText.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedText.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AnimatedHeadline, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AnimatedHeadline;
function AnimatedLetters({ text, className = "", as: Component = "span", delay = 0 }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const letters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedLetters.useMemo[letters]": ()=>text.split("")
    }["AnimatedLetters.useMemo[letters]"], [
        text
    ]);
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.02,
                delayChildren: delay
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            style: {
                display: "inline-block"
            },
            variants: containerVariants,
            initial: "hidden",
            animate: isInView ? "visible" : "hidden",
            children: letters.map((letter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    style: {
                        display: "inline-block"
                    },
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["letterItem"],
                    children: letter === " " ? "\u00A0" : letter
                }, index, false, {
                    fileName: "[project]/src/components/ui/AnimatedText.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/AnimatedText.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedText.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s1(AnimatedLetters, "hVVBeQAypRLd6/tFP9igkEcV0q0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = AnimatedLetters;
function AnimatedWords({ text, className = "", as: Component = "span", delay = 0 }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedWords.useMemo[words]": ()=>text.split(" ")
    }["AnimatedWords.useMemo[words]"], [
        text
    ]);
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            style: {
                display: "inline-block"
            },
            variants: containerVariants,
            initial: "hidden",
            animate: isInView ? "visible" : "hidden",
            children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    style: {
                        display: "inline-block",
                        marginRight: "0.3em"
                    },
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordReveal"],
                    children: word
                }, index, false, {
                    fileName: "[project]/src/components/ui/AnimatedText.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/AnimatedText.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedText.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s2(AnimatedWords, "j3fa/YwjV+yjINV4FnBwKenodDI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = AnimatedWords;
function FadeUpText({ children, className = "", delay = 0, duration = 0.8 }) {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        initial: {
            opacity: 0,
            y: 40
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 40
        },
        transition: {
            duration,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutExpo,
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedText.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s3(FadeUpText, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c3 = FadeUpText;
function BlurInText({ children, className = "", delay = 0 }) {
    _s4();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        initial: {
            opacity: 0,
            filter: "blur(10px)"
        },
        animate: isInView ? {
            opacity: 1,
            filter: "blur(0px)"
        } : {
            opacity: 0,
            filter: "blur(10px)"
        },
        transition: {
            duration: 0.8,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutExpo,
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedText.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s4(BlurInText, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c4 = BlurInText;
function SectionLabel({ text, className = "", delay = 0 }) {
    _s5();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        ref: ref,
        className: `section-label ${className}`,
        initial: {
            opacity: 0,
            y: 10
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 10
        },
        transition: {
            duration: 0.5,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easing"].easeOutQuint,
            delay
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedText.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_s5(SectionLabel, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c5 = SectionLabel;
const __TURBOPACK__default__export__ = AnimatedHeadline;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AnimatedHeadline");
__turbopack_context__.k.register(_c1, "AnimatedLetters");
__turbopack_context__.k.register(_c2, "AnimatedWords");
__turbopack_context__.k.register(_c3, "FadeUpText");
__turbopack_context__.k.register(_c4, "BlurInText");
__turbopack_context__.k.register(_c5, "SectionLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/FloatingBubbles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingBubbles",
    ()=>FloatingBubbles,
    "GlowingOrbs",
    ()=>GlowingOrbs,
    "SonarPulse",
    ()=>SonarPulse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function FloatingBubbles({ count = 25, minSize = 4, maxSize = 20, color = "rgba(0, 255, 136, 0.15)" }) {
    _s();
    const [bubbles, setBubbles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingBubbles.useEffect": ()=>{
            const newBubbles = Array.from({
                length: count
            }, {
                "FloatingBubbles.useEffect.newBubbles": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        size: minSize + Math.random() * (maxSize - minSize),
                        duration: 15 + Math.random() * 25,
                        delay: Math.random() * 20,
                        opacity: 0.1 + Math.random() * 0.4
                    })
            }["FloatingBubbles.useEffect.newBubbles"]);
            setBubbles(newBubbles);
        }
    }["FloatingBubbles.useEffect"], [
        count,
        minSize,
        maxSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0
        },
        children: bubbles.map((bubble)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    x: `${bubble.x}vw`,
                    y: "110vh",
                    scale: 0
                },
                animate: {
                    y: "-10vh",
                    scale: [
                        0,
                        1,
                        1,
                        0.5,
                        0
                    ],
                    x: [
                        `${bubble.x}vw`,
                        `${bubble.x + (Math.random() - 0.5) * 10}vw`,
                        `${bubble.x + (Math.random() - 0.5) * 15}vw`,
                        `${bubble.x + (Math.random() - 0.5) * 10}vw`
                    ]
                },
                transition: {
                    duration: bubble.duration,
                    delay: bubble.delay,
                    repeat: Infinity,
                    ease: "linear"
                },
                style: {
                    position: "absolute",
                    width: bubble.size,
                    height: bubble.size,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 30% 30%, ${color.replace(/[\d.]+\)$/, `${bubble.opacity * 2})`)}, ${color.replace(/[\d.]+\)$/, `${bubble.opacity})`)})`,
                    boxShadow: `0 0 ${bubble.size / 2}px ${color}`
                }
            }, bubble.id, false, {
                fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(FloatingBubbles, "MXZCwUY5pU8EK5xA859AgO8jSNQ=");
_c = FloatingBubbles;
function GlowingOrbs({ count = 8 }) {
    _s1();
    const [orbs, setOrbs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlowingOrbs.useEffect": ()=>{
            const colors = [
                "rgba(0, 255, 136, 0.08)",
                "rgba(0, 200, 255, 0.06)",
                "rgba(100, 255, 200, 0.07)",
                "rgba(0, 150, 255, 0.05)"
            ];
            const newOrbs = Array.from({
                length: count
            }, {
                "GlowingOrbs.useEffect.newOrbs": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: 100 + Math.random() * 300,
                        duration: 20 + Math.random() * 30,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    })
            }["GlowingOrbs.useEffect.newOrbs"]);
            setOrbs(newOrbs);
        }
    }["GlowingOrbs.useEffect"], [
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0
        },
        children: orbs.map((orb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        `${orb.x}%`,
                        `${orb.x + 20}%`,
                        `${orb.x - 10}%`,
                        `${orb.x + 15}%`,
                        `${orb.x}%`
                    ],
                    y: [
                        `${orb.y}%`,
                        `${orb.y - 15}%`,
                        `${orb.y + 10}%`,
                        `${orb.y - 5}%`,
                        `${orb.y}%`
                    ],
                    scale: [
                        1,
                        1.2,
                        0.9,
                        1.1,
                        1
                    ]
                },
                transition: {
                    duration: orb.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: orb.size,
                    height: orb.size,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                    filter: "blur(40px)"
                }
            }, orb.id, false, {
                fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s1(GlowingOrbs, "nzgIthZoA7+3Q50541+n6GB6v8s=");
_c1 = GlowingOrbs;
function SonarPulse({ x = "50%", y = "50%" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
        },
        children: [
            [
                0,
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.5,
                        opacity: 0.6
                    },
                    animate: {
                        scale: 3,
                        opacity: 0
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: "easeOut"
                    },
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        border: "1px solid rgba(0, 255, 136, 0.3)"
                    }
                }, i, false, {
                    fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity
                },
                style: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgba(0, 255, 136, 0.8)",
                    boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/FloatingBubbles.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_c2 = SonarPulse;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FloatingBubbles");
__turbopack_context__.k.register(_c1, "GlowingOrbs");
__turbopack_context__.k.register(_c2, "SonarPulse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/MagneticButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagneticButton",
    ()=>MagneticButton,
    "RippleButton",
    ()=>RippleButton,
    "WaterRippleCard",
    ()=>WaterRippleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
function MagneticButton({ children, className = "", style = {}, strength = 0.3, as: Component = "button", onClick, href, target, rel }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        damping: 20,
        stiffness: 300
    };
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, springConfig);
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, springConfig);
    // Glow effect intensity based on distance
    const glowOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        springX,
        springY
    ], {
        "MagneticButton.useTransform[glowOpacity]": ([latestX, latestY])=>{
            const distance = Math.sqrt(latestX * latestX + latestY * latestY);
            return Math.min(0.3, distance / 100);
        }
    }["MagneticButton.useTransform[glowOpacity]"]);
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        x.set(deltaX);
        y.set(deltaY);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };
    const MotionComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionComponent, {
        ref: ref,
        style: {
            x: springX,
            y: springY,
            position: "relative",
            display: "inline-block",
            ...style
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    position: "absolute",
                    inset: -10,
                    background: "radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, transparent 70%)",
                    borderRadius: "inherit",
                    opacity: glowOpacity,
                    pointerEvents: "none",
                    filter: "blur(15px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            Component === "a" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: target,
                rel: rel,
                className: className,
                onClick: onClick,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this) : Component === "button" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: className,
                onClick: onClick,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                onClick: onClick,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/MagneticButton.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(MagneticButton, "9HuvA7oHBDgJSYM9tbN/Qj+0qPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = MagneticButton;
function RippleButton({ children, className = "", onClick }) {
    _s1();
    const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleClick = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = {
            x,
            y,
            id: nextId.current++
        };
        setRipples((prev)=>[
                ...prev,
                newRipple
            ]);
        setTimeout(()=>{
            setRipples((prev)=>prev.filter((r)=>r.id !== newRipple.id));
        }, 1000);
        onClick?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: className,
        onClick: handleClick,
        style: {
            position: "relative",
            overflow: "hidden"
        },
        children: [
            ripples.map((ripple)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        scale: 0,
                        opacity: 0.5
                    },
                    animate: {
                        scale: 4,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    },
                    style: {
                        position: "absolute",
                        left: ripple.x,
                        top: ripple.y,
                        width: 50,
                        height: 50,
                        marginLeft: -25,
                        marginTop: -25,
                        borderRadius: "50%",
                        background: "rgba(0, 255, 136, 0.3)",
                        pointerEvents: "none"
                    }
                }, ripple.id, false, {
                    fileName: "[project]/src/components/ui/MagneticButton.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/MagneticButton.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s1(RippleButton, "8AaQUviTE41WUQcK0yCyCNNZiRc=");
_c1 = RippleButton;
function WaterRippleCard({ children, className = "", style = {} }) {
    _s2();
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        style: {
            position: "relative",
            overflow: "hidden",
            ...style
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        whileHover: {
            y: -4,
            transition: {
                duration: 0.3
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8
                },
                transition: {
                    duration: 0.3
                },
                style: {
                    position: "absolute",
                    left: mousePos.x,
                    top: mousePos.y,
                    width: 300,
                    height: 300,
                    marginLeft: -150,
                    marginTop: -150,
                    background: "radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, transparent 60%)",
                    pointerEvents: "none",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: isHovered ? 1 : 0
                },
                style: {
                    position: "absolute",
                    inset: 0,
                    border: "1px solid transparent",
                    background: `linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
                       linear-gradient(135deg, rgba(0, 255, 136, 0.3), transparent, rgba(0, 200, 255, 0.2)) border-box`,
                    pointerEvents: "none",
                    zIndex: 2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 3
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MagneticButton.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/MagneticButton.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s2(WaterRippleCard, "f2jKR5UUrW6RZqiqv5hxf2llGlg=");
_c2 = WaterRippleCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MagneticButton");
__turbopack_context__.k.register(_c1, "RippleButton");
__turbopack_context__.k.register(_c2, "WaterRippleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnimatedCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCounter",
    ()=>AnimatedCounter,
    "AnimatedStat",
    ()=>AnimatedStat,
    "RollingNumber",
    ()=>RollingNumber,
    "TypewriterCounter",
    ()=>TypewriterCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
function AnimatedCounter({ value, duration = 2, className = "", style = {}, prefix = "", suffix = "", decimals = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    // Parse the numeric value
    const numericValue = typeof value === "string" ? parseFloat(value.replace(/[^\d.]/g, "")) : value;
    // Extract any non-numeric suffix (like "+" or "K")
    const extractedSuffix = typeof value === "string" ? value.replace(/[\d.]/g, "").trim() : "";
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, {
        duration: duration * 1000,
        bounce: 0
    });
    const displayValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springValue, {
        "AnimatedCounter.useTransform[displayValue]": (latest)=>latest.toFixed(decimals)
    }["AnimatedCounter.useTransform[displayValue]"]);
    const [displayNumber, setDisplayNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            const unsubscribe = displayValue.on("change", {
                "AnimatedCounter.useEffect.unsubscribe": (v)=>{
                    setDisplayNumber(v);
                }
            }["AnimatedCounter.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["AnimatedCounter.useEffect"], [
        displayValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            if (isInView) {
                springValue.set(numericValue);
            }
        }
    }["AnimatedCounter.useEffect"], [
        isInView,
        numericValue,
        springValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        style: style,
        children: [
            prefix,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                children: displayNumber
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            extractedSuffix || suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(AnimatedCounter, "qZ+DTtMu8Lf3upaWebpDaMrPrGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimatedCounter;
function AnimatedStat({ value, label, icon, delay = 0 }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 30
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 30
        },
        transition: {
            duration: 0.6,
            delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        style: {
            textAlign: "center",
            padding: "24px"
        },
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0
                },
                animate: isInView ? {
                    scale: 1
                } : {
                    scale: 0
                },
                transition: {
                    duration: 0.5,
                    delay: delay + 0.2,
                    type: "spring"
                },
                style: {
                    width: 48,
                    height: 48,
                    margin: "0 auto 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border)",
                    background: "var(--bg-secondary)"
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "8px",
                    background: "linear-gradient(180deg, #fff 0%, #666 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                    value: value,
                    duration: 2.5
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mono",
                style: {
                    fontSize: "10px",
                    color: "var(--text-muted)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s1(AnimatedStat, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = AnimatedStat;
function RollingNumber({ value, className = "" }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const digits = value.toString().split("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        style: {
            display: "inline-flex",
            overflow: "hidden"
        },
        children: digits.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-block",
                    height: "1em",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        y: "100%"
                    },
                    animate: isInView ? {
                        y: 0
                    } : {
                        y: "100%"
                    },
                    transition: {
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    style: {
                        display: "block"
                    },
                    children: digit
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, index, false, {
                fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s2(RollingNumber, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = RollingNumber;
function TypewriterCounter({ value, duration = 2, className = "" }) {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypewriterCounter.useEffect": ()=>{
            if (!isInView) return;
            const chars = value.split("");
            let current = 0;
            const interval = duration * 1000 / chars.length;
            const timer = setInterval({
                "TypewriterCounter.useEffect.timer": ()=>{
                    if (current <= chars.length) {
                        setDisplayValue(value.slice(0, current));
                        current++;
                    } else {
                        clearInterval(timer);
                    }
                }
            }["TypewriterCounter.useEffect.timer"], interval);
            return ({
                "TypewriterCounter.useEffect": ()=>clearInterval(timer)
            })["TypewriterCounter.useEffect"];
        }
    }["TypewriterCounter.useEffect"], [
        isInView,
        value,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: [
            displayValue,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    opacity: [
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 0.5,
                    repeat: Infinity
                },
                style: {
                    marginLeft: 2
                },
                children: "_"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s3(TypewriterCounter, "LdR6qD/eQVqNtsaLDUhADAu+m5A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c3 = TypewriterCounter;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "AnimatedStat");
__turbopack_context__.k.register(_c2, "RollingNumber");
__turbopack_context__.k.register(_c3, "TypewriterCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnimatedAUV.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedAUV",
    ()=>AnimatedAUV,
    "AnimatedPropeller",
    ()=>AnimatedPropeller,
    "SonarSweep",
    ()=>SonarSweep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function AnimatedAUV({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: "relative",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 300",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    width: "100%",
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "smallGrid",
                            width: "10",
                            height: "10",
                            patternUnits: "userSpaceOnUse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 10 0 L 0 0 0 10",
                                fill: "none",
                                stroke: "rgba(0,255,136,0.05)",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#smallGrid)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M 80 150 Q 80 120 120 110 L 280 110 Q 320 120 320 150 Q 320 180 280 190 L 120 190 Q 80 180 80 150 Z",
                        stroke: "rgba(0,255,136,0.6)",
                        strokeWidth: "2",
                        fill: "rgba(0,255,136,0.03)",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M 80 150 Q 50 150 50 150 Q 60 130 80 130",
                        stroke: "rgba(0,255,136,0.5)",
                        strokeWidth: "1.5",
                        fill: "none",
                        initial: {
                            pathLength: 0
                        },
                        animate: {
                            pathLength: 1
                        },
                        transition: {
                            duration: 1.5,
                            delay: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M 320 150 L 360 150 M 340 130 L 360 150 L 340 170",
                        stroke: "rgba(0,255,136,0.5)",
                        strokeWidth: "1.5",
                        fill: "none",
                        initial: {
                            pathLength: 0
                        },
                        animate: {
                            pathLength: 1
                        },
                        transition: {
                            duration: 1.5,
                            delay: 0.7
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "140",
                                y: "95",
                                width: "30",
                                height: "15",
                                fill: "rgba(0,255,136,0.1)",
                                stroke: "rgba(0,255,136,0.4)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "230",
                                y: "95",
                                width: "30",
                                height: "15",
                                fill: "rgba(0,255,136,0.1)",
                                stroke: "rgba(0,255,136,0.4)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "140",
                                y: "190",
                                width: "30",
                                height: "15",
                                fill: "rgba(0,255,136,0.1)",
                                stroke: "rgba(0,255,136,0.4)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "230",
                                y: "190",
                                width: "30",
                                height: "15",
                                fill: "rgba(0,255,136,0.1)",
                                stroke: "rgba(0,255,136,0.4)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1.4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "100",
                            cy: "150",
                            rx: "8",
                            ry: "12",
                            fill: "rgba(0,200,255,0.2)",
                            stroke: "rgba(0,200,255,0.5)",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "100",
                        cy: "150",
                        r: "15",
                        stroke: "rgba(0,200,255,0.6)",
                        strokeWidth: "1.5",
                        fill: "rgba(0,200,255,0.05)",
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            duration: 0.6,
                            delay: 1.6,
                            type: "spring"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "100",
                        cy: "150",
                        r: "6",
                        fill: "rgba(0,200,255,0.3)",
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ]
                        },
                        transition: {
                            duration: 2,
                            delay: 2,
                            repeat: Infinity
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: 1.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "150",
                                y: "135",
                                width: "60",
                                height: "30",
                                fill: "rgba(255,170,0,0.1)",
                                stroke: "rgba(255,170,0,0.4)",
                                strokeWidth: "1",
                                rx: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "180",
                                y: "155",
                                fill: "rgba(255,170,0,0.6)",
                                fontSize: "8",
                                textAnchor: "middle",
                                fontFamily: "monospace",
                                children: "BATT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "220",
                                y: "130",
                                width: "50",
                                height: "40",
                                fill: "rgba(0,255,136,0.05)",
                                stroke: "rgba(0,255,136,0.3)",
                                strokeWidth: "1",
                                rx: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "245",
                                y: "155",
                                fill: "rgba(0,255,136,0.6)",
                                fontSize: "8",
                                textAnchor: "middle",
                                fontFamily: "monospace",
                                children: "CPU"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "245",
                                cy: "150",
                                r: "3",
                                fill: "rgba(0,255,136,0.8)",
                                initial: {
                                    x: 0,
                                    opacity: 0
                                },
                                animate: {
                                    x: [
                                        0,
                                        50,
                                        100
                                    ],
                                    opacity: [
                                        0,
                                        1,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    delay: i * 0.7,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }, i, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "200",
                                y1: "190",
                                x2: "200",
                                y2: "220",
                                stroke: "rgba(0,200,255,0.4)",
                                strokeWidth: "1",
                                strokeDasharray: "4 2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "200",
                                y: "235",
                                fill: "rgba(0,200,255,0.5)",
                                fontSize: "8",
                                textAnchor: "middle",
                                fontFamily: "monospace",
                                children: "DEPTH: 2.4m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "280",
                                cy: "130",
                                r: "4",
                                fill: "#00ff88",
                                animate: {
                                    opacity: [
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1,
                                    repeat: Infinity
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "290",
                                y: "133",
                                fill: "rgba(255,255,255,0.4)",
                                fontSize: "7",
                                fontFamily: "monospace",
                                children: "SYS OK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0,
                            scale: 1.2
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 2.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 60 100 L 60 80 L 80 80",
                                stroke: "rgba(0,255,136,0.3)",
                                strokeWidth: "1",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 340 100 L 340 80 L 320 80",
                                stroke: "rgba(0,255,136,0.3)",
                                strokeWidth: "1",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 60 200 L 60 220 L 80 220",
                                stroke: "rgba(0,255,136,0.3)",
                                strokeWidth: "1",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 340 200 L 340 220 L 320 220",
                                stroke: "rgba(0,255,136,0.3)",
                                strokeWidth: "1",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: "70",
                        y: "70",
                        fill: "rgba(0,255,136,0.4)",
                        fontSize: "8",
                        fontFamily: "monospace",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 2.5
                        },
                        children: "X: 34.0219° N"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: "70",
                        y: "82",
                        fill: "rgba(0,255,136,0.4)",
                        fontSize: "8",
                        fontFamily: "monospace",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 2.6
                        },
                        children: "Y: 118.2857° W"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: "200",
                        y: "260",
                        fill: "rgba(255,255,255,0.6)",
                        fontSize: "10",
                        textAnchor: "middle",
                        fontFamily: "monospace",
                        letterSpacing: "0.1em",
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 2.8
                        },
                        children: "THE BARRACUDA // 2025"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    overflow: "hidden"
                },
                children: [
                    ...Array(8)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            position: "absolute",
                            left: `${20 + Math.random() * 60}%`,
                            bottom: "-20px",
                            width: 4 + Math.random() * 8,
                            height: 4 + Math.random() * 8,
                            borderRadius: "50%",
                            background: "rgba(0, 200, 255, 0.2)",
                            boxShadow: "0 0 10px rgba(0, 200, 255, 0.3)"
                        },
                        animate: {
                            y: [
                                0,
                                -200 - Math.random() * 100
                            ],
                            x: [
                                0,
                                (Math.random() - 0.5) * 50
                            ],
                            opacity: [
                                0,
                                0.6,
                                0
                            ]
                        },
                        transition: {
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AnimatedAUV;
function AnimatedPropeller({ size = 40 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            rotate: 360
        },
        transition: {
            duration: 0.5,
            repeat: Infinity,
            ease: "linear"
        },
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 40 40",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "20",
                    cy: "20",
                    r: "4",
                    fill: "rgba(0,255,136,0.6)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                [
                    0,
                    120,
                    240
                ].map((angle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: `M 20 20 L ${20 + 15 * Math.cos(angle * Math.PI / 180)} ${20 + 15 * Math.sin(angle * Math.PI / 180)}`,
                        stroke: "rgba(0,255,136,0.5)",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        style: {
                            transformOrigin: "center"
                        }
                    }, angle, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
            lineNumber: 267,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_c1 = AnimatedPropeller;
function SonarSweep({ size = 200 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 200 200",
            style: {
                width: "100%",
                height: "100%"
            },
            children: [
                [
                    40,
                    60,
                    80,
                    95
                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "100",
                        r: r,
                        fill: "none",
                        stroke: "rgba(0,255,136,0.15)",
                        strokeWidth: "1"
                    }, r, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "100",
                    y1: "5",
                    x2: "100",
                    y2: "195",
                    stroke: "rgba(0,255,136,0.1)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "100",
                    x2: "195",
                    y2: "100",
                    stroke: "rgba(0,255,136,0.1)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: "100",
                    y1: "100",
                    x2: "100",
                    y2: "5",
                    stroke: "rgba(0,255,136,0.8)",
                    strokeWidth: "2",
                    style: {
                        transformOrigin: "100px 100px"
                    },
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: "M 100 100 L 100 5 A 95 95 0 0 1 195 100 Z",
                    fill: "url(#sweepGradient)",
                    style: {
                        transformOrigin: "100px 100px"
                    },
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "sweepGradient",
                        gradientTransform: "rotate(45)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(0,255,136,0.2)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(0,255,136,0)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "100",
                    cy: "100",
                    r: "5",
                    fill: "rgba(0,255,136,0.8)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this),
                [
                    {
                        x: 130,
                        y: 70,
                        delay: 0
                    },
                    {
                        x: 85,
                        y: 140,
                        delay: 1
                    },
                    {
                        x: 150,
                        y: 120,
                        delay: 2
                    }
                ].map((blip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: blip.x,
                        cy: blip.y,
                        r: "3",
                        fill: "rgba(0,255,136,0.8)",
                        animate: {
                            opacity: [
                                0,
                                1,
                                0
                            ],
                            scale: [
                                0.5,
                                1,
                                0.5
                            ]
                        },
                        transition: {
                            duration: 4,
                            delay: blip.delay,
                            repeat: Infinity
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
            lineNumber: 290,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedAUV.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_c2 = SonarSweep;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedAUV");
__turbopack_context__.k.register(_c1, "AnimatedPropeller");
__turbopack_context__.k.register(_c2, "SonarSweep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CursorEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorGlow",
    ()=>CursorGlow,
    "CursorTrail",
    ()=>CursorTrail,
    "ReactiveGradient",
    ()=>ReactiveGradient,
    "SectionSpotlight",
    ()=>SectionSpotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
function CursorGlow() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const springConfig = {
        damping: 25,
        stiffness: 300
    };
    const cursorXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfig);
    const cursorYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorGlow.useEffect": ()=>{
            const handleMouseMove = {
                "CursorGlow.useEffect.handleMouseMove": (e)=>{
                    cursorX.set(e.clientX);
                    cursorY.set(e.clientY);
                    setIsVisible(true);
                }
            }["CursorGlow.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CursorGlow.useEffect.handleMouseLeave": ()=>{
                    setIsVisible(false);
                }
            }["CursorGlow.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "CursorGlow.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["CursorGlow.useEffect"];
        }
    }["CursorGlow.useEffect"], [
        cursorX,
        cursorY
    ]);
    // Don't render on mobile/touch devices
    if (("TURBOPACK compile-time value", "object") !== "undefined" && "ontouchstart" in window) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            position: "fixed",
            left: cursorXSpring,
            top: cursorYSpring,
            width: 400,
            height: 400,
            marginLeft: -200,
            marginTop: -200,
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 30%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CursorEffect.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(CursorGlow, "2iDHPlGuHv7a4ChkRgZfCpjBtuI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CursorGlow;
function CursorTrail() {
    _s1();
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorTrail.useEffect": ()=>{
            const handleMouseMove = {
                "CursorTrail.useEffect.handleMouseMove": (e)=>{
                    // Only create particle if moved enough distance
                    const dx = e.clientX - lastPosition.current.x;
                    const dy = e.clientY - lastPosition.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance > 30) {
                        lastPosition.current = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        const newParticle = {
                            id: nextId.current++,
                            x: e.clientX,
                            y: e.clientY
                        };
                        setParticles({
                            "CursorTrail.useEffect.handleMouseMove": (prev)=>[
                                    ...prev.slice(-15),
                                    newParticle
                                ]
                        }["CursorTrail.useEffect.handleMouseMove"]);
                    }
                }
            }["CursorTrail.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "CursorTrail.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["CursorTrail.useEffect"];
        }
    }["CursorTrail.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorTrail.useEffect": ()=>{
            // Clean up old particles
            const cleanup = setInterval({
                "CursorTrail.useEffect.cleanup": ()=>{
                    setParticles({
                        "CursorTrail.useEffect.cleanup": (prev)=>prev.slice(-10)
                    }["CursorTrail.useEffect.cleanup"]);
                }
            }["CursorTrail.useEffect.cleanup"], 100);
            return ({
                "CursorTrail.useEffect": ()=>clearInterval(cleanup)
            })["CursorTrail.useEffect"];
        }
    }["CursorTrail.useEffect"], []);
    if (("TURBOPACK compile-time value", "object") !== "undefined" && "ontouchstart" in window) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 9998
        },
        children: particles.map((particle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 1,
                    opacity: 0.6
                },
                animate: {
                    scale: 0,
                    opacity: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                style: {
                    position: "absolute",
                    left: particle.x,
                    top: particle.y,
                    width: 8,
                    height: 8,
                    marginLeft: -4,
                    marginTop: -4,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.15)"
                }
            }, particle.id, false, {
                fileName: "[project]/src/components/ui/CursorEffect.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CursorEffect.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s1(CursorTrail, "012gcn74YxwmtRUfIYmAhIV2OaY=");
_c1 = CursorTrail;
function SectionSpotlight({ children, className = "" }) {
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseMove = (e)=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className,
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8
                },
                transition: {
                    duration: 0.3
                },
                style: {
                    position: "absolute",
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: 600,
                    height: 600,
                    marginLeft: -300,
                    marginTop: -300,
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
                    pointerEvents: "none",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorEffect.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 1
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorEffect.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CursorEffect.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s2(SectionSpotlight, "x/JEBaoGmu+6tiesTUq4o4dAZvE=");
_c2 = SectionSpotlight;
function ReactiveGradient() {
    _s3();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactiveGradient.useEffect": ()=>{
            const handleMouseMove = {
                "ReactiveGradient.useEffect.handleMouseMove": (e)=>{
                    setMousePosition({
                        x: e.clientX / window.innerWidth * 100,
                        y: e.clientY / window.innerHeight * 100
                    });
                }
            }["ReactiveGradient.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "ReactiveGradient.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["ReactiveGradient.useEffect"];
        }
    }["ReactiveGradient.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)`,
            pointerEvents: "none",
            zIndex: 0,
            transition: "background 0.3s ease"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CursorEffect.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_s3(ReactiveGradient, "/OGGqMQ9By0RLhAEXZmckcbqw8E=");
_c3 = ReactiveGradient;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CursorGlow");
__turbopack_context__.k.register(_c1, "CursorTrail");
__turbopack_context__.k.register(_c2, "SectionSpotlight");
__turbopack_context__.k.register(_c3, "ReactiveGradient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TypewriterEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlitchText",
    ()=>GlitchText,
    "ScrambleText",
    ()=>ScrambleText,
    "TerminalStatus",
    ()=>TerminalStatus,
    "TypewriterEffect",
    ()=>TypewriterEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
function TypewriterEffect({ words, className = "", cursorColor = "var(--text-muted)", typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypewriterEffect.useEffect": ()=>{
            if (!isInView) return;
            const currentWord = words[wordIndex];
            const timeout = setTimeout({
                "TypewriterEffect.useEffect.timeout": ()=>{
                    if (!isDeleting) {
                        // Typing
                        if (displayText.length < currentWord.length) {
                            setDisplayText(currentWord.slice(0, displayText.length + 1));
                        } else {
                            // Finished typing, pause before deleting
                            setTimeout({
                                "TypewriterEffect.useEffect.timeout": ()=>setIsDeleting(true)
                            }["TypewriterEffect.useEffect.timeout"], pauseTime);
                        }
                    } else {
                        // Deleting
                        if (displayText.length > 0) {
                            setDisplayText(displayText.slice(0, -1));
                        } else {
                            // Move to next word
                            setIsDeleting(false);
                            setWordIndex({
                                "TypewriterEffect.useEffect.timeout": (prev)=>(prev + 1) % words.length
                            }["TypewriterEffect.useEffect.timeout"]);
                        }
                    }
                }
            }["TypewriterEffect.useEffect.timeout"], isDeleting ? deletingSpeed : typingSpeed);
            return ({
                "TypewriterEffect.useEffect": ()=>clearTimeout(timeout)
            })["TypewriterEffect.useEffect"];
        }
    }["TypewriterEffect.useEffect"], [
        displayText,
        isDeleting,
        wordIndex,
        words,
        isInView,
        typingSpeed,
        deletingSpeed,
        pauseTime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: [
            displayText,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    opacity: [
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 0.5,
                    repeat: Infinity
                },
                style: {
                    color: cursorColor
                },
                children: "|"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(TypewriterEffect, "oDgzUwPOOpMhMHLuYi3dmBEkDbI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = TypewriterEffect;
function TerminalStatus({ lines, className = "", typeDelay = 100 }) {
    _s1();
    const [visibleLines, setVisibleLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typedChars, setTypedChars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalStatus.useEffect": ()=>{
            if (!isInView || visibleLines >= lines.length) return;
            const currentLine = lines[visibleLines];
            const totalChars = (currentLine.prefix || "").length + currentLine.text.length;
            if (typedChars < totalChars) {
                const timeout = setTimeout({
                    "TerminalStatus.useEffect.timeout": ()=>{
                        setTypedChars({
                            "TerminalStatus.useEffect.timeout": (prev)=>prev + 1
                        }["TerminalStatus.useEffect.timeout"]);
                    }
                }["TerminalStatus.useEffect.timeout"], typeDelay);
                return ({
                    "TerminalStatus.useEffect": ()=>clearTimeout(timeout)
                })["TerminalStatus.useEffect"];
            } else {
                // Move to next line after a short pause
                const timeout = setTimeout({
                    "TerminalStatus.useEffect.timeout": ()=>{
                        setVisibleLines({
                            "TerminalStatus.useEffect.timeout": (prev)=>prev + 1
                        }["TerminalStatus.useEffect.timeout"]);
                        setTypedChars(0);
                    }
                }["TerminalStatus.useEffect.timeout"], 300);
                return ({
                    "TerminalStatus.useEffect": ()=>clearTimeout(timeout)
                })["TerminalStatus.useEffect"];
            }
        }
    }["TerminalStatus.useEffect"], [
        isInView,
        visibleLines,
        typedChars,
        lines,
        typeDelay
    ]);
    const getStatusColor = (status)=>{
        switch(status){
            case "success":
                return "var(--text-primary)";
            case "warning":
                return "var(--terminal-amber)";
            case "error":
                return "var(--terminal-red)";
            default:
                return "var(--text-secondary)";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            lineHeight: 1.8
        },
        children: lines.slice(0, visibleLines + 1).map((line, index)=>{
            const isCurrentLine = index === visibleLines;
            const fullText = (line.prefix || "") + line.text;
            const displayText = isCurrentLine ? fullText.slice(0, typedChars) : fullText;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "8px"
                },
                children: [
                    line.prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-muted)"
                        },
                        children: displayText.slice(0, line.prefix.length)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                        lineNumber: 143,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: getStatusColor(line.status)
                        },
                        children: displayText.slice(line.prefix?.length || 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this),
                    isCurrentLine && typedChars < fullText.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            opacity: [
                                1,
                                0
                            ]
                        },
                        transition: {
                            duration: 0.5,
                            repeat: Infinity
                        },
                        style: {
                            color: "var(--text-muted)"
                        },
                        children: "█"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                        lineNumber: 151,
                        columnNumber: 15
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                lineNumber: 141,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s1(TerminalStatus, "HBf/T/Om/KtqVVnOyx5E8L5wlHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = TerminalStatus;
function GlitchText({ text, className = "", intensity = "low" }) {
    _s2();
    const [glitchText, setGlitchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: false
    });
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlitchText.useEffect": ()=>{
            if (!isInView) return;
            const intervals = {
                low: 3000,
                medium: 1500,
                high: 500
            };
            const interval = setInterval({
                "GlitchText.useEffect.interval": ()=>{
                    // Randomly glitch some characters
                    const glitched = text.split("").map({
                        "GlitchText.useEffect.interval.glitched": (char, i)=>{
                            if (Math.random() < 0.1) {
                                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                            }
                            return char;
                        }
                    }["GlitchText.useEffect.interval.glitched"]).join("");
                    setGlitchText(glitched);
                    // Reset after a short time
                    setTimeout({
                        "GlitchText.useEffect.interval": ()=>setGlitchText(text)
                    }["GlitchText.useEffect.interval"], 100);
                }
            }["GlitchText.useEffect.interval"], intervals[intensity]);
            return ({
                "GlitchText.useEffect": ()=>clearInterval(interval)
            })["GlitchText.useEffect"];
        }
    }["GlitchText.useEffect"], [
        isInView,
        text,
        intensity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        style: {
            position: "relative",
            display: "inline-block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "relative",
                    zIndex: 2
                },
                children: glitchText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    color: "rgba(255, 255, 255, 0.3)",
                    clipPath: "inset(0 0 50% 0)",
                    transform: "translateX(2px)",
                    zIndex: 1
                },
                children: glitchText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    color: "rgba(150, 150, 150, 0.3)",
                    clipPath: "inset(50% 0 0 0)",
                    transform: "translateX(-2px)",
                    zIndex: 1
                },
                children: glitchText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s2(GlitchText, "eKBQwYF6TQ+IAV6kBISt65zvsN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = GlitchText;
function ScrambleText({ text, className = "", duration = 1000 }) {
    _s3();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrambleText.useEffect": ()=>{
            if (!isInView || hasAnimated) return;
            setHasAnimated(true);
            const iterations = 10;
            const stepDuration = duration / iterations;
            let currentIteration = 0;
            const interval = setInterval({
                "ScrambleText.useEffect.interval": ()=>{
                    currentIteration++;
                    if (currentIteration >= iterations) {
                        setDisplayText(text);
                        clearInterval(interval);
                        return;
                    }
                    // Gradually reveal more correct characters
                    const revealRatio = currentIteration / iterations;
                    const newText = text.split("").map({
                        "ScrambleText.useEffect.interval.newText": (char, index)=>{
                            if (char === " ") return " ";
                            if (index < text.length * revealRatio) return char;
                            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                        }
                    }["ScrambleText.useEffect.interval.newText"]).join("");
                    setDisplayText(newText);
                }
            }["ScrambleText.useEffect.interval"], stepDuration);
            return ({
                "ScrambleText.useEffect": ()=>clearInterval(interval)
            })["ScrambleText.useEffect"];
        }
    }["ScrambleText.useEffect"], [
        isInView,
        text,
        duration,
        hasAnimated
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: displayText
    }, void 0, false, {
        fileName: "[project]/src/components/ui/TypewriterEffect.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
_s3(ScrambleText, "FWfvWrQE0znHILbH97IV94aKmzc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c3 = ScrambleText;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TypewriterEffect");
__turbopack_context__.k.register(_c1, "TerminalStatus");
__turbopack_context__.k.register(_c2, "GlitchText");
__turbopack_context__.k.register(_c3, "ScrambleText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TelemetryDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TelemetryDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TerminalCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TerminalCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CornerBrackets$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CornerBrackets.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedText.tsx [app-client] (ecmascript)");
// New spicy components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingBubbles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/FloatingBubbles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/MagneticButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedAUV$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedAUV.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CursorEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CursorEffect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypewriterEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TypewriterEffect.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Navigation links
__turbopack_context__.s([
    "barracudaSpecs",
    ()=>barracudaSpecs,
    "coreValues",
    ()=>coreValues,
    "externalLinks",
    ()=>externalLinks,
    "joinBenefits",
    ()=>joinBenefits,
    "navLinks",
    ()=>navLinks,
    "orgInfo",
    ()=>orgInfo,
    "pastAUVs",
    ()=>pastAUVs,
    "sponsors",
    ()=>sponsors,
    "sponsorshipBenefits",
    ()=>sponsorshipBenefits,
    "stats",
    ()=>stats,
    "subTeams",
    ()=>subTeams,
    "teamMembers",
    ()=>teamMembers,
    "technologies",
    ()=>technologies
]);
const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/team",
        label: "Team"
    },
    {
        href: "/join",
        label: "Join Us"
    },
    {
        href: "/sponsors",
        label: "Sponsors"
    }
];
const externalLinks = {
    github: "https://github.com/usc-robosub",
    discord: "https://discord.gg/7jPvyPWc8T",
    interestForm: "https://docs.google.com/forms/d/e/1FAIpQLSfZnhGsQTUPIkCJLfJcP2tE20nZVszWjG6SglmbcWH-VuExug/viewform",
    calendar: "https://calendar.google.com/calendar/u/0?cid=Y183ZGU0MmEyMGI0M2ZiNzQ0OWUzN2EwNzNmMjMwMjkyNTk5Zjc4ZmMyNDgyMTc2ZjNiYzI2ZDUzZWUxOWQ4MWY4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
    sponsorshipPacket: "/auv-sponsorship-packet-2025.pdf"
};
const stats = [
    {
        value: 20,
        suffix: "+",
        label: "Years Active"
    },
    {
        value: 8,
        suffix: "",
        label: "Thrusters"
    },
    {
        value: 45,
        suffix: "kg",
        label: "Vehicle Weight"
    },
    {
        value: 7,
        suffix: "",
        label: "E-Board Members"
    }
];
const technologies = [
    {
        id: "solidworks",
        name: "SOLIDWORKS",
        description: "3D CAD software for mechanical design & simulation",
        category: "Mechanical"
    },
    {
        id: "ros",
        name: "ROS",
        description: "Robotics middleware for distributed computing & sensor integration",
        category: "Software"
    },
    {
        id: "docker",
        name: "Docker",
        description: "Containerization for consistent development & deployment",
        category: "DevOps"
    },
    {
        id: "altium",
        name: "Altium Designer",
        description: "Professional PCB design & electronic schematic software",
        category: "Electrical"
    }
];
const coreValues = [
    {
        id: "excellence",
        title: "Excellence",
        description: "Striving for the highest standards in everything we do, from design to execution."
    },
    {
        id: "innovation",
        title: "Innovation",
        description: "Pushing boundaries and exploring new solutions in underwater robotics."
    },
    {
        id: "learning",
        title: "Learning",
        description: "Continuous education and skill development through hands-on experience."
    },
    {
        id: "collaboration",
        title: "Collaboration",
        description: "Working together across disciplines to achieve common goals."
    }
];
const teamMembers = [
    {
        id: "lauryn-hills",
        name: "Lauryn Hills",
        role: "President",
        major: "Electrical & Computer Engineering",
        year: "Junior",
        email: "lhills@usc.edu",
        linkedin: "#",
        image: "/team/lauryn-hills.jpg"
    },
    {
        id: "ekamresh-vasudevan",
        name: "Ekamresh Vasudevan",
        role: "Vice President & Electrical Co-Lead",
        major: "Electrical & Computer Engineering",
        year: "Senior",
        email: "evasudev@usc.edu",
        linkedin: "https://www.linkedin.com/in/ekamresh-vasudevan-4840b0230/",
        image: "/team/ekamresh-vasudevan.jpg"
    },
    {
        id: "joseph-ibalio",
        name: "Joseph Ibalio",
        role: "Electrical Co-Lead",
        major: "Electrical Engineering",
        year: "Junior",
        email: "jibalio@usc.edu",
        linkedin: "https://www.linkedin.com/in/joseph-ibalio/",
        image: "/team/joseph-ibalio.jpg"
    },
    {
        id: "alejandro-arteaga",
        name: "Alejandro Arteaga",
        role: "Software Co-Lead",
        major: "Computer Science",
        year: "Masters",
        email: "ajarteag@usc.edu",
        linkedin: "https://www.linkedin.com/in/ajarteag/",
        image: "/team/alejandro-arteaga.jpg"
    },
    {
        id: "taka-soeda",
        name: "Takatoshi Soeda",
        role: "Software Co-Lead",
        major: "Computer Science",
        year: "Masters",
        email: "soeda@usc.edu",
        linkedin: "https://www.linkedin.com/in/taka-soeda-jp/",
        image: "/team/taka-soeda.jpg"
    },
    {
        id: "hugh-thompson",
        name: "Hugh Thompson",
        role: "Mechanical Lead",
        major: "Mechanical Engineering",
        year: "Junior",
        email: "hueythom@usc.edu",
        linkedin: "https://www.linkedin.com/in/hugh-thompson1/",
        image: "/team/hugh-thompson.jpg"
    },
    {
        id: "russell-rodriguez",
        name: "Russell Rodriguez",
        role: "Treasurer",
        major: "Electrical Engineering",
        year: "Masters",
        email: "rar72397@usc.edu",
        linkedin: "https://www.linkedin.com/in/russell-rodriguez/",
        image: "/team/russell-rodriguez.jpg"
    },
    {
        id: "jessica-yao",
        name: "Jessica Yao",
        role: "Secretary",
        major: "Electrical & Computer Engineering",
        year: "Sophomore",
        email: "jryao@usc.edu",
        linkedin: "https://www.linkedin.com/in/jessica-yao-700a61254/",
        image: "/team/jessica-yao.jpg"
    },
    {
        id: "doris-lai",
        name: "Doris Lai",
        role: "Social Media Chair",
        major: "Business Administration",
        year: "Sophomore",
        email: "dhlai@usc.edu",
        linkedin: "https://www.linkedin.com/in/dorishlai/",
        image: "/team/doris-lai.jpg"
    }
];
const barracudaSpecs = {
    name: "The Barracuda",
    year: 2025,
    dimensions: "0.75 m x 0.64 m x 0.39 m",
    weight: "45 kg",
    thrusters: 8,
    battery: "16.2 Ah",
    features: [
        "Fully Integrated Sensor Fusion",
        "Simplified Hydrodynamics",
        "Modular Multi-Hull Design",
        "Doppler Velocity Log",
        "Imaging Sonar for Localization",
        "Containerized & Modular Software"
    ]
};
const pastAUVs = [
    {
        name: "Mantaray",
        image: "/history/mantaray.jpg"
    },
    {
        name: "Turtle",
        image: "/history/turtle.jpg"
    },
    {
        name: "Seabee",
        image: "/history/seabee.jpg"
    }
];
const sponsors = {
    platinum: [
        {
            name: "USC Viterbi School of Engineering",
            logo: "/sponsors/usc-viterbi.jpg"
        }
    ],
    gold: [
        {
            name: "Lockheed Martin",
            logo: "/sponsors/lockheed-martin.png"
        },
        {
            name: "Northrop Grumman",
            logo: "/sponsors/northrop-grumman.png"
        }
    ],
    silver: [],
    bronze: []
};
const sponsorshipBenefits = [
    "Increase brand visibility among students and professionals",
    "Engage with a passionate community of innovators",
    "Support the development of cutting-edge underwater robotics",
    "Network with future leaders in technology and engineering",
    "Gain access to exclusive events and competitions"
];
const joinBenefits = [
    "Gain hands-on experience with underwater robotics",
    "Develop leadership and teamwork skills",
    "Travel to competitions",
    "Develop your technical skills",
    "Make lifelong friends and connections"
];
const subTeams = [
    {
        id: "software",
        name: "Software",
        description: "Developing autonomous control systems, computer vision, and navigation algorithms."
    },
    {
        id: "electrical",
        name: "Electrical",
        description: "Designing power systems, PCBs, and sensor integration for the AUV."
    },
    {
        id: "mechanical",
        name: "Mechanical",
        description: "Engineering the hull, propulsion systems, and structural components."
    }
];
const orgInfo = {
    name: "USC AUV",
    fullName: "University of Southern California Autonomous Underwater Vehicle Team",
    tagline: "University of Southern California's Premier Robotics Design Team",
    founded: 2005,
    description: "USC RoboSub is a student-led organization pushing the boundaries of underwater robotics. Combining the expertise of our Software, Electrical, & Mechanical teams, we design & build autonomous underwater vehicles (AUVs) and compete in the annual RoboSub competition."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/team/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript) <export default as IconMail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandLinkedin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandLinkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.mjs [app-client] (ecmascript) <export default as IconBrandLinkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-client] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypewriterEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TypewriterEffect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function TeamPage() {
    _s();
    const subteamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eboardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subteamsInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(subteamsRef, {
        once: true,
        margin: "-100px"
    });
    const eboardInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(eboardRef, {
        once: true,
        margin: "-100px"
    });
    const ctaInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ctaRef, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            position: "relative",
                            paddingTop: "160px",
                            paddingBottom: "80px",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-grid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-grid-fade"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-code-matrix"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-frame tl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-frame tr"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-frame bl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-frame br"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glow-accent-tl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glow-accent-br"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container",
                                style: {
                                    position: "relative",
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                                        text: "OUR PEOPLE",
                                        delay: 0.1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedHeadline"], {
                                        text: [
                                            "MEET THE",
                                            "TEAM"
                                        ],
                                        className: "text-display",
                                        style: {
                                            fontSize: "clamp(48px, 10vw, 96px)",
                                            marginTop: "16px",
                                            marginBottom: "24px"
                                        },
                                        as: "h1",
                                        delay: 0.2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeUpText"], {
                                        delay: 0.5,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "20px",
                                                color: "var(--text-secondary)",
                                                maxWidth: "600px"
                                            },
                                            children: "The talented engineers driving innovation in underwater robotics"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/team/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeUpText"], {
                                        delay: 0.7,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "24px",
                                                marginTop: "48px",
                                                justifyContent: "flex-start"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "rgba(0, 0, 0, 0.4)",
                                                        border: "1px solid var(--border)",
                                                        padding: "16px 24px",
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: "14px",
                                                        minWidth: "280px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--text-muted)"
                                                            },
                                                            children: "$ "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypewriterEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypewriterEffect"], {
                                                            words: [
                                                                "team.init()",
                                                                "load_engineers()",
                                                                "deploy_excellence()",
                                                                "build_the_future()"
                                                            ],
                                                            typingSpeed: 80,
                                                            deletingSpeed: 40,
                                                            pauseTime: 2500
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "rgba(0, 0, 0, 0.4)",
                                                        border: "1px solid var(--border)",
                                                        padding: "16px 24px",
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: "14px",
                                                        minWidth: "260px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#6a9955"
                                                            },
                                                            children: "// "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypewriterEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypewriterEffect"], {
                                                            words: [
                                                                "innovators",
                                                                "problem solvers",
                                                                "dreamers",
                                                                "builders",
                                                                "engineers"
                                                            ],
                                                            typingSpeed: 100,
                                                            deletingSpeed: 50,
                                                            pauseTime: 2000,
                                                            cursorColor: "var(--accent)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "rgba(0, 0, 0, 0.4)",
                                                        border: "1px solid var(--border)",
                                                        padding: "16px 24px",
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: "14px",
                                                        minWidth: "300px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#c586c0"
                                                            },
                                                            children: "const "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#9cdcfe"
                                                            },
                                                            children: "passion"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--text-muted)"
                                                            },
                                                            children: " = "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypewriterEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypewriterEffect"], {
                                                            words: [
                                                                '"limitless"',
                                                                '"unstoppable"',
                                                                '"contagious"',
                                                                '"infinite"'
                                                            ],
                                                            typingSpeed: 90,
                                                            deletingSpeed: 45,
                                                            pauseTime: 2200,
                                                            cursorColor: "#dcdcaa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/team/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: eboardRef,
                        className: "section",
                        style: {
                            background: "var(--bg-secondary)",
                            borderTop: "1px solid var(--border)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                                initial: "hidden",
                                animate: eboardInView ? "visible" : "hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                        style: {
                                            textAlign: "center",
                                            marginBottom: "80px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-label",
                                                children: "LEADERSHIP"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-heading",
                                                style: {
                                                    fontSize: "clamp(28px, 4vw, 44px)",
                                                    marginTop: "16px",
                                                    textTransform: "uppercase"
                                                },
                                                children: "EXECUTIVE BOARD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "17px",
                                                    color: "var(--text-secondary)",
                                                    marginTop: "20px",
                                                    maxWidth: "600px",
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    lineHeight: 1.7
                                                },
                                                children: "Meet the Student Leadership guiding USC AUV forward"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                            gap: "32px"
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamMembers"].map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                                className: "card",
                                                style: {
                                                    padding: "32px",
                                                    textAlign: "center"
                                                },
                                                whileHover: {
                                                    y: -6,
                                                    borderColor: "var(--border-light)",
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "relative",
                                                            width: "120px",
                                                            height: "120px",
                                                            margin: "0 auto 24px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    border: "2px solid var(--border)",
                                                                    position: "relative",
                                                                    overflow: "hidden"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: member.image,
                                                                        alt: member.name,
                                                                        fill: true,
                                                                        style: {
                                                                            objectFit: "cover"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0",
                                                                            left: "0",
                                                                            width: "12px",
                                                                            height: "12px",
                                                                            borderTop: "2px solid var(--accent)",
                                                                            borderLeft: "2px solid var(--accent)",
                                                                            zIndex: 1
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0",
                                                                            right: "0",
                                                                            width: "12px",
                                                                            height: "12px",
                                                                            borderTop: "2px solid var(--accent)",
                                                                            borderRight: "2px solid var(--accent)",
                                                                            zIndex: 1
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: "absolute",
                                                                            bottom: "0",
                                                                            left: "0",
                                                                            width: "12px",
                                                                            height: "12px",
                                                                            borderBottom: "2px solid var(--accent)",
                                                                            borderLeft: "2px solid var(--accent)",
                                                                            zIndex: 1
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: "absolute",
                                                                            bottom: "0",
                                                                            right: "0",
                                                                            width: "12px",
                                                                            height: "12px",
                                                                            borderBottom: "2px solid var(--accent)",
                                                                            borderRight: "2px solid var(--accent)",
                                                                            zIndex: 1
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mono",
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-8px",
                                                                    right: "-8px",
                                                                    background: "var(--bg-primary)",
                                                                    border: "1px solid var(--border)",
                                                                    padding: "4px 8px",
                                                                    fontSize: "11px",
                                                                    color: "var(--text-muted)",
                                                                    zIndex: 2
                                                                },
                                                                children: [
                                                                    "#",
                                                                    String(index + 1).padStart(2, "0")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "18px",
                                                            fontWeight: 600,
                                                            marginBottom: "8px",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.05em"
                                                        },
                                                        children: member.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "14px",
                                                            color: "var(--accent)",
                                                            marginBottom: "16px",
                                                            fontWeight: 500
                                                        },
                                                        children: member.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "13px",
                                                            color: "var(--text-muted)",
                                                            marginBottom: "24px",
                                                            lineHeight: 1.6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: member.major
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    marginTop: "2px"
                                                                },
                                                                children: member.year
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "12px",
                                                            justifyContent: "center",
                                                            paddingTop: "20px",
                                                            borderTop: "1px solid var(--border)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `mailto:${member.email}`,
                                                                style: {
                                                                    width: "44px",
                                                                    height: "44px",
                                                                    border: "1px solid var(--border)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: "var(--text-muted)",
                                                                    transition: "all 0.2s ease"
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.color = "var(--text-primary)";
                                                                    e.currentTarget.style.borderColor = "var(--accent)";
                                                                    e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.color = "var(--text-muted)";
                                                                    e.currentTarget.style.borderColor = "var(--border)";
                                                                    e.currentTarget.style.background = "transparent";
                                                                },
                                                                "aria-label": `Email ${member.name}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__["IconMail"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: member.linkedin,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    width: "44px",
                                                                    height: "44px",
                                                                    border: "1px solid var(--border)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: "var(--text-muted)",
                                                                    transition: "all 0.2s ease"
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.color = "var(--text-primary)";
                                                                    e.currentTarget.style.borderColor = "var(--accent)";
                                                                    e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.color = "var(--text-muted)";
                                                                    e.currentTarget.style.borderColor = "var(--border)";
                                                                    e.currentTarget.style.background = "transparent";
                                                                },
                                                                "aria-label": `${member.name}'s LinkedIn`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandLinkedin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandLinkedin$3e$__["IconBrandLinkedin"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, member.id, true, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: subteamsRef,
                        className: "section",
                        style: {
                            paddingTop: "100px",
                            paddingBottom: "100px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                                initial: "hidden",
                                animate: subteamsInView ? "visible" : "hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                        style: {
                                            textAlign: "center",
                                            marginBottom: "64px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-label",
                                                children: "STRUCTURE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-heading",
                                                style: {
                                                    fontSize: "clamp(28px, 4vw, 44px)",
                                                    marginTop: "16px",
                                                    textTransform: "uppercase"
                                                },
                                                children: "OUR SUB-TEAMS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                            gap: "24px",
                                            maxWidth: "900px",
                                            margin: "0 auto"
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subTeams"].map((team)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                                className: "card",
                                                style: {
                                                    textAlign: "center"
                                                },
                                                whileHover: {
                                                    y: -4,
                                                    borderColor: "var(--border-light)",
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "56px",
                                                            height: "56px",
                                                            border: "1px solid var(--border)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            margin: "0 auto 16px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__["IconUsers"], {
                                                            size: 26,
                                                            color: "var(--text-secondary)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "20px",
                                                            fontWeight: 700,
                                                            marginBottom: "12px",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.02em"
                                                        },
                                                        children: team.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "14px",
                                                            color: "var(--text-muted)",
                                                            lineHeight: 1.6
                                                        },
                                                        children: team.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, team.id, true, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: ctaRef,
                        className: "section",
                        style: {
                            background: "var(--bg-secondary)",
                            borderTop: "1px solid var(--border)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                                initial: "hidden",
                                animate: ctaInView ? "visible" : "hidden",
                                style: {
                                    maxWidth: "700px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                        className: "section-label",
                                        children: "JOIN US"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                        className: "text-heading",
                                        style: {
                                            fontSize: "clamp(32px, 5vw, 52px)",
                                            marginTop: "16px",
                                            marginBottom: "24px",
                                            textTransform: "uppercase"
                                        },
                                        children: "JOIN THE TEAM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                        style: {
                                            fontSize: "17px",
                                            color: "var(--text-secondary)",
                                            marginBottom: "32px",
                                            lineHeight: 1.7
                                        },
                                        children: "We're always looking for passionate students to join our team. No experience required — just dedication and a drive to learn."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/join",
                                            className: "btn-primary",
                                            children: [
                                                "APPLY NOW",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/team/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TeamPage, "nsARENBK+lzziUWtyc1/pKqf2Hc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = TeamPage;
var _c;
__turbopack_context__.k.register(_c, "TeamPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_00dd9c12._.js.map