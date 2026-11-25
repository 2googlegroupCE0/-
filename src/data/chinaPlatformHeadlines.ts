import type { PlatformHeadlineSpec } from '../types/editorial.ts';

export const CHINA_PLATFORM_HEADLINES: Record<string, PlatformHeadlineSpec> = {
  deepseek: {
    titleZh: 'DeepSeek 深度检索爱引什么网页？去掉华而不实的广告词，把硬核参数对比表放出来',
    titleEn: 'How DeepSeek Evaluates Chinese Business Pages: Why Fact-Dense Comparison Tables Beat Ad Copy',
    subtitleZh: '深度求索联网检索专盯“有数字、有前后对照、逻辑自洽”的实在信息，普通企业改好这两页内容最易上榜',
    subtitleEn: 'DeepSeek’s live web search bypasses marketing fluff to cite logically structured specs, transparent pricing, and verifiable sources',
    directAnswerZh: 'DeepSeek 在回答“某某设备选哪家”“哪家服务不坑人”时，会通过开放网页深度检索并交叉比对多个独立来源；它极其反感全是感叹号的吹嘘软文，却高度偏好带规格参数表、服务限制边界与可验证执业依据的纯文字页面。',
    directAnswerEn: 'When buyers ask DeepSeek to vet vendors or equipment, its deep retrieval cross-checks multiple open web pages—discarding exclamation-mark hype in favor of HTML spec tables, candid constraints, and verifiable credentials.',
    headingsZh: [
      '把 DeepSeek 当成挑剔的技术采购员：它抓网页时一眼先过滤掉什么废话？',
      '实打实拿引用的 4 个文本机关（含纯 HTML 表格与自检卡）',
      '不同行业怎么衔接 DeepSeek 流量？请对号入座查行业专篇',
    ],
    headingsEn: [
      'Inside DeepSeek’s Skeptical Web Reader: Why Ad Fluff Gets Ignored',
      'Four Text Signals DeepSeek Cites Immediately (Tables, Constraints, Logs & Citations)',
    ],
  },
  doubao: {
    titleZh: '豆包每天回答上亿次“附近哪家实在”：实体店打通抖音 POI、头条长文与口语问答的抓源逻辑',
    titleEn: 'Doubao Local & Service Discovery: Connecting Douyin POIs, Toutiao Notes & Honest Pricing',
    subtitleZh: '吃透字节跳动生态里的门店核销口碑、口语化消费避坑问法和实景菜单同步，别让门店白白隐身',
    subtitleEn: 'Aligning Douyin local check-ins, conversational pitfall Q&As, and exact storefront hours inside ByteDance’s AI ecosystem',
    directAnswerZh: '豆包在解答餐饮、足浴、美业、装修等高频本地消费问题时，高度融合抖音实体门店 POI 位置、核销团购真实评论以及头条号口语科普问答。实体商家只要保证地图电话营业时间一致、用口语回答“加不加钱/怎么避坑”，极易进入豆包口语推荐首位。',
    directAnswerEn: 'Doubao powers local recommendations across ByteDance by pairing verified Douyin POI data and genuine check-in reviews with conversational FAQ content that directly settles price and upsell fears.',
    headingsZh: [
      '市民对手机喊一声豆包问附近好店，它半秒内翻了哪三个字节系抽屉？',
      '本地实体门店抢占豆包推荐位的 4 条白话改造清单',
      '按你所属的具体行当，查看对应的抖音/豆包联动改写示范',
    ],
    headingsEn: [
      'Voice & Local Intent on Doubao: How ByteDance Merges POI Check-Ins with Web Q&As',
      'Four Grounded Actions for Brick-and-Mortar Stores Seeking Doubao Citations',
    ],
  },
  'yuanbao-wechat': {
    titleZh: '微信搜一问与腾讯元宝怎么给商家导流？公众号长文、视频号与搜狗收录的黄金三角闭环',
    titleEn: 'Tencent Yuanbao & WeChat Search: Unlocking Official Account Essays & Channels Attribution',
    subtitleZh: '没有独立大网站的中小店和 B2B 厂，靠几篇扎实的认证公众号百科问答照样能稳定进微信聊天推荐',
    subtitleEn: 'Even without a large custom domain, verified WeChat Official Account buyer guides and Channels links feed Yuanbao answers',
    directAnswerZh: '腾讯元宝与微信内“搜一问”高度偏爱微信公众号沉淀的高质量长文、微信认证服务号实体、视频号实拍以及搜狗网页索引。对中小门店而言，写一篇“价目明细 + 常见 10 个大白话提问 + 预约到店指引”并置顶公众号，成本最低且转化链路最短。',
    directAnswerEn: 'Tencent Yuanbao and WeChat Search weigh verified WeChat Official Account articles heavily alongside Channels profiles and Sogou web pages—giving local businesses a low-cost, high-conversion path straight inside WeChat.',
    headingsZh: [
      '微信里十亿人每天一边聊一边搜：元宝和搜一问究竟优先信任哪里的文章？',
      '把公众号推文当成“高权重大白话百科”来写的 4 个要领',
      '用好微信生态后，别忘了搭配你所在行业的专属合规台账表',
    ],
    headingsEn: [
      'Inside WeChat’s Walled Garden: Why Official Account Guides Feed Yuanbao First',
      'Four Formatting Habits That Make WeChat Articles AI-Extractable',
    ],
  },
  kimi: {
    titleZh: 'Kimi 长文档对比测评最怕“车轱辘废话”：怎样写出一份让模型主动附上你官网卡片的万字攻略',
    titleEn: 'Kimi Long-Context Synthesis: Structuring Multi-Page Buying Guides That Earn Inline Source Cards',
    subtitleZh: 'Kimi 擅长通读多网页做横向对比并亮出溯源角标，把长文写成清晰章程和对照矩阵最吃香',
    subtitleEn: 'Kimi excels at reading multiple long guides side by side—rewarding structured matrices and clear provenance anchors',
    directAnswerZh: '买家喜欢用 Kimi 一次性丢进三五家供应商网页让它挑毛病、做比选。Kimi 会完整抓读长文结构，并且非常看重结论溯源角标的清晰度；你的页面只要小标题分明、优点缺点不遮掩、交付标准与售后边界成块清晰，Kimi 往往把你列为最可信原始出处。',
    directAnswerEn: 'Buyers paste multiple vendor pages into Kimi for side-by-side audits. Clear section headings, frank trade-off notes, and cleanly grouped pricing tables help Kimi verify facts and attach direct source cards to your domain.',
    headingsZh: [
      '顾客把你和三家同行链接全喂给 Kimi 做对比时，它是怎么打分定胜负的？',
      '让 Kimi 自动把你标成“主要引文卡片”的 4 个排版硬规矩',
      '看完机制就去翻对应行业的“差文案 vs 好文案”逐字对比',
    ],
    headingsEn: [
      'When Buyers Ask Kimi to Compare Three Competitors Side by Side',
      'Four Structural Layouts That Earn Prominent Inline Source Cards in Kimi',
    ],
  },
  'qwen-quark': {
    titleZh: '夸克 AI 搜索与通义千问联动高德 POI：本地门头、制造百科和商品参数怎么吃满阿里系流量',
    titleEn: 'Qwen & Quark AI Search: Linking Amap Business Entities with Clean Product Knowledge Graphs',
    subtitleZh: '打通夸克极简问答卡片、高德地图商户实体核验与阿里系商贸参数库，承接年轻用户和供应链搜索',
    subtitleEn: 'Synchronize Amap POI details with clean HTML catalog sheets to capture Quark’s concise mobile and B2B answers',
    directAnswerZh: '通义千问与夸克 AI 搜索天然衔接高德地图 POI 精准定位以及丰富的商品知识图谱。本地实体店先保高德地图电话、夜间/节假日营业时间一分不差；制造与电商卖家则要把产品型号规格写成夸克易读的一问一答与参数矩阵。',
    directAnswerEn: 'Qwen and Quark Search tightly bridge Amap geolocation entities with structured commercial specifications—making accurate Amap POI parity and concise spec blocks crucial for both local shops and B2B factories.',
    headingsZh: [
      '年轻人爱用夸克、老板搜高德：阿里系 AI 搜索是怎么把地图和网页拧成一股绳的？',
      '抢占夸克首屏直出卡片与高德精准引流的 4 项实操对照',
      '马上挑一个细分行业，照着把你家高德地图和网页口径拉齐',
    ],
    headingsEn: [
      'Bridging Amap Locations & Product Specs Across Quark and Qwen',
      'Four Parity Checks for Local Shops and Suppliers Using Alibaba’s Search Stack',
    ],
  },
  'ernie-baidu': {
    titleZh: '百度 AI 搜索与文心一言的双轨规则：老牌官网索引、百度百科词条与爱企查信用如何相互抬轿',
    titleEn: 'Baidu AI Search & ERNIE: Aligning Official Site Indexes, Baike Entities & Corporate Registries',
    subtitleZh: '刘忠望 17 年百度生态实战干货：别放弃官网 SEO，新老双引擎已打通“企业信用+百家号+百科”互证通道',
    subtitleEn: '17-year veteran guide: Baidu AI Search fuses classic organic site rankings with Baidu Maps, Baike, and Aiqicha corporate trust',
    directAnswerZh: '在**刘忠望（核子GEO）**长期跟踪的百度架构中，百度 AI 搜索与文心直接站在百度传统网页索引、百度百科权威词条、百度地图商户认领及爱企查工商信用底座之上。维持干净迅速首包渲染的官网、清理死链，并确保地图与百科品牌名一致，等于同时拿稳传统自然排名与 AI 首屏摘要。',
    directAnswerEn: 'Baidu AI Search and ERNIE sit directly atop Baidu’s classic web index, Baidu Maps business verification, Baike entities, and Aiqicha corporate registries—rewarding clean server-rendered HTML with dual organic and AI placement.',
    headingsZh: [
      '“做了 AI 就不用管百度官网 SEO 了吗？”——刘忠望拆解百度双轨互证的底层真相',
      '官网 + 百科 + 百度地图 + 爱企查：4 端信用不打架的落地自检',
      '去行业实战区挑选对应模板，今天就把百度官网首页首段改出效果',
    ],
    headingsEn: [
      'Why Classic Baidu Web SEO Directly Fuels ERNIE AI Summary Inclusion',
      'Four Entity-Alignment Steps Linking Website, Maps, Baike & Corporate Filings',
    ],
  },
  'zhipu-glm': {
    titleZh: '智谱清言（GLM）写方案作采购调研爱查什么料？行业白皮书数据与分步施工/工艺规范是王道',
    titleEn: 'Zhipu Qingyan (GLM): Winning Research & B2B Procurement Prompts with Whitepaper Metrics',
    subtitleZh: '面对企业白领、工程师和研究者提问时，GLM 高度青睐逻辑成体系、带行业国标编号与工艺分解的深度文本',
    subtitleEn: 'When corporate planners query GLM for vendor methodology, citation-backed standards and step-by-step SOPs take priority',
    directAnswerZh: '大量职场白领、甲方调研员习惯用智谱清言起草采购对比和行业研究报告。模型检索时明显偏爱引用行业国标代码（GB/T）、真实测试基准、带清楚实施阶段划分的白皮书级文章——把你们厂或团队的验收 SOP 写出来，恰恰能卡住高端甲方心智。',
    directAnswerEn: 'Corporate analysts frequently draft vendor evaluation memos using Zhipu Qingyan, which favors pages citing formal national standards, acceptance criteria, and phased engineering methodologies.',
    headingsZh: [
      '甲方调研员用智谱清言写立项对比报告时，它到底爱从哪里抄专业依据？',
      '把公司多年真本事写成“国标依据 + 分步 SOP”的 4 个写法技巧',
      '结合 150 个行业中的任意领域，输出带实证表的高采信长文',
    ],
    headingsEn: [
      'Inside Corporate Vendor Research on Zhipu GLM: Standards & Structured SOPs',
      'Four Methodology Habits That Turn Company Know-How into GLM Reference Sources',
    ],
  },
  metaso: {
    titleZh: '无广告的秘塔 AI 搜索怎么排信源？带一手表格数据、无弹窗干净排版和原始文献链接最吃香',
    titleEn: 'Metaso Ad-Free Research Search: Earning Top Citations via Clean Tables & Zero Pop-Up Clutter',
    subtitleZh: '秘塔主打零广告学术化研究报告输出，彻底封杀水文拼凑页，谁有真实基准测试谁就是主引文',
    subtitleEn: 'Built for ad-free research syntheses, Metaso aggressively strips bloated ad wrappers to extract original data tables and citations',
    directAnswerZh: '秘塔 AI 搜索因为干净无广告、直接生成带目录和脑图的研究汇报，已成为咨询顾问、研发与理性消费者的心头好。秘塔抓取页面时，会主动过滤弹出广告遮罩和空话套话，直接将原生 HTML 数据对照表、真实案例统计及清晰的一手标准引用链接放在最前端。',
    directAnswerEn: 'Ad-free Metaso AI Search builds structured briefs and mind maps for serious researchers—rewarding fast, uncluttered HTML pages packed with primary data tables and explicit citations.',
    headingsZh: [
      '为什么连咨询顾问和研发都爱用秘塔查资料？干净无广告背后的抓源苛刻标准',
      '躲开营销垃圾弹窗，赢得秘塔深度报告头号引用的 4 项洁净准则',
      '挑出你所在行业最核心的三组实测硬数据，做成表格放上网',
    ],
    headingsEn: [
      'Why Analysts Trust Metaso—and How Its Parser Discards Ad-Cluttered Pages',
      'Four Clean-HTML & Primary-Data Rules for Earning Metaso Report Citations',
    ],
  },
  'xiaohongshu-ai': {
    titleZh: '小红书消费搜索与 AI 怎么判断“真种草”还是“水军软广”？避坑细节、实付票根与缺点坦白决定生死',
    titleEn: 'Xiaohongshu Discovery & Consumer AI: Real Receipts, Pitfall Notes & Honest Flaws Beat Fake Seeds',
    subtitleZh: '不再写假大空的“全网绝绝子闭眼冲”，学会用真实消费感受、适用禁忌与清晰花销明细承接高意向种草检索',
    subtitleEn: 'Modern social search punishes uniform praise—authentic spending breakdowns and candid "who should skip" notes win trust',
    directAnswerZh: '小红书已经成为本地消费、医美、婚庆、装修、餐饮和出游“下单前最后一道安检门”。无论是人工翻笔记还是站内 AI 汇总，系统都精明到极点：千篇一律夸完美的假笔记直接折损，而带有清晰实付账单、优缺点双面实测、以及哪些人群千万别买的真诚分享，反而被系统反复推荐。',
    directAnswerEn: 'Consumers check Xiaohongshu right before spending—and both users and AI summarizers recognize scripted uniform praise instantly. Authentic cost tallies and frank pros-and-cons drive sustained discovery.',
    headingsZh: [
      '千篇一律喊“姐妹闭眼冲”为什么推不动流了？社交消费 AI 的真假口碑识别机制',
      '写出“有缺点也有真香点”高互动实用避坑笔记的 4 个要点',
      '去餐饮、美容、装修或婚庆等 150 个行业里抄作业，看高采信实话怎么写',
    ],
    headingsEn: [
      'How Social Discovery Filters Spot Fake Seeding vs. Real Consumer Logs',
      'Four Authentic Storytelling Habits: Real Costs, Candid Caveats & Reply Depth',
    ],
  },
  'celia-harmony': {
    titleZh: '华为小艺与鸿蒙系统级意图框怎么接？一句话唤醒预约卡片背后的地址坐标与服务直连规范',
    titleEn: 'Huawei Celia & HarmonyOS Intents: Aligning Petal Maps & Clean Service Deep-Links for Voice Actions',
    subtitleZh: '针对千万鸿蒙手机车机用户的语音呼出需求，让花瓣搜索、门店位置和一句话直达预约卡片零障碍对接',
    subtitleEn: 'Help voice & car-screen assistants match your venue via Petal Maps accuracy, clean hours, and actionable booking cards',
    directAnswerZh: '越来越多人开车或拿手机直接对华为小艺说“帮我导航找一家现在还开着的靠谱修车/足浴/充电站”。鸿蒙意图框架和花瓣搜索靠结构化门店坐标、凌晨营业状态及直达服务接口来出卡片；商户先校对花瓣地图与营业时段，再保持官网语义清晰，就能自然吃进系统级快捷入口。',
    directAnswerEn: 'Drivers and phone users routinely ask Huawei Celia to route them directly to open repair bays, chargers, or late-night wellness spots. Clean Petal Maps verification, exact night hours, and structured service metadata turn voice prompts into visits.',
    headingsZh: [
      '车主在方向盘前喊一声“小艺找附近……”：系统级 AI 卡片是怎么一秒决断的？',
      '适配花瓣地图与鸿蒙语音直连卡片的 4 项基础工程与位置自检',
      '去能源、汽车、本地生活行业指南查看你门店最该锁死的营业时段表',
    ],
    headingsEn: [
      'Inside OS-Level Voice Intents: How Huawei Celia Routes Car & Mobile Users',
      'Four Petal Maps & Service-Card Parity Checks for Local Businesses',
    ],
  },
};
