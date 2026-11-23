import type { Article } from '../../types/editorial.ts';

const ECON_IMAGE = '/src/assets/images/section_global_economy_1795444152846.jpg';

export const GLOBAL_ECONOMY_ARTICLES: Article[] = [
  {
    id: 11,
    slug: 'european-industrial-electrification-capex-cycles',
    title: 'European Industrial Electrification and Grid Capital Expenditure Cycles',
    subtitle:
      'How heavy manufacturing across the Rhine and Nordic basins is pacing multi-decade transformer, substation, and industrial heat investments.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Dr. Marcus Thorne',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-22',
    readTimeMinutes: 7,
    wordCount: 1390,
    featured: true,
    image: ECON_IMAGE,
    imageAlt: 'Classical European financial exchange hall and travertine colonnade.',
    imageCaption: 'Fig. 11 — Milan Bourse colonnade overlooking European industrial equity desks.',
    directAnswer:
      'European industrial electrification has shifted from policy aspiration to binding balance-sheet allocation, with transmission operators and industrial conglomerates committing multi-year capital expenditure toward high-voltage substations, process heat pumps, and long-term renewable power purchase agreements.',
    keyTakeaways: [
      'Transformer lead times remain the primary physical bottleneck in factory electrification.',
      'Regions combining hydro/nuclear baseload with industrial ports capture disproportionate chemical and steel capex.',
      'Long-term corporate power contracts stabilize unit manufacturing margins against spot gas volatility.',
    ],
    sections: [
      {
        id: 'balance-sheet-shift',
        heading: 'Where Is Industrial Capital Actually Flowing in 2026?',
        paragraphs: [
          'Beneath headline debates over carbon border adjustments, plant engineers across Germany, Sweden, and northern Italy are executing a quieter transformation: replacing mid-temperature fossil boilers with grid-tied industrial heat pumps and electric arc capacity.',
          'Unlike software deployments, grid electrification moves at the speed of switchgear permitting and copper winding capacity. Capital expenditure filings show transmission operators expanding five-year investment envelopes by more than forty percent relative to the previous decade.',
        ],
        metrics: [
          { label: 'Transmission Capex Growth', value: '+42%', context: 'Five-year European TSO investment expansion cycle' },
          { label: 'Large Power Transformer Wait', value: '28–36 mo', context: 'Average procurement lead time for >100 MVA units' },
        ],
      },
      {
        id: 'baseload-geography',
        heading: 'The Geography of Competitive Industrial Kilowatt-Hours',
        paragraphs: [
          'Energy-intensive production increasingly clusters near low-marginal-cost clean baseload—hydroelectric basins in Scandinavia, offshore wind corridors along the North Sea, and nuclear-anchored grids in France and Finland.',
        ],
      },
    ],
    pullQuote: 'Industrial competitiveness in the coming decade will be priced in reliable megawatts per square kilometer.',
    faqs: [
      {
        question: 'What is the biggest bottleneck in European factory electrification?',
        answer: 'High-voltage grid connection queues and multi-year lead times for large power transformers currently constrain electrification faster than capital availability.',
      },
    ],
    citations: [
      { title: 'Ten-Year Network Development Plan', publisher: 'ENTSO-E', year: '2026', url: 'https://www.entsoe.eu/' },
      { title: 'European Industrial Decarbonisation Investment Outlook', publisher: 'European Investment Bank', year: '2026', url: 'https://www.eib.org/' },
    ],
    keywords: ['Industrial Electrification', 'Grid Capex', 'European Economy', 'Energy Markets'],
  },
  {
    id: 12,
    slug: 'supply-chain-regionalization-north-atlantic',
    title: 'Supply Chain Regionalization Across North Atlantic Manufacturing Corridors',
    subtitle:
      'Measuring inventory buffers, nearshoring economics, and precision tooling trade between North America and Europe.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-15',
    updatedAt: '2026-11-20',
    readTimeMinutes: 6,
    wordCount: 1210,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'Classical European financial exchange colonnade.',
    imageCaption: 'Fig. 12 — Cross-border trade finance offices in Frankfurt.',
    directAnswer:
      'North Atlantic manufacturers are trading lean just-in-time single-source models for regionalized dual-sourcing networks, holding higher strategic component buffers in exchange for predictable customs clearance and shorter maritime transit exposure.',
    keyTakeaways: [
      'Regionalized supply chains prioritize transit variance reduction over rock-bottom unit labor costs.',
      'Automated CNC tooling narrows labor arbitrage gaps between high-wage and low-wage jurisdictions.',
      'Working capital ratios reflect structurally higher safety stock in semiconductors and specialty alloys.',
    ],
    sections: [
      {
        id: 'resilience-pricing',
        heading: 'Why Transit Variance Replaced Unit Cost as the Boardroom Metric',
        paragraphs: [
          'A two-week delay on a specialized valve or power module halts an entire assembly line, dwarfing any five-percent savings on unit procurement. Chief operating officers now model supplier distance as an explicit balance-sheet risk variable.',
        ],
      },
    ],
    pullQuote: 'Geography has returned to corporate finance not as nostalgia, but as an insurance premium against disruption.',
    faqs: [
      {
        question: 'Does nearshoring inevitably raise consumer prices?',
        answer: 'While regional labor costs can be higher, factory automation, lower freight insurance, and reduced stockout penalties frequently offset much of the unit differential.',
      },
    ],
    citations: [
      { title: 'Global Value Chain Resilience Report', publisher: 'OECD Trade Directorate', year: '2026', url: 'https://www.oecd.org/' },
    ],
    keywords: ['Supply Chains', 'Nearshoring', 'Manufacturing', 'Trade Finance'],
  },
  {
    id: 13,
    slug: 'economics-of-sovereign-compute-infrastructure',
    title: 'The Economics of Sovereign Compute Infrastructure and Energy Pricing',
    subtitle:
      'Why data-center siting now hinges on substation capacity, waste-heat district loops, and long-term power agreements.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Julian Mercer',
    publishedAt: '2026-11-13',
    updatedAt: '2026-11-19',
    readTimeMinutes: 7,
    wordCount: 1360,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'European exchange hall interior.',
    imageCaption: 'Fig. 13 — Infrastructure capital allocation briefing.',
    directAnswer:
      'Sovereign compute campuses behave economically like aluminum smelters: capital intensity is dominated by multi-gigawatt grid access, liquid cooling engineering, and multi-decade electricity contracts rather than municipal land prices.',
    keyTakeaways: [
      'Nordic and alpine campuses couple cold ambient air with municipal district-heating recovery.',
      'Grid interconnection timelines govern AI cluster deployment schedules more tightly than silicon supply.',
    ],
    sections: [
      {
        id: 'kilowatt-arbitrage',
        heading: 'Data Centers as Thermal and Grid Assets',
        paragraphs: [
          'In Stockholm, Zurich, and Helsinki, modern compute facilities feed low-grade liquid-cooling heat directly into urban residential heating networks, turning industrial power draw into civic thermal utility.',
        ],
      },
    ],
    pullQuote: 'Compute economics begin at the substation fence, long before the first rack powers on.',
    faqs: [
      {
        question: 'Why are European compute clusters moving north?',
        answer: 'Cool climates lower mechanical chiller loads while abundant hydroelectric and nuclear grids offer stable, low-carbon baseload electricity.',
      },
    ],
    citations: [
      { title: 'Electricity Demand from Data Centres', publisher: 'International Energy Agency (IEA)', year: '2026', url: 'https://www.iea.org/' },
    ],
    keywords: ['Compute Economics', 'Data Centers', 'Energy Pricing', 'Infrastructure'],
  },
  {
    id: 14,
    slug: 'central-bank-liquidity-long-duration-bonds',
    title: 'Central Bank Liquidity Regimes and Long-Duration Bond Market Structure',
    subtitle:
      'Examining sovereign debt issuance, term premia, and institutional duration matching across major G10 curves.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-11',
    updatedAt: '2026-11-17',
    readTimeMinutes: 6,
    wordCount: 1240,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'Classical European bourse colonnade.',
    imageCaption: 'Fig. 14 — Fixed-income trading gallery.',
    directAnswer:
      'As central banks transition from quantitative expansion toward smaller steady-state balance sheets, private pension funds, insurers, and sovereign wealth buyers have resumed setting marginal clearing yields on ten-to-thirty-year government bonds.',
    keyTakeaways: [
      'Positive term premia restore traditional price discovery at the long end of yield curves.',
      'Fiscal deficit trajectories influence auction tail metrics more visibly without central bank absorption.',
    ],
    sections: [
      {
        id: 'price-discovery',
        heading: 'The Return of Private Marginal Bond Buyers',
        paragraphs: [
          'For more than a decade after 2008, price-insensitive central bank asset purchases compressed term premia near zero. Today, institutional liability managers demand measurable real-yield compensation for holding thirty-year duration risk.',
        ],
      },
    ],
    pullQuote: 'Healthy bond markets require buyers who care deeply about the price of time.',
    faqs: [
      {
        question: 'What is the term premium in sovereign bond yields?',
        answer: 'The term premium is the extra yield investors require to hold a longer-maturity bond rather than rolling over a sequence of short-term bills.',
      },
    ],
    citations: [
      { title: 'Quarterly Review of International Banking and Financial Markets', publisher: 'Bank for International Settlements (BIS)', year: '2026', url: 'https://www.bis.org/' },
    ],
    keywords: ['Central Banks', 'Bond Markets', 'Term Premia', 'Macroeconomics'],
  },
  {
    id: 15,
    slug: 'maritime-freight-bottlenecks-insurance-repricing',
    title: 'Maritime Freight Bottlenecks and Insurance Repricing in Global Trade',
    subtitle:
      'How canal draft limits, coastal rerouting, and hull underwriting reshuffle container shipping schedules.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Sophia Alverez',
    publishedAt: '2026-11-09',
    updatedAt: '2026-11-15',
    readTimeMinutes: 5,
    wordCount: 1090,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'European exchange hall.',
    imageCaption: 'Fig. 15 — Marine underwriting and freight settlement district.',
    directAnswer:
      'Climate-linked canal draft restrictions and geopolitical chokepoint diversions absorb effective global vessel capacity, turning marine hull insurance and bunker fuel efficiency into decisive levers of trade competitiveness.',
    keyTakeaways: [
      'Longer Cape voyages tie up container tonnage for ten to fourteen extra days per rotation.',
      'Dual-fuel methanol and LNG vessels command charter premia on transoceanic lanes.',
    ],
    sections: [
      {
        id: 'tonnage-absorption',
        heading: 'Why Extra Nautical Miles Shrink Fleet Supply',
        paragraphs: [
          'When trunk routes extend around continental capes, the world fleet effectively shrinks overnight without a single ship leaving service. Shippers respond by diversifying port gateways and locking multi-quarter contract rates.',
        ],
      },
    ],
    pullQuote: 'Every extra week at sea turns physical distance into working capital.',
    faqs: [
      {
        question: 'How do shipping reroutes affect global manufacturing?',
        answer: 'Longer transit durations increase in-transit inventory costs and force manufacturers to schedule earlier component dispatches.',
      },
    ],
    citations: [
      { title: 'Review of Maritime Transport', publisher: 'UNCTAD', year: '2025', url: 'https://unctad.org/' },
    ],
    keywords: ['Maritime Trade', 'Freight Logistics', 'Marine Insurance', 'Global Shipping'],
  },
  {
    id: 16,
    slug: 'productivity-measurement-in-knowledge-work',
    title: 'Productivity Measurement in Knowledge Work After Generative Software',
    subtitle:
      'Distinguishing faster draft generation from genuine organizational throughput and error reduction.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-07',
    updatedAt: '2026-11-13',
    readTimeMinutes: 6,
    wordCount: 1280,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'Financial hall interior.',
    imageCaption: 'Fig. 16 — Corporate productivity symposium.',
    directAnswer:
      'Economists find that generative software accelerates individual drafting and code scaffolding immediately, yet firm-level total factor productivity rises only when organizations redesign review, verification, and decision workflows to prevent verification bottlenecks.',
    keyTakeaways: [
      'Unchecked draft volume can overwhelm senior reviewers if quality gates stay manual.',
      'Firms pairing automated test harnesses with structured documentation capture durable cycle-time gains.',
    ],
    sections: [
      {
        id: 'solow-paradox-revisited',
        heading: 'Review Bandwidth as the New Scarcity',
        paragraphs: [
          'When generating a ten-page memo takes seconds rather than hours, the scarce resource inside an enterprise shifts from authoring to verification. Organizations that treat editorial rigor and automated validation as core infrastructure convert speed into reliability.',
        ],
      },
    ],
    pullQuote: 'Acceleration without verification merely shifts the bottleneck from creation to review.',
    faqs: [
      {
        question: 'Why does macro productivity lag individual software adoption?',
        answer: 'Historical technology transitions—from factory electrification to enterprise computing—required complementary organizational redesign before gains appeared in national GDP statistics.',
      },
    ],
    citations: [
      { title: 'AI Adoption and Firm-Level Productivity Dynamics', publisher: 'NBER Working Paper Series', year: '2026', url: 'https://www.nber.org/' },
    ],
    keywords: ['Productivity', 'Knowledge Work', 'Labor Economics', 'Workflow Design'],
  },
  {
    id: 17,
    slug: 'municipal-housing-bonds-transit-land-valuation',
    title: 'Municipal Housing Bonds and Transit-Oriented Urban Land Valuation',
    subtitle:
      'How Vienna, Zurich, and Copenhagen finance mixed-income rail-corridor housing without destabilizing municipal balance sheets.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Claire Beaumont',
    publishedAt: '2026-11-05',
    updatedAt: '2026-11-11',
    readTimeMinutes: 6,
    wordCount: 1220,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'European civic exchange architecture.',
    imageCaption: 'Fig. 17 — Municipal bond underwriting archive.',
    directAnswer:
      'Cities that pair municipal land trusts with long-term low-coupon housing bonds capture land-value uplift along new tram and commuter rail lines, sustaining affordable mixed-income neighborhoods with predictable forty-year debt service.',
    keyTakeaways: [
      'Revolving municipal housing funds reinvest modest rents into continuous infill construction.',
      'Station-area upzoning dramatically lowers per-resident infrastructure maintenance costs.',
    ],
    sections: [
      {
        id: 'land-value-capture',
        heading: 'Closing the Transit-Housing Fiscal Loop',
        paragraphs: [
          'Every new light-rail extension creates immediate private land value around its stations. Cities that retain leasehold stakes in adjacent parcels recycle that appreciation into schools, parks, and durable timber-hybrid apartment blocks.',
        ],
      },
    ],
    pullQuote: 'Affordable cities treat transit and housing as one unified capital ledger.',
    faqs: [
      {
        question: 'What makes municipal housing bonds attractive to pension funds?',
        answer: 'Predictable occupancy rates and long asset lifespans match the multi-decade inflation-linked liabilities of institutional pension portfolios.',
      },
    ],
    citations: [
      { title: 'Financing Sustainable Urban Mobility and Housing', publisher: 'Lincoln Institute of Land Policy', year: '2025', url: 'https://www.lincolninst.edu/' },
    ],
    keywords: ['Municipal Bonds', 'Urban Economics', 'Transit Housing', 'Land Value'],
  },
  {
    id: 18,
    slug: 'critical-mineral-refining-bottlenecks',
    title: 'Critical Mineral Refining Bottlenecks in Battery and Grid Supply Chains',
    subtitle:
      'Why metallurgical processing capacity, rather than raw geological reserves, governs copper, lithium, and rare-earth supply security.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Dr. Marcus Thorne',
    publishedAt: '2026-11-03',
    updatedAt: '2026-11-09',
    readTimeMinutes: 6,
    wordCount: 1190,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'European exchange hall.',
    imageCaption: 'Fig. 18 — Commodity settlement and metals index board.',
    directAnswer:
      'While lithium, copper, and nickel deposits are geographically widespread, high-purity chemical refining remains heavily concentrated. Permitting clean hydrometallurgical refineries and urban battery recycling plants is now central to industrial trade policy.',
    keyTakeaways: [
      'Refining concentration creates single-point supply risks even when mines are diversified.',
      'Closed-loop cathode recycling recovers up to 95% of cobalt and nickel from retired packs.',
    ],
    sections: [
      {
        id: 'midstream-concentration',
        heading: 'The Midstream Chemistry Gap',
        paragraphs: [
          'Mining rock is only the opening chapter of battery manufacturing. Transforming raw spodumene or brine into battery-grade hydroxide requires precision chemical plants with strict water stewardship and reliable industrial power.',
        ],
      },
    ],
    pullQuote: 'Geology distributes minerals widely; industrial chemistry concentrates leverage.',
    faqs: [
      {
        question: 'Why is copper supply watched so closely by grid planners?',
        answer: 'Every wind turbine, solar inverter, substation transformer, and electric vehicle drivetrain depends on high-conductivity refined copper.',
      },
    ],
    citations: [
      { title: 'Global Critical Minerals Outlook', publisher: 'International Energy Agency', year: '2026', url: 'https://www.iea.org/' },
    ],
    keywords: ['Critical Minerals', 'Battery Refining', 'Copper Supply', 'Industrial Policy'],
  },
  {
    id: 19,
    slug: 'cross-border-digital-services-settlement',
    title: 'Cross-Border Digital Services Taxation and Instant Settlement Standards',
    subtitle:
      'Tracking ISO 20022 messaging adoption, VAT compliance automation, and multilateral corporate tax alignment.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Julian Mercer',
    publishedAt: '2026-11-01',
    updatedAt: '2026-11-07',
    readTimeMinutes: 5,
    wordCount: 1080,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'European exchange colonnade.',
    imageCaption: 'Fig. 19 — Interbank clearing house facade.',
    directAnswer:
      'Harmonized ISO 20022 payment messaging and real-time VAT reporting protocols are compressing cross-border settlement times from days to seconds while giving treasuries standardized audit trails across jurisdictions.',
    keyTakeaways: [
      'Rich structured remittance fields in ISO 20022 reduce manual invoice reconciliation errors.',
      'Digital e-invoicing mandates across Europe simplify cross-border B2B compliance.',
    ],
    sections: [
      {
        id: 'structured-remittance',
        heading: 'Payment Rails Meet Structured Metadata',
        paragraphs: [
          'Just as Schema.org removed ambiguity from web articles, ISO 20022 embeds explicit entity identifiers, tax categories, and settlement currencies directly inside interbank payment messages.',
        ],
      },
    ],
    pullQuote: 'Structured data governs the speed of capital as surely as it governs the speed of search.',
    faqs: [
      {
        question: 'What is ISO 20022?',
        answer: 'ISO 20022 is an international open standard for electronic data interchange between financial institutions using rich XML and structured schemas.',
      },
    ],
    citations: [
      { title: 'Cross-Border Payments Interoperability Report', publisher: 'Financial Stability Board', year: '2025', url: 'https://www.fsb.org/' },
    ],
    keywords: ['ISO 20022', 'Cross-Border Payments', 'Digital Taxation', 'FinTech Standards'],
  },
  {
    id: 20,
    slug: 'institutional-pension-allocation-real-assets',
    title: 'Institutional Pension Allocation Toward Real-Asset Infrastructure',
    subtitle:
      'Why sovereign and occupational funds are underwriting transmission grids, rail rolling stock, and water treatment utilities.',
    section: 'global-economy',
    authorId: 'henrik-lindqvist',
    reviewerName: 'Dr. Marcus Thorne',
    publishedAt: '2026-10-28',
    updatedAt: '2026-11-05',
    readTimeMinutes: 6,
    wordCount: 1200,
    featured: false,
    image: ECON_IMAGE,
    imageAlt: 'European financial hall.',
    imageCaption: 'Fig. 20 — Institutional asset management forum.',
    directAnswer:
      'Long-horizon pension funds increasingly allocate 10% to 18% of portfolios toward regulated physical infrastructure because inflation-indexed utility cash flows hedge retiree obligations better than volatile public equities alone.',
    keyTakeaways: [
      'Direct co-investment reduces intermediary fee drag over thirty-year holding periods.',
      'Regulated grid assets combine predictable cash yields with measurable decarbonization impact.',
    ],
    sections: [
      {
        id: 'patient-capital',
        heading: 'Matching Fifty-Year Liabilities to Fifty-Year Assets',
        paragraphs: [
          'A subsea power cable or municipal water filtration plant generates steady cash flows across half a century—precisely the horizon an occupational pension fund needs to honor future retiree payouts.',
        ],
      },
    ],
    pullQuote: 'Patient institutional capital builds the civic arteries that quarterly markets overlook.',
    faqs: [
      {
        question: 'Why do pension funds favor regulated infrastructure?',
        answer: 'Regulated utilities often adjust revenues with consumer price indices, offering natural inflation protection alongside low correlation to equity market swings.',
      },
    ],
    citations: [
      { title: 'Annual Survey of Large Pension Funds', publisher: 'OECD', year: '2025', url: 'https://www.oecd.org/' },
    ],
    keywords: ['Pension Funds', 'Real Assets', 'Infrastructure Finance', 'Institutional Capital'],
  },
];
