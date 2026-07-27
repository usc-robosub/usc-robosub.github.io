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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
