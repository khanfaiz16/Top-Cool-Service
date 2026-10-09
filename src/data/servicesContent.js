// src/data/servicesContent.js
// Deep technical and diagnostic information for each of the 6 appliance categories

export const servicesDetailedData = {
  'ac-repair': {
    title: 'AC Repair & Servicing',
    slug: '/ac-repair',
    heroTag: 'Split & Window AC Specialists in Mumbai & Thane',
    headline: 'Fast, Reliable Air Conditioner Repair & Chemical Servicing',
    description:
      'From refrigerant leaks and compressor overheating to PCB circuit diagnostics and power tripping, our technicians provide complete doorstep AC solutions across Mumbai and Thane.',
    issuesSolved: [
      'AC blowing room-temperature air or not cooling properly',
      'Refrigerant gas leak detection, brazing, and R32 / R410A refilling',
      'Water dripping or leaking from indoor unit casing',
      'Unusual humming, squeaking, or buzzing blower noises',
      'Outdoor condenser unit fan failure or compressor tripping',
      'Inverter AC motherboard (PCB) error codes and sensor replacement',
    ],
    serviceIncludes: [
      'Precision temperature and electrical current (ampere) testing',
      'Deep jet pump chemical cleaning for evaporator and condenser coils',
      'Drain pipe blockage flushing and condensate tray treatment',
      'Capacitor, contactor, and thermistor sensor checks',
      'Post-repair cooling performance verification and seal checks',
    ],
    brandsSupported: ['Voltas', 'Daikin', 'LG', 'Samsung', 'Hitachi', 'Panasonic', 'Godrej', 'Haier', 'Whirlpool', 'Siemens', 'Electrolux', 'Bosch', 'IFB'],
  },

  'refrigerator-repair': {
    title: 'Refrigerator Repair',
    slug: '/refrigerator-repair',
    heroTag: 'Doorstep Refrigerator Care in Mumbai & Thane',
    headline: 'Single Door, Double Door & Side-by-Side Fridge Diagnostics',
    description:
      'A broken refrigerator quickly spoils perishable food. We provide timely on-site repairs for cooling failure, frost build-up, inverter compressor faults, and faulty thermostat sensors.',
    issuesSolved: [
      'Freezer is cold but the lower fresh food compartment stays warm',
      'Excessive frost build-up in frost-free refrigerators (defrost system failure)',
      'Inverter compressor clicking continuously without starting',
      'Water pooling beneath the vegetable crisper or leaking on the floor',
      'Unusual rattling or clicking sounds from the rear motor area',
      'Digital display error codes, interior LED light failure, or door gasket gaps',
    ],
    serviceIncludes: [
      'Compressor relay and overload protector diagnostic check',
      'Defrost timer, bi-metal thermostat, and defrost heater testing',
      'Capillary tube check and refrigerant gas charging',
      'Evaporator fan motor and condenser airflow inspection',
      'Magnetic door seal inspection to stop cold air leakage',
    ],
    brandsSupported: ['Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Bosch', 'Siemens', 'Panasonic', 'Hitachi', 'Electrolux', 'Voltas', 'Daikin', 'IFB'],
  },

  'washing-machine-repair': {
    title: 'Washing Machine Repair',
    slug: '/washing-machine-repair',
    heroTag: 'Front Load & Top Load Washing Machine Care',
    headline: 'Accurate Drum, Motor & Drain Diagnostics at Your Home',
    description:
      'We repair front-load, top-load, and semi-automatic washing machines. Whether your machine stops mid-cycle, shakes violently during spin, or refuses to drain, we diagnose the root cause on-site.',
    issuesSolved: [
      'Washing machine not draining water (drain pump clog or motor failure)',
      'Drum not spinning or rotating during the wash or spin cycle',
      'Violent shaking, banging noises, or walking across the floor',
      'Water inlet valve not filling or constantly overfilling the tub',
      'Door locked shut and refusing to unlock after cycle completion',
      'Main PCB control panel error codes (e.g., E1, E2, OE, UE, dE)',
    ],
    serviceIncludes: [
      'Suspension shock absorber and damper inspection',
      'Drive belt and motor carbon brush condition check',
      'Drain pump cleanout, coin trap clearance, and impeller testing',
      'Pressure sensor (water level switch) and inlet solenoid test',
      'Door interlock safety switch check and main PCB circuit tracing',
    ],
    brandsSupported: ['IFB', 'Bosch', 'LG', 'Samsung', 'Whirlpool', 'Siemens', 'Haier', 'Panasonic', 'Godrej', 'Hitachi', 'Electrolux', 'Voltas', 'Daikin'],
  },

  'microwave-repair': {
    title: 'Microwave Oven Repair',
    slug: '/microwave-repair',
    heroTag: 'Solo, Grill & Convection Microwave Service',
    headline: 'Safe, Professional Microwave Diagnostics & Electrical Checks',
    description:
      'Microwaves store dangerous high voltage even when unplugged. Never attempt DIY fixes. Our trained technicians safely inspect and repair heating faults, sparks, touchpads, and turntable motors.',
    issuesSolved: [
      'Microwave runs and turns but does not heat food at all',
      'Loud humming noise accompanied by burning smell',
      'Sparks and electrical arcing inside the cooking cavity',
      'Turntable glass plate not rotating smoothly',
      'Touchpad buttons unresponsive or membrane switch failure',
      'Machine trips the household circuit breaker (MCB) immediately when started',
    ],
    serviceIncludes: [
      'High-voltage capacitor discharge and magnetron emission test',
      'High-voltage diode, fuse, and transformer testing',
      'Mica waveguide cover inspection and replacement for arcing issues',
      'Door safety interlock micro-switch alignment and safety checks',
      'Turntable synchronous motor and drive coupler check',
    ],
    brandsSupported: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Panasonic', 'Godrej', 'Haier', 'Bosch', 'Siemens', 'Hitachi', 'Electrolux', 'Voltas', 'Daikin'],
  },

  'clothes-dryer-repair': {
    title: 'Clothes Dryer Repair',
    slug: '/clothes-dryer-repair',
    heroTag: 'Condenser & Vented Dryer Service in Mumbai & Thane',
    headline: 'Keep Your Laundry Running With Prompt Dryer Repairs',
    description:
      'A malfunctioning clothes dryer disrupts your household laundry routine. We fix heating element failures, snapped drive belts, faulty thermostats, and lint-clogged exhaust systems.',
    issuesSolved: [
      'Dryer drum spins normally but produces no heat, leaving clothes damp',
      'Drum does not spin although motor humming is audible',
      'Dryer shuts off prematurely within minutes of starting cycle',
      'Excessive squeaking, screeching, or thumping noises during operation',
      'Dryer exterior gets burning hot due to restricted exhaust airflow',
      'Timer dial or digital display control board faults',
    ],
    serviceIncludes: [
      'Heating element continuity and thermal cut-off fuse test',
      'Drive belt tension, idler pulley, and drum roller inspection',
      'Blower fan wheel and lint ductwork clearance for proper airflow',
      'Operating thermostat and high-limit thermal safety switch check',
      'Drum glides, felt seals, and motor capacitor checks',
    ],
    brandsSupported: ['Bosch', 'IFB', 'Siemens', 'LG', 'Whirlpool', 'Samsung', 'Electrolux', 'Haier', 'Panasonic', 'Godrej', 'Hitachi', 'Voltas', 'Daikin'],
  },

  'dishwasher-repair': {
    title: 'Dishwasher Repair',
    slug: '/dishwasher-repair',
    heroTag: 'Built-in & Freestanding Dishwasher Care',
    headline: 'Specialized Dishwasher Drainage, Leak & Heating Fixes',
    description:
      'We service freestanding and integrated dishwashers. From standing dirty water at the tub bottom to milky glassware and spray arm clogs, our technicians ensure sparkling clean results.',
    issuesSolved: [
      'Dishwasher not draining water at the end of the cycle',
      'Dishes coming out dirty, gritty, or covered in white residue',
      'Water leaking from the bottom door seals onto kitchen cabinetry',
      'Dishwasher not filling with water or inlet valve buzzing',
      'Water remaining cold throughout the cycle (heating element error)',
      'Error beeps or flashing indicator lights indicating internal faults',
    ],
    serviceIncludes: [
      'Drain pump cleanout, non-return check valve, and hose inspection',
      'Wash circulation pump and impeller diagnostic',
      'Heating element and NTC temperature sensor test',
      'Spray arm nozzle inspection and food particle descaling',
      'Door perimeter rubber gasket and float switch flood safety check',
    ],
    brandsSupported: ['Bosch', 'Siemens', 'IFB', 'LG', 'Whirlpool', 'Samsung', 'Electrolux', 'Haier', 'Panasonic', 'Godrej', 'Hitachi', 'Voltas', 'Daikin'],
  },
};