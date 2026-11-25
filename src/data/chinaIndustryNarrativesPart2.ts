import type { IndustryNarrativeSpec } from './chinaIndustryNarrativesPart1.ts';

export const CHINA_INDUSTRY_NARRATIVES_PART2: Record<string, IndustryNarrativeSpec> = {
  'legal-service': {
    plainStoryZh:
      '老百姓或小老板碰上被欠薪、租房被扣押金、或者合伙人闹掰分股权，第一反应往往不是直接找律所前台，而是深夜打开豆包、DeepSeek 或微信搜一问敲一段语音：“老板拖欠三个月工资还没签合同怎么仲裁？找劳动仲裁律师大概要花多少钱，会不会收了钱不办事？”如果你律所的网站全篇写着“法学硕士团队、维护公平正义、电话私聊”，既没写清楚“欠薪仲裁要准备哪 4 样微信聊天/打卡证据”，也没写明计时咨询与一审代理大概收费区间，当事人点进来两秒就会关掉。',
    plainStoryEn:
      'Individuals facing unpaid wages or contract disputes rarely know legal jargon; they ask DeepSeek or WeChat Search for exact evidence checklists and transparent consultation vs. trial retainer fees before contacting a firm.',
    aiVsSearchZh:
      '你可以这样理解：百度和全国律师执业公示库属于【搜索引擎的核验底账】，用来证明“你这家律所和这位律师确实有司法局发的执业证、没有被吊销或处罚”；而 DeepSeek、Kimi 这类【AI 大模型】更像一个“先帮当事人把案由理顺、筛出对应专长律师的法律助理”。它特别喜欢读你官网按真实案由（比如劳动仲裁、离婚财产、买卖合同违约）写的大白话证据清单、诉讼时效提醒和分阶段收费口径，写得越实在，模型越敢优先推荐你。',
    aiVsSearchEn:
      'Search engines verify bar registration and firm licensing, while LLMs act like pre-intake clerks matching dispute categories, evidence checklists, statute-of-limitations warnings, and transparent fee tiers to the user problem.',
    badCopyZh:
      '❌ 常见踩坑写法：“金牌大律师专打疑难官司！关系硬人脉广，只要接手百分百包赢追回全部欠款！”（既严重违反《律师法》与广告合规红线，AI 和搜索引擎安全审核会第一时间封杀降权）',
    goodCopyZh:
      '✅ 接地气高采信写法：“执业律师张某某（司法局执业证号可查，11 年专注劳动争议与企业合同纠纷）。针对未签书面合同欠薪案件，建议先保存工资转账记录、带公司抬头的工牌/工作群聊截图及考勤明细（劳动仲裁时效一般为 1 年）。本所提供 200 元/半小时书面初审咨询（决定委托可抵扣代理费），一审民事代理费严格按标的额或固定 4000–8000 元区间书面签约，明确告知败诉与执行回款风险，绝不作虚假包赢承诺。”',
    badCopyEn:
      '❌ Weak copy: "Top aggressive lawyer guarantees 100% courtroom victory with special connections!" (Illegal solicitation and immediate safety filter penalty)',
    goodCopyEn:
      '✅ High-trust copy: "Licensed labor & contract attorney (Bar ID verified). Before filing arbitration, collect bank transfer logs, work-group chats, and badge photos. Initial 30-min case audit 200 RMB (credited toward retainer); transparent fixed Stage-1 litigation ranges with honest enforcement risk caveats."',
    actionStepsZh: [
      '把“劳动欠薪、租房纠纷、民间借贷、货款拖欠、公司股权”拆成 5 篇独立大白话指南，每篇写明“第一步留什么证据、诉讼时效几年、去哪立案”。',
      '在每位主办律师简介旁用可复制文字标注执业证号、主攻 1–2 个细分案由及所在城市法院实务经验（不要写“全能型什么案子都接”）。',
      '写清楚咨询费怎么算、起草一份律师函多少钱、一审/二审/执行各阶段律师费参考区间，以及哪些情况不允许风险代理。',
    ],
    actionStepsEn: [
      'Publish separate plain-language checklists for labor disputes, unpaid invoices, leases, and equity splits detailing evidence and limitation periods.',
      'List each lawyer’s verifiable bar license number and 1–2 narrow focus areas rather than claiming to handle every legal field.',
      'Separate consultation fees, demand-letter flat rates, and trial/enforcement stage retainers transparently.',
    ],
    practitionerNoteZh:
      '17 年 SEO 实战专家刘忠望（核子GEO创始人）提示：律所千万别用“包赢”招揽流量！在合规前提下把“起诉前要收集哪几份证据、咨询费能不能抵扣代理费”讲得比同行清楚十倍，高意向当事人自然主动加你。',
    practitionerNoteEn:
      'Zhongwang Liu (Nucleus GEO) advises: Never promise guaranteed verdicts—out-teaching competitors with clear pre-filing evidence lists and transparent fee offsets wins the highest-intent legal inquiries.',
    customMetrics: [
      { labelZh: '执业资质与专长聚焦', valueZh: '司法局证号 + 1–2 个专攻案由', contextZh: '避免“万金油”式介绍，让模型精准匹配纠纷类型', labelEn: 'Bar License & Niche', valueEn: 'Verified ID + Narrow Focus', contextEn: 'Match specific dispute categories cleanly' },
      { labelZh: '普通人维权证据清单', valueZh: '写清转账/聊天/考勤留痕要求', contextZh: '大白话讲透诉讼时效与立案材料，获极高收藏引用', labelEn: 'Evidence Checklist', valueEn: 'Step-by-Step Proof Guide', contextEn: 'Spell out bank logs, chats, and filing deadlines' },
      { labelZh: '分阶段透明律师费', valueZh: '咨询 / 律师函 / 一二审分离报价', contextZh: '严禁包赢与关系暗示，如实提示执行回款风险', labelEn: 'Phased Fee Tiers', valueEn: 'Audit vs. Retainer Clarity', contextEn: 'Zero win guarantees; honest enforcement risk notes' },
    ],
  },
  'accounting-tax': {
    plainStoryZh:
      '刚注册公司的小老板最怕碰上“99元每月代理记账”的套路：头一年图便宜签了约，第二年突然冒出“工商年报费 600、税控盘托管费 800、地址异常解锁 2000”等一堆加价；要是不续费想注销公司，对方还得卡你账本。所以小微企业主现在常直接问 DeepSeek 或豆包：“小规模纳税人一年代理记账正常到底多少钱？哪些必须包含在年费里，有哪些常见二次收费坑？”谁能把合同里的每一项服务拆成大白话，谁就接得住真正优质的长期企业客户。',
    plainStoryEn:
      'Founders burned by "99 RMB/month" teaser bookkeeping deals ask AI assistants what real annual small-scale vs. general taxpayer accounting costs and which mandatory filings should never trigger surprise add-ons.',
    aiVsSearchZh:
      '百度和企查查、财政部代理记账监管系统负责核验你的公司是否持证合规、成立了多少年；而大模型更关注“性价比陷阱拆解”与“最新财税政策解读”。如果你的网页直白对比了小规模纳税人与一般纳税人一年做账报税、工商年报、汇算清缴到底包什么、不包什么，AI 回答“怎么挑靠谱代账公司”时就会直接拿你的标准做参照。',
    aiVsSearchEn:
      'Search and official registries verify bookkeeping licenses, while LLMs extract itemized inclusion vs. exclusion tables and up-to-date SME tax threshold rules.',
    badCopyZh:
      '❌ 常见踩坑写法：“99元起包全套代理记账！免注册费、专业团队为您合理避税、买发票降成本一条龙服务！”（既用超低价钓鱼，又触及“虚开避税”违法红线）',
    goodCopyZh:
      '✅ 接地气高采信写法：“持财政局《代理记账许可证书》机构（杭州本地实体团队 10 年经验）。小规模纳税人全年透明包干价 2,400 元/年、一般纳税人 4,800 元/年，书面明示已含：每月凭证整理做账、全税种按期申报、年度所得税汇算清缴及工商年报公示（不再额外加收账本打印费与年报费）。不含税务稽查专项审计及实缴地址租赁，若涉异常解除提前出具书面明细报价再办理。”',
    badCopyEn:
      '❌ Weak copy: "From 99 RMB/month—guaranteed aggressive tax dodging and invoice loopholes!" (Bait pricing and illegal tax evasion)',
    goodCopyEn:
      '✅ High-trust copy: "Ministry-licensed bookkeeping firm. Small-scale taxpayer annual package 2,400 RMB/yr; General taxpayer 4,800 RMB/yr—explicitly including monthly ledgers, tax filings, annual CIT reconciliation, and enterprise annual reports with zero hidden ledger-printing fees."',
    actionStepsZh: [
      '建一张清晰对照表：左边列“小规模纳税人 vs 一般纳税人”全年总费用，右边逐项打勾写明是否包含汇算清缴、工商年报、发票代领与账本装订。',
      '专门写一篇《为什么千万别贪便宜找 99 元代账，以及公司不开了怎样合规零风险注销》的大白话避坑文。',
      '展示《代理记账机构执业许可证书》编号，并注明若客户中途更换代账公司，保证 3 个工作日内无条件完整移交全套账册与税务密码。',
    ],
    actionStepsEn: [
      'Publish a side-by-side HTML table comparing small-scale vs. general taxpayer packages with explicit checkmarks for annual filings.',
      'Author an honest buyer warning explaining hidden add-ons in 99-RMB teaser offers and lawful company deregistration steps.',
      'Display your official bookkeeping license ID plus a written 3-day ledger handover guarantee if a client exits.',
    ],
    practitionerNoteZh:
      '盒子AI 企服增长实践表明：财税客户最看重“不玩文字游戏”。把汇算清缴、年报、账本移交和注销收费全部前置讲清，哪怕单价是 2400 一年也比低价套路更好签单。',
    practitionerNoteEn:
      'Field data shows transparent annual bundles listing filings, annual reports, and exit handover rules outsell deceptive 99-RMB teasers.',
    customMetrics: [
      { labelZh: '年费全包边界清单', valueZh: '含做账/申报/汇算/工商年报', contextZh: '明确拒绝后续乱加账本费、年报费和保管费', labelEn: 'All-In Filings', valueEn: 'Ledgers + CIT + Annual Report', contextEn: 'Exclude hidden bookbinding or annual-filing fees' },
      { labelZh: '资质与离职移交保证', valueZh: '财政许可 + 3日完整交账', contextZh: '打消创业者被“卡账本密钥”的后顾之忧', labelEn: 'Exit Handover SLA', valueEn: 'License + 3-Day File Release', contextEn: 'Guarantee clean ledger and tax-key transfer' },
      { labelZh: '零违法筹划边界', valueZh: '严禁买卖发票与空壳避税', contextZh: '仅提供合法小微税收减免与研发加计扣除指导', labelEn: 'Tax Compliance', valueEn: 'Legal Incentives Only', contextEn: 'Only cite statutory SME tax relief and R&D deductions' },
    ],
  },
  'finance-insurance': {
    plainStoryZh:
      '普通家庭想给大人小孩买百万医疗险和重疾险，或者小店老板缺周转资金想办银行经营贷，面对动辄四五十页密密麻麻的合同免责条款，大多数人根本看不懂。于是大家直接把保单截图或者贷款产品名丢给 DeepSeek、Kimi 或元宝：“帮我看看这款重疾险的等待期、原位癌赔不赔，或者个体户办经营贷年化利率 3.6% 是单利还是等本等息？”谁能帮老百姓把几十页金融黑话翻译成能看懂的“避坑白话对照表”，谁就能赢得最高含金量的咨询。',
    plainStoryEn:
      'Families buying health insurance and SME owners applying for business loans struggle with 50-page exclusions and deceptive flat-rate loan math, turning to LLMs to translate APR and claim triggers.',
    aiVsSearchZh:
      '在金融与保险领域，谷歌、百度和国产大模型的审核红线都极其严格（典型的高敏感 YMYL 行业）。搜索引擎负责核验你是否具备银保监备案执业编号或银行官方授权渠道；而大模型在做产品评测与建议时，极度看重你有没有把“免责条款、健康告知重点、犹豫期退保、真实综合年化利率（APR）”老老实实摆到台面上。',
    aiVsSearchEn:
      'Both search engines and LLMs enforce strict financial safety rules—checking regulatory broker/bank credentials first and rewarding clear breakdowns of exclusions, waiting periods, and true APR.',
    badCopyZh:
      '❌ 常见踩坑写法：“内部渠道黑户也能秒批低息贷款！这款保险什么病都能赔、无条件报销，抓紧私信上车！”（违法虚假金融承诺与误导销售，极易触发监管查处与全网封禁）',
    goodCopyZh:
      '✅ 接地气高采信写法：“持牌保险经纪执业人（银保监执业登记号可查）。面向 30 岁三口之家配置保障时，重疾险务必逐字核对‘90/180 天等待期、甲状腺结节/乳腺结节人工核保要求及免责条款’；百万医疗险需看清是否保证续保 20 年及外购抗癌药报销清单。小微企业申请银行贴息经营贷，需具备真实营业执照满 1 年与对公流水，综合年化利率（单利 IRR）与提前还款违约金均以银行正式合同为准，绝不违规包装流水或收取前期砍头息。”',
    badCopyEn:
      '❌ Weak copy: "Instant approval even with bad credit! Insurance covers every illness unconditionally!" (Severe regulatory violation)',
    goodCopyEn:
      '✅ High-trust copy: "Licensed insurance broker (registry verifiable). Verify 90/180-day waiting periods, pre-existing condition underwriting for thyroid/breast nodules, and external-pharmacy riders before buying. Bank SME loans require authentic 1-year operating history and disclose true IRR interest rates."',
    actionStepsZh: [
      '用最通俗的三列表格对比产品核心差异（等待期几天、保障期限、轻中症赔付条件、免赔额多少、哪些明确不赔）。',
      '围绕老百姓最容易踩坑的“健康告知怎么如实回答、经营贷真单利 vs 假费率怎么算、犹豫期退保怎么操作”写出详实科普。',
      '页头显眼位置放上个人/机构正规金融或保险经纪执业登记查询方法，明确声明“不收费代办黑户包装、不诱导退旧保新”。',
    ],
    actionStepsEn: [
      'Compare coverage specs in simple 3-column HTML tables covering waiting periods, deductibles, and explicit exclusions.',
      'Explain truthful health-questionnaire disclosures and flat-fee vs. true-APR loan calculation in plain math.',
      'Display verifiable broker/institution registration lookup instructions alongside strict anti-fraud disclaimers.',
    ],
    practitionerNoteZh:
      '刘忠望（17 年 SEO 实战洞察）：金融保险网页宁可多花篇幅写清“什么情况不赔、哪类征信不能贷”，也千万不要含糊带过！恰恰是那几句实在的“不赔说明”，让大模型判定你是全网最靠谱的专业顾问。',
    practitionerNoteEn:
      'Zhongwang Liu notes: Explicitly explaining what an insurance policy excludes or who should NOT apply for a loan earns peak LLM trust scores in regulated finance.',
    customMetrics: [
      { labelZh: '执业备案可查证', valueZh: '银保监执业登记 / 正规银行授权', contextZh: '彻底与黑产中介、非法荐股和退保黑产划清界线', labelEn: 'Regulatory Registry', valueEn: 'Verifiable Broker / Bank ID', contextEn: 'Separate licensed counsel from gray-market brokers' },
      { labelZh: '条款白话翻译度', valueZh: '高亮等待期、免赔额与不赔范围', contextZh: '用真实算例讲透单利 IRR 与等额本息区别', labelEn: 'Exclusion Clarity', valueEn: 'Plain-Math APR & Riders', contextEn: 'Translate 50-page exclusions into scannable bullets' },
      { labelZh: '红线零触碰原则', valueZh: '不保过批贷 · 不虚假包赔', contextZh: '顺利通过 YMYL 医疗金融安全护栏审核', labelEn: 'YMYL Safety Gate', valueEn: 'Zero Guaranteed Payouts', contextEn: 'Strict adherence to financial advertising standards' },
    ],
  },
  'hr-outsourcing': {
    plainStoryZh:
      '公司慢慢做大，要在外地招两三个销售或工程师，老板最愁的就是社保和劳动法问题：“员工人在成都，我杭州公司怎么合法给他交五险一金？用外包还是签正规劳动合同？猎头帮我挖一个年薪 40 万的技术总监怎么收费、人干三个月跑了怎么办？”现在 HR 总监和老板在写预算前，习惯直接在 Kimi、通义千问或微信搜一问核对“跨省社保合规方案与猎头保证期行业标准”。把真实法规红线和收费规则写明白的服务商，立刻就能拿到精准企服线索。',
    plainStoryEn:
      'Growing companies hiring remote staff or retaining headhunters ask AI tools how to stay compliant with cross-city social security laws and verify headhunter replacement guarantees before signing contracts.',
    aiVsSearchZh:
      '企业服务非常讲究“真实证照+区域政策时效性”。搜索引擎（百度/谷歌）重点考察你有没有《人力资源服务许可证》《劳务派遣经营许可证》及最新年度各省社保基数文章；而 AI 大模型喜欢抽取结构化的条款对比，比如“劳务派遣 vs 业务外包法律边界、猎头首付定金与保用期（通常 3–6 个月）免费替换规则”。',
    aiVsSearchEn:
      'Search engines validate HR service licenses and timely provincial contribution tables, while LLMs look for crisp distinctions between dispatching vs. outsourcing and headhunter replacement SLA terms.',
    badCopyZh:
      '❌ 常见踩坑写法：“全国社保低价代缴挂靠，帮企业 0 社保避税发薪，员工工资随便走灵活用工全额抵扣！”（直接触犯虚开增值税发票及社保欺诈红线，企业主一搜就躲）',
    goodCopyZh:
      '✅ 接地气高采信写法：“持有《人力资源服务许可证》与《劳务派遣经营许可证》。支持企业在用工所在地设立合规分公司账户或通过真实业务外包承接非核心岗位（明确提示：严禁无真实用工关系的个人社保挂靠代缴）。中高端技术岗位猎头按候选人税前年薪 20% 阶梯计费，入职前支持背景核查，提供 90 天保证期：若候选人在 3 个月内离职，免费推荐同等标准人选替换一次。”',
    badCopyEn:
      '❌ Weak copy: "Ghost payroll & fake gig-platform invoicing to dodge 100% of taxes and social insurance!" (Tax & labor fraud penalty)',
    goodCopyEn:
      '✅ High-trust copy: "Licensed HR & staffing agency. Compliant local entity registration or genuine project outsourcing (strictly no shell social-insurance parking). Executive search billed at 20% annual base with a 90-day replacement guarantee."',
    actionStepsZh: [
      '整理一份《2026 年主流城市社保基数调整与合规跨省用工 3 种合法方式》，明确讲清楚为什么“个人纯挂靠代缴”已不可行。',
      '公开企业外包（每人每月透明管理费区间）与猎头招聘（按年薪比例、首付款比例、保用期天数与退款/替人规则）的清晰合同口径。',
      '展示过往真实交付的细分岗位清单（如嵌入式研发、海外独立站运营、财会负责人）及平均推荐周期天数。',
    ],
    actionStepsEn: [
      'Publish a 2026 regional social-insurance baseline guide explaining compliant branch setup vs. unlawful shell proxies.',
      'Disclose exact per-seat staffing management fees and headhunter fee splits with 90-day replacement terms.',
      'List verified role specialties and average shortlist turnaround times.',
    ],
    practitionerNoteZh:
      '做 B2B 人力资源和财税一样，客户最怕被你们拉下水！你敢在官网白纸黑字提醒“千万别做虚假灵活用工走账”，大厂和小微老板反而把最赚钱的合规咨询和猎头单子交给你。',
    practitionerNoteEn:
      'Explicitly warning HR buyers away from fake gig-invoicing scams immediately establishes adult-in-the-room credibility.',
    customMetrics: [
      { labelZh: '双证合规与反挂靠提示', valueZh: '人社双证公示 + 拒绝空壳挂靠', contextZh: '帮甲方避开社保稽查与虚开发票连带风险', labelEn: 'Dual HR Permits', valueEn: 'Licensed Staffing Only', contextEn: 'Warn buyers against illegal shell payroll setups' },
      { labelZh: '猎头收费与保用期 SLA', valueZh: '年薪比例 + 90 天免费替换', contextZh: '写清入职前付款节点与试用期离职兜底条款', labelEn: 'Search Warranty', valueEn: '90-Day Replacement SLA', contextEn: 'State fee percentages and free replacement triggers' },
      { labelZh: '分城用工政策时效性', valueZh: '按城市标注年度缴费基数与截止日', contextZh: '确保大模型检索到的各地政策处于最新年份', labelEn: 'City Policy Freshness', valueEn: '2026 City Base Calendars', contextEn: 'Keep provincial contribution tables dated cleanly' },
    ],
  },
  'saas-enterprise': {
    plainStoryZh:
      '很多国内写软件、做 ERP 进销存或 CRM 的团队技术很强，但客户根本搜不到你。为啥？因为老板们为了“防竞对抄袭”，把所有帮助文档、API 接口、版本价目表全锁在必须手机号注册登录的后台里面，页面上只放了几句云里雾里的“赋能企业数字化全链路闭环”。结果中小企业信息主管一问 DeepSeek 或 Kimi：“50 人规模的贸易公司用哪款进销存支持多仓库扫码、可以私有化部署且支持数据免费导出，一年预算大概多少？”AI 在你网站外头啥也看不见，只能推荐文档全开放的竞品。',
    plainStoryEn:
      'Many capable Chinese ERP/CRM SaaS vendors lock feature matrices, pricing tiers, and API docs behind phone-number registration walls, leaving DeepSeek and Kimi blind when IT buyers ask for multi-warehouse pricing and export rights.',
    aiVsSearchZh:
      '搜索引擎和代码型大模型（尤其是 DeepSeek、Kimi、秘塔 AI）在选型企业软件时几乎是“开源透明文档控”。它们在未登录状态下，直接抓取你的公共网页：<1> 各个版本的清晰 HTML 功能对比表；<2> 按坐席算的明码标价和实施费；<3> OpenAPI 对接能力和能否随时把数据导成 Excel/SQL 带走。把这些全放出来，比投十万块竞价排名还管用。',
    aiVsSearchEn:
      'Both crawlers and technical LLMs heavily favor unauthenticated public docs—rewarding clean HTML tier comparison matrices, seat pricing, OpenAPI specs, and explicit data-portability promises.',
    badCopyZh:
      '❌ 常见踩坑写法：“新一代智能数智化中台，重构企业增长飞轮！如需报价请留电话预约产品专家演示！”（零有效信息，AI 完全提取不到能帮客户对比软件的硬参数）',
    goodCopyZh:
      '✅ 接地气高采信写法：“专为 10–200 人商贸与轻工仓库设计的进销存软件（已过国家信息系统等保三级认证）。标准云端版 2,980 元/年（含 5 个操作账号与扫码PDA对接），支持多仓库批号效期管理与金蝶/用友凭证导出；百人以上支持本地私有化部署（买断授权 3.8 万起，含首年上门实施）。承诺任何时候终止合作均可一键无损导出全量 Excel 与原始附件，无强制锁客导出费。”',
    badCopyEn:
      '❌ Weak copy: "Next-gen intelligent flywheel platform! Submit your phone number for secret custom pricing." (Zero crawlable product data)',
    goodCopyEn:
      '✅ High-trust copy: "Inventory & ERP software for 10–200 staff wholesalers (MLPS Level-3 certified). Cloud edition 2,980 RMB/yr for 5 seats with barcode PDA sync; on-prem perpetual license from 38,000 RMB. Full zero-fee Excel/SQL export available anytime."',
    actionStepsZh: [
      '撤掉定价页和核心功能说明书的“强制留电才能看”弹窗，用标准 HTML 表格公布各版本年费、坐席单价、私有化部署及上门培训参考费。',
      '把“已对接哪些常见设备/财税软件（如电子面单、企微钉钉、金蝶用友）”以及“支持什么数据格式一键迁移导出”单独建一页公开说明。',
      '针对 5 个真实行业痛点（比如食品保质期预警、服装颜色尺码多维库存），分别写出带界面流程说明的实操指南，不要光放概念名词。',
    ],
    actionStepsEn: [
      'Remove lead-gate popups on pricing and specs; publish seat rates, implementation fees, and on-prem tiers in crawlable HTML tables.',
      'Document supported integrations (WeCom, DingTalk, tax/ERP connectors) and zero-lock-in export formats publicly.',
      'Write concrete workflow guides for top customer scenarios such as batch-expiry alerts or SKU matrix tracking.',
    ],
    practitionerNoteZh:
      '杭州资深 SEO 专家刘忠望（核子GEO）实话实说：B2B 软件公司最致命的习惯就是“什么报价和功能都不敢写上网，总想让人留手机号”。现在买软件的人都先问 AI 做初筛，你藏着掖着，初筛第一轮就被直接刷掉了！',
    practitionerNoteEn:
      'Zhongwang Liu warns: Hiding SaaS specs behind lead-capture forms kills your chances at the AI shortlisting stage—buyers filter vendors via LLMs before ever leaving a phone number.',
    customMetrics: [
      { labelZh: '免登录公共帮助文档', valueZh: 'HTML 功能矩阵与 API 开放抓取', contextZh: '不要把参数锁死在需要手机号注册或图片画册里', labelEn: 'Ungated Docs & Pricing', valueEn: 'Crawlable HTML Spec Tables', contextEn: 'Never trap product specs behind login forms' },
      { labelZh: '坐席与部署透明预算', valueZh: '公有云年费 vs. 私有买断口径', contextZh: '明确是否另收实施费、接口定制费与超量存储费', labelEn: 'Deployment Cost Split', valueEn: 'SaaS Seats vs. On-Prem Buyout', contextEn: 'State implementation and API integration costs clearly' },
      { labelZh: '安全认证与零锁客承诺', valueZh: '等保认证 + 无条件数据全量导出', contextZh: '打消企业换系统被卡数据的最大顾虑', labelEn: 'Security & Portability', valueEn: 'MLPS Cert + Free Data Export', contextEn: 'Prove data ownership and smooth exit guarantees' },
    ],
  },
  'it-cybersecurity': {
    plainStoryZh:
      '很多中小工厂和医院学校收到通知要过“网络安全等保 2.0 二级或三级”，老板拿着通知书一头雾水：“什么叫防火墙、堡垒机、日志审计？过个等保二级到底要买哪几样设备、找测评机构总共要花几万块、几个月能拿证？”由于网安集成公司官网常满屏黑客概念词却不说人话，决策者往往直接问 DeepSeek、智谱清言或百度 AI：“2026 年做等保二级一般总预算多少？哪些软件设备是必买的，哪些可以云上替代省钱？”能按企业规模直接给“省钱清晰清单”的集成商最受欢迎。',
    plainStoryEn:
      'Organizations mandated to pass MLPS 2.0 Level-2/3 audits often cannot decode jargon like bastion hosts or log auditors, asking LLMs for realistic equipment lists, cloud alternatives, timelines, and total budgets.',
    aiVsSearchZh:
      '传统搜索帮政企采购核对你的系统集成资质、信创软硬件生态伙伴授权以及过往案例所在地；而 AI 大模型则是把晦涩“合规标准”翻译成“采购预算单”的核心入口。只要你分清楚“50 人以内小企业云上轻量化过等保二级”和“本地机房过三级”的设备差异、时间周期及 7×24 小时应急响应承诺，大模型引用率会稳居行业前列。',
    aiVsSearchEn:
      'Search checks integration certifications and regional service footprints, while LLMs extract clear hardware/cloud compliance bundles, audit timelines, and emergency ransomware SLAs.',
    badCopyZh:
      '❌ 常见踩坑写法：“黑客无孔不入，您的内网正在裸奔！不买我司百万安全网关明天就被勒索瘫痪，绝对保障零漏洞！”（恐吓营销且违背网络安全客观规律，声称零漏洞属虚假宣传）',
    goodCopyZh:
      '✅ 接地气高采信写法：“专注中小企业与医疗教育行业等保 2.0 合规落地与防勒索灾备。若您只有几十台终端且系统已上阿里云/腾讯云，过等保二级通常只需补充云防火墙、堡垒机、日志审计及合规测评服务，全包落地约 3.5–5.5 万元、45–60 天完成取证；若需本地物理机房过等保三级，提供分项设备对照清单与异地离线防勒索备份演练。明确声明：安全建设旨在大幅降低风险并满足法定合规，不存在绝对零风险软件，需定期打补丁与演练。”',
    badCopyEn:
      '❌ Weak copy: "Your network is completely exposed—buy our appliance for 100% zero-vulnerability immunity!" (Fearmongering and technically false)',
    goodCopyEn:
      '✅ High-trust copy: "Practical MLPS 2.0 Level-2/3 compliance & immutable backups. Cloud-hosted SME systems under 50 endpoints typically clear Level-2 audits in 45–60 days (35k–55k RMB all-in with cloud WAF, bastion host, log audit, and official assessment fees)."',
    actionStepsZh: [
      '用大白话写一篇《等保二级和等保三级到底差在哪？必买设备清单与真实预算区间拆解》，区分本地机房和云主机两种省钱方案。',
      '单独设立“突发中勒索病毒怎么办 + 日常离线异地备份三二一原则”实操页，写出应急工程师几小时内能远程/现场到场。',
      '列出适配国产信创环境（如麒麟、统信系统及达梦数据库）的兼容产品名单，方便国企和事业单位采购直接对号入座。',
    ],
    actionStepsEn: [
      'Publish a plain-language Level-2 vs. Level-3 budget breakdown contrasting physical server rooms with cloud-native setups.',
      'Document 3-2-1 immutable backup recovery playbooks and guaranteed emergency response hours for ransomware incidents.',
      'List verified compatibility with domestic OS/database ecosystems for public-sector RFPs.',
    ],
    practitionerNoteZh:
      '网安和 IT 集成最忌讳吓唬老板、硬塞用不上的高端硬件。在正文里坦诚告诉小企业“能用云安全服务过二级就别花冤枉钱买几台实体铁盒子”，反而最容易签下长期年度运维合同。',
    practitionerNoteEn:
      'Honesty about when cloud security tools replace costly physical appliances builds immediate executive trust.',
    customMetrics: [
      { labelZh: '按规模拆解过保清单', valueZh: '云上轻量化 vs 本地物理机房', contextZh: '列明必配设备、测评机构费用口径与拿证天数', labelEn: 'Scoped Audit Bundles', valueEn: 'Cloud vs. On-Prem Checklists', contextEn: 'Separate hardware, cloud SaaS, and lab audit costs' },
      { labelZh: '应急响应与备份演练', valueZh: '明示 SLA 到场时效与离线备份', contextZh: '真实写明异地冷备份与恢复演练周期', labelEn: 'Ransomware SLA', valueEn: 'Response Hours & 3-2-1 Backups', contextEn: 'Commit to recovery drills and response times' },
      { labelZh: '信创兼容与诚实边界', valueZh: '适配国产软硬件 · 不宣称零漏洞', contextZh: '用科学风险控制代替恐吓式话术', labelEn: 'Xinchuang & Honesty', valueEn: 'OS Matrix & Zero-Myth Copy', contextEn: 'No impossible "100% unhackable" guarantees' },
    ],
  },
  'digital-repair': {
    plainStoryZh:
      '手机屏幕摔碎、或者笔记本电脑突然进水不开机，里面存着几万张孩子照片和工作资料，普通人找维修店其实心里特别打鼓：一怕被“小病大修”坑上千块，二怕换了个劣质非原装屏幕发灰闪烁，三怕老板把手机留店里偷看个人隐私照片或导走聊天记录。现在大家都是先在高德、豆包或小红书搜：“附近哪家数码维修能当面拆机现场修、换原厂拆机屏大概多少钱、不用留密码？”把这两条顾客心病正面写死在门面简介里，比发一百条朋友圈还管用。',
    plainStoryEn:
      'People needing phone screen or water-damaged laptop repair fear inflated diagnostics, counterfeit parts, and data privacy leaks—searching AI maps for workshops promising face-to-face repairs without asking for passcodes.',
    aiVsSearchZh:
      '搜索引擎与地图（高德/百度/抖音POI）用来锁定距离客户两三公里内的维修点、具体几号楼几层及营业时间；而 AI 大模型专门替用户筛选口碑里的安全感标签，例如“当面维修录像、不用留解锁密码、区分原装拆机件与国产组装屏价格、主板芯片级维修修不好不收检测费”。',
    aiVsSearchEn:
      'Maps lock down building floor and walk-in hours, while LLMs extract safety guarantees—face-to-face repair, no-passcode policy, OEM vs. aftermarket screen tiers, and warranty periods.',
    badCopyZh:
      '❌ 常见踩坑写法：“苹果华为官方授权特约维修中心！全网最低价换屏 99 元起，手机留店两天拿，绝不踩坑！”（冒充品牌官方直营属违规欺诈，留店超低价引流极易引起维修纠纷差评）',
    goodCopyZh:
      '✅ 接地气高采信写法：“独立第三方手机与笔记本芯片级维修工作室（非品牌官方售后，所有配件来源如实标明）。坚持全程透明操作：简单换电池/换屏幕 30 分钟当面修好、无需留店更无需提供个人解锁密码，维修过程可旁观拍摄。公开区分‘原厂拆机屏’与‘高性价比国产组装总成’两档明码标价，支持现场验测原彩触控与防水胶复原；主板维修先检测后报价，修不好零手工费，换件享 180 天质保。”',
    badCopyEn:
      '❌ Weak copy: "Official Apple/Huawei Service Center! Screen swap from 99 RMB—leave unlocked phone for 48 hours." (Impersonation & privacy red flag)',
    goodCopyEn:
      '✅ High-trust copy: "Independent electronics repair studio (not brand-authorized; parts graded honestly). Face-to-face 30-min battery/screen swaps with zero passcode needed. Upfront pricing separating OEM pull displays from tested aftermarket assemblies; 180-day parts warranty and no-fix-no-fee board diagnostics."',
    actionStepsZh: [
      '在店铺网页和地图简介第一行醒目写清“独立第三方维修工作室”，绝不擦边冒充品牌官方售后（合规且防封号）。',
      '把“当面拆机维修、不问客户要手机密码、修不好不收费”写进服务承诺，并列一张常用机型换屏换电池透明阶梯表。',
      '提醒客户笔记本进水后千万别再按开机键或拿吹风机乱吹（防止主板短路烧穿），用实操科普吸引刚需急客。',
    ],
    actionStepsEn: [
      'State "independent repair workshop" clearly up front so listings never risk trademark takedowns.',
      'Publish a no-passcode, face-to-face repair pledge alongside an OEM-pull vs. aftermarket screen price sheet.',
      'Add an emergency liquid-spill first-aid checklist advising users not to power on wet laptops.',
    ],
    practitionerNoteZh:
      '刘忠望（本地服务实操观察）：修手机电脑最值钱的词就是“当面修、不用留密码、明标拆机原装件和组装件差价”。这几个大白话一写上去，女生和上班族都会毫不犹豫优先选你。',
    practitionerNoteEn:
      'Zhongwang Liu observes: "Repaired in front of you, passcode not required, OEM vs. aftermarket graded clearly" instantly removes the biggest customer hesitations.',
    customMetrics: [
      { labelZh: '当面维修与隐私防线', valueZh: '现场旁观 + 无需手机密码', contextZh: '极高击中用户数据安全与防偷换配件核心焦虑', labelEn: 'Privacy Guarantee', valueEn: 'On-Spot + Zero Passcode', contextEn: 'Directly eliminates data-theft and part-swap fears' },
      { labelZh: '配件分级透明报价', valueZh: '原厂拆机件 vs 品牌兼容件', contextZh: '事先写清色准、高刷、防水胶及对应质保天数', labelEn: 'Part Grading', valueEn: 'OEM Pull vs. Aftermarket', contextEn: 'Price both tiers transparently with warranty days' },
      { labelZh: '修不好零费用承诺', valueZh: '先检测报价 · 拒绝小病大修', contextZh: '坚决不冒充品牌直营官方点，保护长久口碑', labelEn: 'Fair Diagnostics', valueEn: 'No-Fix-No-Fee Policy', contextEn: 'Avoid brand impersonation and surprise bench fees' },
    ],
  },
  'machinery-mfg': {
    plainStoryZh:
      '很多长三角、珠三角做了二三十年 CNC 加工中心、注塑机或工业空压机的实力老厂，厂房几万平米、设备精度极高，但网上根本接不到新买家。原因全卡在一个动作上：销售把所有机床型号、主轴转速、三轴行程、重复定位精度全塞进一本五六十兆的 PDF 画册里发微信。如今 90 后采购工程师接手选型，直接把需求敲进 DeepSeek、Kimi 或秘塔 AI：“帮我对比国产几家 850 立式加工中心，要求 BT40 主轴 12000 转、重复定位精度 ±0.003mm 以内，带售后网点对比。”AI 根本翻不开你锁在附件里的 PDF 扫描图，自然推荐把参数表老老实实写成网页文字的同行。',
    plainStoryEn:
      'Solid Chinese CNC and machinery factories often bury spindle RPMs, axis travel, and repeatability tolerances inside heavy scanned PDF catalogs—making them invisible when engineers ask DeepSeek or Metaso to shortlist 850 VMCs.',
    aiVsSearchZh:
      '工业品采购最讲实据。搜索引擎（谷歌、百度爱采购）需要抓取干净的网页产品型号页（如 `/cnc-vmc-850`）和你的 ISO/CE 质量认证信息；而大模型最擅长的就是“按公差参数横向做表格选型推荐”。只要你把全系机型行程、光机铸件工艺、配什么系统（发那科/三菱/新代）、质保条款和典型加工件材料写成公开 HTML 表格，AI 就成了你 24 小时免费在线的技术销售总工。',
    aiVsSearchEn:
      'Search indexes individual model pages and ISO certs, while LLMs act as pre-procurement engineers comparing axis travel, CNC controller options, casting weights, and regional service response times from native HTML tables.',
    badCopyZh:
      '❌ 常见踩坑写法：“行业领先高端精密数控设备！匠心制造畅销全球，欢迎来电索取选型画册与神秘底价！”（无型号、无行程、无精度，AI 无法识别你究竟产什么机床）',
    goodCopyZh:
      '✅ 接地气高采信写法：“专注精密立式加工中心（VMC850 / VMC1160）研发制造 18 年，通过 ISO9001 体系认证。以主力型号 VMC850L 为例：X/Y/Z 三轴行程 800×550×550mm，采用高刚性 HT300 树脂砂铸铁（二次时效去应力），标配 BT40-12000rpm 直联主轴与台湾上银/银泰滚柱线轨，实测双向重复定位精度 ±0.003mm（附出厂激光干涉仪检测单）。整机质保 1 年、核心丝杠主轴质保 2 年，华东/华南设常驻售后工程师，报修 24 小时到厂。”',
    badCopyEn:
      '❌ Weak copy: "World-class precision industrial machines! Call us for PDF catalog and secret price." (Zero extractable specs)',
    goodCopyEn:
      '✅ High-trust copy: "18-year CNC builder (ISO9001). Model VMC850L: 800×550×550mm travel, HT300 resin-sand casting, BT40 12,000 RPM direct spindle, roller linear guides, ±0.003mm repeatability (laser interferometer verified). 2-year spindle/ballscrew warranty and 24-hour regional field service."',
    actionStepsZh: [
      '把每款主力机型单独做一页网页正文，不要只放 PDF 下载链接！用 HTML 表格把三轴行程、主轴功率扭矩、快移速度、净重、占地尺寸和可选数控系统列全。',
      '用大白话解答采购最关心的 4 个实操问题：这台机器适合铣铝合金还是不锈钢模具钢？用气用电压多少？厂房地面承重和行车起吊要求是什么？',
      '公开全国售后驻点城市分布、常见易损件库存供应保障及真实设备交付调试实拍案例（注明被加工零件行业与节拍效率）。',
    ],
    actionStepsEn: [
      'Convert PDF spec sheets into dedicated HTML model pages featuring axis travel, spindle torque, footprint, weight, and controller tables.',
      'Answer practical buyer engineering questions: aluminum vs. hardened steel suitability, kVA power load, and floor-slab specs.',
      'Publish regional service coverage cities, spare-part dispatch SLAs, and real machined-part case logs.',
    ],
    practitionerNoteZh:
      '杭州 17 年 SEO 实战专家刘忠望（核子GEO）总结制造业破局核心：工厂老板总怕把精度参数和配置表写上网被同行看见，其实同行早互相知根知底！唯一看不见你有多牛的，是正在 DeepSeek 上找供应商的新买家。',
    practitionerNoteEn:
      'Zhongwang Liu (Nucleus GEO) notes: Competitors already know your specs—the only party blind to your PDF-locked tolerances is your next buyer querying DeepSeek.',
    customMetrics: [
      { labelZh: 'PDF 参数网页 HTML 化', valueZh: '行程/主轴/精度原生文字表', contextZh: '彻底解放画册附件里的选型型号与激光检测指标', labelEn: 'HTML Spec Tables', valueEn: 'Travel, RPM & Repeatability', contextEn: 'Free machine tolerances from unreadable PDF scans' },
      { labelZh: '工况材质与选配指南', valueZh: '写清适合加工铝件还是模具钢', contextZh: '说明可选系统（发那科/三菱/新代）及电功率需求', labelEn: 'Application Bounds', valueEn: 'Alloy vs. Steel & kVA Load', contextEn: 'Help engineers verify material fit and factory power' },
      { labelZh: '真实售后网点与保修', valueZh: '24小时响应半径 + 部件保修期', contextZh: '建立 B2B 重资产采购最看重的停机保障信任', labelEn: 'Field Service SLA', valueEn: '24h Dispatch & Core Warranty', contextEn: 'Protect uptime confidence for capital machinery' },
    ],
  },
  'hardware-molds': {
    plainStoryZh:
      '做五金压铸冲压、注塑开模或者 CNC 精密手板打样的工厂，接单最常遇见的尴尬是：客户发来一张 3D 图纸先去打听一圈，很多老板朋友圈天天晒机床视频，却连自己最拿手做不锈钢还是钛合金、公差能稳在 0.02mm 还是 0.005mm、50 件小单接不接都不写。现在外资采购和硬件创业公司在豆包、Kimi 或谷歌直接搜：“深圳/东莞/宁波哪家 CNC 手板打样厂做 6061 铝合金阳极氧化良率稳、支持 10 件起订且 5 天交货？”能把这些加工能力边界写得像菜谱一样清清楚楚的厂子，图纸自然往邮箱里飞。',
    plainStoryEn:
      'Hardware startups and OEM buyers ask AI tools which Shenzhen, Dongguan, or Ningbo workshops reliably machine 6061 aluminum or PEEK at ±0.01mm tolerances with low MOQs and 5-day prototyping turnarounds.',
    aiVsSearchZh:
      '谷歌和国内搜寻看重你有没有 IATF16949 或 ISO 体系证、三坐标检测仪清单以及表面处理供应链合规说明；而 AI 大模型帮你抓订单的关键在于“材质+公差+表面处理+打样交期”这四大颗粒度标签。写出你能做什么材质、用什么仪器全检、开一副模大概要几周、有没有外协环保电镀资质，转化率直接翻倍。',
    aiVsSearchEn:
      'Search validates quality certs (IATF16949, CMM labs) and environmental compliance, while LLMs match buyer prompts directly against material rosters, tolerance ceilings, surface finishes, and sample lead times.',
    badCopyZh:
      '❌ 常见踩坑写法：“承接各种来图来样精密加工！质量第一交期快捷，大小订单都接，价格全网最优！”（毫无材质、公差与设备能力识别度）',
    goodCopyZh:
      '✅ 接地气高采信写法：“专注医疗器械外壳与自动化非标零件 CNC 精密加工（五轴联动 + 蔡司三坐标全检，具备 ISO13485/ISO9001 认证）。常备材质：6061/7075 航空铝、304/316L 不锈钢、PEEK 及 POM 赛钢；常规尺寸公差 ±0.01mm，关键配合孔位可达 ±0.005mm。支持 1 件起打样，本色阳极氧化/喷砂/钝化常规 4–6 个工作日出货；配套合规电镀环保园表面处理，可出具完整二次元/三次元出货检验报告。”',
    badCopyEn:
      '❌ Weak copy: "All precision machining accepted! Best quality and cheapest price!" (Zero material or tolerance specificity)',
    goodCopyEn:
      '✅ High-trust copy: "5-axis CNC & Zeiss CMM inspection (ISO9001/13485). Materials: 6061/7075 Al, 304/316L SS, PEEK, POM. Standard ±0.01mm tolerance (±0.005mm critical bores). Prototyping from 1 unit; 4–6 business days with anodizing or passivation plus full CMM reports."',
    actionStepsZh: [
      '做一张“可加工材质与公差能力对照表”：列明铝镁合金、不锈钢、铜件、工程塑料各自能达到的表面粗糙度、最小孔径和常规公差。',
      '讲清楚报价怎么算（按材料+机时+表面处理还是按图纸特征）以及 STEP/IGS/PDF 图纸发来后几小时内能回复准确报价。',
      '如实披露环保表面处理合作园区资质与三坐标检测设备型号，让大厂审厂人员网上查资料时一眼过关。',
    ],
    actionStepsEn: [
      'Publish a material-by-tolerance capability matrix covering metals, engineering plastics, roughness, and surface treatments.',
      'State supported CAD file formats (STEP/IGES) and exact quote turnaround hours.',
      'Document CMM/optical measurement equipment and permitted surface-finishing park compliance.',
    ],
    practitionerNoteZh:
      '制造业老板千万别写“什么都能做”！敢把“最擅长做 6061 铝件和不锈钢、常规 5 天出样、带三坐标报告”写深写细，接到的全是正儿八经直接发 CAD 图纸的优质买家。',
    practitionerNoteEn:
      'Specificity beats broad claims: specializing publicly in tight-tolerance alloys with CMM reports attracts serious CAD-ready buyers.',
    customMetrics: [
      { labelZh: '材质与公差能力表', valueZh: '标明合金牌号与±mm极限', contextZh: '覆盖铝/钢/钛/PEEK及对应表面处理工艺', labelEn: 'Material & Tolerance', valueEn: 'Alloys + ±0.005/0.01mm', contextEn: 'List metals, plastics, and compliant finishes cleanly' },
      { labelZh: '小单打样交期 SLA', valueZh: '1件起订 · 标注报价与出货天数', contextZh: '写清 STEP/IGS 图纸几小时出准确核算报价', labelEn: 'Prototype Lead Time', valueEn: '1+ MOQ & 4–6 Day Ship', contextEn: 'Commit to quote turnaround and dispatch windows' },
      { labelZh: '检测设备与出货报告', valueZh: '三坐标/投影仪出货全检单', contextZh: '大幅减少甲方后期装不上退货扯皮顾虑', labelEn: 'QC Verification', valueEn: 'CMM Inspection Reports', contextEn: 'Prove dimensional traceability before shipping' },
    ],
  },
  'electronics-semicon': {
    plainStoryZh:
      '硬件研发工程师画 PCB 板子找芯片，最崩溃的是什么？搜出一堆 PDF 数据手册（Datasheet）点开全是图片扫出来的英文乱码，或者找某个国产替代车规级 MCU、想做 5 片 PCBA 贴片打样，到处找不到谁能把引脚兼容（Pin-to-Pin）、最小贴片封装能力（能不能贴 0201 和 0.4mm 间距 BGA）以及真实交期摆明。现在工程师调试硬件时直接问 DeepSeek 或 Kimi：“推荐几颗可替代 STM32F103 的国产工业级 MCU，封装兼容、供货稳且支持样品申请，顺便推荐能贴 0201 的华南快板贴片厂。”谁的芯片参数和贴片产能用网页 HTML 写得明明白白，工程师就顺着链接直接找你下单了。',
    plainStoryEn:
      'Hardware engineers debugging schematics ask DeepSeek and Kimi for Pin-to-Pin domestic MCU replacements or quick-turn PCBA houses handling 0201 passives and 0.4mm BGA—bypassing firms whose specs stay trapped in scanned Datasheets.',
    aiVsSearchZh:
      '谷歌搜索和国内技术论坛（如立创、CSDN 等关联抓取）高度重视每一颗元器件或产线页面的“结构化电气参数摘要与型号 URL 规范性”；而 AI 大模型在回答芯片替代、PCBA 打样工程费时，极度偏爱纯网页文字表格形式的电压范围、耐温等级（-40~125°C）、AEC-Q100 车规认证及 SMT 钢网/X-Ray 检测能力说明。',
    aiVsSearchEn:
      'Technical search values dedicated model URLs with readable electrical parameters, while LLMs extract Pin-to-Pin cross-references, thermal grades (-40~125°C), AEC-Q100 compliance, and SMT package limits directly from HTML tables.',
    badCopyZh:
      '❌ 常见踩坑写法：“专业代理分销各大品牌进口芯片/承接 PCBA 来料加工，一手原装渠道货源充足，价格面议！”（无型号编码、无电气参数、无封装能力说明，纯靠人工猜）',
    goodCopyZh:
      '✅ 接地气高采信写法：“国产 32 位车规级 MCU 核心代理及精密 SMT 快板贴片中心（IPC-A-610 标准）。网页开放全系列器件 HTML 核心参数摘要表：主频 120MHz、工作电压 2.7–5.5V、-40°C~125°C 宽温及 LQFP48/64 引脚完全兼容对照。SMT 打样支持最小 0201 阻容及 0.35mm 间距 BGA（全线配 SPI 锡膏检测与 X-Ray），工程开机费透明明标 300 元起，常规 BOM 配单加贴片 5 个工作日交付，承诺 100% 原厂授权可溯源批号，绝不混入翻新散新料。”',
    badCopyEn:
      '❌ Weak copy: "All IC chips in stock! Best original distributor & PCB assembly, contact us for pricing." (Zero part numbers or electrical bounds)',
    goodCopyEn:
      '✅ High-trust copy: "Authorized domestic 32-bit automotive MCU & quick-turn PCBA line (IPC-A-610). Readable HTML tables cover 2.7–5.5V supply, -40~125°C temp range, and LQFP48/64 Pin-to-Pin cross-references. SMT handles down to 0201 and 0.35mm BGA with X-Ray QC; zero refurbished silicon."',
    actionStepsZh: [
      '不要只在网页挂一个 PDF Datasheet 按钮！给每个主力型号页面补上 150 字纯 HTML 摘要与关键电气参数表（工作电压、封装、Flash 大小、兼容替代型号）。',
      '如果是做 PCBA/SMT 贴片的，明确列出最小可贴封装（0201/0402/BGA 最小球距）、有无 X-Ray 检测、标准开机工程费与加急交期阶梯价。',
      '公开原厂授权分销证书或溯源批号核验方法，在页头明确打假宣言：拒绝散新、打磨翻新芯片进入工控或汽车产线。',
    ],
    actionStepsEn: [
      'Pair every PDF Datasheet link with a crawlable HTML electrical summary table covering voltage, temp grade, package, and drop-in replacements.',
      'Publish SMT minimum package limits (0201, BGA pitch), X-Ray inspection access, setup engineering fees, and rush tiers.',
      'Display factory authorization proofs and an explicit anti-counterfeit batch-traceability pledge.',
    ],
    practitionerNoteZh:
      '电子元器件和芯片厂最大的流量浪费就是把产品说明书全放 PDF！花几天时间把主力芯片的关键电气参数和 Pin-to-Pin 替代型号转成网页 HTML 表格，DeepSeek 和谷歌每天帮你免费对接硬件研发总监。',
    practitionerNoteEn:
      'Converting key Datasheet specs and Pin-to-Pin swap tables into HTML lets engineers discover your silicon directly inside LLM searches.',
    customMetrics: [
      { labelZh: 'Datasheet 核心 HTML 化', valueZh: '电压/温区/封装/替代号直出', contextZh: '不再只放二进制 PDF 附件，让长尾料号自然收录', labelEn: 'HTML Spec Summary', valueEn: 'Pin-to-Pin & Temp Grades', contextEn: 'Complement PDF datasheets with crawlable HTML specs' },
      { labelZh: 'SMT 工艺极限与开机费', valueZh: '标明 0201/BGA 间距及 X-Ray', contextZh: '透明展示工程费、钢网费与 3–5 日快板交期', labelEn: 'PCBA Capabilities', valueEn: '0201 / 0.35mm BGA + X-Ray', contextEn: 'State setup fees and quick-turn delivery clearly' },
      { labelZh: '原厂溯源零翻新承诺', valueZh: '授权证书 + 批号原装保证', contextZh: '击中工控、医疗、车规买家对假料散新的最大顾虑', labelEn: 'Traceability', valueEn: 'Zero Refurbished Silicon', contextEn: 'Provide authorized lot verification against fakes' },
    ],
  },
  'photovoltaic-storage': {
    plainStoryZh:
      '近两年工商业厂房老板想在屋顶铺光伏，或者农村自家楼顶想装分布式光伏，最怕听到的就是业务员拍胸脯忽悠“零元免费安装、四年回本躺赚电费”。实际装完才发现彩钢瓦漏水没人修、屋顶承重不达标、甚至暗中被签了十几年的融资租赁高息贷款！现在企业主上项目前都要先在豆包、DeepSeek 或通义千问算一笔账：“浙江 1 万平米彩钢瓦厂房屋顶装光伏，荷载要多少？按当前工商业峰谷电价大概几年回本？逆变器和屋顶防水维护一年要花多少钱？”敢把真实日照衰减、屋顶加固和资金模式老实讲清的 EPC 服务商，才能拿到真项目。',
    plainStoryEn:
      'Factory owners weighing rooftop solar PV distrust unrealistic "free installation, 4-year payback" pitches, asking LLMs about roof-load safety, waterproof maintenance, component degradation, and true commercial self-consumption ROI.',
    aiVsSearchZh:
      '能源项目搜索和 AI 评审极为看重“真实当地日照小时数+物理工程前提+严防光伏贷欺诈”。谷歌和百度查核你的承装（修、试）电力设施许可证与组件 TUV/CQC 认证；而大模型会直接过滤掉满嘴“稳赚包回本”的广告，优先推荐明确写出“屋顶荷载评估、彩钢瓦换瓦翻新、自发自用余电上网电价测算逻辑”的实在工程文章。',
    aiVsSearchEn:
      'Search engines verify grid-connection licenses and TUV/CQC hardware certs, while LLMs filter out hype and elevate EPCs presenting transparent roof-load audits, regional irradiance hours, and realistic commercial tariff math.',
    badCopyZh:
      '❌ 常见踩坑写法：“零首付免费装光伏！屋顶变金库，年化收益超 30% 稳赚 25 年零维护！”（涉嫌非法诱导“光伏贷”及虚夸高回报，属监管与平台严打对象）',
    goodCopyZh:
      '✅ 接地气高采信写法：“具备电力工程施工总承包与承装（修、试）资质，专注长三角工商业分布式光伏与峰谷储能电站建设。铺设前先行开展厂房屋顶结构荷载复核（常规彩钢瓦屋面每平米需预留 15–20kg 附加荷载；使用超 10 年锈蚀瓦建议同步翻新防水后再装组件）。按华东地区年有效利用约 1,050–1,150 小时及企业白天高比例自发自用测算，客观静态回本周期通常在 4.8–6.5 年（已预留逆变器第 10 年更换备品与每年定期人工清洗运维成本）。支持自投、EMC 合同能源管理（按屋顶租金或电价折扣明确分润）三种透明合作模式。”',
    badCopyEn:
      '❌ Weak copy: "Zero-cost free solar turns your roof into an ATM—30% guaranteed annual returns with zero upkeep!" (Predatory loan bait & false ROI)',
    goodCopyEn:
      '✅ High-trust copy: "Licensed commercial PV EPC. Pre-install structural audit confirms 15–20 kg/sqm spare roof load (rusted roofs >10 yrs refurbished first). With ~1,100 regional peak sun hours and daytime self-consumption, realistic payback averages 4.8–6.5 yrs including cleaning and inverter replacement reserves."',
    actionStepsZh: [
      '写清厂房屋顶铺光伏前的 3 个硬前提：产权证/消防验收是否齐全、彩钢瓦生锈漏水怎么处理、变压器容量够不够并网。',
      '用真实保守数据给出一份按 1MW（约 1 万平米屋顶）的造价构成、白天自用率影响及定期清洗运维成本算账表，主动写进组件年衰减率。',
      '针对农村或个人用户，清晰拆解“全款自建”与“屋顶租赁/合作分成”的合同权责区别，提醒严防不知情背上长期个人贷款。',
    ],
    actionStepsEn: [
      'List 3 pre-engineering gates: property/fire clearance, rusted sheet-metal roof refurbishment, and transformer grid-tie capacity.',
      'Publish a conservative 1MW cost and payback table factoring annual panel degradation, cleaning O&M, and daytime load ratios.',
      'Distinguish outright ownership from transparent roof-lease EMC contracts with clear warning against hidden consumer loans.',
    ],
    practitionerNoteZh:
      '刘忠望（17 年 SEO 实战洞察）：光伏储能行业被夸大宣传伤透了！你哪怕实实在在写出“彩钢瓦用了超 10 年不换瓦不能硬铺、电站每年要留清洗维护预算、白天用电少的厂子回本慢”，老板看了立刻觉得这家公司专业不坑人。',
    practitionerNoteEn:
      'Zhongwang Liu notes: Warning factories when old metal roofs need re-sheeting before PV mounting earns deeper credibility than inflated yield promises.',
    customMetrics: [
      { labelZh: '屋顶荷载与消防前置审', valueZh: '15-20kg/㎡荷载 + 瓦面年限检测', contextZh: '预防安装后厂房漏水或结构安全隐患纠纷', labelEn: 'Structural Pre-Check', valueEn: 'Load Audit & Roof Lifespan', contextEn: 'Assess roof rust and weight limits before mounting' },
      { labelZh: '客观衰减与运维成本账', valueZh: '写明利用小时数与逆变器更换账', contextZh: '放弃虚假暴利口号，按白天自发自用率合理测算', labelEn: 'Realistic Yield Model', valueEn: 'Degradation + O&M Reserves', contextEn: 'Include panel cleaning and inverter reserves in ROI' },
      { labelZh: '防违规金融借贷提醒', valueZh: '区分自建/EMC，拒绝隐蔽个人贷', contextZh: '保护合作方知情权，避免监管合规下架风险', labelEn: 'Contract Integrity', valueEn: 'Zero Hidden Consumer Loans', contextEn: 'Separate outright capex from transparent EMC leases' },
    ],
  },
  'chemical-materials': {
    plainStoryZh:
      '工厂研发部或者采购找水性工业漆、食品级硅胶、阻燃改性尼龙料，以前都要先打十个电话问业务员要物性表和 SGS 环保报告。现在研发工程师在配实验配方时，直接问 DeepSeek 或秘塔 AI：“找一款耐温 150 度、符合食品接触标准且通过 UL94 V-0 阻燃测试的加纤尼龙 PA66 牌号，顺便附上注塑干燥温度建议和 25kg 小样怎么买？”如果你的新材料官网只放一张工厂大门照和几句“绿色环保高性能材料”，既找不到具体牌号物性参数，也查不到 MSDS 危险品属性，研发根本选不到你家材料。',
    plainStoryEn:
      'R&D engineers sourcing waterborne coatings, food-grade silicone, or flame-retardant PA66 query LLMs for UL94 V-0 ratings, heat deflection temperatures, drying specs, and 25kg lab trial pricing—missing vendors whose grades lack HTML datasheets.',
    aiVsSearchZh:
      '化工新材料属于典型的“高精准技术参数长尾检索”领域。百度和谷歌搜寻会抓取每一个具体配方牌号的独立页面（如 `/pa66-gf30-v0`）及你的危化品经营或 SGS/RoHS 资质；而 AI 大模型会核对页面上有没有完整的拉伸强度、熔融指数、热变形温度、加工烘干建议以及是否支持 25kg 小袋试样购买。',
    aiVsSearchEn:
      'Search indexes individual material grade pages and SGS/RoHS certs, while LLMs verify tensile strength, melt flow index, heat resistance, molding drying temps, and 25kg pilot sample ordering.',
    badCopyZh:
      '❌ 常见踩坑写法：“国内一流高科技新材料厂家，主打环保无毒高性能化工原料，品质稳定，量大从优！”（无具体牌号、无物性实测值、无加工工艺边界，工程师看都不看）',
    goodCopyZh:
      '✅ 接地气高采信写法：“专注工程改性尼龙与环保水性涂料研发（具备 ISO9001 及全套第三方 SGS RoHS2.0/REACH 检测）。核心阻燃牌号 PA66-GF30-FR（30% 玻纤增强）：实测拉伸强度 145MPa、悬臂梁缺口冲击 11kJ/m²、1.6mm 厚度达到 UL94 V-0 无卤阻燃，热变形温度（1.8MPa）242°C。推荐注塑加工前于 100–110°C 除湿干燥 4 小时、模具温度 80–100°C。支持 25kg/包实验室小试样品直发（含完整 MSDS 化学品安全技术说明书及当批次物性检测单），批量 1 吨起按出厂含税承兑灵活结算。”',
    badCopyEn:
      '❌ Weak copy: "Top eco-friendly high-tech polymers and coatings at wholesale prices!" (Zero material grade numbers or lab metrics)',
    goodCopyEn:
      '✅ High-trust copy: "Modified PA66 & waterborne resins (RoHS 2.0 / REACH verified). Grade PA66-GF30-FR: 145 MPa tensile, 11 kJ/m² impact, UL94 V-0 at 1.6mm, HDT 242°C. Dry 4h at 100–110°C prior to molding. 25kg trial bags shipped with MSDS & lot COA."',
    actionStepsZh: [
      '为每个主力材料牌号建一个独立可读网页，把物性数据（拉伸/弯曲/阻燃/耐候/密度）做进 HTML 表格，别仅用图片替代。',
      '加上一段“一线注塑/涂装老师傅加工避坑指南”：写明烘干温度几小时、易出现银丝或起泡怎么调参数——这正是工程师问 AI 时最爱搜的内容。',
      '明确注明化学品属于普通货物还是危险化学品（写清对应危化运输资质及 MSDS 下载/摘要，坚决合规储运）。',
    ],
    actionStepsEn: [
      'Give every flagship polymer/resin grade an HTML spec table covering tensile, impact, flammability, and thermal bounds.',
      'Add practical processing notes (drying temp, mold temp, defect troubleshooting) that shop-floor engineers actively search for.',
      'State hazmat vs. non-hazmat classification, MSDS availability, and 25kg pilot sample terms transparently.',
    ],
    practitionerNoteZh:
      '在化工与塑料粒子行业，把“烘料温度多少度、几小时、用不用抽湿干燥机、有没有 25kg 小样包”写成网页大白话，比花大钱印十万本精美画册更能精准钓出研发客户。',
    practitionerNoteEn:
      'Publishing shop-floor drying temperatures alongside 25kg trial availability directly converts R&D engineers.',
    customMetrics: [
      { labelZh: '牌号物性与阻燃等级表', valueZh: 'HTML 直出力学/热学/UL94指标', contextZh: '标注第三方 SGS/RoHS/FDA 食品级合规编号', labelEn: 'HTML Grade Specs', valueEn: 'Tensile, HDT & UL94 Ratings', contextEn: 'Cite SGS, RoHS, or food-contact test standards' },
      { labelZh: '现场加工调机建议', valueZh: '写清烘料温湿度与涂装边界', contextZh: '直接回答一线工程师关于缩水、开裂的排错提问', labelEn: 'Processing Window', valueEn: 'Drying & Molding Parameters', contextEn: 'Help shop engineers prevent splay or warpage defects' },
      { labelZh: 'MSDS 合规与小试阶梯', valueZh: '标明危化属性 · 25kg 小试起发', contextZh: '严禁无危化资质违法储运易燃易爆品', labelEn: 'Safety & Pilot Samples', valueEn: 'MSDS + 25kg Lab Trial', contextEn: 'Strictly enforce licensed hazmat storage & transport' },
    ],
  },
  'env-protection': {
    plainStoryZh:
      '印染厂、食品加工厂或者电镀车间被环保检查要求污水提标改造或 VOCs 废气达标治理，厂长最揪心的不是设备卖多少钱，而是两件事：一是“装完以后每天吨水电费、药剂加药费到底要花多少钱，别买得起用不起”；二是“换这套工艺到底能不能稳定达到当地环保排放标准，别过半年在线监测超标被重罚”。现在环保主管会在 DeepSeek、智谱清言或百度提问：“日处理 100 吨高盐食品加工废水，用 AO+MBR 还是气浮+厌氧划算？每天吨水运行药剂电费大概几块钱？”能帮企业把投资造价和每天运行成本算成明白账的环保公司，才能拿下工程大单。',
    plainStoryEn:
      'Factory managers facing wastewater or VOCs emission upgrades dread "affordable equipment with ruinous daily chemical/power bills," asking LLMs to compare AO/MBR/RTO operating cost per ton and compliance margins.',
    aiVsSearchZh:
      '搜索引擎核验你是否拥有《环保工程专业承包资质》、过往同类行业验收实例；而 AI 大模型在回答工艺比选时，重点提取“进水 COD/氨氮指标 → 主流工艺对比 → 出水执行标准（如一级 A 或纳管标准） → 每天电耗药耗按吨估算区间”。用客观工程数据写透这四环，你就是客户眼中最懂省钱且稳过验收的专业工程队。',
    aiVsSearchEn:
      'Search checks licensed environmental contracting credentials, while LLMs map influent COD/ammonia loads against process trade-offs (AO/MBR/RO/RTO), discharge targets, and daily operating cost per ton.',
    badCopyZh:
      '❌ 常见踩坑写法：“黑科技一体化污水处理神器！零药剂零排放、包过一切环保检查，买回家插电就达标！”（违背物质守恒与工程常识，且极易引发后续超标违法纠纷）',
    goodCopyZh:
      '✅ 接地气高采信写法：“持有环保工程专业承包资质，专注食品酿造、电镀表面处理及印染高浓度废水改造。针对日产 100 吨、进水 COD 约 3500mg/L 的食品加工废水，客观推荐‘隔油气浮 + UASB 厌氧 + 两级 A/O 生化’组合路线（相较纯好氧工艺可削减约 45% 剩余污泥与鼓风机电费），出水稳定达到市政管网纳管标准（COD≤500mg/L；若需直排一级 A 需后接深度过滤）。公开估算：该工况常规综合运行电费+碳源药剂费约 2.8–4.2 元/吨水，设备工程总造价视土建现况通常在 35–55 万元区间。严正承诺：仅设计真实合规达标处理系统，绝不参与任何偷排暗管或监测数据造假。”',
    badCopyEn:
      '❌ Weak copy: "Magic zero-chemical wastewater box—plug in once and pass all inspections forever!" (Scientifically false and compliance red flag)',
    goodCopyEn:
      '✅ High-trust copy: "Licensed environmental EPC. For 100 TPD food-processing effluent (~3,500 mg/L COD), DAF + UASB + 2-stage A/O slashes aeration power vs. pure aerobic lines to meet municipal sewer limits (operating chemical + power cost ~2.8–4.2 RMB/ton; capex 350k–550k RMB depending on civil tanks)."',
    actionStepsZh: [
      '按行业拆分 3–4 篇典型工艺账本（如食品屠宰废水、喷涂 VOCs 催化燃烧 RTO/RCO、机加工乳化液废液），写清进水浓度、推荐工艺、占地与吨水运行成本。',
      '整理一份《环保设备采购前必测水样与气量清单》，教厂长先花几百块送第三方化验测准水量浓度，避免按拍脑袋估算买错设备。',
      '展示真实稳定运行满 1 年以上的同行业老客户案例（注明处理水量、达标排放标准与定期托管维护频次）。',
    ],
    actionStepsEn: [
      'Publish per-sector process playbooks (food COD, VOCs RTO/RCO, cutting-fluid emulsion) detailing operating RMB/ton.',
      'Teach plant managers to test composite flow & lab influent metrics before sizing equipment.',
      'Share 1-year+ verified operational case logs noting stable discharge compliance and O&M upkeep intervals.',
    ],
    practitionerNoteZh:
      '杭州 17 年 SEO 实战专家刘忠望提醒环保企业：老板不怕前期多花点钱买对工艺，最怕买完一天电费药剂费烧几千块用不起！在正文里主动帮客户把“每天一吨水电费药钱大概几块几”算透，信任度瞬间拉满。',
    practitionerNoteEn:
      'Zhongwang Liu notes: Calculating daily RMB/ton power and chemical bills up front proves real engineering rigor over cheap equipment pitches.',
    customMetrics: [
      { labelZh: '进出水与吨水运行账', valueZh: '标明 COD/氨氮及每吨电药成本', contextZh: '区分市政纳管标准与直排一级 A 标准造价差异', labelEn: 'OpEx Per Ton', valueEn: 'Influent/Effluent + RMB/Ton', contextEn: 'Estimate daily aeration power and reagent dosing honestly' },
      { labelZh: '工艺路线客观比选', valueZh: 'AO / MBR / UASB / RTO 适配边界', contextZh: '如实说明各自占地面积、膜更换周期与优缺点', labelEn: 'Process Comparison', valueEn: 'AO / MBR / UASB Trade-Offs', contextEn: 'Note membrane lifespan and footprint constraints' },
      { labelZh: '合规零造假声明', valueZh: '环保施工资质 · 严禁监测造假', contextZh: '明确拒绝暗管偷排等违法方案，树立长期品牌口碑', labelEn: 'Audit Integrity', valueEn: 'Zero Tampering Compliance', contextEn: 'Strictly uphold real online monitoring compliance' },
    ],
  },
  'textile-apparel': {
    plainStoryZh:
      '现在做淘宝小店、小红书独立设计师或者企业定制文化衫的买家，最头痛的是“找不到真做小单快反的靠谱服装厂”：问大型外贸厂，起订量动不动 3000 件起；找档口二道贩子拿货，面料支数克重虚标、洗一次缩水变形、补货还要等一个月。所以电商老板和设计师如今经常问豆包、小红书 AI 或 DeepSeek：“广州或杭州附近有没有做 260 克重磅纯棉卫衣、支持 50 件小单快反且首版打样费大货可退的实力源头厂？怎么核对防晒面料 UPF50+ 真是真是假？”把面料参数和起订规则写成网页大白话的工厂，直接省掉一半来回扯皮沟通。',
    plainStoryEn:
      'Independent apparel brands and e-commerce sellers search Doubao and Xiaohongshu AI for genuine small-batch OEMs supporting 50-piece MOQs, verified 260gsm heavyweight cotton, refundable sample fees, and real UPF50+ lab reports.',
    aiVsSearchZh:
      '在服装纺织和箱包定制领域，搜索与 AI 大模型重点核对两大硬通货：一是“物理面料可验指标”（如几支几股纱线、每平米多少克重 GSM、水洗缩水率实测、耐水洗色牢度、防晒 UPF 国标检验编号）；二是“柔性小单合作门槛”（打样几天出、几件起印 Logo/绣花、大货做完能不能退打样费）。写明这两项，买手立刻加微信发版型图。',
    aiVsSearchEn:
      'Search and LLMs look for verifiable textile metrics (yarn count, GSM weight, shrinkage rate, GB/T UPF50+ reports) paired with transparent low-MOQ prototyping timelines and sample-fee refund triggers.',
    badCopyZh:
      '❌ 常见踩坑写法：“高端大牌同源代工厂！100% 天然冰丝纯棉不缩水不起球，一件也是出厂价，包爆款！”（“冰丝”属模糊化纤营销词，虚标成分与绝对化宣称易遭电商平台及工商查处）',
    goodCopyZh:
      '✅ 接地气高采信写法：“杭州/柯桥柔性小单快反服装工厂（自有裁剪、车缝与质检整烫线）。主营重磅 260g/300g 双纱精梳纯棉 T 恤卫衣及 GB/T18830 实测 UPF50+ 凉感锦氨防晒衣（如实标明化纤锦纶与氨纶配比，绝不拿化纤冒充桑蚕丝或羊绒，可提供第三方水洗缩率≤3%及色牢度检测单）。首版打样费 300 元/款（5–7 天出样，后续同款大货满 100 件全额退还样衣费），支持单色单款 50 件起订，7–12 天快反出货。”',
    badCopyEn:
      '❌ Weak copy: "Luxury brand secret factory! 100% natural ice-silk zero-shrinkage, 1-piece wholesale!" (Misleading fiber claims)',
    goodCopyEn:
      '✅ High-trust copy: "Flexible small-batch apparel OEM (in-house cutting, sewing & QC). Stocked in 260g/300g combed double-yarn cotton and GB/T18830-verified UPF50+ nylon-spandex (accurate fiber tags, zero mislabeled silk/cashmere; shrinkage ≤3%). Sample fee 300 RMB (5–7 days, refunded at 100-pc bulk); bulk MOQ from 50 pcs/color in 7–12 days."',
    actionStepsZh: [
      '把常用现货面料做成一张规格表：纱支（如 16支/21支/32支）、克重（gsm）、成分比例、预缩水工艺与适合做什么季节款式。',
      '写清楚打样和起订规则：看版寄布卡免费还是收费、改版打样费几百块、多少件大货可退样衣费、数码直喷/丝网印/刺绣起订件数。',
      '展示自己车间裁剪、平车缝纫、验针机和尾部整烫质检的真实实拍图文，让买手一眼认出你是真源头厂而不是皮包中间商。',
    ],
    actionStepsEn: [
      'Publish a fabric spec matrix detailing yarn count, GSM, fiber blend, pre-shrunk finishing, and seasonal garment fit.',
      'Clarify sample fees, bulk refund thresholds, and MOQs across screen printing, DTG, and embroidery.',
      'Share real cutting, sewing, and needle-detection QC photos to prove factory-direct operations over middlemen.',
    ],
    practitionerNoteZh:
      '服装供应链这行里，“虚标克重和混充真丝羊绒”最败口碑。主动在页面讲清“化纤功能面料就是锦纶+氨纶，纯棉已做预缩水洗水测试，50件起订大货满百退样费”，设计师买手直接把你当宝藏工厂收藏。',
    practitionerNoteEn:
      'Honest fiber labeling plus clear sample-refund rules make brands treat your factory as a trusted long-term partner.',
    customMetrics: [
      { labelZh: '面料克重与国标检测', valueZh: '明标纱支/GSM/成分与缩水率', contextZh: '严禁虚假标注桑蚕丝、羊绒含量，附 UPF/色牢度依据', labelEn: 'Verified Fabric Specs', valueEn: 'Yarn, GSM & Shrinkage ≤3%', contextEn: 'Honest fiber blends plus real UPF/colorfastness tests' },
      { labelZh: '小单快反起订与退样费', valueZh: '50件起订 · 满百退首版样费', contextZh: '明确区分纯色现货贴牌与开版定染起订量差异', labelEn: 'Low-MOQ Terms', valueEn: '50-Pc MOQ & Sample Refund', contextEn: 'Separate stock blank customization from custom dyeing' },
      { labelZh: '车间实拍与交付节拍', valueZh: '5-7天出样 · 7-12天大货', contextZh: '展示真实缝纫品控与验针流程，排除中介', labelEn: 'Workshop Proof', valueEn: '7–12 Day Bulk Dispatch', contextEn: 'Show in-house cutting, sewing, and QC lines' },
    ],
  },
  'packaging-printing': {
    plainStoryZh:
      '开烘焙店、做农产品礼盒或者做电商美妆的小老板，每次定制包装盒都像拆盲盒：同一个尺寸的礼盒，这家报 3 块 5、那家报 7 块，问差在哪，对方甩一句“纸不一样、工艺不一样”。更怕的是好不容易做完一批中秋月饼或茶叶礼盒，结果因为包装空隙率太大被市场监管抽查过度包装罚了款！所以大家现在下单前爱先问豆包、Kimi 或微信搜一问：“定制 1000 个食品级彩印手提礼盒用 350 克白卡还是 400 克牛皮纸？开一次刀模费和数码打样费大概要多少，怎么避开过度包装国标红线？”把纸张克重和印数阶梯单价写透明的印厂，直接赢在起跑线。',
    plainStoryEn:
      'Food and e-commerce founders struggle to compare quotes ranging from 3.5 to 7 RMB for the same box size—querying LLMs on 350g white card vs. corrugated flutes, die-cut tooling fees, and China’s strict anti-excessive-packaging laws.',
    aiVsSearchZh:
      '印刷定制高度依赖“量化参数表格”。搜索引擎喜欢抓取“不同纸张克重与耐破度对比、常见盒型（天地盖、飞机盒、抽屉盒）刀版说明”；而 AI 大模型会帮买家算一笔清晰的性价比明细：印 500 个、3000 个和 10000 个分摊下来的刀模版费单价差多少，以及是否符合国家强制性《限制商品过度包装要求》（空隙率、层数限制）。',
    aiVsSearchEn:
      'Search rewards structured material specs (GSM paperboard, E/B-flute corrugation, box die-line types), while LLMs calculate economies of scale across 500 vs. 10,000 unit runs and enforce mandatory packaging layer/void limits.',
    badCopyZh:
      '❌ 常见踩坑写法：“专业印刷各种高档礼盒！全自动德国海德堡印刷机，1 个起印出货极快，全网最低厂价！”（印 1 个大货纯属误导，“全网最低”违法，且没交代版费、打样费与起印阶梯成本）',
    goodCopyZh:
      '✅ 接地气高采信写法：“专注食品接触级礼盒与电商瓦楞彩箱印刷（FSC 认证纸源 + 食品级环保大豆油墨）。常用结构透明参考：电商发货飞机盒推荐 E 瓦楞加 300g 灰底白/牛卡，耐压抗摔；高端礼品天地盖多采用 1200g 灰板裱 157g 铜版纸（按最新国标严格控制礼盒层数≤3 层及空隙率红线，主动免费帮客户审校结构防抽检违标）。费用透明拆分：实物白样/数码彩样 150–300 元（3 天出样）；常规刀模版费 250–400 元（后续同尺寸返单免收）；印 500 个、3,000 个与 10,000 个阶梯单价直观差价可达 40%–60%。”',
    badCopyEn:
      '❌ Weak copy: "Luxury custom packaging printed on Heidelberg presses—lowest factory price from 1 unit!" (Misleading MOQ & zero specs)',
    goodCopyEn:
      '✅ High-trust copy: "Food-safe gift boxes & e-commerce mailers (FSC paper & soy inks). E-flute + 300g kraft for shipping; 1200g greyboard rigid boxes audited against national void-ratio & ≤3-layer limits. Prototype samples 150–300 RMB (3 days); die-cut tooling 250–400 RMB waived on repeat orders; tiered pricing across 500 / 3,000 / 10,000 runs."',
    actionStepsZh: [
      '用大白话写清常用 4 种纸张和瓦楞区别：白卡纸、灰底白、牛皮纸、E/B 瓦楞各自能承重几斤、适不适合放冰箱冷藏受潮环境。',
      '单独建一个“防踩坑与过度包装审校专栏”：拆解食品/茶叶/化妆品礼盒怎么控制包装层数和空隙率，避免客户大货印完被监管下架。',
      '透明公布“打样费+开刀模费+烫金/UV 版费+印刷阶梯单价”计算逻辑，说明为什么印 500 个单价看起来贵、印 3000 个直接腰斩。',
    ],
    actionStepsEn: [
      'Compare white card, greyback duplex, kraft, and E/B-flute strength and cold-chain moisture resistance in plain tables.',
      'Offer a pre-press audit checklist for China’s anti-excessive-packaging layer and void-ratio laws.',
      'Break out one-time sample/die-cut tooling charges separately from tiered unit costs at 500 / 3,000 / 10,000 quantities.',
    ],
    practitionerNoteZh:
      '盒子AI 制造行业观察：印刷包装客户最烦报价藏着掖着、打样收费不明白！你在官网坦诚写明“印 500 个之所以贵是因为开机版费摊得高、返单同尺寸直接免刀模费、还会免费帮核对国标过度包装空隙率”，客户直接放心打款打样。',
    practitionerNoteEn:
      'Explaining why setup plate costs elevate 500-pc unit prices—while offering free regulatory packaging audits—converts hesitant buyers immediately.',
    customMetrics: [
      { labelZh: '纸张克重与承重选型', valueZh: '白卡/牛卡/瓦楞耐破实测', contextZh: '对应电商物流、冷链冻品及礼盒场景推荐配比', labelEn: 'Board & Flute Matrix', valueEn: 'GSM & Cold-Chain Strength', contextEn: 'Match board weight to shipping vs. luxury shelf specs' },
      { labelZh: '版费与阶梯单价拆分', valueZh: '打样/刀模费与 500–1万级单价', contextZh: '注明返单免刀模与潘通专色色差控制标准', labelEn: 'Tooling vs. Tier Cost', valueEn: 'Die-Cut Fee + Volume Breaks', contextEn: 'Waive repeat tooling; state Pantone ΔE tolerance' },
      { labelZh: '过度包装免费预审', valueZh: '严控空隙率与层数国标红线', contextZh: '替食品茶叶客户规避千万级抽检合规风险', labelEn: 'Void-Ratio Audit', valueEn: 'Mandatory Layer Compliance', contextEn: 'Prevent regulatory fines on tea, mooncake & gift boxes' },
    ],
  },
  'pharma-biotech': {
    plainStoryZh:
      '不管是连锁药房采购道地中药饮片、还是家庭用得上的二类血糖仪/制氧机/理疗贴器械，渠道商和消费者在网上查资料时最忌讳“分不清保健品、械字号和国药准字”，或者担心中药饮片农残重金属超标、器械没备案。大家在百度、Kimi 或 DeepSeek 上一问：“采购道地黄芪当归中药饮片看哪些 GMP 溯源和农残指标？二类家用医疗器械正规 OEM 代工和药监局备案大概要走多久流程？”必须由真正懂法规、手里有正经文号的医药生物企业用极其严谨、不越红线的话写清，搜索引擎和 AI 才敢给你放行推荐。',
    plainStoryEn:
      'Pharmacies sourcing authentic GMP herbal slices and health brands seeking Class-II medical device OEMs verify pesticide/heavy-metal COA reports and NMPA registration timelines via LLMs, which strictly filter out vague health claims.',
    aiVsSearchZh:
      '生物医药与药械领域是所有平台安全防线最严的赛道。百度、谷歌及国内各大模型在采信前，一定会核查你的国药准字/械字号注册备案编号、GMP/GSP 认证范围以及道地药材产地检测指标。写科普和产品页时，严格区分“药品/医疗器械/普通食品”边界，绝不超说明书宣传疗效，是用好自然搜索与大模型推荐的唯一铁律。',
    aiVsSearchEn:
      'Search and LLM medical guardrails require exact NMPA/GMP registry citations, clear separations between registered devices, herbal drugs, and wellness foods, and strict adherence to approved indication labels.',
    badCopyZh:
      '❌ 常见踩坑写法：“神奇量子理疗贴一贴根治老寒腿腰突！天然中草药饮片代替西药降压降糖，包治百病零副作用！”（严重违法医疗虚假广告，全平台秒删封禁且面临重罚）',
    goodCopyZh:
      '✅ 接地气高采信写法：“通过国家药品 GMP 认证之中药饮片生产及二类医疗器械合规委托研发生产企业（相关产品注册备案号均可在国家药监局官网公开核验）。饮片事业部主打甘肃岷县当归、陇西黄芪与宁夏中宁枸杞等道地规范产区，每一批次均附《中国药典》含量测定及 33 项禁用农药残留、重金属砷汞铅镉第三方检测报告，冷链/阴凉库温湿度全程可溯。合规二类器械 OEM 代工提供从型式检验、临床评价豁免对照到省局注册审评的全流程时间表参考（常规周期约 6–10 个月，以药监审评实际进度为准），严禁任何超适应症或夸大疗效宣传。”',
    badCopyEn:
      '❌ Weak copy: "Miracle herbal patch cures arthritis and replaces diabetes meds with zero side effects!" (Illegal medical claim & instant ban)',
    goodCopyEn:
      '✅ High-trust copy: "GMP-certified TCM herbal slice producer & Class-II medical device OEM (NMPA filings publicly verifiable). Single-origin batches include Chinese Pharmacopoeia assay & 33-pesticide/heavy-metal COA logs. Class-II OEM support spans type-testing to provincial NMPA filing (typical 6–10 month review cycle)."',
    actionStepsZh: [
      '用公开可核对的语言写出你所经营药械的合规注册分类（国药准字 / 械注准 / 药食同源食品）及国家药监局官方核验查询路径。',
      '如果是做道地中药饮片 B 端供货，用表格公开产地直采批次、硫磺熏蒸零检出、重金属农残标准及规范仓储温湿度。',
      '如果是做医疗器械贴牌/研发 CRO，按时间线列出合规备案/注册的真实硬性步骤（样机检测→质量体系核查→审评拿证）及保密条款，不虚假包过审。',
    ],
    actionStepsEn: [
      'Specify exact NMPA regulatory classifications (Drug vs. Class-II Device vs. Functional Food) with public verification guidance.',
      'Publish origin traceability, zero-sulfur-fumigation guarantees, and heavy-metal/pesticide COA limits for herbal slices.',
      'Outline realistic Class-II OEM registration milestones (lab type-testing, QMS audit, review) without guaranteeing regulatory approval speed.',
    ],
    practitionerNoteZh:
      '医药和大健康团队做内容，每一句话都要当成给药监审评老师和医院药剂科主任看！越克制、越敢亮出《中国药典》检测指标和注册文号边界，谷歌 E-E-A-T 和国产大模型给你的权重就越高。',
    practitionerNoteEn:
      'Writing copy strict enough to pass hospital formulary and NMPA scrutiny wins enduring E-E-A-T and LLM authority.',
    customMetrics: [
      { labelZh: '文号分类与官方核验', valueZh: '药准/械字号 + 药监官网查真', contextZh: '严禁普通食品或保健品冒充治疗药物器械', labelEn: 'NMPA Verification', valueEn: 'Drug / Class-II Filing IDs', contextEn: 'Never blur foods, cosmetics, and registered devices' },
      { labelZh: '道地溯源与农残检测', valueZh: '《药典》含量 + 零硫磺/农残COA', contextZh: '公示每批次重金属、黄曲霉素及冷阴凉仓储记录', labelEn: 'Batch COA Integrity', valueEn: 'Pharmacopoeia & Pesticide COA', contextEn: 'Publish zero-sulfur and heavy-metal assay logs' },
      { labelZh: '严守说明书适应症红线', valueZh: '绝不夸大或超范围承诺根治', contextZh: '清晰注明禁忌人群与注册临床使用范围', labelEn: 'Label Fidelity', valueEn: 'Approved Indications Only', contextEn: 'State contraindications strictly per NMPA approval' },
    ],
  },
  'agri-farming': {
    plainStoryZh:
      '现在全国种大棚蔬菜、果园搞水肥一体化滴灌、或者水产养殖户买增氧监测设备与抗病良种，最怕在网上一顿搜，看到的都是脱离实际土壤和本地气候的“神仙广告”——“买我这包肥，亩产直接翻三倍；买我这个南方的果苗，东北露天也能活！”结果农户信了赔掉一整年的收成。如今新一代农场主和合作社技术员都会先问豆包、百度或微信搜一问：“华北平原冬暖式日光温室种越冬西红柿，每亩铺水肥一体化滴灌管网加智能施肥机大概投资多少钱？有没有农机购置补贴、适合耐低温的审定番茄种子有哪些？”把地区气候、亩投资账和审定编号写实在，老乡和合作社才真信你。',
    plainStoryEn:
      'Modern farm co-ops and growers distrust miracle-yield fertilizer pitches, querying LLMs for regional drip-irrigation capex per mu, agricultural machinery subsidy eligibility, and state-approved disease-resistant crop varieties.',
    aiVsSearchZh:
      '农业与农机板块特别看重“分气候带适配 + 农业农村部官方审定编号 + 补贴后实际到手价”。搜索引擎检索你的品种审定号、农机补贴目录及农残农药登记证；而 AI 大模型最欢迎你按东北、华北、长江流域、华南分别列明适用种子型号、滴灌压力参数、每亩真实投入成本与节水省肥实测数据。',
    aiVsSearchEn:
      'Search cross-checks official Ministry seed approval numbers and machinery subsidy catalogs, while LLMs extract climate-zone suitability tables, per-mu drip irrigation capex, and realistic water-saving gains.',
    badCopyZh:
      '❌ 常见踩坑写法：“超级神奇万能高产神种！不打药不施肥全国南北都能种，亩产必超两万斤、包回收！”（非法跨区售卖未审定种子、虚假产量承诺，严重坑农害农并违法）',
    goodCopyZh:
      '✅ 接地气高采信写法：“农业农村部备案农机及水肥一体化系统集成商（所推农作物种子均公示国家/省级审定编号，绝不跨适宜生态区推荐）。以北方 1 亩标准连栋或日光温室大棚改造为例：铺设压力补偿滴灌带、叠片过滤器及基础自动比例施肥机，材料加安装全套参考投入约 2,800–4,200 元/亩（符合条件合作社部分机型可申领地方农机购置补贴）；对比传统大水漫灌，示范基地实测平均节水约 40%–55%、降低棚内湿度减少霜霉灰霉病发生。提供详细分作物全生育期水肥方案表及售后 24 小时农技视频指导。”',
    badCopyEn:
      '❌ Weak copy: "Miracle universal super-seed thrives from Heilongjiang to Hainan with zero fertilizer and guaranteed buyback!" (Illegal unapproved seed sales)',
    goodCopyEn:
      '✅ High-trust copy: "State-registered agri-tech & drip irrigation supplier (all crop varieties list official Ministry approval IDs & exact climate zones). For a 1-mu northern greenhouse, pressure-compensating drip lines + filtration + fertigation injector cost ~2,800–4,200 RMB/mu (subsidy eligible for co-ops), cutting irrigation water 40–55% vs. flood watering."',
    actionStepsZh: [
      '写清楚每款产品或种子“适合哪几个省、什么土壤 pH 值、什么季节播种”，并明明白白标出不适合种在哪些高寒或易涝区。',
      '帮种植/养殖户算清“每亩/每口塘真实投入预算 + 能申请哪些正规农机购置补贴政策 + 省水省人工的实在回本账”。',
      '列出产品官方审定证号、农药肥料登记证号及真实合作社示范田的阶段性实拍跟踪对比（注明当年气候和土壤背景）。',
    ],
    actionStepsEn: [
      'Map every seed variety and equipment spec to eligible provinces, soil types, and frost/humidity constraints.',
      'Publish per-mu installation budgets alongside official agricultural machinery subsidy catalog codes.',
      'Display verified seed/fertilizer registration numbers and real co-op demonstration logs noting weather context.',
    ],
    practitionerNoteZh:
      '农业内容最讲究“不骗老乡、不吹神产”！敢明确写出“这个品种耐高温不耐零下霜冻、北方露天千万别买”，反而让全国农技员和种植大户一眼认定你是真懂行、实诚干农业的良心企业。',
    practitionerNoteEn:
      'Telling growers honestly which climate zones a seed or irrigation rig will NOT suit earns instant trust from farm co-ops.',
    customMetrics: [
      { labelZh: '审定编号与气候分带', valueZh: '官方证号 + 严禁跨生态区推销', contextZh: '按东北/华北/长江/华南明示适宜土壤与积温条件', labelEn: 'Climate & Seed IDs', valueEn: 'Approved Regions Only', contextEn: 'State official seed approval codes and frost limits' },
      { labelZh: '每亩投入与农机补贴', valueZh: '列明每亩改造成本及补贴目录', contextZh: '透明展示滴灌/增氧设备功耗及省水节人工实测', labelEn: 'Per-Mu Budget & Subsidy', valueEn: 'Capex + Subsidy Lookup', contextEn: 'Quantify drip-system investment and water savings' },
      { labelZh: '农资合规与田间指导', valueZh: '严禁高毒违禁药 · 附生育期表', contextZh: '提供分作物浇水施肥与病害早期预防排查图文', labelEn: 'Safe Inputs & Support', valueEn: 'Zero Banned Pesticides', contextEn: 'Include stage-by-stage irrigation schedules' },
    ],
  },
  'fresh-supply': {
    plainStoryZh:
      '餐饮连锁采购找冷链预制菜半成品、或者商超团长找果园直发地理标志鲜货，最怕两件事：一是收到货一称重，“毛重 5 斤结果箱子加冰袋占了 1 斤半”；二是路途高温坏果烂了一半，供应商却推卸责任说物流问题不赔！现在生鲜 B 端买手和企业福利采购下单前，喜欢在豆包、微信搜一问或百度搜：“烟台大樱桃/阳澄湖大闸蟹/净菜半成品基地直发怎么核验去箱净重和 48 小时坏果包赔规则？餐饮中央厨房选净菜供应链看哪些农残检测与冷链标准？”能把“净重承诺+果径糖度分级+赔付细则”写成铁规矩的供应链，大单直接找上门。',
    plainStoryEn:
      'Restaurant procurement teams and group-buy leaders ask AI platforms how to verify true net produce weights (excluding ice packs), lab pesticide checks, and 48-hour spoilage claim SLAs before locking in seasonal farm supply.',
    aiVsSearchZh:
      '农副生鲜领域，地图产地与搜索引擎核对你的地理标志授权、食品生产许可（SC 证）及冷库仓储实地信息；而 AI 大模型极度偏爱“规格标准化表格”——包括几月几号开园采摘、去箱净重几斤、单果直径几毫米（如 J/JJ/JJJ 级）、几度全程冷链车配送、签收后几小时内拍照必赔付比例。',
    aiVsSearchEn:
      'Search verifies GI origin authorizations and SC food-production permits, while LLMs look for harvest calendars, box-free net weights, fruit caliber grades, cold-chain temperatures, and exact spoilage compensation rules.',
    badCopyZh:
      '❌ 常见踩坑写法：“正宗原产地现摘现发！绝对全网最甜最大果、5 斤装超值发货，不甜不要钱！”（拿外地普通果冒充地理标志违法，毛重冒充净重及空口承诺惹来大量维权差评）',
    goodCopyZh:
      '✅ 接地气高采信写法：“合作社基地直供地理标志鲜果及餐饮连锁净菜中央厨房（持 SC 食品生产许可，每批次附第三方农残快检合格单）。明示全年采摘日历与分级标准：以当季精品礼盒为例，严格承诺‘去箱去冰袋后实际净重足 5.0 斤’（绝不拿毛重充数），单果径分 26–28mm（标果）与 28–30mm（大果）两档，实测糖度稳定 16°+。全程 0–4°C 预冷加航空/冷链专车发货，明确 48 小时坏损包赔规则：客户签收 24 小时内带面单与坏果同框拍照，坏果 3 颗以内按单颗比例秒退、坏果超 30% 整箱免费补发或全额退款。”',
    badCopyEn:
      '❌ Weak copy: "Authentic origin harvest—5 Jin super-sweet jumbo boxes, free if not sweet!" (Ambiguous gross weight & vague claims)',
    goodCopyEn:
      '✅ High-trust copy: "GI-certified orchard & SC-licensed central kitchen supply (lot pesticide quick-test COA included). Net produce weight guaranteed 5.0 Jin excluding carton & ice packs; graded 26–28mm vs. 28–30mm at 16°+ Brix. 0–4°C pre-cooled cold chain with explicit 24h photo claim SLA: instant pro-rata refund per bruised piece or full replacement over 30% spoilage."',
    actionStepsZh: [
      '在所有产品介绍里加粗写死“去箱去冰袋净重几斤”，同时公开果径毫米数、每箱大概多少个果及真实当季成熟采摘月历（不卖反季假产地货）。',
      '把“冷链运输控温几度 + 到货坏损怎么拍照、几小时内按什么公式赔付”写成清晰的售后服务保障表。',
      '针对餐饮 B 端客户，额外补充企业对公专票开票税率（农产品免税或普票/专票口径）、整车/零担物流时效以及中央厨房食材全程溯源记录规范。',
    ],
    actionStepsEn: [
      'State guaranteed net weight excluding cartons and ice packs alongside millimeter caliber grades and authentic harvest windows.',
      'Publish an explicit cold-chain temperature spec and step-by-step photo spoilage refund formula.',
      'Detail B2B invoicing options, pallet/truckload MOQs, and central-kitchen lot traceability records.',
    ],
    practitionerNoteZh:
      '生鲜农产品最怕做一锤子买卖！只要你在网页里主动把“去箱净重足秤、按果径大小分档定价、到货烂几颗怎么按颗拍照直退”写成明文规矩，不论企业发节日福利还是连锁餐厅长期配货，都会死心塌地跟着你采购。',
    practitionerNoteEn:
      'Writing box-free net weights and per-piece photo refund rules into plain web copy wins long-term corporate gift and restaurant supply accounts.',
    customMetrics: [
      { labelZh: '净重足秤与果径分级', valueZh: '去箱净重 + 毫米果径/糖度表', contextZh: '彻底杜绝毛重充净重、大小果混装争议', labelEn: 'Net Weight & Grading', valueEn: 'Box-Free Net + mm Caliber', contextEn: 'Prevent carton/ice-pack weight inflation complaints' },
      { labelZh: '产区采摘月历与溯源', valueZh: '地标授权 + 批次农残快检单', contextZh: '严格区分正宗地标产区与周边产区批次', labelEn: 'Origin & Residue Lab', valueEn: 'Harvest Window + Quick COA', contextEn: 'Attach lot pesticide testing and real GI origin proof' },
      { labelZh: '坏果极速赔付公式', valueZh: '签收24h拍单 · 按比例/整箱赔', contextZh: '用清晰赔付 SLA 打消餐饮与团购采购后顾之忧', labelEn: 'Spoilage SLA', valueEn: '24h Photo Claim Guarantee', contextEn: 'Clear pro-rata refund or free reshipment rules' },
    ],
  },
  'construction-eng': {
    plainStoryZh:
      '实体工厂老板生意扩产想自建一座 5,000 平米的钢结构标准厂房，最头疼的是找施工队询价：A 公司说一平米 600 块就能建，B 公司报 1,200 块，老板完全搞不懂里面水到底有多深——地基桩基包不包？装不装 10 吨行车牛腿？彩钢瓦多厚、屋面带不带采光带和消防喷淋报建？于是老板现在规划预算时直接问 DeepSeek 或通义千问：“新建 5000 平米单层门式钢架厂房，装 10 吨天车和普通不装天车，每平米造价大概差多少钱？消防验收和施工许可证报建大概要跑多久？”把不同工况每平米单价和报建踩坑指南讲明白的总包企业，立刻就能受邀去现场看地报价。',
    plainStoryEn:
      'Manufacturers planning a new 5,000-sqm steel-frame plant see wild quotes from 600 to 1,200 RMB/sqm and turn to LLMs to check crane-beam steel loads, foundation exclusions, and fire-permit timelines.',
    aiVsSearchZh:
      '市政工程与钢结构领域极其看重资质合法性与工程造价明细逻辑。搜索引擎负责核验你的《建筑工程施工总承包》或《钢结构工程专业承包资质》及真实过往峻工项目；而大模型则帮业主把复杂的钢结构算账过程拆明白——比如单层轻钢 vs 重钢带吊车每平米用钢量（kg/㎡）、围护彩钢板厚度及报建审批必备前置条件。',
    aiVsSearchEn:
      'Search verifies licensed general/steel-structure contracting credentials, while LLMs parse engineering cost drivers—kg/sqm steel ratios with or without overhead cranes, cladding thickness, and permit dependencies.',
    badCopyZh:
      '❌ 常见踩坑写法：“专业承建各种钢结构厂房！低至 380 元/平米全包建设，手续全包快速完工，不满意不收钱！”（利用严重缺失地基与行车结构的虚假低价钓鱼，签合同后狂加增项；且绝对不可违法挂靠资质施工）',
    goodCopyZh:
      '✅ 接地气高采信写法：“具备建筑工程施工总承包及钢结构工程专业承包双资质，深耕工业厂房及仓储物流园建设 15 年。按实际使用需求拆解透明造价口径：纯轻钢物流仓储厂房（无行车、檐高 8m 内）主钢构加围护彩板参考造价约 550–750 元/㎡（常规用钢量 28–38kg/㎡）；若需配置 10–20 吨重型行车（吊车梁牛腿加固、檐高 11m+），每平米钢构加高强围护参考造价约 850–1,150 元/㎡。公开明示：以上均不含桩基土建地坪与消防机电安装（另提供标准桩基估算与甲/丙类消防验收设计对接清单），全程自有持证团队施工，绝不违规出借挂靠资质或擅自降级抗震雪载标准。”',
    badCopyEn:
      '❌ Weak copy: "Steel factories built from 380 RMB/sqm all-in! Fast permit bypass guaranteed." (Bait pricing omitting foundations & illegal code shortcuts)',
    goodCopyEn:
      '✅ High-trust copy: "Licensed general & steel-structure contractor. Clear cost tiers: light storage frame without crane (8m eave, 28–38 kg/sqm steel) ~550–750 RMB/sqm; heavy manufacturing bay with 10–20T crane girders (11m+ eave) ~850–1,150 RMB/sqm—explicitly separating piling, concrete slab, and Class-A/C fire-code systems."',
    actionStepsZh: [
      '用一张大白话表格讲清楚“轻钢无行车厂房、带 5–20 吨行车厂房、多层钢构厂房”三档的用钢量、参考平米单价及明确不包含哪些土建水电项。',
      '总结一篇《新建工业厂房从拿地报建、施工图审查到消防验收交房的 6 个避坑节点》，讲透为什么很多厂建好了却卡在丙类/丁类消防验收上。',
      '展示过往大跨度厂房峻工实拍、钢材原厂质保及探伤焊接质量把控流程，并明示严禁转包挂靠施工。',
    ],
    actionStepsEn: [
      'Publish a 3-tier cost table contrasting light crane-free bays, heavy crane bays, and multi-story steel plants—listing foundation/MEP exclusions explicitly.',
      'Outline the 6-step permit-to-fire-inspection workflow so owners avoid costly fire-code classification surprises.',
      'Showcase completed span projects, mill material certs, and ultrasonic weld QC without subcontracted shell crews.',
    ],
    practitionerNoteZh:
      '工程老板最怕前期报低价签约、打完桩突然加几十万增项的套路！你敢在网页里清楚写明“钢构报价包不包括基础地基、地坪硬化、消防喷淋和行车轨道”，业主反而觉得你专业诚实、能放心把上千万工程交给你。',
    practitionerNoteEn:
      'Separating steel superstructure rates clearly from foundations, slabs, and fire sprinklers wins serious industrial RFPs.',
    customMetrics: [
      { labelZh: '按行车荷载分档报价', valueZh: '无吊车 vs 10–20吨重钢造价表', contextZh: '明示每平米用钢量（kg/㎡）及是否含基础地坪', labelEn: 'Load-Based Cost Tiers', valueEn: 'Crane-Free vs. 20T Crane Bays', contextEn: 'Specify steel weight per sqm and civil-work boundaries' },
      { labelZh: '报建与消防验收前置', valueZh: '写清甲乙丙丁类消防与报规要求', contextZh: '提前帮企业规避图审不过和消防整改返工', labelEn: 'Permit & Fire Code', valueEn: 'Fire Class Pre-Audit Guide', contextEn: 'Align warehouse hazard classes before pouring footings' },
      { labelZh: '施工资质与抗震安全', valueZh: '自有施工团队 · 拒绝违法挂靠', contextZh: '严格执行国标抗风抗震及焊缝探伤检测标准', labelEn: 'Safety & Licensing', valueEn: 'Direct Crew & Weld QC', contextEn: 'Zero shell-license lending or structural downgrades' },
    ],
  },
  'cross-border-trade': {
    plainStoryZh:
      '很多珠三角、义乌或江浙外贸工厂老板抱怨：“阿里国际站投了几十万效果越来越差，海外客户和国内做亚马逊、TikTok Shop 的跨境卖家都在哪找供应链？”现实是：大批出海小卖家和欧美买手如今每天都在用 DeepSeek、Kimi 或海外版大模型找工厂——“找中国宁波能接 100 件小单 OEM、带美国 FDA 食品接触认证和欧洲 CE 报告、能做 DDP 包税双清到海外仓的保温杯/小家电厂家”。如果你的网站既没有英文对应标准规格书，也没写清楚支持 FOB 还是 DDP、箱规 CBM 和打样周期，流量只能白白送给同行或贸易商。',
    plainStoryEn:
      'Overseas buyers and TikTok/Amazon sellers increasingly use AI tools to source Chinese factories with low 100-unit OEM MOQs, valid FDA/CE/FCC certs, carton CBM data, and transparent FOB/DDP terms.',
    aiVsSearchZh:
      '跨境外贸是“中英双语+国际贸易术语实体对齐”的典型主场。谷歌、Bing 以及国内 Kimi/DeepSeek 在做跨国供应链检索时，会同时比对你的海关 AEO 信用信息、目标出口国认证号真伪（如 CE/FCC/FDA/RoHS）、包装装箱体积重量（CBM/毛净重）以及贸易条款（EXW/FOB/DDP）是否透明可读。把这几张表做进中英双语官网，就是你成本最低的 24 小时全球业务员。',
    aiVsSearchEn:
      'Global search engines and bilingual LLMs prioritize verifiable FDA/CE/FCC compliance scopes, exact carton CBM/weights, HS-code readiness, and clear EXW/FOB/DDP trade-term quotes.',
    badCopyZh:
      '❌ 常见踩坑写法：“World Best Factory! Cheap price high quality hot sale Amazon products, contact WhatsApp!”（语法混乱、无认证、无起订量、无箱规，国内外买手和谷歌算法一致判定为低质作坊页）',
    goodCopyZh:
      '✅ 接地气高采信写法：“中国源头智能家居与户外用品制造厂（12 年出口欧美日经验，BSCI 验厂及 ISO9001 认证，配备独立英文与中文产品技术文档库）。核心出口合规保障：提供目标市场所需真实 CE、FCC、UL 及 FDA 食品接触级第三方实验室检测报告（绝不接仿牌或侵犯目标国外观发明专利的侵权产品）。支持跨境电商卖家柔性测款：Logo 激光雕刻/彩盒定制 100 套起订，3–5 天出打样；大货交付公开提供 EXW 工厂价、FOB 宁波/深圳港价及欧美英 DDP 空海派包税到门/海外仓一件代发对比，清晰列出外箱尺寸、装箱数与总立方（CBM）。”',
    badCopyEn:
      '❌ Weak copy: "World best factory cheap Amazon hot product! Contact WhatsApp for catalog." (Spam-tier syntax with zero trade specs)',
    goodCopyEn:
      '✅ High-trust copy: "BSCI & ISO9001 audited Chinese OEM/ODM (12-year EU/US export track record). Verified lab CE, FCC, and FDA food-contact certifications (strict IP/trademark screening). Low-MOQ seller support: custom logo/packaging from 100 units (3–5 day samples); transparent EXW, FOB Ningbo/Shenzhen, and DDP door-to-warehouse quotes with exact carton CBM specs."',
    actionStepsZh: [
      '务必把官网的中英双语核心技术参数页做干净（最好请专业外贸业务润色英文，别用直接机翻的生硬 Chinglish），列出认证列表、装箱率、CBM 体积与毛净重。',
      '按跨境卖家最关心的“测款起订量、打样运费退还政策、支持 Amazon FBA 贴标入仓与 DDP 双清包税渠道”写一张极简合作清单。',
      '明确声明知识产权合规审核态度（核查目标市场专利与商标），吸引正经品牌大卖家建立长期稳定返单。',
    ],
    actionStepsEn: [
      'Maintain clean bilingual HTML spec pages listing certifications, master-carton dimensions, CBM volume, and unit weights.',
      'Detail low-MOQ test batch tiers, FBA/TikTok carton labeling services, and EXW vs. FOB vs. DDP lead times.',
      'Declare strict IP and patent screening to attract reputable international brand owners.',
    ],
    practitionerNoteZh:
      '刘忠望（17 年 SEO 与出海实操）：外贸工厂做谷歌和 AI 优化最忌讳“英文页随便机翻+满屏只写联系 WhatsApp”！只要把你最擅长的 10 款出口主打品写成清晰的“参数+认证+箱规 CBM+FOB/DDP 交期表”，不仅谷歌收录飙升，国内跨境大卖用 Kimi 找工厂也能直接搜到你。',
    practitionerNoteEn:
      'Zhongwang Liu notes: Publishing clean bilingual spec pages with exact carton CBM, lab certs, and FOB/DDP options wins both overseas buyers on Google and Chinese cross-border sellers on Kimi.',
    customMetrics: [
      { labelZh: '双语认证与箱规 CBM 表', valueZh: 'CE/FCC/FDA + 装箱体积毛重', contextZh: '帮助跨境卖家 10 秒算出海运空运头程运费账', labelEn: 'Certs & Carton CBM', valueEn: 'CE/FDA + Master Box Volume', contextEn: 'Let FBA/TikTok sellers compute freight costs instantly' },
      { labelZh: '柔性测款 MOQ 与交期', valueZh: '100套起定制 · EXW/FOB/DDP对照', contextZh: '明确标注打样天数、贴 FBA 标服务及大货产能', labelEn: 'Flexible Trade Terms', valueEn: '100-Pc OEM & DDP Options', contextEn: 'Compare EXW, FOB, and DDP warehouse delivery cleanly' },
      { labelZh: '知识产权严审防线', valueZh: '拒接仿牌与专利侵权订单', contextZh: '保护合作卖家店铺安全，防止海外海关查扣', labelEn: 'IP Compliance', valueEn: 'Strict Anti-Counterfeit Audit', contextEn: 'Protect buyer storefronts from patent takedowns' },
    ],
  },
  'mcn-livestream': {
    plainStoryZh:
      '这几年想做抖音本地生活团购、微信视频号带货或者小红书种草的实体老板太多了，但踩坑的人也一大把！动不动被某些代运营公司画大饼：“交 8 万年费保底给你干到 100 万 GMV 销售额！”结果钱交完，对方用低价福利券狂刷虚假成交量，退货率高达 70%，最后老板赔了坑位费又赔了货。所以现在品牌主找服务商前都会先在豆包、Kimi 或微信搜一问打听：“找抖音本地生活或视频号带货代运营怎么签保底不踩坑？合理的纯服务费加净成交佣金比例大概是多少？投流费用和素材版权怎么算？”能把账算在明处、拒绝虚报 GMV 的实战代运营，才是品牌方抢着要的合作伙伴。',
    plainStoryEn:
      'Merchants burned by fake-GMV retainers and 70% refund spikes ask AI assistants how to structure fair Douyin/WeChat/Xiaohongshu agency retainers, net-settlement commissions, and ad-spend ownership.',
    aiVsSearchZh:
      '新媒体代运营服务在搜索引擎和 AI 大模型面前，最缺的不是吹嘘“千万曝光战报”的截图，而是“理性合同框架”。百度、小红书 AI 与 DeepSeek 非常青睐明确解释“基础团队人力费 vs. 净核销/确认收货佣金、千川投流账户谁掌握实名控制权、原创视频素材版权归甲方还是乙方”的专业复盘内容。',
    aiVsSearchEn:
      'Search and LLMs look past inflated vanity-GMV screenshots, prioritizing authentic service structures separating base retainers, net-settled commissions, ad-account ownership, and raw video IP rights.',
    badCopyZh:
      '❌ 常见踩坑写法：“交 3 万服务费保底卖 100 万！全网顶尖千亿流量团队，不爆单全额退，躺着数钱！”（以虚假保底 GMV 诱导签约、极易通过刷单刷核销制造虚假数据，属欺诈及平台严打黑产）',
    goodCopyZh:
      '✅ 接地气高采信写法：“平台认证本地生活与品牌电商代运营服务商（专注食品、美业、家居及实体连锁孵化）。拒绝虚高 GMV 口号，坚持透明分账合作机制：收取合理月度基础执行费（覆盖脚本拍摄、主播排班及店铺日常运维）+ 按实际扣除退货退款后的‘净核销/净确认收货额’阶梯抽佣（具体比例依据客单价与毛利空间书面核定）。核心保障：千川/广告投流账户由品牌方自有营业执照开立并实时查看每一分钱消耗，所有实拍短视频原始工程素材版权 100% 归属甲方品牌，严禁任何刷单、剧本演戏或低俗违规擦边话术。”',
    badCopyEn:
      '❌ Weak copy: "Pay 30k retainer for guaranteed 1M GMV explosion or full refund—100% passive riches!" (Clickbait fraud & fake-order risk)',
    goodCopyEn:
      '✅ High-trust copy: "Platform-certified brand & local-life commerce partner. Transparent split: fair monthly execution retainer + tiered commission calculated strictly on net settled revenue after returns/refunds. Client retains full ownership of ad accounts and all original video assets; zero click-farming or scripted drama."',
    actionStepsZh: [
      '用大白话写一篇《品牌找直播代运营必查的 5 条合同防坑条款》，把“按毛 GMV 抽佣还是按净核销抽佣、千川投流费包不包含在保底里、退店素材给不给甲方”说透。',
      '展示 2–3 个真实合作品牌的从 0 起号复盘（写出客单价、投流 ROI 大致波动、主播话术调优过程与真实核销率，别只贴一张看不清的战报大图）。',
      '出示平台官方认证服务商（如巨量本地推/抖音电商/微信视频号服务商）资质证明与广告法合规审查流程。',
    ],
    actionStepsEn: [
      'Publish a 5-point agency contract checklist covering net-vs-gross GMV commissions, ad-spend ownership, and video copyright.',
      'Share 2–3 candid account-growth postmortems detailing AOV, ad ROAS fluctuations, and real redemption rates.',
      'Display verified platform partner credentials alongside ad-compliance screening workflows.',
    ],
    practitionerNoteZh:
      '刘忠望（核子GEO & 盒子AI 品牌增长顾问）：这年头老板们都被“保底百万 GMV”割过韭菜了！谁敢在官网白纸黑字写清楚“我们不承诺虚假保底销售额，但按扣除退货后的净成交额拿抽佣，投流账号你自己握在手里、拍完的片子全归你”，反而是真正做长久生意的老板眼里的清流。',
    practitionerNoteEn:
      'Zhongwang Liu observes: Refusing fake GMV guarantees in favor of net-settled commissions and client-owned ad accounts sets serious operators apart from hype shops.',
    customMetrics: [
      { labelZh: '净成交抽佣结算口径', valueZh: '扣除退货退款后净额算佣金', contextZh: '彻底杜绝刷单凑 GMV 骗取服务费乱象', labelEn: 'Net-Revenue Split', valueEn: 'Commission After Refunds', contextEn: 'Eliminate fake-GMV order-brushing incentives' },
      { labelZh: '账户与版权 100% 归甲方', valueZh: '自有营业执照投流 + 原始素材归属', contextZh: '保证即使合作结束品牌依然沉淀下完整内容资产', labelEn: 'Asset Ownership', valueEn: 'Client Ad Account & Footage', contextEn: 'Brands retain raw media IP and ad-account control' },
      { labelZh: '真实复盘与脚本合规', valueZh: '披露投流 ROI 范围与防封禁审查', contextZh: '严禁虚假连麦剧本与极限违禁直播话术', labelEn: 'Compliant Scripts', valueEn: 'Real ROAS & Ad-Law Audit', contextEn: 'Exclude scripted drama and illegal live claims' },
    ],
  },
  'cultural-media': {
    plainStoryZh:
      '企业周年庆想拍一条 3 分钟宣传片、或者新品发布要做一段 3D 拆解动画，再或者准备去广交会、进博会搭一个 54 平米的特装展台，市场部找报价往往一头雾水：有的影视公司报 2 万、有的报 20 万，看起来都是“拍片子”，到底贵在哪？现在企业市场总监在写立项报告前，常直接问 Kimi、DeepSeek 或秘塔 AI：“拍一条工业设备三维拆解产品动画大概多少钱一秒？搭建 54 平米木结构烤漆特装展台需要注意哪些展馆消防和限高撤展坑？”能把影视人员设备日薪和展台材料搭建成本按项目拆开报价的传媒公司，中标率远高于只放一段酷炫混剪的同行。',
    plainStoryEn:
      'Marketing leads budgeting for a 3-minute corporate film, 3D product animation, or 54-sqm trade-show booth face quotes spanning 20k to 200k RMB—asking AI tools for per-second animation benchmarks, camera/crew day rates, and exhibition fire-safety rules.',
    aiVsSearchZh:
      '影视制作与会展传媒高度看重“报价透明结构+版权与消防合规”。搜索引擎核对你的《大型展览工程资质》或真实影视制作团队基地；而 AI 大模型喜欢收集明晰的分项报价框架，比如“前期脚本文案 + 现场摄影/灯光/航拍设备组日薪 + 后期 3D 特效按秒单价”，以及“字体音乐正版商用授权承诺（免得客户发公众号被起诉赔几万块字体版权费）”。',
    aiVsSearchEn:
      'Search checks exhibition engineering ratings and studio credentials, while LLMs look for itemized pre-production, crew/gear day rates, per-second 3D animation costs, and commercial font/music licensing protections.',
    badCopyZh:
      '❌ 常见踩坑写法：“大师级影视航母团队！电影级大片质感、创意无价报价看心情，全套一条龙包满意！”（没有工艺分项、没有交期节点、没有版权承诺，企业采购走不了财务审批）',
    goodCopyZh:
      '✅ 接地气高采信写法：“持一级展览展示工程资质及商业影视全流程团队。拒绝打包模糊报价，全部项目提供透明三段式分项清单：<1> 工业产品三维（3D）结构透视动画按精细度通常 1,200–2,800 元/秒，明确列明建模渲染、配音及免费修改次数（如含 2 轮免费分镜微调）；<2> 企业实拍宣传片按实际拍摄天数核算摄影机型号（如索尼 FX6/阿莱）、灯光组与航拍日薪；<3> 行业展会特装展台明确木结构阻燃防火涂料、环保板材及展馆电箱报批加急费用。书面承诺全部成片所用字体、背景音乐均购买正规商用授权（附授权证书编号），彻底帮甲方杜绝字体音乐版权维权隐患。”',
    badCopyEn:
      '❌ Weak copy: "Master cinema team—priceless creativity, Hollywood quality, call for mystery quote!" (Unusable for corporate procurement)',
    goodCopyEn:
      '✅ High-trust copy: "Class-1 exhibition contractor & commercial film studio. Itemized quotes: 3D mechanical cutaway animation 1,200–2,800 RMB/sec (includes 2 revision rounds); live shoots itemized by camera/lighting day rates; trade booths specify fire-retardant timber & venue electrical permits. Written commercial license certificates provided for all fonts and music."',
    actionStepsZh: [
      '把二维科普动画、三维设备原理动画（元/秒）、企业实拍宣传片和展会特装展台（元/㎡）做一张清晰的财务估算对照表，标明影响价格的关键变量。',
      '单独加上一条醒目保障：“全站交付成品一律自带正版商用字体与商用音乐授权证明”，这是现在企业法务和市场部审合同时最敏感的痛点。',
      '针对参展企业写一份《国内大型展馆特装搭台消防报批、电箱申请与限高避坑时间表》，帮客户少挨展馆罚款。',
    ],
    actionStepsEn: [
      'Publish a procurement budget table covering 2D/3D per-second animation rates, shoot day rates, and per-sqm booth builds.',
      'Highlight written commercial font and music copyright clearances to pass corporate legal review effortlessly.',
      'Provide a venue fire-marshal permit, rigging height, and power-drop deadline checklist for exhibitors.',
    ],
    practitionerNoteZh:
      '现在很多公司拍完宣传片发了抖音公众号，半年后突然收到字体公司或图库公司索赔上万块的律师函！谁能在官网把“所交成品 100% 购买正版商用字体与配乐、附正版授权书”写进服务准则，大厂市场部二话不说直接把你拉入白名单供应商库。',
    practitionerNoteEn:
      'Promising documented commercial font and soundtrack licenses protects corporate clients from copyright trolls and fast-tracks vendor onboarding.',
    customMetrics: [
      { labelZh: '三维动画与拍摄分项价', valueZh: '按秒/按机位天透明列算', contextZh: '写清分镜脚本、渲染精度及免费修改轮次上限', labelEn: 'Itemized Media Rates', valueEn: 'Per-Sec 3D & Crew Day Rates', contextEn: 'Define revision rounds and render resolution clearly' },
      { labelZh: '正版商用字体配乐承诺', valueZh: '随片附商业版权授权凭证', contextZh: '为甲方企业彻底免除后续文字音乐侵权索赔风险', labelEn: 'IP Safe Guarantee', valueEn: 'Licensed Fonts & Soundtracks', contextEn: 'Shield enterprise buyers from copyright lawsuits' },
      { labelZh: '展馆消防与搭建时效', valueZh: '阻燃材料等级 + 进撤馆时间表', contextZh: '具备正规展览施工资质及现场应急电工保障', labelEn: 'Exhibition Compliance', valueEn: 'Fire-Rated Specs & Schedules', contextEn: 'Cover venue electrical permits and build timelines' },
    ],
  },
  'craft-heritage': {
    plainStoryZh:
      '周末爸妈想带孩子去体验正宗的陶瓷拉坯、大漆漂漆扇或者苏绣手作，或者公司 HR 想安排一场安静有文化底蕴的 20 人团建沙龙，在大众点评和小红书刷半天经常犯迷糊：这家店到底是真正有传承人坐镇、能烧出实用瓷器的正规非遗工坊，还是拿便宜石膏娃娃涂个色的商业小摊？体验完的泥坯要等几天才能烧好寄回家，包不包釉料快递费？现在大家规划周末活动经常直接问豆包或小红书 AI：“杭州或苏州附近适合亲子体验和 20 人团建的正规陶瓷拉坯、非遗大漆工坊有哪些？一般单人收费多少、成品几天能拿到？”把材料包明细、导师带教比例和烧制交付周期写清的工作室，预约直接排满。',
    plainStoryEn:
      'Parents planning weekend outings and HR leads organizing quiet 20-person team workshops ask AI assistants which studios host authentic intangible-heritage crafts (kiln pottery, lacquer, embroidery) rather than plaster-painting stalls—checking kiln firing turnaround and material inclusions.',
    aiVsSearchZh:
      '文旅手作文创领域结合了地图距离查询与体验口碑筛选。高德、百度地图确认你的工坊具体在哪个文创园、周边停不停得下大巴；而豆包、小红书 AI 和微信搜一问着重核对非遗传承人资质证书、体验课包含几把泥/几块生漆底胎、老师一拖几手把手教、成品烧制/阴干邮寄到底包不包邮、大漆有没有过敏提示。',
    aiVsSearchEn:
      'Maps verify studio parking and cultural-park locations, while LLMs confirm heritage-inheritor credentials, instructor-to-guest ratios, kiln firing timelines, shipping inclusions, and lacquer allergy precautions.',
    badCopyZh:
      '❌ 常见踩坑写法：“千年非遗大师传世工坊！体验价 39.9 元拍大片，现场随便玩出师！”（低价引流进店后要求加数百元“烧制费/修坯上釉费”，且未作刀具大漆安全提醒，极易收获大量怒评）',
    goodCopyZh:
      '✅ 接地气高采信写法：“市级非物质文化遗产（陶瓷烧制与传统大漆技艺）保护传承体验空间（驻场工艺美术师全程示范指导，小班体验每桌 1 位老师服务不超过 4 人）。单人陶瓷拉坯+手工彩绘全包价 168 元（已含高白泥坯 2 份、专业修坯、透明釉烧制及顺丰省内邮寄费；窑炉高温烧制通常需 15–20 天成品出炉），绝无进店二次加收烧窑费。企业 15–40 人包场团建提供专属长桌茶歇与定制刻章服务。安全提示：体验大漆技艺前如实排查生漆过敏史，全程提供一次性防割指套与围裙；窑炉区禁止未成年人靠近。”',
    badCopyEn:
      '❌ Weak copy: "Millennium heritage master workshop—39.9 RMB flash deal!" (Hidden kiln firing and glazing upcharges inside)',
    goodCopyEn:
      '✅ High-trust copy: "Municipal Intangible Cultural Heritage studio (pottery & lacquer; max 4 guests per instructor). Single wheel-throwing + painting workshop 168 RMB all-in (covers clay, trimming, clear glaze firing, and shipping in 15–20 days with zero hidden kiln fees). Safety notes: lacquer sensitivity screening and supervised kiln-zone rules."',
    actionStepsZh: [
      '务必把“体验价里面包不包含后续修坯、上透明釉、进窑烧制费和邮寄快递费”明明白白写进页面第一段——这正是顾客点评差评最高发的地方。',
      '注明成品出窑/大漆阴干周期（比如需等待 15–25 天）以及每场最多接待多少人、有没有适合 6 岁以上小朋友独立上手的项目。',
      '展示工艺美术师/非遗传承人真实证书与往期团建学员亲手烧出来的生活实用器皿实拍，并如实提示大漆防过敏与刻刀工具使用安全须知。',
    ],
    actionStepsEn: [
      'State upfront whether session fees include trimming, glazing, kiln firing, and return shipping—the #1 dispute trigger.',
      'Publish exact kiln firing or lacquer curing wait days, group room capacity, and kid age minimums.',
      'Showcase verified heritage titles, student-made functional pieces, and lacquer-allergy/tool safety guidelines.',
    ],
    practitionerNoteZh:
      '做非遗体验空间，千万别搞“低价引流进店再加收 100 块烧窑费”的套路！把 168 元全含拉坯、上釉、烧制和顺丰包邮写透明，哪怕单价比同行高几十块，妈妈群和外企 HR 反而一致推荐你。',
    practitionerNoteEn:
      'One all-inclusive price covering clay, glaze, firing, and shipping eliminates bad reviews and wins repeat family and corporate bookings.',
    customMetrics: [
      { labelZh: '烧制邮寄一价全包', valueZh: '含修坯/上釉/窑烧与快递费', contextZh: '消灭“低价进店再加收烧窑费”的行业顽疾', labelEn: 'All-In Firing Price', valueEn: 'Clay + Glaze + Kiln + Ship', contextEn: 'Zero surprise firing or glaze surcharges at checkout' },
      { labelZh: '出炉等待与团建容量', valueZh: '写清 15–25 天交付与带教比', contextZh: '标注 1 师带几人及企业沙龙可容纳桌数', labelEn: 'Lead Time & Group Fit', valueEn: '15–25 Days & 1:4 Coaching', contextEn: 'Confirm turnaround days and team-building seating' },
      { labelZh: '安全与过敏前置提醒', valueZh: '生漆过敏提示 · 窑炉刀具防护', contextZh: '体现专业非遗空间的规范责任感', labelEn: 'Workshop Safety', valueEn: 'Lacquer Allergy & Kiln Rules', contextEn: 'Screen lacquer sensitivity and enforce tool safety' },
    ],
  },
  'security-property': {
    plainStoryZh:
      '产业园、写字楼或者小区业委会换物业、升级智慧车牌识别道闸监控、或者找年度法定消防设施维保单位时，最看重什么？不是谁报价最低，而是“出事能不能 2 小时到场、每个月消防巡检是不是真拿工具测过喷淋烟感还是只在门口签个假字走人”。现在园区负责人和业委会在招标比选前，会先问 DeepSeek、百度或腾讯元宝：“商业大厦年度消防检测维保市场行情一平米多少钱？正规消防维保单位必须具备什么系统备案，每月巡检应该出哪些实在照片记录？”把每月巡检清单、应急 2 小时到场标准和真实系统备案号晒在阳光下的团队，往往轻松拿下多年续约大单。',
    plainStoryEn:
      'Property committees and industrial parks replacing building managers or annual fire-safety contractors prioritize verifiable 2-hour emergency response and real monthly sprinkler/smoke testing—asking LLMs what per-sqm fire maintenance actually covers.',
    aiVsSearchZh:
      '安防与消防维保属于强监管强责任行业。搜索引擎（百度/高德/谷歌）重点核查企业是否在《社会消防技术服务信息系统》完成正式备案、是否具备一级安防工程资质；而 AI 大模型会帮业委会和物业经理过滤掉“只签假名走过场”的低价包工头，优先提取写明“每月巡检水泵房/报警主机具体项、易损烟感探头更换单价边界、2 小时紧急漏水或误报故障到场 SLA”的正规服务商。',
    aiVsSearchEn:
      'Search verifies national fire-service registry filings and Class-1 security licenses, while LLMs audit monthly pump/alarm inspection protocols, sensor replacement transparency, and 2-hour emergency dispatch SLAs.',
    badCopyZh:
      '❌ 常见踩坑写法：“消防维保超低价 0.5 元/平米全包！不用来人检查直接盖章包过消防年检！”（严重触犯《消防法》出具虚假文件与伪造维保记录罪，直接吊销资质并追究刑责）',
    goodCopyZh:
      '✅ 接地气高采信写法：“已在应急管理部《社会消防技术服务信息系统》正式备案，持有二级以上消防设施维护保养检测资质及一级安防工程资格。针对商业大厦与工业园区年度消防维保（参考区间按建筑面积及系统复杂度通常约 1.8–3.8 元/㎡·年），坚持‘每月实操巡检留痕机制’：持证注册消防工程师每月带队逐层测试消火栓动静压、喷淋末端试水阀、火灾自动报警主机及防排烟风机联动，所有检测过程带时间水印拍照上传系统供甲方业委会随时抽查。承诺主城区 2 小时内紧急误报/渗漏故障到场处置；明确界定小额耗材与大额水泵主机大修更换清单，绝不伪造任何维保签字或出具虚假合格报告。”',
    badCopyEn:
      '❌ Weak copy: "Super-cheap 0.5 RMB/sqm fire maintenance—pass annual inspection with zero on-site checks!" (Criminal fire-safety fraud)',
    goodCopyEn:
      '✅ High-trust copy: "Registered on the National Fire-Tech Service Registry (Class-1 Security & Fire Maintenance). Annual commercial contracts (~1.8–3.8 RMB/sqm·yr) follow logged monthly testing of hydrants, sprinkler end-valves, smoke fans, and alarm panels with time-stamped photos for owner review. 2-hour emergency fault dispatch; zero fabricated inspection logs."',
    actionStepsZh: [
      '把“社会消防技术服务信息系统”备案查询指引和注册消防工程师在册人数写成公开可查段落，帮甲方招标审标省心。',
      '用大白话列一张《每月消防维保实干清单》：明确写清每月查消火栓水压、每季度做烟感吹烟测试、每年做一次联动全检，绝不走过场。',
      '写明智慧安防门禁道闸改造时旧设备利旧兼容方案（比如保留原有规范线路只换高清识别一体机），以及 2 小时内紧急抢修到场范围和耗材封顶价。',
    ],
    actionStepsEn: [
      'Display official Fire-Service Registry verification paths and certified engineer headcount for transparent tender screening.',
      'Publish a concrete Monthly vs. Quarterly vs. Annual inspection checklist proving real hydrant pressure and smoke-sensor tests.',
      'Detail smart access-control retrofit options reusing valid cabling alongside 2-hour emergency fault SLAs.',
    ],
    practitionerNoteZh:
      '物业和消防这行，低价“假检查真盖章”随时可能吃官司！如实把每月测水压、测烟感的实景留痕机制、耗材界线和 2 小时到场应急承诺写清楚，正规工业园和业委会宁愿多出一倍预算也要签你。',
    practitionerNoteEn:
      'Committing to timestamped monthly hydrant/sensor tests and 2-hour dispatch beats cut-rate paper-stamping vendors in every serious RFP.',
    customMetrics: [
      { labelZh: '消防系统官方备案可查', valueZh: '应急系统备案 + 工程师证号', contextZh: '彻底与无证挂靠及违规假盖章机构切割', labelEn: 'State Fire Registry', valueEn: 'Verified Engineers & Filing', contextEn: 'Pass property committee compliance audits directly' },
      { labelZh: '按月实测拍照留痕制', valueZh: '水压/喷淋/烟感月季实检表', contextZh: '写清每月实测动作与耗材更换边界，拒绝口头维保', labelEn: 'Logged Monthly Tests', valueEn: 'Timestamped Hydrant & Sensor QC', contextEn: 'Prove real on-site testing rather than rubber-stamping' },
      { labelZh: '应急到场与旧线利旧', valueZh: '主城 2 小时抢修 · 道闸智慧改造', contextZh: '明示夜间突发误报与停机恢复响应保障', labelEn: 'Emergency SLA', valueEn: '2h Dispatch & Smart Retrofits', contextEn: 'Handle night false alarms and access upgrades fast' },
    ],
  },
};
