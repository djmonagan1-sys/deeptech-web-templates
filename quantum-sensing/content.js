/* =========================================================================
   LATTICE QUANTUM — SITE CONTENT
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website's words,
   numbers, links, and lists. Save it and refresh the page — everything
   re-renders from here. No build step, no HTML editing.

   Tips:
   • Text in "quotes" — just change what's between the quotes.
   • Lists are wrapped in [ square brackets ]; copy a { ... } block to add
     another card / product / stat, or delete one to remove it.
   • Keep the commas. Each item ends with a comma.
   • Colors and fonts live in css/styles.css under ":root" (see README).
   ========================================================================= */

window.SITE = {
  /* ---- Brand (appears in the header + footer) ---- */
  brand: { name: "Lattice", accent: "Quantum" },

  /* ---- Top navigation ---- */
  nav: [
    { label: "Technology",   href: "#technology" },
    { label: "Products",     href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Company",      href: "#company" },
  ],
  navCta: { label: "Request a demo", href: "#contact" },

  /* ---- Hero (the big first screen) ---- */
  hero: {
    kicker: "Quantum sensing — est. 2024",
    titleTop: "Measure the world",
    titleAccent: "at the quantum limit.",
    lead:
      "Lattice Quantum builds chip-scale sensors that detect magnetic, " +
      "gravitational, and inertial fields with precision once reserved for " +
      "national labs — packaged for the field, the factory, and the operating room.",
    actions: [
      { label: "Explore the platform", href: "#products",   style: "primary" },
      { label: "How it works",         href: "#technology", style: "ghost" },
    ],
    stats: [
      { value: "15",  unit: "fT/√Hz", label: "Magnetic sensitivity" },
      { value: "<8",  unit: "cm³",    label: "Sensor head volume" },
      { value: "72",  unit: "hrs",    label: "Drift-free operation" },
    ],
  },

  /* ---- Trust bar ---- */
  trust: {
    label: "Partnering with teams in defense, energy, and medicine",
    logos: [
      "DARPA-class programs",
      "Subsea Energy",
      "Neuro Imaging",
      "Geospatial Survey",
      "Autonomous Systems",
    ],
  },

  /* ---- Technology ---- */
  technology: {
    index: "01",
    kicker: "The technology",
    title: "Atoms make the best sensors. We made them practical.",
    sub:
      "Our sensors read the quantum state of atoms and engineered defects in " +
      "diamond. Because the reference is a law of nature — not a manufactured " +
      "part — they don't drift, don't need recalibration, and reach " +
      "sensitivities classical electronics can't touch.",
    cards: [
      {
        title: "Optically pumped magnetometry",
        body:
          "Polarized laser light prepares an atomic vapor; tiny magnetic fields " +
          "rotate its spin. We read that rotation to detect fields a billion " +
          "times weaker than Earth's.",
      },
      {
        title: "Nitrogen-vacancy diamond",
        body:
          "Atomic defects in synthetic diamond fluoresce differently under " +
          "magnetic stress. Solid-state, room-temperature, and rugged enough " +
          "for the field.",
      },
      {
        title: "Cold-atom interferometry",
        body:
          "Laser-cooled atoms in free fall form an inertial reference of " +
          "extraordinary stability — gravimetry and navigation that never " +
          "accumulate error.",
      },
    ],
    steps: [
      { title: "Prepare",     body: "Lasers cool and polarize atoms into a known quantum state." },
      { title: "Interrogate", body: "The field of interest perturbs the state in a precisely measurable way." },
      { title: "Read out",    body: "Photodetectors measure the shift; DSP converts it to a calibrated value." },
      { title: "Deliver",     body: "A clean digital stream — no drift, no warm-up, no recalibration." },
    ],
  },

  /* ---- Products ---- */
  products: {
    index: "02",
    kicker: "The platform",
    title: "One quantum core. Three field-ready instruments.",
    items: [
      {
        tag: "Magnetometry",
        name: "Lattice M1",
        desc:
          "A chip-scale optically pumped magnetometer for biomagnetic imaging " +
          "and navigation-grade field mapping.",
        featured: false,
        specs: [
          { k: "Sensitivity",    v: "15 fT/√Hz" },
          { k: "Bandwidth",      v: "DC – 2 kHz" },
          { k: "Head volume",    v: "< 8 cm³" },
          { k: "Operating temp", v: "−20 to 60 °C" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
      {
        tag: "Gravimetry",
        name: "Lattice G2",
        desc:
          "A cold-atom gravimeter delivering absolute, drift-free gravity " +
          "measurements for subsurface mapping and resource exploration.",
        featured: true,
        specs: [
          { k: "Accuracy",         v: "1 µGal" },
          { k: "Repeatability",    v: "0.5 µGal" },
          { k: "Measurement rate", v: "2 Hz" },
          { k: "Recalibration",    v: "Never" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
      {
        tag: "Navigation",
        name: "Lattice N3",
        desc:
          "A quantum inertial measurement unit for assured positioning when " +
          "GPS is denied, jammed, or simply unavailable.",
        featured: false,
        specs: [
          { k: "Drift",     v: "< 5 m / hr" },
          { k: "GPS-free",  v: "Yes" },
          { k: "Interface", v: "MIL-STD-1553" },
          { k: "Endurance", v: "72 hrs" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
    ],
  },

  /* ---- Applications ---- */
  applications: {
    index: "03",
    kicker: "Where it works",
    title: "Built for the problems that defeat classical sensors.",
    items: [
      {
        title: "Brain imaging without the helmet",
        body:
          "Wearable magnetoencephalography that moves with the patient — " +
          "opening functional brain imaging to children, motion, and the clinic.",
      },
      {
        title: "Navigation when GPS goes dark",
        body:
          "Quantum inertial sensing keeps vehicles, vessels, and aircraft on " +
          "course through jamming, tunnels, and the deep ocean.",
      },
      {
        title: "Seeing beneath the surface",
        body:
          "Gravity and magnetic gradiometry reveal aquifers, ore bodies, voids, " +
          "and infrastructure — without breaking ground.",
      },
      {
        title: "Securing critical infrastructure",
        body:
          "Passive magnetic detection of vehicles, vessels, and unmanned systems " +
          "that emit nothing a classical sensor can catch.",
      },
    ],
  },

  /* ---- Mid-page banner ---- */
  banner: {
    title: "The gap between lab and field is where we live.",
    text:
      "We engineer the lasers, photonics, packaging, and firmware that turn a " +
      "physics experiment into an instrument you can deploy on a drone, a ship, " +
      "or a patient.",
    cta: { label: "Talk to our engineers", href: "#contact" },
  },

  /* ---- Company ---- */
  company: {
    index: "04",
    kicker: "The company",
    title: "A team of physicists and engineers, shipping hardware.",
    paragraphs: [
      "Lattice Quantum was founded by atomic-physics researchers and aerospace " +
        "engineers who were tired of watching breakthrough sensing stay locked " +
        "in the lab. We close the loop between quantum science and rugged, " +
        "manufacturable instruments.",
      "We're a deeptech company at heart: hard problems, long horizons, and a " +
        "bias toward building real things that work outside a vacuum chamber.",
    ],
    values: [
      { title: "Physics-first", body: "The reference is nature, not a calibration table." },
      { title: "Field-ready",   body: "If it can't survive a truck bed, it isn't done." },
      { title: "Open by design", body: "Documented APIs and honest specs, always." },
    ],
    stats: [
      { value: "2024", label: "Founded" },
      { value: "40+",  label: "Scientists & engineers" },
      { value: "$48M", label: "Series A raised" },
      { value: "11",   label: "Patents filed" },
    ],
  },

  /* ---- Contact ---- */
  contact: {
    index: "05",
    kicker: "Get in touch",
    title: "Tell us what you need to measure.",
    sub:
      "Whether you're designing a payload or scoping a research program, our " +
      "engineering team will respond within two business days.",
    interests: [
      "Magnetometry (M1)",
      "Gravimetry (G2)",
      "Navigation (N3)",
      "Research collaboration",
      "Something else",
    ],
  },

  /* ---- Footer ---- */
  footer: {
    tagline: "Quantum sensing for the real world.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Lattice M1", href: "#products" },
          { label: "Lattice G2", href: "#products" },
          { label: "Lattice N3", href: "#products" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About",        href: "#company" },
          { label: "Applications", href: "#applications" },
          { label: "Contact",      href: "#contact" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Careers",  href: "#contact" },
          { label: "Press",    href: "#contact" },
          { label: "Partners", href: "#contact" },
        ],
      },
    ],
    legal: "Lattice Quantum, Inc. All rights reserved.",
    fine: "This is a demonstration template. Company, specs, and figures are illustrative.",
  },
};
