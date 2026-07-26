/* Original diagrams built for this guide (see diagrams.html + Blender/Canva sources under
   assets/). Single source of truth for the Visual Aids gallery, the per-diagram detail page
   (diagram.html), and the inline embed each diagram gets on its matching transcript slide. */
const DIAGRAMS = [
  {
    id: 'fire-triangle',
    icon: '🔥',
    title: 'The Fire Triangle',
    media: { type: 'image', src: 'images/diagram-fire-triangle.png' },
    alt: 'Dark, dramatic illustrated infographic of the fire triangle with photographic circular icons for Heat (flame), Fuel (stacked wood), and Oxygen (blue smoke swirl), each with a labeled explanation.',
    docBase: 'section_02_unit_2_ppt_508',
    slide: 6,
    sectionLabel: 'Section 2 · Fire Safety & Utility Controls',
    short: 'The three elements every fire needs — heat, fuel, and oxygen. Remove any one and the fire goes out.',
    long: 'Every fire needs all three of these at once: enough heat to ignite and sustain combustion, a fuel source to burn, and oxygen to feed the chemical reaction. CERT fire-suppression training builds on this model — a portable extinguisher works by knocking out one side of the triangle (dry chemical and foam smother oxygen, water cools heat, clearing debris removes fuel). If any one side is missing, the fire can\'t start or can\'t continue. Confirm all three are present — and that you\'re only dealing with a small, incipient-stage fire — before considering an extinguisher.',
    sources: [
      { label: 'CERT Basic Training — Section 2, Slide 6', href: 'transcript.html?doc=section_02_unit_2_ppt_508#slide-6' },
      { label: 'Glossary: TRIANGLE, FUEL, HEAT, OXYGEN', href: 'glossary.html' },
      { label: 'FEMA Participant Manual', href: 'companion.html' },
    ],
  },
  {
    id: 'collapse-voids',
    icon: '🏚️',
    title: 'Structural Collapse Voids',
    media: { type: 'image', src: 'images/diagram-collapse-voids.png' },
    alt: 'Colorful, detailed side-view illustration of three structural collapse void types — pancake void, lean-to void, and V-shape void — with concrete slabs and rubble piles.',
    docBase: 'section_05_unit_5_ppt_508',
    slide: 23,
    sectionLabel: 'Section 5 · Light Search & Rescue',
    short: 'A side-view comparison of the three void types searchers look for: pancake, lean-to, and V-shape.',
    long: 'When a structure collapses, survivors are most often found in survivable void spaces — pockets where falling material didn\'t completely crush the space beneath it. CERT search training covers three common shapes: a Pancake Void, where a floor or roof drops flat onto the level below and is held up at the edges by furniture or debris; a Lean-to Void, where one end of a collapsed slab stays supported (by a wall or beam) while the other end drops to the floor, leaving a wedge-shaped gap; and a V-Void, where a slab breaks in the middle and both ends settle downward, meeting near the floor in a V shape. Knowing these shapes tells searchers where to call out, where to listen, and — strictly within CERT\'s scope of light search and rescue — where it may be safe to look further.',
    sources: [
      { label: 'CERT Basic Training — Section 5, Slide 23', href: 'transcript.html?doc=section_05_unit_5_ppt_508#slide-23' },
      { label: 'Glossary: VOID, CRIBBING, DEBRIS', href: 'glossary.html' },
      { label: 'FEMA Participant Manual', href: 'companion.html' },
    ],
  },
  {
    id: 'fire-classes',
    icon: '🧯',
    title: 'The 5 Classes of Fire',
    media: { type: 'video', src: 'media/diagram-fire-classes.mp4', poster: 'media/diagram-fire-classes-poster.png' },
    alt: 'Animated diagram cycling through the five classes of fire — A, B, C, D, and K — each highlighted in turn with its extinguishing considerations.',
    docBase: 'section_02_unit_2_ppt_508',
    slide: 7,
    sectionLabel: 'Section 2 · Fire Safety & Utility Controls',
    short: 'Every fire is classified by what\'s burning — five classes tell you what kind of extinguishing agent to use.',
    long: 'Not every fire is fought the same way — matching the wrong extinguishing agent to the wrong class can make things worse. CERT training breaks fires into five classes by what\'s burning: Class A covers ordinary combustibles like wood, paper, and cloth; Class B covers flammable and combustible liquids such as gasoline and oil; Class C is energized electrical equipment, where a non-conductive agent is essential; Class D covers combustible metals, which need a specialized dry-powder agent rather than water; and Class K covers cooking oils and greases found in kitchens. A portable extinguisher\'s label lists which classes it\'s rated for — check it before you reach for one, and only ever attempt to fight a small, incipient-stage fire that matches your training and equipment.',
    sources: [
      { label: 'CERT Basic Training — Section 2, Slide 7', href: 'transcript.html?doc=section_02_unit_2_ppt_508#slide-7' },
      { label: 'Glossary: FLAMMABLE, PORTABLE, TRIANGLE', href: 'glossary.html' },
      { label: 'FEMA Participant Manual', href: 'companion.html' },
    ],
  },
  {
    id: 'cert-org-chart',
    icon: '🗂️',
    title: 'CERT Team Command Structure',
    media: { type: 'video', src: 'media/diagram-org-chart.mp4', poster: 'media/diagram-org-chart-poster.png' },
    alt: 'Animated organizational chart building from the top down: Incident Commander/Team Leader, Command Post, then expanding into Fire Suppression, Medical, and Search & Rescue teams.',
    docBase: 'section_06_unit_6_ppt_508',
    slide: 8,
    sectionLabel: 'Section 6 · CERT Organization',
    short: 'A simple, flexible command structure led by an Incident Commander/Team Leader that expands only as needed.',
    long: 'When a CERT team activates, it needs a clear, simple chain of command — not a rigid one. The team is led by an Incident Commander/Team Leader (IC/TL), who sets up a Command Post to track the situation and coordinate action. From there, the structure expands only as needed to match the size of the incident: CERT\'s own training areas — fire suppression, medical operations, and light search and rescue — become functional teams under the IC/TL when the situation calls for them. This mirrors the same principles used by the Incident Command System (ICS) that professional responders use, scaled down to CERT\'s size and mission, so CERT teams can integrate smoothly once professional help arrives.',
    sources: [
      { label: 'CERT Basic Training — Section 6, Slide 8', href: 'transcript.html?doc=section_06_unit_6_ppt_508#slide-8' },
      { label: 'Glossary: NIMS, COMMAND, LOGISTICS, SPAN, RESOURCES', href: 'glossary.html' },
      { label: 'FEMA Participant Manual', href: 'companion.html' },
    ],
  },
  {
    id: 'phases-of-crisis',
    icon: '🌀',
    title: 'Phases of a Crisis',
    media: { type: 'video', src: 'media/diagram-phases-of-crisis.mp4', poster: 'media/diagram-phases-of-crisis-poster.png' },
    alt: 'Animated circular diagram rotating through the four phases of a crisis: Impact, Inventory, Rescue, and Recovery.',
    docBase: 'section_07_unit_7_ppt_508',
    slide: 12,
    sectionLabel: 'Section 7 · Disaster Psychology',
    short: 'Survivors and responders move through four emotional phases after a disaster: Impact, Inventory, Rescue, and Recovery.',
    long: 'CERT\'s disaster psychology training describes four phases survivors and responders tend to move through after a traumatic event. Impact is the moment of the disaster itself and the shock immediately after. Inventory follows quickly, as people take stock of what happened, who\'s hurt, and what\'s damaged. Rescue is the active period of helping — searching, treating, and stabilizing others, often running on adrenaline. Recovery is the longer process afterward, working through the emotional and physical aftermath. Recognizing which phase a survivor — or a fellow CERT member — is in helps responders know what kind of support is actually useful in the moment.',
    sources: [
      { label: 'CERT Basic Training — Section 7, Slide 12', href: 'transcript.html?doc=section_07_unit_7_ppt_508#slide-12' },
      { label: 'Glossary: REHAB, STRESS, BUDDY', href: 'glossary.html' },
      { label: 'FEMA Participant Manual', href: 'companion.html' },
    ],
  },
];

/* Shared media renderer: image <img> or looping muted <video>, honoring prefers-reduced-motion
   by falling back to a paused, user-controlled player instead of autoplay. */
function diagramMediaHtml(d, cssClass){
  const cls = cssClass ? ` class="${cssClass}"` : '';
  if (d.media.type === 'video'){
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const attrs = reduceMotion ? 'controls' : 'autoplay loop muted playsinline';
    return `<video${cls} ${attrs} poster="${d.media.poster}" preload="metadata">
      <source src="${d.media.src}" type="video/mp4"></video>`;
  }
  return `<img${cls} src="${d.media.src}" alt="">`;
}
