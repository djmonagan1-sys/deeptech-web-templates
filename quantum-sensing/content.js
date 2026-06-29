/* =========================================================================
   DIAGNOSTIQS — SITE CONTENT
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website's words,
   numbers, links, and lists. Save it and refresh the page — everything
   re-renders from here. No build step, no HTML editing.

   Tips:
   • Text in "quotes" — just change what's between the quotes.
   • Lists are wrapped in [ square brackets ]; copy a { ... } block to add
     another card / stat, or delete one to remove it.
   • Keep the commas. Each item ends with a comma.
   • Colors and fonts live in css/styles.css under ":root" (see README).
   ========================================================================= */

window.SITE = {
  /* ---- Brand (appears in the header + footer) ---- */
  brand: { name: "Diagnosti", accent: "QS" },

  /* ---- Top navigation ---- */
  nav: [
    { label: "Technology",   href: "#technology" },
    { label: "Product",      href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Company",      href: "#company" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  /* ---- Hero ---- */
  hero: {
    kicker: "Diamond quantum magnetometry",
    titleTop: "Diamond quantum",
    titleAccent: "magnetometers.",
    lead:
      "DiagnostiQS develops quantum magnetometers based on nitrogen-vacancy " +
      "centres in diamond. A single instrument measures magnetic fields at " +
      "room temperature, for semiconductor failure analysis, GNSS-denied " +
      "navigation, and life sciences.",
    actions: [
      { label: "View the product", href: "#products",   style: "primary" },
      { label: "Contact us",       href: "#contact",    style: "ghost" },
    ],
    stats: [
      { value: "1",   unit: "pT/√Hz", label: "Magnetic sensitivity" },
      { value: "22",  unit: "°C",     label: "Operating temperature" },
      { value: "<1",  unit: "µm",     label: "Imaging resolution" },
    ],
  },

  /* ---- Trust bar ---- */
  trust: {
    label: "Working with semiconductor, defence, and life-science organisations",
    logos: [
      "Semiconductor",
      "Defence & Aerospace",
      "Life Sciences",
      "National Labs",
      "Autonomous Systems",
    ],
  },

  /* ---- Technology ---- */
  technology: {
    index: "01",
    kicker: "Technology",
    title: "The nitrogen-vacancy centre in diamond.",
    sub:
      "A nitrogen-vacancy (NV) centre is an atomic defect in diamond whose " +
      "electron spin shifts measurably in a magnetic field. Because the " +
      "reference is an atom, the sensor does not drift and does not require " +
      "recalibration.",
    cards: [
      {
        title: "Atomic defects in diamond",
        body:
          "A nitrogen atom next to a vacancy in the carbon lattice forms a " +
          "single quantum system. Diamond is grown with these centres placed " +
          "in high density for signal.",
      },
      {
        title: "Room-temperature operation",
        body:
          "No liquid helium, vacuum chamber, or magnetic shielding. The sensing " +
          "element is a chip of diamond, suitable for the lab, the field, or an " +
          "instrument enclosure.",
      },
      {
        title: "Optical readout",
        body:
          "A green laser initialises the spin, microwaves probe it, and the red " +
          "fluorescence reports the magnetic field. The measurement is optical, " +
          "not electrical.",
      },
    ],
    steps: [
      { title: "Initialise",  body: "A green laser prepares the NV centres in a known spin state." },
      { title: "Interrogate", body: "Microwaves drive the spin; the magnetic field shifts its resonance." },
      { title: "Read out",    body: "Fluorescence intensity reports the spin state optically." },
      { title: "Output",      body: "Calibrated magnetic-field values, streamed continuously." },
    ],
  },

  /* ---- Product (single instrument) ---- */
  products: {
    index: "02",
    kicker: "Product",
    title: "The Vector magnetometer.",
    items: [
      {
        tag: "Diamond quantum magnetometer",
        name: "Vector",
        desc:
          "Vector is a three-axis diamond quantum magnetometer based on " +
          "nitrogen-vacancy centres. It operates at room temperature without " +
          "shielding or cryogenics, and is configured for current imaging, " +
          "navigation, or laboratory use.",
        featured: true,
        specs: [
          { k: "Sensitivity",        v: "1 pT/√Hz" },
          { k: "Configuration",      v: "3-axis vector" },
          { k: "Bandwidth",          v: "DC – 2 kHz" },
          { k: "Imaging resolution", v: "< 1 µm" },
          { k: "Operation",          v: "Room temperature" },
          { k: "Reference",          v: "Atomic, drift-free" },
        ],
        link: { label: "Request datasheet", href: "#contact" },
      },
    ],
  },

  /* ---- Applications ---- */
  applications: {
    index: "03",
    kicker: "Applications",
    title: "Where Vector is used.",
    items: [
      {
        title: "Semiconductor failure analysis",
        body:
          "Magnetic imaging maps current flow inside packaged chips to locate " +
          "shorts, leakage, and defects without removing the package.",
      },
      {
        title: "GNSS-denied navigation",
        body:
          "Magnetic-anomaly and inertial navigation maintain position when GNSS " +
          "is jammed, spoofed, or unavailable.",
      },
      {
        title: "Life sciences",
        body:
          "Magnetic detection of cells and biomolecules, and NV-NMR from small " +
          "sample volumes.",
      },
    ],
  },

  /* ---- Call-to-action band ---- */
  banner: {
    title: "Request a datasheet or a demonstration.",
    text:
      "Tell us about your measurement and we will follow up within two business days.",
    cta: { label: "Contact us", href: "#contact" },
  },

  /* ---- Company ---- */
  company: {
    index: "04",
    kicker: "Company",
    title: "About DiagnostiQS.",
    paragraphs: [
      "DiagnostiQS develops quantum magnetometers based on nitrogen-vacancy " +
        "centres in diamond. The company was founded in 2024 by NV-diamond " +
        "researchers and instrumentation engineers.",
      "We focus on a single sensing technology and build it into instruments " +
        "for semiconductor, navigation, and life-science applications.",
    ],
    values: [
      { title: "Single platform",   body: "One sensing technology, developed end to end." },
      { title: "Room-temperature",  body: "No cryogenics or magnetic shielding required." },
      { title: "Documented",        body: "Published specifications and supported integration." },
    ],
    stats: [
      { value: "2024", label: "Founded" },
      { value: "35+",  label: "Team" },
      { value: "$42M", label: "Series A" },
      { value: "9",    label: "Patents filed" },
    ],
  },

  /* ---- Contact ---- */
  contact: {
    index: "05",
    kicker: "Contact",
    title: "Contact us.",
    sub:
      "Request a datasheet, ask a technical question, or arrange a demonstration.",
    interests: [
      "Semiconductor failure analysis",
      "GNSS-denied navigation",
      "Life sciences",
      "Research collaboration",
      "Other",
    ],
  },

  /* ---- Footer ---- */
  footer: {
    tagline: "Diamond quantum magnetometers.",
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
          { label: "About",      href: "#company" },
          { label: "Technology", href: "#technology" },
          { label: "Contact",    href: "#contact" },
        ],
      },
      {
        title: "Contact",
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
