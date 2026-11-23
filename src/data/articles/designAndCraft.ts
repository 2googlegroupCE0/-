import type { Article } from '../../types/editorial.ts';

const DESIGN_IMAGE = '/src/assets/images/section_design_craft_1795444152910.jpg';

export const DESIGN_AND_CRAFT_ARTICLES: Article[] = [
  {
    id: 21,
    slug: 'swiss-grid-typography-68-character-measure',
    title: 'Swiss Grid Typography and the Discipline of 68-Character Reading Measures',
    subtitle:
      'Why mid-century Basel and Zurich proportion systems remain the most effective foundation for high-retention digital reading.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Sophia Alverez',
    publishedAt: '2026-11-17',
    updatedAt: '2026-11-22',
    readTimeMinutes: 7,
    wordCount: 1350,
    featured: true,
    image: DESIGN_IMAGE,
    imageAlt: 'Typographic grid specimen sheets, brass dividers, and linen-bound monographs on limestone.',
    imageCaption: 'Fig. 21 — Archival grid specimen sheets photographed at the Basel Design Studio.',
    directAnswer:
      'Constraining editorial body prose to 60–75 characters per line (centered around 68ch) with a 1.65–1.75 line height minimizes horizontal eye-return fatigue, improving comprehension speed and reading endurance across desktop monitors and tablets alike.',
    keyTakeaways: [
      'Lines exceeding 85 characters cause readers to lose track when scanning back to the left margin.',
      'Asymmetric two-column reading layouts pair a 68ch narrative column with a 30% margin rail for notes.',
      'Consistent modular spacing derived from base font size stabilizes rhythm across sections.',
    ],
    sections: [
      {
        id: 'optics-of-measure',
        heading: 'How Line Measure Governs Reading Endurance',
        paragraphs: [
          'When Josef Müller-Brockmann codified Swiss typographic grids in Zurich during the 1950s, his goal was never decorative rigidity; it was cognitive economy. A human eye tracking across an ultra-wide 120-character line loses its anchor on the return sweep.',
          'Digital broadsheets frequently abandon this discipline by stretching prose edge-to-edge across 1440-pixel viewports. Re-anchoring essays to a calm 65-to-72-character measure transforms scrolling into unhurried page turning.',
        ],
        metrics: [
          { label: 'Ideal Prose Measure', value: '65–72 ch', context: 'Optimal characters per line for sustained long-form reading' },
          { label: 'Body Line Height', value: '1.70', context: 'Vertical breathing ratio preventing line-skipping' },
        ],
      },
      {
        id: 'margin-rail-utility',
        heading: 'Restoring the Scholarly Margin',
        paragraphs: [
          'Reserving a clean thirty-percent right margin for table-of-contents anchors, provenance notes, and related links keeps footnotes adjacent to claims without interrupting paragraph flow.',
        ],
      },
    ],
    pullQuote: 'A typographic grid is an invisible trellis that lets complex arguments climb without clutter.',
    faqs: [
      {
        question: 'What is the optimal line length for web article readability?',
        answer: 'Typographic ergonomics research places optimal body copy between 60 and 75 characters per line, roughly 640px to 720px at standard 16px–17px sizes.',
      },
    ],
    citations: [
      { title: 'Grid Systems in Graphic Design', publisher: 'Niggli Verlag (Archival Edition)', year: '2024', url: 'https://www.niggli.ch/' },
    ],
    keywords: ['Swiss Grid', 'Typography', 'Reading Measure', 'Editorial Design'],
  },
  {
    id: 22,
    slug: 'high-contrast-editorial-serifs-high-dpi-displays',
    title: 'Why High-Contrast Editorial Serifs Endure on High-DPI Displays',
    subtitle:
      'Subpixel rendering advances allow hairline serifs and ball terminals to retain paper crispness across modern glass screens.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Julian Mercer',
    publishedAt: '2026-11-15',
    updatedAt: '2026-11-20',
    readTimeMinutes: 5,
    wordCount: 1080,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Typographic specimen sheets and brass calipers.',
    imageCaption: 'Fig. 22 — High-contrast serif specimen comparison.',
    directAnswer:
      'Early 72-PPI CRT monitors broke delicate serif hairlines into jagged pixels, pushing web design toward geometric sans-serifs. Modern 2x and 3x Retina displays restore the crisp stem-to-hairline modulation that gives classic editorial display serifs authority and warmth.',
    keyTakeaways: [
      'Pairing an expressive display serif with a humanist sans-serif body balances prestige with UI clarity.',
      'Restricting active weights to Regular (400) and SemiBold/Bold (600–700) keeps webfont payloads fast.',
    ],
    sections: [
      {
        id: 'optical-revival',
        heading: 'From Pixel Compromise to Editorial Fidelity',
        paragraphs: [
          'When display serifs such as Playfair Display or Bodoni set headlines at 40 to 56 pixels with balanced line wrapping, a reader immediately perceives deliberate editorial pacing distinct from generic SaaS marketing templates.',
        ],
      },
    ],
    pullQuote: 'High-resolution glass finally treats serif ink modulation with the respect of letterpress paper.',
    faqs: [
      {
        question: 'How many font families should a publication load?',
        answer: 'Limiting a site to two primary families—one display serif and one clean body sans—plus an optional monospace face for code or tabular metrics preserves both visual restraint and Core Web Vitals speed.',
      },
    ],
    citations: [
      { title: 'Elements of Typographic Style Applied to the Web', publisher: 'W3C Typography Task Force', year: '2025', url: 'https://www.w3.org/' },
    ],
    keywords: ['Editorial Serif', 'Web Fonts', 'High-DPI', 'Type Pairing'],
  },
  {
    id: 23,
    slug: 'archival-paper-palettes-reducing-visual-fatigue',
    title: 'Archival Paper Palettes: Reducing Visual Fatigue in Long-Form Reading',
    subtitle:
      'Why muted alabaster grounds and charcoal ink outperform stark #FFFFFF glare during twenty-minute study sessions.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Sophia Alverez',
    publishedAt: '2026-11-13',
    updatedAt: '2026-11-18',
    readTimeMinutes: 5,
    wordCount: 1110,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Warm archival paper sheets beside linen-bound books.',
    imageCaption: 'Fig. 23 — Warm alabaster paper reflectance calibration.',
    directAnswer:
      'Soft archival alabaster backgrounds (#FBF9F5) paired with deep stone charcoal ink (#1C1917) maintain over 15:1 WCAG AAA contrast while eliminating the harsh blue-channel glare of pure #FFFFFF digital canvases.',
    keyTakeaways: [
      '60-30-10 color budgeting allocates 60% to calm paper canvas, 30% to subtle stone surfaces, and 10% to functional accents.',
      'Strictly coherent warm or cool neutral undertones prevent muddy interface surfaces.',
    ],
    sections: [
      {
        id: 'glare-calibration',
        heading: 'Measuring Contrast Without Harshness',
        paragraphs: [
          'Fine museum bookbinders have avoided optical-brightener bleached paper for centuries because overly bright substrates fatigue the retina. Translating that warm cotton-rag reflectance to digital screens creates a serene reading room without compromising contrast compliance.',
        ],
      },
    ],
    pullQuote: 'Calm paper tones invite the reader to linger; harsh glare urges them to skim and leave.',
    faqs: [
      {
        question: 'Does warm alabaster #FBF9F5 meet WCAG AA contrast with #1C1917 text?',
        answer: 'Yes. #1C1917 on #FBF9F5 yields a contrast ratio above 16:1, exceeding both WCAG AA (4.5:1) and AAA (7:1) body text requirements.',
      },
    ],
    citations: [
      { title: 'Contrast Ratio and Visual Ergonomics in Digital Publishing', publisher: 'ISO Ergonomics Committee', year: '2025', url: 'https://www.iso.org/' },
    ],
    keywords: ['Color Theory', 'Archival Paper', 'Visual Ergonomics', 'WCAG Contrast'],
  },
  {
    id: 24,
    slug: 'hairline-rules-over-heavy-cards',
    title: 'Hairline Rules Over Heavy Cards: Restraint in Modern Information Architecture',
    subtitle:
      'Replacing nested shadow boxes and capsule pills with single-pixel limestone dividers and disciplined negative space.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Julian Mercer',
    publishedAt: '2026-11-11',
    updatedAt: '2026-11-17',
    readTimeMinutes: 6,
    wordCount: 1180,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Brass dividers and modular layout sheets.',
    imageCaption: 'Fig. 24 — Broadsheet column rule spacing study.',
    directAnswer:
      'Broadsheets organize dense multi-story front pages without drop-shadow boxes or colored capsule pills by relying on hairline 1px dividers, clear typographic scale tiers, and consistent whitespace margins.',
    keyTakeaways: [
      'Unboxed inline metadata separated by middots (·) avoids visual pill clutter.',
      'Three distinct salience tiers establish instant hierarchy across fifty archived essays.',
    ],
    sections: [
      {
        id: 'anti-box-architecture',
        heading: 'Why Removing Boxes Increases Perceived Density Capacity',
        paragraphs: [
          'Wrapping every category tag in a colored pill and nesting cards inside bordered panels consumes precious pixels with chrome rather than words. Returning to the broadsheet hairline rule doubles scannable editorial clarity while keeping the canvas airy.',
        ],
      },
    ],
    pullQuote: 'A single crisp 1-pixel rule organizes space more honestly than ten gradients and shadows.',
    faqs: [
      {
        question: 'When are bordered containers appropriate in editorial interfaces?',
        answer: 'Subtle all-around hairline borders work well for high-value functional islands such as Executive Summary callouts, data tables, or interactive archive toolbars.',
      },
    ],
    citations: [
      { title: 'Newspaper Design & Broadsheet Tradition', publisher: 'Society for News Design', year: '2025', url: 'https://snd.org/' },
    ],
    keywords: ['Information Architecture', 'Minimalist UI', 'Broadsheet Layout', 'Visual Restraint'],
  },
  {
    id: 25,
    slug: 'tabular-numerals-financial-precision-graphics',
    title: 'Tabular Numerals and Financial Precision in Broadsheet Data Graphics',
    subtitle:
      'Why monospace figure alignment prevents visual jitter in economic tables, publication dates, and performance telemetry.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Henrik Lindqvist',
    publishedAt: '2026-11-09',
    updatedAt: '2026-11-15',
    readTimeMinutes: 5,
    wordCount: 1020,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Precision brass calipers beside printed tables.',
    imageCaption: 'Fig. 25 — Numeric column alignment check.',
    directAnswer:
      'Enabling CSS font-variant-numeric: tabular-nums assigns uniform horizontal advance widths to digits 0–9 so decimal points, percentages, and archive index numbers align in razor-straight vertical columns.',
    keyTakeaways: [
      'Proportional numerals cause column raggedness in economic comparison tables.',
      'Tabular figures keep live reading timers and paginated archive indices rock-steady.',
    ],
    sections: [
      {
        id: 'vertical-scannability',
        heading: 'Why Decimal Alignment Matters to Analytical Readers',
        paragraphs: [
          'When comparing capital expenditure percentages across European grids, a reader’s eye scans vertically down a column. Proportional "1" glyphs narrower than "8" break vertical alignment; tabular-nums restores ledger precision.',
        ],
      },
    ],
    pullQuote: 'Numbers deserve the discipline of a ledger column, never the wander of proportional display type.',
    faqs: [
      {
        question: 'How do developers enable tabular numerals in Tailwind CSS?',
        answer: 'Adding the built-in tabular-nums utility class applies font-variant-numeric: tabular-nums to tables, metric cards, and numbered archive lists.',
      },
    ],
    citations: [
      { title: 'OpenType Font Features in Modern Browsers', publisher: 'MDN Web Docs', year: '2026', url: 'https://developer.mozilla.org/' },
    ],
    keywords: ['Tabular Numerals', 'Data Tables', 'Financial Typography', 'CSS'],
  },
  {
    id: 26,
    slug: 'brutalist-civic-architecture-daylight-zurich',
    title: 'Brutalist Civic Architecture and Natural Daylight Engineering in Zurich',
    subtitle:
      'How sawtooth skylights and board-formed concrete create timeless, glare-free public reading rooms.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-07',
    updatedAt: '2026-11-13',
    readTimeMinutes: 6,
    wordCount: 1240,
    featured: false,
    image: '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
    imageAlt: 'Sunlit brutalist concrete and glass library atrium in Zurich.',
    imageCaption: 'Fig. 26 — Clerestory glass truss spanning oak reading desks.',
    directAnswer:
      'Mid-century Swiss civic architects paired exposed structural concrete with north-facing clerestory glazing and warm oak furniture to diffuse intense alpine sunlight evenly across multi-level library reading terraces without mechanical glare.',
    keyTakeaways: [
      'Overhead glass trusses deliver uniform lux levels across deep floorplates.',
      'Tactile oak tables soften the acoustic and thermal presence of raw concrete.',
    ],
    sections: [
      {
        id: 'daylight-geometry',
        heading: 'Structural Honesty Meets Human Warmth',
        paragraphs: [
          'Stepping inside a Zurich research atrium at nine in the morning reveals how concrete and timber collaborate: structural beams cast crisp geometric rhythm across limestone floors while warm oak desks anchor quiet individual study.',
        ],
      },
    ],
    pullQuote: 'Good civic architecture treats daylight as its primary structural material.',
    faqs: [
      {
        question: 'Why do modern research libraries favor north-facing skylights?',
        answer: 'Diffused zenithal light avoids harsh direct glare on screens and printed manuscripts while reducing daytime electrical lighting loads.',
      },
    ],
    citations: [
      { title: 'Swiss Civic Modernism & Daylight Studies', publisher: 'ETH gta Archive', year: '2025', url: 'https://gta.arch.ethz.ch/' },
    ],
    keywords: ['Civic Architecture', 'Zurich', 'Daylighting', 'Brutalism'],
  },
  {
    id: 27,
    slug: 'keyboard-first-editorial-archives-research',
    title: 'Designing Keyboard-First Editorial Archives for Research Professionals',
    subtitle:
      'Instant Command-K search overlays, focus-visible rings, and semantic anchor links turn broadsheet backlogs into working libraries.',
    section: 'design-and-craft',
    authorId: 'julian-mercer',
    reviewerName: 'Claire Beaumont',
    publishedAt: '2026-11-05',
    updatedAt: '2026-11-11',
    readTimeMinutes: 5,
    wordCount: 1060,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Archival monographs arranged for rapid reference.',
    imageCaption: 'Fig. 27 — Rapid cross-referencing across modular volumes.',
    directAnswer:
      'Providing global keyboard shortcuts (such as Command-K or slash search), visible focus outlines, and direct heading anchor links allows researchers to navigate fifty-article archives without lifting hands from the keyboard.',
    keyTakeaways: [
      'Instant client-side indexing across titles, summaries, and keywords eliminates search round-trips.',
      'Escape-key modal dismissal and focus trapping preserve clean keyboard flow.',
    ],
    sections: [
      {
        id: 'index-velocity',
        heading: 'Treating News Archives Like Reference Software',
        paragraphs: [
          'A reader looking up an earlier essay on HVDC interconnectors or JSON-LD graphs does not want to click through five paginated lists. Instant semantic filtering makes an entire fifty-essay corpus feel immediately reachable.',
        ],
      },
    ],
    pullQuote: 'The fastest archive is the one whose index responds on the first keystroke.',
    faqs: [
      {
        question: 'Why should interactive search modals support Escape and arrow keys?',
        answer: 'Predictable keyboard bindings comply with WAI-ARIA dialog patterns and accelerate navigation for power readers and assistive technology users alike.',
      },
    ],
    citations: [
      { title: 'WAI-ARIA Authoring Practices Guide: Dialog Pattern', publisher: 'W3C', year: '2026', url: 'https://www.w3.org/WAI/ARIA/apg/' },
    ],
    keywords: ['Keyboard Navigation', 'Search UX', 'ARIA', 'Editorial Archives'],
  },
  {
    id: 28,
    slug: 'print-heritage-digital-mastheads-hierarchy',
    title: 'Print Heritage in Digital Mastheads: Hierarchy Without Visual Noise',
    subtitle:
      'How a three-zone top navigation bar preserves broadsheet dignity while keeping mobile viewports uncluttered.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Dr. Eleanor Vance',
    publishedAt: '2026-11-03',
    updatedAt: '2026-11-09',
    readTimeMinutes: 5,
    wordCount: 1030,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Printed masthead specimen layouts.',
    imageCaption: 'Fig. 28 — Proportion study for single-row digital mastheads.',
    directAnswer:
      'A strict single-row header divided into three clean zones—wordmark, four to five concise text navigation links, and one primary action—prevents sticky navigation chrome from crowding mobile reading viewports.',
    keyTakeaways: [
      'Keep sticky headers well under 15% of mobile viewport height.',
      'Move edition dates and operational metadata to an unpinned masthead ribbon inside main content.',
    ],
    sections: [
      {
        id: 'three-zone-contract',
        heading: 'Why Restraint in the Header Elevates the Lead Story',
        paragraphs: [
          'When a publication crowds its navigation bar with weather tickers, badge clusters, and double toolbars, the lead headline loses command of the viewport. Quiet single-row navigation lets photography and typography open immediately above the fold.',
        ],
      },
    ],
    pullQuote: 'The finest masthead steps out of the way the moment the reader meets the headline.',
    faqs: [
      {
        question: 'Where should edition volume numbers and publication dates live?',
        answer: 'Place edition datelines inside a subtle broadsheet rule bar directly beneath the header inside the main flow rather than crowding the persistent navigation bar.',
      },
    ],
    citations: [
      { title: 'Broadsheet Masthead Proportions 1920–2025', publisher: 'St Bride Library Monograph', year: '2025', url: 'https://www.sbf.org.uk/' },
    ],
    keywords: ['Masthead Design', 'Navigation UX', 'Broadsheet', 'Visual Hierarchy'],
  },
  {
    id: 29,
    slug: 'motion-latency-budgets-honest-transitions',
    title: 'Motion Latency Budgets: Why 180ms Transitions Feel Tactile and Honest',
    subtitle:
      'Respecting prefers-reduced-motion and GPU compositor constraints in modern editorial interfaces.',
    section: 'design-and-craft',
    authorId: 'julian-mercer',
    reviewerName: 'Claire Beaumont',
    publishedAt: '2026-11-01',
    updatedAt: '2026-11-07',
    readTimeMinutes: 5,
    wordCount: 1050,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Brass precision calipers on limestone.',
    imageCaption: 'Fig. 29 — Calibrating tactile mechanical intervals.',
    directAnswer:
      'Limiting UI transitions to 120–180 milliseconds on compositor-only properties (transform and opacity) while honoring prefers-reduced-motion delivers crisp tactile responsiveness without delaying reading access.',
    keyTakeaways: [
      'Never gate primary article headlines or prose behind slow scroll-reveal delays.',
      'Animate opacity and transform cleanly; avoid animating width, height, or layout margins.',
    ],
    sections: [
      {
        id: 'zero-latency-prose',
        heading: 'Immediate Content Availability Over Theatrical Reveals',
        paragraphs: [
          'Readers arrive at an article to read—not to watch paragraphs fade upward over 800 milliseconds. Restraining motion strictly to gentle hover feedback and drawer transitions preserves zero-latency reading.',
        ],
      },
    ],
    pullQuote: 'Motion in an editorial interface should feel like turning crisp cotton paper, never waiting for theater curtains.',
    faqs: [
      {
        question: 'Which CSS properties are safest for 60fps transitions?',
        answer: 'Transform and opacity run on the GPU compositor thread without triggering browser layout recalculation or paint passes.',
      },
    ],
    citations: [
      { title: 'High-Performance Animations Guide', publisher: 'web.dev', year: '2026', url: 'https://web.dev/articles/animations-guide' },
    ],
    keywords: ['Motion Design', 'Reduced Motion', 'Compositor', 'UX Craft'],
  },
  {
    id: 30,
    slug: 'return-of-linen-bound-monographs-presses',
    title: 'The Return of Linen-Bound Monographs and Independent Technical Presses',
    subtitle:
      'Why engineers and designers increasingly collect durable physical editions alongside open digital archives.',
    section: 'design-and-craft',
    authorId: 'claire-beaumont',
    reviewerName: 'Sophia Alverez',
    publishedAt: '2026-10-29',
    updatedAt: '2026-11-05',
    readTimeMinutes: 6,
    wordCount: 1170,
    featured: false,
    image: DESIGN_IMAGE,
    imageAlt: 'Linen-bound archival design books stacked on limestone.',
    imageCaption: 'Fig. 30 — Sewn-binding technical monographs from independent European presses.',
    directAnswer:
      'Independent technical presses are thriving by pairing open-access web editions—indexed cleanly for search and AI retrieval—with limited-run Smyth-sewn linen hardcovers prized for archival permanence and tactile diagram clarity.',
    keyTakeaways: [
      'Dual print-and-web publishing converts fleeting digital attention into durable collector patronage.',
      'Smyth-sewn bindings allow multi-page architectural spreads to lie completely flat.',
    ],
    sections: [
      {
        id: 'complementary-media',
        heading: 'Why Print and Structured Web Editions Strengthen Each Other',
        paragraphs: [
          'Far from competing, open semantic web essays drive discovery via search engines, while tactile annual anthologies deepen reader loyalty and fund slow, independent reporting.',
        ],
      },
    ],
    pullQuote: 'The web excels at instant discovery; bound paper excels at permanent companionship.',
    faqs: [
      {
        question: 'How do independent presses sustain print economics?',
        answer: 'Direct-to-reader pre-orders, durable low-inventory print runs, and high-margin institutional library subscriptions avoid warehouse waste.',
      },
    ],
    citations: [
      { title: 'Independent Art & Technical Publishing Survey', publisher: 'Printed Matter / Basel Fair', year: '2025', url: 'https://www.printedmatter.org/' },
    ],
    keywords: ['Independent Publishing', 'Bookbinding', 'Monographs', 'Print Culture'],
  },
];
