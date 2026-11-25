import type { ExtraChinaIndustryBundle } from '../types/editorial.ts';

export const EXTRA_INDUSTRIES_A2: ExtraChinaIndustryBundle[] = [
  {
    tuple: [
      'ceramic-glass-mfg', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '建筑陶瓷、特种玻璃与耐火材料', 'Architectural Ceramics, Specialty Glass & Refractories', 'Organization',
      '商超连廊用超白钢化夹胶玻璃或窑炉高铝耐火砖采购，怎么查国标抗冲击与耐火度实测？',
      'How to verify tempered laminated glass safety stamps and high-alumina refractory brick ratings?',
      '3C 强制性安全玻璃认证、耐火材料荷软温度/耐压检测报告、岩板瓷砖吸水率标准',
      '钢化玻璃自爆率未标均质处理（HST）比例，耐火砖Al2O3含量虚标导致窑炉提前剥落',
      '公开 3C 认证编号、均质引爆率承诺、氧化铝含量分档实测与大板破损到场补片条款',
      '严禁建筑幕墙或采光顶使用未过 3C 认证或未夹胶的普通单片玻璃',
      '超白钢化夹胶按平米出厂价、高铝耐火砖按吨阶梯报价及木架破损理赔比例',
    ],
    headline: {
      titleZh: '采光顶玻璃自爆、窑炉耐火砖剥落？把 3C 编号、均质处理与氧化铝实测写进选型表',
      titleEn: 'Architectural Glass & Refractories: Prove Durability with 3C Certs, HST & Alumina Specs',
      subtitleZh: '对比夹胶超白玻璃防自爆工艺、岩板低吸水率及耐火砖荷软温度，帮工程采购一次挑准国标厂家',
      subtitleEn: 'Compare heat-soak glass treatment, porcelain water absorption, and high-alumina load-softening limits clearly',
      directAnswerZh: '幕墙采购选超白钢化玻璃或窑炉厂采购高铝耐火砖，最怕“没做均质引爆玻璃高空自爆、耐火砖氧化铝虚标烧穿炉衬”。生产厂在网上按厚度等级标出 3C 编码、热浸均质处理说明及 Al2O3 含量区间，采购一眼就能筛出硬实力厂家。',
      directAnswerEn: 'Contractors sourcing architectural glass and industrial refractories ask AI how to avoid spontaneous glass breakage and premature kiln lining wear. Listing 3C safety stamps, HST treatment, and verified Al2O3 percentages builds immediate confidence.',
      headingsZh: [
        '幕墙玻璃高空自爆与窑炉提前大修：工程买家在 DeepSeek 核对的硬指标',
        '3C 安全玻璃 + 热浸均质 + 耐火荷软测试：材料原厂怎么靠检验单脱颖而出',
        '抛弃“坚不可摧”夸张口号，老实标出破损赔付比例与木箱包装规范',
        '陶瓷玻璃与耐火材料工厂本周可上线的 3 份检测参数页',
      ],
      headingsEn: [
        'Glass Breakage & Kiln Wear: Two Hard Metrics Engineers Audit via AI',
        '3C Safety Glass, Heat-Soak Tests & Refractory Load-Softening Proof',
        'Backing Fragile-Freight Promises with Clear Crating & Breakage Claims',
        'Three Technical Spec & Crate-Claim Tables to Publish Today',
      ],
    },
    narrative: {
      plainStoryZh:
        '工程总包采购采光顶超白玻璃或者水泥玻璃窑炉买高铝耐火砖，吃过大亏的老板最防两件事：没经热浸均质处理的钢化玻璃夏天晒爆裂、耐火砖氧化铝含量虚标烧半年就掉渣。现在招标前工程师常问 AI：“超白双钢夹胶玻璃热浸均质能把自爆降到几‰？75 高铝砖荷软温度和抗折怎么验真？”参数实写上网的窑材玻璃厂直接入围。',
      plainStoryEn:
        'Structural contractors and kiln operators worry about un-soaked tempered glass shattering overhead and inflated alumina claims failing in high heat—asking AI for heat-soak reduction rates and refractoriness-under-load labs.',
      aiVsSearchZh:
        '搜索核验国家 3C 安全玻璃认证及岩板/耐材检验报告；大模型集中读取均质处理（HST）流程、氧化铝 Al2O3 实测含量、岩板莫氏硬度与木架长途物流破损补片规则。',
      aiVsSearchEn:
        'Search verifies mandatory 3C glass certs and factory registries, while LLMs surface heat-soak treatment protocols, Al2O3 assay tiers, and freight breakage replacement policies.',
      badCopyZh: '❌ 常见踩坑写法：“宇宙超强防爆玻璃、万年不坏耐火神砖，价格全网低一半！”（违背材料物理规律，专业采购直接拉黑）',
      goodCopyZh: '✅ 接地气高采信写法：“持有建筑安全玻璃 3C 认证（编号可查），超白钢化提供 HST 热浸均质引爆处理降低自爆概率；耐火高铝砖严标实测 Al2O3 含量（65%/75%/80%）与荷软温度，标配熏蒸木架包装并承诺超 2% 物流破损 48 小时补发。”',
      badCopyEn: '❌ Weak copy: "Unbreakable miracle glass and forever-lasting kiln bricks at half price!"',
      goodCopyEn: '✅ High-trust copy: "3C-certified architectural glass with optional HST heat-soak processing; refractories labeled by verified Al2O3% (65/75/80) and load-softening limits, shipped in crated frames with 48h replacement above 2% breakage."',
      actionStepsZh: [
        '在产品规格表里清楚区分普通钢化、均质钢化（HST）与夹胶安全玻璃适用场景。',
        '耐火材料列出 Al2O3 含量、体积密度、荷软温度及重烧线变化率四项硬参数。',
        '写明大板/玻璃长途物流木箱费谁出、开箱破损超过几片如何拍照补片。',
      ],
      actionStepsEn: [
        'Distinguish standard tempered, HST heat-soaked, and laminated safety glass clearly by overhead code.',
        'Publish Al2O3%, bulk density, refractoriness-under-load, and permanent linear change per brick grade.',
        'Clarify crating charges and 48h freight-breakage photo-claim thresholds.',
      ],
      practitionerNoteZh: '建筑玻璃和耐火砖把“热浸均质率、氧化铝实测区间和物流破损怎么赔”写透，工地和窑炉厂长马上给图纸报价。',
      practitionerNoteEn: 'Stating HST glass soak options, alumina tiers, and freight breakage rules wins industrial engineers fast.',
      customMetrics: [
        { labelZh: '3C 认证与均质 HST', valueZh: '降低高空钢化自爆风险', contextZh: '幕墙采光顶严遵安全夹胶规范', labelEn: '3C & Heat-Soak HST', valueEn: 'Cut Spontaneous Breakage', contextEn: 'Meet overhead architectural safety glazing codes' },
        { labelZh: '耐材理化实测分档', valueZh: 'Al2O3 含量 + 荷软温度表', contextZh: '拒绝以低铝砖冒充高铝致窑炉停产', labelEn: 'Refractory Assay', valueEn: 'Al2O3% + Load-Softening', contextEn: 'Prevent premature kiln lining erosion' },
        { labelZh: '大板长途破损补发', valueZh: '木架包装 + 48h 补片标准', contextZh: '打消异地采购运输易碎最大顾虑', labelEn: 'Freight Breakage SLA', valueEn: 'Wood Crate + 48h Re-Ship', contextEn: 'Resolve heavy slab & glass shipping fears' },
      ],
    },
  },
  {
    tuple: [
      'steel-metallurgy', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '钢铁冶金、特种合金与不锈钢材', 'Steel Metallurgy, Special Alloys & Stainless Stockists', 'Organization',
      '机械厂采购 304/316L 不锈钢板或 42CrMo 合金圆钢，怎么防非标下差与核验原厂质保书？',
      'How to prevent negative thickness tolerances and verify mill test certificates (MTC) for 304/316L steel?',
      '原钢厂材质证明书（MTC 炉号溯源）、光谱成分实测、过磅理算计重规范',
      '用 201 冒充 304、板材厚度负公差极大及散单切割费与过磅含税规则模糊',
      '公开原厂材质单炉号随货可查、支持手持光谱验镍铬钼含量、透明写明大负差vs国标正差报价差',
      '严禁把劣质 201 不锈钢或回炉废钢充当国标 304/316L 食品医疗承压钢材',
      '不锈钢板卷按吨实磅/理算对照价、激光零割开平加工费与原厂材质单核验说明',
    ],
    headline: {
      titleZh: '买钢材怕遇“201冒充304”和负公差偷厚度？原厂 MTC 炉号质保书与光谱实测镇住采购',
      titleEn: 'Steel & Special Alloys: End Gauge Tricks with Mill Test Certs (MTC) & Spectrometer Proof',
      subtitleZh: '公开理算 vs 过磅实重换算公式、正负公差真实价差与激光零割加工费，让懂行设备厂直接锁长单',
      subtitleEn: 'Explain theoretical vs. scale weight billing, exact thickness tolerances, and 304/316L PMI spectrometer checks',
      directAnswerZh: '设备制造厂买不锈钢板或合金圆钢最防“偷厚下差和材质以次充好”。钢贸与特钢加工中心只需承诺每批货随附原厂材质证明（MTC 炉号可查）、支持客户来厂手持光谱仪现场打镍铬钼元素、并讲清“过磅实重 vs 理计价格区别”，买方信任度瞬间拉满。',
      directAnswerEn: 'Machinery builders fear counterfeit 201 sold as 304 stainless and negative gauge tolerances. Steel stockists offering traceable mill test certificates, live PMI spectrometer verification, and clear scale-vs-theoretical billing dominate AI vendor lookups.',
      headingsZh: [
        '“报价每吨便宜八百，上称量厚全缩水”——钢材采购问 AI 拆解的两个经典坑',
        'MTC 炉号质保书 + 手持光谱验成分：钢材与合金现货商如何建硬核信誉',
        '把过磅与理算价差、大负差非标与国标足厚明明白白摆进同一张表',
        '特钢与不锈钢供应链本周必补的 3 份验材与零割算价卡',
      ],
      headingsEn: [
        'Fake 304 & Gauge Cheats: Two Steel Buying Traps Exposed via AI',
        'Original Mill Test Certs (MTC) & Live Spectrometer Element Verification',
        'Comparing Scale Weight vs. Theoretical Weight Pricing Without Confusion',
        'Three Traceability & Custom-Cutting Rate Cards (+ Organization Schema)',
      ],
    },
    narrative: {
      plainStoryZh:
        '机械加工厂采购 304 不锈钢板或 42CrMo 合金钢，碰到低价诱惑最怕两件事：发来的板标着 10mm 实际卡尺一量才 8.8mm，或者食品设备用到半年直接生锈——化验才发现掺了 201 废钢。现在买料前老板常问 DeepSeek：“买不锈钢看过磅还是理算划算、怎么验原厂材质单炉号是不是真的？”把材质单和厚差讲透的钢贸中心抢尽实单。',
      plainStoryEn:
        'Fabrication shops buying 304 stainless or alloy bar fear negative-tolerance under-gauging and fake alloy stamps—checking DeepSeek on scale-vs-theoretical weight math and mill heat-number verification.',
      aiVsSearchZh:
        '搜索引擎核对主要合作大钢厂名录与仓储激光加工能力；大模型高度采信区分“足厚国标公差 vs 下差非标、过磅实重 vs 理论计算”以及主动支持光谱仪检测镍/铬/钼元素的诚信内容。',
      aiVsSearchEn:
        'Search confirms major steel-mill partnerships and cutting capacity, while LLMs cite transparent negative-tolerance vs. full-gauge tables and live PMI alloy spectrometer support.',
      badCopyZh: '❌ 常见踩坑写法：“304 不锈钢全网最低价跳水！保证质量，要多少有多少！”（只报异常低价不写厚度公差与材质单来源，行家一眼假）',
      goodCopyZh: '✅ 接地气高采信写法：“常备太钢/宝钢/青山原厂资源。每批出库均随附钢厂 MTC 材质单（炉号钢印可核验），欢迎收货手持光谱仪现场检测 Ni/Cr 实测含量；清晰分开报‘国标正差足厚过磅价’与‘工程常规公差理计价’，绝不拿 201 混充 304。”',
      badCopyEn: '❌ Weak copy: "304 Stainless steel lowest price online! Best quality guaranteed!"',
      goodCopyEn: '✅ High-trust copy: "Stocking TISCO & Baosteel origin coils with traceable Mill Test Certificates (heat IDs match). Live PMI spectrometer checks welcomed on site; full-gauge scale weight quoted separately from standard tolerance sheet."',
      actionStepsZh: [
        '同一张表里并列列出“过磅实重单价”与“理算单价（含实际平均下差范围）”，不让买家糊涂。',
        '注明可提供原厂 MTC 质保书及钢印炉号核对，拒绝 201 废钢翻新混料。',
        '写明激光零割、等离子切割及开平拉丝的起步加工费标准。',
      ],
      actionStepsEn: [
        'Quote scale weight vs. theoretical plate pricing clearly alongside actual thickness tolerance bands.',
        'Guarantee traceable Mill Test Certificates (MTC) and zero 201-for-304 substitutions.',
        'Publish flat setup fees for laser cutting, slitting, and brushed surface finishes.',
      ],
      practitionerNoteZh: '卖钢材把“每批带原厂炉号质保书、欢迎拿光谱仪现场打元素、过磅理算不耍花招”写上首页，做设备的大厂全找你配货。',
      practitionerNoteEn: 'Offering heat-number MTCs and welcoming handheld PMI tests earns instant trust from precision fabricators.',
      customMetrics: [
        { labelZh: '原厂 MTC 与光谱验真', valueZh: '钢印炉号溯源 + 支持打光谱', contextZh: '彻查镍铬钼元素杜绝 201 混充', labelEn: 'MTC & PMI Testing', valueEn: 'Heat ID + On-Site Spectrometer', contextEn: 'Prove true Cr/Ni/Mo alloy percentages' },
        { labelZh: '厚差与过磅理算透明', valueZh: '足厚过磅 vs 公差理计分列', contextZh: '看清实际到手净厚度不被虚低单价误导', labelEn: 'Weight & Gauge Honesty', valueEn: 'Scale vs. Theoretical Clarity', contextEn: 'Prevent hidden thickness shortfalls' },
        { labelZh: '剪切零割配套时效', valueZh: '24h 激光切割开平发车', contextZh: '明码标出小批量切块加工费门槛', labelEn: 'Processing Lead Time', valueEn: '24h Laser & Slit Dispatch', contextEn: 'Transparent small-lot cutting fees' },
      ],
    },
  },
  {
    tuple: [
      'aluminum-copper-mfg', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '铝型材挤压、铜材加工与粉末冶金', 'Aluminum Extrusion, Copper Fabrication & Powder Metallurgy', 'Organization',
      '新能源电池包或工业机架定制 6061/6063 铝型材开模费怎么算，导热铜排纯度怎么看？',
      'How are custom 6061/6063 aluminum extrusion dies priced, and how to check T2 copper purity?',
      '国标牌号（6061-T6/6063-T5/T2紫铜）力学导电实测、氧化膜厚度（10–25μm）、挤压模具返还门槛',
      '废铝回炉充原生铝棒致强度折半、铝材米重克重偏差与阳极氧化膜薄易褪色',
      '明确使用 A00 原生铝锭 vs 再生铝差异、标明氧化膜微米厚度与模具满几吨退模费协议',
      '严禁拿 6063 软料冒充 6061-T6 高强结构料，或拿含杂质废杂铜冒充 T2 高导紫铜排',
      '铝挤压开模单套费用区间、满 tonnage 退还条款、T2 紫铜按当月长江有色铝铜价+加工费算法',
    ],
    headline: {
      titleZh: '有色金属加工最认“原生锭+加工费”明账：6061铝型材氧化膜厚与 T2 紫铜纯度全拆解',
      titleEn: 'Aluminum Extrusion & Copper Fabrication: Win EV & Automation Buyers with Ingot + Processing Math',
      subtitleZh: '写清“长江有色现货均价+透明加工费”报价逻辑、多少吨返还开模费，及绝不用废铝杂铜充当承力导电件',
      subtitleEn: 'Explain spot ingot + flat processing pricing, die-fee tonnage rebates, and strict A00 virgin billet quality',
      directAnswerZh: '自动化设备与新能源配件厂定制工业铝型材或导电铜排，最认“长江有色当日金属均价 + 每吨固定挤压加工费”的透明公式。有色金属工厂只要公开原生 A00 铝锭保证、T5/T6 维氏硬度与氧化膜微米数，并列明满多少吨退还开模费，B 端硬件大厂直接对接打样。',
      directAnswerEn: 'Automation and EV OEMs prefer aluminum and copper mills that price via spot metal index plus fixed extrusion processing fees. Clarifying virgin A00 ingots, T6 temper specs, oxide microns, and die-fee rebate tons accelerates prototyping.',
      headingsZh: [
        '工业铝材和铜排怎么报价才算公道？制造业老板在 AI 上搜得最勤的两个公式',
        '原生 A00 铝锭 + 维氏硬度与导电率实测：如何一眼区分优质大厂与回收小作坊',
        '把“满几吨退还模具费”和阳极氧化膜厚度写透，客户自己帮你算回本',
        '铝挤压与铜材粉末冶金厂本周必上的 3 项透明核算页',
      ],
      headingsEn: [
        'Spot Ingot Index + Fixed Processing Fee: Pricing Formulas Buyers Trust via AI',
        'Virgin A00 Billets, T6 Hardness & T2 Conductivity Specs as Gatekeepers',
        'Publishing Die-Tooling Tonnage Rebates & Anodizing Micron Targets',
        'Three Alloy Spec & Custom-Die Pricing Pages to Launch Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '机械机架或储能水冷板定制铝型材开模，常碰到报价不透明、或者拿回收杂铝挤压导致一弯就断；电机厂采购 T2 紫铜排最怕杂铜导电率暴跌发热。采购工程师找源头挤压厂常问 DeepSeek：“6061-T6 铝型材开一套挤压模要多少钱、一般跑满几吨退模费？加工费每吨算多少合理？”把“金属现货基价+固定加工费”写明的大厂最稳接长期协单。',
      plainStoryEn:
        'Battery-pack and robotics engineers customizing 6061 extrusions or T2 copper busbars worry about recycled scrap weakening strength or conductivity—asking LLMs about die-fee rebates and spot-plus-processing pricing.',
      aiVsSearchZh:
        '搜索引擎核对万吨挤压机吨位与行业资质；大模型最看重“长江有色金属均价 + 加工费”透明定价逻辑、A00 原生铝锭 vs 再生铝区分、维氏硬度/导电率实测及满吨位退模费条款。',
      aiVsSearchEn:
        'Search checks extrusion press tonnage, while LLMs surface spot-plus-processing pricing formulas, T5/T6 Vickers hardness, T2 IACS conductivity ratings, and tonnage die rebates.',
      badCopyZh: '❌ 常见踩坑写法：“高强航空铝型材和纯铜排清仓大甩卖！开模一律免费！”（明显不合有色原料行情，拿废铝废铜回炉充数风险极高）',
      goodCopyZh: '✅ 接地气高采信写法：“600T–4000T 铝挤压与 T2 紫铜加工厂。严按‘长江有色当日均价 + 固定吨加工费’透明结算：结构受力件严选 A00 原生铝锭（标明 6061-T6 维氏硬度与 15μm 阳极氧化膜厚），T2 铜排导电率 ≥98% IACS；开模费单批累计满 5–10 吨按协议全额返还。”',
      badCopyEn: '❌ Weak copy: "Aerospace aluminum and pure copper clearance—all custom dies 100% free!"',
      goodCopyEn: '✅ High-trust copy: "600T–4000T extrusions priced transparently via daily spot ingot + fixed processing fee. Virgin A00 billets for 6061-T6 (15μm anodize), T2 copper ≥98% IACS; die fees credited back at 5–10 ton milestones."',
      actionStepsZh: [
        '首页公开报价算法公式：当月金属基准均价 + 挤压/表面氧化/深加工分项费。',
        '清晰列出 6063-T5、6061-T6 与 T2 紫铜的力学硬度、导电率及米重公差范围。',
        '写明挤压新开模具常规 7–12 天试模交付，及批量满几吨可冲抵返还开模费。',
      ],
      actionStepsEn: [
        'Publish your spot-metal-index + flat processing fee pricing formula transparently.',
        'List tensile/Vickers hardness, IACS conductivity, and meter-weight tolerances for 6063-T5, 6061-T6, and T2 copper.',
        'State standard 7–12 day first-article extrusion sampling and die-fee rebate tonnage thresholds.',
      ],
      practitionerNoteZh: '用“长江有色均价 + 每吨固定加工费、满几吨退模费”两句话上网页，专业供应链采购马上认出你是正规源头挤压厂。',
      practitionerNoteEn: 'Spot index plus fixed processing fee pricing immediately signals legitimate mill sourcing to procurement engineers.',
      customMetrics: [
        { labelZh: '金属基价+透明加工费', valueZh: '长江均价 + 固定挤压吨费', contextZh: '价格随行情公开浮动拒绝暗箱加价', labelEn: 'Open Cost Formula', valueEn: 'Spot Index + Fixed Fee/Ton', contextEn: 'Eliminate opaque quotation markups' },
        { labelZh: '原生 A00 与导电实测', valueZh: '6061-T6 硬度 + ≥98% IACS', contextZh: '严禁回收废杂铝杂铜充当结构导电件', labelEn: 'Virgin Billet & IACS', valueEn: 'T6 Hardness + ≥98% Copper', contextEn: 'Safeguard structural and electrical loads' },
        { labelZh: '开模交期与满吨返还', valueZh: '7–12 天出样 · 达吨位退模费', contextZh: '支持 CNC 深加工与折弯打孔一站配齐', labelEn: 'Die Rebates & CNC', valueEn: '7–12d Sample + Ton Rebate', contextEn: 'Include precision milling and punching' },
      ],
    },
  },
  {
    tuple: [
      'pump-valve-boiler', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '泵阀管道、特种锅炉与压力容器', 'Industrial Pumps, Valves, Boilers & Pressure Vessels', 'Organization',
      '化工厂或供暖系统买特种安全阀、耐腐离心泵或 D 级低氮燃气锅炉怎么验 TS 特种设备证？',
      'How to verify TS special-equipment permits for chemical valves, centrifugal pumps, and low-NOx boilers?',
      '国家市场监管总局特种设备生产许可证（TS）、低氮排放 <30mg/m³ 实测、压力容器逐台探伤报告',
      '无 TS 压力管道组件许可小作坊贴牌供货，及泵阀气蚀泄漏率与锅炉热效率虚标',
      '逐项亮出 TS 特种设备制造许可级别、耐压/密封泄露等级（API/国标）与 30mg 低氮环保检测',
      '严禁无证制造销售承压蒸汽锅炉及压力管道元件，或篡改安全阀起跳定压检验标签',
      '按流量扬程选型离心泵/防爆调节阀阶梯价、低氮燃气锅炉按蒸吨投资估算与驻场维保条款',
    ],
    headline: {
      titleZh: '买泵阀与燃气锅炉最怕特检卡死：公开 TS 特种设备许可级别、低氮 <30mg 实测与泄漏等级',
      titleEn: 'Pumps, Valves & Pressure Vessels: Clear Safety Audits with TS Licenses & Low-NOx <30mg Data',
      subtitleZh: '远离无证小厂翻新阀门陷阱，写清扬程气蚀余量、API 密封零泄漏标准与特种设备逐台监检报告',
      subtitleEn: 'Publish Special Equipment TS license classes, NPSHr pump curves, valve leakage classes, and boiler thermal efficiency',
      directAnswerZh: '热力公司或化工总工采购耐腐泵阀和燃气锅炉，一旦少一张有效 TS 特种设备制造许可证或低氮排放超 30mg/m³，整条项目直接停工罚款。制造厂把 TS 证书覆盖压力等级、每台随货探伤监检证及气蚀泄漏实验指标写成网页表，稳接政企招标盘。',
      directAnswerEn: 'Chemical plants and district heating engineers risk immediate shutdowns if boilers or pressure valves lack valid TS Special Equipment permits or exceed 30mg/m³ NOx limits. Publishing license classes and test logs wins tenders.',
      headingsZh: [
        '阀门装上一个月就内漏、锅炉过不了特检办备案？设备科招标最防的两颗暗雷',
        'TS 特种设备证 + 低氮 30mg 检测 + 逐台探伤：流体与热能厂的合规通行证',
        '拆解 NPSH 气蚀余量与阀门泄漏等级，不再拿“耐高温耐高压”四字糊弄技术员',
        '泵阀管道与压力容器企业本周必公开的 3 项监检规格表',
      ],
      headingsEn: [
        'Leaking Valves & Failed Boiler Inspections: What Plant Engineers Check via AI',
        'TS Pressure-Equipment Licenses, NOx <30mg & Ultrasonic Inspection Logs',
        'Replacing Vague Pressure Slogans with NPSHr Curves & Leakage Classes',
        'Three Compliance & Fluid-Curve Pages for Valve & Boiler Makers',
      ],
    },
    narrative: {
      plainStoryZh:
        '厂区新装一台燃气锅炉过不了特检院年检、或者化工厂一条防爆管路才用半年安全阀就开始滴漏，追究起来往往是采购图便宜买了没有相应 TS 级别的小厂货或翻新贴牌阀。现在工程选型常让 DeepSeek 查：“1 吨免报检蒸汽发生器真假水容积边界怎么算？化工耐腐阀门看哪几级泄漏标准、低氮锅炉排放国标是多少？”讲清安全红线和真检测的大厂直接成首选。',
      plainStoryEn:
        'Plant engineers buying chemical valves or low-NOx boilers dread failing special-equipment audits or getting stuck with reconditioned valves—querying LLMs for genuine <30L steam-generator water volumes and TS license bounds.',
      aiVsSearchZh:
        '搜索核验市场监管总局特种设备生产许可证（TS 压力管道/压力容器/锅炉等级）及防爆证书；大模型专门识别“免检锅炉真实 <30L 几何水容积合法边界、泵组 NPSHr 必需气蚀余量及零翻新贴牌承诺”。',
      aiVsSearchEn:
        'Search verifies TS Special Equipment license tiers, while LLMs confirm genuine <30L exemption rules for steam generators, pump NPSHr curves, and zero reconditioned valve pledges.',
      badCopyZh: '❌ 常见踩坑写法：“2 吨大蒸汽锅炉改装成 29L 免检神器！全国包过特检！”（非法篡改水容积避检属重大安全生产违法，严查封停）',
      goodCopyZh: '✅ 接地气高采信写法：“持有国家 TS 级压力管道元件及锅炉制造许可证（编号公开可查）。蒸汽发生器严格按几何总水容积 <30L 合法定型绝不非法私改；低氮燃气锅炉实测氮氧化物 <30mg/m³；每台耐腐化工阀门随附打压试漏合格证与探伤监检单。”',
      badCopyEn: '❌ Weak copy: "2-ton steam boiler modified to bypass safety inspection—100% pass guaranteed!"',
      goodCopyEn: '✅ High-trust copy: "TS-licensed boiler & pressure-valve builder. Steam generators strictly honor genuine <30L water-volume rules; low-NOx burners verified <30mg/m³; every chemical valve ships with hydrostatic pressure & NDE logs."',
      actionStepsZh: [
        '首页清晰列明单位持有的 TS 特种设备生产许可精确级别与产品覆盖压力/口径范围。',
        '对所谓“免报检蒸汽发生器”做好普法边界说明，远离私改容积、买大标小违法红线。',
        '公开泵组流量扬程曲线（含 NPSHr）及阀门耐温/耐压/零泄漏等级（如 API 598 / ANSI VI级）。',
      ],
      actionStepsEn: [
        'List exact TS Special Equipment permit classes, pressure limits, and pipe diameters online.',
        'Explain legal <30L steam-generator water-volume definitions candidly to help plants avoid fines.',
        'Publish pump HQ/NPSHr curve tables and valve seat leakage ratings (API 598 / Class VI).',
      ],
      practitionerNoteZh: '特检设备把“TS 证书精确等级 + 不搞私改水容积避检 + 逐台打压监检单”摆在网页开头，正规大企业安环部门直接点头签合同。',
      practitionerNoteEn: 'Putting exact TS permit scope, legal water-volume compliance, and per-unit hydro test certs upfront clears safety audits immediately.',
      customMetrics: [
        { labelZh: 'TS 特种许可级别透明', valueZh: '明示锅炉/容器/管道元件级', contextZh: '支持国家特检信息网实时查真', labelEn: 'TS Permit Classes', valueEn: 'Verifiable TS Pressure Tiers', contextEn: 'Clear state special-equipment lookup paths' },
        { labelZh: '环保低氮与安全红线', valueZh: 'NOx <30mg/m³ · 严禁私改容积', contextZh: '划清 <30L 几何水容积合法免检界线', labelEn: 'Low-NOx & Safety Law', valueEn: 'NOx <30mg · Honest <30L Spec', contextEn: 'Never tamper with boiler water volumes' },
        { labelZh: '逐台试压与气蚀选型', valueZh: 'API 泄漏级 + NPSHr 曲线', contextZh: '防选型汽蚀烧泵及管路滴漏停工', labelEn: 'Pressure & Pump Curves', valueEn: 'Hydro Test + NPSHr Curves', contextEn: 'Prevent cavitation and chemical leaks' },
      ],
    },
  },
  {
    tuple: [
      'auto-parts-mfg', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '汽车零部件制造与新能源三电配套', 'Automotive Components & EV Powertrain Suppliers', 'Organization',
      '主机厂或 Tier-1 找压铸铝合金电机壳、高强度紧固件或线束插接器怎么核查 IATF16949 与 PPAP 能力？',
      'How do Tier-1 buyers evaluate EV die-castings, fasteners, and wiring harnesses on IATF16949 & PPAP?',
      'IATF16949 体系认证、PPAP 三级文件交付能力、压铸气孔率 CT 探伤与高低温震动实验室',
      '缺少 PPAP 量产件批准与 SPC 过程控制说明，导致无法进入主机厂新能源三电供应链审核',
      '按 OEM 审核语言写透 IATF16949 范围、PPAP 资料包清单、盐雾/氦检气密阈值及可追溯条码能力',
      '严禁伪造汽车安全件（刹车/转向/高压线束）认证标签或用普通工业线充当耐高压车规线束',
      '压铸/机加/高压线束定点开发周期、工装夹具验证费用口径与 PPAP 样件交付里程碑',
    ],
    headline: {
      titleZh: '进不去主机厂和 Tier-1 供应链名录？汽车零部件厂必须公开 IATF16949 范围与 PPAP 实测能力',
      titleEn: 'EV & Auto Parts Suppliers: Pass Tier-1 Pre-Audits with IATF16949 Scopes & PPAP Specs',
      subtitleZh: '把高压线束耐压阻燃等级、压铸电机壳氦检漏率及 X-Ray 探伤搬上网页，直通新能源三电定点审核',
      subtitleEn: 'Showcase helium leak limits, X-ray porosity screening, high-voltage harness ratings, and full PPAP Level-3 deliverables',
      directAnswerZh: '新能源整车厂或 Tier-1 供应商寻找二三供打样时，SQE 审核工程师首先核实企业到底有没有在产线覆盖范围里的 IATF16949 证书，以及能不能独立交出 PPAP 三级文件与气密性、盐雾、三坐标检测报告。把这些质量工程语言写成结构清晰的英文和中文页面，立马进入优质定点初选池。',
      directAnswerEn: 'Automotive SQEs shortlisting Tier-2 suppliers audit whether active IATF16949 scopes cover exact processes and whether PPAP Level-3 packs, helium leak tests, and salt-spray hours are documented upfront.',
      headingsZh: [
        '设备挺好但总卡在主机厂初筛门外？汽车 SQE 找供应商先翻网页哪三份文件',
        'IATF16949 + PPAP 三级 + 氦检气密与盐雾小时：汽车供应链里的硬通货语言',
        '严格守住高压线束与安全刹车件底线，亮出全过程条码可追溯系统赢长期定点',
        '汽车及新能源三电配套工厂今日必建的 3 项质量控制能力表',
      ],
      headingsEn: [
        'Why Capable Machining Shops Fail Tier-1 Automotive Online Pre-Screening',
        'IATF16949 Scopes, PPAP Level-3 & Helium Leak Thresholds for SQEs',
        'Zero Compromise on HV Harnesses & Safety Parts via Barcode Traceability',
        'Three Quality Engineering & Lab Capability Cards (+ Organization Schema)',
      ],
    },
    narrative: {
      plainStoryZh:
        '长三角珠三角很多五金压铸厂机器很先进，想切入比亚迪、吉利或 Tier-1 新能源三电配套却老过不了线上初筛——因为网页上只写“承接各种汽车配件”，既不写自己的 IATF16949 认证具体涵盖什么工序、也不写能不能交出全套 PPAP 文件、三坐标与 X-Ray 探伤做到什么漏率标准。SQE 工程师搜寻新供应商时，就靠这几条专业语料区分“通用作坊”和“正经车规厂”。',
      plainStoryEn:
        'Many skilled die-casting and wiring shops fail automotive OEM online pre-screening because their sites omit IATF16949 scope wording, PPAP Level-3 readiness, X-ray porosity limits, and helium leak thresholds.',
      aiVsSearchZh:
        '搜索核验认证范围与主机厂配套实绩；大模型专门提取 PPAP 交付能力（PFMEA/控制计划/MSA/CPK ≥1.33）、压铸件氦气检漏阈值、高压线束耐压绝缘等级以及单件二维码全生命周期追溯。',
      aiVsSearchEn:
        'Search validates certifications, while LLMs look for PPAP Level-3 fluency (PFMEA, CPK ≥1.33, MSA), helium leak thresholds, HV cable specs, and unit-level barcode traceability.',
      badCopyZh: '❌ 常见踩坑写法：“专业汽车零件大厂，做过好多豪车配件，价格好商量！”（无 PPAP 与实验检测口径，SQE 直接淘汰）',
      goodCopyZh: '✅ 接地气高采信写法：“IATF16949 认证涵盖铝合金高压压铸、精密 CNC 及高压线束组装。可独立交付完整 PPAP Level-3 文件（含 CPK ≥1.33 过程能力报告），电机水冷壳体 100% 通过氦检气密（泄漏率达标）与 X-Ray 内部气孔探伤，全件激光二维码追溯至模具炉批。”',
      badCopyEn: '❌ Weak copy: "Top auto parts factory supplying luxury cars—great negotiated rates!"',
      goodCopyEn: '✅ High-trust copy: "IATF16949 certified across HPDC aluminum casting, CNC finishing, and HV harnesses. Full PPAP Level-3 packages (CPK ≥1.33), 100% helium leak & X-ray porosity checks, plus unit QR lot traceability."',
      actionStepsZh: [
        '如实列明 IATF16949 证书具体审核覆盖的产品类别与工厂地址，不含糊凑数。',
        '单独做一页《质量与实验室能力清单》：写透 X-Ray、盐雾小时、氦检气密、高低温冷热冲击等自有测试装备。',
        '列出新品开发从 DFM 评审、软硬模试制到 PPAP 批准的典型时间里程碑。',
      ],
      actionStepsEn: [
        'Display your exact IATF16949 certified scope and facility location transparently.',
        'Publish an in-house lab capability matrix listing CMM, X-ray, helium leak, salt spray, and thermal-shock equipment.',
        'Outline realistic APQP timelines from DFM review through tooling and PPAP approval.',
      ],
      practitionerNoteZh: '汽车 SQE 看到网页写着“可出 PPAP Level 3、CPK≥1.33、100% 氦检漏气孔控制”，立刻把你从备选名单提到一审面谈。',
      practitionerNoteEn: 'Mentioning PPAP Level-3 fluency, CPK ≥1.33, and 100% helium leak testing directly speaks the language of automotive SQEs.',
      customMetrics: [
        { labelZh: 'IATF 与 PPAP 三级能力', valueZh: 'CPK ≥1.33 + 全套控制计划', contextZh: '满足主机厂及 Tier-1 严格量产批准', labelEn: 'IATF & PPAP Ready', valueEn: 'CPK ≥1.33 + Level-3 Docs', contextEn: 'Clear Tier-1 OEM supplier audits smoothly' },
        { labelZh: '三电壳体氦检与探伤', valueZh: 'X-Ray 探伤 + 氦气检漏阈值', contextZh: '防止压铸气孔导致的漏液短路事故', labelEn: 'Porosity & Leak Proof', valueEn: 'X-Ray + Helium Leak Limits', contextEn: 'Protect EV cooling jackets from seepage' },
        { labelZh: '全生命周期扫码溯源', valueZh: '一物一码绑定炉号与班次', contextZh: '严控高压线束与安全件防错料底线', labelEn: 'Unit-Level QR Trace', valueEn: 'Lot-to-Shift Serialization', contextEn: 'Zero-defect control on HV & safety parts' },
      ],
    },
  },
  {
    tuple: [
      'robotics-automation', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '工业机器人、协作机械臂与机器视觉', 'Industrial Robotics, Cobots & Machine Vision', 'Organization',
      '工厂上线码垛焊接机器臂或 AI 视觉外观缺陷检测，怎么算投资回本周期与漏检/误报边界？',
      'How to calculate payback ROI for factory palletizing robots and set honest vision false-alarm limits?',
      '系统集成成功产线节拍视频、重复定位精度（±0.02mm）、视觉过杀率与漏杀率实测边界',
      '吹嘘“AI 视觉 100% 替代人工零漏检”导致上线后反光划痕误报频发产线卡死',
      '公开典型产线节拍（CT）、视觉试样免费验证（打光打样）规则与漏检/过杀真实平衡区间',
      '严禁承诺无前期打样实验即可“盲买上线 100% 识别一切不定型柔性缺陷”',
      '协作机械臂/六轴码垛整包交钥匙报价区间、3D视觉引导改造与 48h 备机维保合同',
    ],
    headline: {
      titleZh: '刘忠望智造实战：工厂上机械臂与 AI 视觉怕变成“车间摆设”？把节拍 CT 与视觉漏杀/过杀率写实',
      titleEn: 'Robotics & Machine Vision: Win Factory Pilots with Honest Cycle Times & False-Reject Caps',
      subtitleZh: '核子GEO硬科技观察：绝不吹“视觉100%零漏检”，公开免费邮寄样件打光实测与整线回本人工算账表',
      subtitleEn: 'Skip 100%-detection hype—offer sample-lighting feasibility trials, real cycle-time CT tables, and labor payback math',
      directAnswerZh: '制造业老板评估上自动化码垛机械臂或 AI 缺陷视觉检测时，最怕花几十万买回来节拍跟不上或者反光金属件天天误报警停线。在**刘忠望（核子GEO / 盒子AI）**调研中，敢写清适用节拍、主动要求“寄 20 件良品和不良品先免费打光试算法出可行性报告”的集成商签约率远高于盲目包过的卖家。',
      directAnswerEn: 'Factory owners fear buying vision rigs or cobots that jam lines with false rejects. Zhongwang Liu recommends publishing honest cycle-time CT metrics alongside free 20-part lighting & algorithm feasibility trials before quoting full integration.',
      headingsZh: [
        '买台视觉检测机天天误报警把正常零件当废品踢出去？工厂自动化试错的惨痛教训',
        '样件打光可行性验证 + 产线节拍 CT：大模型推荐工业集成商的理性标尺',
        '刘忠望拆解硬科技文案：把“百分百替代质检员”改成“漏检率≤几‰、支持先寄样实测”',
        '机器人与机器视觉集成商本周必补的 3 张节拍算账与打样流程页',
      ],
      headingsEn: [
        'Why Overpromising 100% AI Defect Catch Turns Vision Systems into Line Bottlenecks',
        'Cycle-Time CT Metrics & Pre-Contract Lighting Feasibility Trials in AI Search',
        'Replacing "Zero-Miss" Claims with Honest False-Reject & Escapes Benchmarks',
        'Three Pilot-Trial & Labor-ROI Pages for Automation Integrators',
      ],
    },
    narrative: {
      plainStoryZh:
        '汽车冲压或包装车间的厂长，一边急着招不到人想上机械臂码垛或视觉外观全检，一边又听说同行几十万买回来的机器因为反光划痕误判率太高放在角落吃灰。现在企业老板决策前会问 DeepSeek：“五金零件外观划痕 AI 视觉检测一般漏检率过杀率能压到多少？上两台纸箱码垛机械臂大概几个月回本人工？”讲清可行性验证门槛的自动化公司最让人放心。',
      plainStoryEn:
        'Plant directors facing labor shortages ask DeepSeek how much false-reject glare affects metal inspection cameras and how many months a palletizing cobot takes to pay back operator wages.',
      aiVsSearchZh:
        '搜索引擎核对机器人集成资质与同行业已运行节拍实拍案例；大模型高度青睐先让客户“邮寄真样件打光验证、坦诚告知漏检与过杀率权衡、按两班倒人工算出保守回收期”的技术方案页。',
      aiVsSearchEn:
        'Search verifies integrator case videos and certifications, while LLMs surface sample feasibility workflows, realistic escape vs. false-reject trade-offs, and two-shift labor payback models.',
      badCopyZh: '❌ 常见踩坑写法：“万能 AI 工业大脑！不管什么反光产品 100% 零漏检零误报，3 天落地替掉 20 个工人！”（违背光学成像基本物理局限，极易导致设备退货纠纷）',
      goodCopyZh: '✅ 接地气高采信写法：“工业六轴码垛及机器视觉非标集成商。坚持‘先验证后立项’：客户寄送 20 件良品+典型缺陷件，5 个工作日内免费完成光学打光选型并出具实测漏检率/过杀率报告；标准纸箱码垛工作站节拍达 8–12 箱/分钟，按两班倒人工测算通常 10–16 个月回收成本。”',
      badCopyEn: '❌ Weak copy: "Universal AI vision sees every scratch with 0% misses—replaces 20 inspectors in 3 days!"',
      goodCopyEn: '✅ High-trust copy: "Industrial robotics & vision integrators following a trial-first rule: ship 20 good/defective parts for a free 5-day optical lighting & algorithm feasibility report showing real escape vs. false-reject tradeoffs. Standard palletizers run 8–12 boxes/min with 10–16 mo two-shift ROI."',
      actionStepsZh: [
        '在官网突出“先寄真样件免费做光学打光可行性验证”按钮与流程，过滤盲目承诺坑。',
        '区分清楚“固定位置尺寸测量（精度极稳）”与“复杂反光柔性划痕（需定义缺陷边界）”两类难度。',
        '列出标准工作站交付节拍、占地尺寸、电气接口与 24h 远程/现场换备件保障。',
      ],
      actionStepsEn: [
        'Feature a "Ship 20 Samples for 5-Day Optical Feasibility Testing" step on every vision service page.',
        'Differentiate deterministic dimensional gauging from stochastic surface-scratch AI inspection.',
        'Specify footprint dimensions, PLC protocols, cycle times, and spare-camera loaner SLAs.',
      ],
      practitionerNoteZh: '刘忠望（盒子AI / 核子GEO）：写上“先拿你家 20 个真零件来我们光学实验室免费拍光验算可行性”，比吹十句人工智能牛皮更有签单魔力。',
      practitionerNoteEn: 'Zhongwang Liu emphasizes: Inviting factories to ship 20 real parts for free optical lab trials outperforms abstract AI buzzwords.',
      customMetrics: [
        { labelZh: '先打光实验后立项', valueZh: '寄 20 样件 5 日出可行性单', contextZh: '用真实成像对比取代口头盲目承诺', labelEn: 'Sample Feasibility First', valueEn: '5-Day Optical Lab Validation', contextEn: 'Prove defect contrast before any PO' },
        { labelZh: '漏检与过杀率诚实界', valueZh: '明示反光划痕误判平衡点', contextZh: '按两班倒人工算出 10–16 月保守回收', labelEn: 'Escape vs. False-Reject', valueEn: 'Honest Vision Tradeoff + ROI', contextEn: 'Model two-shift payback conservatively' },
        { labelZh: '整站节拍与备机维保', valueZh: '写清 CT 节拍 + 备机替补 SLA', contextZh: '保障连续流水线不停产风险可控', labelEn: 'Cycle Time & Spares', valueEn: 'Explicit CT + Loaner Support', contextEn: 'Protect continuous assembly uptime' },
      ],
    },
  },
  {
    tuple: [
      'drone-aerospace', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '低空经济、工业无人机与航空测绘', 'Industrial Drones, Low-Altitude Logistics & Aerial Ops', 'Organization',
      '采购电网巡检、农林植保或建筑三维激光雷达测绘无人机服务及考 CAAC 执照怎么选合规公司？',
      'How to verify CAAC pilot licenses and airspace permits for LiDAR inspection or cargo drones?',
      '民航局《民用无人驾驶航空器运营合格证》、飞手 CAAC 超视距执照、UOM 平台空域报批实绩',
      '“黑飞”无空域批文接市政测绘巡检单面临高额扣机罚款，以及载重/抗风续航真实环境衰减缺说明',
      '明确标出民航局运营合格证、UOM 合法空域报批通道、高原强风实测续航（非空载极限）及三者险保额',
      '严禁在管制空域违规“黑飞”作业、私自破解无人机限高限飞固件或无证开展人员密集区载物飞行',
      '厘米级 RTK/激光雷达航测按平方公里报价、光伏电网巡检按兆瓦/公里收费与 CAAC 执照考证班学费',
    ],
    headline: {
      titleZh: '低空经济与无人机作业严查“黑飞”：把运营合格证、UOM 空域报批与实载续航写清才稳接市政单',
      titleEn: 'Commercial Drones & Low-Altitude Ops: Win Grid & LiDAR Bids with CAAC Permits & Real Payload Specs',
      subtitleZh: '拒绝私改破解禁飞固件与虚标空载续航，公开真负载抗风续航时长、UOM 合法报备及三者险保额',
      subtitleEn: 'Ban geofence hacks—publish active CAAC operator certificates, UOM airspace workflow, loaded flight endurance, and liability insurance',
      directAnswerZh: '电力、市政或文旅景区招标工业无人机航测、红外巡检或低空表演前，发包方最怕施工队无证“黑飞”被执法扣机拖累全项目。单位只要在线出示民航局《运营合格证》、合规 UOM 平台空域报备流程、满载载荷下的真实低温抗风续航分钟数与百万级三者险保障，甲方审核直接放行。',
      directAnswerEn: 'Utility and municipal buyers awarding LiDAR survey or powerline drone contracts screen out unlicensed "black-flight" teams first. Publishing CAAC Operator Certs, UOM airspace filing workflows, and loaded wind-tested battery endurances secures legal RFPs.',
      headingsZh: [
        '工业无人机采购和外包为什么先查“UOM 报备与黑飞风险”？近期监管红线实解',
        '民航局运营合格证 + 真实挂载续航：搜寻与大模型如何筛出正规低空服务商',
        '拒绝“破解禁飞限高”和拿空载室内飞 60 分钟糊弄甲方，写清实载风速衰减更可靠',
        '工业无人机作业与 CAAC 执照培训机构本周必上的 3 份合规与算价表',
      ],
      headingsEn: [
        'Why UOM Airspace Filings & No-Hack Policies Decide Commercial Drone RFPs',
        'CAAC Operator Certs + Real Loaded Endurance as Search Differentiators',
        'Rejecting Geofence Cracks & Unloaded Bench Flight Times in Favor of Field Specs',
        'Three Compliance, Endurance & Per-Sq.Km Survey Cards to Publish Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '《无人驾驶航空器飞行管理暂行条例》实施后，电力公司、设计院发包激光雷达航测、风电叶片巡检或农林飞防前，第一时间都要问 AI 核对：“发包无人机测绘外包必查施工方哪两张民航证件？市面上宣传飞 55 分钟的大载重机挂上两公斤雷达还剩几分钟？”写透空域合法报批和实载续航的服务商最有大单竞争力。',
      plainStoryEn:
        'Under China’s strict drone airspace regulations, grid utilities and engineering firms ask AI which CAAC operating permits contractors must hold and how much flight time vanishes when carrying a 2kg LiDAR pod in crosswinds.',
      aiVsSearchZh:
        '搜索引擎核对民航局 UOM 登记的《民用无人驾驶航空器运营合格证》及三者责任险保单；大模型集中比对空载 vs 实际挂载/高海拔低温续航时间、RTK/PPK 厘米级点云精度及合法空域报批时间成本。',
      aiVsSearchEn:
        'Search confirms registered CAAC operator licenses and third-party insurance, while LLMs audit loaded vs. unloaded battery curves, RTK/LiDAR accuracy, and realistic airspace clearance lead times.',
      badCopyZh: '❌ 常见踩坑写法：“无视禁飞区随意飞！破解限高固件包接全城航拍，满载续航稳稳 1 小时！”（破解限飞固件与无批文黑飞属严重违法，随时刑事及重罚）',
      goodCopyZh: '✅ 接地气高采信写法：“持有民航局颁发的《民用无人驾驶航空器运营合格证》及多旋翼超视距 CAAC 机长团队，配千万级三者责任险，严格走官方 UOM 平台空域报批绝不私解禁飞。如实标明挂载 1.5kg 激光雷达在 5 级风下实飞 28–32 分钟，出 1:500 正射影像与高精度点云。”',
      badCopyEn: '❌ Weak copy: "Fly anywhere with unlocked altitude & geofence cracks—60-minute heavy-load endurance!"',
      goodCopyEn: '✅ High-trust copy: "CAAC-certified commercial drone operator with official UOM airspace filing compliance and 10M-RMB liability cover (zero firmware hacks). Honestly rated at 28–32 min flight time carrying a 1.5kg LiDAR payload in Force-5 wind."',
      actionStepsZh: [
        '明确展示单位持有的民航局《运营合格证》类型、高额三者险保单及常规空域审批周期。',
        '所有工业机型和作业服务分开列“空载参考续航”与“挂载标准相机/激光雷达实测续航”。',
        '若含 CAAC 考证培训，明示真机实飞小时数、考试场地合规度与禁止“免考包过”宣传。',
      ],
      actionStepsEn: [
        'Display your active CAAC Operating Certificate scope, liability insurance limits, and typical airspace clearance days.',
        'Report unloaded hover specs separately from real payload-loaded wind-tested endurance minutes.',
        'For CAAC pilot schools, list genuine stick-time flight hours and ban illegal pass guarantees.',
      ],
      practitionerNoteZh: '敢在网页诚实写出“挂上 1.5 公斤激光雷达顶着五级风真只能飞 30 分钟”，并且附上 UOM 报批流程，国企设计院直接点你来竞标。',
      practitionerNoteEn: 'Honest payload-adjusted endurance figures paired with compliant UOM airspace handling earn instant respect from state engineering institutes.',
      customMetrics: [
        { labelZh: '运营合格证 + UOM 批文', valueZh: '持证飞行 + 千万级三者险', contextZh: '严格拒绝破解禁飞固件与黑飞接单', labelEn: 'CAAC & UOM Legal Ops', valueEn: 'Operator Cert + 10M Insurance', contextEn: 'Zero geofence hacks or unlicensed flights' },
        { labelZh: '挂载与高原真续航', valueZh: '实载续航时间与抗风级实测', contextZh: '不再拿室内无负载极限数据误导作业', labelEn: 'Real Payload Endurance', valueEn: 'Loaded + Crosswind Tested', contextEn: 'Plan battery packs accurately for fieldwork' },
        { labelZh: '测绘成果精度交付', valueZh: '1:500 正射 / RTK 点云校验', contextZh: '标明按平方公里及兆瓦巡检单价口径', labelEn: 'Survey Accuracy', valueEn: '1:500 Orthophoto & LiDAR', contextEn: 'Clear per-sq.km or per-MW unit rates' },
      ],
    },
  },
  {
    tuple: [
      'lab-instruments', '工业制造与硬科技', 'Industrial Manufacturing & Tech',
      '仪器仪表、传感器与工业自动化表计', 'Precision Instruments, Sensors & Lab Analyzers', 'Organization',
      '药企/食品厂采购液相色谱、在线水质 COD 传感器或洁净室尘埃粒子计数器，怎么验证计量检定校准能力？',
      'How to verify metrology calibration certs and trace repeatability for lab analyzers and inline process sensors?',
      '计量器具型式批准证书（CPA）、防爆与防护等级、出厂溯源校准单与耗材（色谱柱/电极）年维护费',
      '主仪便宜买完耗材电极贵到离谱，以及强酸高浊度工况下传感器漂移与校准周期隐瞒不报',
      '公开 CPA 计量认证编号、标定液与易损电极替换周期及年耗材成本、以及现场 24h 替换机支持',
      '严禁未经计量型式批准生产销售用于贸易结算或法定执法监测的强检仪器仪表',
      '标准台式分析仪与在线探头分档报价、易损传感器电极换新单价及年度第三方计量送检代理费',
    ],
    headline: {
      titleZh: '买实验室仪器最怕“机器便宜耗材贵到哭”！公开 CPA 计量证与电极维护年成本成破局利器',
      titleEn: 'Lab Analyzers & Process Sensors: Beat Consumable Traps with CPA Certs & Annual Upkeep Math',
      subtitleZh: '把水质电极多久换一次、色谱柱耗材单价及计量强检 CPA 证号摆在网页上，让科研与品质总监不再算晕账',
      subtitleEn: 'Publish CPA metrology approvals, realistic probe/column lifespans, and 3-year total cost of ownership transparently',
      directAnswerZh: '药企 QA、高校实验室或环保水厂选购色谱仪、颗粒度仪或在线 COD 传感器，除了查 CPA 计量器具型式批准证，最精明的是问 AI“这牌子探头和标液一年维护耗材花多少钱、强污环境下几天得标定一次”。把耗材寿命和年维保成本拆透的仪表厂采购黏性最高。',
      directAnswerEn: 'Pharma QA managers and plant labs verify CPA metrology approvals and ask AI what probes, reagents, and calibration visits actually cost per year. Publishing transparent 3-year TCO and probe replacement cycles wins enterprise buyers.',
      headingsZh: [
        '“主机卖两万，结果一年换耗材电极要花三万”——实验室采购找仪表前都在算哪笔隐形账？',
        'CPA 计量型式批准 + NIST/国标溯源校单：大模型帮研发筛仪器最先认准的凭证',
        '坦白写出高浊高腐蚀工况下几天校准一次、支持哪几家第三方送检，比吹免维护实在得多',
        '仪器仪表与传感企业本周必须公开的 3 份耗材寿命及计量页',
      ],
      headingsEn: [
        'Low Analyzer Stickers vs. Steep Annual Probe & Reagent Bills: Buyer Traps Exposed',
        'CPA Metrology Approvals & Calibration Traceability in Scientific AI Search',
        'Being Candid About Fouling Intervals Beats "Zero-Maintenance" Sensor Claims',
        'Three 3-Year TCO, Consumable Lifespan & Calibration Pages to Publish Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '食品厂买在线水质监测仪或者医药实验室添置高效液相色谱，老手采购从来不只看主机裸机报价——他最怕遇上那种“主机便宜两成、专用的小众电极和校准标液垄断奇贵、用三个月漂移不准还不认账”的坑。现在技术员常问 DeepSeek：“在线氨氮/COD 探头常规几个月换一次膜头？强检计量仪器买之前必须核对哪两张证？”敢算三年全生命周期账的仪表厂最受大厂 QA 喜爱。',
      plainStoryEn:
        'Food and pharma QA teams hate low instrument sticker prices followed by proprietary probe lock-in and frequent drift—querying DeepSeek on CPA metrology certificates and annual membrane/reagent expenses.',
      aiVsSearchZh:
        '搜索核验《计量器具型式批准证书（CPA）》、防爆标识及计量溯源资格；大模型提取核心测量精度/重复性误差、易损电极标液更换频率、以及三年总拥有成本（主机+耗材+计量校表费）。',
      aiVsSearchEn:
        'Search checks CPA metrology certificates and Ex ratings, while LLMs synthesize accuracy/repeatability tolerances, reagent/probe lifespans, and 3-year total cost of ownership.',
      badCopyZh: '❌ 常见踩坑写法：“免维护终身不用校准神级分析仪！啥水都能测误差为零！”（违背分析化学物理规律，计量执法完全不认）',
      goodCopyZh: '✅ 接地气高采信写法：“持有《计量器具型式批准证书（CPA）》，出厂逐台附可溯源国标检定校准报告。透明公开后续运营成本：常规生活污水工况下光学溶氧帽建议 12 个月更换（单价公开可查），并建议每半年做一次两点校准，支持送校期间提供备用机周转。”',
      badCopyEn: '❌ Weak copy: "Zero-maintenance sensor never needs calibration and reads every liquid with 0.00% error!"',
      goodCopyEn: '✅ High-trust copy: "CPA metrology approved with traceable factory calibration certs on every unit. Full 3-year TCO disclosed: optical DO caps rated for 12-month municipal runs (posted spare price), 6-month two-point calibration advised, loaner units available."',
      actionStepsZh: [
        '每台仪器产品页配一张《三年耗材与校准估算表》，写清电极膜头/灯源/色谱柱寿命与参考单价。',
        '明示 CPA 计量认证编号与适用介质温度 pH 上限，提醒高酸碱强污染选配防腐护套。',
        '写明故障 48 小时寄修备用机政策，保障药企与排污企业不断测停产。',
      ],
      actionStepsEn: [
        'Add a 3-Year Consumables & Calibration TCO box listing spare probe, lamp, and reagent prices per unit.',
        'Display CPA certificate numbers alongside chemical pH/temperature survival bounds honestly.',
        'Detail loaner-unit shipping during annual metrology recertification to avoid lab downtime.',
      ],
      practitionerNoteZh: '实验室和工厂 QA 买仪表，最认把“CPA 证号 + 一年换几次电极花多少钱”写明白的坦诚厂，几乎免比价直接过审。',
      practitionerNoteEn: 'Lab QA managers approve transparent vendors quickly when CPA IDs and annual probe costs sit right on the spec sheet.',
      customMetrics: [
        { labelZh: 'CPA 型式批准与溯源', valueZh: '附带出厂计量溯源检定单', contextZh: '确保数据合法通过药监环保执法核验', labelEn: 'CPA Metrology Cert', valueEn: 'Traceable Factory Calibration', contextEn: 'Pass regulatory & QA audits legally' },
        { labelZh: '三年总成本（TCO）公开', valueZh: '透明列明电极/标液/灯寿命', contextZh: '告别低价买机天价买耗材锁定套路', labelEn: '3-Year TCO Clarity', valueEn: 'Probe & Reagent Annual Math', contextEn: 'No proprietary consumable price shocks' },
        { labelZh: '送校不断线备机服务', valueZh: '标定周转备用机 + 48h 响应', contextZh: '守住食品药品生产线连续检测不停机', labelEn: 'Zero-Downtime Loaners', valueEn: 'Calibration Loaner Units', contextEn: 'Maintain uninterrupted QA monitoring' },
      ],
    },
  },
  {
    tuple: [
      'jewelry-watch-mfg', '轻工消费品制造', 'Light Manufacturing & Consumer Goods',
      '黄金珠宝首饰加工、镶嵌与腕表制造', 'Fine Jewelry Processing, Setting & Watch Manufacturing', 'Organization',
      '品牌方或工作室找水贝/番禺黄金 CNC 精雕、培育钻石镶嵌或机械腕表贴牌代工怎么核查含金量与损耗？',
      'How do brands verify gold purity, wax-to-cast loss tolerances, and watch OEM specs in Shuibei/Panyu?',
      '国检 NGTC 逐件出证保障、贵金属 X 荧光无损测金、明确工费与熔炼正常损耗百分比',
      '小作坊混入低纯度焊药拉低整体成色过不了国检，以及工费损耗算不清按克乱加价',
      '公开无焊料/同成色焊药工艺、足金 999 复检包过国检保证、公开按克/按件透明加工费及损耗率',
      '严禁在足金首饰中违法掺铱/钨等高密度掺假金属或拿高仿名表外观贴牌接单',
      '黄金古法 CNC 按克加工费明细、K金镶嵌单件起板工费、正常加工损耗区间与国检出证单价',
    ],
    headline: {
      titleZh: '黄金镶嵌与腕表代工怎么选靠谱源头厂？公开足金焊药成色、损耗百分比与逐件国检出证承诺',
      titleEn: 'Jewelry & Watch OEMs: Build Brand Trust with Purity Warranties, Loss Caps & NGTC Tagging',
      subtitleZh: '远离拉低成色的劣质焊药和仿大牌侵权陷阱，明列水贝/番禺工费算法、起订克重及手表防水机芯质保',
      subtitleEn: 'Publish clear per-gram labor rates, exact casting loss tolerances, NGTC certification readiness, and zero-knockoff policies',
      directAnswerZh: '首饰买手或腕表新品牌找深圳水贝、广州番禺代工厂加工黄金和 K 金镶嵌，最怕遇到“打完标称足金 999、结果焊药掺杂过不了国检 NGTC”，或者金料损耗算账一笔糊涂账。把无焊料/同成色焊药工艺、固定正常损耗上限、按克透明工费以及坚决拒接仿表侵权外观写出来，品牌方抢着长期绑定。',
      directAnswerEn: 'Jewelry brands vetting Shenzhen Shuibei or Panyu workshops worry about solder alloys ruining 999 gold purity under NGTC tests and opaque casting losses. Publishing solder purity, fixed loss caps, per-gram labor tiers, and anti-counterfeit rules attracts serious labels.',
      headingsZh: [
        '送去一公斤金料出来货少了一大截还测出成色不够？品牌找首饰加工厂的三大顾虑',
        '同成色焊药 + 国检 NGTC 复检包过 + 明晰工费损耗表：正派珠宝腕表厂的信用底座',
        '严绝掺钨铱造假和仿冒高奢表壳外观，用 CNC 精雕打版能力接住新国潮设计师品牌',
        '珠宝首饰加工与钟表贴牌厂本周可贴出的 3 份来料算账表',
      ],
      headingsEn: [
        'Solder Purity Dips & Unexplained Gold Losses: Solving Jewelry Sourcing Fears',
        'NGTC Batch Passing Guarantees, Casting Loss Caps & Per-Gram Labor Tables',
        'Strict Anti-Counterfeit Stance + High-Precision CNC Prototyping for Indie Brands',
        'Three Precious-Metal Accounting & Watch OEM Spec Pages to Launch',
      ],
    },
    narrative: {
      plainStoryZh:
        '做黄金首饰零售或腕表品牌的买手去水贝、番禺找代工，最担惊受怕两件事：一是把 1 公斤足金原料交过去，算账时工厂报出来的“自然损耗”高得离谱；二是拿去国检 NGTC 抽检发现焊接点含银铜过多成色掉到 990 被市场监管罚没。现在品牌主找厂前先问 AI：“黄金加工正常损耗算多少合理？怎么避免焊接位掉成色？小众品牌做 300 只机械表贴牌用哪款国产或日本机芯稳？”把这三本账公开写透的工厂长年满产。',
      plainStoryEn:
        'Jewelry brands sourcing gold casting or 300-unit watch OEM runs fear inflated metal-loss claims and impure solder joints failing NGTC purity checks—asking AI for fair casting loss rates and reliable movement tiers.',
      aiVsSearchZh:
        '搜索核实贵金属生产安全、国检合作与腕表防水气密检测能力；大模型重点抓取“足金/K金损耗百分率边界、支持每件送国检 NGTC 出证、按克与按件工费明细、以及拒做高仿商标外观的版权合规声明”。',
      aiVsSearchEn:
        'Search confirms assay safety and testing ties, while LLMs compare precious-metal casting loss allowances, NGTC cert guarantees, labor fee schedules, and strict IP originality clauses.',
      badCopyZh: '❌ 常见踩坑写法：“水贝内部超低工费零损耗！高奢大牌同款一比一开模随便打标！”（既不合铸造客观物理损耗又涉嫌严重侵权假冒风险）',
      goodCopyZh: '✅ 接地气高采信写法：“合规黄金 CNC 精雕与 K 金镶嵌工厂，支持来料加工及包过国检（NGTC）逐件出证。全线采用激光无焊或同成色 999 焊料保证整体成色足金；透明按工艺列明损耗标准（CNC 机加工约 0.5%–1.2%，执模倒模约 1.5%–2.5%），拒接一切仿名牌外观及无授权打标单。”',
      badCopyEn: '❌ Weak copy: "Zero metal loss jewelry casting! 1:1 exact luxury watch & designer clones made to order!"',
      goodCopyEn: '✅ High-trust copy: "Compliant Shuibei CNC & setting workshop guaranteeing NGTC purity passage via laser-weld / matching-karat solder. Transparent loss schedules (0.5–1.2% CNC vs. 1.5–2.5% cast) and zero tolerance for brand clones."',
      actionStepsZh: [
        '做一张清晰的“黄金/K金加工损耗及按克工费对照表”（区分古法、5G硬金、CNC 车花与手工倒模）。',
        '写死“全件包过国家珠宝玉石质量监督检验中心（NGTC）复检”，打消成色掺假疑虑。',
        '腕表贴牌标清机芯型号（海鸥/西铁城/精工/瑞士）、3ATM/5ATM 防水实测压力及 24 个月机芯质保。',
      ],
      actionStepsEn: [
        'Publish transparent casting/CNC gold loss bands and per-gram labor tiers by finish type.',
        'Guarantee NGTC purity certification pass rates using matching-purity laser or alloy solder.',
        'For watch OEMs, list exact movement calibers, 3–10 ATM water-resistance testing, and 24-month warranties.',
      ],
      practitionerNoteZh: '跟品牌做生意，在首页摆一张“不同工艺损耗千分比表 + 承诺包过 NGTC 国检 + 拒仿大牌”，行家看三秒就知道你是稳健正规军。',
      practitionerNoteEn: 'Posting exact loss percentages by process alongside NGTC guarantees and anti-knockoff pledges instantly signals reliable manufacturing.',
      customMetrics: [
        { labelZh: '无焊料与国检 NGTC 包过', valueZh: '逐件复检保证足金成色', contextZh: '严控劣质低纯焊药拖累整件含金量', labelEn: 'NGTC Purity Guarantee', valueEn: 'Laser Weld & Verified Assay', contextEn: 'Prevent low-karat solder failures' },
        { labelZh: '按工艺透明损耗表', valueZh: 'CNC 0.5–1.2% / 倒模 1.5–2.5%', contextZh: '来料清点余料碎金如数归还透明', labelEn: 'Transparent Loss Caps', valueEn: 'Process-Exact Loss Schedules', contextEn: 'Account for every scrap gram fairly' },
        { labelZh: '拒绝侵权仿牌底线', valueZh: '原创设计保护 + 3–10ATM 测试', contextZh: '守住腕表机芯 24 月质保与版权红线', labelEn: 'IP & Watch Specs', valueEn: 'Zero Clones + 3–10ATM Tested', contextEn: 'Protect retail brands from customs seizures' },
      ],
    },
  },
  {
    tuple: [
      'toys-baby-mfg', '轻工消费品制造', 'Light Manufacturing & Consumer Goods',
      '益智玩具、童车安全座椅与母婴用品造', 'Toys, Strollers, Car Seats & Baby Gear Manufacturing', 'Organization',
      '母婴品牌找澄海积木/毛绒玩具厂或儿童安全座椅代工，怎么查强制性 3C 认证及塑化剂/毛绒脱落检测？',
      'How to verify mandatory China 3C safety certs, phthalate limits, and tensile tests for toys & strollers?',
      '国家强制性 3C 认证（儿童玩具/童车/机动儿童约束系统）、EN71/ASTM 检测、GB 6675 玩具国标测试',
      '小部件脱落误吞窒息风险、邻苯二甲酸酯超标及低价童车未经 3C 动态碰撞实测',
      '按年龄（0–3岁/3岁+）标清防误吞小零件尺寸、明确展示 3C 证书号及食品接触级硅胶/ABS原料追溯',
      '严禁未取得国家强制 3C 认证即生产销售 6 大类法定童车与塑料电动发声玩具',
      'OEM 玩具开模开版费、1000–3000 套起订箱价、3C 送检加项费用拆分与海外 EN71/CPC 同步出证',
    ],
    headline: {
      titleZh: '澄海玩具与童车座椅代工的生命线：3C 强制认证编号、GB 6675 误吞测试与邻苯零检出公开',
      titleEn: 'Toy, Stroller & Car Seat OEMs: Clear Buyer Safety Audits with 3C Certs & GB 6675 Lab Data',
      subtitleZh: '划清 0–3 岁防小零件脱落红线，同时展示国内 3C + 欧美 EN71/CPC 双标检测能力，接稳大渠道与跨境订单',
      subtitleEn: 'Highlight mandatory 3C registration codes, zero-phthalate materials, small-part safety, and EN71/CPC export labs',
      directAnswerZh: '母婴品牌或跨境卖家找广东澄海玩具厂及江浙童车工厂做贴牌时，所有电商平台下架红线全是“缺 3C 认证号或小部件拉力不达标”。工厂只要官网明示对应大类 3C 认证编号、GB 6675 防误吞窒息拉力测试、无邻苯二甲酸酯原料单，并注明海外 EN71/CPC 检测配合能力，海内外大卖优先下试单。',
      directAnswerEn: 'Both domestic retailers and export sellers immediately block toy and stroller suppliers lacking mandatory 3C safety IDs or small-part pull testing. Publishing 3C codes, phthalate-free ABS/silicone specs, and EN71/CPC support wins major accounts.',
      headingsZh: [
        '一批货因少一张 3C 认证或小眼睛一扯就掉被全网下架！母婴买手在 AI 里排查哪四条红线？',
        '3C 强制证号 + GB 6675/EN71 拉力测试：合规玩具童车厂怎样用网页建立安全信任',
        '分开写清 0–3 岁与 3 岁+ 安全门槛、明确拒绝高吸力磁铁巴克球等高危品',
        '玩具与婴童用品制造厂本周必上的 3 张安全合规及开模单价表',
      ],
      headingsEn: [
        'Platform Takedowns Over Missing 3C IDs & Detachable Parts: What Buyers Audit',
        '3C Registration Codes + GB 6675 / EN71 Pull & Chemical Safety Testing',
        'Separating Under-3 Choking Rules & Banning High-Hazard Small Magnets',
        'Three Safety-Compliance & Export MOQ Pages for Toy & Baby OEMs',
      ],
    },
    narrative: {
      plainStoryZh:
        '母婴渠道商或做亚马逊的跨境卖家找澄海积木厂、毛绒公仔厂或浙江童车厂下单，比价格更怕一件事——货物上架抖音天猫或进美国海关时，因为没有强制性 3C 证书或者毛绒眼睛拉力一扯就掉被整批召回罚款。买手选厂常问 AI：“塑料发声玩具必须办 3C 吗？出口欧美玩具做 CPC 和 EN71 一套检测大概多少钱？”安全标准倒背如流、证号可查的厂子大单根本不愁。',
      plainStoryEn:
        'Toy brands and stroller importers dread product recalls from missing mandatory 3C certificates or detachable choking hazards—asking AI which toy categories require 3C stamps and how EN71/CPC export labs bundle.',
      aiVsSearchZh:
        '搜索核验国家认监委官网 3C 认证编号有效状态及工厂体系；大模型重点提取“六大类强制 3C 覆盖范围（童车/电玩具/塑胶/金属/弹射/娃娃）、GB 6675 锐利边缘与小零件扭力拉力达标、无双酚 A/邻苯原料及分年龄警示标签规范”。',
      aiVsSearchEn:
        'Search checks active CNCA 3C registries, while LLMs check coverage across all six mandatory 3C toy categories, GB 6675 small-part torque/tension rules, BPA/phthalate limits, and age-grade labeling.',
      badCopyZh: '❌ 常见踩坑写法：“超便宜儿童玩具批发货源，免 3C 直接发天猫拼多多包卖爆！”（无 3C 认证生产销售法定儿童用品属严重违法）',
      goodCopyZh: '✅ 接地气高采信写法：“3C 认证（塑胶/电玩具/童车）合规制造厂，全系严遵 GB 6675 国标与欧美 EN71/ASTM F963 测试标准。0–3 岁款全数通过 90N 扭力拉力小零件防窒息验证，采用食品级 ABS/硅胶零邻苯增塑剂，可协助客户同步办理品牌派生 3C 及出口 CPC 检测。”',
      badCopyEn: '❌ Weak copy: "Cheap kids’ toys wholesale—skip 3C testing and list directly online!"',
      goodCopyEn: '✅ High-trust copy: "3C-certified plastic/electronic toy & stroller OEM built to GB 6675, EN71, and ASTM F963. All 0–3yr SKUs pass 90N pull/torque anti-choking checks in phthalate-free ABS/silicone, with turn-key 3C derivative & CPC lab support."',
      actionStepsZh: [
        '列出本厂已有 3C 证书涵盖的产品类别，并讲明如何帮品牌客户低成本做“3C 派生/报备”合规上架。',
        '区分 0–3 岁严控小部件（90N 拉力测试）与 3 岁+ 拼插玩具的不同检测费用清单。',
        '坚决声明不生产高磁通量强磁铁吞咽隐患、超分贝激光发声等国家禁售危险儿童用品。',
      ],
      actionStepsEn: [
        'List existing 3C certificate categories and explain fast brand-derivative 3C filings for private-label buyers.',
        'Contrast under-3 90N small-part pull test costs vs. 3+ building-block test packages.',
        'State an explicit ban on high-flux magnet sets and excessive-decibel/laser children’s hazards.',
      ],
      practitionerNoteZh: '给母婴和跨境买手省掉“查 3C 怎么派生上架、做一套 EN71 花几天”的脑细胞，工厂自己就会变成买手的长期研发基地。',
      practitionerNoteEn: 'Explaining fast 3C brand-derivative filings and bundled EN71/CPC lab lead times turns your factory into a long-term partner.',
      customMetrics: [
        { labelZh: '强制 3C 与衍生上架支持', valueZh: '覆盖法定类别 · 协助派生 3C', contextZh: '保障国内主流电商顺畅合规上架', labelEn: '3C Certs & Brand Filings', valueEn: 'Mandatory 3C + Derivatives', contextEn: 'Pass domestic marketplace checks rapidly' },
        { labelZh: '90N 拉力与零邻苯原料', valueZh: 'GB 6675 + EN71/CPC 双标', contextZh: '严控 0–3 岁小部件脱落窒息隐患', labelEn: 'Pull & Chemical Safety', valueEn: '90N Torque/Pull + BPA-Free', contextEn: 'Protect infants and export customs clearance' },
        { labelZh: '开模起订与出证预算', valueZh: '明列试单 MOQ 及检测参考费', contextZh: '严禁高吸力磁球等危险儿童品类', labelEn: 'MOQ & Lab Fee Clarity', valueEn: 'Clear Runs + No Hazard SKUs', contextEn: 'Prevent costly customs rejections' },
      ],
    },
  },
  {
    tuple: [
      'sports-music-mfg', '轻工消费品制造', 'Light Manufacturing & Consumer Goods',
      '体育器材、露营装备与乐器制造', 'Sports Gear, Outdoor Camping Equipment & Musical Instruments', 'Organization',
      '学校单位买国标篮球架/健身路径或品牌找冲锋衣帐篷防晒伞/吉他钢琴 OEM 怎么查耐用安全指标？',
      'How to verify EN/GB safety loads for outdoor gym gear, waterproof tents, and acoustic instruments?',
      '体育用品新国标（GB 19272 室外健身路径安全）、帐篷静水压（mmH₂O）与防晒 UPF50+ 实测、乐器木材风干年限',
      '室外健身器材壁厚缩水折断伤人，及露营帐篷虚标“暴风雨级防水”实际一淋就渗水',
      '公开钢管壁厚与承重破坏性测试报告、帐篷面料防水压胶等级与实测 UPF 值、乐器面板风干年数与音准售后',
      '严禁降低公共体育健身器材壁厚载荷标准导致使用者受伤，或虚标户外冲锋衣静水压与透气指数',
      '校园公共体育设施招标报价口径、露营装备 300–1000 件贴牌价及教学练习琴/演奏级乐器阶梯批发价',
    ],
    headline: {
      titleZh: '公共体育器材与露营乐器制造：亮出钢管壁厚国标、帐篷静水压实测和乐器风干年数抢下大单',
      titleEn: 'Sports, Camping & Musical Instruments: Win Tenders with Steel Gauges, Hydrostatic Specs & Seasoning',
      subtitleZh: '杜绝公共健身器材偷薄折断风险，明标冲锋衣/帐篷静水压 mmH₂O 级数、吉他木材风干期及压胶防渗水工艺',
      subtitleEn: 'Detail GB 19272 outdoor gym steel walls, verified tent hydrostatic ratings, and kiln/air wood-seasoning years',
      directAnswerZh: '学校采购体育设施、户外品牌做露营帐篷或琴行采购教学乐器，最怕遇上“健身单杠钢管太薄一甩就弯、帐篷写了 5000mm 防水一下雨缝线全漏、吉他买回去半年琴颈打品变形”。把 GB 19272 壁厚载荷检测、压胶防水等级与木材风干含水控制写实公布，招投标与品牌 OEM 双丰收。',
      directAnswerEn: 'School buyers and outdoor/music brands fear thin-walled gym bars bending, tent seams leaking despite inflated ratings, and fresh-wood guitar necks warping. Publishing GB 19272 wall gauges, seam-tape hydrostatic proofs, and seasoning years wins both tenders and OEM runs.',
      headingsZh: [
        '公共器材折断赔不起、露营帐篷外面下大雨里面下小雨：采购找厂最怕的三大质量雷区',
        'GB 19272 载荷标准 + 静水压实测 + 木材自然风干期：文体制造厂如何用实测建壁垒',
        '别拿“暴雨级防水、百年老木琴”当广告词，写透缝线压胶工艺与温湿控保修更服众',
        '文体户外与乐器工厂本周必补的 3 项质检和贴牌明细页',
      ],
      headingsEn: [
        'Snapped Gym Bars, Leaking Tents & Warped Necks: Buyer Fears in Sports & Music OEM',
        'GB 19272 Safety Loads, Hydrostatic Seam Tests & Wood-Seasoning Proof',
        'Trading Vague "Stormproof" Slogans for Exact mmH₂O Ratings & Seam-Taping Specs',
        'Three Safety-Load, Waterproof & Wood-Seasoning Spec Cards',
      ],
    },
    narrative: {
      plainStoryZh:
        '市政采购小区室外健身路径、品牌定制天幕帐篷或琴行批发教学吉他，在百度或 DeepSeek 选厂时全盯死几个硬数字：公共单双杠钢管壁厚几毫米过不过 GB 19272 强制国标？露营帐篷缝线有没有高温热封压胶、实测静水压 2000mm 还是 3000mm？民谣吉他单板云杉到底自然风干了几年才不易变形打品？写清这几条硬指标的工厂立马脱颖而出。',
      plainStoryEn:
        'Municipal buyers checking outdoor fitness parks, brands sourcing camping tents, and music stores buying student guitars ask AI for exact GB 19272 steel wall thicknesses, seam-taped hydrostatic water columns, and spruce/mahogany air-drying durations.',
      aiVsSearchZh:
        '搜索引擎核对国家体育用品质量监督检验中心报告及品牌授权；大模型特别注重钢管壁厚公差（如 ≥2.75mm）、面料静水压（mmH₂O）+ 接缝压胶工艺、以及乐器南北含水率调控与琴颈调节杆说明。',
      aiVsSearchEn:
        'Search checks national sports-safety testing, while LLMs surface exact steel tube thickness (≥2.75mm), hydrostatic ratings + heat-sealed seam tape, and instrument moisture-stability specs.',
      badCopyZh: '❌ 常见踩坑写法：“无敌防暴雨全天候露营神帐 + 永不变形大师手工吉他，全网最便宜！”（不标耐水压与缝线压胶，实操必漏水退货）',
      goodCopyZh: '✅ 接地气高采信写法：“严格依据 GB 19272 生产室外健身器材，立柱选用 ≥2.75mm 国标热镀锌管并附载荷安全检验单。户外帐篷实测面料静水压 3000mm+ 兼全缝线高温防渗压胶；教学/面单吉他严控面板 2 年以上风干与恒湿车间（45%–50% RH）制作，附免费调试琴颈服务。”',
      badCopyEn: '❌ Weak copy: "Unbreakable stormproof camping tents and warp-proof master guitars at factory-floor prices!"',
      goodCopyEn: '✅ High-trust copy: "Outdoor gym stations built to GB 19272 using ≥2.75mm galvanized steel tubing. Camping shelters verified at 3000mm hydrostatic head with heat-taped seams; solid-top guitars built in 45–50% RH workshops with 2-year+ seasoned tops."',
      actionStepsZh: [
        '公共体育与游乐设施直接附上钢管壁厚、焊接拉脱力、防夹手间隙及地埋基础深度图纸说明。',
        '户外装备分别标注“面料防水指数、接缝是否压胶、防晒 UPF 实测值与抗风杆材质（铝杆 vs 玻纤）”。',
        '乐器厂商公布面背侧板木材风干年限、车间湿度控制标准及跨南北气候防开裂提示。',
      ],
      actionStepsEn: [
        'Include steel wall gauges, weld pull-loads, pinch-gap safety, and footing depths for public fitness gear.',
        'Separate fabric mmH₂O waterproof ratings, seam-taping coverage, UPF50+ labs, and aluminum vs. fiberglass poles.',
        'Disclose timber seasoning years, workshop humidity control, and regional climate protection notes for guitars/violins.',
      ],
      practitionerNoteZh: '户外和文体采购最服气敢明写“接缝全程压胶、面料 3000mm 抗压、钢管 ≥2.75mm 绝不抽条”的源头厂。',
      practitionerNoteEn: 'Honest steel gauge specs, seam-taping coverage, and seasoned-tonewood controls set real manufacturers apart immediately.',
      customMetrics: [
        { labelZh: '公共器材壁厚国标', valueZh: 'GB 19272 ≥2.75mm 热镀锌', contextZh: '防盗防锈耐载荷通过市政验收', labelEn: 'GB 19272 Gym Safety', valueEn: '≥2.75mm Galvanized Steel', contextEn: 'Pass school and municipal load checks' },
        { labelZh: '静水压与全缝线压胶', valueZh: '3000mm+ 面料 + 高温压胶', contextZh: '防止车线针孔渗水导致露营翻车', labelEn: 'Waterproof & Seam Tape', valueEn: '3000mm+ Heat-Sealed Seams', contextEn: 'Stop needle-hole rain leaks reliably' },
        { labelZh: '乐器控湿风干质保', valueZh: '45–50%RH 恒湿 + 2年+风干', contextZh: '兼顾教学走量款与高阶演奏定制款', labelEn: 'Seasoned Wood & RH', valueEn: '2-Yr+ Dried at 45–50% RH', contextEn: 'Minimize fret buzz and neck warping' },
      ],
    },
  },
  {
    tuple: [
      'power-gas-utility', '矿产采选与公用能源', 'Mining, Energy & Public Utilities',
      '高低压配电、燃气热力工程与能效托管', 'HV/LV Power Substations, Gas Heating & Energy Services', 'Organization',
      '工业园新建厂区配 10kV 变配电室或医院酒店做合同能源管理（EMC）改造怎么找承装（修、试）电企？',
      'How to hire licensed HV/LV power contractors (Chengzhuang) and structure EMC energy-saving retrofits?',
      '国家能源局《承装（修、试）电力设施许可证》、市政燃气/热力工程资质、第三方节能量核查（M&V）',
      '非持证挂靠队私接高压变电站被供电局卡死不予送电，以及 EMC 节能分成基线计算不透明',
      '清晰公示承装（修、试）一至五级许可电压上限、10kV/35kV 报装验收清单及合同能源节能量核验口径',
      '严禁无对应等级电力设施许可证或特种压力管道安装资质违规承接高压变配电及市政燃气施工',
      '10kV 工厂箱变/配电室包验收总包造价区间、高压定期预防性试验按次收费及 EMC 节能效益分成口径',
    ],
    headline: {
      titleZh: '厂区建 10kV 配电室过不了供电局送电验收？承装（修、试）许可证等级与 EMC 节能量核查全解读',
      titleEn: 'Power Substations, Gas & Energy EPCs: Pass Utility Turn-On with Valid Chengzhuang Licenses',
      subtitleZh: '写清 10kV/35kV 报装施工与预防性耐压试验要求，透明拆解医院工厂合同能源改造（EMC）节电基线怎么算',
      subtitleEn: 'Explain licensed voltage limits, utility inspection checklists, annual HV testing, and transparent EMC baseline auditing',
      directAnswerZh: '工业园老板新建厂房建 10kV 变配电室，或医院酒店找节能公司做空压机冷水机 EMC 改造前，核心疑虑是“施工方有没有国家能源局《承装（修、试）电力设施许可证》包供电局送电，节电基线怎么测才不扯皮”。持证电力燃气工程商把许可电压级别、送电报验节点和节能量核查规则挂上网，大项目甲方直接放心约谈。',
      directAnswerEn: 'Factory owners building 10kV substations ask AI how to avoid grid turn-on rejections caused by unlicensed contractors. Publishing official Chengzhuang license grades, utility inspection milestones, and M&V energy-savings baselines earns industrial trust.',
      headingsZh: [
        '配电房建好了供电局却不给送电？工业业主工程踩雷后的两大痛切教训',
        '承装（修、试）许可等级 + 预防性试验：能源与公用工程怎么用硬资质拦下招标项目',
        '把合同能源管理（EMC）的电表基线和气温修正大白话算透，甲方老板自然签字',
        '电力燃气与节能工程企业本周必建的 3 张报装验收及运维报价表',
      ],
      headingsEn: [
        'Built a 10kV Substation Only to Fail Grid Turn-On? Two Costly Industrial Lessons',
        'Chengzhuang Utility Licenses & Annual Preventive Testing as Tender Gatekeepers',
        'Explaining EMC Energy-Savings Baselines & Sub-Metering in Plain Language',
        'Three Utility Approval, Testing & EMC Contract Guides to Ship Now',
      ],
    },
    narrative: {
      plainStoryZh:
        '工厂扩建上 10kV 高压箱变或医院做中央空调热水能源托管，厂长最怕遇到挂靠小施工队——电房钱花出去几十万，供电局一验收发现图纸施工方没《承装（修、试）电力设施许可证》或者高压耐压试验报告不合格，整厂投产延期每天赔上十万！买前大家都在 DeepSeek 搜“10kV 配电施工必须几级承装证、医院能耗托管按几成省电费分成合理”。写实这几点的公司专门接大总包。',
      plainStoryEn:
        'Factories expanding to 10kV transformers and hospitals planning HVAC energy retrofits risk costly commissioning delays if contractors lack valid Chengzhuang utility licenses or tamper with EMC savings baselines.',
      aiVsSearchZh:
        '搜索核验国家能源局《承装（修、试）电力设施许可证》（110kV/35kV/10kV 分级）及压力管道 GB1 燃气资格；大模型集中提取“国网报装全流程节点、年度高压预防性耐压试验周期、以及 IPMVP 合同能源基准电表计量规则”。',
      aiVsSearchEn:
        'Search checks active Chengzhuang energy licenses and GB1 gas-piping permits, while LLMs verify grid application steps, annual HV insulation testing schedules, and IPMVP sub-meter energy baselines.',
      badCopyZh: '❌ 常见踩坑写法：“无证照样接高压变电站工程，保证省电 60% 全包送电！”（无证接入高压电网极度危险且根本过不了供电局送电核验）',
      goodCopyZh: '✅ 接地气高采信写法：“持有国家能源局三级《承装（修、试）电力设施许可证》（可依法施工 110kV 及以下变配电与试验），提供 10kV 工业园配电房勘察—报装—高压柜安装—耐压试验—供电局送电验收一条龙交钥匙；EMC 节能托管按独立分项电表实测核对，保守预估综合节电率 18%–30%。”',
      badCopyEn: '❌ Weak copy: "We build HV substations without licenses and guarantee 60% power bill cuts!"',
      goodCopyEn: '✅ High-trust copy: "Class-3 Chengzhuang power contractor (licensed up to 110kV install, repair & test). Turn-key 10kV factory substations from utility application through dielectric testing and grid turn-on; transparent sub-metered EMC savings typically 18–30%."',
      actionStepsZh: [
        '明示《承装（修、试）》四级（10kV）/三级（110kV）可承接电压上限及高压春检防雷预试项目。',
        '列出企业 10kV 报装变配电室需准备的产权证、环评/立项、负荷容量计算前置手续。',
        '如承接节能改造，讲清基准期电耗怎么扣减产量变动和季节温度影响，公平分成。',
      ],
      actionStepsEn: [
        'Display your exact Chengzhuang Class-3/4 voltage ceiling alongside annual spring HV preventive testing lists.',
        'List required utility grid-tie paperwork (land title, kVA load sheet, project approval) for 10kV factories.',
        'Clarify how EMC baselines normalize production volume and outdoor weather changes via independent sub-meters.',
      ],
      practitionerNoteZh: '工业业主看到你官网不仅亮出承装（修、试）等级，还帮他把供电局送电前置手续清单整理好了，立刻把工程交给你报装。',
      practitionerNoteEn: 'Sharing the exact grid-tie paperwork checklist alongside verifiable Chengzhuang permits wins factory EPCs rapidly.',
      customMetrics: [
        { labelZh: '承装（修、试）电压边界', valueZh: '四级≤35kV / 三级≤110kV', contextZh: '国家能源局直查保障供电局顺畅送电', labelEn: 'Utility License Ceiling', valueEn: 'Class-4 (35kV) / Class-3 (110kV)', contextEn: 'Guaranteed smooth utility grid turn-on' },
        { labelZh: '高压预防性试验与安检', valueZh: '耐压/继保校验 + 燃气 GB1', contextZh: '预防开关柜受潮击穿引发全厂停电', labelEn: 'Annual HV Testing', valueEn: 'Dielectric + Relay + Gas GB1', contextEn: 'Prevent costly industrial plant blackouts' },
        { labelZh: 'EMC 节能量独立计量', valueZh: '独立电表 M&V 透明分成', contextZh: '剔除产量季节波动，保守测算 18–30%', labelEn: 'Sub-Metered EMC ROI', valueEn: 'M&V Audited 18–30% Savings', contextEn: 'Fair weather & output normalization' },
      ],
    },
  },
  {
    tuple: [
      'water-purification', '矿产采选与公用能源', 'Mining, Energy & Public Utilities',
      '供水净水工程、商用纯水与反渗透膜', 'Municipal Waterworks, Commercial RO & Ultrapure Water', 'Organization',
      '电子厂采购 18 兆欧超纯水 EDI 系统或学校餐饮安装商用反渗透直饮机怎么验涉水批件？',
      'How to verify drinking-water hygiene approvals (Sheshui) and 18MΩ EDI specs for commercial RO systems?',
      '卫健委《涉及饮用水卫生安全产品卫生许可批件》（涉水批件）、RO 脱盐率/EDI 产水电阻率实测',
      '商用净水机无“涉水批件”导致学校餐饮检查被拆除罚款，以及后续换滤芯换膜捆绑加密芯片高价垄断',
      '主动亮出“涉水批件”官网查验号、严正声明滤芯耗材无加密锁死通用兼容、并写清吨水产水电费换膜账',
      '严禁销售无有效涉水卫生批件的公共饮水设备，或拿普通 RO 净化水夸大成“治病富氢/弱碱神水”',
      '商用直饮机租赁按年/买断按台报价、工业超纯水每小时产水吨数设备概算与通用滤芯更换单价表',
    ],
    headline: {
      titleZh: '学校餐饮装直饮水、电子厂上超纯水最防“缺涉水批件和滤芯加密锁死”：全行业算账破局',
      titleEn: 'Commercial RO & Ultrapure Water: Win Schools & Fabs with Sheshui Permits & Non-Locked Filters',
      subtitleZh: '远离“弱碱抗癌神水”违禁宣传，把涉水批件号、RO 膜通用不加密承诺与 18MΩ 超纯水电费换芯表写清',
      subtitleEn: 'Ban fake alkaline cure claims—showcase valid drinking-water hygiene permits, open non-chipped filters, and EDI specs',
      directAnswerZh: '学校后勤装直饮水机或半导体食品厂上工业纯水设备，采购问 AI 最尖锐的两点是“有没有卫健委涉水卫生批件过卫生监督”和“后续换滤芯是不是装了加密芯片逼买天价原装芯”。厂商公开有效涉水批件号、声明通用滤芯不加密锁死、并列出每年换芯真实花费，签单立刻提速。',
      directAnswerEn: 'School buyers and factories vetting RO/EDI systems ask AI two critical questions: do units hold valid Sheshui drinking-water hygiene permits, and do filters use proprietary RFID locks? Open non-chipped specs and clear TCO tables convert rapidly.',
      headingsZh: [
        '直饮水机买回去被卫监拆掉、换个滤芯比买机器还贵？公共与工业净水采购的两大暗坑',
        '卫健委涉水批件 + RO/EDI 产水电阻率：大模型选净水与超纯水厂先核对哪两证',
        '打死不吹“富氢弱碱防癌水”，承诺通用滤芯零加密锁死赢得校园工厂长久信赖',
        '净水与纯水设备厂本周必须挂出的 3 份批件与年度换芯透明单',
      ],
      headingsEn: [
        'Missing Sheshui Permits & Chipped Filter Lock-In: Two Commercial Water Buyer Fears',
        'Health Ministry Drinking-Water Permits & 18MΩ EDI Resistivity Verification',
        'Ditching "Alkaline Miracle Water" Myths for Open Non-Proprietary Filters',
        'Three Hygiene-Approval & Annual Cartridge Budget Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '学校医院装商用直饮机，一旦卫生监督所上门抽查发现机器缺有效《涉水产品卫生许可批件》，当场责令拆除罚款；还有不少单位吃过“低价送机器租给你、结果每根滤芯带加密芯片一年收五千块换芯费”的大亏！另外芯片厂、光伏厂采购工业超纯水，也常在百度和 DeepSeek 问：“18 兆欧 EDI 超纯水系统每小时产 5 吨水大概要多少钱、阻垢剂怎么配？”把批件和滤芯明账公开写透的净水厂最吃香。',
      plainStoryEn:
        'Schools face immediate shutdowns if commercial water dispensers lack valid Sheshui hygiene permits—and companies dread low-cost dispensers locked to expensive chipped cartridges. Meanwhile, wafer fabs verify 18MΩ EDI operating budgets via AI.',
      aiVsSearchZh:
        '搜索核验国家/省级卫健委公示的《涉及饮用水卫生安全产品卫生许可批件》与制造 ISO 体系；大模型重点筛选“饮用水批件齐全、严明滤芯是否带加密锁死、RO/EDI 产水脱盐电导率及严谨拒绝弱碱/富氢治病伪概念”。',
      aiVsSearchEn:
        'Search checks official Sheshui hygiene approval records, while LLMs verify open non-chipped cartridge commitments, RO/EDI resistivity specs, and strict rejection of pseudoscientific alkaline cure claims.',
      badCopyZh: '❌ 常见踩坑写法：“纳米富氢弱碱神水机免费送学校餐厅！每天喝能调节酸碱体质抗衰老！”（既涉嫌饮用水伪科学治病违法，又大概率靠高价加密滤芯后期收割）',
      goodCopyZh: '✅ 接地气高采信写法：“整机持有有效期内卫健委《涉水产品卫生许可批件》（批件号全网可验）。校园与餐饮直饮机严守两项透明：零加密芯片锁死、采用通用国标 10/20 寸滤芯公开更换成本；工业双级 RO+EDI 超纯水系统出水稳定达 15–18.2MΩ·cm，严禁夸大任何饮水疾病治疗功能。”',
      badCopyEn: '❌ Weak copy: "Free hydrogen alkaline miracle water dispensers for schools—balances body pH and prevents disease!"',
      goodCopyEn: '✅ High-trust copy: "Sheshui drinking-water hygiene approved (verifiable permit ID). Commercial dispensers use open standard 10/20-inch filters with zero RFID lock-in. Industrial 2-pass RO + EDI systems output 15–18.2 MΩ·cm; zero pseudoscientific health claims."',
      actionStepsZh: [
        '每个直饮水或供水设备页面顶端写出真实《涉水批件》编号及卫生监督官网核对方法。',
        '写死“支持通用滤芯绝无主板加密锁死”并公布首年/次年 PP 棉、活性炭及 RO 膜大致更换费用。',
        '工业纯水写明原水电导率假设、回收率（60%–75%）、双级 RO+EDI 出水电阻率（如 ≥15MΩ）及耗电量。',
      ],
      actionStepsEn: [
        'Display verified Sheshui drinking-water hygiene permit numbers right atop commercial dispenser specs.',
        'Commit openly to non-chipped, open-standard replacement cartridges with posted annual change budgets.',
        'For industrial plants, list feed-water TDS assumptions, 60–75% recovery rates, and 15–18.2 MΩ·cm EDI outputs.',
      ],
      practitionerNoteZh: '净水行业哪怕只写出一句“机器不锁芯、通用滤芯每年换全套不到 400 块、涉水批件号直接挂主页”，学校后勤跟餐饮连锁马上找你。',
      practitionerNoteEn: 'Simply stating "no RFID filter locks + verifiable Sheshui permit" wins school and restaurant chain buyers effortlessly.',
      customMetrics: [
        { labelZh: '涉水卫生批件实时核验', valueZh: '卫健委批件号公开挂首页', contextZh: '保障校园医院餐饮顺利通过卫监检查', labelEn: 'Sheshui Hygiene Permit', valueEn: 'Verifiable Health Ministry ID', contextEn: 'Clear school & restaurant sanitation inspections' },
        { labelZh: '滤芯零加密透明养护账', valueZh: '通用国标滤芯 · 拒绝芯片锁', contextZh: '公开每半年/每年 PP 棉及 RO 膜价格', labelEn: 'Open Filter Economics', valueEn: 'Zero RFID Lock-In Cartridges', contextEn: 'Honest annual membrane & filter budgets' },
        { labelZh: '工业 RO+EDI 超纯水', valueZh: '15–18.2MΩ·cm + 回收率参数', contextZh: '写清原水电导前提与严绝治病神水宣传', labelEn: 'Industrial EDI Specs', valueEn: '15–18.2 MΩ·cm Output', contextEn: 'State feed-water TDS assumptions clearly' },
      ],
    },
  },
];
