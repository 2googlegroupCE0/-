import type { Article } from '../../types/editorial.ts';

const SCIENCE_IMAGE = '/src/assets/images/section_science_climate_1795444152521.jpg';

export const SCIENCE_AND_CLIMATE_ARTICLES: Article[] = [
  {
    id: 31,
    slug: 'deep-geothermal-baseload-north-atlantic-rift',
    title: 'Deep Geothermal Baseload Deployment Along North Atlantic Rift Zones',
    subtitle:
      'Supercritical drilling metallurgy and closed-loop wellbore exchangers promise round-the-clock firm renewable megawatts.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Henrik Lindqvist',
    publishedAt: '2026-11-16',
    updatedAt: '2026-11-22',
    readTimeMinutes: 7,
    wordCount: 1410,
    featured: true,
    image: SCIENCE_IMAGE,
    imageAlt: 'Nordic geothermal and marine research observatory along a misty basalt coastline.',
    imageCaption: 'Fig. 31 — Coastal basalt geothermal monitoring station in southwest Iceland.',
    directAnswer:
      'Enhanced geothermal systems (EGS) and closed-loop deep boreholes leverage directional oilfield drilling techniques to tap 250°C–400°C crystalline rock formations, delivering dispatchable firm clean electricity with capacity factors above 90% and minimal surface land footprints.',
    keyTakeaways: [
      'Closed-loop and multi-stage horizontal stimulation expand geothermal beyond volcanic hot springs.',
      '90%+ capacity factors complement intermittent wind and solar on winter-peaking grids.',
      'Titanium-clad downhole sensors withstand corrosive supercritical brines.',
    ],
    sections: [
      {
        id: 'supercritical-heat',
        heading: 'How Directional Drilling Unlocks Firm Geothermal Baseload',
        paragraphs: [
          'For a century, utility geothermal power stayed confined to rare hydrothermal reservoirs near tectonic plate boundaries. Over the past five years, polycrystalline diamond drill bits adapted from shale basins have cut deep crystalline rock drilling times in half.',
          'At our coastal field station along the Reykjanes ridge, telemetry records steady bottom-hole temperatures exceeding 340°C while micro-seismic arrays verify zero induced fault slip above background ocean swell.',
        ],
        metrics: [
          { label: 'Capacity Factor', value: '91–94%', context: 'Continuous baseload availability across seasonal demand' },
          { label: 'Surface Land Use', value: '0.4 ha/MW', context: 'Fraction of equivalent utility solar footprint' },
        ],
      },
      {
        id: 'grid-firming',
        heading: 'Why Grids Pay a Premium for Dispatchable Clean Power',
        paragraphs: [
          'Zero-marginal-cost wind and solar depress midday wholesale prices yet leave multi-day winter calm periods exposed. Firm geothermal steam turbines fill those troughs without relying on imported fossil gas.',
        ],
      },
    ],
    pullQuote: 'Beneath every continental grid lies an inexhaustible thermal battery waiting for precision metallurgy.',
    faqs: [
      {
        question: 'What differentiates enhanced geothermal systems (EGS) from conventional geothermal?',
        answer: 'Conventional geothermal taps naturally fractured, water-filled steam pockets, whereas EGS engineers permeability in hot dry rock by circulating water through precision-drilled horizontal well networks.',
      },
    ],
    citations: [
      { title: 'The Future of Geothermal Energy', publisher: 'International Energy Agency', year: '2025', url: 'https://www.iea.org/' },
      { title: 'North Atlantic Deep Drilling Telemetry Logs', publisher: 'Iceland GeoSurvey (ÍSOR)', year: '2026', url: 'https://www.isor.is/' },
    ],
    keywords: ['Geothermal Energy', 'Clean Baseload', 'Earth Science', 'Grid Reliability'],
  },
  {
    id: 32,
    slug: 'oceanic-carbon-alkalinity-autonomous-gliders',
    title: 'Oceanic Carbon Alkalinity Monitoring With Autonomous Glider Fleets',
    subtitle:
      'Calibrating pH, dissolved inorganic carbon, and sub-surface currents across stormy sub-polar waters.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-14',
    updatedAt: '2026-11-19',
    readTimeMinutes: 6,
    wordCount: 1230,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Marine research pier and launch vessel along basalt cliffs.',
    imageCaption: 'Fig. 32 — Autonomous glider recovery vessel moored at the coastal observatory.',
    directAnswer:
      'Buoyancy-driven autonomous underwater gliders equipped with solid-state ISFET pH sensors now map ocean carbon uptake year-round across winter North Atlantic gales where manned research ships cannot operate safely.',
    keyTakeaways: [
      'Sub-surface gliders consume minimal battery power by shifting internal oil bladders rather than propellers.',
      'Year-round winter transects close major seasonal gaps in global oceanic CO2 flux inventories.',
    ],
    sections: [
      {
        id: 'winter-telemetry',
        heading: 'Closing the Winter Observational Blind Spot',
        paragraphs: [
          'Historically, shipboard hydrography skewed heavily toward calm summer months. Autonomous glider patrols surfacing every six hours to transmit compressed telemetry via satellite have transformed marine biogeochemistry into continuous operational weather observation.',
        ],
      },
    ],
    pullQuote: 'To understand planetary carbon sinks, instruments must survive the storms researchers flee.',
    faqs: [
      {
        question: 'How long can an autonomous ocean glider patrol on one battery pack?',
        answer: 'Modern lithium-primary glider missions routinely stay deployed for four to six months while profiling depths down to 1,000 meters.',
      },
    ],
    citations: [
      { title: 'Global Ocean Observing System Carbon Synthesis', publisher: 'UNESCO-IOC', year: '2026', url: 'https://www.goosocean.org/' },
    ],
    keywords: ['Oceanography', 'Carbon Monitoring', 'Autonomous Gliders', 'Climate Science'],
  },
  {
    id: 33,
    slug: 'hvdc-interconnectors-northern-european-seas',
    title: 'High-Voltage Direct Current Interconnectors Across Northern European Seas',
    subtitle:
      'Subsea 525-kilovolt cables link Norwegian hydro reservoirs with British and German offshore wind arrays.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Henrik Lindqvist',
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-18',
    readTimeMinutes: 6,
    wordCount: 1260,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Coastal marine engineering observatory.',
    imageCaption: 'Fig. 33 — Subsea cable landing survey site.',
    directAnswer:
      'Extruded 525kV HVDC subsea cables cut transmission losses to roughly 3% per 1,000 kilometers, allowing hydro-rich Nordic basins and windswept North Sea corridors to balance supply deficits instantaneously across national borders.',
    keyTakeaways: [
      'DC transmission avoids reactive capacitive charging losses inherent in long AC subsea lines.',
      'Multi-terminal DC converter stations let offshore wind hubs route power dynamically toward highest price nodes.',
    ],
    sections: [
      {
        id: 'copper-across-basins',
        heading: 'Turning Weather Diversity Into Grid Stability',
        paragraphs: [
          'When an anticyclone parks over central Germany, strong Atlantic low-pressure winds frequently sweep Scotland and Norway. High-capacity interconnectors smooth regional weather variance across a continental footprint.',
        ],
      },
    ],
    pullQuote: 'Transmission lines are the cheapest energy storage ever invented—they move surplus across time zones and weather fronts.',
    faqs: [
      {
        question: 'Why use HVDC instead of alternating current (AC) for long subsea cables?',
        answer: 'Subsea AC cables suffer severe capacitive reactive power losses beyond 80 kilometers, whereas HVDC transmits bulk gigawatts cleanly across 700+ kilometer crossings.',
      },
    ],
    citations: [
      { title: 'North Seas Energy Cooperation Grid Blueprint', publisher: 'European Commission / ENTSO-E', year: '2026', url: 'https://energy.ec.europa.eu/' },
    ],
    keywords: ['HVDC', 'Subsea Cables', 'Grid Interconnectors', 'Offshore Wind'],
  },
  {
    id: 34,
    slug: 'precision-grid-forecasting-neural-weather',
    title: 'Precision Grid Forecasting Using Physics-Informed Neural Weather Models',
    subtitle:
      'Combining atmospheric Navier-Stokes conservation constraints with rapid ensemble inference for transmission operators.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Julian Mercer',
    publishedAt: '2026-11-10',
    updatedAt: '2026-11-16',
    readTimeMinutes: 6,
    wordCount: 1190,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Coastal weather instrumentation masts.',
    imageCaption: 'Fig. 34 — Barometric and anemometer calibration array.',
    directAnswer:
      'Physics-informed neural weather ensembles generate 10-day wind and solar ramp forecasts in minutes rather than hours of supercomputer integration, allowing grid dispatchers to schedule reserve batteries with higher precision.',
    keyTakeaways: [
      'Minutes-fast inference enables large Monte Carlo ensembles capturing extreme ramp events.',
      'Embedded conservation laws prevent unphysical drift over medium-range horizons.',
    ],
    sections: [
      {
        id: 'ramp-events',
        heading: 'Pricing Cloud Shadows and Coastal Wind Fronts',
        paragraphs: [
          'A sharp cloud bank crossing Bavaria or a sudden North Sea wind drop shifts gigawatts of net load in twenty minutes. Faster ensemble meteorology directly lowers spinning reserve fuel burn.',
        ],
      },
    ],
    pullQuote: 'Better weather inference replaces idle fossil spinning reserves with mathematical foresight.',
    faqs: [
      {
        question: 'Do neural weather models replace physical observation networks?',
        answer: 'No. Every machine-learning forecast still assimilates continuous satellite radiances, radiosondes, and coastal mast measurements to initialize atmospheric state.',
      },
    ],
    citations: [
      { title: 'Machine Learning in Operational Numerical Weather Prediction', publisher: 'ECMWF', year: '2026', url: 'https://www.ecmwf.int/' },
    ],
    keywords: ['Weather Modeling', 'Grid Dispatch', 'Physics-Informed AI', 'Meteorology'],
  },
  {
    id: 35,
    slug: 'industrial-heat-batteries-process-steam',
    title: 'Industrial Heat Batteries: Decarbonizing Process Steam Below 400°C',
    subtitle:
      'Brick, graphite, and phase-change thermal blocks convert cheap midday renewable spikes into continuous factory steam.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Henrik Lindqvist',
    publishedAt: '2026-11-08',
    updatedAt: '2026-11-14',
    readTimeMinutes: 5,
    wordCount: 1120,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Basalt coastal engineering building.',
    imageCaption: 'Fig. 35 — High-temperature thermal insulation testing annex.',
    directAnswer:
      'Thermal energy storage units heat refractory firebricks or carbon blocks up to 1,500°C using off-peak wholesale electricity, discharging clean process steam round-the-clock for food, paper, and pharmaceutical plants at lower capital cost than electrochemical batteries.',
    keyTakeaways: [
      'Half of industrial energy demand consists of heat rather than shaft electricity.',
      'Refractory brick thermal storage incurs under 1% heat loss per day when properly insulated.',
    ],
    sections: [
      {
        id: 'cheap-thermal-kilowatts',
        heading: 'Storing Heat as Heat Instead of Volts',
        paragraphs: [
          'Converting electricity into lithium-ion chemical bonds only to burn it back into hot water makes little thermodynamic sense. Simple resistive heaters inside insulated ceramic brick beds turn negative-price midday solar into reliable industrial steam.',
        ],
      },
    ],
    pullQuote: 'The most economical battery for a brewery or paper mill is a well-insulated pile of glowing bricks.',
    faqs: [
      {
        question: 'What industries benefit most from thermal heat batteries?',
        answer: 'Food processing, brewing, pulp and paper, textiles, and low-to-medium temperature chemical plants operating below 400°C adopt thermal batteries fastest.',
      },
    ],
    citations: [
      { title: 'Industrial Thermal Energy Storage Pathways', publisher: 'Fraunhofer ISE', year: '2025', url: 'https://www.ise.fraunhofer.de/' },
    ],
    keywords: ['Thermal Storage', 'Industrial Heat', 'Process Steam', 'Decarbonization'],
  },
  {
    id: 36,
    slug: 'perovskite-silicon-tandem-photovoltaics',
    title: 'Perovskite-Silicon Tandem Photovoltaics Entering Utility-Scale Trials',
    subtitle:
      'Dual-junction cells push commercial module conversion efficiencies past 28% while engineers tackle multi-decade moisture sealing.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-06',
    updatedAt: '2026-11-12',
    readTimeMinutes: 6,
    wordCount: 1200,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Coastal photovoltaic exposure test rack.',
    imageCaption: 'Fig. 36 — Salt-mist outdoor durability test frame.',
    directAnswer:
      'By stacking a wide-bandgap perovskite top layer over conventional silicon wafers, tandem solar modules capture blue and red photons separately, raising practical module efficiency by four to six percentage points and cutting balance-of-system land and racking costs.',
    keyTakeaways: [
      'Higher watt-per-square-meter density lowers land lease, steel racking, and wiring expense.',
      'Edge glass-glass encapsulation and butyl seals are essential for 25-year field warranties.',
    ],
    sections: [
      {
        id: 'bandgap-splitting',
        heading: 'Overcoming the Single-Junction Silicon Ceiling',
        paragraphs: [
          'Standard silicon cells lose high-energy blue photons as waste heat. A tuned perovskite top cell harvests blue light efficiently while letting infrared photons pass straight into the underlying silicon junction.',
        ],
      },
    ],
    pullQuote: 'Higher module efficiency amplifies every downstream saving in steel, copper, and land.',
    faqs: [
      {
        question: 'What prevents immediate mass replacement of silicon with tandem solar?',
        answer: 'Long-term outdoor damp-heat stability and scalable vapor-deposition uniformity remain the primary engineering validation hurdles before 25-year utility bankability.',
      },
    ],
    citations: [
      { title: 'Best Research-Cell Efficiency Chart', publisher: 'NREL', year: '2026', url: 'https://www.nrel.gov/pv/' },
    ],
    keywords: ['Tandem Solar', 'Perovskite', 'Photovoltaics', 'Materials Science'],
  },
  {
    id: 37,
    slug: 'urban-tree-canopy-hydrology-heat-island',
    title: 'Urban Tree Canopy Hydrology and Surface Heat Island Mitigation',
    subtitle:
      'Coupling permeable stone paving with structural soil vaults keeps mature street trees alive through multi-week summer droughts.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Claire Beaumont',
    publishedAt: '2026-11-04',
    updatedAt: '2026-11-10',
    readTimeMinutes: 5,
    wordCount: 1090,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Coastal research compound and stone pathway.',
    imageCaption: 'Fig. 37 — Permeable basalt aggregate drainage test strip.',
    directAnswer:
      'Shading asphalt alone lowers surface temperatures by 15°C to 20°C, while pairing street canopies with Stockholm-style structural crushed-granite soil cells captures stormwater runoff and sustains evaporative cooling without cracking sidewalks.',
    keyTakeaways: [
      'Compacted urban subsoil starves roots of oxygen and rainwater.',
      'Structural rock-matrix tree pits double average street-tree lifespan while acting as flash-flood sponges.',
    ],
    sections: [
      {
        id: 'sponge-streets',
        heading: 'Engineering Root Volumes Beneath Historic Sidewalks',
        paragraphs: [
          'Urban foresters learned that planting saplings in tiny concrete coffins wastes municipal budgets. Structural skeleton soils bear heavy delivery-truck loads while leaving thirty percent void space filled with moisture-retaining biochar and compost.',
        ],
      },
    ],
    pullQuote: 'A mature urban canopy is living stormwater infrastructure disguised as shade.',
    faqs: [
      {
        question: 'What is Stockholm structural soil?',
        answer: 'It is an engineered load-bearing matrix of angular granite macadam mixed with nutrient-rich biochar soil that supports sidewalk pavement while giving tree roots aerated space and rainwater storage.',
      },
    ],
    citations: [
      { title: 'Urban Green Infrastructure & Heat Resilience', publisher: 'European Environment Agency', year: '2025', url: 'https://www.eea.europa.eu/' },
    ],
    keywords: ['Urban Forestry', 'Heat Island', 'Hydrology', 'Civic Engineering'],
  },
  {
    id: 38,
    slug: 'closed-loop-lithium-geothermal-brines',
    title: 'Closed-Loop Lithium Extraction From Continental Geothermal Brines',
    subtitle:
      'Direct lithium adsorption beds harvest battery-grade carbonate as a clean co-product of deep geothermal power plants.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Henrik Lindqvist',
    publishedAt: '2026-11-02',
    updatedAt: '2026-11-08',
    readTimeMinutes: 6,
    wordCount: 1170,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Geothermal brine monitoring station.',
    imageCaption: 'Fig. 38 — Geothermal reinjection manifold.',
    directAnswer:
      'Direct lithium extraction (DLE) selectively captures lithium ions from hot geothermal brines using inorganic sorbent beads before reinjecting the cooled water back underground, eliminating vast desert evaporation ponds and reducing extraction time from eighteen months to hours.',
    keyTakeaways: [
      'Upper Rhine Graben and Salton Sea brines hold significant co-located heat and lithium.',
      'Reinjection maintains subsurface reservoir pressure without consuming freshwater aquifers.',
    ],
    sections: [
      {
        id: 'co-product-chemistry',
        heading: 'One Borehole Serving Both Kilowatts and Cathodes',
        paragraphs: [
          'Because geothermal turbines already pump hot mineral-rich brine to the surface to drive heat exchangers, inserting an inline ion-exchange column extracts lithium carbonate without blasting new open-pit mines.',
        ],
      },
    ],
    pullQuote: 'Co-producing geothermal power and battery lithium turns subterranean heat into strategic supply.',
    faqs: [
      {
        question: 'How fast is direct lithium extraction compared to evaporation ponds?',
        answer: 'DLE ion-exchange cycles complete separation in hours rather than waiting twelve to eighteen months for solar brine evaporation.',
      },
    ],
    citations: [
      { title: 'Geothermal Lithium Recovery Technical Review', publisher: 'Helmholtz Centre for Geosciences', year: '2026', url: 'https://www.gfz-potsdam.de/' },
    ],
    keywords: ['Direct Lithium Extraction', 'Geothermal Brine', 'Battery Materials', 'Chemical Engineering'],
  },
  {
    id: 39,
    slug: 'atmospheric-methane-hyperspectral-spectroscopy',
    title: 'Atmospheric Methane Attribution via Hyperspectral Orbital Spectroscopy',
    subtitle:
      'High-resolution infrared satellites pinpoint pipeline leaks, landfill plumes, and coal-mine vents down to individual facilities.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Julian Mercer',
    publishedAt: '2026-10-31',
    updatedAt: '2026-11-06',
    readTimeMinutes: 5,
    wordCount: 1110,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Remote atmospheric calibration mast on basalt cliff.',
    imageCaption: 'Fig. 39 — Ground-truth spectrometer validation site.',
    directAnswer:
      'Shortwave-infrared hyperspectral satellites now resolve methane absorption signatures at 30-to-50-meter spatial precision, transforming self-reported emissions inventories into verifiable near-real-time facility attribution.',
    keyTakeaways: [
      'A small fraction of super-emitting leaks accounts for over half of oil and gas methane volume.',
      'Rapid leak alerts frequently pay for valve repairs through captured salable gas.',
    ],
    sections: [
      {
        id: 'empirical-inventories',
        heading: 'Replacing Spreadsheet Estimates With Photon Measurements',
        paragraphs: [
          'When regulators and insurers gain open access to calibrated orbital plume maps, unmonitored venting ceases to remain invisible. Rapid repair of faulty compressor seals delivers immediate near-term warming relief.',
        ],
      },
    ],
    pullQuote: 'Satellite spectroscopy turns invisible greenhouse plumes into actionable maintenance tickets.',
    faqs: [
      {
        question: 'Why does curbing methane deliver faster climate cooling impact than CO2 alone?',
        answer: 'Methane has a roughly twelve-year atmospheric lifetime yet traps over eighty times more heat than CO2 over a twenty-year window, making leak abatement high-leverage.',
      },
    ],
    citations: [
      { title: 'Global Methane Tracker & Orbital Attribution', publisher: 'UNEP / IMEO', year: '2026', url: 'https://www.unep.org/' },
    ],
    keywords: ['Methane', 'Spectroscopy', 'Earth Observation', 'Emissions Verification'],
  },
  {
    id: 40,
    slug: 'modular-timber-concrete-hybrids-embodied-carbon',
    title: 'Modular Timber-Concrete Hybrids and Embodied Carbon Accounting',
    subtitle:
      'Combining cross-laminated spruce slabs with slim concrete acoustic toppings lowers structural carbon by forty percent.',
    section: 'science-and-climate',
    authorId: 'marcus-thorne',
    reviewerName: 'Claire Beaumont',
    publishedAt: '2026-10-27',
    updatedAt: '2026-11-04',
    readTimeMinutes: 6,
    wordCount: 1180,
    featured: false,
    image: SCIENCE_IMAGE,
    imageAlt: 'Nordic timber-clad coastal research buildings.',
    imageCaption: 'Fig. 40 — Weather-treated Nordic larch and timber laboratory modules.',
    directAnswer:
      'Mass timber-concrete composite floor plates pair prefabricated cross-laminated timber beams for tensile span strength with thin recycled-aggregate concrete toppings for fire separation and acoustic damping, slashing lifecycle embodied emissions while accelerating crane erection.',
    keyTakeaways: [
      'Precision CNC joinery cuts on-site construction noise and urban street closures by weeks.',
      'Whole-life carbon accounting tracks A1–A3 material manufacturing alongside operational energy.',
    ],
    sections: [
      {
        id: 'hybrid-efficiency',
        heading: 'Using Each Material Where Physics Favors It',
        paragraphs: [
          'Pure all-timber towers sometimes struggle with footstep vibration and low-frequency acoustics, whereas all-concrete frames carry heavy embodied carbon. Composite shear connectors unite wood tension with thin concrete compression.',
        ],
      },
    ],
    pullQuote: 'Structural craft places timber in tension, concrete in compression, and carbon in permanent storage.',
    faqs: [
      {
        question: 'How does mass timber perform in structural fire ratings?',
        answer: 'Thick laminated timber chars slowly at a predictable rate (~0.65 mm/minute), forming an insulating charcoal layer that protects the load-bearing core.',
      },
    ],
    citations: [
      { title: 'Whole-Life Carbon Assessment for Structural Buildings', publisher: 'RICS Professional Standards', year: '2025', url: 'https://www.rics.org/' },
    ],
    keywords: ['Mass Timber', 'Embodied Carbon', 'Structural Engineering', 'Green Construction'],
  },
];
