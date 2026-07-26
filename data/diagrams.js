/* Original diagrams built for this guide (see diagrams.html + Blender/Canva sources under
   assets/). Single source of truth for the Visual Aids gallery and the inline embed each
   diagram gets on its matching transcript slide. */
const DIAGRAMS = [
  {
    id: 'fire-triangle',
    icon: '🔥',
    title: 'The Fire Triangle',
    img: 'images/diagram-fire-triangle.png',
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
    img: 'images/diagram-collapse-voids.png',
    alt: 'Colorful, detailed side-view illustration of three structural collapse void types — pancake void, lean-to void, and V-shape void — with concrete slabs, exposed rebar, and rubble piles.',
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
];
