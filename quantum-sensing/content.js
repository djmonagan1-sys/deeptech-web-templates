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
    { label: "Product",      href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Company",      href: "#company" },
  ],
  navCta: { label: "Request a demo", href: "#contact" },

  /* ---- Hero (the big first screen) ---- */
  hero: {
    kicker: "NV-diamond quantum sensing — est. 2024",
    titleTop: "Quantum sensing,",
    titleAccent: "powered by diamond.",
    lead:
      "DiagnostiQS builds instruments around a single quantum sensor — the " +
      "nitrogen-vacancy center in diamond. One platform measures magnetic " +
      "fields with extraordinary precision, at room temperature, across " +
      "semiconductor failure analysis, GNSS-denied navigation, and the life sciences.",
    actions: [
      { label: "See the product", href: "#products",   style: "primary" },
      { label: "How it works",        href: "#technology", style: "ghost" },
    ],
    stats: [
      { value: "1",   unit: "pT/√Hz", label: "Magnetic sensitivity" },
      { value: "22",  unit: "°C",     label: "Operates at room temp — no cryogens" },
      { value: "<1",  unit: "µm",     label: "Imaging resolution" },
    ],
  },

  /* ---- Trust bar ---- */
  trust: {
    label: "Working with semiconductor fabs, defense programs, and life-science labs",
    logos: [
      "Semiconductor Fabs",
      "Defense & Aerospace",
      "Pharma & Biotech",
      "National Labs",
      "Autonomous Systems",
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
          "sensor is a chip of diamond — rugged enough for the fab floor, a " +
          "moving vehicle, or a benchtop instrument.",
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

  /* ---- The product — one diamond quantum magnetometer ---- */
  products: {
    index: "02",
    kicker: "The product",
    title: "One instrument. Every hard magnetic measurement.",
    items: [
      {
        tag: "Diamond quantum magnetometer",
        name: "Vector",
        desc:
          "Vector is a 3-axis diamond quantum magnetometer built on " +
          "nitrogen-vacancy centers. One rugged, room-temperature instrument — " +
          "sensitive enough to image current inside a microchip, stable enough " +
          "to navigate without GPS, and clean enough to read the magnetic " +
          "signature of living cells.",
        featured: true,
        specs: [
          { k: "Sensitivity",        v: "1 pT/√Hz" },
          { k: "Configuration",      v: "3-axis vector" },
          { k: "Bandwidth",          v: "DC – 2 kHz" },
          { k: "Imaging resolution", v: "< 1 µm" },
          { k: "Operation",          v: "Room temperature" },
          { k: "Reference",          v: "Atomic — drift-free" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
    ],
  },

  /* ---- Applications — the three focus markets ---- */
  applications: {
    index: "03",
    kicker: "Where it works",
    title: "Three fields. One impossible measurement each.",
    items: [
      {
        title: "Find the fault without destroying the chip",
        body:
          "NV-diamond magnetic imaging maps current paths and pinpoints shorts, " +
          "leakage, and defects buried in packaged devices — non-destructively, " +
          "at the micron scale.",
      },
      {
        title: "Hold course when GPS goes dark",
        body:
          "Quantum magnetometry reads the Earth's magnetic anomalies and platform " +
          "fields to navigate through jamming, spoofing, tunnels, and the deep ocean.",
      },
      {
        title: "Measure biology, magnetically",
        body:
          "Detect cells and label-free biomolecules, and run NMR on picoliter " +
          "samples — magnetic signals that optical and electrical assays miss.",
      },
    ],
  },

  /* ---- Mid-page banner ---- */
  banner: {
    title: "The signal is there. Classical sensors just can't hear it.",
    text:
      "From currents threading a microchip to magnetic anomalies beneath a " +
      "moving vehicle, the fields that matter are vanishingly faint. NV-diamond " +
      "reads them at room temperature — turning a physics breakthrough into a " +
      "deployable instrument.",
    cta: { label: "Talk to our scientists", href: "#contact" },
  },

  /* ---- Company ---- */
  company: {
    index: "04",
    kicker: "The company",
    title: "Physicists and engineers, building quantum instruments.",
    paragraphs: [
      "DiagnostiQS was founded by nitrogen-vacancy researchers and " +
        "instrumentation engineers who were tired of watching quantum sensing " +
        "stay locked in the optics lab. We do one thing — NV-diamond sensing — " +
        "and we build it into instruments for the fields that need it most.",
      "We're a deeptech company at heart: hard physics, long horizons, and a " +
        "bias toward building rugged instruments that work outside a vacuum chamber.",
    ],
    values: [
      { title: "Diamond-native", body: "One platform, mastered — NV-diamond sensing, end to end." },
      { title: "Field-ready",    body: "Engineered for the fab floor, the vehicle, and the lab bench." },
      { title: "Evidence-first", body: "Validated against the measurements that matter, honestly reported." },
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
    title: "Tell us what you need to measure.",
    sub:
      "Whether you're tracing a fault, scoping a navigation payload, or planning " +
      "a study, our team will respond within two business days.",
    interests: [
      "Semiconductor failure analysis",
      "GNSS-denied navigation",
      "Biotech & life sciences",
      "Research collaboration",
      "Something else",
    ],
  },

  /* ---- Footer ---- */
  footer: {
    tagline: "Quantum sensing, powered by diamond.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Vector magnetometer", href: "#products" },
          { label: "Specifications",      href: "#products" },
          { label: "Applications",        href: "#applications" },
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
