export type BlogPost = {
  slug: string;
  series: string; // blogSeries slug: which series page lists this post
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  summary: string;
  byline?: string; // e.g. "Written by ...", shown above the summary
  headline?: string[]; // override the big hero headline words
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
    // Photos placed inline, each after a given body paragraph index.
    inlineImages?: {
      after: number;
      src: string;
      alt: string;
    }[];
    // Videos placed inline, each after a given body paragraph index.
    inlineVideos?: {
      after: number;
      id: string; // YouTube video id
      title: string;
    }[];
    // Side-by-side captioned images (e.g. before / after), after a paragraph.
    comparison?: {
      after: number;
      items: {
        src: string;
        alt: string;
        caption: string;
      }[];
    };
    video?: string; // YouTube video id
    videoTitle?: string;
    // A small data table placed after a given body paragraph index.
    table?: {
      after: number;
      columns: string[];
      rows: string[][];
      highlightRow?: number; // row index to emphasize
      caption?: string;
    };
    // Horizontal bar chart placed after a given body paragraph index. Bars are
    // drawn to one scale (max), one bar per series in each group.
    chart?: {
      after: number;
      title: string;
      max: number;
      series: { name: string; color: string }[]; // color: a CSS value, e.g. "var(--terminal-amber)"
      groups: { label: string; values: number[] }[];
    };
  }[];
  highlights: string[];
  // Optional aside/quote overrides (fall back to the development-blog defaults)
  quote?: string;
  statusLabel?: string;
  statusItems?: string[];
  readNote?: string;
  quickNote?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "spring-2026-wet-tests",
    series: "development-2026",
    title: "Spring 2026 Wet Tests: From Dry-Dock to Pool Operations",
    excerpt:
      "A look back at how the team moved from dry-dock development into real pool operations, transforming coordination across software, electrical, and mechanical along the way.",
    date: "June 2026",
    readTime: "6 min read",
    category: "Testing",
    author: "USC AUV Team",
    image: "/blog-spring-2026-wet-test-team.jpg",
    summary:
      "This semester was a massive leap forward for the USC AUV team as we officially moved out of the comfort of the lab and into the actual water at Century Apartments. Across five key milestones between February and June, we did not just test a robot. We transformed how our subteams collaborate, pushed our computing core to its limits, worked through tricky mechanical bottlenecks, and learned exactly what it takes to keep a hull sealed under pressure. Every single rainy postponement, poolside diagnostic check, and late-night calibration brought us closer together as an engineering team and proved just how resilient our sub really is.",
    details: [
      { label: "Location", value: "Century Apts" },
      { label: "Focus", value: "Wet Tests" },
      { label: "Vehicle", value: "Barracuda" },
    ],
    sections: [
      {
        heading: "February 18, 2026: Spring Wet Test Kickoff",
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
        heading: "March 25, 2026: The Mid-Semester Roadmap",
        body: [
          "Objective: This strategy session focused on establishing the spring pool testing pipeline and setting a consistent operational cadence for the rest of the semester.",
          "Venue Selection: The team officially finalized the Century Apartments pool as its recurring testing grounds. A major factor in that decision was stable campus Wi-Fi coverage reaching all the way to the water's edge, which would let developers push live hotfixes and terminal commands directly from the pool deck.",
          "Operational Cadence: To give every subteam a predictable weekly sprint target, the club locked down a permanent deployment window. Saturdays from 3:00 PM to 6:00 PM became the dedicated field testing block for spring operations.",
        ],
      },
      {
        heading: "April 4, 2026: Recovery, Sensors and Real Datasets",
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
        heading: "May 2, 2026: Full-System Pool Operations",
        body: [
          "A Flawless Phased Timeline: This wet test was one of the smoothest and most coordinated runs of the semester. The electrical team arrived early at 3:00 PM for panel assembly and hardware integration, software took over at 4:00 PM for final configuration, and by 6:00 PM the sub was officially in the water.",
          "Last-Minute Thruster Tweaks: Right before deployment, Alejandro caught a propulsion issue. The team pivoted quickly and adjusted the Thruster Board Mapping to disable thruster index 2, covering addresses 0x2d and 0x2e, so it would not interfere with runtime. Later that evening, Heuy shared terminal diagnostics showing that the software nodes were holding steady.",
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
      {
        heading: "June 23, 2026: Thruster Control, Sensors, and the Gate",
        body: [
          "The Valve: We took care of the valve this session, exactly the part we knew needed attention. With it handled, Barracuda sat in the water just the way we wanted and the internals came back completely dry, letting the team focus on controls and autonomy.",
          "Thruster Control, Fully Tested: The biggest win of the session was a complete test of thruster control, and it worked perfectly. Every thruster responded as commanded and the vehicle moved exactly the way we expected, giving us full confidence in the propulsion and low-level control stack going forward.",
          "Sensor Inputs and Localization: We also tested our sensor inputs and used the session to push on localization. That work paid off: we traced the problems in our GTSAM localization down to the IMU, and we were able to fix that issue after the test. Pinning the root cause to a specific sensor turned a vague localization problem into a concrete, solved one.",
          "Setting Up the Gate: We staked out a stand-in competition gate with a pair of weighted PVC markers on the pool bottom, but we were not able to run it autonomously. This was not a hardware problem. It came back to localization: without a reliable current pose and target pose, the robot does not yet know where it is or where it needs to go on its own, so it cannot navigate the gate autonomously. With the IMU issue now fixed, getting an autonomous gate run is the clear next step.",
          "Battery Management: On the electrical side, Yi led the effort to keep our battery properly monitored, with the focus on tracking battery voltage during testing. The team worked toward sensible per-cell targets, treating roughly 3.75V per cell as desirable with a bit of headroom to discharge further, and sizing runs against goals like 4.1V for about three hours of testing. A custom battery-management PCB also finished production this week and is on its way to us, which will make this monitoring far more robust going forward.",
          "Logistics That Finally Click: The other quiet win was logistics. The amount of time it takes to get the sub assembled, sealed, and into the water has dropped significantly compared to earlier in the year. What used to consume most of a wet test now happens quickly and predictably, leaving far more of each session for actually testing the vehicle. That faster turnaround is a direct payoff from the modularity and process improvements the team has invested in all semester.",
        ],
        images: [
          {
            src: "/blog-jun-23-wet-test.gif",
            alt: "Barracuda floating and maneuvering in the pool during the June 23, 2026 wet test, with the hull sealed and dry.",
          },
          {
            src: "/blog-jun-23-gate.jpg",
            alt: "Weighted white and red PVC markers staked to the pool bottom forming a stand-in competition gate during the June 23, 2026 wet test.",
          },
        ],
      },
    ],
    highlights: [
      "Dual-board architecture, ZED bring-up, and rosbag logging",
      "Peripheral integration, sealing sprints, and poolside network prep",
      "Sensor fusion with real-world SLAM dataset capture",
      "Live PWM diagnostics and thruster board remapping",
      "Valve fix, flawless thruster control, and GTSAM localization traced to the IMU and fixed",
    ],
  },
  {
    slug: "robosub-2025-barracuda-build-update",
    series: "development-2026",
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
  {
    slug: "robosub-2026-competition-log",
    series: "robosub-2026",
    title: "RoboSub 2026 Competition Log",
    excerpt:
      "Five days at the Woollett Aquatics Center in Irvine became the culmination of an entire year of work, the story of how Barracuda and the USC AUV team diagnosed problems, made engineering calls on the pool deck, rebuilt the entire vehicle overnight, and swam into the Autonomy Challenge semi-finals.",
    date: "July 11–16, 2026",
    readTime: "7 min read",
    category: "Competition Log",
    author: "USC AUV Team",
    image: "/team-group-photo.jpg",
    headline: ["RoboSub", "2026", "Competition"],
    summary:
      "Five days at the Woollett Aquatics Center in Irvine became the culmination of an entire year of work. RoboSub isn't just about the final score, it's about how quickly a team can learn, adapt, and improve under pressure. Every issue we encountered became another opportunity to grow, and every successful run was built on countless hours of testing before we ever arrived in Irvine. This competition wasn't defined by a single autonomous run. It was defined by our team's ability to diagnose problems, make engineering decisions on the pool deck, and come back stronger each time Barracuda entered the water.",
    quote:
      "The biggest lesson from RoboSub wasn't that everything worked. It was that every setback became another engineering problem we learned how to solve together.",
    details: [
      { label: "Result", value: "AC Semi-Finalist" },
      { label: "Location", value: "Irvine, CA" },
      { label: "Vehicle", value: "Barracuda" },
    ],
    sections: [
      {
        heading: "Day 1: Arrival & Preparing for Competition",
        body: [
          "After driving down to Irvine, the team completed registration and settled into the competition schedule. While the official events had only just begun, everyone knew the real work would happen in the water. We headed to the practice pool for our **first testing session**.",
          "Transporting an AUV always introduces uncertainty. Before our first official run we **verified every critical subsystem**: electrical systems, watertight seals, thrusters, controls, and sensors.",
          "We hadn't gone to the competition site yet, so this first day was entirely at the practice pool, where we began **adapting Barracuda to unfamiliar water** that behaved very differently from the pool we had trained in throughout the spring. It set the tone for the week: **long nights, constant iteration**, and making every minute in the water count.",
        ],
        images: [
          {
            src: "/day-1-practice-2.jpg",
            alt: "The team gathered around the practice pool at our Airbnb at night, watching Barracuda run during the first day's testing session.",
          },
          {
            src: "/day-1-practice-3.jpg",
            alt: "The team at the practice pool during the first night of testing at the team house.",
          },
        ],
        inlineImages: [
          {
            after: 0,
            src: "/software_working_2.jpg",
            alt: "Team members reviewing camera feeds and code on their laptops while preparing at the team house.",
          },
        ],
      },
      {
        heading: "Day 2: Presentations, Iteration & a 3 A.M. Breakthrough",
        body: [
          "The morning began with our **technical presentation and design assessment**. Ek, Taka, and Heuy presented Barracuda's mechanical design, software architecture, and engineering decisions to the judges. We received encouraging feedback that validated many of the improvements the team had spent months developing.",
          "Afterward, everyone moved to the competition pool for the first time, and it behaved very differently from the water we had trained in throughout the spring. Our first tests at the competition site quickly revealed several problems: Barracuda **consistently drifted to the right**, making autonomous navigation unreliable, and we struggled with **depth control and vehicle speed**, preventing consistent gate passes.",
          "Instead of becoming discouraged, the team immediately **split into troubleshooting groups**. The software team analyzed logs between every run while the mechanical team adjusted ballast and weight distribution to improve stability. Every run generated more data; every adjustment improved the vehicle.",
          "Testing continued long after most teams had packed up. We stayed in the pool until **nearly 3:00 AM**, continuously refining the vehicle and repeating autonomous runs. By the end of the night, Barracuda passed through the gate multiple times, and these were our **first fully autonomous gate runs with the tether completely disconnected**, relying only on the wireless kill switch. It was a milestone we had been working toward all season.",
        ],
        inlineImages: [
          {
            after: 0,
            src: "/day-1-presentation.jpg",
            alt: "Team members presenting Barracuda's design and engineering decisions to the judges during the technical assessment.",
          },
          {
            after: 2,
            src: "/software_working_1.jpg",
            alt: "The team at the USC AUV competition tent in San Diego, working between troubleshooting sessions.",
          },
        ],
        video: "XId9qINUtW0",
        videoTitle: "Day 2 late-night test run, first autonomous gate passes",
      },
      {
        heading: "Day 3: Qualifying, Unexpected Challenges & Teamwork",
        body: [
          "Competition morning began with the qualifying draw, but we quickly discovered an unexpected requirement: disconnecting the tether wasn't sufficient. Competition rules required the **tether to be removed entirely** from the vehicle, meaning we suddenly needed a **T10 enclosure** that we had not prepared.",
          "RoboSub once again demonstrated its collaborative spirit. Thanks to **Team Washington State University**, who generously lent us a replacement enclosure, we were able to continue competing without losing valuable time.",
          "Our first qualifying run still wasn't successful, Barracuda struggled to maintain depth, making autonomous navigation unreliable. Back on deck, the team reviewed the logs and identified the culprit: the **DVL had become misaligned**, resulting in inaccurate navigation estimates. After **recalibrating the sensor** and making adjustments, we returned to the pool that afternoon. Once again, the team **met the setback with resilience** rather than frustration, treating a failed run as the next problem to solve, not a reason to quit.",
          "After that morning run, we went back to simulation to keep debugging. Although we never got to try the slalom and other mission tasks in a real water test, the software team was able to **complete and validate that code by running it in NVIDIA Isaac Sim**, where we test autonomy and mission logic before ever touching the water.",
          "The improvement was immediate. Barracuda completed **one of its strongest autonomous runs** of the competition, passing cleanly through the gate and showing how much progress had been made in only a few hours. The gap between the morning and afternoon runs captured exactly what RoboSub is about: **rapid engineering iteration under pressure**.",
        ],
        inlineImages: [
          {
            after: 2,
            src: "/pool_side.png",
            alt: "A team member in the competition pool guiding Barracuda toward the gate during a qualifying run at the Woollett Aquatics Center.",
          },
        ],
        inlineVideos: [
          {
            after: 3,
            id: "JGoJrz6ZzJc",
            title: "Barracuda in NVIDIA Isaac Sim",
          },
        ],
        video: "hekgq-YujYk",
        videoTitle: "Successful qualifying run, clean autonomous gate pass",
      },
      {
        heading: "Overnight Rebuild: Reinventing Barracuda",
        body: [
          "Qualifying also set up a larger engineering challenge. From the beginning, we had **planned to move Barracuda onto a lighter frame** for better yaw maneuverability, and the competition became the moment to finally execute that change.",
          "Rather than settling for incremental improvements, the team committed to **rebuilding Barracuda during the competition**, exactly as we had intended.",
          "The mechanical team worked through the night, completely disassembling the vehicle and **rebuilding it around a lighter frame**. Components were transferred, wiring reorganized, buoyancy recalculated, and the entire vehicle reassembled under an incredibly tight deadline.",
          "The software team was equally busy. The redesigned vehicle required **updated parameters throughout the software stack**, controllers were retuned, configuration files updated, and the mission framework reconfigured to match the new platform, while additional autonomous mission capabilities were integrated for tasks beyond the gate. By the following morning, **an entirely new version of Barracuda was ready**.",
        ],
        comparison: {
          after: 0,
          items: [
            {
              src: "/barracuda_cad_before.PNG",
              alt: "CAD render of Barracuda's original, heavier boxed frame before the rebuild.",
              caption: "Before: original heavier frame",
            },
            {
              src: "/barracuda_cad_after.PNG",
              alt: "CAD render of Barracuda's new, lighter frame the team rebuilt around at competition.",
              caption: "After: new lighter frame",
            },
          ],
        },
        images: [
          {
            src: "/change_frame_1.jpg",
            alt: "Team members rewiring and reassembling Barracuda onto a lighter frame during the overnight rebuild.",
          },
          {
            src: "/change_frame_2.jpg",
            alt: "The team disassembling and rebuilding Barracuda late into the night beside the pool.",
          },
          {
            src: "/change_frame_3.jpg",
            alt: "The team transferring components onto Barracuda's lighter frame during the overnight rebuild.",
          },
          {
            src: "/new_sub.jpg",
            alt: "The rebuilt Barracuda on its lighter frame, reassembled and ready for its first in-pool test.",
          },
        ],
      },
      {
        heading: "Final Day: A New Barracuda Takes the Water",
        body: [
          "The final day marked the **first in-pool test of Barracuda 2.0**, our rebuilt vehicle, and the results immediately justified the overnight effort. Barracuda 2.0 achieved the expected buoyancy, remained stable throughout the run, and **completed an autonomous gate pass during its very first pool test**.",
          "Watching a vehicle that had existed only as a collection of individual components hours earlier navigate successfully through the course was one of the most rewarding moments of the entire competition. Although our RoboSub journey ended there, the experience reinforced one of the team's greatest strengths: our **willingness to adapt, rebuild, and keep improving** even under extreme time pressure.",
        ],
        image: "/team-group-photo.jpg",
        imageAlt: "The USC AUV team gathered around the rebuilt Barracuda at the end of the competition.",
      },
      {
        heading: "Looking Ahead",
        body: [
          "Reaching the **Autonomy Challenge Semi-Finals** was only one measure of success. The real achievement was watching Barracuda, and our team, grow throughout the week. We learned to diagnose failures quickly under competition pressure, coordinate software and hardware development efficiently, adapt to unexpected competition requirements, validate engineering decisions with real-world testing, and trust the engineering process built over months of pool work.",
          "Every successful run was built on dozens of unsuccessful ones. Perhaps the greatest lesson was realizing that **nearly every challenge we encountered had already appeared during our spring testing**, because we had seen these problems before, we knew how to investigate them instead of panicking.",
          "As we look toward **RoboSub 2027**, we're taking home far more than a competition result: a lighter and more capable Barracuda, a stronger software stack, a more experienced engineering team, and a deeper understanding of what it takes to build an AUV that can compete at the highest level. **We'll be back next year.**",
        ],
      },
    ],
    highlights: [
      "First fully autonomous gate pass, tether disconnected",
      "DVL misalignment diagnosed and recalibrated poolside",
      "Full overnight rebuild onto a lighter frame",
      "Advanced to Autonomy Challenge semi-finals",
    ],
    statusLabel: "KEY OUTCOMES",
    statusItems: [
      "Passed the autonomous gate",
      "Ran fully tether-free with a T10 enclosure",
      "Qualification (autonomous gate pass)",
      "Rebuilt Barracuda onto a lighter frame",
    ],
    readNote:
      "The Autonomy Challenge Semi-Finalist finish is USC AUV's best recent RoboSub result. Next stop: RoboSub 2027, with a lighter Barracuda and a stronger software stack.",
    quickNote:
      "This competition log recaps RoboSub 2026 at the Woollett Aquatics Center in Irvine, CA, five days of poolside engineering, an overnight rebuild, and a semi-finals run.",
  },
  {
    slug: "vlm-vs-yolo-underwater",
    series: "software-research",
    title: "Can a Vision-Language Model See Our Isaac Sim Course Better Than YOLO?",
    excerpt:
      "We gave two open vision-language models an eye exam: 397 synchronized camera frames from a full autonomous mission in Isaac Sim. Here is what they could see once nobody whispered YOLO's answers to them.",
    date: "October 2026",
    readTime: "8 min read",
    category: "Research",
    author: "Isabella Wu",
    image: "/research-vlm-gate-sign.jpg",
    headline: ["VLM", "VS", "YOLO"],
    byline: "Written by Isabella Wu, Software Co-lead, October 15, 2026.",
    summary:
      "Vision-language models (VLMs) can look at a camera image and tell you about it in plain language, and recent research has handed them the planning for underwater robots. So we asked the obvious question: could one tell us something our YOLO detector can't, like that a sign is half hidden, that we're lined up on the wrong opening, or that a task the robot called finished never happened? We ran four tests over the same 397 simulated frames. Neither an 8-billion nor a 30-billion-parameter open model found the course objects reliably once we stopped showing it YOLO's detections, and the bigger model did not close the gap.",
    details: [
      { label: "Frames", value: "397 (sim)" },
      { label: "Models", value: "Qwen3-VL 8B, 30B" },
      { label: "Hardware", value: "RTX 4090" },
    ],
    sections: [
      {
        heading: "Backstory",
        body: [
          "Start with what Barracuda already does. The ZED stereo camera feeds a YOLO object detector, the detections become 3D landmarks in our factor-graph state estimator, and a behavior tree plans each task for an MPPI controller to fly.",
          "A bounding box is good at one question: what is in the frame, and where? Ask it anything harder and it goes quiet. Is the gate half hidden behind a pipe? Are we lined up with the wrong opening? Did the task the behavior tree just checked off actually happen? A human operator answers those at a glance. YOLO can't answer them at all.",
          "This study started with a paper: [UnderwaterVLA](https://arxiv.org/abs/2509.22441) [1], a dual-brain vision-language-action architecture for underwater navigation. A large \"brain\" model looks at the scene and breaks the mission into sub-goals; a smaller onboard \"cerebellum\" model reads each camera frame and answers in a fixed format: which way to move, how fast, and whether the current step is done. That last part caught our attention. Small, structured answers from a vision model, including a plain \"step done\" flag, could sit on top of a robot that already works instead of replacing it.",
          "We adapted the idea rather than copying it, for two reasons. At RoboSub the vehicle runs untethered and fully autonomous, with no link to an outside computer, so any vision model has to fit onboard. And Barracuda already plans and controls well with a behavior tree and MPPI, so the interesting question was never whether a VLM can drive. It was whether it can see. That is the claim we tested: does an onboard-sized VLM see our course well enough to trust with any of these judgments? (The paper's \"step done\" flag became our task-completion check, further down.)",
        ],
      },
      {
        heading: "Project Description",
        body: [
          "Think of this as an eye exam. Before you let anyone advise the pilot, you check their eyesight. Our hypothesis was that a VLM could add scene-level judgments on top of YOLO, as an advisor at the behavior tree's decision points and never inside the control loop. To earn that job, it had to pass three tests:",
          "**1. It sees the course on its own.** Nobody reads the chart for it. Without YOLO's list, it should still report the gate elements and signs that YOLO finds.",
          "**2. What it adds is true.** When it says something is hidden, out of reach, or dangerous, the frame should agree.",
          "**3. It answers in time.** A few seconds is fine at a decision point. Inside a control loop, a few seconds is a crash.",
        ],
        image: "/research-vlm-isaac-scene.webp",
        imageAlt:
          "Isaac Sim viewport showing the Barracuda vehicle in front of the start gate, with red and black gate legs, two role signs, and a rocky channel beyond.",
      },
      {
        heading: "Method",
        body: [
          "**1. Record synchronized frames and detections.** We flew Barracuda's full autonomy stack through Isaac Sim: find the gate, pass through it, try the slalom, come home through the gate. A small ROS 2 recorder held camera frames by timestamp and matched each YOLO detection message to the frame with exactly the same stamp (easy, because our detector copies the image header onto its output). Frames where YOLO saw nothing stayed in as negatives. One mission gave us 397 frames at about 2 frames per second.",
          "**2. Ask for an answer you can grade.** For every frame the model had to return one JSON object: each visible object with its visibility (visible, partially occluded, or not visible), whether it could be reached from the current heading, and where it sat in the image, plus relations like \"approaching the wrong side of the gate\" and any hazards nearby. An answer that didn't parse counted as unusable. A behavior tree can't act on a nice paragraph.",
          "**3. Test two model sizes, locally.** We used Qwen3-VL at 8 billion parameters and a 30-billion-parameter mixture-of-experts version that wakes up about 3 billion of them per answer, both squeezed to 4-bit and served on the team's RTX 4090. Local mattered: a submerged vehicle can't phone a data center.",
          "**4. Run every model prompted and blind.** This is the cover-one-eye part of the exam. Both conditions sent the same image, the same task (\"gate traversal\"), the same list of allowed object names, and the same answer format. The prompted condition added one line: YOLO's detections for that frame, with each object's confidence and rough position. For the frame at the top of this post it read: Object detector output: gate (score 0.19, center); search_rescue (score 0.68, center). That is how you would deploy it. The blind condition left the line out, so the model had to find everything itself. Compare the two and you learn what the model sees versus what it was told.",
          "**The VLM never controlled the vehicle.** YOLO, the behavior tree, and the controller flew Barracuda the whole mission, exactly as they do in competition. The VLM only answered questions about the recorded frames afterward, so these results grade its eyesight, not Barracuda's performance.",
        ],
      },
      {
        heading: "Results",
        body: [
          "Each row is one run over the same 397 frames. \"Found by both\" counts objects that YOLO and the VLM both reported in the same frame.",
          "**The prompted model was mostly repeating YOLO.** Here is the habit to watch for: seeing high agreement and calling it understanding. With YOLO's list in the prompt, the 8B model agreed with YOLO on 197 labels. Cover the hint and agreement fell to 43. Most of that agreement was the model reading the answer key.",
          "**On their own, neither model found the course objects.** YOLO spotted the gate's role signs in 45 frames. Blind, the 8B model found them in 2 and the 30B model in none. Instead, both described the room: pool wall, water surface, floor. Accurate, as far as it goes. Not what we asked.",
          "**A bigger model did not close the gap.** The 30B model copied YOLO less and reported spurious hazards about half as often, which is something. Blind, though, it found even fewer course objects, and most of its unusable answers put objects at positions our format doesn't allow, like \"top-left\". Bigger models, it turns out, also color outside the lines.",
          "**Latency rules out the control loop.** Three to four seconds per frame on a desktop RTX 4090, and slower still on the vehicle's embedded computer. That's fine for an occasional question at a decision point. It's useless for steering.",
        ],
        table: {
          after: 0,
          columns: ["Run", "Usable answers", "Sec / frame", "Found by both", "VLM only", "YOLO only", "Role signs (YOLO: 45)"],
          rows: [
            ["8B, prompted with YOLO", "92%", "3.75", "197", "47", "8", "46"],
            ["8B, blind", "61%", "4.33", "43", "288", "63", "2"],
            ["30B, prompted with YOLO", "60%", "3.61", "70", "268", "99", "19"],
            ["30B, blind", "54%", "3.37", "21", "313", "54", "0"],
          ],
          highlightRow: 3,
        },
        chart: {
          after: 1,
          title: "Labels found by both YOLO and the VLM",
          max: 197,
          series: [
            { name: "Prompted with YOLO's list", color: "var(--text-secondary)" },
            { name: "Blind", color: "var(--terminal-amber)" },
          ],
          groups: [
            { label: "8B", values: [197, 43] },
            { label: "30B", values: [70, 21] },
          ],
        },
        comparison: {
          after: 2,
          items: [
            {
              src: "/research-vlm-gate-sign.jpg",
              alt: "Simulated frame near the gate: a red and black gate leg with the Search and Rescue (SOS) role sign above it, and the channel with slalom pipes beyond.",
              caption: "YOLO found the gate and the SOS sign here. The 30B model, running blind, reported neither.",
            },
          ],
        },
      },
      {
        heading: "What the Hazards Really Were",
        body: [
          "Both models kept reporting a tether and a diver near the vehicle. Our first reaction was \"hallucination.\" Then we actually looked at the frames, which is always the better move.",
          "The \"tether\" is a real rope lying on the channel floor, so that one is fair. The \"diver\" is Barracuda's own shadow, frame and thrusters included. Neither answer came from nowhere. But picture a planner that trusts \"diver on the left, not reachable\": it would spend the whole run politely avoiding its own shadow.",
          "There is a second culprit, and it's us. The prompt asked for \"hazards such as walls, the surface, tether or divers\", and the model's four most common answers were exactly those four. Examples in a prompt are hints too. Next time, ask for hazards without naming any.",
        ],
        comparison: {
          after: 0,
          items: [
            {
              src: "/research-vlm-tether.jpg",
              alt: "Channel floor with a yellow segmented rope running along it.",
              caption: "\"The tether is visible and poses a hazard.\" A rope on the floor.",
            },
            {
              src: "/research-vlm-shadow.jpg",
              alt: "Pool floor from above with the dark shadow of the vehicle's frame on the left.",
              caption: "\"Near a diver on the left side.\" The vehicle's own shadow.",
            },
          ],
        },
      },
      {
        heading: "Can It Tell When a Task Is Done?",
        body: [
          "Our behavior tree decides a task is complete from waypoints and time budgets, and now and then it's wrong. In this simulated mission, Barracuda went through the gate on the way out, just as it did autonomously to qualify at RoboSub 2026. The miss came on the last leg, return home: the simulated vehicle ended up against the channel wall, short of the gate, while the log cheerfully reported success.",
          "So we tried the VLM as a second pair of eyes, with one yes-or-no question at the end of each task: did the vehicle pass through the gate? Shown only the last six frames (about four seconds of footage), the 8B model said \"done\" with 95% confidence before the vehicle had even reached the gate. Spreading nine frames across the whole task fixed that false alarm. On the outbound gate pass, though, which the vehicle did complete, the best it could manage was \"can't tell.\" From a forward camera, a pass looks like the gate growing and then sliding out of frame, and the model never put that story together.",
          "The footage did catch the false success. The model just couldn't be the one to call it, and that finding is now shaping how our mission planner decides a task is done.",
        ],
        inlineImages: [
          {
            after: 0,
            src: "/research-vlm-return-strip.jpg",
            alt: "Four frames from the last 20 seconds of the return trip: the vehicle turns into the channel wall until the camera is pressed against the rock and the picture goes dark.",
          },
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "**What we found.** On its own, a VLM that fits on our hardware could not reliably find the gate and its signs, and going from 8 to 30 billion parameters did not help. It mostly agreed with YOLO when we showed it YOLO's answers, and it was 95% sure of answers that were wrong. Recording the mission did surface one real problem, though: our mission planner reported a task as finished when it wasn't.",
          "**How we're using it.** Four changes come out of this study:",
          "**1. YOLO stays Barracuda's eyes.** Instead of adding a VLM, we're putting that effort into YOLO itself, starting with more training images of the gate from behind, which the vehicle sees on its way home.",
          "**2. Missions get a second check from the camera.** The recorder we built saves every camera frame with YOLO's detections, so after a run we can see what the vehicle actually saw. That is how we caught the false \"finished\", and we're now changing how the planner decides a task is done.",
          "**3. Every new AI model takes the same test.** The recorded frames, the scoring, and the blind runs are reusable. Any model we consider in the future gets tested on the same frames, with and without hints, before it goes anywhere near the vehicle.",
          "**4. The next round uses real water.** We will check frames by hand instead of comparing against YOLO, repeat the test on real pool footage, and try again when models trained on underwater images become available.",
        ],
      },
      {
        heading: "References",
        body: [
          "[1] Z. Wang, Y. Zhu, Y. Yan, X. Tian, X. Shao, M. Li, W. Li, G. Su, W. Cui, and D. Fan, \"UnderwaterVLA: Dual-brain Vision-Language-Action architecture for Autonomous Underwater Navigation,\" arXiv:2509.22441, 2025. [arxiv.org/abs/2509.22441](https://arxiv.org/abs/2509.22441)",
          "[2] Qwen Team, Qwen3-VL vision-language models. [github.com/QwenLM/Qwen3-VL](https://github.com/QwenLM/Qwen3-VL)",
          "[3] RoboNation, RoboSub 2026 Team Handbook. [robonation.org/programs/robosub](https://robonation.org/programs/robosub/)",
        ],
      },
    ],
    highlights: [
      "Prompted with YOLO's answers, the VLM mostly repeated them",
      "Blind, neither model found the gate's role signs",
      "A 4x larger model did not see the course better",
      "\"Diver\" was the vehicle's own shadow; \"tether\" was a real rope",
      "Sim footage caught a false \"complete\" on the return leg",
    ],
    quote: "If you show a model a hint, you have to test it without the hint too.",
    statusLabel: "AT A GLANCE",
    statusItems: [
      "397 synchronized frames from one full mission",
      "2 model sizes, 4 runs, prompted and blind",
      "0 role signs found blind by the 30B model",
      "3 to 4 seconds per frame on an RTX 4090",
    ],
    readNote:
      "More research notes from the USC AUV software team are on the way, from perception and state estimation to autonomy.",
    quickNote:
      "Software Research notes share what our software team tests on Barracuda, including the ideas that don't work out.",
  },
  {
    slug: "ai-supervisor-rules-vs-llm",
    series: "software-research",
    title: "Can a Small Language Model Debug Our Sub Faster Than a Rule?",
    excerpt:
      "We built an AI supervisor that watches Barracuda's ROS 2 stack during a wet test and injected fourteen rounds of sensor faults into replayed pool data. The rules found every one in under ten seconds. Here is what the language model added, and what it didn't.",
    date: "October 2026",
    readTime: "9 min read",
    category: "Research",
    author: "Isabella Wu",
    image: "/research-supervisor-terminal.png",
    headline: ["RULES", "VS", "LLM"],
    byline: "Written by Isabella Wu, Software Co-lead, October 29, 2026.",
    summary:
      "Pool time is the scarcest thing we have, and most of it goes to one person squinting at terminal output while the sub drifts. Recent work has put large language models in that chair: an agent that reads the robot's topics and logs and tells you what broke. I wanted to know whether a model small enough to run without internet could do that for Barracuda, so we built the supervisor, replayed real wet-test data with faults injected on top, and scored a local 8-billion-parameter model against a page of plain rules. The rules caught every fault in 7 to 10 seconds with no false alarms. The model caught none on its own. Once pointed at the fault it explained it well, and the work of getting it there taught us more about our own sensors than about the model.",
    details: [
      { label: "Runs", value: "14 (replayed pool data)" },
      { label: "Model", value: "Qwen3 8B, local" },
      { label: "Rule detection", value: "7 to 10 s" },
    ],
    sections: [
      {
        heading: "Backstory",
        body: [
          "A wet test looks like this. The sub is in the water, the mission is armed, and something is off: the estimate drifts, the depth hold hunts, a task times out. One of us opens a terminal and starts the ritual. `ros2 topic hz` on the DVL. `ros2 topic echo` on the IMU. Scroll the estimator log. Check whether the Jetson's disk filled up again. Ten minutes later we know it was the DVL driver hanging, which it has done before, and which is written down in a Notion page nobody opened poolside.",
          "That ritual is the job we wanted to automate. Not the driving: Barracuda already plans and controls itself with a behavior tree and an MPPI controller. The watching. Projects like NASA JPL's ROSA [1] wrap a language model around the ROS 2 command line so you can ask the robot what is wrong in plain English. The pitch is appealing: an agent that reads the live graph, remembers every past failure, and names the fix before the operator finishes typing.",
          "Two constraints shaped our version. At competition the vehicle is untethered, so anything that runs during a mission has to fit onboard and work without internet. And during a wet test the operator has a laptop and maybe a weak hotspot, so a local model is the realistic fallback. Before promising either, we wanted the same thing we wanted from the vision-language model study: a test the model could fail.",
        ],
      },
      {
        heading: "Project Description",
        body: [
          "The supervisor is a small Python program with four layers. A **snapshot** probes the running stack with read-only ROS 2 commands: which topics exist, how fast each sensor publishes, what the health flags say, the last lines of the launch log, free disk. A page of **rules** turns a snapshot into findings, each with its evidence and a one-line next step. A **playbook** of past failures, written as plain Markdown, is searched for entries that match. And an optional **model** gets all of that and writes a paragraph: what it thinks happened, what to do, and which playbook entry it believes applies.",
          "A fifth piece exists but was not under test: a short list of recovery actions the supervisor is allowed to suggest, like resuming a paused driver or bringing the DVL's network link up. Every one is dry-run by default and needs a typed yes. Nothing in the program can reach a thruster, a wrench topic, or the kill switch, and a unit test checks that stays true.",
          "To earn a place in the loop, the model had to pass three tests, the same shape as last time:",
          "**1. It finds a fault on its own.** Shown a snapshot with the rule layer blinded, it should notice what is wrong.",
          "**2. What it adds is true and useful.** When the rules have already named the fault, its explanation and recommended action should point at the sensor that failed, not at whatever is loudest.",
          "**3. It answers in time.** A pool slot is measured in minutes. A diagnosis that arrives after the operator has already found the problem is a paragraph, not a diagnosis.",
        ],
      },
      {
        heading: "Method",
        body: [
          "**1. Build a bench from real data.** We replayed a recording from our July 12 wet test (IMU, DVL, and the ping altimeter) into a throwaway ROS 2 container on the team's desktop, with Barracuda's real state estimator running on top. The supervisor watched that container exactly as it would watch the vehicle's.",
          "**2. Inject faults you can grade.** Three kinds, each with a known answer. Pause the DVL replay so the topic goes silent. Capture one sensor message and republish it at full rate while the real stream is paused, so the topic looks alive but every value is frozen. Freeze two sensors at once, which on a real vehicle points at shared power or a shared bus rather than one driver. Each fault was injected while the supervisor ran, and we logged the second it reported.",
          "**3. Score the rules and the model separately.** For the rules: time from injection to the correct finding, and the number of false reports before and after. For the model (Qwen3 at 8 billion parameters [2], served locally with Ollama [3]): did it notice the fault with the rules blinded; once the rules named it, did it name the same sensor, did it recommend acting on that sensor or on something else, and did it pick the right playbook entry. Three attempts per fault, each logged with the exact snapshot the model saw, because a verdict about a model is worthless without the evidence it had.",
          "**4. Change one thing per run.** Fourteen runs, each fixing one problem the previous run exposed, from a probe that missed live publishers to a prompt that let the model ignore a critical finding. The run records are the real output of this project; the headline numbers below are their summary.",
          "**Nothing here touched the vehicle.** The model answered questions about a replay. The bench never published to a control topic, and the running simulation our teammates use on the same machine was left alone.",
        ],
      },
      {
        heading: "Results",
        body: [
          "Each row is one fault family. Rule time is injection to printed finding, including a two-snapshot confirmation that we added after the second run.",
          "**The rules became the detector by run three.** The first snapshot took 37 seconds because it probed topics one at a time; running every probe in one parallel call brought that to about a second, and that speed produced a new problem: a three-second rate window sometimes missed a live publisher and the supervisor cried wolf four times on a healthy IMU. A four-second window and a rule that nothing is reported until two snapshots agree fixed it. From then on, every injected fault was caught in 7 to 10 seconds with no false reports.",
          "**The model detected nothing on its own.** With the rules blinded, we handed it the frozen DVL sample six times. It never mentioned it. Each time it anchored on the estimator's health flag, which was already reading false for an unrelated bench reason, and explained that instead. This is the same habit the vision study found: a model shown a loud, true, irrelevant signal will explain the loud signal.",
          "**As an explainer it went from useless to reliable, in two steps.** With the fault named in its prompt, the model still ignored or denied a frozen depth sensor three times out of three (run 09). Ordering findings by severity and stating plainly that a frozen payload means the sensor has failed brought that to three of three named (run 11), but it kept recommending we look at the estimator rather than restart the sensor driver. The second step was not a prompt change at all. Our playbook search matched entries on single shared words, so the model was being handed pages about ZED depth cameras and phantom landmarks because they contained the word \"depth\". Requiring two shared keywords put the frozen-sensor page first, and the model copied its fix: eight of nine attempts recommended restarting the right driver (run 13). For a small model, retrieval quality is action quality.",
          "**It is slow, and that is the whole story for the control loop.** 40 to 85 seconds per answer, because the desktop's GPU was busy with teammates' jobs and inference fell back to the CPU. The rule that already printed the answer took under ten. On the vehicle's embedded computer, under the full stack, it would be slower still.",
        ],
        table: {
          after: 0,
          columns: ["Fault", "Rule time", "False reports", "Model found it alone", "Model named it once told"],
          rows: [
            ["DVL silent (driver paused)", "63 s, then 9 s", "4, then 0", "Not tested", "Yes"],
            ["DVL frozen at full rate", "8 s", "0", "0 of 6", "4 of 4"],
            ["IMU frozen at full rate", "7 s", "0", "Not tested", "4 of 4"],
            ["Depth frozen at full rate", "7 s", "1, see below", "Not tested", "0 of 3, later 9 of 9"],
            ["DVL and IMU frozen together", "7 s", "0", "Not tested", "4 of 5, shared cause"],
          ],
          highlightRow: 3,
          caption: "Rule times are from the run records; \"then\" and \"later\" entries show the value before and after a fix.",
        },
        chart: {
          after: 3,
          title: "Frozen depth sensor: what the model said once the rule had named it",
          max: 100,
          series: [
            { name: "Named the frozen sensor (%)", color: "var(--text-secondary)" },
            { name: "Recommended acting on that sensor (%)", color: "var(--terminal-amber)" },
          ],
          groups: [
            { label: "Run 09", values: [0, 0] },
            { label: "Run 12", values: [100, 33] },
            { label: "Run 13", values: [100, 89] },
          ],
        },
      },
      {
        heading: "What the False Positive Really Was",
        body: [
          "One finding kept coming back that we could not explain. Twice, with only the DVL frozen, the supervisor reported the depth sensor frozen too. We tightened the detector (every message in the window identical, at least five of them) and it still happened. So we stopped guessing and read the recording itself.",
          "It is worth pausing on what was hiding in plain sight. Our ping altimeter holds one reading for a long time. In the July 12 bag, the longest run of identical depth messages is 1,237 in a row, about 41 seconds, and 14% of all five-message windows are identical. The sub was sitting over a flat pool floor. There is nothing wrong with the sensor; a stuck altimeter and a stationary sub look exactly the same from the outside. We had walked past that fact for ten runs because our earlier belief, that the altimeter \"never repeats more than two readings\", had been measured on a moving stretch. It was wrong.",
          "The honest fix was to stop judging depth by its payload alone. Then we asked what would make it judgeable, and the answer was already in the snapshot: the DVL's vertical velocity. If the DVL says the sub moved five centimeters up or down in a two-second window and the altimeter reading did not change at all, the altimeter is stuck. Checked offline against 439 windows of the real recording, that rule fired zero times on healthy data at 3, 5, and 10 centimeters, and 31% of windows carried enough motion to judge. One more exclusion was needed: readings pinned at the sensor's minimum range (13% of the bag, the sub hugging the floor) are saturation, not a fault.",
          "On the bench the cross-check reported a frozen altimeter 30 and 69 seconds after injection, each time at the first descent, held the finding until the real reading moved again, and cleared 20 seconds after it did. The limit is stated rather than hidden: a sub holding depth gives the rule nothing to check against, and it says nothing rather than guess. On a mission, the descent at the start of every run is the natural test.",
        ],
      },
      {
        heading: "Can It Pick the Right Page in the Playbook?",
        body: [
          "The playbook is the part of this project with the most reuse: a Markdown file, one entry per failure we have actually had, with symptoms, cause, fix, and where it happened. The model is asked to name which entry applies. For most of the fourteen runs it named the wrong one, and the logs showed why. Our search was keyword overlap, and a frozen-depth finding pulled in three unrelated entries on the word \"depth\". The model then echoed one of them. Retrieval noise became model noise.",
          "Two changes fixed what could be fixed. Retrieval now needs two shared keywords, which kept the genuine matches and dropped the one-word accidents. And the model's answer is checked in code: a title it was never shown is moved to a rejected field and the match set to null, so the field can be wrong but it can no longer invent. The last run showed the ceiling of that check. For two frozen sensors the model twice picked \"DVL topic silent\", an entry that was legitimately among the candidates because it shares the words \"power\" and \"bring-up\". The validator accepted it, correctly. That is a judgment error, and the right place for it is in plain view, not patched over.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "**What we found.** For the faults we can inject, a page of deterministic rules is the detector: 7 to 10 seconds, zero false alarms after the second run, and every finding comes with its evidence and a next step. A local 8-billion-parameter model found nothing on its own and answered 40 to 85 seconds after the rule had. Once the rule named the fault and retrieval handed it the right page, it explained the fault well and recommended the right action eight times in nine, and it reasoned to a shared cause for two frozen sensors unprompted. The thing we learned most from was neither: it was our own altimeter, which repeats readings for 40 seconds at a time, and the cross-check that fact forced us to build.",
          "**How we're using it.** Four changes come out of this study:",
          "**1. The rules go in the loop at the next wet test.** The supervisor runs on the operator's laptop against the vehicle's container for the whole session, logging every snapshot. The first thing we learn is what a healthy mission reads as; the second is what a real fault reads as.",
          "**2. The model stays optional, and off the detection path.** It is the paragraph under the finding, not the finding. Whether a stronger model changes that is the next experiment, and it runs on the recorded snapshots without any hardware.",
          "**3. Every fault we see becomes a playbook entry and a replayable test.** The injected faults from this study are scripts now. A real failure at the pool gets written up the same day and injected on the bench the same week.",
          "**4. Sensors get cross-checked against each other, not just against themselves.** The depth-versus-DVL rule is the first. The estimator's own logs, which say in words why it is withholding output, are the next source we will read.",
          "The principle underneath all four is the one we keep relearning: put the model where it can be checked, not where it has to be trusted. A rule that fires in ten seconds with its evidence attached can be wrong in a way you can see. A paragraph that arrives a minute later can be wrong in a way you cannot, unless the finding it explains is already on the screen. Detect with what you can read. Explain with what you can verify.",
        ],
      },
      {
        heading: "References",
        body: [
          "[1] NASA Jet Propulsion Laboratory, ROSA: the Robot Operating System Agent. [github.com/nasa-jpl/rosa](https://github.com/nasa-jpl/rosa)",
          "[2] Qwen Team, Qwen3 and Qwen3-VL open models. [github.com/QwenLM/Qwen3-VL](https://github.com/QwenLM/Qwen3-VL)",
          "[3] Ollama, local model serving. [github.com/ollama/ollama](https://github.com/ollama/ollama)",
          "[4] RoboNation, RoboSub 2026 Team Handbook. [robonation.org/programs/robosub](https://robonation.org/programs/robosub/)",
        ],
      },
    ],
    highlights: [
      "Rules caught every injected fault in 7 to 10 seconds, zero false alarms after run two",
      "The local model found nothing on its own and took 40 to 85 seconds to answer",
      "Pointed at the fault, it named the right sensor 9 of 9 times",
      "Fixing the playbook search did more for its advice than any prompt change",
      "Our altimeter repeats one reading for 41 seconds; the sub was just sitting still",
    ],
    quote: "The rule finds it in ten seconds. The model writes the paragraph. Read the paragraph later.",
    statusLabel: "AT A GLANCE",
    statusItems: [
      "14 runs on replayed July 12 pool data",
      "5 fault families, 3 model attempts each",
      "7 to 10 seconds from fault to finding",
      "0 false fires on 439 windows for the depth cross-check",
    ],
    readNote:
      "More research notes from the USC AUV software team are on the way, from perception and state estimation to autonomy.",
    quickNote:
      "Software Research notes share what our software team tests on Barracuda, including the ideas that don't work out.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export type BlogSeries = {
  slug: string;
  label: string; // small caps label on the blog index card
  title: string;
  description: string; // card excerpt and series page intro; keep the three similar in length
};

// One card on /blog and one page at /blog/series/<slug> per series. Add a post by
// giving it one of these slugs as its `series`.
export const blogSeries: BlogSeries[] = [
  {
    slug: "development-2026",
    label: "DEVELOPMENT BLOG 2026",
    title: "Development Blog 2026",
    description:
      "Milestone-by-milestone from dry-dock to full-system pool operations: how software, electrical, and mechanical came together across the spring wet tests.",
  },
  {
    slug: "robosub-2026",
    label: "ROBOSUB 2026 COMPETITION",
    title: "RoboSub 2026 Competition Blog",
    description:
      "Five days at the Woollett Aquatics Center in Irvine: pool-deck problem-solving, an overnight rebuild, and a run into the Autonomy Challenge semi-finals.",
  },
  {
    slug: "software-research",
    label: "SOFTWARE RESEARCH",
    title: "Software Research",
    description:
      "Experiments from the software subteam, measured and written up. First up: can an open vision-language model see our Isaac Sim course better than YOLO?",
  },
];

export function getSeries(slug: string): BlogSeries | undefined {
  return blogSeries.find((series) => series.slug === slug);
}

export function postsInSeries(slug: string): BlogPost[] {
  return blogPosts.filter((post) => post.series === slug);
}
