export type Product = {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
  industries: string[];
  hasFixtureWizard?: boolean;
};

export const products: Product[] = [
  {
    id: "resistive-load-bank",
    name: "Resistive Load Bank",
    category: "Testing Systems",
    shortDesc: "Simulates precise electrical loads to test generators, UPS systems, and power sources under real operating conditions.",
    longDesc: "Elcomech Systems' Resistive Load Banks are precision-engineered instruments that apply controlled resistive loads to generators, UPS systems, and other power sources. By simulating real-world electrical demand, they enable thorough performance validation before deployment, catching faults early and ensuring absolute operational reliability.",
    image: "/images/resistive-load-bank/resistive-load-bank-500x500.png",
    gallery: [
      "/images/resistive-load-bank/resistive-load-bank-500x500.png",
      "/images/common/whatsapp-image-2024-12-15-at-12-37-32-pm-jpeg-500x500.jpeg",
      "/images/resistive-load-bank/resistive-load-bank-500x500_1.png",
    ],
    specifications: { "Capacity": "10 kW", "Type": "Resistive", "Frequency": "50Hz", "Phase": "DC", "Material": "Mild Steel", "Min Order": "1 Piece", "Price": "₹25,000/Piece" },
    features: [
      "Simulates Electrical Loads: Applies precise resistive loads to test generators, UPS systems, and power sources under real operating conditions.",
      "Heat Dissipation: Converts electrical energy into heat safely through resistive elements, ensuring reliable performance during testing.",
      "Varied Capacity Options: Available in multiple sizes and power ratings to match different testing needs and environments.",
      "Improves System Reliability: Detects faults early and verifies load handling capabilities to maintain optimal equipment function.",
    ],
    applications: ["Generator Load Testing", "UPS System Testing", "Power Supply Verification", "Battery Discharge Testing", "Transformer Testing"],
    industries: ["Power Electronics", "Telecommunications", "Defence", "Industrial Automation", "Data Centers"],
  },
  {
    id: "rf-shielded-enclosure",
    name: "RF Shielded Enclosure",
    category: "RF & Shielding",
    shortDesc: "Provides effective shielding to prevent unwanted RF signals from disrupting sensitive electronic components and systems.",
    longDesc: "Our RF Shielded Enclosures are engineered to block electromagnetic interference with IP55-rated Mild Steel construction and electroplated surfaces. Ideal for EMC compliance testing, wireless device isolation, and sensitive electronics protection, these enclosures provide a repeatable, controlled RF environment.",
    image: "/images/rf-shielded-enclosure/rf-shield-cover-500x500.png",
    gallery: [
      "/images/rf-shielded-enclosure/rf-shield-cover-500x500.png",
      "/images/rf-shielded-enclosure/rf-shielded-enclosure-500x500.png",
      "/images/rf-shielded-enclosure/rf-shielded-enclosure-500x500_1.png",
      "/images/rf-shielded-enclosure/emi-shielding-gasket-500x500.jpg",
    ],
    specifications: { "Material": "Mild Steel", "Application": "Electronics/Electrical", "IP Rating": "IP55", "Mounting Type": "Floor-Mount", "Shape": "Square", "Color": "Black", "Surface Finishing": "Electroplating", "Country of Origin": "India" },
    features: [
      "Blocks Radio Frequency Interference: Provides effective shielding to prevent unwanted RF signals from disrupting sensitive electronic components.",
      "Durable Materials: Manufactured from conductive metals or alloys to ensure long-lasting protection and corrosion resistance.",
      "Custom Fit Design: Engineered to snugly fit over devices or enclosures, maintaining seamless RF containment.",
      "Enhances Device Reliability: Improves signal integrity and helps electronic equipment comply with EMC regulations.",
    ],
    applications: ["EMC/EMI Testing", "Wireless Device Testing", "Telecommunications Equipment", "Medical Device Shielding", "Aerospace Electronics"],
    industries: ["Telecommunications", "Aerospace", "Medical", "Electronics", "Defence"],
  },
  {
    id: "pcb-test-system",
    name: "PCB Test System",
    category: "Testing Systems",
    shortDesc: "Professional PCB testing fixtures including Bed of Nails and ICT/FCT fixtures for functional and in-circuit testing.",
    longDesc: "Our PCB Test Systems encompass both ICT (In-Circuit Test) and FCT (Functional Circuit Test) fixtures, custom-designed to match your exact PCB layout. From spring-loaded bed-of-nails designs to full functional test fixtures, we build precision tooling that delivers repeatable, accurate test results across multilayer PCBs.",
    image: "/images/testing-service/ict-fixtures-500x500.jpg",
    gallery: [
      "/images/testing-service/ict-fixtures-500x500.jpg",
    ],
    specifications: { "PCB Type Supported": "Multilayer PCB", "Test Type": "Functional Test (FCT) / In-Circuit Test (ICT)", "Country of Origin": "Made in India", "Variants": "Bed of Nails Fixture, PCB Testing Fixture" },
    features: [
      "In-Circuit Testing: Enables precise electrical testing of individual components on a PCB without removing them.",
      "Bed of Nails Design: Spring-loaded contact probes make simultaneous contact with multiple test points on the PCB.",
      "Functional Test Ready: Supports full functional testing (FCT) of assembled multilayer PCBs.",
      "Custom-Built Fixtures: Designed to match specific PCB layouts for repeatable, accurate test results.",
    ],
    applications: ["PCB Functional Testing", "In-Circuit Testing (ICT)", "Bare Board Testing", "Production Line QC", "R&D Prototype Verification"],
    industries: ["Electronics", "Automotive", "Industrial Automation", "Telecommunications", "Aerospace"],
    hasFixtureWizard: true,
  },
  {
    id: "cable-harness-test-fixture",
    name: "Cable Harness Test Fixture",
    category: "Testing Systems",
    shortDesc: "Custom-designed testing fixtures for validating complete cable harness assemblies, verifying every connection.",
    longDesc: "Elcomech Systems' Cable Harness Test Fixtures are built to your exact connector pinout and harness topology. Each fixture validates continuity, detects shorts, and verifies correct routing, providing instant pass/fail feedback. Custom connector panels and high-repeatability mechanics ensure consistent results across every production unit.",
    image: "/images/testing-service/cable-harness-test-fixture-500x500.jpeg",
    gallery: [
      "/images/testing-service/cable-harness-test-fixture-500x500.jpeg",
      "/images/testing-service/cable-harness-test-fixture-500x500_1.jpeg",
      "/images/testing-service/cable-harness-test-fixture-500x500_2.jpeg",
      "/images/testing-service/cable-harness-test-fixture-500x500_3.jpeg",
    ],
    specifications: { "Application": "Cable Harness Testing", "Test Type": "Continuity & Functional Testing", "Country of Origin": "Made in India" },
    features: [
      "Complete Harness Validation: Tests entire cable harness assemblies for continuity, short circuits, and correct routing.",
      "Custom Connector Panels: Built with the exact connector types and pinouts specific to each harness design.",
      "High Repeatability: Ensures consistent test results across every unit in production.",
      "Visual Pass/Fail Indicators: Clear LED or display-based indicators for rapid operator feedback.",
    ],
    applications: ["Automotive Wiring Harness Testing", "Industrial Cable Assembly QC", "Defence Harness Verification", "Aerospace Cable Testing", "Production Line Testing"],
    industries: ["Automotive", "Defence", "Aerospace", "Industrial Automation", "Electronics"],
  },
  {
    id: "wiring-harness",
    name: "Wiring Harness",
    category: "Wiring & Cables",
    shortDesc: "Custom-engineered cable harness assemblies for power and signal distribution in vehicles and industrial equipment.",
    longDesc: "Our automotive-grade Wiring Harnesses are the nervous system of your vehicle or machine. Manufactured with copper conductors, robust insulation, and automotive-standard connectors, each harness is designed to your exact routing and circuit requirements, validated for safety, EMI immunity, and long-term reliability.",
    image: "/images/wiring-harness/electric-wire-harness-500x500.jpg",
    gallery: [
      "/images/wiring-harness/electric-wire-harness-500x500.jpg",
      "/images/wiring-harness/automotive-wiring-harness-500x500.png",
      "/images/wiring-harness/automotive-wiring-harness-500x500_1.png",
    ],
    specifications: { "Type": "Cable Harness Assembly", "Color": "Black", "Material": "Copper", "Current": "10A", "Voltage": "220V", "Usage": "Automobile Industry", "Min Order": "10 Piece", "Price": "₹1,200/Piece" },
    features: [
      "Power & Signal Distribution: Serves as the central nervous system of a vehicle, transmitting electrical power and control signals to various components.",
      "Custom-Engineered Design: Tailored to fit specific vehicle models, ensuring optimal routing, durability, and integration with onboard systems.",
      "Robust Insulation & Protection: Built with high-quality materials to withstand heat, vibration, moisture, and electromagnetic interference.",
      "Safety & Efficiency Compliance: Designed to meet strict automotive safety standards, improving vehicle reliability and manufacturing efficiency.",
    ],
    applications: ["Automotive Electrical Systems", "Industrial Machinery", "Commercial Vehicles", "Agricultural Equipment", "Marine Applications"],
    industries: ["Automotive", "Industrial Automation", "Defence", "Aerospace", "Power Electronics"],
  },
  {
    id: "cable-breakout",
    name: "Cable Breakout",
    category: "Wiring & Cables",
    shortDesc: "Precision automotive cable breakout assemblies for clean multi-conductor cable splitting and routing.",
    longDesc: "Our Automotive Cable Breakout assemblies provide clean, strain-relieved separation of multi-conductor cables into individual circuits. Built with copper conductors and automotive-grade overmolding, they withstand engine-bay environments while maintaining precise signal integrity across all branches.",
    image: "/images/cable-breakout/automotive-cable-breakout-500x500.png",
    gallery: [
      "/images/cable-breakout/automotive-cable-breakout-500x500.png",
      "/images/cable-breakout/automotive-cable-breakout-500x500_1.png",
    ],
    specifications: { "Type": "Automotive Cable Breakout", "Material": "Copper", "Thickness": "10 mm", "Usage": "Automobile Industry", "Voltage": "12V DC", "Min Order": "100 Piece", "Price": "₹10,000/Piece" },
    features: [
      "Clean Signal Routing: Enables neat separation and routing of individual conductors from a multi-conductor cable.",
      "Strain Relief: Prevents mechanical stress from transmitting to individual wires at breakout points.",
      "Automotive Grade: Built to withstand heat, vibration, and chemical exposure in automotive environments.",
      "Custom Configurations: Available in various breakout patterns to match specific harness design requirements.",
    ],
    applications: ["Automotive Wiring Systems", "Engine Bay Harnesses", "Body Control Modules", "Industrial Control Panels", "Test Bench Cabling"],
    industries: ["Automotive", "Industrial Automation", "Defence", "Electronics"],
  },
  {
    id: "cable-marker",
    name: "Cable Marker",
    category: "Markers",
    shortDesc: "Color-coded cable markers for clear, permanent identification of cables and wires in complex electrical installations.",
    longDesc: "Our Color-Coded Cable Markers provide unambiguous, permanent identification for every cable in your installation. Resistant to abrasion, chemicals, and temperature extremes, they comply with industry standards for electrical marking and dramatically reduce troubleshooting time in dense cable environments.",
    image: "/images/cable-marker/colour-coded-cable-marker-500x500.jpg",
    gallery: [
      "/images/cable-marker/colour-coded-cable-marker-500x500.jpg",
      "/images/cable-marker/colour-coded-cable-marker-500x500_1.jpg",
      "/images/cable-marker/colour-coded-cable-marker-500x500_2.jpg",
    ],
    specifications: { "Type": "Color Coded Cable Marker", "Usage": "Cable and Wire Identification", "Country of Origin": "India" },
    features: [
      "Color-Coded Identification: Enables quick visual identification of cables in complex multi-wire installations.",
      "Permanent Marking: Resistant to abrasion, chemicals, and temperature extremes for long-lasting identification.",
      "Multiple Sizes: Available in a range of sizes to suit different cable diameters.",
      "Standards Compliant: Meets industry standards for cable marking in electrical and industrial applications.",
    ],
    applications: ["Electrical Panel Wiring", "Industrial Control Cabinets", "Automotive Harness Marking", "Telecommunications Cabling", "Building Wiring"],
    industries: ["Electronics", "Industrial Automation", "Automotive", "Telecommunications", "Power Electronics"],
  },
  {
    id: "wire-marker",
    name: "Wire Marker",
    category: "Markers",
    shortDesc: "Heat shrink wire markers providing permanent, professional identification for individual wires in all environments.",
    longDesc: "Our Heat Shrink Wire Markers permanently bond to wire surfaces when heat is applied, preventing slipping and removal. Available pre-printed or blank for custom thermal/laser printing, they withstand oils, fuels, solvents, and a temperature range of -55°C to +125°C, making them ideal for aerospace, automotive, and industrial marking.",
    image: "/images/cable-marker/heat-shrink-wire-markers-500x500.jpeg",
    gallery: [
      "/images/cable-marker/heat-shrink-wire-markers-500x500.jpeg",
      "/images/cable-marker/colour-coded-cable-markers-heat-500x500.jpg",
    ],
    specifications: { "Type": "Heat Shrink Wire Marker", "Shrink Ratio": "2:1", "Usage": "Wire Identification", "Country of Origin": "India" },
    features: [
      "Heat Shrink Technology: Permanently bonds to the wire surface when heat is applied, preventing slipping or removal.",
      "Pre-Printed & Blank Options: Available with pre-printed alphanumeric markings or blank for custom laser/thermal printing.",
      "Chemical Resistance: Withstands oils, fuels, solvents, and cleaning agents common in industrial environments.",
      "Wide Temperature Range: Maintains marking integrity from -55°C to +125°C for demanding applications.",
    ],
    applications: ["Wire Identification in Panels", "Automotive Wire Marking", "Aerospace Harness Marking", "Industrial Equipment Wiring", "MRO and Field Service"],
    industries: ["Automotive", "Aerospace", "Electronics", "Industrial Automation", "Defence"],
  },
  {
    id: "testing-service",
    name: "Testing Service",
    category: "Testing Systems",
    shortDesc: "Professional functional testing services for electronic and electrical assemblies, offering complete end-to-end validation.",
    longDesc: "Elcomech Systems' Testing Services cover the full spectrum of electrical and electronic validation: functional testing (FCT), in-circuit testing (ICT), continuity and hipot testing, and custom test protocol development. Our in-house test infrastructure enables rapid turnaround with full data logging and traceability documentation.",
    image: "/images/testing-service/ict-fixtures-500x500.jpg",
    gallery: [
      "/images/testing-service/ict-fixtures-500x500.jpg",
      "/images/resistive-load-bank/resistive-load-bank-500x500.png",
    ],
    specifications: { "Service Type": "Functional Testing Service", "Test Coverage": "End-to-End Electrical Testing", "Turnaround": "As per requirement", "Country": "India" },
    features: [
      "Functional Testing (FCT): Validates complete product functionality against design specifications under real operating conditions.",
      "In-Circuit Testing: Tests individual component parameters without full board assembly.",
      "Continuity & Hipot Testing: Verifies electrical continuity and high-potential insulation integrity.",
      "Custom Test Protocol Development: Engineers bespoke test plans tailored to specific product requirements.",
    ],
    applications: ["PCB Assembly Testing", "Cable Harness QC", "Power Supply Verification", "Module-Level Testing", "Final Product Validation"],
    industries: ["Electronics", "Automotive", "Telecommunications", "Medical", "Industrial Automation"],
    hasFixtureWizard: true,
  },
  {
    id: "leak-testing-machine",
    name: "Leak Testing Machine",
    category: "Testing Systems",
    shortDesc: "Precision leak testing machines for detecting leakage in components and assemblies to ensure complete seal integrity.",
    longDesc: "Our Leak Testing Machines use the pressure decay method to detect extremely small leaks in sealed components and assemblies. Configurable leak rate thresholds, automated pass/fail outputs, multi-port testing capability, and full data logging make them ideal for production line integration and quality documentation.",
    image: "/images/testing-service/ict-fixtures-500x500.jpg",
    gallery: [
      "/images/testing-service/ict-fixtures-500x500.jpg",
    ],
    specifications: { "Test Method": "Pressure Decay / Air Leak Test", "Application": "Component Seal Integrity Testing", "Country of Origin": "Made in India" },
    features: [
      "Pressure Decay Method: Detects extremely small leaks by monitoring pressure loss over a defined test cycle.",
      "Automated Pass/Fail: Provides immediate pass/fail results with configurable leak rate thresholds.",
      "Multi-Port Testing: Can test multiple cavities or components simultaneously for production efficiency.",
      "Data Logging: Records test results for traceability and quality documentation.",
    ],
    applications: ["Automotive Sealing Components", "Fluid System Testing", "HVAC Components", "Medical Device Sealing", "Industrial Valve Testing"],
    industries: ["Automotive", "Medical", "Industrial Automation", "Aerospace", "Power Electronics"],
  },
];
