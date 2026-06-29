/* =========================================================================
   DIAGNOSTIQS — SITE CONTENT
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
  /* Renders as name + accent: "Diagnosti" + "QS" = DiagnostiQS */
  brand: { name: "Diagnosti", accent: "QS" },

  /* ---- Top navigation ---- */
  nav: [
    { label: "Technology",   href: "#technology" },
    { label: "Instruments",  href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Company",      href: "#company" },
  ],
  navCta: { label: "Request a demo", href: "#contact" },

  /* ---- Hero (the big first screen) ---- */
  hero: {
    kicker: "NV-diamond quantum sensing — est. 2024",
    titleTop: "Quantum diagnostics,",
    titleAccent: "powered by diamond.",
    lead:
      "DiagnostiQS builds medical instruments around a single quantum sensor: " +
      "the nitrogen-vacancy center in diamond. It detects the body's faint " +
      "magnetic signals at room temperature — no cryogenics, no shielded room, " +
      "no contact required.",
    actions: [
      { label: "See the instruments", href: "#products",   style: "primary" },
      { label: "How it works",        href: "#technology", style: "ghost" },
    ],
    stats: [
      { value: "1",   unit: "pT/√Hz", label: "Magnetic sensitivity" },
      { value: "22",  unit: "°C",     label: "Operates at room temp — no cryogens" },
      { value: "<1",  unit: "mm",     label: "Diamond sensor footprint" },
    ],
  },

  /* ---- Trust bar ---- */
  trust: {
    label: "Working with hospitals, diagnostic labs, and research centers",
    logos: [
      "Cardiac Centers",
      "Clinical Labs",
      "Academic Hospitals",
      "Biotech R&D",
      "Medical Imaging",
    ],
  },

  /* ---- Technology — all NV-diamond ---- */
  technology: {
    index: "01",
    kicker: "The technology",
    title: "One sensor: the nitrogen-vacancy center in diamond.",
    sub:
      "We engineer atomic defects into synthetic diamond. Each defect is a " +
      "quantum sensor whose spin shifts in the presence of a magnetic field — " +
      "and because the reference is an atom, not a manufactured part, it never " +
      "drifts and never needs recalibration.",
    cards: [
      {
        title: "Atomic defects, engineered",
        body:
          "A nitrogen atom beside a vacancy in the carbon lattice forms a " +
          "single quantum system. We grow diamond with these centers placed " +
          "by the billion for maximum signal.",
      },
      {
        title: "Room-temperature & solid-state",
        body:
          "No liquid helium, no vacuum chamber, no magnetic shielding. The " +
          "sensor is a chip of diamond — rugged enough to sit at the bedside " +
          "or inside a benchtop instrument.",
      },
      {
        title: "Optical spin readout",
        body:
          "A green laser initializes the spin; microwaves probe it; the red " +
          "fluorescence it emits encodes the magnetic field. We read light, " +
          "not voltage — so there is nothing to drift.",
      },
    ],
    steps: [
      { title: "Initialize", body: "A green laser polarizes the NV centers into a known spin state." },
      { title: "Interrogate", body: "Microwaves drive the spin; the magnetic field shifts its resonance." },
      { title: "Read out",    body: "Red fluorescence intensity reports the spin state, optically." },
      { title: "Deliver",     body: "Calibrated magnetic-field values, streamed continuously and drift-free." },
    ],
  },

  /* ---- Instruments — every product is NV-diamond ---- */
  products: {
    index: "02",
    kicker: "The instruments",
    title: "Three diagnostic instruments. One diamond core.",
    items: [
      {
        tag: "Neural",
        name: "Cortex",
        desc:
          "Wearable magnetoencephalography. Maps the brain's magnetic activity " +
          "with sensors that move with the patient — no shielded room.",
        featured: false,
        specs: [
          { k: "Sensitivity", v: "200 fT/√Hz" },
          { k: "Channels",    v: "64" },
          { k: "Wearable",    v: "Yes" },
          { k: "Shielding",   v: "Lightweight" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
      {
        tag: "Cardiac",
        name: "Cardia",
        desc:
          "Magnetocardiography at the bedside. Maps the heart's magnetic field " +
          "without electrodes, gels, or a magnetically shielded room.",
        featured: true,
        specs: [
          { k: "Sensitivity", v: "1 pT/√Hz" },
          { k: "Bandwidth",   v: "DC – 1 kHz" },
          { k: "Channels",    v: "32" },
          { k: "Shielding",   v: "None required" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
      {
        tag: "Molecular",
        name: "Assay",
        desc:
          "Chip-scale nuclear magnetic resonance for in-vitro diagnostics — " +
          "molecular fingerprints from picoliter samples, optically detected.",
        featured: false,
        specs: [
          { k: "Sample volume", v: "10 pL" },
          { k: "Detection",     v: "Optical" },
          { k: "Format",        v: "Benchtop" },
          { k: "Recalibration", v: "Never" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
    ],
  },

  /* ---- Applications ---- */
  applications: {
    index: "03",
    kicker: "Where it works",
    title: "Built for signals classical sensors can't hear.",
    items: [
      {
        title: "Cardiac screening without the shielded room",
        body:
          "Magnetocardiography that fits in a clinic — detecting ischemia and " +
          "arrhythmia from the heart's magnetic field, no electrodes attached.",
      },
      {
        title: "Functional brain imaging that moves",
        body:
          "Wearable MEG opens neural recording to children, motion, and the " +
          "bedside — far beyond what fixed, cryogenic scanners allow.",
      },
      {
        title: "Molecular diagnostics on a chip",
        body:
          "NV-NMR reads chemical fingerprints from picoliter samples, bringing " +
          "lab-grade molecular analysis to the point of care.",
      },
      {
        title: "Earlier detection, non-invasively",
        body:
          "Passive magnetic biosignals mean no radiation, no contrast agents, " +
          "and no contact — safe to repeat as often as the diagnosis demands.",
      },
    ],
  },

  /* ---- Mid-page banner ---- */
  banner: {
    title: "The signal is there. Classical sensors just can't hear it.",
    text:
      "The body's magnetic signals are a billion times weaker than a fridge " +
      "magnet. NV-diamond reads them at room temperature, without a shielded " +
      "room — turning a physics breakthrough into a diagnostic instrument.",
    cta: { label: "Talk to our scientists", href: "#contact" },
  },

  /* ---- Company ---- */
  company: {
    index: "04",
    kicker: "The company",
    title: "Physicists and clinicians, building diagnostic instruments.",
    paragraphs: [
      "DiagnostiQS was founded by nitrogen-vacancy researchers and medical-" +
        "device engineers who were tired of watching quantum sensing stay " +
        "locked in the optics lab. We do one thing: NV-diamond sensing for " +
        "medicine — and we do it exceptionally well.",
      "We're a deeptech company at heart: hard physics, long horizons, and a " +
        "bias toward building real instruments that earn their place in the clinic.",
    ],
    values: [
      { title: "Diamond-native", body: "One platform, mastered — NV-diamond sensing, end to end." },
      { title: "Clinic-ready",   body: "Engineered for the bedside, not the optics bench." },
      { title: "Evidence-first", body: "Validated against clinical gold standards, honestly reported." },
    ],
    stats: [
      { value: "2024", label: "Founded" },
      { value: "35+",  label: "Scientists & engineers" },
      { value: "$42M", label: "Series A raised" },
      { value: "9",    label: "Patents filed" },
    ],
  },

  /* ---- Contact ---- */
  contact: {
    index: "05",
    kicker: "Get in touch",
    title: "Tell us what you need to detect.",
    sub:
      "Whether you're running a clinical study or scoping a diagnostic program, " +
      "our team will respond within two business days.",
    interests: [
      "Neural imaging (Cortex)",
      "Cardiac sensing (Cardia)",
      "Molecular diagnostics (Assay)",
      "Research collaboration",
      "Something else",
    ],
  },

  /* ---- Footer ---- */
  footer: {
    tagline: "Quantum diagnostics, powered by diamond.",
    columns: [
      {
        title: "Instruments",
        links: [
          { label: "Cortex — Neural",    href: "#products" },
          { label: "Cardia — Cardiac",   href: "#products" },
          { label: "Assay — Molecular",  href: "#products" },
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
    legal: "DiagnostiQS, Inc. All rights reserved.",
    fine: "This is a demonstration template. Company, specs, and figures are illustrative.",
  },
};
