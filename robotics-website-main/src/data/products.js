const products = [
  // --- FPV & DRONES ---
  {
    id: 1,
    name: "FPV Racing Drone X1",
    slug: "fpv-racing-drone-x1",
    category: "fpv-drones",
    price: 18999,
    images: [
      "https://oscarliang.com/wp-content/uploads/2023/02/how-to-build-fpv-drone-2025-complete-front.jpg.webp",
      "https://oscarliang.com/wp-content/uploads/2023/02/how-to-build-fpv-drone-2025-parts-list-dji-o4-pro-air-unit.jpg.webp",
      "https://oscarliang.com/wp-content/uploads/2023/02/how-to-build-fpv-drone-2025-frame.jpg.webp"
    ],
    shortDescription: "High-speed FPV racing drone designed for competitive pilots.",
    description: "The FPV Racing Drone X1 is built for extreme speed and control. It features a durable carbon fiber frame, high-efficiency brushless motors, and a powerful F7 flight controller. Perfect for racing enthusiasts and advanced pilots looking for a competitive edge.",
    specs: ["Frame: 5 inch Carbon Fiber", "Motor: 2207 2400KV", "FC: F7 Pro", "Flight Time: 6-8 mins", "Weight: 420g"],
    featured: true
  },
  {
    id: 2,
    name: "CineWhoop Pro 3.5",
    slug: "cinewhoop-pro-3-5",
    category: "fpv-drones",
    price: 24500,
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600",
      "https://images.unsplash.com/photo-1521410859227-1302c1846e32?q=80&w=600"
    ],
    shortDescription: "Stable cinematic drone with ducted fans for safe indoor filming.",
    description: "The CineWhoop Pro 3.5 is the ultimate tool for indoor cinematic videography. Its guarded propellers provide safety while the tuned flight controller ensures buttery smooth footage even in tight spaces.",
    specs: ["Ducts: 35mm High-Strength", "Camera: 4K Ready Mount", "Battery: 4S 1300mAh", "Propellers: HQ 3.5x2.5"],
    featured: true
  },

  // --- RC PLANES ---
  {
    id: 3,
    name: "RC Fighter Falcon Jet",
    slug: "rc-fighter-falcon-jet",
    category: "rc-planes",
    price: 15999,
    images: [
      "https://images.unsplash.com/photo-1517976384346-3136801d605d?q=80&w=600",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=600"
    ],
    shortDescription: "High-performance EPO foam jet with realistic scale details.",
    description: "Experience the thrill of jet flight with the Falcon. Made from high-density EPO foam, it is both lightweight and crash-resistant. Features a pre-installed brushless power system for vertical climbs.",
    specs: ["Wingspan: 800mm", "Material: EPO Foam", "Motor: 2836 3500KV", "ESC: 40A Brushless"],
    featured: true
  },
  {
    id: 4,
    name: "Bush Plane V2 STOL",
    slug: "bush-plane-v2-stol",
    category: "rc-planes",
    price: 12500,
    images: [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=600"
    ],
    shortDescription: "Short Take-Off and Landing plane for off-road flying.",
    description: "The V2 STOL is designed for pilots who love flying in rugged locations. With its oversized balloon tires and high-lift wing design, you can take off and land in just a few feet of space.",
    specs: ["Wingspan: 1100mm", "Tires: 4 inch Balloon", "Flaps: Pre-installed", "Assembly: 30 minutes"],
    featured: true
  },

  // --- RADIOS & RECEIVERS ---
  {
    id: 5,
    name: "TX16S Master Radio",
    slug: "tx16s-master-radio",
    category: "radios-receivers",
    price: 18500,
    images: ["https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=600"],
    shortDescription: "Professional 16-channel radio with color touch screen.",
    description: "The gold standard of RC controllers. Featuring Hall Effect gimbals and a multi-protocol internal module, this radio can control almost any RC craft on the market today.",
    specs: ["Channels: 16", "Protocol: ELRS & 4-in-1", "Gimbals: AG01 Hall", "Screen: 4.3 inch IPS"],
    featured: true
  },

  // --- CAMERAS & FPV GEAR ---
  {
    id: 6,
    name: "Digital HD VTX System",
    slug: "digital-hd-vtx-system",
    category: "cameras-fpv-gear",
    price: 14500,
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600"],
    shortDescription: "Zero-latency 1080p digital video transmission system.",
    description: "Upgrade your FPV experience to high definition. This VTX system provides crystal clear 1080p video with a latency low enough for even the fastest racing maneuvers.",
    specs: ["Resolution: 1080p", "Frame Rate: 60fps", "Power: 1200mW Max", "Compatibility: DJI/Walksnail"],
    featured: true
  },

  // --- MOTORS & SERVOS ---
  {
    id: 7,
    name: "Titanium Series 2207",
    slug: "titanium-series-2207",
    category: "motors-servos",
    price: 1400,
    images: ["https://images.unsplash.com/photo-159742324403d-d1950beab654?q=80&w=600"],
    shortDescription: "High-torque brushless motor with titanium alloy shaft.",
    description: "Engineered for durability and raw power. The Titanium Series 2207 uses N52H curved magnets and a hollow titanium shaft to reduce weight without sacrificing strength.",
    specs: ["KV: 2450KV", "Stator: 2207", "Weight: 31.5g", "Input: 4-6S LiPo"],
    featured: true
  },

  // --- DIY KITS ---
  {
    id: 8,
    name: "Complete Drone Build Kit",
    slug: "complete-drone-build-kit",
    category: "diy-kits",
    price: 21000,
    images: ["https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600"],
    shortDescription: "Everything you need to build your own 5-inch FPV drone.",
    description: "The perfect starting point for new builders. This kit includes a premium carbon frame, matched motors, a stack (FC+ESC), and all the wires and screws required for assembly.",
    specs: ["Difficulty: Beginner-Intermediate", "Soldering: Required", "Time: 4 Hours", "Support: Guide Included"],
    featured: true
  },

  // --- 22 ADDITIONAL PRODUCTS (Non-Featured) ---
  {
    id: 9,
    name: "LiPo 4S 1500mAh 120C",
    slug: "lipo-4s-1500mah",
    category: "batteries",
    price: 2200,
    images: ["https://images.unsplash.com/photo-1619641782842-83f2f9663ad1?q=80&w=600"],
    shortDescription: "High-discharge racing battery for maximum punch.",
    description: "Unleash the full potential of your motors with this 120C discharge battery. Built with high-quality cells for low internal resistance and long life cycles.",
    specs: ["Capacity: 1500mAh", "Voltage: 14.8V", "C-Rating: 120C", "Connector: XT60"],
    featured: false
  },
  {
    id: 10,
    name: "F7 Dual Gyro FC",
    slug: "f7-dual-gyro-fc",
    category: "boards-sensors",
    price: 4200,
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600"],
    shortDescription: "Advanced flight controller with dual MPU6000 gyros.",
    description: "The most stable flight controller ever made. Using dual-gyro fusion technology, this F7 board filters out noise for the smoothest flight feel imaginable.",
    specs: ["MCU: STM32F722", "Gyro: Dual MPU6000", "OSD: Betaflight OSD", "UARTS: 6 Available"],
    featured: false
  },
  {
    id: 11,
    name: "GPS Rescue Module",
    slug: "gps-rescue-module",
    category: "boards-sensors",
    price: 1850,
    images: ["https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=600"],
    shortDescription: "Mini GPS module for long-range failsafe and recovery.",
    description: "Never lose a drone again. This tiny GPS module allows for the 'GPS Rescue' feature in Betaflight, bringing your drone back home if you lose signal.",
    specs: ["Chip: M8N", "Cold Start: 26s", "Antenna: Ceramic Patch", "Weight: 8g"],
    featured: false
  },
  {
    id: 12,
    name: "Carbon Fiber 5-inch Frame",
    slug: "carbon-fiber-5-frame",
    category: "frames-mechanics",
    price: 3800,
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600"],
    shortDescription: "Indestructible 5mm arm carbon fiber racing frame.",
    description: "Designed for the harshest crashes. This frame uses high-modulus 3K carbon fiber with 5mm thick arms and a compressed X-geometry for perfect handling.",
    specs: ["Wheelbase: 225mm", "Arm Thickness: 5mm", "Stack Mount: 30x30 / 20x20", "Weight: 110g"],
    featured: false
  },
  // ... adding more to reach 30 ...
  { id: 13, name: "Smart Lipo Charger", slug: "smart-lipo-charger", category: "chargers", price: 6500, images: ["https://images.unsplash.com/photo-1585333084131-0d98b99166a0?q=80&w=600"], shortDescription: "AC/DC Dual channel smart charger.", description: "Safely charge and storage your LiPo batteries with this easy to use smart charger.", specs: ["Power: 200W", "Channels: 2", "Modes: Charge/Storage/Discharge"], featured: false },
  { id: 14, name: "Digital Soldering Iron", slug: "digital-soldering-iron", category: "tools", price: 3200, images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600"], shortDescription: "Portable soldering iron with OLED display.", description: "The ultimate tool for field repairs. This iron heats up in 10 seconds and can be powered by a drone battery.", specs: ["Temp Range: 100-400C", "Input: DC/USB-C", "Tips: Interchangeable"], featured: false },
  { id: 15, name: "ELRS 2.4G Receiver", slug: "elrs-2-4g-receiver", category: "radios-receivers", price: 1500, images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600"], shortDescription: "Ultra-small long range receiver.", description: "ExpressLRS receiver with ceramic antenna for unbeatable range and low latency.", specs: ["Frequency: 2.4GHz", "Protocol: CRSF", "Weight: 0.6g"], featured: false },
  { id: 16, name: "HD FPV Camera Pro", slug: "hd-fpv-camera-pro", category: "cameras-fpv-gear", price: 3500, images: ["https://images.unsplash.com/photo-1492724441997-5ad865395e7e?q=80&w=600"], shortDescription: "1200TVL low-light camera.", description: "The best analog camera for twilight flying. Features incredible dynamic range.", specs: ["Sensor: CMOS", "FOV: 160 Deg", "Latency: 4ms"], featured: false },
  { id: 17, name: "Propeller Pack 5045", slug: "prop-pack-5045", category: "fpv-drones", price: 450, images: ["https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=600"], shortDescription: "Set of 4 high-durability propellers.", description: "Polycarbonate tri-blades designed to bend rather than break in a crash.", specs: ["Pitch: 4.5", "Blades: 3", "Material: Polycarbonate"], featured: false },
  { id: 18, name: "Silicon Wire Set", slug: "silicon-wire-set", category: "wires-connectors", price: 650, images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600"], shortDescription: "Heat resistant flexible silicone wire.", description: "Assorted gauges of high-strand wire for all your drone and plane wiring needs.", specs: ["Gauges: 12/14/18/24 AWG", "Heat: 200C Rated"], featured: false },
  { id: 19, name: "Buzzer + LED Combo", slug: "buzzer-led-combo", category: "boards-sensors", price: 400, images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600"], shortDescription: "Loud buzzer for finding lost models.", description: "Programmable LED strip with a 110dB buzzer to help you find your craft in tall grass.", specs: ["Buzzer: 110dB", "LEDs: 4x RGB"], featured: false },
  { id: 20, name: "Micro Motor 1103", slug: "micro-motor-1103", category: "motors-servos", price: 750, images: ["https://images.unsplash.com/photo-159742324403d-d1950beab654?q=80&w=600"], shortDescription: "Tiny motors for whoops and toothpicks.", description: "Ultra-lightweight brushless motors for 1S to 2S micro builds.", specs: ["KV: 8000KV", "Weight: 3.5g", "Shaft: 1.5mm"], featured: false },
  { id: 21, name: "Lipo Guard Safe Bag", slug: "lipo-guard-bag", category: "batteries", price: 800, images: ["https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600"], shortDescription: "Fireproof bag for safe battery storage.", description: "Woven fiberglass bag designed to contain heat and flames in the event of a battery fire.", specs: ["Material: Fiberglass", "Size: Large (Storage)"], featured: false },
  { id: 22, name: "FPV Goggles V2", slug: "fpv-goggles-v2", category: "cameras-fpv-gear", price: 42000, images: ["https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600"], shortDescription: "Digital high-res goggles with OLED.", description: "The most immersive FPV experience possible. Dual OLED screens with a wide field of view.", specs: ["Resolution: 1080p", "Screen: Dual OLED", "FOV: 46 Degrees"], featured: false },
  { id: 23, name: "Carbon Fiber Plate 2mm", slug: "carbon-plate-2mm", category: "frames-mechanics", price: 1200, images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600"], shortDescription: "Solid 3K carbon fiber plate for DIY.", description: "High-strength flat carbon sheet for custom parts and frame repairs.", specs: ["Size: 200x300mm", "Finish: Matte"], featured: false },
  { id: 24, name: "Glider Wing 1200", slug: "glider-wing-1200", category: "rc-planes", price: 9500, images: ["https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=600"], shortDescription: "Electric glider for long thermal flights.", description: "Gentle and easy to fly. This glider is perfect for learning how to catch thermals.", specs: ["Wingspan: 1200mm", "Battery: 3S 1300mAh"], featured: false },
  { id: 25, name: "Hex Driver Tool Set", slug: "hex-driver-set", category: "tools", price: 1800, images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600"], shortDescription: "4-piece titanium hex driver set.", description: "Hardened steel tips for precision work. Sizes needed for 99% of RC screws.", specs: ["Sizes: 1.5, 2.0, 2.5, 3.0mm"], featured: false },
  { id: 26, name: "Bluetooth Tune Module", slug: "bt-tune-module", category: "boards-sensors", price: 900, images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600"], shortDescription: "Wireless Betaflight tuning via phone.", description: "Plug this into your FC to change settings and rates wirelessly at the field.", specs: ["Protocol: Bluetooth 4.0", "App: SpeedyBee"], featured: false },
  { id: 27, name: "Landing Pad 75cm", slug: "landing-pad-75cm", category: "tools", price: 1100, images: ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600"], shortDescription: "Foldable waterproof drone landing pad.", description: "Keep your motors clean from dust and grass. Double-sided high visibility colors.", specs: ["Size: 75cm diameter", "Weight: 200g"], featured: false },
  { id: 28, name: "LiIon 18650 Pack 4S", slug: "liion-18650-4s", category: "batteries", price: 3400, images: ["https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600"], shortDescription: "High-capacity pack for long endurance.", description: "Great for long-range cruising drones. Lower discharge but much higher capacity than LiPo.", specs: ["Capacity: 3000mAh", "Weight: 200g"], featured: false },
  { id: 29, name: "Wingspan Servo 9g", slug: "wingspan-servo-9g", category: "motors-servos", price: 350, images: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600"], shortDescription: "Digital micro servo for plane control.", description: "Precise and lightweight digital servo with nylon gears for weight savings.", specs: ["Speed: 0.12s/60deg", "Weight: 9g"], featured: false },
  { id: 30, name: "ESC 4-in-1 55A Pro", slug: "esc-4-in-1-55a-pro", category: "fpv-drones", price: 6200, images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600"], shortDescription: "High-power BLHeli_32 4-in-1 ESC.", description: "Supports the latest DShot protocols. Rated for up to 6S builds and heavy cinematic drones.", specs: ["Current: 55A Continuous", "Burst: 65A", "Protocol: DShot1200"], featured: false }
];

export default products;