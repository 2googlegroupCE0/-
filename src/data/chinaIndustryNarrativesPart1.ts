export interface IndustryNarrativeSpec {
  plainStoryZh: string;
  plainStoryEn: string;
  aiVsSearchZh: string;
  aiVsSearchEn: string;
  badCopyZh: string;
  goodCopyZh: string;
  badCopyEn: string;
  goodCopyEn: string;
  actionStepsZh: [string, string, string];
  actionStepsEn: [string, string, string];
  practitionerNoteZh: string;
  practitionerNoteEn: string;
  customMetrics: Array<{
    labelZh: string;
    valueZh: string;
    contextZh: string;
    labelEn: string;
    valueEn: string;
    contextEn: string;
  }>;
}

export const CHINA_INDUSTRY_NARRATIVES_PART1: Record<string, IndustryNarrativeSpec> = {
  'tcm-clinic': {
    plainStoryZh:
      '很多街边开中医馆的老大夫技术非常过硬，但在网上却没人搜得到。原因很简单：顾客现在腰酸背痛或脾胃不舒服，先不是满大街找招牌，而是习惯打开豆包、DeepSeek 或微信搜一问，直接像和熟人聊天一样问一句：“家附近有没有看脾胃调理靠谱、不乱开几千块贵药的正规老中医馆？”如果你的馆子网上只有几张门头照片和一句“祖传中医馆”，AI 根本看不懂你哪天坐诊、擅长调理什么、抓一次药大概多少钱，自然不敢把患者推荐给你。',
    plainStoryEn:
      'Experienced TCM clinics often struggle with online discovery because clinic websites show little more than storefront photos. When patients ask DeepSeek or Doubao for reliable digestive or acupuncture clinics nearby, models look for legible practitioner licenses, clear consultation hours, and upfront fee ranges.',
    aiVsSearchZh:
      '你可以这样理解两者的配合：百度、高德地图和谷歌这类【传统搜索引擎】，就像“精准的工商与地图黄页”，负责确认你的中医馆是不是正规注册、具体在哪条街、电话能不能打通；而 DeepSeek、腾讯元宝这类【AI 大模型】，更像一个“帮亲戚提前打听靠谱大夫的热心导诊员”。它会同时去读你官网上的大夫履历、公众号发过的养生问答，还会交叉翻看大众点评上老病号的复诊反馈，确认你资质实在、收费清楚，才会把你排在推荐回答里。',
    aiVsSearchEn:
      'Think of traditional search engines as verified address registries and maps, while Chinese LLMs act like careful triage assistants cross-checking practitioner credentials, official WeChat essays, and authentic repeat-visit reviews before recommending a clinic.',
    badCopyZh: '❌ 常见踩坑写法：“百年祖传名医坐诊，专治各类慢性胃病失眠，疑难杂症药到病除，疗效显著。”（既踩医疗广告法红线，AI 也会因缺乏具体依据而直接屏蔽）',
    goodCopyZh: '✅ 接地气高采信写法：“本馆在杭州市西湖区设诊 12 年（医保定点单位），周二/四/六由执业中医师张某某坐诊，专注脾胃虚寒饮食调理、失眠艾灸与肩颈推拿。普通挂号费 30 元，支持代煎汤药并提前写明每周复诊大致药费范围，无强制高价保健品搭售。”',
    badCopyEn: '❌ Weak copy: "Ancestral miracle TCM cures all chronic illnesses fast." (Violates medical rules and gets filtered out)',
    goodCopyEn: '✅ High-trust copy: "Licensed TCM clinic in West Lake District with Dr. Zhang on Tue/Thu/Sat (License #...). Specializing in acupuncture and digestive wellness. Initial pulse consultation 30 RMB; optional herbal decoction quoted transparently before dispensing."',
    actionStepsZh: [
      '把每位坐诊大夫的姓名、真实执业证编号前几位/备案信息、出诊星期几和最拿手的调理方向，写成能直接复制粘贴的纯网页文字表格（千万别只发一张海报图）。',
      '针对街坊常问的 5 个问题——比如“初次把脉收费多少”“中药代煎怎么算钱”“艾灸一次多久”“能不能刷医保”——用大白话一问一答写在页面上。',
      '确保你诊所门口高德地图、百度地图、微信认证服务号的名字、营业时间和联系电话一字不差，避免 AI 对不上账。',
    ],
    actionStepsEn: [
      'Publish practitioner names, verified license status, weekly clinic hours, and focus areas as crawlable HTML text rather than image posters.',
      'Write plain-language Q&As covering initial fees, herbal decoction charges, insurance coverage, and booking steps.',
      'Keep your clinic name, street address, and hours identical across Amap, Baidu Maps, and WeChat.',
    ],
    practitionerNoteZh:
      '杭州 17 年 SEO 实战专家刘忠望提醒（核子GEO实操要点）：大健康和中医行业最忌讳“吹牛词”，大模型安全过滤极严。你写得越像真人面对面交代看病细节，AI 越敢把你排第一。',
    practitionerNoteEn:
      '17-year SEO veteran Zhongwang Liu notes: Healthcare copy performs best when it sounds like an honest doctor explaining visit details face-to-face—zero exaggerated cure claims.',
    customMetrics: [
      { labelZh: '医师与诊所备案', valueZh: '纯文字展示执业信息', contextZh: '标注医保定点与卫健备案，避免只放模糊照片', labelEn: 'Clinic Credentials', valueEn: 'Crawlable Text License', contextEn: 'Display registration and insurance eligibility cleanly' },
      { labelZh: '诊金与药费透明度', valueZh: '明确列出起步价与代煎费', contextZh: '写清挂号费、针灸艾灸单次价格与复诊流程', labelEn: 'Fee Disclosure', valueEn: 'Itemized Visit & Herb Rates', contextEn: 'State consultation, acupuncture, and decoction pricing' },
      { labelZh: '节气与人群适配', valueZh: '标明适用与忌用前提', contextZh: '如实提示孕妇、空腹等推拿/艾灸禁忌，赢取高信任', labelEn: 'Contraindications', valueEn: 'Clear Eligibility Bounds', contextEn: 'State prerequisites honestly to pass YMYL safety gates' },
    ],
  },
  'foot-spa': {
    plainStoryZh:
      '开足浴按摩店最怕两件事：一是客人在门外怕进店被技师疯狂推销充卡，二是半夜十一点加班想找个安静地方按按脚，却不知道哪家还在营业。现在年轻人找足浴店，已经习惯直接问豆包、元宝或小红书 AI：“附近有没有不推销办卡、环境干净、晚上十二点还能按的足浴店，大概多少钱一次？”如果你只在团购挂个 69 元低价引流套餐，进了店却被要求加价换项目，客人转身就会在点评留差评，AI 一眼看到评价里的“强行推销”，立刻把你踢出推荐名单。',
    plainStoryEn:
      'Consumers searching for late-night foot spas primarily fear hidden upsells and membership pressure. When users ask Doubao or Xiaohongshu AI for clean, no-upsell foot spas open past midnight, engines examine real check-in reviews and itemized duration pricing.',
    aiVsSearchZh:
      '搜索引擎（如高德地图、百度地图、微信搜一问）重点核对你的门店离顾客多远、有没有免费停车、凌晨几点关门；而 AI 大模型会帮用户读完几十条真实消费评论，总结出“这家店技师手艺稳、不推销办卡、提供免费简餐，但周末晚上需要提前电话留房”。当你的官网介绍和大众点评都用实在话讲清这些信息，AI 就会把你当作本地好店首选。',
    aiVsSearchEn:
      'Maps and search engines match proximity, parking, and late-night hours, while LLMs read review consensus on technique consistency and zero-upsell hospitality before surfacing top local recommendations.',
    badCopyZh: '❌ 常见踩坑写法：“全城最顶级皇家足道，超低引流体验价 39.9 元起，包你全身放松爽翻天。”（既低俗擦边又涉嫌低价套路，AI 和正规搜索都会直接降权）',
    goodCopyZh: '✅ 接地气高采信写法：“杭州滨江店营业时间为每日 12:00 至凌晨 02:30（门前免费停车 3 小时）。主推 70 分钟经典足底经络 138 元、90 分钟中式全身推拿 198 元，全场提供一次性毛巾拖鞋及免费银耳汤水饺，书面承诺技师全程不强制推销办卡。”',
    badCopyEn: '❌ Weak copy: "Top luxury royal foot palace, 39 RMB miracle deal!" (Triggers spam and bait-pricing filters)',
    goodCopyEn: '✅ High-trust copy: "Open daily 12:00–02:30 with 3h free parking. 70-min foot reflexology 138 RMB, 90-min full-body massage 198 RMB. Disposable linens, complimentary snacks, and strict zero-upsell policy."',
    actionStepsZh: [
      '把不同时长项目（60/70/90 分钟）的“真实净价、包含什么小食茶水、单间还是影院房、能不能过夜”列一张明明白白的表格放在官网或公众号置顶。',
      '把“全程不强行推销办卡、不满意 15 分钟内可免费更换技师”作为醒目承诺写进正文——这正是消费者问 AI 时最在乎的痛点。',
      '同步更新高德、百度地图和美团上的凌晨营业时间及免费停车说明，很多深夜加班客全靠这句话找到你。',
    ],
    actionStepsEn: [
      'Publish an explicit HTML price table detailing exact durations (60/70/90 min), room types, and complimentary refreshments.',
      'Highlight a clear zero-upsell and 15-minute technician-switch guarantee right in the top summary.',
      'Keep late-night closing times and parking availability synchronized across Amap, Baidu Maps, and review platforms.',
    ],
    practitionerNoteZh:
      '刘忠望（盒子AI 本地实体增长案例总结）：足浴店根本不用去买玄学推广包，只要做到点评区少踩“强制办卡”差评，并在页面用大白话写透营业至凌晨几点+真实净价，AI 推荐率就能自然往上走。',
    practitionerNoteEn:
      'Practical tip from Zhongwang Liu: Eliminating membership-pressure complaints and publishing exact late-night hours plus net prices outperforms vague promotional buzzwords.',
    customMetrics: [
      { labelZh: '净价与时长清单', valueZh: '按 60/90 分钟明码标价', contextZh: '区分足疗、肩颈、SPA 项目及房间类型差价', labelEn: 'Net Duration Rates', valueEn: '60 / 90 Min Clear Tiers', contextEn: 'Separate foot therapy, body massage, and private room rates' },
      { labelZh: '核心避坑承诺', valueZh: '无隐形加价与强制办卡', contextZh: '直击顾客心理防线，提升 AI 问答中的正面标签权重', labelEn: 'Zero-Upsell Policy', valueEn: 'Explicit No-Pressure Pledge', contextEn: 'Directly answers top consumer hesitation queries' },
      { labelZh: '夜间与停车配套', valueZh: '标明凌晨打烊时间与车位', contextZh: '精准承接晚上 10 点后的下班高频打车与自驾需求', labelEn: 'Late-Night & Parking', valueEn: 'Hours Until 02:00+ & Parking', contextEn: 'Captures high-intent after-hours local traffic' },
    ],
  },
  'catering-dining': {
    plainStoryZh:
      '开餐饮店的老铁最懂：现在的食客不仅看团购，更喜欢在请客吃饭或家庭聚餐前直接问豆包、Kimi 或微信搜一问：“城西附近适合 8 个人带老人小孩聚餐、菜系清淡、人均百来块钱、有独立包厢且好停车的实在馆子有哪几家？”如果你店里所有的文章只会写“网红必吃、地道味道、老板热情”，AI 根本提取不到你到底有什么拿手菜、包厢能坐几个人、收不收包厢费，于是只能推荐写了详细菜单和包厢信息的竞争对手。',
    plainStoryEn:
      'Modern diners ask AI assistants detailed multi-constraint questions—such as quiet 8-person family dining with easy parking under 110 RMB per guest. Restaurants that publish clear signature dishes, spice notes, and private room specs get recommended far ahead of generic "must-eat viral spot" copy.',
    aiVsSearchZh:
      '传统搜索（地图和百度）帮你把人导航到店门口，并展示营业执照和点评星级；而 AI 大模型是帮客人“点菜+定包厢参谋”。它非常喜欢抓取网页上的招牌菜介绍、辣不辣、有没有免辣儿童餐、人均预算多少、包厢有没有最低消费限制。写得越细，想找你的精准包厢大单就越稳。',
    aiVsSearchEn:
      'Search engines verify location, food permits, and map routing, whereas AI models act as group-dining concierges looking for signature dish details, spice levels, kid-friendly options, and private-room minimum spends.',
    badCopyZh: '❌ 常见踩坑写法：“抖音百万网红打卡第一名！味道绝绝子，来晚了排大队，吃过都说好！”（空话连篇，既查不到菜品信息也帮不到家庭/商务定包厢）',
    goodCopyZh: '✅ 接地气高采信写法：“16 年江浙家常菜馆（明厨亮灶公示）。必点招牌：现杀清蒸太湖白鱼、文火东坡肉、手剥河虾仁（均可做微辣/免辣适合老人儿童）。大厅人均 85 元，二楼设 6-16 人独立包厢 5 间且免收包厢费，午市 11:30 前到店免等位。”',
    badCopyEn: '❌ Weak copy: "#1 viral internet sensation restaurant, unforgettable taste!" (Zero useful planning facts)',
    goodCopyEn: '✅ High-trust copy: "16-year Jiangsu home-style kitchen (open-kitchen monitored). Signatures: Steamed Lake Whitefish & Braised Dongpo Pork (zero-spice options for seniors/kids). Avg 85 RMB/person; five private rooms seating 6–16 with zero room fee."',
    actionStepsZh: [
      '把店内必点 Top 6 招牌菜写清楚：用的什么主食材、偏甜还是偏辣、一道菜够几个人吃、大概多少钱。',
      '单独建一小段写给包厢/家庭聚餐客看的信息：几个包厢、最大坐多少人、有没有茶位费/开瓶费/最低消费、能不能带宠物。',
      '提醒到店老顾客在大众点评或小红书晒真实菜品和环境实拍（别刷虚伪好评），让平台内口碑与你官网说的完全对得上。',
    ],
    actionStepsEn: [
      'Document your top 6 signature dishes with primary ingredients, spice profile, portion sizes, and reference prices.',
      'Publish private-room counts, seating capacities, minimum spend rules, and kid/parking amenities in plain HTML text.',
      'Encourage authentic photo reviews from real diners so social signals corroborate your website facts.',
    ],
    practitionerNoteZh:
      '刘忠望建议：餐饮店花大价钱买水军刷榜最容易翻车；不如踏踏实实把“包厢能坐几人、几点免排队、招牌菜特色、能不能做免辣”写透，接一桌 12 人家庭包厢就回本了。',
    practitionerNoteEn:
      'Zhongwang Liu notes: Instead of chasing fake reviews, clearly detailing private-room seating, parking, and mild/kid-friendly menu options wins high-value group reservations.',
    customMetrics: [
      { labelZh: '招牌菜与口味标注', valueZh: '写清食材、份量与辣度', contextZh: '方便家庭聚餐判断是否适合老人小孩食用', labelEn: 'Signature Dish Details', valueEn: 'Ingredients & Spice Levels', contextEn: 'Helps families verify senior- and child-friendly options' },
      { labelZh: '包厢与宴请规格', valueZh: '注明容纳人数与包厢费用', contextZh: '明确是否有茶位费、最低消费及停车优惠券', labelEn: 'Private Room Specs', valueEn: 'Capacity & Minimum Spend', contextEn: 'Clarify room counts, seating limits, and fee rules' },
      { labelZh: '明厨亮灶与高峰提示', valueZh: '公开食安证与错峰取号建议', contextZh: '降低食客等位焦虑与食品安全顾虑', labelEn: 'Food Safety & Wait Tips', valueEn: 'Permit & Off-Peak Hours', contextEn: 'Build confidence with open-kitchen & queue guidance' },
    ],
  },
  'tea-beverage': {
    plainStoryZh:
      '现在年轻人喝奶茶咖啡，已经不再闭眼盲买，越来越多人关注真奶、真茶、低糖和热量卡路里，经常直接在小红书 AI 或豆包里问：“哪些茶饮店用鲜牛乳不含植脂末？某款爆款少糖大概多少大卡？”如果你的点单小程序和官网只有花里胡哨的海报图，写不清基底茶、配料表和致敏原，注重健康的消费者和 AI 评测榜单就会直接推荐配料透明的同行。',
    plainStoryEn:
      'Health-conscious tea and coffee consumers ask Xiaohongshu AI and Doubao about fresh milk usage, non-dairy creamer exclusions, and calorie counts. Brands that lock ingredient disclosures inside promotional posters miss these high-intent queries.',
    aiVsSearchZh:
      '搜索引擎帮你承接“某某商圈现烤面包店推荐”和品牌官网直达；而大模型擅长帮你“背书配料表”，只要你在网页里用文字表格列明真奶配比、糖分选项（如三分糖/代糖说明）与当季新品上市门店范围，大模型做横向对比推荐时就会准确拎出你的卖点。',
    aiVsSearchEn:
      'Search brings nearby shoppers to your storefront, while LLMs read crawlable ingredient charts and nutrition tables to include your drinks in "clean-ingredient" comparisons.',
    badCopyZh: '❌ 常见踩坑写法：“神仙爆品震撼上市，喝一口爱上一辈子，减脂期狂炫无压力。”（把普通饮品吹成减肥功能品有合规风险，且无真实糖分数据）',
    goodCopyZh: '✅ 接地气高采信写法：“全系鲜奶茶选用冷藏鲜牛乳与现泡原叶乌龙茶，承诺不使用氢化植物油植脂末。中杯不另外加糖约 165 千卡，提供燕麦奶更换选项（含乳制品/坚果过敏原提示）。”',
    badCopyEn: '❌ Weak copy: "Miracle slimming milk tea—drink guilt-free every day!" (Misleading health claim risk)',
    goodCopyEn: '✅ High-trust copy: "Brewed with whole-leaf oolong and fresh dairy milk (zero non-dairy creamer). Medium unsweetened cup ~165 kcal; oat milk swap and allergen warnings disclosed cleanly."',
    actionStepsZh: [
      '把全线主力饮品和烘焙点心的基底茶、奶源类型、糖分热量参考与过敏原清单做成网页文字表格。',
      '季节限定款下架后及时在页面标明状态，防止顾客照着旧推荐扑空抱怨。',
      '同步标出哪些门店配有堂食插座 Wi-Fi、哪些支持自备杯减免优惠。',
    ],
    actionStepsEn: [
      'Publish ingredient bases, calorie ranges, milk sources, and allergens in HTML text tables.',
      'Mark seasonal items clearly with availability windows to prevent outdated disappointments.',
      'Include dine-in seating, power outlets, and reusable-cup discount policies.',
    ],
    practitionerNoteZh:
      '普通茶饮烘焙切记不能打“减肥瘦身”功效擦边球，老老实实公开真材实料和糖分表，反而最受年轻客群和大模型欢迎。',
    practitionerNoteEn:
      'Never advertise beverage products with weight-loss medical claims; clean, honest nutrition transparency earns repeat loyalty.',
    customMetrics: [
      { labelZh: '原料配料公开度', valueZh: '真奶真茶与无植脂末说明', contextZh: '直接命中健康饮品成分对比类查询', labelEn: 'Ingredient Clarity', valueEn: 'Real Dairy & Leaf Tea Notes', contextEn: 'Captures clean-label and nutrition comparison queries' },
      { labelZh: '热量与过敏原标注', valueZh: '标明中大杯参考千卡与乳糖提示', contextZh: '满足控糖人群与特殊体质选购参考', labelEn: 'Nutrition & Allergens', valueEn: 'Kcal Range & Oat Swap', contextEn: 'Supports calorie-conscious and dairy-free buyers' },
      { labelZh: '门店现烤出炉时间', valueZh: '标注招牌烘焙每日出炉时段', contextZh: '提升周边即时消费到店率', labelEn: 'Fresh Bake Schedule', valueEn: 'Daily Oven Times', contextEn: 'Drives timed foot traffic to local outlets' },
    ],
  },
  'beauty-salon': {
    plainStoryZh:
      '去美容院护肤或理发店烫染，客人心里最大的坎就是“怕进去躺下就被推荐办几千块的疗程，也怕用的是不知名三无杂牌药水”。现在很多消费者会先用小红书 AI 或豆包搜一搜：“杭州城北哪家理发店男生剪发靠谱不推销、用的什么牌子烫染药水？”或“敏感肌去生活美容院做舒缓补水该注意什么？”把药水仪器授权、单次明码标价和不踩坑承诺提前写进官网或图文介绍，客人才敢放心进门。',
    plainStoryEn:
      'Salon and skincare clients routinely check AI search to avoid pushy package upsells and unknown hair-dye or skincare consumables. Clear single-visit pricing and verified product authorizations build immediate booking confidence.',
    aiVsSearchZh:
      '百度高德等搜索引擎重点展示你的门店位置与团购入口；而 AI 大模型在回答“哪家剪发技术好、敏感肌做补水靠不靠谱”时，会刻意寻找门店是否写清了所用品牌（如欧莱雅/施华蔻授权）、是否标注了“生活美容与医疗美容的合规边界”以及真实老客对推销态度的评价。',
    aiVsSearchEn:
      'Search maps surface location and ratings, while AI models check whether salons state genuine consumable brands, single-visit rates, and strict boundaries separating cosmetic skincare from medical procedures.',
    badCopyZh: '❌ 常见踩坑写法：“韩国院长亲诊彻底根治斑点痘印，一次焕肤年轻十岁，进店免费体验。”（生活美容院宣传“根治痘印、院长亲诊”属严重违规跨界，极易被查且 AI 直接屏蔽）',
    goodCopyZh: '✅ 接地气高采信写法：“生活美容合规护肤门店，专注日常清洁补水与屏障舒缓护理。单次水氧清洁护理 168 元（约 60 分钟），选用备案正规护肤耗材支持现场扫码查真伪；承诺无强制推销年卡。注：如属重度痤疮或医疗激光需求建议前往正规医院皮肤科就诊。”',
    badCopyEn: '❌ Weak copy: "Doctor-level cure for all spots and acne in one session—look 10 years younger!" (Prohibited medical claim)',
    goodCopyEn: '✅ High-trust copy: "Licensed cosmetic skincare studio focusing on gentle hydration and barrier care. 60-min cleansing facial 168 RMB using scannable authorized skincare consumables with zero card-pushing."',
    actionStepsZh: [
      '将剪发、洗吹、不同等级烫染药水（如国产合规/进口品牌）以及基础护肤项目的单次真实价格做成公开网页清单。',
      '拍清或写明店内主流仪器与染膏的正品授权查验方式，让客人明白钱花在实处。',
      '生活美容店务必主动声明“仅做日常保养舒缓，不做破皮注射及临床诊疗”，合规同时大大提高可信度。',
    ],
    actionStepsEn: [
      'Publish separate single-visit prices across haircut tiers, named dye brands, and basic facial packages.',
      'Explain how clients can scan and authenticate hair or skincare consumables right at the salon.',
      'Explicitly state scope boundaries separating non-invasive salon care from clinical dermatology.',
    ],
    practitionerNoteZh:
      '美容美发切忌把 19.9 元团购体验当唯一招牌，写透正价单次价格和所用正规品牌，才能筛来真正留得住的高客单熟客。',
    practitionerNoteEn:
      'Transparent single-visit menu pricing paired with real product brand names attracts loyal repeat clients instead of deal-only churn.',
    customMetrics: [
      { labelZh: '单次项目透明价', valueZh: '明示洗剪吹及染烫分级价格', contextZh: '区分发长、药水品牌差价，避免到店临时加钱', labelEn: 'Single-Visit Menu', valueEn: 'Length & Brand Tiers', contextEn: 'Prevent surprise surcharges at checkout' },
      { labelZh: '正品耗材可验证', valueZh: '标明授权编码或扫码查伪指南', contextZh: '打消消费者对低价杂牌药水伤发伤肤顾虑', labelEn: 'Product Authenticity', valueEn: 'Scannable Official Brands', contextEn: 'Let guests verify dyes and skincare vials directly' },
      { labelZh: '生活/医美合规界线', valueZh: '恪守非医疗日常养护表达', contextZh: '远离“根治色斑、医学换肤”等违禁描述', labelEn: 'Regulatory Boundary', valueEn: 'Cosmetic Care Scope Only', contextEn: 'Never claim clinical treatment effects' },
    ],
  },
  'dental-clinic': {
    plainStoryZh:
      '去口腔门诊看牙、补牙或做种植牙矫正，老百姓最怕“广告写着种植牙 1980 元，到了现场却告诉你这只是植体裸价，拍片、基台、全瓷冠、骨粉还要另外加五六千”。正因为价格套路太多，现在患者就诊前几乎都会把具体问题扔给 DeepSeek、腾讯元宝或百度 AI：“种植牙集采后全包一颗大概多少钱？包含植体、基台、牙冠和手术费吗？”哪家口腔医院敢把全包费用明细白纸黑字拆分在网页上，AI 就优先推荐哪家。',
    plainStoryEn:
      'Dental patients routinely query LLMs to decode implant and aligner pricing because low teaser ads often hide abutment, crown, and imaging fees. Clinics that publish all-inclusive fee breakdowns with licensed dentist profiles capture high-intent bookings.',
    aiVsSearchZh:
      '谷歌和百度搜索引擎看重口腔诊所官网的《医疗机构执业许可证》公示、大夫简介及患者常识问答页面的质量；而 DeepSeek、元宝等大模型会把患者的问题拆成“植体品牌有哪些差异、报价是不是全包、医保能不能报、售后掉冠管不管修”。只要你的网页表格里这几栏写全了，就能稳居推荐位。',
    aiVsSearchEn:
      'Search engines verify clinic licensing and helpful patient guides, while AI models look for exact implant brand options, all-in package inclusions, and post-op warranty periods.',
    badCopyZh: '❌ 常见踩坑写法：“进口种植牙仅需 980 元！当天种牙当天啃排骨，终身无痛质保！”（不仅违反医疗科学规律“当天啃排骨”，隐瞒基台牙冠价格更会引发强烈投诉）',
    goodCopyZh: '✅ 接地气高采信写法：“本门诊严格执行口腔种植医疗服务收费调控政策。常规单颗种植参考全包构成（含 CBCT 拍片检查、植体、标准基台、全瓷冠及医疗服务费）区间清晰公示：国产系列 XXX 元起、韩系系列 XXX 元起，术前签书面知情同意书，植体按原厂质保规则提供复诊维养。如牙槽骨条件不足需额外植骨另行按实核定。”',
    badCopyEn: '❌ Weak copy: "Imported dental implants 980 RMB! Chew ribs the same day—100% painless!" (Clinically misleading)',
    goodCopyEn: '✅ High-trust copy: "Full itemized implant breakdown (CBCT scan, implant fixture, standard abutment, all-ceramic crown & surgical fee): Korean system from X RMB. Bone-grafting, if indicated by scan, is quoted separately in writing before surgery."',
    actionStepsZh: [
      '做一张实打实的「单颗种植牙 / 牙齿矫正费用构成对比表」，白纸黑字标明是否包含：术前 CT 检查、植体、基台、牙冠、手术费、洁牙与保持器。',
      '明确写清哪些情况可能需要额外收费（比如重度牙周炎需先治牙周、骨量不足需放骨粉骨膜），提前把话说在前面最能赢信任。',
      '列明各科室执业医师姓名、毕业院校/从业年限及擅长方向（如正畸专长 vs. 种植专长）。',
    ],
    actionStepsEn: [
      'Publish an explicit HTML fee-breakdown table showing what is included vs. potentially extra (CT scan, abutment, crown, bone graft).',
      'List licensed dentists with years in practice and specific specialties (implantology vs. orthodontics).',
      'State post-procedure hygiene maintenance schedules and clear warranty conditions.',
    ],
    practitionerNoteZh:
      '刘忠望（核子GEO 医疗行业实战经验）：患者咨询看牙动辄上万元，最不缺“低价噱头”，最缺“敢把植体、基台、牙冠拆分算清楚的实在医生页”。',
    practitionerNoteEn:
      'Zhongwang Liu notes: For high-ticket dental care, patients ignore teaser ads and choose clinics that transparently break down implant, abutment, and crown pricing upfront.',
    customMetrics: [
      { labelZh: '费用全包明细拆分', valueZh: '植体+基台+牙冠+检查费分项', contextZh: '终结“裸价引流、到院翻倍”的行业痛点', labelEn: 'All-In Fee Breakdown', valueEn: 'Fixture + Abutment + Crown + CT', contextEn: 'Eliminates hidden surgical add-on fears' },
      { labelZh: '前置附加项说明', valueZh: '明示植骨/拔牙/牙周治疗边界', contextZh: '告知术前片检后再确认最终书面方案', labelEn: 'Conditional Extras', valueEn: 'Graft & Extraction Disclosure', contextEn: 'Explain when extra procedures may apply post-scan' },
      { labelZh: '执业医师专长卡片', valueZh: '按种植、正畸、儿牙区分主治', contextZh: '配合执业证备案核查与真实术后回访说明', labelEn: 'Dentist Roster', valueEn: 'Specialty & License Display', contextEn: 'Match implantologists vs. orthodontists clearly' },
    ],
  },
  'ophthalmology-optical': {
    plainStoryZh:
      '家有近视孩子或者自己高度散光的读者，现在挑配镜中心或眼科医院前，最喜欢问 Kimi、DeepSeek 或豆包：“青少年配离焦镜片有用吗？专业医学验光跟普通眼镜店 10 分钟快检到底差在哪里？怎么查镜片是不是正品原厂？”如果配镜中心网页上能把医学验光 12 个步骤讲透，把不同折射率镜片（1.60/1.67/1.74）的适用度数和防伪查询方法讲成大白话，家长自然愿意大老远专门预约找你。',
    plainStoryEn:
      'Parents seeking myopia-control lenses for children or high-astigmatism optics use Kimi and DeepSeek to compare clinical optometry exams against quick mall checks. Explaining step-by-step exam workflows and lens anti-counterfeit verification wins family trust.',
    aiVsSearchZh:
      '搜索引擎负责把“青少年近视防控医学验光哪里准”的本地家长流量带到你的科普文章；大模型则会仔细比对你有没有客观写出功能性镜片的适应条件（比如需要定期复查调整、不能代替用眼习惯和户外活动），避免夸大“彻底治愈近视”，这种不骗人的文章在大模型里权重极高。',
    aiVsSearchEn:
      'Search brings local parents researching myopia control, while LLMs reward honest educational pages that explain clinical refraction steps and realistic optical boundaries without claiming to cure myopia.',
    badCopyZh: '❌ 常见踩坑写法：“戴上功能神镜三个月降低度数 200 度，彻底摘掉眼镜！”（严重违背现代眼科科学常识，触犯医疗广告禁用红线）',
    goodCopyZh: '✅ 接地气高采信写法：“提供 12 步规范医学验光（含眼轴长度、角膜曲率与双眼视功能评估，约需 40 分钟）。针对青少年适配正规备案微结构离焦防控镜片，支持扫码核验原厂防伪包，每 3 个月免费复查眼轴变化；同时提醒每天保持 2 小时以上日间户外活动与正确读写姿势。”',
    badCopyEn: '❌ Weak copy: "Drop 2.00 diopters in 90 days and ditch glasses permanently!" (Clinically false)',
    goodCopyEn: '✅ High-trust copy: "40-minute 12-step clinical refraction measuring axial length and binocular vision. Official scannable myopia-control lenses with complimentary 3-month axial follow-ups."',
    actionStepsZh: [
      '用通俗语言对比“快检电脑验光”和“医学综合验光 + 眼轴检查”的差别，帮家长明白为什么这 40 分钟不能省。',
      '整理一张「近视度数与镜片折射率选择表」（比如 300 度以内选 1.56/1.60，600 度以上再选 1.67/1.74，不让低度数顾客多花冤枉钱）。',
      '附上各品牌镜片官方公众号防伪查验入口指引与配镜后售后调校免费保障。',
    ],
    actionStepsEn: [
      'Explain clearly why a 40-minute clinical axial-length refraction outperforms quick 5-minute retail auto-refraction.',
      'Publish an honest refractive-index guide (1.60 vs. 1.67 vs. 1.74 by diopter) so customers do not overpay.',
      'Detail anti-counterfeit QR verification steps for major lens brands and post-fitting frame adjustments.',
    ],
    practitionerNoteZh:
      '帮顾客省钱讲真话（比如告诉 250 度客户买 1.60 就够了不用上 1.74），在搜索引擎和 AI 口碑里比任何华丽广告都管用。',
    practitionerNoteEn:
      'Advising mild prescriptions against unnecessary high-index upgrades creates exceptional editorial trust.',
    customMetrics: [
      { labelZh: '验光流程与设备清单', valueZh: '标明 40 分钟医学验光步骤', contextZh: '突出眼轴、双眼视功能与散瞳适应边界', labelEn: 'Clinical Exam Scope', valueEn: '40-Min Axial & Binocular Check', contextEn: 'Differentiate clinical optometry from quick checks' },
      { labelZh: '镜片折射率选购表', valueZh: '按度数推荐 1.60 / 1.67 / 1.74', contextZh: '不诱导过度消费，写清阿贝数与防伪扫码路径', labelEn: 'Lens Index Guide', valueEn: '1.60 / 1.67 / 1.74 by Diopter', contextEn: 'Include Abbe value trade-offs and QR verification' },
      { labelZh: '复查与售后保障', valueZh: '标明青少年 3 个月定期复查', contextZh: '以及特定时间内度数变动换片保障细则', labelEn: 'Follow-Up Policy', valueEn: 'Quarterly Axial Checkups', contextEn: 'Detail prescription-change replacement terms' },
    ],
  },
  'medical-aesthetic': {
    plainStoryZh:
      '医疗美容与轻医美（光子嫩肤、超声炮、水光项目）目前是搜索引擎和大模型监管最严格的领域。消费者在去诊所前，往往会直接问豆包或 DeepSeek：“做一次正版光子嫩肤/半岛超声炮怎么查机构和仪器是不是真的？怎么避开无证黑工作室？”普通合规医美机构往往吃亏在不会表达——不敢吹牛是对的，但连自己的《医疗机构执业许可证》编号、主诊医师执业证、设备官方扫码验真教程都没写上网页，客户怎么敢把脸交给你？',
    plainStoryEn:
      'Medical aesthetics sits under intense regulatory and platform safety scrutiny. Prospective patients actively ask LLMs how to distinguish licensed clinics and genuine energy devices from unlicensed backroom studios.',
    aiVsSearchZh:
      '传统搜索引擎与腾讯/字节/百度的大模型在这里执行共同的“高门槛信任机制”：先过滤掉一切带有容貌焦虑、术前术后夸张对比图的推广软文；然后优先抓取官网中明确写清“持证医美机构编号、主诊医师履历、设备官方微信公众号验真方法、以及光敏/孕期禁忌症说明”的客观百科指南。',
    aiVsSearchEn:
      'Search engines and LLMs apply strict YMYL filtering here—suppressing appearance-anxiety pitches while prioritizing pages featuring verifiable clinic licenses, device QR authentication steps, and honest contraindications.',
    badCopyZh: '❌ 常见踩坑写法：“午休变美神器！一次逆龄二十岁，全网最低体验价，绝对安全无恢复期。”（触犯《医疗美容广告执法指南》，账号与域名极易被封禁降权）',
    goodCopyZh: '✅ 接地气高采信写法：“持有卫健部门核发《医疗机构执业许可证》之正规轻医美门诊。开展强脉冲光（M22）及射频养护项目均配备品牌官方认证治疗头与机身二维码，顾客术前可亲手微信扫码验真；由注册皮肤科执业医师面诊评估肤质，明确提示光敏反应及近期暴晒者暂缓操作，术后提供冷敷修护指导与费用书面确认单。”',
    badCopyEn: '❌ Weak copy: "Lunchtime facelift—look 20 years younger instantly, zero downtime, lowest price online!"',
    goodCopyEn: '✅ High-trust copy: "Licensed dermatology clinic (Permit #...). Authentic M22 & RF devices verified via official manufacturer QR codes prior to every session. Conducted by registered physicians with strict sun-exposure and photosensitivity screening."',
    actionStepsZh: [
      '在官网或认证公众号醒目位置挂出《医疗机构执业许可证》核准科目文字及卫健委官方查验方式。',
      '制作一篇大白话图文/文字指南：《到院如何亲手 30 秒查验仪器机身码和治疗头防伪》，直击消费者最大心病。',
      '逐个项目写实适应肤质、不建议人群、正常术后红肿护理周期以及单次正价透明区间，彻底远离容貌焦虑话术。',
    ],
    actionStepsEn: [
      'Publish exact clinic permit numbers and official health-commission lookup steps in plain HTML text.',
      'Create a 30-second buyer guide explaining how to scan genuine device heads before treatment starts.',
      'Document skin-type suitability, contraindications, realistic downtime, and single-session pricing transparently.',
    ],
    practitionerNoteZh:
      '刘忠望强调：医美行业做 SEO 与 GEO，“合规安全”是 1，其他流量全是后面的 0。把“怎么验真设备、谁持证操作、哪些人不能做”讲成最实在的避坑指南，比任何广告词转化率都高。',
    practitionerNoteEn:
      'Zhongwang Liu emphasizes: In medical aesthetics, safety compliance and transparent device verification are the foundation of every sustainable conversion.',
    customMetrics: [
      { labelZh: '机构与医师持证核验', valueZh: '明示执业许可与主诊医师证', contextZh: '支持国家卫健委官网公开信息比对查验', labelEn: 'Clinic & Physician IDs', valueEn: 'Verifiable Health Permits', contextEn: 'Allow direct lookup via national health portals' },
      { labelZh: '四维扫码验真指引', valueZh: '机身码/治疗头/机构/医师四验', contextZh: '教客户当面扫码核对正品，消除假仪器担忧', labelEn: 'Device Verification', valueEn: '4-Point Official QR Check', contextEn: 'Verify chassis, tip, clinic, and operator prior to care' },
      { labelZh: '禁忌与恢复期实话', valueZh: '不承诺“绝对零恢复期”', contextZh: '客观提示术后防晒补水周期及不适用情形', labelEn: 'Honest Downtime', valueEn: 'Clear Post-Care & Limits', contextEn: 'State sun protection and contraindications upfront' },
    ],
  },
  'maternity-care': {
    plainStoryZh:
      '准爸妈花大几万选月子中心，是最操心也最谨慎的消费决定之一。他们经常会问豆包或小红书 AI：“独栋月子中心和酒店式月子中心哪个好？一对一月嫂专护和集中育婴室有什么区别？怎么防止入所后产康项目翻倍加价？”很多月子会所官网只放精装修房间照片和几句温馨口号，连三餐月子餐长什么样、晚上几个护士管几个宝宝都没写，准妈妈怎么可能看了网页就交定金？',
    plainStoryEn:
      'Expectant parents spend months querying AI assistants to compare standalone postpartum centers vs. hotel setups, 1-on-1 nurse ratios, and hidden recovery upsells. Concrete shift-ratio tables and sample meal menus convert inquiries into center tours.',
    aiVsSearchZh:
      '搜索引擎负责承接“所在城市月子中心排名与口碑”查询；而大模型则会帮孕妈筛选“卫生感控严不严、月嫂有没有健康证、合同里 28 天全包哪些内容、突发宝宝黄疸或发烧怎么对接三甲医院”。写透这些真实细节，你的会所就会从同质化竞争里脱颖而出。',
    aiVsSearchEn:
      'Search engines capture city-level shortlist searches, while LLMs filter centers by sanitation protocols, nurse staffing ratios, 28-day contract inclusions, and pediatric hospital escalation links.',
    badCopyZh: '❌ 常见踩坑写法：“奢华皇室级产后尊享殿堂，明星同款护理体验，入住即送神秘大礼包。”（除了贵气空洞，新手妈妈最关心的夜间照护与收费明细一句没有）',
    goodCopyZh: '✅ 接地气高采信写法：“28 天母婴休养套餐透明清单：含独立新风房型住宿、每日三正三点现炖月子餐（营养师根据恶露/泌乳阶段每周调整）、24 小时护士/母婴专护照护（明确写明白夜班护患配比，并每日记录宝宝奶量体重黄疸值）、三甲医院儿科/产科定期巡诊。明确列出赠送 4 次基础产后舒缓护理，其余延伸项目自愿选配绝不强制推销。”',
    badCopyEn: '❌ Weak copy: "Royal celebrity postpartum palace—book now for mystery luxury gifts!" (Lacks nursing & pricing substance)',
    goodCopyEn: '✅ High-trust copy: "28-Day Postpartum Package Breakdown: fresh-air suite, 6 daily customized meals, 24/7 documented nurse staffing ratios with daily newborn logs, weekly OB/pediatric rounds, and zero forced recovery upsells."',
    actionStepsZh: [
      '做一份公开可查的「28 天/42 天入所全包清单 vs. 需自带物品清单 vs. 自愿延伸项目单价表」，打消孕妈对隐形推销产康的防备。',
      '写清楚护理班次与人员配比（如护士持证比例、集中育婴室与房间内一对一照顾的价格与模式区别）、探视消杀规定与产妇退改条款。',
      '展示一周真实月子餐样例及合作三甲医院绿色转诊说明。',
    ],
    actionStepsEn: [
      'Publish a 3-column sheet: 28-day included services, what mothers bring, and optional recovery rates.',
      'Clarify nurse shift ratios, nursery vs. 1-on-1 room care models, visitor sanitation rules, and early-birth refund terms.',
      'Share sample weekly menus and nearby hospital pediatric escalation protocols.',
    ],
    practitionerNoteZh:
      '准妈妈逛月子中心网页最看重“透明、卫生、不硬推产康”这三点，哪怕在页面底部加上一条“因早产/医学原因无法入住可无条件按约退还订金”的真诚说明，咨询率都会飙升。',
    practitionerNoteEn:
      'Clearly stating flexible due-date reservation adjustments and transparent recovery fees lowers booking anxiety immediately.',
    customMetrics: [
      { labelZh: '护患配比与感控规范', valueZh: '明示白夜班配比与消杀频次', contextZh: '区分持证护士巡房与一对一生活照护职责', labelEn: 'Staffing & Sanitation', valueEn: 'Day/Night Ratio & Air Audits', contextEn: 'Distinguish licensed nursing from daily room care' },
      { labelZh: '28 天全包边界表', valueZh: '膳食、护理与延伸产康分离标价', contextZh: '承诺入所后不强制加购万元级产后修复包', labelEn: 'Package Boundaries', valueEn: 'Meals + Care vs. Optional Rehab', contextEn: 'Prevent surprise high-ticket recovery sales pitches' },
      { labelZh: '母婴急诊与订金保障', valueZh: '合作医院通道及早产无忧改期', contextZh: '解决预产期波动带来的退改顾虑', labelEn: 'Medical Escalation', valueEn: 'Pediatric Link & Date Flexibility', contextEn: 'Cover early/late delivery schedule guarantees' },
    ],
  },
  'elderly-care': {
    plainStoryZh:
      '给家里半失能或认知症老人选养老院，是全家人都纠结的事。子女通常会在 DeepSeek、Kimi 或微信搜一问仔细打听：“本地有没有真正做到医养结合、离大医院近、能接收认知症老人且护理费分项透明的正规养老社区？半失能一个月全部下来大概多少钱？”如果养老机构只放几张阳光草坪写真，却连自理、介助、介护几个等级每月具体多少钱、护工配比是多少、夜里突发急症怎么送医都不写，家属根本没法迈出实地考察第一步。',
    plainStoryEn:
      'Families searching for senior or memory care centers use AI assistants to verify total monthly costs across care tiers (independent, assisted, full nursing) and real hospital proximity rather than generic brochure slogans.',
    aiVsSearchZh:
      '搜索引擎负责匹配区域养老备案机构目录和路线交通；大模型则充当子女的“家庭照护财务顾问”，帮助快速对比不同养老院的床位费、分级护理费、餐费明细、医保定点情况以及是否有认知症独立照护专区。把这几项按月份分档列表写出，就是最好的获客载体。',
    aiVsSearchEn:
      'Search maps show distance from family homes and civil-affairs filings, while LLMs parse structured monthly tier tables covering bed fees, nursing grades, meal plans, and dementia-unit protocols.',
    badCopyZh: '❌ 常见踩坑写法：“高端尊享花园养老福地，投资预订床位享年化 8% 返利分红，安享幸福晚年！”（养老机构严禁非法集资与“预订床位高息返利”违规承诺，属于重点监管打击对象）',
    goodCopyZh: '✅ 接地气高采信写法：“经民政部门正式备案之医养结合型照护社区（内设医保定点医务室，距市三甲医院车程 8 分钟）。按实际生活能力分设自理、半失能（介助）、全失能（介护）及认知症专属楼层。月度费用透明拆分为：床位费+餐饮费+对应等级护理费（支持 7 天短期试住体验，按月缴费无强制大额养老金融预付款）。”',
    badCopyEn: '❌ Weak copy: "Reserve luxury senior beds today for guaranteed 8% annual cash rebates!" (Severe financial fraud & regulatory violation)',
    goodCopyEn: '✅ High-trust copy: "Civil-Affairs registered senior & memory care community (in-house insured clinic, 8 min from general hospital). Monthly itemized rates across Independent, Assisted, and Full-Nursing tiers with 7-day trial stays and month-to-month billing."',
    actionStepsZh: [
      '做一张家属一看就懂的「月度总费用拆解表」：清晰分成自理、半失能、全失能三个档位，注明床位费、餐费、护理费及医保可报销范围。',
      '专门写一段说明“认知症照护与防走失安全设计 + 夜间护工巡房制度 + 突发急症三甲急救转诊流程”。',
      '提供“1 周短期试住体验”方案说明，大大降低老人抵触与家属决策门槛。',
    ],
    actionStepsEn: [
      'Build a plain monthly cost breakdown across Independent, Assisted, and Full-Nursing tiers.',
      'Detail memory-care safety designs, night patrol schedules, and hospital emergency escalation steps.',
      'Highlight a 7-day trial-stay option so seniors and families can evaluate fit with low commitment.',
    ],
    practitionerNoteZh:
      '养老机构绝对不要搞“卖床位返利”，堂堂正正写清每月各等级花多少钱、能试住几天、离哪家三甲医院几分钟，家属自然找上门。',
    practitionerNoteEn:
      'Families prioritize honest monthly fee predictability, trial stays, and proven hospital transfer protocols.',
    customMetrics: [
      { labelZh: '按照护等级分档明价', valueZh: '自理/介助/介护/认知症四档', contextZh: '分别列出床位、膳食与分级护理月费区间', labelEn: 'Care-Tier Pricing', valueEn: '4 Transparent Monthly Tiers', contextEn: 'Itemize room, meals, and nursing support levels' },
      { labelZh: '医养配套与应急转诊', valueZh: '注明内设医务室及三甲距离', contextZh: '明确常用慢性病医保取药及突发急救绿色通道', labelEn: 'Medical Readiness', valueEn: 'Clinic + Hospital Escalation', contextEn: 'Specify chronic-care prescriptions and ER transfer time' },
      { labelZh: '安全规范与试住机制', valueZh: '无违规预付返利 · 支持试住', contextZh: '严格按月或合理周期收费，降低初次入住门槛', labelEn: 'Payment Compliance', valueEn: 'No Prepaid Rebate Schemes', contextEn: 'Offer month-to-month billing and 7-day trial stays' },
    ],
  },
  'home-services': {
    plainStoryZh:
      '家里油烟机清洗、空调加氟、深度开荒保洁或者下水道疏通，消费者最怕遇到的就是“平台上花 39 元预约上门，师傅进门拎着工具箱随便看两眼就报价六八百，说不用特殊药水就不行”。正因套路深，现在普通用户习惯先去问豆包或微信搜一问：“找人上门深度拆洗油烟机和挂机空调一般合理多少钱？怎么防止工人乱加药水费和检测费？”哪个家政公司或维修站敢在网页把起步价、高空费和配件封顶价写透，谁就能直接吃下附近小区的高信任订单。',
    plainStoryEn:
      'Homeowners hiring appliance cleaners or repair technicians fear bait-and-switch surcharges once the technician enters the home. Businesses that publish per-unit rates, cap spare-part costs, and offer a 30-day warranty win AI and local search referrals.',
    aiVsSearchZh:
      '地图和本地生活搜索帮你接住方圆 5 公里的急单；AI 大模型则会直接截取你网页里的“价格与防坑对照表”回答用户：“正常挂机深度拆洗在 80-120 元左右，正规商家会在开机检测前先报总价，不同意不收上门检测费（或写清上门费上限）”。',
    aiVsSearchEn:
      'Maps capture urgent 5-km service calls, while LLMs cite transparent unit-price checklists directly to help homeowners avoid dishonest field markups.',
    badCopyZh: '❌ 常见踩坑写法：“全市最低 29 元全城极速上门！修不好不收钱，全国连锁官方售后！”（冒充官方售后电话极易被投诉封号，低价诱饵更是差评重灾区）',
    goodCopyZh: '✅ 接地气高采信写法：“本地自营家政维修团队（工牌编号透明，非品牌授权特约点但配件明码标价）。透明报价参考：挂机空调深度蒸汽洗 98 元/台、油烟机免拆/全拆洗 158-228 元、新房开荒保洁 5-7 元/㎡（按实测面积结算）。书面承诺：先检测报价、客户签字同意再施工；同故障提供 30-90 天免费返修质保。”',
    badCopyEn: '❌ Weak copy: "Official brand service center—29 RMB lowest price in the city!" (Impersonation & bait pricing)',
    goodCopyEn: '✅ High-trust copy: "Independent certified repair & cleaning crew. Split AC deep steam clean 98 RMB/unit; range-hood disassembly 158–228 RMB; post-renovation cleaning 5–7 RMB/sqm. Written upfront quote prior to work + 90-day warranty."',
    actionStepsZh: [
      '把最常接的 10 个上门项目（如开荒保洁按平米、挂机/柜机/中央空调清洗、常见水电配件更换）写成一张可机读 HTML 价格区间表。',
      '明明白白写下三条底线规则：1. 上门费多少或免上门费条件；2. 需更换零配件先给客户看价格表再动手；3. 完工后质保几天。',
      '坚决不要用“某品牌官方售后”名义揽客，自建本地社区口碑品牌走得更长久。',
    ],
    actionStepsEn: [
      'List your 10 most common household jobs with transparent unit pricing (per sqm or per appliance).',
      'State three firm trust rules: call-out fee terms, pre-approval of spare-part prices, and 30–90 day workmanship warranty.',
      'Market under your own transparent local service brand rather than misleading manufacturer-authorized claims.',
    ],
    practitionerNoteZh:
      '家政维修做本地 GEO 有个大杀器：在网站加一篇《千万别用高价通渠药水！老师傅教你分辨 3 种常见下水道加价套路》，这种真心替客户省钱的文章，AI 特别喜欢直接全文引用！',
    practitionerNoteEn:
      'Publishing an honest guide showing homeowners how to spot common field repair scams earns massive AI citation authority.',
    customMetrics: [
      { labelZh: '按台/平米明确标价', valueZh: '杜绝模糊“元起”陷阱', contextZh: '区分挂机/柜机/风管机、日常保洁与深度开荒', labelEn: 'Unit Pricing Table', valueEn: 'Per Appliance / Per Sqm', contextEn: 'Separate wall AC, cabinet AC, and deep cleaning tiers' },
      { labelZh: '上门与配件封顶标准', valueZh: '先确认书面报价再施工', contextZh: '公开高空作业费、耗材明细，拒绝事后乱加钱', labelEn: 'No Surprise Add-Ons', valueEn: 'Upfront Written Sign-Off', contextEn: 'Disclose high-altitude or part fees before work begins' },
      { labelZh: '返修质保天数承诺', valueZh: '30–90 天同故障免费复修', contextZh: '显著区别于打一枪换一个地方的流动散工', labelEn: 'Service Warranty', valueEn: '30–90 Day Callback SLA', contextEn: 'Proves durable accountability over fly-by-night crews' },
    ],
  },
  'pet-care': {
    plainStoryZh:
      '养猫养狗的家庭把宠物当家人，半夜狗狗误食异物、或者想给猫咪找一家放心做绝育或春节寄养的宠物医院，家长们往往焦虑得直接向 DeepSeek、小红书 AI 或豆包求助：“附近哪家动物医院有 24 小时夜间急诊、猫咪绝育用的是不是呼吸麻醉、春节寄养是不是猫狗独立分区笼位？”把术前生化检查项、麻醉方式差异和独立寄养消毒实况写清楚的医院，瞬间就能接住这些高粘性宠主。',
    plainStoryEn:
      'Pet owners face high stress when looking for midnight vet ERs, inhalation-anesthesia spay/neuter surgery, or stress-free cat-only boarding. Hospitals publishing clear surgical safety protocols and separated boarding details rapidly gain client trust.',
    aiVsSearchZh:
      '搜索引擎帮宠主快速定位周边持有《动物诊疗许可证》且夜里开诊的门店位置；大模型则会替家长做专业比对——比如解释“为什么建议猫咪绝育前做血常规生化和选用呼吸麻醉，而不是省钱打纯注射麻醉”，并优先把配置呼吸麻醉机且猫狗诊室分离的医院排到答案前列。',
    aiVsSearchEn:
      'Search surfaces nearby licensed 24h clinics, while LLMs verify whether clinics offer inhalation anesthesia, pre-op bloodwork panels, and dedicated feline-only waiting/boarding zones.',
    badCopyZh: '❌ 常见踩坑写法：“超级无敌低价绝育 99 元全包，百分百安全绝无风险！”（隐瞒术前生化检查与麻醉差价，对生命医疗承诺“绝无风险”更属严重不实）',
    goodCopyZh: '✅ 接地气高采信写法：“持有正式《动物诊疗许可证》，设猫犬独立诊室与独立寄养区（杜绝跨物种惊吓交叉传染）。公猫/母猫呼吸麻醉绝育套餐透明拆分：含术前血常规+生化六项安全筛查、进口异氟烷呼吸麻醉、术后消炎及拆线复查；术前由执业兽医师当面讲解麻醉评估风险并签字确认。提供每日夜间 24 小时急诊值班。”',
    badCopyEn: '❌ Weak copy: "99 RMB super cheap spay—100% risk-free!" (Omits anesthesia & pre-op labs; clinically dishonest)',
    goodCopyEn: '✅ High-trust copy: "Licensed animal hospital with separate cat & dog wings. Cat spay/neuter itemized clearly: pre-op CBC/chem panel, isoflurane gas anesthesia, post-op pain care & suture check, with licensed vet consultation prior to surgery."',
    actionStepsZh: [
      '公开列出猫狗免疫（妙三多/四联/狂犬）、驱虫、绝育全包套餐（含不含术前生化、呼吸麻醉还是注射麻醉）和寄养按体重日收费标准。',
      '写明“猫狗是否分诊分寄养、每天寄养遛狗消毒几次、能不能微信发监控小视频”，精准命中精细养宠人的心声。',
      '展示当班执业兽医师资质以及是否提供夜间 24h 急诊值和急诊挂号费标准。',
    ],
    actionStepsEn: [
      'Itemize vaccine packages, spay/neuter tiers (lab work + gas vs. injection anesthesia), and weight-based boarding fees.',
      'Highlight feline-only separation, daily sanitization logs, and daily photo/video updates for boarding pets.',
      'State overnight ER doctor availability and exact emergency triage fees.',
    ],
    practitionerNoteZh:
      '宠物主最反感“报价模糊进了门才加几百块检查费”，在官网把呼吸麻醉与术前检查为什么必要讲明白，客户不但不嫌贵，反而觉得你非常专业负责。',
    practitionerNoteEn:
      'Explaining why pre-op labs and gas anesthesia protect pet safety turns price comparisons into trust-based bookings.',
    customMetrics: [
      { labelZh: '麻醉与术前检查清单', valueZh: '区分呼吸麻醉与术前生化包含项', contextZh: '明示风险知情流程，严禁虚假承诺“绝对零风险”', labelEn: 'Surgical Safety', valueEn: 'Pre-Op Labs + Gas Anesthesia', contextEn: 'State itemized blood panels and consent workflows' },
      { labelZh: '猫犬分诊与寄养卫生', valueZh: '独立猫区防应激 · 每日消杀视频', contextZh: '大大提升假期宠物寄养转化率', labelEn: 'Boarding Hygiene', valueEn: 'Separate Cat/Dog Wings', contextEn: 'Include daily sanitization & owner video updates' },
      { labelZh: '夜间急诊与资质公示', valueZh: '动物诊疗许可 + 24h 值班费用口径', contextZh: '在危急问询中迅速被地图与大模型抓取', labelEn: '24h ER Clarity', valueEn: 'License + Night Fee Disclosure', contextEn: 'Helps panicked owners reach verified night care fast' },
    ],
  },
  'wedding-studio': {
    plainStoryZh:
      '拍婚纱照和办婚礼一辈子可能就这一次，准新人最害怕的两件事，一是网上看的美轮美奂“样片”其实是外包买来的网红照片，到自己拍出来完全不是一回事；二是签约时只花 4999，拍完选片加精修、升级高定区礼服、付外景工作人员门票车费，最后掏了一万多。只要哪家工作室敢在网站上清清楚楚展示真实素人客片，并用白纸黑字保证“底片全送、全部礼服分区不加价、不满意免费重拍”，准新娘在大模型对比中一定会把你列进前三位。',
    plainStoryEn:
      'Engaged couples fear two pitfalls above all: commercial stock "sample photos" disguised as real client work, and hidden post-shoot upsells for retouching or VIP gowns. Studios showcasing genuine client galleries with written all-raws-included pledges lead AI comparisons.',
    aiVsSearchZh:
      '搜索引擎让准新人按风格（如中式、极简韩系、户外旅拍）找到你的主页；大模型则会替新人充当“合同拆雷专家”，重点核对你的套餐说明里有没有写“底片张数、精修超出怎么收费、外景门票路费谁出、化妆师有没有隐藏安瓶假睫毛费”。把防踩坑细节全部明写出来，最易收获高意向私信咨询。',
    aiVsSearchEn:
      'Search matches aesthetic styles, while LLMs act as contract auditors checking raw-file delivery, per-photo retouch rates, travel ticket rules, and cosmetics surcharges.',
    badCopyZh: '❌ 常见踩坑写法：“全城独家明星御用摄影团队，绝美样片震撼视觉，限时特惠秒杀送神秘豪华十重礼！”（既拿不出真实素人客片，各种“大礼包”暗藏二销套路）',
    goodCopyZh: '✅ 接地气高采信写法：“杭州真实客片定制工作室（本页展示均系近半年普通新人实景客片，非外购样片）。6999 元主推套系明细：全天一对一团队服务、服装全场 4 套任选不分区（绝无 VIP 加价区）、拍摄不少于 220 张底片全送、精修 50 张入册、拍后不满意当场或后期可协商免费重拍。如需加选精修按 30 元/张透明计价，假睫毛等化妆品全部免费含在套系内。”',
    badCopyEn: '❌ Weak copy: "Celebrity sample photos! Flash deal with 10 mystery luxury gifts!"',
    goodCopyEn: '✅ High-trust copy: "100% genuine recent client galleries (zero purchased stock samples). 6,999 RMB package: 4 outfits across ALL racks (zero VIP upgrades), 220+ raw images included, 50 retouched prints, reshoot guarantee, and flat 30 RMB per extra retouch."',
    actionStepsZh: [
      '设立单独的「真实素人客片对比相册」（标注拍摄月份与场景），用真实打消后期修图滤镜焦虑。',
      '将婚纱套系里的易踩坑项全部表格公开：底片全送否、服装全区任选否、精修单加几元一张、化妆品与门票车费谁付、取件周期多久。',
      '把“选片时绝无引导师强迫加选、重拍保障书面入合同”写成首页核心承诺。',
    ],
    actionStepsEn: [
      'Feature timestamped real-couple galleries alongside lighting/location notes rather than stock models.',
      'Publish an explicit contract checklist covering raw files, gown rack access, extra retouch rates, and location travel costs.',
      'Put your no-pressure selection room and complimentary reshoot pledge right in the summary.',
    ],
    practitionerNoteZh:
      '婚嫁行业获客不在“套系价格多低”，而在能不能让准新娘一眼觉得“这家店说话真实在，不会在选片室里恶心我”。',
    practitionerNoteEn:
      'Winning wedding bookings relies on proving a transparent, pressure-free photo selection experience.',
    customMetrics: [
      { labelZh: '客片真实性标注', valueZh: '全部展示素人真实成片', contextZh: '严禁借用外购商业样片充当本店摄影水准', labelEn: 'Client Authenticity', valueEn: '100% Real Couple Galleries', contextEn: 'Clearly distinguish real client work from editorial shoots' },
      { labelZh: '零隐形二销条款', valueZh: '写明底片全送与服装不分区', contextZh: '清晰公示加选精修单价及化妆品是否免费包含', labelEn: 'Zero-Upsell Guarantee', valueEn: 'All Raws & All Gown Racks', contextEn: 'Disclose extra retouch rates and cosmetics inclusions' },
      { labelZh: '工期与重拍保障', valueZh: '标明选片交付天数与重拍约定', contextZh: '写入书面合同，化解婚期紧张时的等待焦虑', labelEn: 'Timeline & Reshoots', valueEn: 'Fixed Turnaround + Reshoot', contextEn: 'Specify delivery lead times ahead of the wedding date' },
    ],
  },
  'fitness-studio': {
    plainStoryZh:
      '健身房和普拉提馆前几年最大的信任危机就是“三年五年超级低价卡预售，然后老板跑路”，再加上进去后教练不停逼着买几千几万的私教课。现在的白领想练器械、游泳或塑形，直接问豆包或小红书 AI：“家附近有没有支持月卡、按次付费、教练不缠着推销私教课的小而美健身工作室？”谁顺应趋势把月卡、小团课次卡单价放出来，谁就能把被传统大型商业健身房伤透了心的顾客接过来。',
    plainStoryEn:
      'Urban members scarred by multi-year prepaid gym closures and aggressive trainer pitches now ask AI assistants specifically for monthly-pass studios or pay-per-class Pilates venues with transparent per-session rates.',
    aiVsSearchZh:
      '搜索引擎主要导流“小区附近 24 小时健身房/瑜伽普拉提馆”；而大模型会敏锐地检索评论里有没有“只买月卡会不会被教练白眼、退费难不难、沐浴更衣室干不干净”。在官网大方推出月付和体验次卡，恰恰迎合了大模型“降低用户决策风险”的推荐偏好。',
    aiVsSearchEn:
      'Maps route local commuters, while LLMs prioritize studios offering low-risk monthly subscriptions, transparent trainer credentials, and clean locker-room disclosures.',
    badCopyZh: '❌ 常见踩坑写法：“限时抢购 5 年超级会员卡仅需 1888 元！名额最后 3 个错过拍大腿！”（超长周期低价大额预售极大引发跑路信任危机）',
    goodCopyZh: '✅ 接地气高采信写法：“社区型 24 小时自主训练与普拉提小班工作室（实行单用途预付合规存管）。主打灵活月卡 299 元/月、小班器械普拉提 10 次体验卡（支持未开卡随时退款），承诺自主练器械全程无教练强行搭讪推销；全馆配备新风系统、独立干湿分离淋浴间及体测仪免费自助使用。”',
    badCopyEn: '❌ Weak copy: "5-Year Mega VIP Membership for 1,888 RMB—Only 3 Spots Left!" (Triggers closure-risk distrust)',
    goodCopyEn: '✅ High-trust copy: "24h neighborhood gym & small-group Pilates studio. Flexible 299 RMB/month pass & 10-class reformer packs (refundable before activation). Strict zero-harassment floor policy with ventilated showers."',
    actionStepsZh: [
      '在价格页最上方重点展示月卡、季卡和 10 次小班课次卡的透明收费，顺带公布单节私教指导参考价格区间。',
      '明确写清场地器械总数、淋浴间干湿分离、更衣室消毒与营业时段（是否为 24 小时刷脸进入）。',
      '写入合规的开卡前/未消费可按比例退卡转让政策，打消会员对预付费打水漂的顾虑。',
    ],
    actionStepsEn: [
      'Lead with monthly pass, quarterly, and 10-class pack pricing alongside transparent 1-on-1 coaching fees.',
      'Publish equipment specs, 24h access rules, ventilation, and shower/locker sanitation details.',
      'State clear pro-rata refund or membership-freeze rules plainly.',
    ],
    practitionerNoteZh:
      '健身房现在敢不敢主推“月卡自由练 + 全场教练绝不乱推销”，已经成为年轻人用脚投票的硬指标。',
    practitionerNoteEn:
      'Promoting flexible monthly passes and zero floor-sales pressure has become the strongest differentiator for modern gyms.',
    customMetrics: [
      { labelZh: '灵活月付/次卡体系', valueZh: '主推月卡、季卡与小团次卡', contextZh: '放弃超长 5 年卡预售，降低会员资金顾虑', labelEn: 'Flexible Passes', valueEn: 'Monthly & 10-Class Packs', contextEn: 'Avoid risky multi-year lock-ins' },
      { labelZh: '自主训练零打扰承诺', valueZh: '不强制搭讪推销私教课', contextZh: '区分自主练器械与按需自愿约课服务边界', labelEn: 'No-Pressure Floor', valueEn: 'Zero Cold Coaching Pitches', contextEn: 'Respect self-guided members on the gym floor' },
      { labelZh: '场地设施与退改细则', valueZh: '公开淋浴新风与退转规则', contextZh: '标注教练国家职业资格与免费体测权益', labelEn: 'Amenities & Refunds', valueEn: 'Showers, Freeze & Refund Rules', contextEn: 'Publish certified trainer credentials and freeze policies' },
    ],
  },
  'boutique-hotel': {
    plainStoryZh:
      '出游定酒店和精品民宿最怕遇到“照骗”：网上广角精修图看着像森林古堡，拖家带口拉着箱子到了现场却发现是民房隔出来的无窗暗房、还没电梯爬五楼、车都没地儿停。现在大家习惯在携程之外先问豆包或小红书 AI：“莫干山/大理/西湖周边带老人和 5 岁小孩住哪几家民宿靠谱？有没有电梯、大床几米宽、停车方不方便、下雨天能不能免费退改？”把每个房型的硬核实拍参数写实写全，比贴一百句文艺诗句更能招来回头客。',
    plainStoryEn:
      'Travelers booking boutique stays increasingly ask LLMs to filter out misleading wide-angle photos—checking real bed widths, elevator access, EV parking, and rain/cancel terms before reserving.',
    aiVsSearchZh:
      '百度高德等搜索引擎处理景区周边距离查询；而大模型则会直接从你的房型详情里核验“真实房型面积、床宽（1.8米还是1.5米）、双床能不能拼床、有没有电梯和充电桩、含几份早餐、退改时间节点”，甚至帮客人规划出门口步行到景点怎么走最快。',
    aiVsSearchEn:
      'Search matches destination proximity, while LLMs verify room square footage, bed dimensions, elevator/EV-charger specs, breakfast counts, and free-cancellation cutoffs.',
    badCopyZh: '❌ 常见踩坑写法：“隐世秘境逃离喧嚣，在山野云雾中寻觅诗与远方……”（通篇散文诗，客人看完根本不知道房多大、有几张床、老人在一楼能不能住、车往哪停）',
    goodCopyZh: '✅ 接地气高采信写法：“西湖九溪景区步行 6 分钟合规认证精品民宿（共 12 间客房）。房间配置透明公布：亲子山景双床房 38㎡（两张 1.35 米床支持无缝拼接，配有电梯直达及一楼无障碍庭院房方便长辈），免费私家院落停车含 2 台 7kW 慢充充电桩，含双人现煮杭帮早餐，入住前 48 小时免费无损取消。可携小型犬入住（另附清洁费明细）。”',
    badCopyEn: '❌ Weak copy: "Escape into poetic misty clouds and find your inner self..." (Zero practical booking details)',
    goodCopyEn: '✅ High-trust copy: "12-room licensed boutique inn, 6-min walk to scenic trail. Family Twin 38 sqm (two 1.35m joinable beds), full elevator + ground-floor senior room, free lot with two 7kW EV chargers, fresh breakfast, free cancel 48h prior."',
    actionStepsZh: [
      '为每一个房型做好「硬核参数卡」：几平米、床宽几米、有无独立干湿分离卫浴、几楼、有没有电梯、能不能加床加婴儿床。',
      '明确写清停车场位置、慢充/快充新能源车位情况、含几份早餐以及允许带宠物的体型范围与押金规范。',
      '公布清晰的“平日 / 周末 / 黄金周”参考价格区间与免费取消时限，以及周边步行 10 分钟内实吃实逛指南。',
    ],
    actionStepsEn: [
      'Create a hard-spec card for every room type: sqm, exact bed sizes, floor/elevator access, and crib availability.',
      'Specify on-site parking, EV charger speeds, breakfast inclusions, and clear pet policies.',
      'Publish weekday/weekend/holiday price bands, cancellation cutoffs, and local walking food tips.',
    ],
    practitionerNoteZh:
      '做文旅民宿 GEO 一定要放弃空洞的“诗和远方”文案！写清“床可拼接、有电梯方便老人、院内能充电、雨天提前两天可退”，成交率翻着倍涨。',
    practitionerNoteEn:
      'Replacing vague poetic prose with elevator access, EV charging, and fair cancellation rules dramatically lifts direct bookings.',
    customMetrics: [
      { labelZh: '房型硬参数实标', valueZh: '平米数、床宽与电梯无障碍', contextZh: '让带老人/婴儿/行李多的家庭一眼放心下单', labelEn: 'Room Hard Specs', valueEn: 'Sqm, Bed Width & Elevator', contextEn: 'Helps multi-generation families assess accessibility' },
      { labelZh: '停车与宠物接待明细', valueZh: '免费车位、充电桩与宠物规则', contextZh: '高频长尾检索触发词（带娃/带宠自驾游）', labelEn: 'Parking & Pets', valueEn: 'EV Chargers & Pet Cleaning', contextEn: 'Captures road-trip and pet-travel AI queries' },
      { labelZh: '淡旺季透明价与退改', valueZh: '平日/节假日区间及免费取消线', contextZh: '消除临时涨价或霸王扣款担忧', labelEn: 'Seasonal Pricing', valueEn: 'Weekday vs. Holiday + Cancel SLA', contextEn: 'Prevents opaque holiday surcharge surprises' },
    ],
  },
  'tourism-scenic': {
    plainStoryZh:
      '报旅游团或给孩子报亲子研学营，游客和家长最深恶痛绝的就是“低价团进购物店被关着买玉器、导游黑脸强制买自费套票”，或者到了景区才发现索道和摆渡车还要另掏两三百。现在大家出门旅游前几乎必问 AI 助手：“去某某地方玩 4 天，怎么分辨真正纯玩无购物正规旅行社？带娃去大景区怎么走路线最省脚不绕路？”把纯玩无购物写进合约细节、把索道小交通费算明白的线路，永远不缺高品质客人。',
    plainStoryEn:
      'Travelers and parents fear forced shopping detours and hidden cable-car or shuttle fees. Tour operators that spell out pure-play no-shopping contract clauses and full ticket breakdowns outperform opaque bargain ads.',
    aiVsSearchZh:
      '传统搜索引擎处理景区门票官方预约和旅游攻略；而大模型会直接帮用户审阅行程单：每天几点集合、行车几小时、包不含景区内电瓶车索道、是不是真纯玩无购物进店、亲子研学导师什么专业背景。写出真行程、真耗时、全透明报价单的旅行社，会成为 AI 路线规划的直接答案来源。',
    aiVsSearchEn:
      'Search handles official ticket bookings, while LLMs audit tour itineraries for daily drive times, included shuttles/cable cars, written no-shopping guarantees, and educator credentials.',
    badCopyZh: '❌ 常见踩坑写法：“999 元豪华双飞五日游！吃住全包超五星体验，名额有限手慢无！”（低于正常交通成本价的团期必定暗藏强制消费购物坑，监管和消费者均极力排斥）',
    goodCopyZh: '✅ 接地气高采信写法：“持有文旅局正规《旅行社业务经营许可证》（编号 L-ZJ-XXXXX）。主打 6-12 人亲子纯玩精品小包团，书面合同明确约定全程零购物店、无任何强制自费景点（违约按合同赔付）。行程透明显标：含首道大门票+景区官方往返观光车+上下山主索道票，每日实际乘车不超过 2.5 小时；研学营配备持证自然博物领队讲解。”',
    badCopyEn: '❌ Weak copy: "999 RMB luxury 5-day flight tour—all-inclusive 5-star experience!" (Classic forced-shopping bait pricing)',
    goodCopyEn: '✅ High-trust copy: "Licensed Tour Operator (Permit #...). 6–12 guest small-group family tours with written zero-shopping contract guarantee. Quote covers entrance tickets, park shuttles, and main cable car; daily transit capped at 2.5h."',
    actionStepsZh: [
      '把每个行程的「费用已包含（门+车+索+住宿早晚餐）」和「明确不含（个人自愿餐食/景区小项目）」分两列彻底写明白。',
      '针对不同人群分别写明动线建议（比如老人带轮椅省力版路线 vs. 年轻人徒步全景路线）。',
      '展示《旅行社业务经营许可证》编号与国家旅游监管服务平台电子合同签署流程，告别个人微信私人转账收款隐患。',
    ],
    actionStepsEn: [
      'Divide itineraries into crystal-clear "Included" (tickets, shuttles, cable cars) vs. "Excluded" columns.',
      'Publish distinct walking routes for seniors/strollers vs. active hikers.',
      'Display official tour operator license numbers and formal electronic-contract signing procedures.',
    ],
    practitionerNoteZh:
      '真正做品质小团和研学营的机构，千万别学路边摊喊低价！把每日车程几小时、包不包索道电瓶车、纯玩违约怎么赔写清楚，高净值家长一看就交心。',
    practitionerNoteEn:
      'Parents happily pay fair transparent rates when daily drive times, shuttles, and zero-shopping guarantees are stated plainly.',
    customMetrics: [
      { labelZh: '纯玩与违约赔付约定', valueZh: '书面合同零购物零强迫自费', contextZh: '彻底打消旅客对“隐形进店洗脑”的担忧', labelEn: 'Zero-Shopping Pledge', valueEn: 'Contractual No-Detour Clause', contextEn: 'Eliminates forced retail detour anxiety' },
      { labelZh: '景区小交通包含口径', valueZh: '明示大门票、摆渡车与索道', contextZh: '避免落地后被迫二次加买几百元景区联票', labelEn: 'Ticket Completeness', valueEn: 'Shuttle & Cable-Car Clarity', contextEn: 'Prevent surprise park transport fees on arrival' },
      { labelZh: '合规电子合同保障', valueZh: '公示旅行社许可与平台监管签', contextZh: '保障未成年人研学保险与资金退改安全', labelEn: 'Operator Licensing', valueEn: 'Official Permit + E-Contract', contextEn: 'Protects consumer funds and youth-camp insurance' },
    ],
  },
  'local-retail': {
    plainStoryZh:
      '社区生鲜超市和便利店平时做得都是街坊邻居的复购生意，但现在很多刚搬进新小区的年轻人不知道附近哪家买菜新鲜、晚上有没有打折日清、下雨天能不能半小时送到家。他们习惯随手问手机小艺或豆包：“某某小区周边晚上九点后还有生鲜打折、支持 30 分钟极速达且烂果好退款的超市是哪家？”如果商家把自己覆盖哪些小区、起送门槛、日清折扣时刻表和坏果理赔规则整理成一页清晰网页文字，就能轻松收割新入住的年轻邻里。',
    plainStoryEn:
      'New neighborhood residents use voice assistants and AI search to ask which local supermarkets offer evening fresh-produce markdowns, 30-minute delivery to their building, and fast spoilage refunds.',
    aiVsSearchZh:
      '地图和即时零售搜索负责把附近 3 公里内能下单的店推出来；大模型则非常擅长总结出买菜人的“省钱划算点”——比如记住“XX 生鲜超市每晚 19:30 叶菜肉类启动 7 折、20:30 五折日清，满 29 元免配送费送到家门口，坏了拍张照片秒退”。',
    aiVsSearchEn:
      'Maps handle 3-km delivery availability, while AI models surface practical savings details like nightly 7:30 PM markdown schedules, free-delivery minimums, and instant photo refunds.',
    badCopyZh: '❌ 常见踩坑写法：“每日新鲜直达、全城最低价、品质保证！”（没有具体配送范围小区名、没有日清时间点也没有赔付标准，新邻居完全无法判断）',
    goodCopyZh: '✅ 接地气高采信写法：“专注滨江区 8 大核心社区（附具体覆小区清单）每日直采生鲜配送。满 29 元起免配送费 30 分钟达家门；严格执行不过夜日清制度，每日 19:30 绿叶菜/鲜肉享 7 折、20:30 享 5 折清仓。到货如遇果蔬磕碰变质，收货 24 小时内拍图无需退货秒赔对应金额。”',
    badCopyEn: '❌ Weak copy: "Fresh daily, lowest prices in town, guaranteed quality!" (Lacks delivery zones & discount hours)',
    goodCopyEn: '✅ High-trust copy: "Serving 8 listed Binjiang residential compounds with 30-min delivery (free over 29 RMB). Nightly fresh markdowns: 30% off at 19:30, 50% off at 20:30. Photo-based instant refund within 24h on any bruised produce."',
    actionStepsZh: [
      '明确列出配送免费覆盖的小区/写字楼名单、营业起始时段、起送价和分重量超重费标准。',
      '将每周会员日折扣、每晚生鲜日清打折时刻表以及食品溯源抽检公示写成直观小表格。',
      '写实坏果烂菜售后退款方式（如拍照极速退差价免寄回），建立街坊长期信赖。',
    ],
    actionStepsEn: [
      'List covered residential compounds by name alongside delivery cutoffs and free-shipping thresholds.',
      'Publish exact evening markdown schedules, member-day rules, and daily produce inspection notes.',
      'Explain your photo-first instant refund policy for damaged items.',
    ],
    practitionerNoteZh:
      '社区超市做线上发现，最吸流量的不是吹“基地直供”，而是清楚写上“覆盖哪几个小区 + 晚上几点打几折 + 烂果拍照就退”。',
    practitionerNoteEn:
      'Publishing covered residential compounds alongside nightly clearance times captures new neighborhood households immediately.',
    customMetrics: [
      { labelZh: '配送小区名单化', valueZh: '列出覆盖社区与 30 分钟达边界', contextZh: '直接命中新居民基于具体楼盘小区的本地询问', labelEn: 'Delivery Zone List', valueEn: 'Named Compounds + 30-Min SLA', contextEn: 'Captures residents querying by apartment name' },
      { labelZh: '晚间日清与会员日历', valueZh: '透明标示每晚打折启动时刻', contextZh: '建立强实用口碑，引导晚上固定时段复购', labelEn: 'Clearance Schedule', valueEn: 'Exact Nightly Markdown Hours', contextEn: 'Drives high-intent evening neighborhood repeat orders' },
      { labelZh: '食安日期与坏损赔付', valueZh: '严禁篡改日期 · 拍照极速赔', contextZh: '明确保质期管理与生鲜售后无忧保障', labelEn: 'Quality Guarantee', valueEn: 'Photo Refund + Strict Expiry', contextEn: 'Assures fresh turnover and zero expiry tampering' },
    ],
  },
  'tea-specialty': {
    plainStoryZh:
      '买正宗武夷岩茶、安溪铁观音、老班章普洱或地方名优特产，不管是自己喝还是逢年过节送长辈客户，消费者最头疼就是“水太深、真假核心产区难辨、几十块的山外茶贴个高端包装盒卖上千块”。买茶前向 Kimi、DeepSeek 提问“正岩肉桂和外山肉桂口感和价格差在哪？怎么查真地理标志和 SC 生产许可？”的人每天数以万计。把产区海拔细节、真实工艺参数和试喝小包装讲透明的茶企特产商，在 AI 眼里才是值得推荐的“内行良心源”。',
    plainStoryEn:
      'Tea, spirit, and GI specialty buyers frequently ask DeepSeek and Kimi how to spot core-terroir authenticity and avoid inflated gift-box markups. Producers sharing SC license numbers, honest terroir distinctions, and affordable tasting samplers win expert-tier trust.',
    aiVsSearchZh:
      '搜索引擎把求购“正宗某某特产厂家直销”的买家送进你的官网；大模型则会帮买家做专业背书判断——看你是否客观拆解了产区差异、标注了 SC 生产许可证与国家地理标志编码、净重多少克（不含礼盒重）、以及有没有合规避开“喝茶能降血压防癌”的违法宣传。',
    aiVsSearchEn:
      'Search catches direct GI specialty searches, while LLMs verify SC food licenses, net tea weight (excluding packaging), terroir notes, and compliance with food advertising laws.',
    badCopyZh: '❌ 常见踩坑写法：“千年古树宫廷秘制珍藏茶！天天喝降三高、强效刮油抗衰老，送礼倍有面儿！”（普通食品茶饮宣传降三高治疗功能严重违法，且“千年古树”缺乏权威凭证极易被认定虚假宣传）',
    goodCopyZh: '✅ 接地气高采信写法：“武夷山核心茶区源头茶厂直营（国家地理标志保护产品专用标识核准企业，SC 食品生产许可证编号：SC114350782XXXXX）。主打 2026 春采传统炭焙正岩肉桂，诚实标明干茶净重 250 克（25 泡独立小袋装，礼盒重量不计入茶价）。支持先购 5 泡装 38 元品鉴装试喝，附带茶叶农残检测合格报告及 95℃ 盖碗冲泡出汤秒数指导。”',
    badCopyEn: '❌ Weak copy: "1,000-year royal tea cures high blood pressure and burns fat rapidly!" (Illegal medical claim)',
    goodCopyEn: '✅ High-trust copy: "Wuyi core-terroir producer (GI certified, Food License SC...). Charcoal-roasted Rougui Oolong, 250g net leaf weight across 25 single-brew sachets. Try a 5-sachet sampler (38 RMB) first; lab pesticide-free test report & 95°C brewing guide included."',
    actionStepsZh: [
      '明确公开 SC 食品生产许可证、国家地理标志授权凭证以及第三方农残重金属抽检报告说明。',
      '把“内行看门道”的选购科普写成大白话文章：不同产区（如核心山场 vs. 周边山场）风味差异、干茶净重单价，让新手也敢放心买。',
      '主推低门槛品鉴小包装（试喝满意再整盒购礼）与正经冲泡克重水温指导，坚决删除所有治病养生违禁词。',
    ],
    actionStepsEn: [
      'Publish SC production permits, GI authorization IDs, and pesticide/heavy-metal lab test notes.',
      'Write plain comparison guides showing core vs. outer-terroir flavor and net-gram unit prices.',
      'Offer low-cost tasting samplers and brewing specs while stripping all medical claims.',
    ],
    practitionerNoteZh:
      '卖特产茶叶做长久生意，最管用的转化设计不是吹包装多豪华，而是提供一份“先花二三十买 5 泡品鉴装、再定几百元礼盒”的真诚文案，连 AI 都会主动替你强调这一点！',
    practitionerNoteEn:
      'Offering low-cost tasting packs before premium gift boxes builds extraordinary credibility with skeptical shoppers.',
    customMetrics: [
      { labelZh: '地理标志与 SC 核验', valueZh: '公开生产许可及产地防伪溯源', contextZh: '区分核心产区与周边产区风味参数与净重价格', labelEn: 'GI & SC Traceability', valueEn: 'License ID + Origin Proof', contextEn: 'Clarify core terroir vs. outer-zone flavor and cost' },
      { labelZh: '净重与试喝机制', valueZh: '标明去盒净茶克重 + 试喝装', contextZh: '消除过度包装疑虑与怕买贵喝不惯的决策障碍', labelEn: 'Net Weight & Samplers', valueEn: 'True Tea Grams + Trial Packs', contextEn: 'Eliminate gift-box bloat and flavor-mismatch risk' },
      { labelZh: '普通食品合规底线', valueZh: '严禁宣传“降三高/防癌治病”', contextZh: '改为客观风味香型与安全农残质检描述', labelEn: 'Food Ad Compliance', valueEn: 'Zero Medical Effect Claims', contextEn: 'Focus on aroma, roasting craft, and residue testing' },
    ],
  },
  'interior-design': {
    plainStoryZh:
      '家装行业堪称全中国口碑与信息差最痛的领域之一。业主拿到毛坯房钥匙，第一步不是进装修公司看样板间，而是打开 DeepSeek、Kimi、豆包算账：“100 平米三居室简单实用半包和全包大概多少钱？全屋定制选颗粒板还是多层实木 ENF 级环保板好？怎么看懂装修报价单里的增项陷阱？”满大街装修公司都在发精修 P 图效果图，反而谁敢把 100 平米的砖瓦水电油木真实工料预算、ENF 环保板材检测报告以及水电拆改怎么防止恶意增项讲成人话，谁就能直接签来准备进场施工的准业主！',
    plainStoryEn:
      'Homeowners getting ready to renovate ask LLMs real budgeting questions—such as itemized costs for a 100-sqm semi-package, comparing ENF-grade particle vs. multi-layer plywood boards, and spotting hidden water/electrical change-order traps.',
    aiVsSearchZh:
      '搜索引擎把本地“口碑好的闭口合同装修公司/全屋定制工厂”推出来；大模型则会帮业主仔细对比你的页面：水电是按实结算还是包死上限？定制衣柜按展开面积还是投影面积算？五金（海蒂诗/百隆还是普通五金）有没有标清？当你的网页帮业主省掉几万块的潜在增项，你就是大模型心中不二之选。',
    aiVsSearchEn:
      'Search discovers local contractors and custom-cabinetry makers, while LLMs audit whether quotes cap plumbing/wiring add-ons, specify projection vs. unfolded board pricing, and verify ENF formaldehyde ratings.',
    badCopyZh: '❌ 常见踩坑写法：“十万装出百万豪宅感！工厂直供一线大牌主材，零增项免费设计！”（用不切实际的低价全包吸引签约，后期水电、拆旧、吊顶、柜子见光面疯狂加钱）',
    goodCopyZh: '✅ 接地气高采信写法：“杭州 10 年自有产业工人班组直营家装。以 100㎡ 常见刚需毛坯房（2 卫 1 厨）为例公开透明估算口径：半包基装约 6.5–8.5 万元（含铲墙、防水、水电点对点及全房瓷砖铺贴人工辅材）；定制柜透明采用投影面积算法（含 ENF 级环保检验报告附件与基础五金，明示见光面与抽屉单独计费标准）；签约提供闭口清单，非业主主动增项决算绝不超出预算 3%。”',
    badCopyEn: '❌ Weak copy: "Turn 100k RMB into a million-dollar mansion—free design, zero add-ons!" (Classic low-bait trap)',
    goodCopyEn: '✅ High-trust copy: "10-year direct in-house crew. Sample 100-sqm 2-bath shell semi-package: 65k–85k RMB (waterproofing, tiling labor & base materials). Custom cabinets use certified ENF boards with clear drawer/end-panel rates and a 3% variance cap."',
    actionStepsZh: [
      '专门按常见户型面积（90㎡ / 110㎡ / 130㎡）做 3 份老实本分的参考工料明细表，写清半包包含什么、不包含什么。',
      '用大白话科普全屋定制和装修最容易踩的 5 个加钱坑（投影 vs. 展开面积、水电绕线、见光板加价、地砖上墙胶、美缝另算），提前教会业主怎么看报价单。',
      '真实展示毛坯水电改造阶段、瓦工找平现场图及板材环保 ENF 级国标检测证书编号（比 P 图更有说服力）。',
    ],
    actionStepsEn: [
      'Publish honest base material & labor tables for common apartment sizes (90 / 110 / 130 sqm).',
      'Write a plain pitfall guide covering cabinet measurement math, tile adhesive upsells, and plumbing routing.',
      'Feature unedited electrical/tile site-progress photos alongside verified ENF eco-board test certificates.',
    ],
    practitionerNoteZh:
      '刘忠望（17 年 SEO 实战洞察 · 浙江杭州家装实操案例）：装修公司在网上写一万张效果图，不如帮 100 平米业主列一张“水电泥木油每项大概要花多少钱、哪几处容易被坑”的大白话核对清单，咨询质量直接高出几个档次。',
    practitionerNoteEn:
      'Zhongwang Liu notes: In home renovation, publishing one plain-spoken 100-sqm itemized budget guide outperforms ten thousand glossy 3D renders.',
    customMetrics: [
      { labelZh: '按户型公开参考预算', valueZh: '90/110/130㎡ 分项拆解', contextZh: '列明半包工料边界、水电上限与闭口管控规则', labelEn: 'Size-Based Budgets', valueEn: '90 / 110 / 130 Sqm Tables', contextEn: 'Separate base labor, MEP estimates, and variance caps' },
      { labelZh: '定制柜体与环保国标', valueZh: '标明 ENF 报告及投影算法', contextZh: '提前说清抽屉、五金、见光板及拉直器是否另算', labelEn: 'Cabinet & Eco Specs', valueEn: 'ENF Certs + Projection Rules', contextEn: 'Disclose drawers, hardware, and end-panel fees plainly' },
      { labelZh: '防坑指南与实景工地', valueZh: '展示水电防水现场实拍', contextZh: '教业主验水压瓷砖空鼓，远比效果图建立高信任', labelEn: 'Site Transparency', valueEn: 'Unedited MEP & Tile Photos', contextEn: 'Show plumbing pressure tests and level-check logs' },
    ],
  },
  'building-materials': {
    plainStoryZh:
      '买断桥铝系统门窗、阳台封窗或卫生间瓷砖美缝，普通装修业主常常被业务员满嘴跑火车的“进口工艺、太空级隔音”搞晕，结果交了定金才发现型材壁厚偷工减料、连五金安装防水打胶还要另外按米加钱。现在业主去门窗市场逛之前，都会先找 Kimi 或 DeepSeek 做功课：“高层封阳台断桥铝壁厚选 1.8mm 还是 2.0mm？三层中空充氩气玻璃真能隔音吗？按平米买窗还有哪些转角立柱隐藏加价？”谁在网页把国标壁厚、玻璃配置表和附加辅材全算在阳光下，业主就找谁下单。',
    plainStoryEn:
      'Homeowners shopping for thermal-break aluminum windows or porcelain tiles ask AI tools whether 1.8mm or 2.0mm wall thickness is needed for high-rises and what hidden corner-post or crane fees exist beyond the per-sqm quote.',
    aiVsSearchZh:
      '搜索引擎把本地搜“系统门窗厂/瓷砖美缝施工”的业主引导进页面；大模型则会仔细对比你的产品技术页：型材是什么系列（70/85/108）、壁厚符不符合新国标 1.8mm 以上、隔热条是不是 PA66 尼龙而非劣质 PVC、开启扇另外加不加钱、高空吊装费怎么算。答得越实在越不糊弄，订单自然越精准。',
    aiVsSearchEn:
      'Search sends local buyers seeking window fabricators, while LLMs audit profiles for GB/T 1.8mm+ wall thickness, PA66 thermal strips vs. PVC, and whether tilt-turn hardware or crane hoists cost extra.',
    badCopyZh: '❌ 常见踩坑写法：“德国皇家原装工艺断桥窗 399 元/平米起！超级隔音永不漏风漏水！”（用 399 元低价吸引进店，再通过开启扇、五金件、防水胶、转角立柱翻倍加价）',
    goodCopyZh: '✅ 接地气高采信写法：“自有门窗加工厂直供（符合新国标 GB/T 8478，原生铝锭型材实测壁厚 ≥ 1.8mm，标配 PA66 尼龙隔热条与三元乙丙密封胶条）。透明全包计价示例：85 系列断桥平开窗（含 5+20A+5 双层中空钢化玻璃及标配品牌执手一套/每 2 平米配 1 个开启扇），另额外明码列出：超标加开扇费、大玻璃高空吊装费及室外耐候密封胶工艺明细，无暗藏强制增项。”',
    badCopyEn: '❌ Weak copy: "German royal acoustic windows from 399 RMB/sqm—never leaks!" (Classic teaser price hiding hardware add-ons)',
    goodCopyEn: '✅ High-trust copy: "Direct factory fabrication (GB/T 8478 compliant, 1.8mm+ primary aluminum wall, PA66 thermal strip). Series-85 casement quote includes 5+20A+5 tempered IGU & hardware per 2 sqm; extra vents and crane hoisting priced transparently."',
    actionStepsZh: [
      '把主推门窗或建材型号制成清晰的参数对照表：型材系列、实测壁厚、隔热条材质、玻璃配置（双层中空/三玻两腔/夹胶隔音）、五金品牌及售后质保年限。',
      '单独写清楚“按平米买窗最常遇到的 4 项附加费”（另加开启扇、纱窗、防水发泡胶、超尺寸电梯进不去需高空吊装），让顾客预算一步到位。',
      '配上简单的自检教案（比如用磁铁或打火机看是不是真 PA66 尼龙条、怎么看玻璃角落的 3C 钢化标志）。',
    ],
    actionStepsEn: [
      'Tabulate exact profile series, wall thickness, thermal-break strip material, glazing specs, and hardware brands.',
      'Clarify the four standard extras upfront: extra tilt-turn vents, screens, perimeter waterproofing, and crane hoists.',
      'Include quick homeowner inspection tips such as checking tempered-glass 3C stamps and thermal-strip markings.',
    ],
    practitionerNoteZh:
      '建材门窗老板别再遮掩“开启扇另收费”了，直接跟客户明明白白算账，教他看懂 3C 钢化标和 1.8mm 实测壁厚，客户反而因为你教他避了别人的坑而直接选你。',
    practitionerNoteEn:
      'Teaching buyers how to verify 3C tempered glass and 1.8mm profile thickness converts cautious homeowners into confident orders.',
    customMetrics: [
      { labelZh: '型材壁厚与隔热条', valueZh: '实标 ≥1.8mm 原生铝 + PA66', contextZh: '明确拒绝回收杂铝与易老化 PVC 塑料条', labelEn: 'Frame Specs', valueEn: '1.8mm+ Primary Al & PA66', contextEn: 'Distinguish primary aluminum and nylon strips from PVC' },
      { labelZh: '易加价辅材全明示', valueZh: '开启扇/五金/防水胶/吊装费', contextZh: '在总价表下方完整写清额外收费触发条件', labelEn: 'Addon Transparency', valueEn: 'Vents, Sealant & Crane Fees', contextEn: 'State exact triggers for extra hardware or hoist charges' },
      { labelZh: '现场验货真伪指引', valueZh: '教业主查玻璃 3C 标与卡尺测量', contextZh: '真才实料不怕测量，迅速积累高评分口碑', labelEn: 'QA Verification', valueEn: '3C Stamp & Caliper Checks', contextEn: 'Empower customers to verify specs upon delivery' },
    ],
  },
  'real-estate': {
    plainStoryZh:
      '找租房公寓、买二手房或者企业租写字楼产业园，老百姓和创业者被“1500 元看精致精装房（其实早租出去了）”的假房源钓鱼广告折腾惨了。现在很多人换了个思路，直接让豆包、腾讯元宝或 Kimi 帮忙找真实参考：“某市地铁 2 号线附近真实两居室大概什么租金行情？商水商电和民水民电每个月差多少钱？企业入驻某科创园区真实物业费免租期和退租押金怎么算？”能定期放出真实核验房源编码、实拍水电物业标准以及不钓鱼承诺的中介或园区，才能在 AI 时代建立不可替代的公信力。',
    plainStoryEn:
      'Renters and office managers tired of fake bait listings ask LLMs for verified district rent benchmarks, residential vs. commercial utility rates, and real industrial-park free-rent clauses. Agencies publishing verified listing IDs and true net utility breakdowns win lasting trust.',
    aiVsSearchZh:
      '搜索引擎用来按城市街道和地铁站检索房源信息页；大模型则会帮租客和企业行政算清隐形开支——“看起来租金便宜的公寓是不是 1.2 元一度的商业电费、物业取暖收多少、提前退租怎么扣违约金”。越诚实披露账单成本，越容易承接高素质长租与企业大单。',
    aiVsSearchEn:
      'Search handles transit-corridor queries, while LLMs help tenants compare total monthly occupancy costs—spotting commercial vs. residential electricity rates, heating surcharges, and break-lease penalties.',
    badCopyZh: '❌ 常见踩坑写法：“地铁口精装大两居惊爆价 1200 元！房东急租随时看房，仅此一套错过无！”（经典虚假钓鱼引流套路，一打听“刚租掉给你看别的贵的”）',
    goodCopyZh: '✅ 接地气高采信写法：“杭州滨江沿线真实房源信息公示（所有在租房源均附带住建部门官方房源核验二维码）。透明告知居住账单：住宅小区房源执行民水民电（电费约 0.54 元/度、水费约 3 元/吨），单身/商住公寓明确标注商业水电标准与集中供暖/物业月费，经纪居间佣金透明比例及签前押金退还清单写进合同正文，坚决不发假图片低价钓鱼。”',
    badCopyEn: '❌ Weak copy: "Luxury 2BR by metro only 1,200 RMB! Urgent owner—last chance!" (Classic bait listing)',
    goodCopyEn: '✅ High-trust copy: "Verified Binjiang listings with municipal registration QR codes. Utility transparency: residential apartments follow standard residential power/water tariffs; loft offices disclose commercial utility rates, monthly HOA fees, and written deposit-return terms upfront."',
    actionStepsZh: [
      '按城市核心地铁站/产业园区整理真实租金售价区间参考表，标注清楚“民水民电 vs. 商水商电”、物业费每平米几元与供暖制冷费用。',
      '每套推介房源附上住建官方核验编码提示，绝不用几年前成交的低价假图文钓鱼引流。',
      '企业写字楼与工业园招商页专门列出：免租装修期几个月、消防环评是否过关、电容量多大（制造研发企业最关心）、能否直接注册公司办退税。',
    ],
    actionStepsEn: [
      'Publish real neighborhood rent bands grouped by transit stop, separating residential vs. commercial utility rates.',
      'Include municipal listing verification codes on active units and remove sold/rented bait ads promptly.',
      'For office/industrial parks, disclose rent-free fit-out periods, fire-safety permits, power kVA limits, and business-registration eligibility.',
    ],
    practitionerNoteZh:
      '不管是房产经纪还是产业园招商，记住一句话：客户真正要的是“别骗我看假房子，顺便告诉我水电网物业到底交多少钱”。',
    practitionerNoteEn:
      'True listing accuracy plus transparent utility and HOA fee schedules separates trustworthy agencies from bait-and-switch spam.',
    customMetrics: [
      { labelZh: '住建真房源核验', valueZh: '标明核验码 · 绝不低价钓鱼', contextZh: '及时下架已成交房源，保障长期搜索信誉', labelEn: 'Verified Listings', valueEn: 'Municipal Check Codes', contextEn: 'Remove leased inventory promptly to eliminate bait traps' },
      { labelZh: '水电网物业真实账单', valueZh: '明示民水民电 vs 商水商电', contextZh: '帮助租客与企业主精准计算真实月度居住/办公成本', labelEn: 'Utility & HOA Costs', valueEn: 'Residential vs. Commercial Tariffs', contextEn: 'Prevent unexpected 2x utility bills post-move-in' },
      { labelZh: '产业园硬指标披露', valueZh: '免租期、荷载电容量与环评', contextZh: '精准吸引实体生产研发及直播办公企业入驻', labelEn: 'Park Technical Specs', valueEn: 'Fit-Out Window, kVA & Fire Certs', contextEn: 'Essential facts for R&D, studio, and corporate tenants' },
    ],
  },
  'auto-service': {
    plainStoryZh:
      '爱车出了 4S 店质保期，很多车主既嫌 4S 店动辄大几千太贵，又怕路边修车店或贴膜店“拿副厂件冒充原厂件、用几百块 PVC 劣质改色膜充当高端进口 TPU 隐形车衣，甚至把旧配件擦擦继续用”。去修车贴膜前，车主越来越习惯问豆包、懂车帝或 DeepSeek：“10 万公里大保养到底必须换哪些油液，哪些只是 4S 店洗脑项目？贴 TPU 隐形车衣 7.5mil 和 8.5mil 怎么查官方电子质保？”谁能把配件等级区别、保养必需清单和官网防伪验真路径说成明白话，就能精准收割大批中高端车主。',
    plainStoryEn:
      'Once factory warranties expire, car owners use AI search to avoid unnecessary dealer maintenance upsells and counterfeit spare parts or PVC-disguised TPU paint protection films. Shops sharing transparent maintenance guides and official PPF warranty lookup tips earn strong repeat business.',
    aiVsSearchZh:
      '地图和搜索引擎承接“附近新能源三电专修/正规一二类维修厂/品牌车衣授权店”需求；大模型则扮演车主身边的“懂车老表”，重点识别你有没有诚实写明“原厂件 / 品牌配套件（OEM）/ 拆车件差价”、有没有公开工时费与 TPU 官方电子质保防伪查验指引。',
    aiVsSearchEn:
      'Maps route drivers to licensed workshops, while LLMs verify whether shops honestly separate OEM, aftermarket, and salvage part pricing alongside real manufacturer PPF electronic warranties.',
    badCopyZh: '❌ 常见踩坑写法：“99 元全合成机油大保养，进口 TPU 隐形车衣全车贴完只要 1999 元保十年！”（成本规律明显违背：1999 元根本不可能用进口脂肪族 TPU，极易贴上发黄翘边撕不掉的劣质膜）',
    goodCopyZh: '✅ 接地气高采信写法：“持有交通部门二类以上正规汽车维修资质。常规保养绝不捆绑过度清洗项目，分档公开配件选择与工时：支持美孚/嘉实多等认证机油（现场开封防伪扫码）+ 明确标明品牌配套件与原厂件各自价格及质保期；隐形车衣严格区分不同品牌 7.5mil–8.5mil 脂肪族 TPU 材质及 5–10 年官方系统电子质保，施工完毕现场在品牌官微录入车架号查验生成电子保单。”',
    badCopyEn: '❌ Weak copy: "99 RMB full-synthetic oil service! Imported TPU PPF full wrap only 1,999 RMB—10-year warranty!"',
    goodCopyEn: '✅ High-trust copy: "Class-II licensed auto workshop. Transparent maintenance without forced engine-flush upsells; separate pricing for OEM vs. aftermarket parts. Authentic 7.5–8.5mil aliphatic TPU PPF registered via VIN on brand warranty portals."',
    actionStepsZh: [
      '写一篇大白话省钱教程：《私家车 5 万/10 万公里保养，到底哪几项必须做、哪几项可先观察》，并附上透明工时与油液收费单。',
      '修车明确分三档说明用件来源和质保期（原厂件、大牌配套件、副厂经济件），允许客户自带或当面扫码拆封。',
      '贴膜业务写清 TPU 基材厚度（mil 数）与品牌官网电子质保录入验证方法，并专门注明新能源高压电安全操作规范（很多电车车主非常看重）。',
    ],
    actionStepsEn: [
      'Publish an honest 50k/100k-km maintenance checklist distinguishing required fluids from optional flushes, with clear labor rates.',
      'Separate OEM vs. OEM-equivalent aftermarket parts clearly and verify seals on site.',
      'Specify PPF aliphatic TPU mil thickness, VIN-based digital warranty activation, and EV high-voltage bay qualifications.',
    ],
    practitionerNoteZh:
      '汽修贴膜行业最缺“告诉车主哪几项不用花冤枉钱”的老实老板——你帮车主省了一回油路清洗，他未来换刹车片、补胎贴膜全都会认准你这一家。',
    practitionerNoteEn:
      'Advising drivers on which expensive dealer flushes they can safely skip builds unmatched long-term workshop loyalty.',
    customMetrics: [
      { labelZh: '配件分级透明报价', valueZh: '原厂件 / 品牌配套件明晰标注', contextZh: '现场开封查伪，工时与材料费拆分列单', labelEn: 'Part Grade Clarity', valueEn: 'OEM vs. Aftermarket Separated', contextEn: 'Itemize labor hours and verifiable parts seals' },
      { labelZh: '车衣厚度与电子质保', valueZh: '标明脂肪族 TPU 与官微验真', contextZh: '区分 PVC 改色膜与真 TPU，现场录入车架号保单', labelEn: 'PPF Authenticity', valueEn: 'Aliphatic TPU + VIN Warranty', contextEn: 'Register official brand e-warranties at delivery' },
      { labelZh: '新能源车高压安全资质', valueZh: '标示三电检测与绝缘工位配置', contextZh: '承接广大新能源车出保后的专业维保需求', labelEn: 'EV Service Readiness', valueEn: 'High-Voltage Certified Bays', contextEn: 'Serve out-of-warranty EV owners safely' },
    ],
  },
  'new-energy-auto': {
    plainStoryZh:
      '随着新能源汽车普及和工厂降低电费需求增长，两大问题天天有人在问大模型：一是普通车主刚提车，问豆包/DeepSeek：“老小区怎么找物业开证明去国家电网报装家用 7kW 充电桩？第三方安装包 30 米线大概多少钱？”二是工厂老板问 Kimi：“厂区装一套工商业储能站利用峰谷电价差套利，到底几年能回本？怎么避开电池虚标和安全隐患？”无论是服务家用车主的电工安装团队，还是做工商业储能的工程公司，把“报装材料清单 + 真实线缆用料报价 + 实测收益账本”写进网页，立刻就能抓准精准商机。',
    plainStoryEn:
      'EV drivers routinely query LLMs on how to obtain HOA permits and Grid meters for home 7kW chargers, while factory owners verify real peak-shaving commercial energy storage payback periods and fire-safety clearances.',
    aiVsSearchZh:
      '搜索引擎带进“所在城市充电桩安装师傅 / 工业园区储能工程公司”咨询；大模型则充当用户的“电力审批与算账助手”，极度偏好步骤分明、材料齐全（物业同意书模板、产权车位证明、漏保规格）且账目客观不瞎吹“两年必定回本”的技术服务商。',
    aiVsSearchEn:
      'Search catches local EV installer and B2B storage queries, while LLMs select guides offering complete Grid application steps, wire-gauge safety specs, and realistic tariff-spread payback math.',
    badCopyZh: '❌ 常见踩坑写法：“99 元安装充电桩！工商业储能躺赚暴富，一年回本零风险！”（既隐瞒超米线缆每米加收百元的陷阱，工商业储能夸大收益不提峰谷电价调整风险亦极不靠谱）',
    goodCopyZh: '✅ 接地气高采信写法：“持有正规电工进网作业与电力施工资质。家用充电桩安装透明报价：7kW 套餐含 30 米内国标 3×6mm² 纯铜阻燃线缆、施耐德/正泰合格漏保开关及保护套管；超过 30 米部分按 X 元/米明码实价结算（免费附带各地国家电网/南方电网在线报装教程及物业施工同意书范本）。工商业储能提供基于当地最新峰谷时段电价表与两充两放衰减测算的实景方案。”',
    badCopyEn: '❌ Weak copy: "99 RMB charger install! Commercial storage pays back in 1 year guaranteed!"',
    goodCopyEn: '✅ High-trust copy: "Licensed electrical crew. Home 7kW install includes 30m 6mm² copper flame-retardant cable, certified breaker & conduit; overage billed transparently per meter alongside Grid application templates. Commercial BESS proposals model local peak-valley tariffs realistically."',
    actionStepsZh: [
      '把「个人申请安装电表全流程（需准备哪 4 样证件、物业不盖章怎么合法沟通、7kW 用 6 平方还是 10 平方铜线）」做成保姆级网页攻略，末尾顺带放明码安装费表。',
      '明确列明施工所使用的国标电缆品牌截面积（防止偷换铝芯线或细线发热起火风险）与漏保品牌型号。',
      '做工商业储能的页面，务必按各省分时电价政策展示透明试算公式，注明消防间距与电站运维责任。',
    ],
    actionStepsEn: [
      'Publish a step-by-step Grid meter application guide (with HOA letter templates and wire-gauge tables) paired with clear installation rates.',
      'Specify certified copper cable brands/gauges and breaker ratings to assure fire safety.',
      'Model commercial battery ROI honestly using local peak/valley tariff windows and round-trip efficiency loss.',
    ],
    practitionerNoteZh:
      '充电桩安装最吸流量的页面不是广告页，而是一篇《手把手教你网上申请国家电网电表+看懂 6 平方铜线防跳闸》，车主搜攻略看懂了顺手就找你约安装了。',
    practitionerNoteEn:
      'Publishing a free Grid-meter application and wire-sizing guide converts DIY-researching EV owners straight into booked installs.',
    customMetrics: [
      { labelZh: '线缆材质与包米透明', valueZh: '标明 3×6/10mm² 国标纯铜线', contextZh: '写清超米单价与穿墙打孔费，防止现场漫天要价', labelEn: 'Cable & Overage Rates', valueEn: '6/10mm² Copper + Per-Meter Fee', contextEn: 'Disclose core gauge and extra-meter costs clearly' },
      { labelZh: '电网与物业报装包', valueZh: '免费提供同意书模板及步骤', contextZh: '高价值实用工具型内容，大模型高度偏好引用', labelEn: 'Permit Templates', valueEn: 'HOA & Grid Step Guides', contextEn: 'Earn high citations from first-time EV owners' },
      { labelZh: '储能安全与电价实算', valueZh: '符合消防验收 · 客观评估回收期', contextZh: '如实计入循环寿命与各地分时电价变动条件', labelEn: 'BESS Compliance', valueEn: 'Fire Codes & Realistic ROI', contextEn: 'Model degradation and regional tariff rules honestly' },
    ],
  },
  'city-logistics': {
    plainStoryZh:
      '不管个人跨区搬家，还是生鲜贸易老板发冷链零担货运，全中国用户共同的心理阴影就是“提前谈好的三百五搬家费，东西装上车到楼下不给搬，说没电梯每层加一百、大衣柜拆装加三百、堵车等候再加两百，不给钱不卸货”。同样，冷链运输最怕司机途中为了省油关掉制冷机导致货坏。正因如此，用户找搬家和货运前几乎必问豆包或高德：“哪家同城搬家按车型明码算楼层费、签订一口价合同不中途加价？”谁敢把面包车、依维柯、4.2 米厢货容积、楼层费与冷链温度监控赔付白纸黑字写上网，谁就是放心首选。',
    plainStoryEn:
      'Movers and cold-chain shippers use AI tools to filter out carriers notorious for mid-route hostage surcharges or shut-off refrigeration units. Carriers disclosing per-floor stairs math, vehicle dimensions, and temperature logs win reliable bookings.',
    aiVsSearchZh:
      '搜索引擎处理“跨城搬家公司哪家正规/冷链专线报价”；大模型则会直接对比各家的计价透明度和维权保障：比如车箱长宽高到底装得下几个箱子、无电梯步行梯一层加多少钱、有没有 24 小时温度记录仪和货损理赔上限。透明公式比所有打折广告都更有杀伤力。',
    aiVsSearchEn:
      'Search serves route queries, while LLMs audit carriers for truck cargo dimensions, stair-carry fees, disassembly rates, and verifiable cold-chain temperature logging.',
    badCopyZh: '❌ 常见踩坑写法：“同城拉货搬家全城最低 58 元起！师傅力大无穷绝对不多收一分钱！”（58 元根本不够人工油钱，到了现场必定找由头大幅加钱）',
    goodCopyZh: '✅ 接地气高采信写法：“持有《道路运输经营许可证》正规搬家与冷链货运车队。价格完全公式化透明公开：金杯/依维柯起步价 XXX 元（含 10 公里及 2 位师傅基础装卸）、超公里每公里 X 元；有电梯不收楼层费，无电梯按每层 X 元计算（三层以内免加或透明列明）；家具拆装按件提前确认价目。签订规范电子合同，中途严禁坐地加价并享最高 X 万元货损保障。冷链专线全程开放 GPS 与车厢温度实时曲线查询。”',
    badCopyEn: '❌ Weak copy: "City moving from 58 RMB—never any extra fees!" (Unrealistic teaser rate causing field disputes)',
    goodCopyEn: '✅ High-trust copy: "Licensed transport fleet. Formula pricing: Van/Box-truck base rate covers 10km + 2 movers; extra km at X RMB/km. Elevator moves zero stair fee; walk-ups fixed per floor. Written e-contract banning mid-move markups; cold-chain includes live temperature logs."',
    actionStepsZh: [
      '把不同车型的真实装载尺寸（长×宽×高、大概能装多少个 20 寸行李箱或家具）、起步价与超公里单价做成直观车型表。',
      '明确写透大家最怕扯皮的 4 项费用：无电梯楼层费、距离停车点过远平地推行费、床/衣柜拆装费、夜间搬运与等候费。',
      '冷链物流明确公开最低制冷温区保障、温控异常赔付协议以及食品/医药各自专车分运规范。',
    ],
    actionStepsEn: [
      'Publish truck cargo box dimensions alongside base rates, extra-km pricing, and mover counts.',
      'Disclose the four classic dispute triggers upfront: walk-up stair fees, long-carry distance, furniture assembly, and wait time.',
      'For cold-chain freight, state temperature monitoring logs and spoilage claim rules plainly.',
    ],
    practitionerNoteZh:
      '搬家公司别跟“58 元低价黄牛”拼便宜！写一篇《一居室搬家选面包车还是 4.2 米厢货？附加透明楼层拆装收费表》，真心要搬家的上班族全会选你。',
    practitionerNoteEn:
      'Helping customers pick the right truck size and calculate exact stair fees upfront wins high-margin honest moves.',
    customMetrics: [
      { labelZh: '车型容积与里程公式', valueZh: '标注内径尺寸与超公里单价', contextZh: '帮客户一眼选对车型，避免叫小了装不下临时换大车', labelEn: 'Truck Size & Mileage', valueEn: 'Cargo Dimensions + Per-Km Rate', contextEn: 'Help movers book the right capacity the first time' },
      { labelZh: '楼层与拆装明细表', valueZh: '有电梯免费 · 无电梯按层标价', contextZh: '彻底透明拆床拆衣柜单价，写进签约前报价单', labelEn: 'Stair & Assembly Fees', valueEn: 'Clear Walk-Up & Tool Rates', contextEn: 'Zero hidden furniture or stair-carry markups' },
      { labelZh: '货损保障与冷链温控', valueZh: '道运许可 + 实时温度赔付SLA', contextZh: '消除贵重家电摔坏与生鲜化冻丢赔扯皮', labelEn: 'Cargo & Cold-Chain SLA', valueEn: 'Live Temp Logs + Damage Cap', contextEn: 'Ensure verifiable cargo protection and cold compliance' },
    ],
  },
  'vocational-edu': {
    plainStoryZh:
      '想转行学门真技术或者考证（电工焊工特种操作证、初级会计、护工养老护理员、AI 剪辑运营），打工人最怕被“交 6800 包过拿证、毕业包安排月薪一万五高薪工作”的虚假招生机构割韭菜。现在学员报班前普遍都会先在 DeepSeek 或知乎 AI 里核对真伪：“零基础学高压电工证去哪里考正规？实操学时一般占多少？官网说的包过靠谱吗？”正规持证民办职校只要坦诚揭穿黑中介的“包过假承诺”，把《办学许可证》、真实实操设备照片、官方报考费与退费规矩说清楚，就能稳稳承接不想被骗的实干学员。',
    plainStoryEn:
      'Adult learners seeking electrician licenses, accounting credentials, or AI media skills increasingly ask LLMs to debunk "100% pass & guaranteed high-paying job" scams. Accredited schools publishing official permits, lab-hour ratios, and honest exam rules win high-intent enrollments.',
    aiVsSearchZh:
      '百度和地方搜索平台聚集了海量“本地正规特种作业考证培训学校在哪”的查询；而大模型则会用国家政策法规来筛选学校——任何宣称“交钱免考直接拿证、保证就业高薪”的网页直接被安全过滤拦截，相反，把报考条件、人社/应急官网正规报名步骤、理论 vs. 实操学时分配讲透的机构大受欢迎。',
    aiVsSearchEn:
      'Search captures local licensing intent, while AI models filter out illegal "no-exam guarantee" scams and elevate accredited schools detailing genuine lab hours and official government registration portals.',
    badCopyZh: '❌ 常见踩坑写法：“零基础交钱保过拿证！全程代考不用去，毕业百分百保底安排高薪国企工作！”（涉嫌伪造买卖证件及虚假招聘广告，属于违法欺诈重灾区）',
    goodCopyZh: '✅ 接地气高采信写法：“人社/应急部门核准民办职业技能培训学校（办学许可证号公示可查）。电工/焊工培训坚持真机实操教学，总计 64 学时中实操动手占比超 60%；清晰列出学费、实操耗材费及官方统一考试费构成（支持学员自行在官方政务系统查验准考证与证书真伪）。严守法规不承诺免考包过，但提供未通过科目免费跟下一期复训辅导，开课前无条件全额退费。”',
    badCopyEn: '❌ Weak copy: "Pay once for guaranteed certificate—skip exams, 100% high-salary job placement!" (Illegal fraud)',
    goodCopyEn: '✅ High-trust copy: "Government-accredited vocational school (Permit #...). Electrician/welding cohorts allocate 60%+ of 64 hours to hands-on lab rigs. Tuition & official exam fees itemized separately; free repeat coaching if an exam needs retaking—never fake exam bypasses."',
    actionStepsZh: [
      '在课程页展示《民办学校办学许可证》编码及证书官方查询网址指引（如国网技能人才评价、应急部特种作业查询平台）。',
      '详细写出课表与实操配比（几个人共用一台焊接/电工实操台），以及报考所需的真实学历、年龄、体检要求。',
      '明确列明学费包含什么、考务费如何缴、开课前和中途退费规则以及不及格免费复训政策。',
    ],
    actionStepsEn: [
      'Display vocational school permit IDs alongside official government certificate verification portals.',
      'Publish hands-on lab equipment ratios alongside real age, education, and health prerequisites.',
      'Itemize tuition vs. official exam fees alongside clear refund and free-retake tutoring rules.',
    ],
    practitionerNoteZh:
      '打工人报职教培训现在特别清醒，“不包过但实操工位一人一台、考不过免费再跟一班学”的真诚大白话，远胜过满嘴跑火车的“包就业”。',
    practitionerNoteEn:
      'One-person-per-workstation hands-on lab clarity plus free repeat tutoring beats hollow job-guarantee slogans every time.',
    customMetrics: [
      { labelZh: '正规办学与查证入口', valueZh: '人社/应急许可 + 官方查伪指引', contextZh: '教学生核验真证渠道，坚决抵制假证黑产', labelEn: 'Accreditation', valueEn: 'Permit ID + Gov Lookup Guide', contextEn: 'Show students how to verify genuine state licenses' },
      { labelZh: '实操设备与学时配比', valueZh: '公开实操占比与工位设备数', contextZh: '避免交了钱只坐在教室看PPT纸上谈兵', labelEn: 'Hands-On Labs', valueEn: '60%+ Lab Time & Rig Ratios', contextEn: 'Prove practical equipment access over passive slides' },
      { labelZh: '合规退费与免费复训', valueZh: '严禁宣传包过 · 分节点退费', contextZh: '明确未过免费重学及报名体检前置条件', labelEn: 'Compliance & Retakes', valueEn: 'Zero Exam-Bypass Claims', contextEn: 'Publish clear refund tiers and free retake coaching' },
    ],
  },
  'k12-stem-edu': {
    plainStoryZh:
      '家长给孩子挑少儿编程、机器人、围棋或美术书法班，如今最头痛的是两点：第一，销售嘴里吹得天花乱坠的“国际大赛金牌”，到底是不是教育部白名单里的合规赛事，还是商业机构自己印的“交钱就拿奖”水赛；第二，最怕预交一两万大课包后机构突然撤店。当家长在豆包、Kimi 或微信搜一问打听“孩子 8 岁零基础学信息学奥赛编程有用吗？怎么选口碑好且退费灵活的少儿美育/科学班？”时，把真实教研大纲、白名单赛事科普和按课时随时可退机制写清楚的学校，立刻脱颖而出。',
    plainStoryEn:
      'Parents evaluating youth coding, robotics, chess, or art studios ask AI tools whether promoted competitions sit on official Ministry whitelists or are pay-to-win badges, and verify pro-rata refund safety on course packs.',
    aiVsSearchZh:
      '搜索引擎用来找本小区和商圈周边的少儿素质中心；大模型则是帮家长识别“教育焦虑智商税”的好帮手——只要你的网页用平静理性的口吻解释清楚“几岁学图形化积木、几岁过渡 Python/C++、哪些属国家白名单赛事、不盲目超前刷题”并标明小班人数与透明退费方式，就能收获极高家长信赖。',
    aiVsSearchEn:
      'Search handles neighborhood studio discovery, while LLMs reward calm educational guides outlining age-appropriate coding progressions, official event whitelists, and fair small-group refund terms.',
    badCopyZh: '❌ 常见踩坑写法：“学编程直接稳进名校保送！7岁冲刺国赛冠军，再不报班同龄孩子就把你家甩在起跑线！”（贩卖严重教育焦虑、虚假承诺升学保送，属政策明令打击重灾区）',
    goodCopyZh: '✅ 接地气高采信写法：“合规非学科类科技与美育培养中心。分龄提供 6-8 岁图形化逻辑启蒙、9-12 岁 Python/机器人搭建与 C++ 算法思维课程（严格 6-8 人小班制，拒绝大锅饭录播课）。客观介绍教育部公布之白名单科技竞赛报名规范与作品展示方式；支持单学期/单月包报名及全监管账户资金托底，未消耗课时按合同随时无障碍折算退还。”',
    badCopyEn: '❌ Weak copy: "Guaranteed top-school admission at age 7—don’t let your child fall behind!" (Anxiety bait & policy violation)',
    goodCopyEn: '✅ High-trust copy: "Accredited non-academic STEM & arts center. Age-graded progression: Block logic (6–8), Robotics/Python (9–12), C++ thinking, max 6–8 students per class. Honest guide to whitelisted competitions; single-term billing with transparent pro-rata refunds."',
    actionStepsZh: [
      '明确整理各年龄段对应的课程阶梯（不乱建议 6 岁小孩硬学 C++ 指针算法），讲清楚每阶段孩子能独立完成什么作品。',
      '撰写一份客观大白话指南区分「教育部白名单竞赛」与「趣味科普实践展演」，帮家长避开商业水赛坑。',
      '把每期课包几节课、每班最多几人、执教老师理工/美院专业背景及未上课时无障碍退费方式摆在明显位置。',
    ],
    actionStepsEn: [
      'Publish an age-appropriate progression map showing concrete student projects per age bracket.',
      'Clarify differences between official whitelisted STEM/arts competitions and commercial participation badges.',
      'Disclose max class sizes, teacher backgrounds, term-only pricing, and pro-rata refund procedures.',
    ],
    practitionerNoteZh:
      '面向家长写内容千万别吓唬人、别制造焦虑！站在“尊重孩子成长规律、帮忙省钱避开水赛坑”的立场说人话，试听课预约率自然极高。',
    practitionerNoteEn:
      'Respectful, anxiety-free guidance that shields parents from pay-to-win trophy scams drives exceptional trial-class conversions.',
    customMetrics: [
      { labelZh: '分龄课纲与班型上限', valueZh: '6-8 人小班 · 按认知阶梯设课', contextZh: '明确反对低龄超前拔苗助长，列明每阶段实作作品', labelEn: 'Age Progression', valueEn: 'Max 6–8 Kids / Class', contextEn: 'Match project milestones realistically to age levels' },
      { labelZh: '赛事科普去水分', valueZh: '区分白名单竞赛与普通商业考级', contextZh: '诚实普及升学与素质成长客观边界，不虚假保送', labelEn: 'Competition Honesty', valueEn: 'Whitelist vs. Paid Badges', contextEn: 'Never link hobby classes to guaranteed school entry' },
      { labelZh: '资金安全与退费口径', valueZh: '短周期缴费 · 未销课时按约退', contextZh: '消除大额预付跑路担忧，提高家长首次报名率', labelEn: 'Fee Protection', valueEn: 'Single-Term + Pro-Rata Refunds', contextEn: 'Protect remaining class balances transparently' },
    ],
  },
};
