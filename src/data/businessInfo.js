// src/data/businessInfo.js
// Verified Business Details for Top Cool Service

export const businessInfo = {
  name: "Top Cool Service",
  tagline: "Reliable Appliance Repair Across Mumbai & Thane",
  phoneDisplay: "+91 99204 35051",
  phoneRaw: "+919920435051",
  phoneTel: "tel:+919920435051",
  whatsappUrl: "https://wa.me/919920435051",
  email: "mhussainkhan34@gmail.com",
  location: "Dahisar, Mumbai, Maharashtra, India",
  serviceRegion: "Mumbai & Thane, Maharashtra, India",
  hours: "Monday to Sunday, 8:00 AM – 10:00 PM",
  websiteUrl: "https://topcoolservice.com",

  // 12 Target Localities
  localities: [
    "Bandra",
    "Andheri",
    "Santacruz",
    "Powai",
    "Dahisar",
    "Mira Road",
    "Colaba",
    "Marine Lines",
    "Juhu",
    "BKC",
    "Kalina",
    "Thane",
  ],

  // 6 Core Appliance Services with photographic image assets
  services: [
    {
      id: "ac-repair",
      title: "AC Repair & Servicing",
      slug: "/ac-repair",
      shortDescription:
        "Comprehensive cooling diagnostic, gas leak checks, PCB repair, and routine chemical deep cleaning.",
      heroDescription:
        "Keep your home cool with quick, reliable split and window AC repair, precision refrigerant refills, and routine servicing across Mumbai and Thane.",
      image: "/images/ac.jpg",
    },
    {
      id: "refrigerator-repair",
      title: "Refrigerator Repair",
      slug: "/refrigerator-repair",
      shortDescription:
        "Expert diagnosis for single-door, double-door, and side-by-side inverter refrigerators.",
      heroDescription:
        "From cooling failure and strange compressor noises to ice maker faults, we restore your refrigerator to optimal performance.",
      image: "/images/refrigerator.jpg",
    },
    {
      id: "washing-machine-repair",
      title: "Washing Machine Repair",
      slug: "/washing-machine-repair",
      shortDescription:
        "Reliable service for front load, top load, and semi-automatic washing machines.",
      heroDescription:
        "We fix drainage errors, spin failure, drum noise, vibration issues, and main control board faults for all leading brands.",
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "microwave-repair",
      title: "Microwave Oven Repair",
      slug: "/microwave-repair",
      shortDescription:
        "Safe repairs for heating failure, spark generation, turntable faults, and touchpads.",
      heroDescription:
        "Professional repair for solo, grill, and convection microwave ovens with careful electrical and magnetron safety checks.",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "clothes-dryer-repair",
      title: "Clothes Dryer Repair",
      slug: "/clothes-dryer-repair",
      shortDescription:
        "Fast solutions for heating element problems, belt replacement, and airflow blockage.",
      heroDescription:
        "Get your laundry routine back on track with thorough clothes dryer diagnostics, thermal fuse checks, and belt replacements.",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dishwasher-repair",
      title: "Dishwasher Repair",
      slug: "/dishwasher-repair",
      shortDescription:
        "Specialized solutions for drainage clogs, spray arm faults, and leak issues.",
      heroDescription:
        "Comprehensive dishwasher servicing addressing water inlet errors, heating issues, pump blockages, and electronic control errors.",
      image: "/images/dish-washer.jpg",
    },
  ],

  // 13 Brands with vector styling metadata
  brands: [
    { name: "Samsung", fontStyle: "700", letterSpacing: "0.15em", color: "#1428A0" },
    { name: "LG", fontStyle: "800", letterSpacing: "0.05em", color: "#A50034" },
    { name: "Whirlpool", fontStyle: "700", letterSpacing: "0.02em", color: "#EDB709" },
    { name: "Bosch", fontStyle: "800", letterSpacing: "0.08em", color: "#EA1C24" },
    { name: "IFB", fontStyle: "900", letterSpacing: "0.18em", color: "#D32F2F" },
    { name: "Haier", fontStyle: "700", letterSpacing: "0.06em", color: "#005AAB" },
    { name: "Godrej", fontStyle: "600", letterSpacing: "0.03em", color: "#007A3D" },
    { name: "Voltas", fontStyle: "800", letterSpacing: "0.12em", color: "#0066B2" },
    { name: "Daikin", fontStyle: "800", letterSpacing: "0.14em", color: "#0097E2" },
    { name: "Panasonic", fontStyle: "700", letterSpacing: "0.08em", color: "#004098" },
    { name: "Siemens", fontStyle: "700", letterSpacing: "0.1em", color: "#00646E" },
    { name: "Hitachi", fontStyle: "800", letterSpacing: "0.12em", color: "#DE1B1B" },
    { name: "Electrolux", fontStyle: "700", letterSpacing: "0.05em", color: "#011E41" },
  ],
};