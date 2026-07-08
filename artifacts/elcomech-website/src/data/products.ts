export type Product = {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  image: string;
  gallery: string[];
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
  industries: string[];
};

export const products: Product[] = [
  {
    id: "resistive-load-bank",
    name: "Resistive Load Bank",
    category: "Testing Systems",
    shortDesc: "Simulates precise electrical loads to test generators, UPS systems, and power sources under real operating conditions.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/529890769/OY/IV/CK/238132364/resistive-load-bank-500x500.png",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529890769/OY/IV/CK/238132364/resistive-load-bank-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/474707689/IK/BI/DO/238132364/whatsapp-image-2024-12-15-at-12-37-32-pm-jpeg-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529890400/XB/FQ/SR/238132364/resistive-load-bank-500x500.png"
    ],
    specifications: { "Capacity": "10 kW", "Type": "Resistive", "Frequency": "50Hz", "Phase": "DC", "Material": "Mild Steel", "Min Order": "1 Piece", "Price": "₹25,000/Piece" },
    features: ["Simulates Electrical Loads: Applies precise resistive loads to test generators, UPS systems, and power sources under real operating conditions.", "Heat Dissipation: Converts electrical energy into heat safely through resistive elements, ensuring reliable performance during testing.", "Varied Capacity Options: Available in multiple sizes and power ratings to match different testing needs and environments.", "Improves System Reliability: Detects faults early and verifies load handling capabilities to maintain optimal equipment function."],
    applications: ["Generator Load Testing", "UPS System Testing", "Power Supply Verification", "Battery Discharge Testing", "Transformer Testing"],
    industries: ["Power Electronics", "Telecommunications", "Defence", "Industrial Automation", "Data Centers"]
  },
  {
    id: "rf-shielded-enclosure",
    name: "RF Shielded Enclosure",
    category: "RF & Shielding",
    shortDesc: "Provides effective shielding to prevent unwanted RF signals from disrupting sensitive electronic components and systems.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/529902520/ZO/PW/TK/238132364/rf-shield-cover-500x500.png",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529902520/ZO/PW/TK/238132364/rf-shield-cover-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529969809/XO/JL/EZ/238132364/rf-shielded-enclosure-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529969293/EN/ER/ZH/238132364/rf-shielded-enclosure-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/526763861/CS/FP/BE/238132364/emi-shielding-gasket-500x500.jpg"
    ],
    specifications: { "Material": "Mild Steel", "Application": "Electronics/Electrical", "IP Rating": "IP55", "Mounting Type": "Floor-Mount", "Shape": "Square", "Color": "Black", "Surface Finishing": "Electroplating", "Country of Origin": "India" },
    features: ["Blocks Radio Frequency Interference: Provides effective shielding to prevent unwanted RF signals from disrupting sensitive electronic components.", "Durable Materials: Manufactured from conductive metals or alloys to ensure long-lasting protection and corrosion resistance.", "Custom Fit Design: Engineered to snugly fit over devices or enclosures, maintaining seamless RF containment.", "Enhances Device Reliability: Improves signal integrity and helps electronic equipment comply with EMC regulations."],
    applications: ["EMC/EMI Testing", "Wireless Device Testing", "Telecommunications Equipment", "Medical Device Shielding", "Aerospace Electronics"],
    industries: ["Telecommunications", "Aerospace", "Medical", "Electronics", "Defence"]
  },
  {
    id: "pcb-test-system",
    name: "PCB Test System",
    category: "Testing Systems",
    shortDesc: "Professional PCB testing fixtures including Bed of Nails and ICT fixtures for functional and in-circuit testing of multilayer PCBs.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/526767031/AJ/UK/NK/238132364/ict-fixtures-500x500.jpg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/526767031/AJ/UK/NK/238132364/ict-fixtures-500x500.jpg"
    ],
    specifications: { "PCB Type Supported": "Multilayer PCB", "Test Type": "Functional Test (FCT)", "Country of Origin": "Made in India", "Variants": "Bed of Nails Fixture, PCB Testing Fixture" },
    features: ["In-Circuit Testing: Enables precise electrical testing of individual components on a PCB without removing them.", "Bed of Nails Design: Spring-loaded contact probes make simultaneous contact with multiple test points on the PCB.", "Functional Test Ready: Supports full functional testing (FCT) of assembled multilayer PCBs.", "Custom-Built Fixtures: Designed to match specific PCB layouts for repeatable, accurate test results."],
    applications: ["PCB Functional Testing", "In-Circuit Testing (ICT)", "Bare Board Testing", "Production Line QC", "R&D Prototype Verification"],
    industries: ["Electronics", "Automotive", "Industrial Automation", "Telecommunications", "Aerospace"]
  },
  {
    id: "cable-harness-test-fixture",
    name: "Cable Harness Test Fixture",
    category: "Testing Systems",
    shortDesc: "Custom-designed testing fixtures for validating complete cable harness assemblies, ensuring every connection meets specification.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/12/570032114/IS/UN/TI/238132364/cable-harness-test-fixture-500x500.jpeg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/12/570032114/IS/UN/TI/238132364/cable-harness-test-fixture-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/12/570032119/SW/CN/IA/238132364/cable-harness-test-fixture-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/12/570032117/EB/WZ/JJ/238132364/cable-harness-test-fixture-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/12/570032122/WF/VN/JE/238132364/cable-harness-test-fixture-500x500.jpeg"
    ],
    specifications: { "Application": "Cable Harness Testing", "Test Type": "Continuity & Functional Testing", "Country of Origin": "Made in India" },
    features: ["Complete Harness Validation: Tests entire cable harness assemblies for continuity, short circuits, and correct routing.", "Custom Connector Panels: Built with the exact connector types and pinouts specific to each harness design.", "High Repeatability: Ensures consistent test results across every unit in production.", "Visual Pass/Fail Indicators: Clear LED or display-based indicators for rapid operator feedback."],
    applications: ["Automotive Wiring Harness Testing", "Industrial Cable Assembly QC", "Defence Harness Verification", "Aerospace Cable Testing", "Production Line Testing"],
    industries: ["Automotive", "Defence", "Aerospace", "Industrial Automation", "Electronics"]
  },
  {
    id: "wiring-harness",
    name: "Wiring Harness",
    category: "Wiring & Cables",
    shortDesc: "Custom-engineered cable harness assemblies serving as the central nervous system for power and signal distribution in vehicles and industrial equipment.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/526760353/XY/RY/GT/238132364/electric-wire-harness-500x500.jpg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/526760353/XY/RY/GT/238132364/electric-wire-harness-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529945269/QA/PY/FL/238132364/automotive-wiring-harness-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529946211/SF/KY/KP/238132364/automotive-wiring-harness-500x500.png"
    ],
    specifications: { "Type": "Cable Harness Assembly", "Color": "Black", "Material": "Copper", "Current": "10A", "Voltage": "220V", "Usage": "Automobile Industry", "Min Order": "10 Piece", "Price": "₹1,200/Piece" },
    features: ["Power & Signal Distribution: Serves as the central nervous system of a vehicle, transmitting electrical power and control signals to various components.", "Custom-Engineered Design: Tailored to fit specific vehicle models, ensuring optimal routing, durability, and integration with onboard systems.", "Robust Insulation & Protection: Built with high-quality materials to withstand heat, vibration, moisture, and electromagnetic interference.", "Safety & Efficiency Compliance: Designed to meet strict automotive safety standards, improving vehicle reliability and manufacturing efficiency."],
    applications: ["Automotive Electrical Systems", "Industrial Machinery", "Commercial Vehicles", "Agricultural Equipment", "Marine Applications"],
    industries: ["Automotive", "Industrial Automation", "Defence", "Aerospace", "Power Electronics"]
  },
  {
    id: "cable-breakout",
    name: "Cable Breakout",
    category: "Wiring & Cables",
    shortDesc: "Precision automotive cable breakout assemblies for clean multi-conductor cable splitting and routing in demanding environments.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/529943628/CD/IF/PN/238132364/automotive-cable-breakout-500x500.png",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529943628/CD/IF/PN/238132364/automotive-cable-breakout-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529944481/UR/JK/QV/238132364/automotive-cable-breakout-500x500.png"
    ],
    specifications: { "Type": "Automotive Cable Breakout", "Material": "Copper", "Thickness": "10 mm", "Usage": "Automobile Industry", "Voltage": "12V DC", "Min Order": "100 Piece", "Price": "₹10,000/Piece" },
    features: ["Clean Signal Routing: Enables neat separation and routing of individual conductors from a multi-conductor cable.", "Strain Relief: Prevents mechanical stress from transmitting to individual wires at breakout points.", "Automotive Grade: Built to withstand automotive environmental conditions including heat, vibration, and chemicals.", "Custom Configurations: Available in various breakout patterns to match specific harness design requirements."],
    applications: ["Automotive Wiring Systems", "Engine Bay Harnesses", "Body Control Modules", "Industrial Control Panels", "Test Bench Cabling"],
    industries: ["Automotive", "Industrial Automation", "Defence", "Electronics"]
  },
  {
    id: "cable-marker",
    name: "Cable Marker",
    category: "Markers",
    shortDesc: "Color-coded cable markers for clear, permanent identification of cables and wires in complex electrical installations.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/529892604/MG/KT/ZJ/238132364/colour-coded-cable-marker-500x500.jpg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529892604/MG/KT/ZJ/238132364/colour-coded-cable-marker-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529892606/QG/SB/YD/238132364/colour-coded-cable-marker-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529892611/AH/AQ/HB/238132364/colour-coded-cable-marker-500x500.jpg"
    ],
    specifications: { "Type": "Color Coded Cable Marker", "Usage": "Cable and Wire Identification", "Country of Origin": "India" },
    features: ["Color-Coded Identification: Enables quick visual identification of cables in complex multi-wire installations.", "Permanent Marking: Resistant to abrasion, chemicals, and temperature extremes for long-lasting identification.", "Multiple Sizes: Available in a range of sizes to suit different cable diameters.", "Standards Compliant: Meets industry standards for cable marking in electrical and industrial applications."],
    applications: ["Electrical Panel Wiring", "Industrial Control Cabinets", "Automotive Harness Marking", "Telecommunications Cabling", "Building Wiring"],
    industries: ["Electronics", "Industrial Automation", "Automotive", "Telecommunications", "Power Electronics"]
  },
  {
    id: "wire-marker",
    name: "Wire Marker",
    category: "Markers",
    shortDesc: "Heat shrink wire markers providing permanent, professional identification for individual wires and conductors in all environments.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/525586504/QY/ZE/HG/238132364/heat-shrink-wire-markers-500x500.jpeg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525586504/QY/ZE/HG/238132364/heat-shrink-wire-markers-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525585004/NW/GQ/NO/238132364/colour-coded-cable-markers-heat-500x500.jpg"
    ],
    specifications: { "Type": "Heat Shrink Wire Marker", "Shrink Ratio": "2:1", "Usage": "Wire Identification", "Country of Origin": "India" },
    features: ["Heat Shrink Technology: Permanently bonds to the wire surface when heat is applied, preventing slipping or removal.", "Pre-Printed & Blank Options: Available with pre-printed alphanumeric markings or blank for custom laser/thermal printing.", "Chemical Resistance: Withstands oils, fuels, solvents, and cleaning agents common in industrial environments.", "Wide Temperature Range: Maintains marking integrity from -55°C to +125°C for demanding applications."],
    applications: ["Wire Identification in Panels", "Automotive Wire Marking", "Aerospace Harness Marking", "Industrial Equipment Wiring", "MRO and Field Service"],
    industries: ["Automotive", "Aerospace", "Electronics", "Industrial Automation", "Defence"]
  },
  {
    id: "testing-service",
    name: "Testing Service",
    category: "Testing Systems",
    shortDesc: "Professional functional testing services for electronic and electrical assemblies, ensuring every product meets quality and performance standards.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/526767031/AJ/UK/NK/238132364/ict-fixtures-500x500.jpg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/526767031/AJ/UK/NK/238132364/ict-fixtures-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/529890769/OY/IV/CK/238132364/resistive-load-bank-500x500.png"
    ],
    specifications: { "Service Type": "Functional Testing Service", "Test Coverage": "End-to-End Electrical Testing", "Turnaround": "As per requirement", "Country": "India" },
    features: ["Functional Testing (FCT): Validates complete product functionality against design specifications under real operating conditions.", "In-Circuit Testing: Tests individual component parameters without full board assembly.", "Continuity & Hipot Testing: Verifies electrical continuity and high-potential insulation integrity.", "Custom Test Protocol Development: Engineers bespoke test plans tailored to specific product requirements."],
    applications: ["PCB Assembly Testing", "Cable Harness QC", "Power Supply Verification", "Module-Level Testing", "Final Product Validation"],
    industries: ["Electronics", "Automotive", "Telecommunications", "Medical", "Industrial Automation"]
  },
  {
    id: "leak-testing-machine",
    name: "Leak Testing Machine",
    category: "Testing Systems",
    shortDesc: "Precision leak testing machines for detecting air, gas, or fluid leakage in components and assemblies to ensure complete seal integrity.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/526767031/AJ/UK/NK/238132364/ict-fixtures-500x500.jpg",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/526767031/AJ/UK/NK/238132364/ict-fixtures-500x500.jpg"
    ],
    specifications: { "Test Method": "Pressure Decay / Air Leak Test", "Application": "Component Seal Integrity Testing", "Country of Origin": "Made in India" },
    features: ["Pressure Decay Method: Detects extremely small leaks by monitoring pressure loss over a defined test cycle.", "Automated Pass/Fail: Provides immediate pass/fail results with configurable leak rate thresholds.", "Multi-Port Testing: Can test multiple cavities or components simultaneously for production efficiency.", "Data Logging: Records test results for traceability and quality documentation."],
    applications: ["Automotive Sealing Components", "Fluid System Testing", "HVAC Components", "Medical Device Sealing", "Industrial Valve Testing"],
    industries: ["Automotive", "Medical", "Industrial Automation", "Aerospace", "Power Electronics"]
  }
];
