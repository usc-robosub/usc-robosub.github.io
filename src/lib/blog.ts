export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  summary: string;
  details: {
    label: string;
    value: string;
  }[];
  sections: {
    heading: string;
    body: string[];
    image?: string;
    imageAlt?: string;
    images?: {
      src: string;
      alt: string;
    }[];
  }[];
  highlights: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "spring-2026-wet-tests",
    title: "Spring 2026 Wet Tests: From Dry-Dock to Pool Operations",
    excerpt:
      "A look back at how the team moved from dry-dock development into real pool operations, transforming coordination across software, electrical, and mechanical along the way.",
    date: "May 2026",
    readTime: "5 min read",
    category: "Testing",
    author: "USC AUV Team",
    image: "/blog-spring-2026-wet-test-team.jpg",
    summary:
      "This semester was a massive leap forward for the USC AUV team as we officially moved out of the comfort of the lab and into the actual water at Century Apartments. Across four key milestones between February and May, we did not just test a robot. We transformed how our subteams collaborate, pushed our computing core to its limits, worked through tricky mechanical bottlenecks, and learned exactly what it takes to keep a hull sealed under pressure. Every single rainy postponement, poolside diagnostic check, and late-night calibration brought us closer together as an engineering team and proved just how resilient our sub really is.",
    details: [
      { label: "Location", value: "Century Apts" },
      { label: "Focus", value: "Wet Tests" },
      { label: "Vehicle", value: "Barracuda" },
    ],
    sections: [
      {
        heading: "February 18, 2026 — Spring Wet Test Kickoff",
        body: [
          "Planned Location: Century Apartments Pool",
          "The Pivot: Mother Nature had other plans for our first official pool session. Lauryn had to call a rain delay in #announcements, but we did not let the night go to waste. The whole crew regrouped in RTH 206 for a technical sync to check code readiness and overall system status.",
          "Our Software & Computing Setup: At this point in the semester, the vehicle architecture was a dual-processor setup. We paired an Nvidia Jetson AGX with a Raspberry Pi, splitting onboard processing and low-level control tasks across both boards.",
          "Logging & Vision Readiness: Luke had a custom logging script primed and ready to automatically dump telemetry and system messages into a rosbag the second we hit the water. Taka delivered a huge software win by confirming that the ZED stereo camera node was fully compiled, stable, and publishing clean data.",
          "Electrical & Mechanical Check: On the hardware side, the mechanical team confirmed the main hull enclosure was good to go. Jojo verified that the chassis closed and latched perfectly under full tension, giving the team confidence that the sealing mechanics were ready for pool pressure.",
          "Where We Headed Next: The electrical team used this kickoff meeting to map out a major goal for the semester: ditching the Raspberry Pi entirely and migrating low-level pin control straight to the Jetson GPIO array. Less clutter, fewer failure points, and more space inside the hull.",
          "Staying Organized: We kept track of all our moving parts and individual blockers on the internal Tasks and notes until water test Notion page.",
        ],
        image: "/blog-build-log-controls-bench.jpg",
        imageAlt:
          "Bench setup showing thrusters, a controller, and the Barracuda control interface during early spring wet test preparation.",
      },
      {
        heading: "March 25, 2026 — The Mid-Semester Roadmap",
        body: [
          "Objective: This strategy session focused on establishing the spring pool testing pipeline and setting a consistent operational cadence for the rest of the semester.",
          "Venue Selection: The team officially finalized the Century Apartments pool as its recurring testing grounds. A major factor in that decision was stable campus Wi-Fi coverage reaching all the way to the water's edge, which would let developers push live hotfixes and terminal commands directly from the pool deck.",
          "Operational Cadence: To give every subteam a predictable weekly sprint target, the club locked down a permanent deployment window. Saturdays from 3:00 PM to 6:00 PM became the dedicated field testing block for spring operations.",
        ],
      },
      {
        heading: "April 4, 2026 — Recovery, Sensors and Real Datasets",
        body: [
          "Software Target: Coming out of the April 1 software subteam sync, the team set a major pre-dive goal for the next deployment: moving away from simulation and integrating live IMU and Depth Sonar feedback loops directly into the control stack.",
          "Pipeline Readiness: The software leads also confirmed that the ZED stereo camera vision pipeline was compiled and stable. Peripheral communication scripts were being wrapped up so the team could start harvesting clean pool telemetry profiles for offline SLAM datasets.",
          "Wet Test Status: The team loaded up the sub and headed to Century in the early afternoon. During the session, the vehicle was pulled from the water for an intermediate hardware check while everyone kept tabs on whether the system was finally swimming cleanly.",
          "The SLAM Breakthrough: This session helped generate some of the first real-world pool telemetry logs for the team’s localization work. Those files became part of the SLAM dataset collection effort and gave the autonomy stack real pool data to calibrate against instead of relying only on simulation.",
          "The Diagnostic Fix: After recovery, the team brought the sub back to the makerspace to verify that its internals had handled immersion safely. Full diagnostics confirmed that the Jetson core was completely dry, unscathed, and running perfectly, validating the mechanical team’s sealing work.",
        ],
        image: "/blog-build-log-diagnostics-screen.jpg",
        imageAlt: "Laptop screen showing Barracuda diagnostics and live video during April wet test troubleshooting.",
      },
      {
        heading: "May 2, 2026 — Full-System Pool Operations",
        body: [
          "A Flawless Phased Timeline: This wet test was one of the smoothest and most coordinated runs of the semester. The electrical team arrived early at 3:00 PM for panel assembly and hardware integration, software took over at 4:00 PM for final configuration, and by 6:00 PM the sub was officially in the water.",
          "Last-Minute Thruster Tweaks: Right before deployment, Alejandro caught a propulsion issue. The team pivoted quickly and adjusted the Thruster Board Mapping to disable thruster index 2, covering addresses 0x2d and 0x2e, so it would not interfere with runtime. Later that evening, Huey shared terminal diagnostics showing that the software nodes were holding steady.",
          "Team Effort: Alejandro invited the broader team to come poolside and help out, and the session turned into a strong all-hands operations night. Ekamresh capped it off with a message that said, 'GREAT WET TEST GUYS'.",
          "Wrapping Up Maintenance: The work did not stop when the sub came out of the pool. The team stayed late for cleanup and drying, with follow-up discussion in electrical covering the exact sponge material needed to protect and dry the battery trays.",
        ],
        images: [
          {
            src: "/blog-may-2-wet-test-pool.jpg",
            alt: "Team members lowering Barracuda into the pool during the May 2, 2026 wet test.",
          },
          {
            src: "/blog-may-2-wet-test-pool-2.jpg",
            alt: "Poolside operator running the May 2 wet test while monitoring software and telemetry.",
          },
          {
            src: "/blog-may-2-wet-test-pool-3.jpg",
            alt: "Barracuda floating in the pool during the May 2 full-system operations run.",
          },
        ],
      },
    ],
    highlights: [
      "Dual-board architecture, ZED bring-up, and rosbag logging",
      "Peripheral integration, sealing sprints, and poolside network prep",
      "Sensor fusion with real-world SLAM dataset capture",
      "Live PWM diagnostics and thruster board remapping",
    ],
  },
  {
    slug: "robosub-2025-barracuda-build-update",
    title: "Barracuda Build Update: What We Changed for RoboSub 2025",
    excerpt:
      "A look at the latest structural, software, and electrical upgrades that are shaping our 2025 vehicle.",
    date: "May 2026",
    readTime: "6 min read",
    category: "Build Log",
    author: "USC AUV Team",
    image: "/barracuda.jpg",
    summary:
      "Our 2025 build cycle has been focused on making Barracuda more modular, more reliable, and faster to iterate on between test sessions. Here’s how the Mechanical, Electrical, and Software teams are collaborating to get the vehicle mission-ready.",
    details: [
      { label: "Vehicle", value: "Barracuda" },
      { label: "Focus", value: "Modularity" },
      { label: "Mode", value: "Build Log" },
    ],
    sections: [
      {
        heading: "Why we started with modularity",
        body: [
          "For this season, we wanted every major subsystem to be easier to remove, inspect, and replace between pool sessions. That meant treating access and maintenance as first-class design requirements instead of afterthoughts.",
          "The result is a tighter integration between the hull layout, internal mounting strategy, and cable routing. When we can service the vehicle faster, we can spend more time testing autonomy and less time troubleshooting in the lab.",
        ],
      },
      {
        heading: "Mechanical changes",
        body: [
          "The mechanical team refined the internal layout to improve service access and reduce unnecessary clutter inside the vehicle. Mounting points were adjusted so that sensors and payloads can be swapped with minimal rework.",
          "We also revisited sealing, fastener selection, and cable pass-throughs to make the build more robust during repeated wet tests. Small improvements here save a lot of time once the vehicle is in the water.",
        ],
      },
      {
        heading: "Electrical and software updates",
        body: [
          "On the electrical side, we focused on cleaner power distribution, easier debugging, and better sensor integration. Clearer labeling and more deliberate board placement make the system much easier to trace when something needs attention.",
          "The software team has been using that hardware stability to push more reliable autonomy and simulation workflows. A smoother bring-up process means we can validate new behaviors sooner and spend more time improving mission logic.",
        ],
        images: [
          {
            src: "/blog-build-log-controls-bench.jpg",
            alt: "Bench setup showing thrusters, a controller, and the Barracuda control interface during electrical and software testing.",
          },
          {
            src: "/blog-build-log-diagnostics-screen.jpg",
            alt: "Laptop screen showing Barracuda diagnostics and live video during software testing.",
          },
        ],
      },
      {
        heading: "What’s next",
        body: [
          "Next up is integration testing: verifying the whole stack together, then tightening the loop between lab testing and pool testing. That’s where the best improvements usually show up.",
          "We’ll keep sharing progress as Barracuda moves closer to competition-ready status. The goal is simple: build a vehicle the team can trust, then keep making it better.",
        ],
      },
    ],
    highlights: [
      "Easier subsystem swaps",
      "Cleaner power and cable routing",
      "More reliable integration testing",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
