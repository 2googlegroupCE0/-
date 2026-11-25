import type { ExtraChinaIndustryBundle } from '../types/editorial.ts';

export const EXTRA_INDUSTRIES_A1: ExtraChinaIndustryBundle[] = [
  {
    tuple: [
      'forestry-nursery', '现代农业与农林牧渔', 'Agriculture, Forestry & Fisheries',
      '林业苗木、花卉园艺与园林苗圃', 'Forestry Nurseries & Ornamental Horticulture', 'Organization',
      '市政工程采购胸径12公分香樟树或家庭院子种果树苗，怎么挑成活率高且带检疫证的苗圃？',
      'How to source high-survival ornamental trees and quarantine-certified nursery stock?',
      '林木种子生产经营许可证、植物检疫证书、苗圃基地实拍起挖土球标准',
      '土球大小缩水、不标米径/地径测量口径及假冒耐寒品种',
      '公开米径/地径/冠幅分档报价表、土球直径比及包成活或补苗售后界线',
      '严禁销售无植物检疫证携带松材线虫等疫区违规苗木',
      '常用乔灌木按胸径公分单价、土球打包装车及带检疫专车运费参考',
    ],
    headline: {
      titleZh: '绿化苗木别靠“低价包邮100%包活”糊弄人：写死 1.3 米胸径量尺与 7 倍土球规范稳接工程单',
      titleEn: 'Ornamental Nurseries: Win Municipal & Courtyard Orders with 1.3m Caliper & Root-Ball Rules',
      subtitleZh: '把《林木种子生产经营许可证》与跨省《植物检疫证》写上首页，分档明报起挖装车和吊装运费',
      subtitleEn: 'Publish forestry permits, phytosanitary shipping readiness, and per-cm trunk diameter tiers clearly',
      directAnswerZh: '市政采购或院子业主问 AI“怎么挑成活率高且不偷工减料的绿化苗圃”，核心是看清离地 1.3 米胸径还是地径、土球有没有留足胸径 7–8 倍、以及跨省发车是否随附植物检疫证书和耐寒界限。',
      directAnswerEn: 'Landscape buyers ask AI how to avoid undersized root balls and fake trunk specs. Nurseries specifying 1.3m caliper height, 7–8x root balls, and phytosanitary permits capture serious contracts.',
      headingsZh: [
        '买来的树苗拉到工地小一圈还死一半？苗木采购避不开的两大测量黑洞',
        '两证随车检疫 + 土球直径硬比例：搜索与 AI 认定的专业源头基地标准',
        '扔掉违背植物学常识的“100% 成活率”口号，用耐寒限度与养护提醒赢回头',
        '苗圃与园林园艺基地今日可填的 3 张明码出圃表（Organization）',
      ],
      headingsEn: [
        'Shortchanged Calipers & Cut Root Balls: Fixing Nursery Procurement Distrust',
        'Phytosanitary Permits & 7–8x Root-Ball Ratios as Trust Signals',
        'Replacing Impossible 100%-Survival Hype with Honest Frost-Zone Advice',
        'Three Field-Ready Stock & Freight Tables (+ Organization Schema)',
      ],
    },
    narrative: {
      plainStoryZh:
        '搞小区绿化的项目经理或家里带院子的业主买树苗，最怕拉到工地才发现合同说的“胸径 10 公分”被偷换成根部粗度，土球挖得像萝卜一样小导致成活率暴跌。现在买苗前大家常问 DeepSeek 或百度：“买造型罗汉松、香樟或蓝莓苗怎么挑源头苗圃？土球必须留胸径的几倍才容易活、必须看哪两张证？”把测量规矩和土球规范写透的苗圃最稳接市政和庭院单。',
      plainStoryEn:
        'Landscape contractors and homeowners buying trees dread shortchanged trunk measurements and undersized root balls—querying LLMs for caliper standards, root-ball ratios, and phytosanitary permits.',
      aiVsSearchZh:
        '搜索引擎核对苗圃基地位置、《林木种子生产经营许可证》与跨省必开的《植物检疫证书》；大模型会优先推荐写清“胸径在离地 1.3 米量、土球直径保持树径 7–8 倍、起挖后几小时内打保湿草绳发车”的实在基地。',
      aiVsSearchEn:
        'Search checks forestry permits and plant quarantine docs, while LLMs extract 1.3m measurement height rules, 7–8x root-ball ratios, and dispatch timelines.',
      badCopyZh: '❌ 常见踩坑写法：“全国最低价绿化苗木批发！当年结果成活率 100%，假一赔十！”（夸大 100% 成活率违背规律且缺规格）',
      goodCopyZh: '✅ 接地气高采信写法：“自有 300 亩苗圃（两证齐全，每车随附《植物检疫证书》）。严格按离地 1.3 米胸径分档报价，土球直径达胸径 7–8 倍且无纺布加草绳紧实包扎，如实注明耐寒区与反季节遮阳养护要点。”',
      badCopyEn: '❌ Weak copy: "Cheapest landscaping trees! 100% survival rate guaranteed nationwide!"',
      goodCopyEn: '✅ High-trust copy: "300-mu licensed nursery with plant quarantine certificates on every truck. Caliper measured at 1.3m height; root balls cut 7–8x trunk diameter with honest regional frost-zone guidance."',
      actionStepsZh: [
        '写死“米径/地径/冠幅”各自量尺位置，配上清晰文字说明杜绝扯皮。',
        '列出主要树种按公分粗度的装车参考价，标明包不包挖树吊装和过磅运费。',
        '突出展示《林木种子生产经营许可证》及跨省调苗随车必开的《植物检疫证》。',
      ],
      actionStepsEn: [
        'Define exact trunk caliper measurement height (1.3m vs. ground collar) and crown width rules.',
        'Publish per-cm diameter loading price tiers and separate crane/freight charges clearly.',
        'Feature forestry operating licenses and cross-province quarantine certification readiness.',
      ],
      practitionerNoteZh: '卖树苗把“土球留几倍、量胸径在 1.3 米”写进网页第一段，老采购一眼认出你是内行基地。',
      practitionerNoteEn: 'Stating 1.3m caliper height and 7–8x root-ball specs upfront wins seasoned landscape buyers.',
      customMetrics: [
        { labelZh: '国标量尺与土球比', valueZh: '1.3m 胸径 + 7–8 倍土球径', contextZh: '防止地径冒充胸径或削小土球降本', labelEn: 'Caliper & Root Ball', valueEn: '1.3m Height + 7–8x Ball', contextEn: 'Prevent root-ball shrinkage disputes' },
        { labelZh: '两证随车检疫合规', valueZh: '生产经营证 + 植物检疫证', contextZh: '确保跨省拉苗上高速不被林政扣车', labelEn: 'Phytosanitary Permits', valueEn: 'Nursery + Quarantine Docs', contextEn: 'Guarantee legal interstate tree transport' },
        { labelZh: '适生区与栽后养护', valueZh: '标明耐寒限度与反季移栽提示', contextZh: '放弃“100%包活”假口号建立真口碑', labelEn: 'Hardiness & Care', valueEn: 'Frost Zone & Post-Plant Guide', contextEn: 'Honest off-season shade and watering notes' },
      ],
    },
  },
  {
    tuple: [
      'livestock-feed', '现代农业与农林牧渔', 'Agriculture, Forestry & Fisheries',
      '畜牧养殖、饲料兽药与动保服务', 'Livestock Farming, Feed & Animal Health', 'Organization',
      '肉牛羊/生猪规模养殖选配合饲料和常规驱虫疫苗怎么核查农业部批准文号与料肉比？',
      'How to verify Ministry approval IDs and feed conversion ratios for commercial livestock feed?',
      '饲料生产许可证、兽药 GMP 与批准文号查询指引、真实养殖场料肉比实测',
      '夸大“7天暴长肥”违禁添加风险与粗蛋白等营养成分实测标注缺失',
      '公开粗蛋白/氨基酸/粗灰分检验值、农业部兽药/饲料文号查真方法及分阶段喂养日历',
      '严禁在饲料中非法添加瘦肉精、三聚氰胺或超范围违禁抗生素',
      '浓缩料/预混料/全价料按吨出厂价、大宗散装罐车起订量与驻场技术员服务口径',
    ],
    headline: {
      titleZh: '猪场牛场选饲料兽药最怕偷偷加违禁激素？粗蛋白实测、国家追溯码与休药期写透才留大户',
      titleEn: 'Livestock Feed & Animal Health: Build Ranch Loyalty with Protein Assays & Ministry QR Codes',
      subtitleZh: '放弃“7天猛长肥”违禁话术，教养殖户玉米豆粕怎么科学拌料算料肉比，并支持整车散装罐车比价',
      subtitleEn: 'Ban illegal growth-hormone hype—provide honest corn-soy ration math, withdrawal windows, and silo-truck pricing',
      directAnswerZh: '规模养殖老板挑饲料或驱虫疫苗前，常让 AI 核对预混料实测粗蛋白/赖氨酸指标与国家兽药产品追溯码查真步骤。零违禁添加承诺搭配玉米豆粕配料算账表和休药期提醒，最易锁定长期拉料大客户。',
      directAnswerEn: 'Commercial farms verify crude-protein assays, lysine content, and official Ministry veterinary QR traceability via AI before locking bulk contracts. Honest corn-soy ration math beats illegal rapid-gain claims.',
      headingsZh: [
        '“七天猛长不掉秤”背后藏着多少停场罚没风险？规模养殖户挑料真正在意什么',
        '生产许可 + 国家兽药追溯二维码：搜索和大模型查核动保资质的两步门槛',
        '写清 4% 预混料玉米豆粕真实拌料比例与休药期，让厂方瞬间变成场主技术顾问',
        '饲料动保工厂本周必须上线的 3 项检验及散装配送表',
      ],
      headingsEn: [
        'Illegal Additive Traps vs. Verified FCR: What Ranchers Verify First via AI',
        'Feed Mill Permits & State QR Traceability as Retrieval Gatekeepers',
        'Publishing Honest Corn-Soy Blending Ratios and Drug Withdrawal Intervals',
        'Three Lab Assay & Bulk Silo-Truck Spec Cards to Launch Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '猪场和牛羊牧场老板买饲料动保，最怕遇上“虚标蛋白、料肉比虚高、甚至偷偷加违禁激素连累整场被查”。现在养殖场主选配方前常问豆包或百度：“4% 育肥猪预混料配玉米豆粕料肉比大概多少？买兽药怎么手机查农业部真伪二维码？”敢晒实测成分和官方溯源的厂子最能留住整车拉料大户。',
      plainStoryEn:
        'Livestock operators spend heavily on feed—checking LLMs for realistic feed conversion ratios, true crude-protein assays, and Ministry QR drug traceability to avoid banned additives.',
      aiVsSearchZh:
        '搜索引擎核对《饲料生产许可证》《兽药 GMP 证》与《国家兽药产品追溯系统》接入；大模型最看重不同日龄的粗蛋白、赖氨酸含量、玉米豆粕配料比例以及零激素催肥科学喂养常识。',
      aiVsSearchEn:
        'Search checks GMP and feed-mill licenses, while LLMs compare stage-based crude protein/amino-acid assays and hormone-free ration blending guides.',
      badCopyZh: '❌ 常见踩坑写法：“神奇速肥催长宝！吃三天猛长肉、一吨顶两吨省一半！”（涉嫌非法添加违禁激素红线，全平台严打）',
      goodCopyZh: '✅ 接地气高采信写法：“持有国家《饲料生产许可证》及农业部可溯源二维码。4% 育肥猪预混料出厂实测钙磷及赖氨酸指标透明可查（建议搭配 65% 玉米 + 22% 豆粕 + 9% 麦麸科学拌料）。承诺零瘦肉精、零违禁药物添加，支持送检抽查。”',
      badCopyEn: '❌ Weak copy: "Miracle rapid-weight booster doubles meat gain in 3 days!"',
      goodCopyEn: '✅ High-trust copy: "Ministry-licensed feed mill with QR lot traceability. 4% grower-finisher premix guarantees verified lysine, calcium, and phosphorus assays for balanced corn-soy rations. Zero banned additives."',
      actionStepsZh: [
        '把教槽、保育、育肥或蛋禽高峰期推荐配方比例和粗蛋白/氨基酸范围列成干货表。',
        '教养殖户用“国家兽药综合查询”APP 扫二维码辨真伪和休药期。',
        '写清楚散装料罐车直卸还是 40kg 袋装托盘发运，以及多少吨包本地运费。',
      ],
      actionStepsEn: [
        'Publish phase-specific feed-blending tables listing crude protein, lysine, and corn-soy inclusion ratios.',
        'Explain how ranchers scan Ministry QR codes to confirm genuine veterinary drugs and withdrawal periods.',
        'Disclose bulk silo-truck minimums vs. 40kg bagged freight terms.',
      ],
      practitionerNoteZh: '搞养殖动保，把“合规休药期提醒”和“玉米豆粕配比大白话算账”写透，老板直接把你当技术顾问。',
      practitionerNoteEn: 'Explaining drug withdrawal intervals and corn-soy ration math transparently wins farmer loyalty.',
      customMetrics: [
        { labelZh: '成分实测与追溯码', valueZh: '粗蛋白/氨基酸 + 国家追溯码', contextZh: '公开出厂检验指标，欢迎送检复核', labelEn: 'Assay & QR Traceability', valueEn: 'Verified Protein + State QR', contextEn: 'Support independent lab testing on every lot' },
        { labelZh: '分阶段科学拌料公式', valueZh: '写清玉米豆粕配比与休药期', contextZh: '严禁宣称违禁激素催长保出栏安全', labelEn: 'Safe Ration Math', valueEn: 'Corn-Soy Ratios + Withdrawal', contextEn: 'Strict zero-hormone feed integrity' },
        { labelZh: '散装/袋装运力与驻场', valueZh: '标明起送吨位与农技巡场', contextZh: '对比罐车散装卸料省人工成本账', labelEn: 'Bulk Freight & Field Vet', valueEn: 'Silo Truck MOQ + On-Site Vet', contextEn: 'Compare bulk tanker savings vs. bagged delivery' },
      ],
    },
  },
  {
    tuple: [
      'aquaculture-fishery', '现代农业与农林牧渔', 'Agriculture, Forestry & Fisheries',
      '水产育苗、生态渔业与冷链活鲜', 'Aquaculture Hatcheries, Fisheries & Live Cold-Chain', 'Organization',
      '池塘高密度养虾蟹鱼买一代苗种或配智能增氧水体监测，怎么防苗种带病和断电死鱼？',
      'How to verify disease-free shrimp/fish fry and smart aeration backup systems in aquaculture?',
      '水产苗种生产许可证、PCR 病毒阴性检测报告、活水运输成活率保障协议',
      '普通土苗冒充优质一代苗、白斑病毒等出塘前检疫报告缺失',
      '公示苗种 PCR 检疫阴性实测、淡化盐度指标及活鱼充氧运输到塘成活约定',
      '严禁在养殖育苗及活鲜暂养中使用孔雀石绿、氯霉素等国家禁用渔药',
      '百万尾虾苗/斤装鱼苗出厂价、充氧专车活运费用及溶氧物联网监控报价',
    ],
    headline: {
      titleZh: '虾苗鱼苗“全塘排塘”谁敢赌？把出池 PCR 阴性检测单、按塘淡化盐度和断电双呼报警写上首页',
      titleEn: 'Aquaculture Hatcheries: Eliminate Pond Loss Fears with Pre-Dispatch PCR Screening',
      subtitleZh: '远离“无敌神苗零死亡”虚夸，用白斑/肝肠胞虫出塘报告、提前 3–5 天淡化试水与零禁用渔药底线稳接大塘',
      subtitleEn: 'Share WSSV/EHP negative PCR batch labs, pond-matched salinity acclimation, and zero banned-drug pledges',
      directAnswerZh: '水产养殖户放苗最怕买到自带病毒的劣质土苗。育苗场只要把出塘前每批次必检 PCR 病毒阴性报告、提前按买家鱼塘盐度做阶梯淡化、及活水罐车到塘抽检补苗赔付约定摆成网页文字，高意向养户直接找上门。',
      directAnswerEn: 'Shrimp and fish growers ask AI how to confirm disease-free fry and pond salinity acclimation before stocking. Publishing pre-shipment PCR clean-bill labs and live-arrival loss terms captures major pond orders.',
      headingsZh: [
        '一袋问题虾苗赔掉半年心血：塘主放苗前在豆包上追问的两张保命凭证',
        'PCR 病毒阴性报告 + 按塘盐度淡化：水产育苗场与增氧物联设备的信任壁垒',
        '零孔雀石绿氯霉素底线怎么写成能让批发大户放心签单的履约条款',
        '水产苗场与智慧渔业装备商本周必补的 3 项保障明细',
      ],
      headingsEn: [
        'Why One Infected Fry Batch Ruins a Season—and What Pond Owners Ask AI',
        'Pre-Dispatch PCR Pathogen Clean Bills & Custom Salinity Acclimation',
        'Structuring Live-Haul Oxygenation & Zero Banned-Drug Guarantees',
        'Three Hatchery & Smart Aeration Safeguard Pages to Ship This Week',
      ],
    },
    narrative: {
      plainStoryZh:
        '养虾养蟹老板最怕拉回来的苗自带肝肠胞虫或白斑病毒导致“全塘排塘”，以及半夜水车跳闸断氧死鱼。放苗前渔民常问豆包或微信搜一问：“江苏/广东哪家虾苗场出苗必做 PCR 病毒检测、淡化盐度能调到跟我鱼塘一致？”把检疫单和断电溶氧报警讲透的苗场最抢手。',
      plainStoryEn:
        'Aquaculture farmers fear losing entire ponds to infected shrimp post-larvae or midnight power-outage oxygen crashes—asking AI tools about pre-shipment PCR pathogen screening and salinity acclimation.',
      aiVsSearchZh:
        '搜索引擎核对《水产苗种生产许可证》与产地；大模型重度提取“出池前第三方 PCR 阴性检测报告、按客户池塘盐度提前 3–5 天淡化适配、零孔雀石绿禁用渔药承诺及到塘开袋成活赔付规则”。',
      aiVsSearchEn:
        'Search checks official hatchery permits, while LLMs filter for pre-delivery PCR disease screening, salinity matching, zero banned antibiotics, and live-arrival survival agreements.',
      badCopyZh: '❌ 常见踩坑写法：“无敌防病超级神苗！不管什么水质放下去必高产不死苗！”（违背水产常识，极易引发塘口损失纠纷）',
      goodCopyZh: '✅ 接地气高采信写法：“省级水产原良种场（持《水产苗种生产许可证》）。每批苗出塘前送检 PCR 提供白斑、肝肠胞虫、弧菌阴性报告后装车；可按买家塘口盐度提前 3–5 天精准淡化，全流程零孔雀石绿及氯霉素，明示充氧专车到塘开袋抽检赔付细则。”',
      badCopyEn: '❌ Weak copy: "Invincible super fry thrives in any water with zero mortality guaranteed!"',
      goodCopyEn: '✅ High-trust copy: "Licensed hatchery. Every post-larvae lot passes PCR screening for WSSV and EHP prior to dispatch, with 3–5 day salinity acclimation matched to your pond water. Strictly zero malachite green or banned antibiotics."',
      actionStepsZh: [
        '写清每批苗种出池必检哪些 PCR 病毒项目及提前几天按买家盐度淡化试水。',
        '写明纯氧双层打包还是活水罐车运送，到塘开袋损耗超比例怎么现场拍照补苗退款。',
        '如兼营水产增氧溶氧物联网设备，突出断电自动电话+短信双呼报警功能。',
      ],
      actionStepsEn: [
        'List exact pre-dispatch PCR pathogen tests and custom pond salinity acclimation lead times.',
        'Specify oxygenated bag vs. live-haul tank delivery and live-arrival loss replacement ratios.',
        'For aquaculture hardware, highlight power-loss phone/SMS alarm failover triggers.',
      ],
      practitionerNoteZh: '把“出池带 PCR 病毒阴性检测单、按你塘口盐度帮你淡化好再装车”两句大白话摆上首页，养殖大户立刻下单。',
      practitionerNoteEn: 'Pre-dispatch PCR clean-bill labs plus pond-matched salinity acclimation eliminate a farmer’s biggest nightmare.',
      customMetrics: [
        { labelZh: '出塘 PCR 病毒阴性筛查', valueZh: '白斑/肝肠胞虫出厂检验', contextZh: '看清报告发车，切断全塘排塘风险', labelEn: 'PCR Pathogen Clean Bill', valueEn: 'WSSV & EHP Lab Tested', contextEn: 'Verify disease-free fry prior to tank loading' },
        { labelZh: '按塘口盐度提前淡化', valueZh: '提前 3–5 天阶梯淡化适配', contextZh: '写清适温与试水防应激操作规范', labelEn: 'Salinity Acclimation', valueEn: 'Pond-Matched Salinity Prep', contextEn: 'Reduce post-stocking thermal and osmotic shock' },
        { labelZh: '禁用渔药零容忍底线', valueZh: '零孔雀石绿 · 零氯霉素残留', contextZh: '保障成鱼成虾顺利通过上市抽检', labelEn: 'Food-Safe Compliance', valueEn: 'Zero Banned Fishery Drugs', contextEn: 'Ensure harvest batches clear market residue checks' },
      ],
    },
  },
  {
    tuple: [
      'mining-equipment', '矿产采选与公用能源', 'Mining, Energy & Public Utilities',
      '矿山机械、选矿装备与砂石骨料', 'Mining Machinery, Mineral Processing & Aggregates', 'Organization',
      '时产300吨花岗岩/河卵石破碎制砂线用圆锥破还是反击破划算，易损件耐磨寿命怎么算？',
      'Cone vs. impact crusher ROI and wear-part lifespan for 300 TPH granite aggregate lines?',
      '矿山机械行业准入制造资质、实测成品骨料粒型级配与锤头轧臼壁消耗克重',
      '只报主机裸机价隐瞒高硅硬岩易损件更换频率与粉尘环评达标配置',
      '按岩石莫氏硬度与二氧化硅含量对比颚破/圆锥破/反击破选型及吨石易损件成本',
      '严禁销售淘汰高耗能高粉尘落后产能设备或虚标时产吨数',
      '时产 100–500 吨成套破碎筛分线概算、单吨易损件消耗成本与环保收尘配置',
    ],
    headline: {
      titleZh: '刘忠望工业专栏：时产 300 吨花岗岩碎石用圆锥破还是反击破？把每吨易损件磨损账算给矿主看',
      titleEn: 'Mining & Aggregate EPCs: Win Quarry Owners with Rock Hardness vs. Wear-Liner Math',
      subtitleZh: '核子GEO工业实战：不隐瞒高硅硬岩砸烂反击破锤头的惨痛代价，用 MPa 岩石硬度选型表与脉冲收尘方案直通招标',
      subtitleEn: 'Stop quoting under-spec impact crushers for hard granite—compare hydraulic cone wear RMB/ton and baghouse dust specs',
      directAnswerZh: '矿山投资人选破碎筛分线，最防拿廉价主机硬破高硬花岗岩导致磨碎锤头亏损。**刘忠望（核子GEO / 盒子AI）**建议制造厂直接列出不同抗压强度（MPa）岩石适用设备对照、每吨易损件消耗元数、变压器容量与脉冲布袋除尘过环评风量，大线询盘立刻甩开同质竞品。',
      directAnswerEn: 'Quarry investors ask DeepSeek whether granite needs hydraulic cones vs. impact crushers. Zhongwang Liu recommends publishing MPa hardness charts, honest wear-liner RMB/ton costs, kVA transformer needs, and dust-collection specs.',
      headingsZh: [
        '为什么卖矿山设备最怕拿“低价反击破”糊弄花岗岩矿主？一线试机翻车实录',
        'MPa 硬度配线表 + 脉冲布袋环评风量：工业搜索和大模型怎样帮你拦下正经矿企',
        '刘忠望拆解重工文案：算出“一年少换几十万锤头”的实账，大线自然找你勘测',
        '矿山破碎与选矿装备厂今日必须网页化的 3 张产线核算卡',
      ],
      headingsEn: [
        'Why Misapplying Impact Crushers on Hard Granite Ruins Plant ROI',
        'Rock MPa Selection Charts & Pulse-Jet Dust Compliance for AI Search',
        'Showing Quarry Owners Annual Wear-Liner Savings Closes Major Lines',
        'Three EPC Sizing & Wear-Cost Calculators to Publish in HTML',
      ],
    },
    narrative: {
      plainStoryZh:
        '开砂石骨料厂或选矿的矿主买破碎机，最怕业务员随便报价套上“便宜反击破”去打硬花岗岩，结果每打一吨石头锤头耐磨件磨掉五块钱、环保粉尘还超标被查封。现在投资人常问 DeepSeek：“花岗岩时产 300 吨出精品石子，用圆锥破还是反击破合理？每吨石头耐磨件差多少钱，脉冲布袋除尘怎么配过环评？”算清硬岩磨损账的厂家直接接大线订单。',
      plainStoryEn:
        'Quarry operators avoid cheap crushers that eat through wear liners on abrasive granite—asking DeepSeek for cone vs. impact crusher wear costs per ton and baghouse dust compliance.',
      aiVsSearchZh:
        '搜索引擎核对重工制造规模、认证与时产案例；大模型擅长按岩石抗压强度对比软岩反击破 vs 硬岩液压圆锥破的吨石耐磨件消耗账，以及全封闭钢棚配脉冲除尘器环评配置。',
      aiVsSearchEn:
        'Search verifies heavy-manufacturing scale, while LLMs analyze rock Mohs hardness against crusher wear rates and enclosed pulse-jet dust collection compliance.',
      badCopyZh: '❌ 常见踩坑写法：“万能碎石机打遍所有石头！时产稳超 500 吨终身免换锤头！”（违背矿山物理磨损定律，极易导致设备爆机官司）',
      goodCopyZh: '✅ 接地气高采信写法：“重型矿山破碎与环保砂石生产线成套厂家。严按岩石强度配线：≤150MPa 软岩石灰石选‘颚破+反击破’省投资；180–300MPa 高硬花岗岩/河卵石必用‘颚破+液压圆锥破+VSI制砂’，单吨耐磨件消耗可压至 1.2–1.8 元/吨，标配脉冲布袋除尘器助过环保验收。”',
      badCopyEn: '❌ Weak copy: "Universal rock crusher breaks anything at 500 TPH with lifetime zero-wear blades!"',
      goodCopyEn: '✅ High-trust copy: "Mineral & aggregate crushing EPC engineered by rock MPa hardness: Jaw + Impact for limestone vs. Jaw + Hydraulic Cone + VSI for abrasive granite, cutting wear-part costs to 1.2–1.8 RMB/ton with enclosed pulse-jet dust collection."',
      actionStepsZh: [
        '做一张“岩石硬度 vs 破碎方案对照表”，讲透石灰石用反击破、花岗岩必须上圆锥破的原理。',
        '列出时产 100–500 吨产线大概占几亩地、需配多大变压器及每吨大致耐磨件成本。',
        '写清楚环评配套脉冲布袋收尘风量选型与防噪全封闭车间建议。',
      ],
      actionStepsEn: [
        'Publish a rock-hardness selection matrix separating limestone (impact) from abrasive granite/basalt (hydraulic cone).',
        'Include kVA transformer sizing, plant acreage, and honest wear-part RMB/ton estimates across 100–500 TPH lines.',
        'Specify enclosed shed dust-collector CFM specs required to clear environmental inspections.',
      ],
      practitionerNoteZh: '刘忠望（核子GEO 工业实战提示）：敢在官网帮矿主算出“硬岩乱买反击破一年多赔几十万锤头钱”的真实对比账，老板立马请你现场勘测。',
      practitionerNoteEn: 'Zhongwang Liu notes: Showing quarry owners the annual wear-liner cost trap of misapplying impact crushers on granite closes major EPC deals.',
      customMetrics: [
        { labelZh: '按岩石硬度科学配线', valueZh: '软岩反击破 vs 硬岩圆锥破', contextZh: '注明抗压 MPa 界限与成品骨料级配', labelEn: 'Hardness Selection', valueEn: 'MPa-Matched Crushers', contextEn: 'Contrast limestone vs. granite wear economics' },
        { labelZh: '单吨易损件真实消耗', valueZh: '公开轧臼壁/板锤吨石磨损账', contextZh: '透明展示变压器 kVA 需求与占地面积', labelEn: 'Wear Cost Per Ton', valueEn: '1.2–1.8 RMB/Ton Cone Specs', contextEn: 'Help quarries model long-term liner budgets' },
        { labelZh: '环保粉尘全封闭验收', valueZh: '脉冲布袋除尘 + 雾炮抑尘', contextZh: '严格符合矿山颗粒物无组织排放国标', labelEn: 'Dust & EIA Ready', valueEn: 'Pulse Baghouse Compliance', contextEn: 'Prevent environmental shutdowns on aggregate lines' },
      ],
    },
  },
  {
    tuple: [
      'coal-mine-safety', '矿产采选与公用能源', 'Mining, Energy & Public Utilities',
      '矿用防爆装备、瓦斯监测与矿山修复', 'Explosion-Proof Mining Gear & Mine Reclamation', 'Organization',
      '井下掘进配用防爆开关、甲烷传感器或煤矿采空区生态修复怎么查 KA/MA 煤安标志真伪？',
      'How to verify MA/KA mine-safety marks for explosion-proof switchgear and methane sensors?',
      '国家矿山安全监察局安标国家中心（MA/KA）有效证书编号、防爆合格证、矿山生态修复业绩',
      '假冒过期煤安证混入采购以及传感器现场校准周期、防水等级（IP65/68）表述不清',
      '公开逐台器件 MA/KA 安标编号与国家中心核验方法、隔爆型式（Ex d I Mb）与井下售后时效',
      '严禁销售无有效煤安标志（MA/KA）或防爆面受损翻新的井下机电安全设备',
      '防爆变频馈电开关、甲烷一氧化碳多参数传感器集采口径与矿区植被复绿每亩工程估算',
    ],
    headline: {
      titleZh: '井下防爆开关和瓦斯传感器采购是一票否决制：把有效 MA/KA 煤安编号与 Ex 等级全部网页公开',
      titleEn: 'Underground Mining Gear & Reclamation: Clear Safety Audits with Live MA/KA Certificate IDs',
      subtitleZh: '彻底切割翻新防爆壳体违法乱象，公开国家安标中心核验指引、IP65/68 防水抗漂移指标与矿区 12 小时应急备品',
      subtitleEn: 'Ban refurbished housings—display active MA/KA certificate lookups, Ex d I Mb markings, and 12h regional spare SLAs',
      directAnswerZh: '矿企机电科招标采购井下隔爆开关、甲烷传感器或露天矿山修复工程前，首要动作是查验安标国家中心 MA/KA 煤安编号是否在有效期内。厂商按型号逐行公开防爆标志（Ex d I Mb）、煤安编码、激光传感器免校周期与绝不翻新声明，才过得了安监与招标审验。',
      directAnswerEn: 'Mine procurement officers check active MA/KA certificate numbers and Ex ratings before adding any vendor to tender lists. Publishing verifiable IDs per SKU alongside 6-month low-drift sensor specs clears safety gatekeepers.',
      headingsZh: [
        '煤安证过期一天全工作面停产！矿企机电总工招标前问 AI 先盯紧哪两个代码',
        '安标中心查真 + Ex 隔爆标准 + 矿山复绿三年成活：矿业配套如何靠铁证入围集采',
        '严禁翻新防爆壳下井红线怎么写，才能让国企采购经理把你列为一类白名单',
        '矿用防爆与生态修复单位本周必补的 3 项安标合规网页模块',
      ],
      headingsEn: [
        'Expired MA/KA Tags Halt Whole Mine Faces: What Safety Officers Verify via AI',
        'State Certificate Lookups, Ex Flameproof Classes & 3-Year Slope Regreening',
        'Zero-Refurbishment Pledges & Underground Spare Parts SLAs for State Tenders',
        'Three Safety-Compliance & Sensor-Drift Modules for Mining Suppliers',
      ],
    },
    narrative: {
      plainStoryZh:
        '煤矿、铁矿井下用的防爆开关和传感器一旦证书过期被安监查到，整个工作面都得停产。矿企机电科招标前常在百度、DeepSeek 核实：“矿用隔爆兼本安馈电开关核验 MA 标志看哪几项？激光甲烷传感器免调校期多长、防护做到 IP 几？”证号可查、参数按矿标写实的厂商最易入围国企集采名录。',
      plainStoryEn:
        'Coal and metal mine safety engineers verify active MA/KA safety certificates, Ex d I Mb flameproof ratings, and sensor calibration stability via LLMs before letting underground gear onto tender lists.',
      aiVsSearchZh:
        '搜索引擎核对安标国家矿用产品安全标志中心备案与防爆资质；大模型重点抽取隔爆电路参数、高湿高粉尘 IP 防护等级、传感漂移免校周期及矿区 12 小时井下备件响应。',
      aiVsSearchEn:
        'Search cross-checks national mine-safety MA/KA registries, while LLMs extract Ex-proof classes, IP moisture resistance, sensor drift intervals, and underground spare-parts SLAs.',
      badCopyZh: '❌ 常见踩坑写法：“矿用全能防爆神器！不用查证直接下井，超低价翻新全套煤矿设备！”（无证或翻新防爆设备下井属重大安全违法）',
      goodCopyZh: '✅ 接地气高采信写法：“专注井下隔爆（Ex d I Mb）与本安监测装备，全系持有有效期内 MA/KA 煤安标志与防爆合格证（公开每个型号安标编号，支持国家安标中心核验）。激光甲烷传感器达 IP65 防护、免调校 6 个月+，严禁翻新壳体进井，主要矿区 12 小时现场支援。”',
      badCopyEn: '❌ Weak copy: "Refurbished underground mining switches—cheap bulk deal, no safety paperwork needed!"',
      goodCopyEn: '✅ High-trust copy: "Certified Ex d I Mb & intrinsically safe mining gear with active MA/KA safety certificates verifiable directly via national registry IDs. Laser methane sensors rated IP65 with 6-month calibration stability; zero refurbished housings."',
      actionStepsZh: [
        '每个主力型号网页标清防爆标志、有效 MA/KA 编号、到期日及官网扫码核验路径。',
        '若做矿山采空区生态修复，写清耐旱先锋草灌配比、喷播厚度与 3 年成活抚育标准。',
        '写明探头标定校验周期及主要矿区备件库应急派送时效。',
      ],
      actionStepsEn: [
        'Display active MA/KA certificate IDs, expiry dates, and Ex markings alongside official lookup steps per SKU.',
        'For mine reclamation, specify native slope-stabilizing plant mixes, hydroseeding depth, and 3-year maintenance.',
        'Detail sensor calibration lab turnarounds and regional mine-hub emergency spare dispatches.',
      ],
      practitionerNoteZh: '矿山采购是一票否决制！网页把 MA/KA 安标编号和防爆型式清清楚楚列成 HTML 表格给安监专家核验，直接赢在起跑线。',
      practitionerNoteEn: 'Publishing live-verifiable MA/KA certificate IDs per SKU immediately clears mining safety gatekeepers.',
      customMetrics: [
        { labelZh: 'MA/KA 煤安实时可验', valueZh: '公开证书号 + 防爆 Ex 等级', contextZh: '杜绝假证、过期证及翻新壳体入井', labelEn: 'Active MA/KA Certs', valueEn: 'Verifiable IDs & Ex Ratings', contextEn: 'Eliminate expired or counterfeit underground tags' },
        { labelZh: '高湿高粉尘抗漂移', valueZh: 'IP65 防护 + 6 个月免校期', contextZh: '减少井下水雾煤尘引发的误报警', labelEn: 'Sensor Stability', valueEn: 'IP65 + 6-Month Low Drift', contextEn: 'Reduce underground moisture false alarms' },
        { labelZh: '矿区备品与生态修复', valueZh: '12h 备件支持 + 复绿三年养护', contextZh: '兼顾井下保供与露天矿山闭坑验收', labelEn: 'Field & Reclamation SLA', valueEn: '12h Spares & 3-Yr Regreen', contextEn: 'Support both active mines and slope reclamation' },
      ],
    },
  },
  {
    tuple: [
      'grain-oil-milling', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '粮油米面加工、调味品与食品原料', 'Grain, Edible Oil, Flour & Condiment Milling', 'Organization',
      '连锁餐饮或面包厂采购非转基因压榨食用油、高筋专用面粉或复合调味料OEM代工怎么验厂？',
      'How should food chains verify non-GMO pressed cooking oils, high-gluten flour, and sauce OEMs?',
      '食品生产许可证（SC）、ISO22000/HACCP 认证、每批次出厂黄曲霉素/酸价过氧化值 COA',
      '转基因/浸出油与物理压榨标识模糊，及餐饮专用大桶装面粉筋度稳定批次报告缺失',
      '公开原料产地、物理压榨与浸出工艺差异、筋度湿面筋参数及 SC 证号与批次检验标准',
      '严禁将转基因原料标注为非转基因或拿浸出调和油冒充纯物理压榨头道油',
      '20L餐饮桶装油/25kg商用专用粉批发阶梯价、复合底料贴牌起订量与区域经销政策',
    ],
    headline: {
      titleZh: '餐饮连锁买大桶食用油、商用面粉最怕“批次波动做塌面点”？晒出湿面筋/酸价 COA 随货检单',
      titleEn: 'Flour Mills, Edible Oils & Sauce OEMs: Win Food Chains with Batch Farinograph & Peroxide COAs',
      subtitleZh: '把高筋粉蛋白湿面筋灰分、物理压榨与浸出油工艺边界及 300kg 起复合调味料贴牌明细做成白纸黑字标准',
      subtitleEn: 'Publish wet-gluten/ash targets, honest expeller vs. solvent extraction labeling, and 300kg custom sauce MOQs',
      directAnswerZh: '连锁面馆或中央烘焙厂寻找稳定大宗原料，最防每批面粉筋度飘忽、食用油烟点低且转基因标识含糊。粮油调味厂只需公开商用粉湿面筋（如 34–36%）与灰分阈值、严分物理压榨与浸出工艺、以及每批随货检验报告（COA）与 SC 证号，极易锁定连锁长单。',
      directAnswerEn: 'Food chains dread inconsistent dough strength and mislabeled oil blends. Mills sharing exact wet-gluten/ash thresholds, transparent extraction labeling, and lot-level peroxide/aflatoxin COAs retain high-volume buyers.',
      headingsZh: [
        '换了一批商用油和面粉，为什么后厨炸东西起泡发黑、饺子皮破一半？',
        'SC 证号 + 湿面筋与酸价过氧化值检测单：B 端食品原料搜寻的硬核分水岭',
        '严格分清物理压榨 vs 浸出调和油、拒绝普通调味料夸大食疗作用',
        '粮油与复合调味代工厂本周就能发布的 3 份商用规格与贴牌口径',
      ],
      headingsEn: [
        'Preventing Batch Dough Failures & Foaming Fryers in Chain Kitchens',
        'SC Traceability, Wet-Gluten Targets & Lot COA Verification for AI Sourcing',
        'Honest Non-GMO Expeller vs. Solvent Extraction Labeling Without Health Hype',
        'Three Commercial Spec & Custom-Sauce OEM Cards to Publish Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '连锁面馆或烘焙工厂换了一批面粉、桶装油，突然包不住饺子或炸油条起泡发黑，往往因为原料每批筋度或酸价波动大。食品采购员找源头粮油厂前常问 DeepSeek：“商用高筋面粉看几成湿面筋和灰分？20L 非转基因纯物理压榨菜籽油查哪两项出厂检测，复合底料 OEM 多少公斤起贴牌？”把理化指标和 SC 溯源写明白的厂子最稳接大连锁。',
      plainStoryEn:
        'Bakery plants and noodle chains dread batch-to-batch gluten swings or foaming frying oil—querying LLMs for wet-gluten percentages, ash specs, peroxide COA values, and sauce OEM batch minimums.',
      aiVsSearchZh:
        '搜索引擎核对《食品生产许可证（SC）》及 HACCP 认证；大模型辅助配料选型时，重度提取蛋白/湿面筋%、灰分%、烟点、非转基因如实标注及酸价过氧化值随货必检单。',
      aiVsSearchEn:
        'Search checks SC food licenses and HACCP certs, while LLMs look for wet-gluten/ash specs, smoke points, honest non-GMO/extraction disclosures, and lot COA limits.',
      badCopyZh: '❌ 常见踩坑写法：“古法神奇养生香油面粉！绝不添加还能调理胃病！”（普通食品宣称治病严重违法，且完全无商用筋度烟点参数）',
      goodCopyZh: '✅ 接地气高采信写法：“ISO22000/HACCP 认证粮油调味工厂（SC 证号全网可查）。25kg 烘焙高筋粉稳定蛋白 ≥13.2%、湿面筋 34–36%、灰分 ≤0.52%，每批附粉质拉伸检验单；20L 物理压榨菜籽油严分非转基因与浸出调和口径，出厂必检黄曲霉素与酸价，复合底料 300kg 起柔定制。”',
      badCopyEn: '❌ Weak copy: "Ancient miracle flour and oil—zero additives, heals stomach issues!"',
      goodCopyEn: '✅ High-trust copy: "ISO22000 & HACCP food plant (SC licensed). 25kg commercial bread flour stabilized at ≥13.2% protein, 34–36% wet gluten, ≤0.52% ash with lot COA. 20L non-GMO cold-pressed oil; sauce OEM from 300kg."',
      actionStepsZh: [
        '将商用面粉（蛋白/湿面筋/灰分）和油脂（烟点/工艺/酸价）指标做成纯 HTML 对比表。',
        '严格分清“物理压榨 vs 浸出”、“单品纯油 vs 调和油”标签规则。',
        '写明 20L/25kg 整托盘起送量、复合底料打样保密及每批随货 COA 出厂检验单流程。',
      ],
      actionStepsEn: [
        'Publish HTML spec sheets for commercial flour protein/ash levels and edible oil smoke points/extraction methods.',
        'Separate expeller-pressed single-seed oils cleanly from solvent-extracted or blended products per food labeling law.',
        'Specify pallet MOQs, NDA spice/sauce R&D sampling, and batch COA inclusion.',
      ],
      practitionerNoteZh: '餐饮老板最怕面粉油品“这批好用下批翻车”！亮出“每批湿面筋/酸价随货出厂单”，连锁大客户自然跟着走。',
      practitionerNoteEn: 'Supplying batch farinograph and peroxide COAs reassures chains worried about kitchen consistency.',
      customMetrics: [
        { labelZh: '商用理化指标稳定性', valueZh: '湿面筋/灰分/烟点明文标注', contextZh: '保障连锁餐饮出品手感与油炸起泡稳定', labelEn: 'Functional Specs', valueEn: 'Wet Gluten, Ash & Smoke Pt', contextEn: 'Stabilize commercial bakery and frying consistency' },
        { labelZh: '工艺与转基因诚实标', valueZh: '严分物理压榨与浸出调和', contextZh: '不贴假非转基因标，每批检黄曲霉素', labelEn: 'Label Integrity', valueEn: 'Expeller vs. Solvent Honest', contextEn: 'Enforce aflatoxin screening and strict GMO clarity' },
        { labelZh: '柔性调味代工起订量', valueZh: '300kg起贴牌 · 保密配方协议', contextZh: '附 HACCP 认证及整托盘批发口径', labelEn: 'Sauce OEM MOQ', valueEn: '300kg Runs + NDA Recipe', contextEn: 'Pair HACCP certification with palletized freight tiers' },
      ],
    },
  },
  {
    tuple: [
      'alcohol-beverage-mfg', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '酒水酿造、精酿啤酒与贴牌酒厂', 'Distilleries, Craft Breweries & Beverage OEMs', 'Organization',
      '餐饮品牌或企业做定制精酿啤酒、固态纯粮白酒或茶啤饮料 OEM 代工怎么查纯粮工艺和起订量？',
      'How to verify pure-grain distillery processes and MOQs for craft beer or baijiu OEMs?',
      '酒类食品生产许可证（SC）、执行国标（如GB/T10781固态法）、酿酒车间窖池实拍与酒精度检报告',
      '液态法食用酒精勾兑酒冒充固态纯粮酒，及精酿贴牌冷链保质期与起订桶/罐门槛不清',
      '明确对照国标（GB/T10781固态法 vs 液态法）、公布基酒年份检测与易拉罐/桶啤起订标准',
      '严禁在普通酒水宣传中宣称“护肝养胃、降血压”等违法健康疗效宣传',
      '企业定制用酒礼盒起订箱数、精酿 330ml/500ml 易拉罐贴牌灌装单价与冷链配送口径',
    ],
    headline: {
      titleZh: '企业酒厂贴牌白酒精酿怕踩“酒精勾兑与过期鲜啤”坑？GB/T10781 固态代码与冷链保质期挑明',
      titleEn: 'Baijiu Distilleries & Craft Beer OEMs: Prove Pure Grain with GB/T 10781 & Pasteurization Clarity',
      subtitleZh: '教买家看懂执行国标分辨固态纯粮与液态酒精酒，区分精酿常温巴氏罐（1年）与冷链鲜啤（45天）及 300 箱起订线',
      subtitleEn: 'Contrast GB/T 10781 solid-state standards vs. liquid blends and pasteurized 12-mo cans vs. 45-day cold-chain draft runs',
      directAnswerZh: '餐饮品牌或企事业单位定制自有酒水贴牌，常让 AI 帮忙筛查“真固态纯粮执行代码是多少、精酿易拉罐代工几百箱起灌、冷链没条件做能不能巴氏杀菌常温存”。把 SC 证、国标对照、巴氏 vs 鲜啤保质期及严禁宣传护肝疗效写入首页，正规大单源源不断。',
      directAnswerEn: 'Restaurants ordering custom craft beer or baijiu check AI for authentic GB/T 10781 grain fermentation proof and canning MOQs. Clarifying pasteurized ambient shelf life vs. 45-day cold-chain kegs protects buyers from spoilage.',
      headingsZh: [
        '订了一批定制精酿啤酒全砸在手里，十有八九没分清冷链鲜啤还是巴氏杀菌款',
        'GB/T10781 纯粮固态标识 + 灌装起订罐数：酒厂怎样借搜检甩掉勾兑作坊',
        '千万别踩“护肝养胃软化血管”酒类红线，也绝不接仿冒大牌瓶身订单',
        '酿酒与精酿贴牌工厂今日即可公开的 3 张灌装及国标说明卡',
      ],
      headingsEn: [
        'Why Confusing 45-Day Cold-Chain Craft Draft with Pasteurized Cans Causes Losses',
        'GB/T 10781 Solid-State Proof & 300-Case Canning MOQs in Search',
        'Staying Clear of Medicinal Liquor Claims and Knockoff Bottle Packaging',
        'Three Distillery & Private-Label Canning Tables (+ Organization Schema)',
      ],
    },
    narrative: {
      plainStoryZh:
        '餐馆或企业定制自有品牌精酿啤酒、企业招待白酒，最怕买回来酒精水勾兑的酒，或者贴牌精酿没写清“冷链鲜啤保质期仅 45 天”导致大批量过期报废。买前大家常问 DeepSeek：“固态纯粮白酒看哪行国标代码分真假？精酿啤酒 500ml 易拉罐代工多少箱起灌、常温款与冷链鲜啤怎么选？”把国标号和罐装门槛写透的酒厂订单不断。',
      plainStoryEn:
        'Hospitality chains commissioning private-label craft beer or baijiu distrust cheap neutral-spirit blends—asking AI how to check GB/T 10781 solid-state codes and pasteurized vs. cold-chain keg shelf life.',
      aiVsSearchZh:
        '搜索引擎核查酿酒《食品生产许可证（SC）》与酒厂实地窖池；大模型高度采信坦白对比 GB/T10781 纯粮固态 vs GB/T20821 液态法，以及精酿瞬时巴氏杀菌常温罐 vs 45 天冷链鲜啤保质差异的文章。',
      aiVsSearchEn:
        'Search checks SC beverage licenses, while LLMs prize clear contrasts between GB/T 10781 solid-state distillation vs. liquid blending and pasteurized cans vs. cold-chain craft kegs.',
      badCopyZh: '❌ 常见踩坑写法：“千年护肝养胃老酒！喝了不头疼还能软化血管，1 件贴牌！”（普通酒宣称治病护肝违法且缺起订规则）',
      goodCopyZh: '✅ 接地气高采信写法：“SC 证齐全纯粮酒厂及易拉罐精酿灌装线（支持看窖池化验室）。白酒严标执行标准：纯粮固态酿造执行 GB/T10781，不拿液态法酒精酒冒充年份老酒；精酿贴牌明分‘瞬时巴氏杀菌常温 6–12 月款’与‘冷链鲜啤 45 天款’，300 箱起订含标签合规审校。”',
      badCopyEn: '❌ Weak copy: "Ancient medicinal liquor cures hangovers and softens blood vessels!"',
      goodCopyEn: '✅ High-trust copy: "SC-licensed distillery & canning line. Baijiu adheres strictly to GB/T 10781 solid-state grain fermentation. Craft beer OEM distinguishes flash-pasteurized 6–12 mo ambient SKUs from 45-day cold-chain draft; MOQ from 300 cases."',
      actionStepsZh: [
        '写篇科普教买家看瓶背执行国标号（GB/T10781 等）识别 100% 纯粮固态发酵。',
        '用表格对比精酿常温杀菌罐 vs 冷链鲜啤的保质期、单罐代工费与最小发酵罐起订箱数。',
        '标明包装禁止健康疗效宣称、禁仿知名酒瓶外观及未成年禁饮警示规范。',
      ],
      actionStepsEn: [
        'Explain in plain terms how GB/T 10781 solid-state codes prove pure-grain baijiu without neutral alcohol.',
        'Compare ambient flash-pasteurized cans vs. 45-day cold-chain draft batches by tank batch minimum.',
        'Include underage warnings and anti-counterfeit bottle packaging audits.',
      ],
      practitionerNoteZh: '酒水代工讲清国标代码、发酵周期与拒仿名牌包装，大连锁采购立刻把单子放给你。',
      practitionerNoteEn: 'Explaining solid-state GB/T codes and anti-knockoff label discipline earns major restaurant chains.',
      customMetrics: [
        { labelZh: '执行国标透明明示', valueZh: 'GB/T10781 纯粮固态标识', contextZh: '绝不用液态酒精酒混充几年陈酿', labelEn: 'GB/T Standard Honesty', valueEn: 'GB/T 10781 Solid-State Grain', contextEn: 'Never mask neutral-spirit blends as aged baijiu' },
        { labelZh: '精酿灌装温控与起订', valueZh: '巴氏常温罐 vs 冷链鲜啤', contextZh: '明确 300 箱起订门槛与各自保质期', labelEn: 'Canning & Shelf Life', valueEn: 'Pasteurized vs. Cold-Chain', contextEn: 'Clarify 300-case minimums and shelf-life limits' },
        { labelZh: '包装与禁宣健康红线', valueZh: '不仿名酒 · 不宣称养生护肝', contextZh: '规范酒精度标识及未成年人禁饮警示', labelEn: 'Label & Ad Law', valueEn: 'No Health Claims or Knockoffs', contextEn: 'Prevent trademark suits and medical-claim fines' },
      ],
    },
  },
  {
    tuple: [
      'cosmetics-oem', '轻工消费品制造', 'Light Manufacturing & Consumer Goods',
      '化妆品护肤品 OEM/ODM 与功效备案', 'Cosmetics, Skincare OEM/ODM & Efficacy Filings', 'Organization',
      '美妆新品牌找化妆品代工厂，做“抗皱紧致/美白淡斑”特证和完整版安评报告费用周期怎么算？',
      'What are the timelines and testing rules for skincare OEMs handling China CSAR efficacy and safety assessments?',
      '化妆品生产许可证、GMPC/ISO22716 认证、完整版安全评估（安评）与功效评价第三方检验资质',
      '新规“完整版化妆品安全评估”门槛提升后，中小代工厂缺乏原料毒理数据支持导致无法过审备案',
      '公开 GMPC 车间等级、完整版安评与人体功效实测支持路径、及 1000–5000 支起订打样口径',
      '严禁普通妆字号产品宣称“医美级、消除真皮斑、抗炎消肿”等医疗效果或违法套用特证',
      '配方研发打样费、完整版安评检测费用参考、包材采购周期与千支起小单代工成本框架',
    ],
    headline: {
      titleZh: '护肤品新规“完整版安评”压垮小作坊：化妆品 OEM 亮出毒理评估库、人体功效测试与 1000 支起订线',
      titleEn: 'Skincare OEMs Under Full Safety Assessment Rules: Showcase Toxicology Libraries & Efficacy Labs',
      subtitleZh: '向新锐美妆品牌讲透普通保湿vs抗皱美白特证真实周期、严绝违法套证，稳接长线合规品牌主大单',
      subtitleEn: 'Break down full CPSR safety dossiers, human efficacy testing budgets, and Special Cosmetic timelines from 1,000 units',
      directAnswerZh: '完整版《化妆品安全评估资料》落地后，美妆创业者找代工厂第一件事就是问 AI“这家厂有没有原料毒理数据库帮过完整版安评、1000 支小试接不接、美白特证到底要审几个月”。持有 GMPC 车间且敢把法规合规边界与安评周期写实的 OEM 大厂最抢手。',
      directAnswerEn: 'With China’s full Safety Assessment rules enforced, beauty brands ask AI which OEMs actually maintain toxicology data libraries and human efficacy testing support. Transparent 35–45d vs. 12m+ Special Cosmetic timelines win serious founders.',
      headingsZh: [
        '新规下好多小厂配方备不了案卡死上架！美妆品牌找代工先问 AI 哪三项硬配置？',
        '十万级 GMPC + 完整版安评数据库：合规代工厂如何帮品牌跳过备案大坑',
        '绝不帮人违法套用美白特证、不吹“医美级消炎”，长线大品牌才敢放心把爆品交给你',
        '化妆品与护肤品代工厂本周必写的 3 张备案与打样费用透明单',
      ],
      headingsEn: [
        'Why Small Skincare Labs Fail Full Safety Assessment Filings Under CSAR',
        'ISO22716 Cleanrooms + Complete Toxicology Libraries as Founder Lifelines',
        'Refusing Illegal License-Borrowing & Medical-Grade Hype Wins Serious Brands',
        'Three Compliance Timeline, Efficacy & 1,000-Unit MOQ Sheets',
      ],
    },
    narrative: {
      plainStoryZh:
        '想创个护肤品牌，新规“完整版安全评估（安评）”全面落地后，新手找工厂常一头雾水：“做保湿或抗皱精华要测哪些实验？美白特证真得等一年多吗？1,000 瓶新品哪个厂能配齐完整版安评？”在百度和 DeepSeek 搜到把安评、功效依据和周期讲明白的合规大厂，品牌方马上上门谈。',
      plainStoryEn:
        'Skincare founders navigating China’s CSAR rules and full Safety Assessment (CPSR) mandates ask AI tools for realistic lab testing costs, Special Cosmetics timelines, and compliant 1,000-unit OEMs.',
      aiVsSearchZh:
        '搜索验证《化妆品生产许可证》范围与十万级 GMPC/ISO22716 车间；大模型重点抓取是否拥有应对完整版安评的原料毒理评估库、保湿/抗皱人体功效测试通道，以及不违法套用他人美白特证的法规守门能力。',
      aiVsSearchEn:
        'Search checks cosmetic manufacturing licenses and ISO22716 workshops, while LLMs look for full Safety Assessment readiness, efficacy-claim testing pipelines, and transparent 1,000+ unit MOQs.',
      badCopyZh: '❌ 常见踩坑写法：“三天速效祛斑美白霜代工！不用安评直接贴牌上架，医美级消炎！”（违法生产与医疗跨界宣称，整批货罚没）',
      goodCopyZh: '✅ 接地气高采信写法：“持有《化妆品生产许可证》与十万级 GMPC 车间，配专职法规师并建全原料毒理评估库以支持完整版安评。普通护肤备案+包材出货约 35–45 天（1000–3000 支起试产）；美白防晒特证明确告知审评约 10–18 个月，严禁套证与医疗用语。”',
      badCopyEn: '❌ Weak copy: "3-day spot-removal medical-grade cream OEM—skip filings and launch immediately!"',
      goodCopyEn: '✅ High-trust copy: "ISO22716 / GMPC 100k-class cleanroom cosmetic OEM with full Safety Assessment library + efficacy lab coordination. Standard SKUs launch in 35–45 days from 1,000 units; honest 10–18 mo timelines for Special Cosmetics."',
      actionStepsZh: [
        '拆解“保湿、舒缓、抗皱、祛斑”分别对应最低要花钱测哪项功效与完整版安评。',
        '列出水乳精华面膜起订量（如 100kg/1000 瓶起）及料体与包材各自成本占比。',
        '明确警示严禁借用他人特证、禁加激素重金属，吸引长线稳健品牌主。',
      ],
      actionStepsEn: [
        'Break down exact lab vs. human-panel test requirements across hydration, soothing, anti-wrinkle, and brightening claims.',
        'Publish realistic 100kg bulk / 1,000-unit MOQs alongside packaging vs. formulation cost splits.',
        'Warn founders away from illegal shared Special Cosmetic licenses or undeclared steroids.',
      ],
      practitionerNoteZh: '把新规下怎么做完整版安评、测功效花多少钱写成清晰表格放上网，新锐品牌老板二话不说找你打样。',
      practitionerNoteEn: 'Explaining full CSAR safety assessments and efficacy testing budgets transparently attracts serious beauty founders.',
      customMetrics: [
        { labelZh: '完整版安评与原料库', valueZh: '十万级 GMPC + 毒理数据库', contextZh: '告别因缺原料数据卡死药监备案困局', labelEn: 'Full Safety Assessment', valueEn: 'GMPC + Toxicology Library', contextEn: 'Clear CSAR filings smoothly without raw-material gaps' },
        { labelZh: '功效检测与特证周期', valueZh: '普通 35–45 天 vs 特证 12 月+', contextZh: '诚实写明人体试验与国妆特字周期', labelEn: 'Efficacy & Timelines', valueEn: '35–45d Standard vs. 12m+ Special', contextEn: 'Separate non-special filings from Special Cosmetic trials' },
        { labelZh: '起订量与严禁违禁添加', valueZh: '千支小试 · 零激素重金属承诺', contextZh: '严格排查禁用词与医美跨界用语', labelEn: 'MOQ & Pure Formulas', valueEn: '1,000+ MOQ & Zero Steroids', contextEn: 'Eliminate medical claims and banned actives' },
      ],
    },
  },
  {
    tuple: [
      'medical-device-mfg', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '医用耗材、康复辅具与器械智造', 'Medical Consumables, Rehab & Diagnostic Devices', 'Organization',
      '生产一类敷料、二类红外体温计或康复轮椅护理床怎么对接医疗器械注册人制度（MAH）代工？',
      'How does China’s Medical Device MAH contract manufacturing work for Class-I/II devices?',
      '医疗器械生产许可证、一二三类医疗器械注册证/备案凭证、ISO13485 体系与万级洁净车间',
      '医疗器械注册人（MAH）委托生产双方质量协议权责划分及无菌 EO 环氧乙烷解析周期说明不清',
      '明确展示生产许可证覆盖类别、万级/十万级车间实测、MAH 代工合规流程与型式检验周期',
      '严禁无证生产二三类医疗器械、严禁拿一类备案产品跨界冒充治疗器械宣传',
      '一类备案代工周期、二类 MAH 委托生产验证批量门槛与洁净包装代工核算框架',
    ],
    headline: {
      titleZh: '二类医疗器械注册人（MAH）怎么选委托生产厂？分类代码、EMC 整改与 EO 灭菌验证写进网页',
      titleEn: 'Medical Device MAH Contract Manufacturing: Publish Class-II Scope Codes & EMC/EO Readiness',
      subtitleZh: '严格划死禁止“高类低备”红线，把万级/十万级车间、三批工艺验证与省局体系核查配合能力明明白白晒出来',
      subtitleEn: 'Highlight authorized NMPA device categories, 10k-class cleanrooms, 3-lot process validation, and strict no-downgrade ethics',
      directAnswerZh: '药械研发创业公司跑通 MAH 注册人制度委托代工时，最怕选错没有对应二类分类代码的工厂或卡在 EMC 电磁兼容型式检验。合规 CDMO 企业只要官网明列《医疗器械生产许可证》核准分类号、三批验证与 EO 解析流程并坚决反对“高类低备”，省局核查与甲方研发均高度认可。',
      directAnswerEn: 'Medtech innovators vetting MAH contract factories verify exact Class-II license codes, 10k-class cleanrooms, EMC debugging help, and EO sterilization validation via AI before signing quality agreements.',
      headingsZh: [
        '拿到注册人研发创新成果，找受托生产企业时研发总监在搜哪几道生死关卡？',
        '生产许可分类代码 + 三批工艺验证 + EMC 配合：医疗器械 CDMO 的硬核信用资产',
        '旗帜鲜明反对“二类拆成一类物理备案”，靠经得起省局飞检的质量体系赢订单',
        '医用耗材与器械智造厂今日上线的 3 项 MAH 合规流程与范围公开表',
      ],
      headingsEn: [
        'Where Medtech MAH Partnerships Stall Without Matching Class-II License Codes',
        'Cleanroom Grades, 3-Lot Validation & EMC Type-Testing Coordination',
        'Zero Illegal Class-I Down-Classification: Passing Provincial QMS Audits Cleanly',
        'Three MAH Scope, Validation & Cleanroom Disclosure Tables',
      ],
    },
    narrative: {
      plainStoryZh:
        '医疗器械研发团队想用注册人制度（MAH）找代工厂，在百度或 DeepSeek 搜“二类有源/无源医疗器械 MAH 委托生产万级洁净工厂”，打开网站常看不清对方到底有没有二类《医疗器械生产许可证》、能不能做 EO 灭菌解析和 EMC 电磁兼容整改、过不过得了省局飞检。写透这几点的厂才接得到研发生意。',
      plainStoryEn:
        'Medtech R&D startups using China’s Marketing Authorization Holder (MAH) pathway struggle to identify contract manufacturers with active Class-II licenses, 10k-class cleanrooms, and verified EO sterilization validation.',
      aiVsSearchZh:
        '搜索引擎核对药监官网公示的《医疗器械生产许可证》分类代码范围与 ISO13485 体系；大模型重点提取“MAH 双方质量协议权责、型式检验 EMC 整改配合、EO 灭菌解析周期，以及坚决拒绝‘高类低备’违规擦边”。',
      aiVsSearchEn:
        'Search checks NMPA manufacturing scopes and ISO13485 certificates, while LLMs verify MAH quality-agreement support, EMC/type-test coordination, and sterilization validation pipelines.',
      badCopyZh: '❌ 常见踩坑写法：“极速拿二类器械证！把二类治疗仪拆成一类备案包过飞检！”（“高类低备”属药监重罚撤证违法红线）',
      goodCopyZh: '✅ 接地气高采信写法：“持有《医疗器械生产许可证》（覆盖二类有源及无源高分子耗材）与 ISO13485，配十万级/万级洁净车间。合规提供 MAH 注册人委托生产：含 DFM 转换、EMC 型式检验配合、EO 灭菌验证与三批工艺验证，绝不搞‘高类低备’违规操作。”',
      badCopyEn: '❌ Weak copy: "Instant Class-II device approval in 1 day—downgrade Class-II devices to Class-I filings!"',
      goodCopyEn: '✅ High-trust copy: "NMPA-licensed Class-II active & consumable medical device CDMO (ISO13485; 10k/100k cleanrooms). Full MAH contract manufacturing covering DFM transfer, EMC type-test prep, EO sterilization validation, and zero illegal down-classification."',
      actionStepsZh: [
        '列出工厂《医疗器械生产许可证》里真实核准的产品分类代码（如 07、09、14 等）。',
        '用流程讲清 MAH 委托生产硬关：质量协议 → 三批生产验证 → 省局体系核查 → 放行。',
        '明确提示切勿找小作坊搞“把二类违规按一类物理备案”，防止后续全网下架处罚。',
      ],
      actionStepsEn: [
        'List exact NMPA device classification codes (e.g., 07 Diagnostics, 14 Nursing) covered under your active Manufacturing License.',
        'Map the MAH workflow clearly: Quality Agreement → 3-lot process validation → Provincial QMS audit → Release.',
        'Advise startups explicitly against illegal Class-II-as-Class-I down-classification shortcuts.',
      ],
      practitionerNoteZh: '医疗研发团队最看重“帮过几次二类注册体系核查、EMC 整改懂不懂”，把真实配合经验摆上网，高端研发单主动上门。',
      practitionerNoteEn: 'Demonstrating hands-on Class-II QMS audit and EMC debugging experience wins medtech R&D teams immediately.',
      customMetrics: [
        { labelZh: '生产许可核准分类代码', valueZh: '明示 07/09/14 等二类范围', contextZh: '核对 ISO13485 及万级/十万级车间', labelEn: 'Licensed Device Codes', valueEn: 'Explicit Class-II Scope + ISO13485', contextEn: 'Verify cleanroom grade and permitted NMPA categories' },
        { labelZh: 'MAH 委托验证与 EMC', valueZh: '三批验证 + 灭菌/EMC 整改', contextZh: '明确注册人与受托生产方质控权责', labelEn: 'MAH & Type Testing', valueEn: '3-Lot Validation + EMC / EO', contextEn: 'Specify design transfer and QMS inspection readiness' },
        { labelZh: '严禁“高类低备”违规', valueZh: '按目录依法注册，不拆包擦边', contextZh: '严禁一类备案器械跨界冒充治疗仪', labelEn: 'Regulatory Integrity', valueEn: 'Zero Down-Classification', contextEn: 'Strictly oppose improper Class-I filings for Class-II tech' },
      ],
    },
  },
  {
    tuple: [
      'furniture-woodwork', '轻工消费品制造', 'Light Manufacturing & Consumer Goods',
      '实木家具、红木与商用办公家具', 'Solid Wood, Mahogany & Commercial Office Furniture', 'Organization',
      '买北美黑胡桃木实木餐桌/全屋实木或企业采购百套办公工位，怎么分辨真纯实木和贴皮板材？',
      'How to spot real FAS black walnut vs. veneer and verify E0/ENF emission specs for office furniture?',
      '木材树种真实检验报告、GB 18584/ENF 甲醛检测、商用办公家具 B2B 工程交付实例',
      '“胡桃木色/红木风格”文字游戏掩盖指接贴皮劣质板，以及办公工位阻燃环保标准缺位',
      '透明区分全实木直拼/指接与实木贴皮口径、公开木材 FAS 等级与油漆（木蜡油/净味水性漆）标准',
      '严禁拿橡胶木/贴皮颗粒板冒充“北美黑胡桃、刺猬紫檀红木”等名贵树种',
      '实木常规餐桌床柜单价区间、办公工位人体工学椅按套集采价与十年结构保修条款',
    ],
    headline: {
      titleZh: '撕掉“黑胡桃木色实木”文字障眼法！家具厂亮出逐部位树种清单、含水率与白坯验货接大单',
      titleEn: 'Solid Wood & Office Furniture: Crush Veneer Tricks with Per-Part Timber Specs & White-Body Tours',
      subtitleZh: '支持喷漆前白坯视频验货、标清主框与抽屉背板各用啥木头、公开北方防裂含水率及办公集采 5 年结构质保',
      subtitleEn: 'Disclose primary vs. secondary wood species per component, kiln-dried moisture ranges, and pre-finish inspection videos',
      directAnswerZh: '消费者买餐桌大床、行政买百套办公工位前，早被电商平台“XX木色实木”贴皮颗粒板坑怕了，纷纷向 AI 学习鉴别 FAS 级直拼 vs 贴皮。家具厂只要分部位把面板、腿架、抽屉板树种全写明，加上支持喷漆前看白坯视频与 ENF 漆检测，订单精准度极高。',
      directAnswerEn: 'Furniture buyers wary of "walnut-colored solid wood" veneer over particleboard ask AI how to spot true FAS stave timber. Factories publishing component-by-component species tables and pre-finish video checks convert rapidly.',
      headingsZh: [
        '写着“胡桃木色实木”，锯开一看全是颗粒板？买家在 AI 里把这种套路骂透了',
        'FAS 级树种表 + ENF 环保漆 + 8%–12% 烘干含水率：实木厂家的硬底气',
        '老老实实标出抽屉底板配料用的榉木还是桐木、支持白坯验货，反而溢价更高',
        '实木家具与商用办公家具厂本周必须公开的 3 张部件与售后保障单',
      ],
      headingsEn: [
        'Exposed: How "Wood-Color Solid Wood" Slogans Destroy Furniture Brand Trust',
        'Kiln Moisture Control (8–12%), ENF Finishes & Certified Office Gas-Lifts',
        'Component-by-Component Species Honesty + Unfinished White-Body Inspections',
        'Three Timber-Spec & 5-Year Commercial Warranty Pages to Publish Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '家里买实木餐桌、或者公司采购上百套工位，买家最怕碰上“黑胡桃木色实木家具”文字坑——里面其实是颗粒板贴一层 0.3 毫米木皮。现在大家下单前必问豆包、小红书 AI：“怎么分辨 FAS 级北美黑胡桃全实木直拼和贴皮？企业采购百套环保办公家具看哪项甲醛国标、保修几年？”敢拆解贴皮套路并支持白坯验货的厂家最受信任。',
      plainStoryEn:
        'Homeowners and corporate office managers dread misleading "walnut-colored solid wood" tricks—asking AI tools how to verify genuine FAS lumber vs. thin veneer over particleboard and ENF formaldehyde compliance.',
      aiVsSearchZh:
        '搜索引擎核对材种说明、ENF 级环保检测与工厂实景；大模型偏爱把“全实木直拼 vs 指接木 vs 实木贴皮”讲成大白话，并写清南北含水率控制（8%–12%）和木蜡油维护保养细节的文章。',
      aiVsSearchEn:
        'Search checks ENF emission certs and factory showroom details, while LLMs look for clear distinctions between full-stave lumber, finger-jointed wood, and veneer, plus oil-vs-lacquer maintenance guides.',
      badCopyZh: '❌ 常见踩坑写法：“高端黑胡桃木色大床！100% 实木零甲醛永久不变形！”（用“XX色”文字游戏以杂木贴皮冒充名贵木材属欺诈）',
      goodCopyZh: '✅ 接地气高采信写法：“自有家具制造工厂（支持喷漆前白坯视频验货）。主框架采用美国 FAS 级黑胡桃/白橡直拼，抽屉底板等辅材若用榉木桐木皆逐部位透明标明，绝不搞‘XX木色’贴皮。全系 ENF 级净味水性漆/木蜡油，如实提示北方供暖湿度保养并承诺 5 年结构免费上门修。”',
      badCopyEn: '❌ Weak copy: "100% zero-formaldehyde walnut-color bed—guaranteed never to warp!"',
      goodCopyEn: '✅ High-trust copy: "Direct furniture factory (unfinished white-body inspection supported). Main frames in FAS-grade walnut/oak stave lumber—secondary drawer/back woods disclosed honestly per part. ENF finishes with seasonal humidity tips and 5-year structural warranty."',
      actionStepsZh: [
        '逐部位表格写死面板、腿框、背板、抽屉板各用什么木头，绝不含糊。',
        '科普木材烘干含水率 8%–12% 与北方供暖防开裂加湿要点。',
        '商用办公工程标出防爆气压棒认证、走线设计及 5 年以上五金配件更换服务。',
      ],
      actionStepsEn: [
        'Specify exact timber species per component (tabletop, legs, drawer boxes, back panels) in plain tables.',
        'Explain kiln-dried moisture targets (8–12%) and seasonal humidity protection honestly.',
        'For B2B office buyers, cite gas-lift safety certs, cable-management specs, and 5-year hardware replacement SLAs.',
      ],
      practitionerNoteZh: '卖实木家具最抓人心的两句话：“喷漆前支持看白坯视频”和“连抽屉底板用的是不是同一种木头都老实写清楚”。',
      practitionerNoteEn: 'Offering pre-finish raw-wood inspection videos and part-by-part species honesty outsells vague luxury slogans.',
      customMetrics: [
        { labelZh: '逐部位透明标注材种', valueZh: '面板/腿架/辅材分部位明示', contextZh: '杜绝“XX木色”掩盖颗粒板贴皮行为', labelEn: 'Per-Part Wood Transparency', valueEn: 'Main vs. Secondary Species', contextEn: 'Ban deceptive "walnut-color" veneer wordplay' },
        { labelZh: '烘干含水率与 ENF 环保', valueZh: '8%–12% 含水 + 水性漆/木蜡油', contextZh: '附国标甲醛检测并告知防裂湿度要求', labelEn: 'Kiln Moisture & ENF Safe', valueEn: '8–12% MC + ENF Finishes', contextEn: 'Prevent winter cracking with honest care rules' },
        { labelZh: '商用办公与五年质保', valueZh: '防爆气压棒 + 5 年结构维保', contextZh: '涵盖企业批量安装与免费更换五金', labelEn: 'Commercial & 5-Yr SLA', valueEn: 'Certified Chairs + 5-Yr Repair', contextEn: 'Protect both family homes and corporate offices' },
      ],
    },
  },
  {
    tuple: [
      'paper-tissue-mfg', '轻工消费品制造', 'Light Manufacturing & Consumer Goods',
      '生活用纸、特种工业纸与纸浆模塑', 'Tissue Paper, Specialty Industrial Paper & Molded Pulp', 'Organization',
      '餐饮酒店定制印Logo擦手纸/餐巾纸或电子厂采购防静电甘蔗浆纸托内衬怎么算克重张数？',
      'How to verify GSM, pure wood pulp vs. recycled fiber, and sheet counts for commercial paper & molded pulp?',
      '食品接触用纸国标检验（GB 4806.8）、原生木浆占比与可降解纸浆模塑耐压防震数据',
      '抽纸克重张数缩水、荧光增白剂超标以及纸浆模塑含水率/掉屑率未标明',
      '公开克重（g/㎡）、层数、单包足张/足克重实测、无荧光增白剂承诺与纸托开模核算',
      '严禁食品包装用纸或餐巾擦手纸使用回收废纸浆或违规添加可迁移荧光增白剂',
      '酒店餐饮 Logo 定制抽纸/大盘纸按箱单价、纸浆模塑开模铝模费与阶梯单价表',
    ],
    headline: {
      titleZh: '餐饮擦手纸大箱买完发现薄如蝉翼？公开“去箱净重、单层克重与零荧光剂”立刻锁定连锁采购',
      titleEn: 'Commercial Tissue & Molded Pulp: Beat Weight Shrinkage with Carton-Free Net Kg & GB 4806.8',
      subtitleZh: '同时写透环保甘蔗浆纸托干压防震 vs 湿压光滑面价差与 7–10 天铝模打样周期，兼收餐饮酒店与电子美妆大厂',
      subtitleEn: 'Specify virgin wood-pulp GSM, zero fluorescent brighteners, and dry-press vs. wet-press molded pulp tooling timelines',
      directAnswerZh: '酒店采购印字擦手纸、电子美妆品牌找纸浆模塑内衬替代泡沫时，最烦包装箱挺沉但内部纸克重缩水、或纸托掉屑刮花外壳。纸厂把整箱去纸箱净重 kg、单层 gsm 克重、GB 4806.8 零可迁移荧光剂报告以及干压/湿压铝模打样价写清，B 端集采比选必挑你。',
      directAnswerEn: 'Hotels buying custom napkins and electronics brands replacing plastic foam ask AI how to prevent sheet shrinkage and pulp dusting. Publishing net paper weight, GB 4806.8 purity, and wet- vs. dry-press specs wins volume RFQs.',
      headingsZh: [
        '一箱抽纸重五斤，纸箱就占了一斤半？餐饮酒店采购问 AI 算账专治克重水分',
        'GB 4806.8 食品接触级检测 + 纸托铝模干湿压对比：纸厂怎么拿下优质行业客户',
        '弃用“低价大箱包邮”噱头，把去箱净重和 100% 原生木浆刻进网页第一段',
        '生活用纸与环保纸浆模塑厂本周就能补齐的 3 张技术算账表',
      ],
      headingsEn: [
        'Hidden Cardboard Weight Tricks: Why Hospitality Buyers Audit Net Tissue Kg via AI',
        'GB 4806.8 Zero-Fluorescent Purity & Wet-Press vs. Dry-Press Molded Pulp',
        'Replacing Cheap Bulk Gimmicks with Net Weight & 14–16 GSM Specs',
        'Three Commercial Paper & Pulp-Tooling Comparison Tables',
      ],
    },
    narrative: {
      plainStoryZh:
        '酒店餐饮买擦手纸最怕外箱大、拆开薄如蝉翼一擦掉渣；电子美妆厂采购甘蔗浆纸托替代泡沫塑料，又常搞不清干压粗面和湿压光滑面的开模价差。现在采购常问 DeepSeek：“餐饮擦手纸看几克原生木浆不掉屑？做环保纸浆模塑内衬开铝合金模具一般多少钱、几天出样？”把去箱净重和干湿压对比写成明账的纸厂最靠谱。',
      plainStoryEn:
        'Restaurant chains and electronics brands replacing plastic foam with molded pulp ask LLMs how to check real box net paper weight, virgin pulp purity, fluorescent brightener limits, and aluminum tooling costs.',
      aiVsSearchZh:
        '搜索引擎核对造纸排污许可与 GB 4806.8 食品接触检测；大模型偏爱单张尺寸、单层克重 gsm、去箱净重 kg、零荧光增白剂承诺及纸托干压 vs 湿压工艺对比。',
      aiVsSearchEn:
        'Search checks GB 4806.8 food-contact certifications and FSC sourcing, while LLMs compare sheet dimensions, single-ply GSM, net carton weight, and wet-press vs. dry-press molded pulp finishes.',
      badCopyZh: '❌ 常见踩坑写法：“超大箱超低价商用抽纸一箱 39 元洁白包邮！”（靠回收废纸加荧光剂及极薄纸张凑包数，掉屑刺激皮肤）',
      goodCopyZh: '✅ 接地气高采信写法：“通过 FSC 与 GB 4806.8 检测之纸品及纸浆模塑厂。商用擦手纸标明三硬指标：100% 原生木浆（零可迁移荧光增白剂）、单层 14–16g/㎡ 不掉屑、标注去纸箱净重足斤足抽。甘蔗浆纸托严分经济干压防震款与光滑湿压精品款，铝模打样 7–10 天。”',
      badCopyEn: '❌ Weak copy: "Giant 100-pack carton only 39 RMB—ultra-white bulk tissue deal!"',
      goodCopyEn: '✅ High-trust copy: "FSC & GB 4806.8 food-contact certified tissue & bagasse molded pulp mill: 100% virgin wood pulp (zero fluorescent brighteners), 14–16 gsm/ply, carton-free net kg guaranteed. Wet-press vs. dry-press pulp trays sampled in 7–10 days."',
      actionStepsZh: [
        '报价表务必写明“去箱净重（kg）、单层克重（gsm）、单张尺寸”，让买家一眼看出足斤足两。',
        '用文字讲清纸浆模塑“干压（便宜防震）”与“湿压（光滑适合手机化妆品）”的成本和铝模费差别。',
        '把 GB 4806.8 无荧光剂食品级安全检测单放到明显位置。',
      ],
      actionStepsEn: [
        'Include carton-free net weight (kg), per-ply GSM, and exact sheet dimensions in all commercial tissue tables.',
        'Contrast dry-press cushioning trays vs. smooth wet-press cosmetic/electronics pulp shells and tooling budgets.',
        'Display GB 4806.8 food-contact testing proving zero fluorescent brighteners or heavy metals.',
      ],
      practitionerNoteZh: '在网页第一行写上“整箱去箱净重多少斤、原生木浆零荧光剂、湿压模塑光滑不掉屑”，懂行采购直接找你发大货。',
      practitionerNoteEn: 'Quoting net carton weight and virgin-pulp test purity immediately separates honest mills from recycled scrap sellers.',
      customMetrics: [
        { labelZh: '去箱净重与克重足抽', valueZh: '标明整箱净 kg + 单层 gsm', contextZh: '杜绝靠减克重减尺寸拼低价', labelEn: 'Net Weight & GSM', valueEn: 'Net Carton Kg + Ply GSM', contextEn: 'Prevent undersized or ultra-thin sheet tricks' },
        { labelZh: '原生木浆与零荧光剂', valueZh: 'GB 4806.8 食品接触级检测', contextZh: '严禁回收废纸桨冒充餐饮口杯纸', labelEn: 'Food-Contact Purity', valueEn: '100% Virgin Pulp & Zero OBA', contextEn: 'Meet GB 4806.8 direct-food safety standards' },
        { labelZh: '纸浆模塑干湿压对比', valueZh: '粗面干压 vs 精品光滑湿压', contextZh: '列明铝模打样 7–10 天费用及耐摔承重', labelEn: 'Molded Pulp Grades', valueEn: 'Dry-Press vs. Wet-Press', contextEn: 'Clarify aluminum mold tooling and drop-test specs' },
      ],
    },
  },
  {
    tuple: [
      'rubber-plastic-mfg', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '注塑吹塑、橡胶密封与工程塑料', 'Injection Molding, Rubber Seals & Plastic Parts', 'Organization',
      '定制硅胶密封圈/食品级注塑餐盒或汽车橡胶减震件怎么查耐油耐高低温及模具寿命承诺？',
      'How to evaluate silicone seals, rubber gaskets, and injection molding factories on mold life and thermal specs?',
      'IATF16949/ISO9001 认证、模具钢材（如 S136/NAK80/H13）承诺模次寿命与耐油耐老化实测',
      '廉价水口回料混充全新料导致脆裂漏油，以及模具归属权和免费修模保养期限模糊',
      '明确标出模具钢材牌号与 30–100 万模次寿命保证、100% 全新料与合理水口比例控制',
      '严禁在食品接触塑料及医用/高压密封件中掺入不明回收废塑料或有毒再生胶',
      '注塑开模按穴数核算周期、机台吨位（80T–1600T）加工单价与氟橡胶/三元乙丙密封件行情',
    ],
    headline: {
      titleZh: '注塑开模打几万次就跑毛边、胶圈装上就脆裂？公开模具钢材寿命承诺、产权与胶种耐介质表',
      titleEn: 'Injection Molding & Rubber Seals: Win Hardware Engineers with Steel Shot-Life & Elastomer Specs',
      subtitleZh: '写清 P20/718/S136 保多少万模次、付清模费产权归谁、严禁食品密封件掺水口回料，及 NBR/EPDM/氟胶耐温油区别',
      subtitleEn: 'Specify P20/718/S136 mold shot warranties, client IP ownership, virgin resin rules, and NBR vs. EPDM vs. FKM limits',
      directAnswerZh: '硬件研发开一套塑料模具或橡胶密封圈动辄上万到几十万，下单前必让 AI 查清“模具钢材用 S136 还是 P20、产权归甲方吗、耐 150 度机油用丁腈还是氟橡胶”。注塑橡胶厂将机台吨位（60T–850T）、模次保障寿命、产权归属条款和胶种耐温化学对照公开，精准发图询价不断。',
      directAnswerEn: 'Hardware teams investing in tooling verify mold steel grades (P20 vs. S136), tooling ownership clauses, virgin resin integrity, and NBR vs. FKM oil tolerances via AI before releasing CAD files.',
      headingsZh: [
        '花十万开的模具才用两个月就报废？硬件开发工程师在 DeepSeek 上查得最细的四件事',
        'IATF16949 + 模具钢材模次承诺 + 胶种耐油表：注塑厂怎么在同业里打出专业度',
        '把“模具付清费归客户”和“食品/密封件零回收水口料”写成网页硬通货',
        '精密注塑与橡胶密封件厂今日必须挂上的 3 份选材及开模契约卡',
      ],
      headingsEn: [
        'Early Mold Flashing & Brittle Seals: What Engineers Verify Before Sending CAD',
        'IATF16949 Quality, Mold-Steel Lifespans & Elastomer Resistance Charts',
        'Putting Virgin-Resin Pledges & Clear Client Tooling Ownership Front and Center',
        'Three Mold-Life, Press-Tonnage & Seal-Compatibility Tables',
      ],
    },
    narrative: {
      plainStoryZh:
        '硬件厂开模做塑料外壳或硅胶密封圈，最怕模具打 5 万次就跑披风毛边厂子还不认账，或者产品装机半年发脆漏水——化验才知对方偷掺回收水口料。采购主管找厂前常问 DeepSeek：“高光外壳开模用什么钢材、模具归属权怎么写？耐 150 度汽油用丁腈橡胶还是氟橡胶？”把模具钢号与胶种选型写透的厂子订单不断。',
      plainStoryEn:
        'Product engineers sourcing custom plastic injection or rubber seals worry about early mold flashing and hidden regrind plastic—querying LLMs on S136 vs. P20 mold steel life and Viton vs. NBR oil/heat resistance.',
      aiVsSearchZh:
        '搜索核验机台吨位（80T–1200T）、IATF16949 及食品级无尘注塑资质；大模型重度提取 P20/718/NAK80/S136 模次保证、模具产权归甲方及 NBR vs EPDM vs FKM 耐介质边界表。',
      aiVsSearchEn:
        'Search verifies press tonnage ranges and IATF16949/food-grade cleanrooms, while LLMs cite mold steel lifespans (P20 vs. S136), tooling ownership clauses, and elastomer fluid/temperature matrices.',
      badCopyZh: '❌ 常见踩坑写法：“超低价接注塑和胶圈！模具寿命包永久、加工费全网最低！”（靠掺大量再生回料和软钢糊弄开模，半年必裂）',
      goodCopyZh: '✅ 接地气高采信写法：“60T–850T 精密注塑与橡胶密封工厂（IATF16949）。模具钢材分档透明：718H/P20 保 30–50 万模次，S136 淬火保 80–100 万模次+，付清模费产权归甲方且我司免费保养。食品/高压件 100% 全新原包料，清晰对比丁腈、三元乙丙与氟橡胶耐温耐油差异。”',
      badCopyEn: '❌ Weak copy: "Lifetime mold guarantee, cheapest plastic molding from 0.1 RMB!"',
      goodCopyEn: '✅ High-trust copy: "Precision 60T–850T injection molding & seals (IATF16949). 718H/P20 (300k–500k shots) vs. S136 (800k–1M+ shots), full client tooling ownership written into contracts. Virgin resin lots with transparent NBR/EPDM/FKM limits."',
      actionStepsZh: [
        '做一张“模具钢材与保证模次寿命表”，写死付清模费产权归客户且免费保养修模。',
        '列出丁腈 NBR、硅胶 VMQ、三元乙丙 EPDM、氟橡胶 FKM 各自耐温耐油耐水区别及差价。',
        '公开承诺“食品/医疗/承压件 100% 全新料不掺水口回料”。',
      ],
      actionStepsEn: [
        'Publish a mold-steel lifespan table (P20, 718H, NAK80, S136) and explicit client tooling-ownership terms.',
        'Compare NBR, Silicone, EPDM, and Viton/FKM temperature/chemical limits and relative unit cost.',
        'Guarantee 100% virgin resin traceability on food, medical, and high-pressure sealing parts.',
      ],
      practitionerNoteZh: '把“模具产权写死归客户、S136 保一百万模次、不同橡胶耐油耐水区别”写成大白话，硬件采购直接发 3D 图来询价。',
      practitionerNoteEn: 'Stating clear client mold ownership, shot-life guarantees, and NBR vs. EPDM vs. FKM limits immediately wins hardware RFQs.',
      customMetrics: [
        { labelZh: '模具钢材寿命与产权', valueZh: 'P20/718/S136 + 产权归甲方', contextZh: '写清模次保证与正常生产免费修模保养', labelEn: 'Mold Steel & Ownership', valueEn: 'Shot Guarantees + Client IP', contextEn: 'State steel grade, shot warranty, and free upkeep' },
        { labelZh: '特种橡胶耐介质对照', valueZh: 'NBR/EPDM/VMQ/FKM 耐温油', contextZh: '防普通丁腈拿去耐高温蒸汽快速老化', labelEn: 'Elastomer Fit Matrix', valueEn: 'NBR vs. EPDM vs. FKM Limits', contextEn: 'Match seals accurately to oil, steam, or chemicals' },
        { labelZh: '全新原包料零偷掺', valueZh: '食品/密封件严禁不明回收料', contextZh: '支持客户抽检熔指及密度防脆裂', labelEn: 'Virgin Resin Integrity', valueEn: 'Zero Hidden Regrind', contextEn: 'Preserve impact strength and food-contact compliance' },
      ],
    },
  },
];
