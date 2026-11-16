import { BookOpen, Crosshair, Gauge, Shield, Swords, Trophy } from "lucide-react"

export const editorialArticles = [
  {
    title: "Ultimate CS2 FPS Optimization Guide 2026 (Settings & Commands)",
    excerpt: "Competitive advantage starts with a stable frame-time. This practical guide explains how to remove stutter, protect input latency, and build a consistent CS2 setup.",
    icon: Gauge,
    content: "Before changing settings, record your average FPS, one-percent lows, ping, and monitor refresh rate on the same workshop scene. Close overlays, browser tabs, RGB tools, and capture software. Update the GPU driver with a clean installation, then restart. A stable baseline makes every improvement measurable. Use fullscreen, a sensible resolution, and the highest refresh rate your display supports. Keep global shadow quality high enough to read player shadows, but reduce effects and shader detail if your frame-time graph spikes. Enable a consistent power plan, keep the game on an SSD, and avoid thermal throttling. Cap FPS slightly below the value your system can sustain rather than allowing large oscillations. Test the result in a real deathmatch, not only an empty map. Measure one-percent lows, verify refresh rate, disable unnecessary overlays, cap for consistency, and test after every single change. More FPS is useful, but stable frame pacing is what your crosshair actually feels.",
  },
  {
    title: "Mirage Mid Connector Smoke Lineups & Tactical Grenades",
    excerpt: "Mirage connector control connects top mid, jungle, and A site. A reliable smoke does more than hide a doorway: it removes a defender's information.",
    icon: Crosshair,
    content: "Stand in a repeatable position near top mid, align the edge of the building with a fixed HUD reference, and throw with the same movement every round. Learn the visual cue rather than memorizing an impossible pixel coordinate. If your lineup depends on a teammate blocking you, it is not a tournament-ready lineup. Early connector smoke is strongest when your team owns mid and can threaten window or short. Delayed smoke is better after a window fight because it blocks the defender's re-peek and lets your lurker cross. Do not throw it before your team is ready to capitalize. A smoke with no follow-up only gives the defender a free timer. Watch for one-way angles, molotov the close corner when needed, and remember that a CT can push through if your team loses mid control. Run the lineup ten times from both sides of the spawn pattern, then repeat it while moving under pressure. Finish with a private server round where a teammate plays window. Utility is valuable when it survives contact with a real opponent.",
  },
  {
    title: "Best CS2 Pro Crosshairs: s1mple, ZywOo and NiKo Settings",
    excerpt: "There is no magical professional crosshair, but there are repeatable design choices. The best crosshair is readable against common surfaces.",
    icon: Crosshair,
    content: "Static crosshairs keep your visual reference fixed while movement and firing change your accuracy. This is preferred by many riflers because it supports disciplined counter-strafing. Dynamic styles can teach new players the spread penalty, but they often become visual noise once fundamentals are established. Green, cyan, and bright yellow are popular because they remain visible over dark interiors. Test your color on Mirage apartments, Ancient temples, and bright skyboxes. An outline can help, but too much thickness turns a precise crosshair into a target marker. Begin with a small four-line static crosshair, modest gap, no center dot, and a thin outline. Adjust only one variable during a deathmatch. If you lose the crosshair while tracking, increase contrast before increasing size. If it covers the model's head, reduce length or thickness. Resolution, monitor scaling, color perception, and role all change the result. Copy a pro as a starting experiment, not a permanent identity. Keep the crosshair that lets you place the first bullet accurately when the round is loud.",
  },
  {
    title: "CS2 Economy Guide: When to Save and When to Buy",
    excerpt: "Rounds are won with money before they are won with aim. Understanding buy thresholds and loss bonuses turns chaotic half-buys into deliberate plans.",
    icon: Trophy,
    content: "Do not decide your purchase from your own balance alone. Add the team's available money, expected loss bonus, and likely next-round weapons. A single player buying an isolated rifle can leave four teammates on pistols and remove the best chance to reset the opponent. A full buy normally protects rifle, armor, and utility quality. A force buy is a calculated attempt to break the opponent's momentum when saving would create a poor future. The important question is not whether a force can win, but what the team does if it loses. A smoke that enables a site execute can be worth more than a second flash thrown without a plan. Assign utility jobs before the round: entry flash, molotov close corner, smoke rotate, and late-round kit. Track whether the team can afford defuse kits and grenades after the opening purchase. Call economy using this round and the next. Sometimes saving preserves a strong buy; sometimes a light buy creates damage and protects the following full buy. Use simple language so every player understands the plan before freeze time ends.",
  },
  {
    title: "Premier Mode Meta: Map Pool Analysis",
    excerpt: "Build a stronger Premier map plan by reviewing comfort, roles, utility needs, attack defaults, defensive rotations, and the way a team learns from its own matches.",
    icon: Swords,
    content: "Map-pool preparation should start with the team's comfort, not a claim that one map is universally best. For each map, identify preferred starting positions, fallback sites, utility jobs, and the calls everyone understands. Review which areas are difficult to retake and which routes give the team reliable information. In a pick-and-ban setting, compare those strengths with the opponent's known tendencies only when reliable match data is available. Avoid treating a short win streak or a single public ranking as proof that a strategy will work for every lineup. On attack, prepare a default that gathers information without spending every grenade, a fast option that punishes a passive defense, and a late-round plan for a blocked route. On defense, define who can help a contested area, what utility signals a rotate, and which player watches for a flank. Give players clear responsibilities but allow calls to change when information changes. After scrims or ranked matches, save rounds that show recurring problems, practice one correction, and update concise notes as roles change. This process remains useful even when the official map pool changes.",
  },
  {
    title: "Understanding Peeker's Advantage and Sub-Tick in CS2",
    excerpt: "Peeker's advantage is a timing and information problem, not an explanation for every missed shot. Learn how movement, reaction time, connection quality, and angle choice shape duels.",
    icon: Swords,
    content: "Both clients send and receive state over a real network, while each player has limited reaction time and must interpret animation, sound, and visual cues. Connection stability, server load, packet loss, angle geometry, and movement all affect what a player perceives. If a shot feels inconsistent, save the demo or note the conditions and look for a repeated pattern before concluding that every lost duel comes from registration. Defenders can reduce uncertainty by varying position, jiggle for information, use off-angles, and build crossfires. Attackers should pre-aim likely head positions, counter-strafe before firing, and use flashes or teammate contact to divide attention. Practice close jiggles, shoulder baits, and committed swings with a friend holding the same angle. Timing and information shape the duel, but preparation gives both sides better choices.",
  },
  {
    title: "Best Loadouts for CT and T Side",
    excerpt: "A competitive loadout supports your role and your team's plan. Choose weapons and utility you can use under pressure rather than treating equipment as a collection of options.",
    icon: Shield,
    content: "Keep a dependable rifle as the default and know the economic alternatives for low-money rounds. Riflers should prioritize armor, a kit when defending, and enough grenades to execute their job. Entries benefit from fast flashes, a smoke that blocks the first sightline, and a molotov for close defenders. Support players should carry the utility that lets the entry survive and create a trade. Discuss who buys what so the team does not stack four identical flashes. An AWP player should communicate the cost of the rifle and avoid demanding a buy that destroys the next round. Anchors can value a kit, incendiary, and a weapon that holds a choke. Adapt to the map rather than forcing one loadout everywhere. Review unused grenades and untraded weapon losses, then adjust one role or purchase habit at a time. The best setup is the one that produces repeatable value for your role.",
  },
  {
    title: "How to Entry Frag Like a Pro",
    excerpt: "Entry fragging is the first contact that defines a round. It combines utility timing, angle discipline, trade spacing, and useful information for teammates.",
    icon: Swords,
    content: "Before entering, clarify the team plan: are you probing for information, committing to a site, or baiting for a trade? Confirm that utility is ready and teammates are positioned to trade or fall back. Enter with your crosshair pre-aimed at a common angle and use a flash only if teammates are holding a secure position behind you. Do not enter blind hoping the team will follow; instead, gather information and report clearly so the team can make a decision. Listen for utility and enemy rotations before you expose yourself. A successful entry generates a kill, information, or a trade; a failed entry with zero information is a mistake. After each round, ask whether your positioning helped the team make a decision or wasted a duel. Entries improve when you combine good utility with predictable movement that allies can support.",
  },
]
