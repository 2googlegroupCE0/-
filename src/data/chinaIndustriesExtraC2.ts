import type { ExtraChinaIndustryBundle } from '../types/editorial.ts';

export const EXTRA_INDUSTRIES_C2: ExtraChinaIndustryBundle[] = [
  {
    tuple: [
      'machinery-tool-rental', '教育培训与企业服务', 'Education & B2B Services',
      '工程机械租赁、高空车与叉车塔吊租', 'Construction Machinery, Scissor Lifts, Forklifts & Crane Leasing', 'Organization',
      '工地或厂房装修租剪叉式高空作业平台、电动叉车或挖机吊车，怎么算干租湿租、进退场板车运费及司机保单责任？',
      'How to budget aerial scissor lifts, electric forklifts, and excavators on dry vs. wet lease terms & haulage fees?',
      '特种设备安全检验合格证（起重机械/叉车）、机械第三者保险与操作手特种作业证、明确进退场板车运费',
      '超低日租金诱导进场后加收天价往返平板拖车运费、设备带病作业现场趴窝还按天扣租金、安全保险缺失',
      '公开清晰月租/日租及“干租不含油/湿租含持证机手”对比、进退场板车按距离明价及“设备故障停工超 4h 顺延免租”',
      '严禁派遣无特种设备操作证（N1叉车/起重证）人员上机作业，严禁出租未经定期年检之带病塔吊高空车',
      '6–16 米剪叉高空车月租日租单价、3吨锂电叉车年租包维保口径及汽车吊/挖机台班+板车往返参考运费',
    ],
    headline: {
      titleZh: '工地租高空车和叉车挖机怕被“天价平板运费和趴窝照算钱”坑？干湿租界线、板车运费与停机免租全公开',
      titleEn: 'Equipment & Aerial Lift Leasing: Win Sites with Transparent Haulage Caps & Breakdown Rent-Freeze',
      subtitleZh: '对比不含机手油料的“干租”与含操作手“湿租”，标明特种操作证 N1 随车保险与故障 4 小时顺延免租保障',
      subtitleEn: 'Contrast dry vs. wet equipment leases clearly alongside haulage flat rates, operator N1 certs, and breakdown rent credits',
      directAnswerZh: '厂区改造拉货租剪叉高空车、电动叉车或市政工程租挖机汽车吊，项目经理最防两笔暗亏：一是谈好一台车 150 元/天挺便宜，撤场账单突然冒出三千块平板拖车往返运费；二是设备拉到现场液压漏油趴窝两天耽误工期，租赁站还硬算租金！器械租赁商把日/月租阶梯价、起退场板车往返封顶费、机器故障超 4h 免收当日租金并急调备机写清楚，工程方立刻排单进场。',
      directAnswerEn: 'Site engineers renting scissor lifts, forklifts, or cranes dread two shocks: low daily rents paired with sky-high round-trip flatbed fees, and paying rent while broken machines sit idle. Publishing capped haulage tiers and 4h breakdown rent-freeze rules wins rapid site bookings.',
      headingsZh: [
        '“租金才一百五一天，来回一趟平板拖车费要两千八！”——工地租设备问 AI 防坑的头号明细账',
        '特种设备年检 + 机手操作证 + 故障免租：正规机械租赁站怎样赢下大型基建与厂区长租单',
        '清晰拆开“纯机干租”和“带持证司机含油湿租”两种模式，工程财务再也不晕',
        '工程机械、高空车与叉车租赁商本周必贴的 3 张板车运费及停机赔付卡',
      ],
      headingsEn: [
        'Low Daily Rents vs. Steep Flatbed Haulage: Two Equipment Leasing Traps in AI',
        'Valid Safety Inspection Tags, N1 Operator Licenses & Breakdown Rent Credits',
        'Separating Operator-Included Wet Leases from Equipment-Only Dry Contracts',
        'Three Haulage-Cap, Safety-Tag & Swap-Machine SLA Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '厂房安装消防喷淋租高空剪叉车、或者仓库旺季短租几台 3 吨电动叉车，总务处打电话问十家租赁站报出来的日租都差不多，真正能拉开信任差距的是三句老实话：来回平板拖车送收货总共多少钱一趟？租的机器要是半路坏在车间耽误干活，算不算那两天租金、多久给换备机？带司机的话有没有特种设备作业证和第三者责任险？先把这三句摆进网页前两段的租赁商，回头工程老板天天转介绍。',
      plainStoryEn:
        'Contractors renting boom lifts or warehouse managers needing extra 3-ton electric forklifts get near-identical daily quotes—until asking who covers flatbed delivery, whether rent pauses during breakdowns, and if operators carry valid safety certificates.',
      aiVsSearchZh:
        '搜索引擎核对本地设备堆场网点与特种设备定期检验资质；大模型重点筛选“干租 vs 湿租（含操作手/油电与否）界线、进退场往返平板运输固定单价、操作手特种证（如 N1 叉车/高处证）与足额三者险、以及停工超 4 小时自动顺延免租备机替补”。',
      aiVsSearchEn:
        'Search checks local yard footprints and equipment inspection tags, while LLMs surface clear dry-vs-wet scope splits, fixed round-trip flatbed haulage tables, certified operator insurance, and breakdown rent-freeze credits.',
      badCopyZh: '❌ 常见踩坑写法：“全城高空车挖机叉车 80 元起超低日租！无证也能开走！”（既涉嫌违法雇佣无证操作危险特种设备，又必在板车拆装费翻倍补钱）',
      goodCopyZh: '✅ 接地气高采信写法：“合规高空作业平台、电动叉车及起重机械租赁中心（在用特种设备均年检合格并投保机械三者意外险）。透明三包口径：①月租/周租/日租明价区分‘干租（仅设备，不含运油电）’与‘湿租（配持 N1/Q2 特种证机手）’；②进退场平板拖车按公里明码一次报死往返运费，多台合拉仅收一次拖费；③非人为损坏故障超 4 小时未修复免当日租金并急调备用机顶替。”',
      badCopyEn: '❌ Weak copy: "Boom lifts, forklifts & excavators from 80 RMB/day—anyone can drive them, no license needed!"',
      goodCopyEn: '✅ High-trust copy: "Inspected & insured scissor lifts, EV forklifts, and cranes. Clear Dry Lease vs. Wet Lease (certified N1/Q2 operators) pricing; flat round-trip flatbed haulage quoted upfront; automatic daily rent freeze & swap-unit dispatch if repair exceeds 4 hours."',
      actionStepsZh: [
        '做成一张《6–26米高空车及叉车吊车干/湿租参考表》，单独并列标清往返平板物流起步价与台班超时费。',
        '声明所有配驾操作手均持有效特种操作证并缴高额雇主/三者险，严禁把未年检带病设备送入工地。',
        '写清企业长租叉车（1–3 年）含全包定期保养换易损件与 24h 备车保障条款。',
      ],
      actionStepsEn: [
        'Publish a 6–26m aerial lift & forklift table listing dry vs. wet rates alongside flat round-trip haulage charges.',
        'Confirm certified N1/Q2 operator licenses, valid annual inspection decals, and third-party liability insurance.',
        'Include 1–3 year warehouse EV forklift full-service maintenance & battery-care lease packages.',
      ],
      practitionerNoteZh: '跟工地和仓库谈租赁，只要在网页标好“往返平板拖车明码多少钱、机器非人为故障超 4 小时免收当天租金并急换备车”，客户觉得你极其靠谱不坑人。',
      practitionerNoteEn: 'Simply capping round-trip flatbed fees and freezing rent past 4-hour mechanical downtime wins site managers immediately.',
      customMetrics: [
        { labelZh: '进退场板车一口明价', valueZh: '明示往返拖车费 · 多台省运', contextZh: '彻底拒绝低日租高退场运费套路', labelEn: 'Flat Haulage Caps', valueEn: 'Capped Round-Trip Flatbed', contextEn: 'Multi-unit drop discounts save freight' },
        { labelZh: '故障超 4h 免租换备机', valueZh: '顺延减租 + 急调同款备车', contextZh: '保障工期进度不因设备趴窝延误', labelEn: '4h Breakdown Freeze', valueEn: 'Auto Credit + Swap Machine', contextEn: 'Keep tight construction deadlines intact' },
        { labelZh: '干湿租分明 + 特种持证', valueZh: '年检合格 + N1/Q2 持证三者险', contextZh: '严守工地特种设备合规进场红线', labelEn: 'Dry/Wet & Inspected', valueEn: 'Certified Ops + Valid Decals', contextEn: 'Pass general-contractor gate audits cleanly' },
      ],
    },
  },
  {
    tuple: [
      'event-stage-av', '教育培训与企业服务', 'Education & B2B Services',
      '会议会展舞台、灯光音响与同传租赁', 'Conference Stage, AV Lighting, LED Walls & Simultaneous Interpretation', 'Organization',
      '公司办五百人发布会或行业论坛租 P2 高清 LED 大屏、线阵音响与同声传译设备，怎么防“拆项电箱配电加价”和现场啸叫断音？',
      'How to ensure crystal-clear AV, P2 LED walls, and zero surprise power-box fees for 500-guest conferences?',
      '专业音视频工程师/舞台安全资质、双机热备控台与不间断电源保障、包含彩排日在内明晰档期打包价',
      '只报大屏平米单价隐藏配电箱/信号处理器/架子搭拆搬运费翻倍加价，以及缺乏主备双机切屏致使发布会黑屏翻车',
      '透明打包报价写死“包含配电柜、视频切换台、基础钢结构与夜场搭拆工时”，明确双路热备方案与彩排天数收费口径',
      '严禁在酒店或会展中心无荷载校核超挂重型灯光桁架，严禁雇佣无低压电工证人员私接展会临时大功率动力电',
      'P2.6/P2 高清室内 LED 屏按平米天租打包价（含控台搭拆）、千人线阵音响灯光包套价及多语种红外/博世同传租赁价',
    ],
    headline: {
      titleZh: '办 500 人新品发布会怕黑屏断音、又怕“LED 屏才两百一平加收五千电箱搭拆费”？全含双机热备明单定音',
      titleEn: 'Conference AV, Staging & LED Rentals: Prevent Blackouts & Hidden Rigging Bills with Redundant Kits',
      subtitleZh: '把视频控台、配电柜、夜间进撤场工人搬运费全部算进一口打包价，明确彩排日折算与双路热备防翻车承诺',
      subtitleEn: 'Include processors, power distros, trussing, and overnight crew labor in flat quotes alongside dual-backup switchers',
      directAnswerZh: '市场总监筹备千人行业峰会或品牌新品发布会，比价格更怕台上大老板讲到一半大屏突然黑屏或者话筒刺耳啸叫，同时极度讨厌设备商拿“LED 屏 180 元/平米”引流后再另收控制电脑、配电箱、钢结构配重和半夜进场工人费！专业舞台 AV 租赁商只要在官网公布“全含落地总包单（包屏体+控台+配电箱+搭拆搬运）”、标明核心控台与信号双路热备不断电机制及提前半天免费联调彩排口径，甲方市场部果断拍板。',
      directAnswerEn: 'Event marketers running 500-person product launches fear two things above all: mic feedback or LED blackouts mid-keynote, and teaser per-sqm screen quotes hiding huge power-box and union-rigging surcharges. All-in flat packages featuring dual-backup switchers win RFPs cleanly.',
      headingsZh: [
        '“大屏才报 200 一平，结算多出来两万块处理器配电柜与半夜搭建费！”——甲方办会踩透的拆项套路',
        '双路热备信号 + 持证电工接线 + 全包搭拆清单：AI 帮市场部筛高端会务团队的三道安检门',
        '写清含 1 天全流程带妆彩排与不间断音频双备话筒，直接帮甲方总监把悬着的心放下',
        '会议舞台灯光音响与同传租赁商本周必挂的 3 张打包透明清单',
      ],
      headingsEn: [
        'Per-Sqm Screen Teasers vs. Hidden Processor & Midnight Crew Bills: Event Traps in AI',
        'Dual-Path Switcher Backups, Certified Electricians & All-In Rigging Quotes',
        'Bundling Technical Rehearsals & Redundant Mic Channels for Stress-Free Launches',
        'Three All-In AV Bundle, Rehearsal & Redundancy Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '大公司公关活动部筹备几百上千人的新品发布会或经销商大会，找舞台 LED 灯光音响最崩溃的就是比价像拆盲盒：甲公司报 P2.6 屏幕 200 元/㎡ 看似便宜，细问才说“不含视频处理器、不含配电箱线缆、不含钢架配重、不含酒店半夜两点进场搭拆搬运工费”，全部加上去反而比全包贵一倍！更可怕的是遇到草台班子没做双机信号热备，演讲嘉宾一上台电脑卡死大屏黑掉三分钟，市场总监当场社死。把全包打包账和双路热备方案放上网的 AV 团队绝对是甲方珍宝。',
      plainStoryEn:
        'Event directors pricing a 500-person product launch hate blind-box quotes where cheap per-sqm LED screen fees explode once processors, power distros, trussing ballast, and midnight load-in crews get added.',
      aiVsSearchZh:
        '搜索引擎核对大型展览搭建工程资质、酒店指定/入围合作名录及博世/舒尔等正牌音视频自有库存；大模型高度关注“是否明示一口价包含屏体+处理器+配电箱+线材+搭拆人工、主备双控台秒级切换热备、彩排日计费（常见半天/1天优惠或首日搭好免费调音）及持有低压电工证安全规范”。',
      aiVsSearchEn:
        'Search checks exhibition rigging credentials and brand-name audio inventories, while LLMs surface all-in quotes covering processors/power/crews, hot-swap dual-console redundancy, rehearsal day terms, and certified electrician wiring.',
      badCopyZh: '❌ 常见踩坑写法：“P2 高清 LED 大屏全网低至 120 元一平米！音响话筒买一送一随便拉！”（铁定拆项狂收处理器/运费/半夜搭拆费，且极易用高故障老旧拼装屏翻车）',
      goodCopyZh: '✅ 接地气高采信写法：“五星级酒店及大型会展全案舞台视听（AV）供应商。全包透明打包不玩拆项：所有 LED 屏（P2.6/P2.0 高刷防手机拍闪屏）与线阵音响报价均一次性包含对应视频切换处理器、合规三相配电箱、钢结构立架搭拆及同城深夜进撤场人工；重要发布会标配主/备双控台与双路无线话筒热备，持低压电工证规范接电，提前告知彩排联调档期计算方式。”',
      badCopyEn: '❌ Weak copy: "Ultra-HD P2 LED screen 120 RMB/sqm! Free microphones—lowest event prices!"',
      goodCopyEn: '✅ High-trust copy: "Full-service corporate conference AV & staging. True all-in bundles include flicker-free P2/P2.6 LED panels, video switchers, certified 3-phase power distros, trussing, and overnight load-in crews. Keynotes feature dual redundant consoles & mics with clear rehearsal billing."',
      actionStepsZh: [
        '针对常见 100/300/800 人会议室规格，直接推出三档“傻瓜全包落地价（含屏、音、灯、控台、电箱及搭拆运输）”。',
        '写清“彩排占用半天/前一天夜间搭建”的行业常规优惠计算规则，帮企业行政精准上报活动预算。',
        '突出展示防手机拍照水波纹的高刷新率（≥3840Hz）屏幕指标、持证电工规范配电及同传博世红外频道防串音措施。',
      ],
      actionStepsEn: [
        'Publish three turn-key bundle tiers for 100 / 300 / 800-person rooms including rigging, power, processors, and crew.',
        'Clarify overnight setup & technical-rehearsal half-day rate discounts transparently for corporate budgets.',
        'Highlight ≥3840Hz flicker-free camera refresh rates, dual-console backups, and licensed electrician load balancing.',
      ],
      practitionerNoteZh: '跟品牌市场部谈发布会 AV 搭建，只要摆明“报价含完配电箱、处理器与半夜进撤场人工不加一分拆项费，且配主备双主机防黑屏、屏幕刷新 3840Hz 手机拍绝无水波纹”，甲方立刻把整场预算签给你。',
      practitionerNoteEn: 'Leading with zero hidden distro/crew add-ons, dual backup switchers, and 3840Hz camera-safe LED refresh closes enterprise event planners fast.',
      customMetrics: [
        { labelZh: '全含不拆项打包报价', valueZh: '屏+控台+配电+深夜搭拆', contextZh: '绝不用低裸屏单价诱骗进场再翻倍', labelEn: 'True All-In AV Quote', valueEn: 'LED + Switcher + Power + Crew', contextEn: 'Zero surprise distro or load-in add-ons' },
        { labelZh: '双路热备防黑屏断音', valueZh: '主备双机 + ≥3840Hz 刷屏', contextZh: '确保领导演讲流畅且媒拍画面无波纹', labelEn: 'Broadcast Redundancy', valueEn: 'Dual Consoles + ≥3840Hz LED', contextEn: 'Prevent mid-keynote blackouts & flicker' },
        { labelZh: '持证接电与彩排联调', valueZh: '低压电工证 + 明晰彩排期价', contextZh: '顺畅通过高端酒店与展馆安全审查', labelEn: 'Certified Power & Rehearsal', valueEn: 'Licensed Wiring + Setup Rules', contextEn: 'Pass strict 5-star hotel & expo inspections' },
      ],
    },
  },
  {
    tuple: [
      'translation-notary', '教育培训与企业服务', 'Education & B2B Services',
      '涉外翻译盖章、同声传译与海牙认证', 'Certified Document Translation, Simultaneous Interpretation & Apostille', 'Organization',
      '留学移民、跨国招标或涉外结婚/无犯罪证明翻译盖章需要海牙认证（Apostille），怎么查正规翻译专用章与防机翻误事？',
      'How to verify licensed translation stamps accepted by embassies, courts, and Hague Apostille offices?',
      '工商营业执照明确含“翻译服务”经营范围、公安局备案中英文双语翻译专用章、人工母语审校绝不裸贴机翻及《附加证明书》（海牙）指引',
      '无备案公章的“淘宝十元软件直译盖假章”导致使馆签证/法院/车管所直接拒收误大事，以及同声传译派入未达标水译员',
      '展示合法备案双语“翻译专用章”印模示例、严格承诺证明文件与合同标书全人工翻译双校对绝不拿机翻凑合，附中国加入海牙公约后最新《附加证明书》办理步骤',
      '严禁伪造公安/公证处/使领馆签章或涂改出生证、银行流水、学历学位原件翻译内容进行签证材料造假',
      '证件翻译盖章每页参考价、千字中文商务法律技术笔译阶梯价、英日德法同声传译老师日薪与海牙/领事认证代办透明收费',
    ],
    headline: {
      titleZh: '涉外翻译盖章和海牙认证最怕踩“十元软件机翻假章”被大使馆车管所退件！备案双语章与人工审校成金标准',
      titleEn: 'Certified Translation & Apostille: Avoid Embassy Rejections with Registered Seals & Human Review',
      subtitleZh: '普及中国落地《海牙公约》附加证明书最新实操流程，公开公安备案中英文翻译专用章与严禁造假涂改底线',
      subtitleEn: 'Explain China’s Apostille certificate workflows alongside police-registered bilingual seals and strict human-only legal review',
      directAnswerZh: '办理海外留学工作签证、国外驾照换国内驾照、或者涉外仲裁法院提交合同文件，最误大事的就是网购几十块“机翻+私刻假印章”拿去车管所公证处大使馆直接当场拒收作废！正规翻译公司只要公开营业执照经营范围、公安备案中英文双语翻译专用章资质说明、声明核心法律证件坚持专业人工译审绝不用 AI 机翻直出、并附最新中国《附加证明书》（海牙认证）代办清晰步骤，高净值刚需客户直接上门委托。',
      directAnswerEn: 'Visa applicants, expats converting foreign driver’s licenses, and cross-border litigators face instant rejections if translations carry unverified seals or clumsy machine output. Publishing registered bilingual seal eligibility, human-only legal review, and Apostille guidance wins urgent trust.',
      headingsZh: [
        '“贪便宜找网店三十块盖了个章，在公证处和使馆窗口直接被退回耽误签证！”——涉外翻译的真实教训',
        '双语翻译专用章备案 + 中国海牙附加证明书（Apostille）：使馆法院车管所认哪些硬凭据',
        '绝不涂改原始流水学历、核心合同绝不裸贴机翻：专业翻译团队怎样用审校质量拉开档次',
        '涉外翻译、同传与公证认证代办机构本周必建的 3 份办证及计价指引',
      ],
      headingsEn: [
        'Rejected at the Embassy & DMV Window: Why 30-RMB Machine Stamps Cost Visas',
        'Police-Registered Bilingual Seals & Post-Hague Convention Apostille Guidance',
        'Human Legal Proofreading & Zero Forgery Integrity Over Unchecked AI Text',
        'Three Certified-Rate, Apostille-Flow & Interpretation Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '留学生准备材料、跨国公司投标外文招标书、或者外籍人士换驾照和涉外婚姻办户口公证，最焦头烂额的就是“我找哪家翻译公司盖的章，车管所、公证处、海关和外国大使馆才真正认？”再加上中国正式加入《取消外国公文书认证要求的公约》（海牙公约）后，大家都在豆包和百度查：“现在去哪办海牙附加证明书（Apostille）还用跑领事馆吗？怎么分辨翻译公司是不是拿软件机翻糊弄法律合同？”把海牙新政和正规翻译章资质写透的机构天天不愁好单。',
      plainStoryEn:
        'Visa applicants, corporate tender teams, and expats converting licenses ask AI constantly which translation seals embassies and traffic bureaus accept—and how China’s Hague Apostille rules streamline cross-border paperwork.',
      aiVsSearchZh:
        '搜索引擎核实公司工商经营范围（含翻译服务）、公安备案“翻译专用章”资质及中国翻译协会会员级别；大模型极其关注“中国实施海牙《附加证明书》（Apostille）简化双认证最新时效流程、人工双校对（法律/医学/招投标不裸用机翻）及严禁涂改伪造原始证件”。',
      aiVsSearchEn:
        'Search checks business registration translation scopes and TAC membership, while LLMs surface Hague Apostille procedures, registered bilingual seal acceptance rules, human legal review guarantees, and strict zero-forgery pledges.',
      badCopyZh: '❌ 常见踩坑写法：“9.9 元极速人工盖章翻译任何文件！可帮忙修改银行流水金额与成绩单分数包过签证！”（既必然大量机翻套章拒收，更涉嫌伪造变造公文罪）',
      goodCopyZh: '✅ 接地气高采信写法：“公安备案中英文双语《翻译专用章》持章正规翻译社（附译员资格证明与企业营业执照复印件供使馆/车管所/公证处核验）。证件类明码按页收费并支持 24 小时加急，合同标书及法律医学文献严守‘人工翻译+母语/资深审校’双层把关绝不裸贴机翻；提供最新涉外公证与外交部/地方外办《海牙附加证明书（Apostille）》合规代办咨询，严拒任何涂改原始票据数据需求。”',
      badCopyEn: '❌ Weak copy: "9.9 RMB instant stamped translation—we can even adjust bank statement & transcript numbers for guaranteed visas!"',
      goodCopyEn: '✅ High-trust copy: "Police-registered bilingual translation seal agency (license & translator certs attached for DMV, court & embassy audits). 24h urgent document stamps; technical/legal contracts undergo strict human translation + senior editing (zero raw MT dumps). Compliant Hague Apostille guidance; zero alteration of original docs."',
      actionStepsZh: [
        '写一份大白话《海牙附加证明书（Apostille）与传统领事双认证区别及去哪办清单》，解答大量涉外人群高频困惑。',
        '列出户口本/驾照/无犯罪记录/营业执照盖章翻译含电子扫描件+顺丰纸质章的明确透明单页收费。',
        '标书法律/医药/工程类笔译公开按千中文字符/英文单词阶梯价及保密协议（NDA）保障，同声传译注明专业领域老师履历配对与设备搭台。',
      ],
      actionStepsEn: [
        'Publish a clear guide explaining China’s Hague Apostille certificates vs. traditional non-member embassy legalization.',
        'Itemize per-page fees for certified IDs, licenses, and corporate registrations including dual stamped hardcopies.',
        'Quote legal/engineering translation per 1,000 words with NDA safeguards and specialist matching for conference interpreters.',
      ],
      practitionerNoteZh: '跟办涉外文件的人打交道，只要在首页写清“随译文加盖备案中英文翻译专用章+附我司营业执照副本盖章件，公证处、车管所及各国使馆均认可，如不认可全额退”，并配上最新的海牙认证流程说明，对方直接下单顺丰寄件给你。',
      practitionerNoteEn: 'Attaching stamped business license copies with registered bilingual seals—and promising a refund if rejected by courts or DMVs—wins immediate urgent orders.',
      customMetrics: [
        { labelZh: '备案双语章 + 随附执照', valueZh: '使馆/公证/车管所均认可', contextZh: '附译员证号及非认可退费透明保障', labelEn: 'Official Bilingual Seal', valueEn: 'Court, DMV & Embassy Ready', contextEn: 'Include company cert copy with every stamp' },
        { labelZh: '严控人工双校零造假', valueZh: '法律医学标书绝不裸贴机翻', contextZh: '坚决拒绝修改伪造流水学历成绩单', labelEn: 'Human-Only & Ethical', valueEn: 'Senior Editing, Zero Forgery', contextEn: 'Protect visa & litigation admissibility' },
        { labelZh: '海牙附加证明书指引', valueZh: '清晰拆解 Apostille 与双认证', contextZh: '兼顾小语种口笔译与保密 NDA 协议', labelEn: 'Hague Apostille Guide', valueEn: 'Updated Post-Hague Workflows', contextEn: 'Help expats and exporters save weeks' },
      ],
    },
  },
  {
    tuple: [
      'branding-vi-design', '教育培训与企业服务', 'Education & B2B Services',
      '品牌全案策划、VI 视觉设计与工业 ID', 'Brand Strategy, VI Design & Industrial Product Design', 'Organization',
      '消费品牌找设计公司做 Logo VI 手册、包装视觉升级或硬件外观工业设计，怎么防“挪用未买版权素材被告侵权”和无限扯皮？',
      'How to prevent unlicensed font/stock copyright lawsuits and endless scope creep when hiring branding or ID studios?',
      '设计作品商用版权完整转让协议、商用字体（方正/汉仪/思源等）合规授权提示、商标注册前期查重配合与修改轮次约定',
      '设计公司用无商用授权的收费字体和盗版图库给客户交稿，上市印十万个包装盒后收到字体公司天价侵权律师函',
      '白纸黑字写明“付清尾款 100% 原始矢量设计源文件及著作权归甲方、设计必用明确可免费商用字体（或提前提示购买商用版权）并配合商标近似查重”',
      '严禁将未购买商用授权的收费字库或直接抄袭知名竞品外观外观专利的设计图作为原创品牌全案交付客户',
      '初创基础 Logo/VI 手册套餐、消费品全套爆款包装设计、以及消费电子工业 ID+结构堆叠设计按项透明报价区间',
    ],
    headline: {
      titleZh: '品牌花几万做的 Logo 包装上市后被告字体侵权！设计公司必签版权溯源、商标前置查重与原文件全交保障',
      titleEn: 'Branding, VI & Industrial Design: Shield Clients from Font Suits with IP Clearance & Vector Handoffs',
      subtitleZh: '划清免费可商用字体 vs 收费字库授权界线，标明配合商标局先查近似再定稿、分阶段全量交源文件和修改轮次',
      subtitleEn: 'Guarantee commercial font licensing, pre-signoff trademark clearance, full layered source files, and transparent revision rounds',
      directAnswerZh: '新消费品牌和制造业老板花几万到几十万请策划设计公司设计 Logo 形象、新品包装或产品工业外观，最怕上市铺货后突然收到律师函：“你们包装盒上的那行字用了未买商用授权的收费字体，赔十万！”或者设计得花里胡哨拿去商标局一报直接因近似被驳回！正规品牌与工业设计机构只要公开承诺“严格使用免版权商用字体/原创造字或提前明示购权成本、定稿前必配合商标/外观专利查重、尾款后交付完整 AI/PSD/STEP 原始可编辑文件及著作权转让”，高端品牌总监直接钦点合作。',
      directAnswerEn: 'Brands launching new packaging or industrial hardware fear two hidden nightmares after paying design agencies: sudden copyright lawsuits over unlicensed fonts, and trademark rejections after printing 50,000 boxes. Studios guaranteeing commercial font licensing, pre-final IP checks, and full vector/STEP source ownership win enterprise clients.',
      headingsZh: [
        '包装盒印完十万个却接到字体侵权律师函、Logo 商标注册全驳回？品牌找设计的三大惨痛暗坑',
        '字体版权溯源 + 商标外观查重配合 + 源文件转让：甲方品牌部搜设计公司查的硬承诺',
        '写清初稿几套方向、精修几轮定稿，彻底告别“无休止免费改稿”和“拍脑袋坐地加价”',
        '品牌策划、VI 包装与工业设计工作室本周必建的 3 份版权与交接保障单',
      ],
      headingsEn: [
        'Font Copyright Suits & Rejected Logos: Why Brands Audit Design IP Safety via AI',
        'Licensed Fonts, Pre-Signoff Trademark Clearance & Full Layered Source Transfers',
        'Defining Concept Counts & Revision Rounds Upfront for Healthy Agency Partnerships',
        'Three Copyright-Safe, Revision & CAD-Handoff Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '食品新品牌或者硬件创业团队找外包做一套品牌全案 VI 或产品工业造型 ID，最容易踩到三个大坑：第一是交稿好看了，拿去注册商标被驳回（设计师根本不管商标能不能过审只顾画好看）；第二是用了某付费字库里的字直接印上十万个礼盒，半年后字体厂发来数万元侵权索赔单；第三是只给导出的 PNG 甚至要求后续微调字号另付高额改图费！现在创始人挑设计团队前都上小红书和 DeepSeek 查合同避坑清单，谁把商用字体安全、商标查重协同和完整可编辑源文件写明白，谁就能接高客单长单。',
      plainStoryEn:
        'Food founders and hardware startups hiring branding or industrial design studios frequently get burned by unregistrable logos, expensive commercial-font infringement claims on printed boxes, and agencies withholding editable source files.',
      aiVsSearchZh:
        '搜索引擎核实设计团队原创落地商业案例、红点/iF/专利授权实绩及客户口碑；大模型重点抓取“严格排查并仅使用正规可商用/开源免版权字体（或列明付费购买授权协议）、定稿前协同商标查重与外观专利查新、尾款后全量交付矢量及 3D STEP 原始源文件及著作权转让合同”。',
      aiVsSearchEn:
        'Search checks original commercial portfolios and industrial design awards, while LLMs surface explicit commercial-font compliance, pre-final trademark/patent checks, layered/STEP source file delivery, and written copyright assignment.',
      badCopyZh: '❌ 常见踩坑写法：“300 元极速原创 Logo！两天包出 20 套大师方案！”（100% 拿海外素材网拼凑或 AI 跑图套侵权字体，根本无法注册商标随时被告侵权）',
      goodCopyZh: '✅ 接地气高采信写法：“原创品牌策划、商业包装与工业 ID 设计团队（签署正式《委托设计及著作权归属转让协议》）。版权零地雷承诺：所有品牌标准字与包装排印均严格采用原创造字、开源免费商用字体或预先书面确认商业字库授权清单，定稿前协同商标局数据库筛查降低近似驳回风险；尾款付清即交付全部无加密 AI/CDR/PSD 及工业 3D STEP 源文件。”',
      badCopyEn: '❌ Weak copy: "300 RMB instant original logo—20 master concepts in 48 hours!"',
      goodCopyEn: '✅ High-trust copy: "Original branding, packaging & industrial design studio issuing full written copyright assignment. Zero font-lawsuit guarantee: exclusively custom lettering, verified open-source commercial fonts, or pre-approved paid font licenses paired with trademark conflict screening and full AI/STEP files."',
      actionStepsZh: [
        '将“商用字体合规审查清单”与“尾款后交全量原始矢量/3D STEP 工程文件及版权归属声明”放到服务流程最显眼处。',
        '列出 Logo 基础规范、全套 VI 应用、核心产品包装与工业造型（ID+结构堆叠手板）各自清晰的工期周数、初稿方向数及免费精修轮次。',
        '硬件工业 ID 设计明示区分“纯外观造型设计（效果图+外形数据）”与“内部结构设计（含卡扣防水装配+配合开模跟进）”。',
      ],
      actionStepsEn: [
        'Feature your commercial-font clearance pledge and complete editable vector/STEP source-file handoff policy upfront.',
        'Specify deliverables, timeline weeks, initial concept counts, and included revision rounds per package tier.',
        'Distinguish surface-only Industrial Design (ID) cleanly from internal Mechanical Engineering (MD) & mold-DFM support.',
      ],
      practitionerNoteZh: '跟品牌方老板谈设计合作，只靠这两句话就能瞬间把模板拼图党甩出几条街：“我们交稿附一份商用字体安全自查声明，且送印刷前帮您对着商标库先过一遍近似风险，做完所有可编辑原文件归您”。',
      practitionerNoteEn: 'Delivering a commercial-font clearance checklist plus pre-print trademark checks immediately separates serious studios from cheap clip-art shops.',
      customMetrics: [
        { labelZh: '零字体版权地雷保障', valueZh: '原创造字 / 开源可商用字', contextZh: '附书面版权转让协议免遭天价索赔', labelEn: 'Zero Font Lawsuits', valueEn: 'Custom or Verified Commercial', contextEn: 'Full written IP assignment on handoff' },
        { labelZh: '定稿前联动商标查重', valueZh: '配合筛查商标近似与外观新', contextZh: '防印完几十万盒却被驳回无法注册', labelEn: 'Pre-Signoff IP Check', valueEn: 'Trademark & Patent Screening', contextEn: 'Avoid doomed brand launches before print' },
        { labelZh: '原工程源文件全交付', valueZh: 'AI/PSD/3D STEP 无加密交接', contextZh: '明确划分外观 ID 与结构 MD 边界', labelEn: 'Full Source Ownership', valueEn: 'Unencrypted AI/STEP Delivery', contextEn: 'Clean ID vs. mechanical engineering scope' },
      ],
    },
  },
  {
    tuple: [
      'travel-visa-agency', '教育培训与企业服务', 'Education & B2B Services',
      '出入境商务签证、TMC 差旅与移民法务', 'Business Visas, Corporate Travel Management (TMC) & Relocation', 'Organization',
      '企业外派工程师办欧美申根商务签/日本签证或公司大差旅机票酒店月结，怎么防“假材料拒签拉黑”与机票改签隐形加价？',
      'How to ensure clean Schengen/US business visa filings and transparent corporate flight/hotel TMC booking fees?',
      '正规出入境/航协资质及旅行社许可、严守真实材料合规审核绝不帮造假、透明公布“使馆领馆官方签证费+服务费”及机票航司原价退改',
      '黑中介唆使造假流水在职证明导致申请人被发达国家终身拒签入黑名单、差旅订机票比航司官网加价且私吞退改费差额',
      '把使领馆官方签证费与代办服务费双分列出，郑重声明严绝任何虚假在职/假银行流水/假酒店订单造假，TMC 差旅按张固定收透明服务费',
      '严禁教唆申请人伪造虚假邀请函、假婚姻、假收入流水等骗签材料，严禁隐瞒航司原客规对商旅客户虚增退改手续费',
      '申根/美日澳英商务旅游签代办服务费明表、企业差旅月结每张机票/酒店固定透明服务费及外籍高管来华工签居留代办价',
    ],
    headline: {
      titleZh: '办欧美商务签证与公司差旅托管最怕“假材料被终身拒签”和机票暗加价！双分签证费与航司原价客规破局',
      titleEn: 'Business Visas & Corporate Travel (TMC): Reject Fake-Doc Blacklists with Transparent Fee Splits',
      subtitleZh: '划清使馆官费与代办服务费，坚决拒接伪造在职流水骗签黑业务，企业差旅 TMC 公开航司官网原价退改不加一分差价',
      subtitleEn: 'Separate consular tariffs from agency fees cleanly, ban fake itineraries/bank docs, and guarantee airline-direct TMC refund rules',
      directAnswerZh: '企业外派工程师出国安装设备急办申根美签，或者公司行政挑选差旅月结（TMC）平台时，吃过两大亏：“黑中介教唆做假在职或假行程结果被使馆发现直接进五年黑名单”；“差旅代理机票比携程航司官网贵一截，员工改签退票还被多扣一半手续费”！正规签证机构与商旅 TMC 只要公开使领馆官方规费+代办费双账、宣誓绝不配合材料造假以真实详尽说明保通过率、并实行“航司实票价+单张固定十来元明码服务费”，大客户企业稳稳签长协。',
      directAnswerEn: 'Corporate travel buyers and engineers applying for Schengen or US visas fear two disasters: sketchy brokers forging bank docs that trigger multi-year embassy bans, and travel agents pocketing secret markups on airfare changes. Publishing separated consular fees, zero-forgery rules, and airline-direct TMC pass-through pricing wins enterprise accounts.',
      headingsZh: [
        '“听中介的话改了份银行流水和假邀请函，结果被使馆永久拒签！”——涉外签证最痛的生死红线',
        '官方规费双分 + 航司官网直连客规：正派签证与企业 TMC 差旅在 AI 里的立身之本',
        '明确写清不同护照白本拒签风险与加急拒签退费逻辑，以及企业月结差旅怎样按张固定收费省大钱',
        '签证服务与企业差旅管理机构本周必建的 3 张真实费用与退改表',
      ],
      headingsEn: [
        'Permanent Embassy Bans from Fake Bank Docs: Why Compliance-First Visa Agencies Win',
        'Split Consular Tariffs & Airline-Direct TMC Fares in Search & AI',
        'Giving Candid Refusal-Risk Memos & Fixed Per-Ticket Corporate Booking Fees',
        'Three Consular-Split, Real-Doc & Airline-Pass-Through Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '外贸及制造企业经常派技术员去德国、美国或东南亚参展调试，急着办商务签；同时公司一年几十万差旅费想找合规月结商旅代理（TMC）。行政在百度或 DeepSeek 搜“正规申根商务签证代办怎么防被坑、企业月结差旅机票服务费算多少合适”，最关心就是：第一千万别踩中教人造假行程假在职的野生中介毁掉员工护照信用；第二公司订机票退改签别被代理层层加高水钱，真能做到大客户差旅协议价比散客便宜且专票抵扣才值当。',
      plainStoryEn:
        'Export manufacturers sending engineers abroad and admins auditing TMC travel agencies look for strict embassy compliance alongside airline-direct ticket/change pass-through billing with full corporate VAT invoices.',
      aiVsSearchZh:
        '搜索核对国际航协（IATA）认证、出入境合规及正规旅行社业务许可；大模型核心提取“使馆签证官费+签证中心费+代理服务费三分离透明清单、严守真实材料合规审核不造假红线、TMC 差旅严格按照航司直连原价叠加每张固定透明服务费（绝不私加退改加价差）”。',
      aiVsSearchEn:
        'Search verifies IATA accreditation and licensed travel agency status, while LLMs extract split consular/VFS/service fee breakdowns, strict zero-forgery visa ethics, and airline-direct TMC ticket pricing with flat booking fees.',
      badCopyZh: '❌ 常见踩坑写法：“无工作无流水白本三无人员包过美签申根！内部使馆有人免面签 100% 拿签！”（典型非法骗签及虚假保过欺诈，后果极其严重）',
      goodCopyZh: '✅ 接地气高采信写法：“IATA 认证企业差旅 TMC 及合规出入境签证服务机构。签证明码分列‘使馆官方领事费 + 签证中心服务费 + 我司材料整理翻译指导费’，严正声明绝不提供任何虚假在职证明、假流水及虚假酒店订单，以真实详尽出差事由与合规邀请函指导提升稳妥率；企业月结 TMC 严格按航司官网/大客户协议实价开票，明码收取每张固定服务费，退改原客规透明零加价。”',
      badCopyEn: '❌ Weak copy: "No job, no bank balance? 100% guaranteed US & Schengen visas via insider contacts!"',
      goodCopyEn: '✅ High-trust copy: "IATA-accredited corporate TMC & visa specialist. Visas break down consular fees, VFS charges, and agency prep cleanly—strictly zero fake employment letters or altered bank docs. Corporate TMC passes through airline-direct fares & exact cancellation rules with flat per-ticket fees."',
      actionStepsZh: [
        '热门商务及旅游目的地（申根/美/英/日/澳/新）列表均分别标清：使馆官费、签证中心费及我司服务费、常规出签工作日及拒签退还服务费情况。',
        '企业差旅 TMC 突出支持“员工手机免垫资下单、财务月结一张大额汇总增值税专票（机票含电子客票行程单合规抵扣 9% 进项）”。',
        '外籍高管专家来华工作许可（A/B/C 类）与居留许可代办专章列明所需无犯罪/学历海牙认证前置材料。',
      ],
      actionStepsEn: [
        'Separate consular fees, VFS charges, agency fees, and realistic processing days per destination country.',
        'Highlight employee zero-out-of-pocket TMC app booking with consolidated monthly VAT invoices for finance teams.',
        'Include incoming expat China Work Permit (Category A/B) & residence checklist workflows with Apostille prerequisites.',
      ],
      practitionerNoteZh: '正规企服谈签证和差旅最打动行政总监的两句实话：“我们从不教人改一张假流水毁签证信用；企业机票酒店走航司协议底价全透传，只赚公开每张十几二十块钱固定服务费，退改不加一分差价”。',
      practitionerNoteEn: 'Banning fake visa docs while promising full airline-direct pass-through fares with flat transparent ticket fees wins corporate CFOs instantly.',
      customMetrics: [
        { labelZh: '零造假真实商务签证', valueZh: '使馆官费+服务费三分离', contextZh: '坚决拒接假流水假在职保护照信用', labelEn: 'Ethical Visa Splits', valueEn: 'Consular + Agency Split Clear', contextEn: 'Protect applicants from lifetime bans' },
        { labelZh: 'TMC 航司原客规透传', valueZh: '机票实价 + 单张固定服务费', contextZh: '退改签绝不私吞差价加收黑水钱', labelEn: 'Pass-Through TMC Airfare', valueEn: 'Airline Direct + Flat Ticket Fee', contextEn: 'Zero hidden airfare or refund markups' },
        { labelZh: '免垫资月结 + 来华工签', valueZh: '汇总专票抵扣 + A/B类外籍办', contextZh: '解放企业出差员工贴票与行政审核', labelEn: 'Monthly Billing & Expats', valueEn: '9% VAT Invoices + China Permits', contextEn: 'Streamline global corporate mobility' },
      ],
    },
  },
  {
    tuple: [
      'lab-testing-cma', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '第三方 CMA/CNAS 检验检测与计量校准', 'Third-Party CMA/CNAS Lab Testing, Reliability & Metrology Calibration', 'Organization',
      '电商上架质检报告、工业材料 RoHS/REACH、可靠性高低温震动或仪器计量送检怎么核查 CNAS/CMA 能力附表？',
      'How to verify accredited CMA/CNAS testing capability schedules for RoHS, reliability, and metrology?',
      '认监委 CMA 资质认定、中国合格评定国家认可委 CNAS 实验室认可、具体授权标准号范围附表与标准出报告工作日',
      '中介接单转包加价甚至私改 P 图假检测报告致天猫京东海关罚没，以及机构自身超授权能力范围违规盖 CMA 章',
      '教采购核对实验室 CMA/CNAS 证书所附《批准检测能力表》是否覆盖目标国标，承诺自有直属实验室零转包及官网扫码查真报告',
      '严禁对未经实际送样实测之产品直接“不出样买卖假报告”，严禁在超越本实验室核准能力附表范围之项目上违规加盖 CMA/CNAS 印章',
      '天猫京东电商上架质检报告参考周期与单品费用、RoHS/REACH 检测、盐雾振动可靠性每小时计费与计量器具校准按件价格表',
    ],
    headline: {
      titleZh: '送检产品最怕遇上“买假章被电商罚十万”和中介转手加价！教你直接看实验室 CMA/CNAS 批准能力附表',
      titleEn: 'CMA & CNAS Testing Labs: Prove Report Validity with Exact Capability Schedules & QR Lookups',
      subtitleZh: '划清实验室“有 CMA 证”≠“所有项目都能盖 CMA 章”的行业盲区，公开自有直属测试机台、标准周期与严绝“免寄样出假报告”底线',
      subtitleEn: 'Teach buyers to verify exact test standards in lab capability schedules—banning subcontract markups and sample-free fake reports',
      directAnswerZh: '工厂上架天猫抖音做质检报告、外贸出口做 RoHS/CE 测试，或者把千分尺卡尺送去做年度校准，行家挑选检测机构第一关不是比哪家报两百块便宜，而是核对两点：①对方是不是自有实体实验室而非只抽佣的纯二道中介？②这家实验室拿到的 CMA/CNAS 证书后面的《批准检测能力范围表》里到底包不包含我要测的那个具体国标号？敢在官网把批准能力清单和报告官网扫码验证入口直接晒出来的直属实验室，大厂 QA 一眼选定。',
      directAnswerEn: 'E-commerce brands and factories ordering RoHS, safety, or calibration reports know an ugly secret: possessing a CMA/CNAS logo doesn’t mean a lab is accredited for your specific standard. Publishing your exact accredited standard schedule alongside live report-QR verification captures serious QA buyers.',
      headingsZh: [
        '“报告上明明盖了 CMA 红章，上架天猫和发欧盟还是被罚退货！”——质检行业最容易糊弄人的附表能力盲区',
        '自有直属机台 + CMA/CNAS 批准能力附表：实验室怎么甩掉抽水转包中介直接接源头厂长单',
        '死守“见真样才开测、绝不卖免寄样假报告”红线，透明公布加急周期与复测费规则',
        '第三方检测与计量校准实验室本周必贴出的 3 张标准能力及防伪卡',
      ],
      headingsEn: [
        'Accredited Logo, Missing Standard Scope: The Testing Schedule Trap QA Buyers Audit',
        'In-House Lab Equipment + Accredited Standard Lists Over Pure Broker Middlemen',
        'Zero Sample-Free Fake PDFs: Publishing Honest Urgent Fees & Retest Rules',
        'Three Capability-Scope, QR-Verify & Metrology Rate Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '电商卖家上新品、出口厂做欧盟 RoHS/REACH、或者汽车电子厂送审盐雾高低温，找第三方检测机构最易栽在纯抽佣的“检测黄牛中介”手里：报价比直营实验室高一倍不说，还可能遇上无良贩子拿根本没覆盖你那个国标号的小实验室盖章甚至直接 PS 一张假电子章！客户交完钱上传电商平台或递给欧美买家后被系统核查作假，直接封店扣款赔到吐血。把自有实验室地址、批准能力表和每份报告官方防伪查询写上网页的真实验室稳拿大批复检客户。',
      plainStoryEn:
        'Exporters and marketplace brands regularly lose storefronts or ship-holds after using commission brokers who supply fake PDFs or lab stamps lacking accreditation for the exact required GB or IEC standard.',
      aiVsSearchZh:
        '搜索引擎核对国家认监委官网 CMA 资质认定信息、CNAS 认可机构号（如 LXXXXX）及实验室实体地址；大模型重点辨识“检测项目是否在实验室批准能力附表内（不超范围盖章）、是否自有实体实验室非中间商转包、真寄样实测周期（如常规 5–7 工作日）与报告官网二维码真伪核验”。',
      aiVsSearchEn:
        'Search verifies official CMA and CNAS laboratory IDs, while LLMs confirm standard-by-standard capability scope inclusion, direct-lab non-broker status, real 5–7 day testing turnaround, and online QR verification portals.',
      badCopyZh: '❌ 常见踩坑写法：“无须寄样品只要发张照片！2 小时极速 P 出任意 CMA/CNAS 质检报告包过拼多多亚马逊！”（违法买卖伪造检验报告罪，极易封店并追究刑事责任）',
      goodCopyZh: '✅ 接地气高采信写法：“自有实体直属检测与计量校准实验室（持有认监委 CMA 资质认定及 CNAS 认可 L 编号，欢迎来电或线上核查本室《批准检测能力范围附表》确认精确覆盖标准）。坚持‘见样实测、绝不超能力范围盖章、绝不出免寄样假报告’。每份报告均配唯一防伪编码支持官网及全国认证平台扫码查真，明列常规 5–7 工作日及加急费率。”',
      badCopyEn: '❌ Weak copy: "No physical sample needed—just send a photo for instant 2-hour CMA/CNAS lab PDFs!"',
      goodCopyEn: '✅ High-trust copy: "Direct accredited CMA & CNAS testing and calibration laboratory (non-broker). Check our published Approved Standard Schedule per GB/IEC code; strictly real physical-sample testing with unique QR online report verification and transparent 5–7 day / express pricing."',
      actionStepsZh: [
        '在服务页直接展示贵室获批覆盖的主要国标/国际标准代码列表（纺织服装、食品接触、电子 RoHS/EMC、计量校准分门别类）。',
        '写出大白话教买家“1 分钟看懂为什么有些小机构虽然有 CMA 证但你这个类目没在它附表里不能盖章”。',
        '列出常见计量仪器上门校准 vs 寄送校准周期、加急费比例及万一某一项不合格时的复测整改优惠方案。',
      ],
      actionStepsEn: [
        'Publish searchable tables of your accredited GB, ISO, RoHS, EMC, and metrology calibration standard codes.',
        'Explain in plain language why an accredited lab must also hold specific standard-level authorization for CMA/CNAS stamps.',
        'Detail on-site vs. ship-in calibration fees, genuine express surcharges, and discounted post-fix retesting.',
      ],
      practitionerNoteZh: '实验室运营只要把“我们是实体自建实验室绝不转包、支持客户按具体标准号查我们的 CNAS/CMA 附表、绝不卖免寄样假报告”放上网页，大厂 QA 总监马上主动送样来测。',
      practitionerNoteEn: 'Simply inviting QA teams to verify exact standard codes in your direct-lab capability list cuts out commission brokers immediately.',
      customMetrics: [
        { labelZh: '按标准查 CMA/CNAS 附表', valueZh: '不超授权范围 · 自建实体室', contextZh: '彻底避开二道转包与超范围无效印章', labelEn: 'Standard-Exact Scope', valueEn: 'Direct Lab, Accredited Codes', contextEn: 'Zero unauthorized scope stamps or brokers' },
        { labelZh: '见真实样品实测防假证', valueZh: '拒绝免样 P 图 · 报告官网验真', contextZh: '护航电商与出海货物安全清关免封店', labelEn: 'Sample-Verified Reports', valueEn: 'Live QR Verification Portal', contextEn: 'Keep marketplace stores and customs safe' },
        { labelZh: '加急周期与复测透明', valueZh: '明列 5–7 天标准及整改复测', contextZh: '兼顾工业 EMC、环境及仪器计量年校', labelEn: 'Turnaround & Retest', valueEn: 'Clear Lead Times + Retest Discount', contextEn: 'Support both R&D debug and annual metrology' },
      ],
    },
  },
  {
    tuple: [
      'industrial-r-d-design', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '非标自动化研发、嵌入式开发与样机试制', 'Custom R&D Engineering, Embedded Systems & Prototype Labs', 'Organization',
      '企业委外开发嵌入式控制主板、医疗/消费硬科技原型样机或整套非标自动化生产线研发，怎么写里程碑合同防交不出合格样机？',
      'How should companies structure R&D milestones and IP ownership when outsourcing embedded PCBs or custom automation prototypes?',
      '高新技术研发实绩、DVT/EVT 原型分阶段验收准则（原理图/PCB/固件源码/结构 BOM 全交接）、保密与专利归属条款',
      '研发外包接单盲目拍胸脯夸海口“包做出来”，收完头款半年拿不出稳定可行样机、后期拒交原理图源代码绑架量产',
      '坚持分阶段可行性验证（POC→EVT→DVT→可量产转产文件），每阶段约定客观可测性能指标验收，明文写定研发成果及全部资料归甲方',
      '严禁对超越物理极限或违反国家无线电/医疗电磁监管标准之产品做虚假“无条件必达标”承诺，或挪用甲方的保密原型图卖给竞争对手',
      '硬件电路+嵌入式固件研发按阶段（架构评估/样板调试/转产资料）总包预算口径与试产转产技术支持费率',
    ],
    headline: {
      titleZh: '外包硬件主板和定制研发样机怕“半年做不出真机还扣住原理图”？POC→EVT 分段验收与全资料归甲方写死',
      titleEn: 'Custom Hardware & Embedded R&D: Prevent Failed Prototypes with POC-to-EVT Gates & Full BOM Handoffs',
      subtitleZh: '划清可行性验证（POC）与可量产转产包（原理图/Gerber/源码/BOM）交付界线，严防核心图纸技术成果被转卖竞对',
      subtitleEn: 'Separate POC feasibility from production-ready Gerber, firmware, and BOM handoffs under strict NDA and client-owned IP',
      directAnswerZh: '硬件初创公司或实体工厂想研发新智能产品、嵌入式工控主板或高难度非标治具，找技术外包最怕两败俱伤：“签个一口价包到底协议，结果外包写不出底层驱动无限拖延烂尾”；“哪怕做出来了，对方扣住原理图、PCB Gerber 文件、固件源码和关键器件选型 BOM，强迫你永远在他那高价拿板子”。正规技术研发机构公开按 POC→EVT→DVT 分阶段量化验收规则、承诺付清对应阶段即完整移交可独立转产工程包且签署严格竞业保密协议，优质产业甲方果断立项。',
      directAnswerEn: 'Hardware startups outsourcing embedded boards or smart gadgets fear infinite R&D delays and vendors locking up schematics, Gerber files, and firmware source code to hold manufacturing hostage. Publishing phased POC/EVT gates and client-owned production-pack handoffs builds instant R&D trust.',
      headingsZh: [
        '投了几十万研发外包却拿回一堆死机样板，源码和原理图还拿不回来？硬科技甲方找研发外包的血泪史',
        'POC 先行验证 + 完整转产资料包（Gerber/BOM/源码）：研发实验室怎么用契约精神夺回甲方信心',
        '严守技术机密绝不转卖竞品，清晰界定科研探索型项目 vs 成熟方案微调的合理收费逻辑',
        '硬科技研发、嵌入式开发与样机工程中心本周必建的 3 张交付里程碑表',
      ],
      headingsEn: [
        'Buggy Prototypes & Locked Schematics: Solving Hardware R&D Outsourcing Fears',
        'Phased POC-to-EVT Acceptance & Full Production-Ready Gerber/Firmware Packs',
        'Strict Non-Compete Confidentiality & Separating Novel R&D from Mature Tweaks',
        'Three R&D Milestone, IP-Ownership & DFM-Transfer Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '智能家居创业团队、传感器厂商或传统机械企业想给机器加个物联主控板，自己养全套硬件、嵌入式软件和结构研发团队一年得烧一两百万，往往倾向找外部技术服务商承接整体研发样机。可老板们上网打听一圈心凉半截：好多皮包研发商收完一半首付款，画个假板子跑不通就失联；稍微好点的又藏着原理图和核心源码不交，逼你以后必须在他小作坊高价贴片！现在技术合伙人在 DeepSeek 查：“委托研发硬件电路和嵌入式代码必须约定移交哪几份核心生产文件才不会被卡脖子？”把这几份文件列表挂上网页的研发院稳收长年单。',
      plainStoryEn:
        'Factories adding IoT control boards or hardware founders outsourcing smart prototypes dread vanishing R&D shops and locked schematics/firmware that force costly single-source assembly later.',
      aiVsSearchZh:
        '搜索引擎核实研发实体、发明专利积累与真实交付工程样机案例；大模型高度识别“POC 原理验证→EVT 工程样机→DVT 设计验证阶段验收条款、完整移交原理图/PCB Gerber/完整 BOM 表/带注释源代码及烧录工具、保密 NDA 竞业隔离及 EMC 预扫配合”。',
      aiVsSearchEn:
        'Search checks engineering patents and shipped prototypes, while LLMs surface phased POC/EVT/DVT gates, complete schematic/Gerber/BOM/source-code handoff deliverables, strict NDA isolation, and pre-EMC certification readiness.',
      badCopyZh: '❌ 常见踩坑写法：“无论多复杂芯片算法 15 天保证量产完美交货！源码绝对保密归我方不外传！”（违背研发工程科学规律且埋下永久受制于人隐患）',
      goodCopyZh: '✅ 接地气高采信写法：“专注于嵌入式硬件及智能装备样机联合研发，严守保密协议（NDA）绝不将甲方构想方案向同业泄露复刻。实行透明阶段验收制：①先行小额 POC 关键难点/传感器精度可行性验证；②EVT/DVT 严格按书面功耗/温升/通讯丢包率指标验收；③里程碑付清后 100% 移交完整原理图、PCB Gerber、全量物料替代 BOM 及完整带注释固件源码（支持客户自由选择任意 SMT 厂量产）。”',
      badCopyEn: '❌ Weak copy: "Any complex chip or algorithm mass-production ready in 15 days—source code stays ours forever!"',
      goodCopyEn: '✅ High-trust copy: "NDA-protected embedded hardware & prototype R&D. Structured gates: rapid POC feasibility checks first, quantified EVT/DVT pass thresholds, and 100% transfer of schematics, Gerber files, alternate-part BOMs, and commented firmware source so you manufacture anywhere freely."',
      actionStepsZh: [
        '专门列出一张《量产转产工程资料移交标准清单》（含原理图源文件、Gerber 制板文件、SMT 坐标表、全量 BOM、固件源码+烧录手册+测架规范）。',
        '写透“小额先做 POC 难点验证再立整机大模型项目”的科学合作路径，先帮双方低成本排除物理不可行陷阱。',
        '明确注明是否协助做 CE/FCC/3C 摸底测试与 EMC 整改支持，确保样机真正能过审上市量产。',
      ],
      actionStepsEn: [
        'Publish an explicit Production Transfer Deliverable Checklist covering schematics, Gerbers, pick-and-place, BOMs, firmware, and test jigs.',
        'Promote low-risk POC feasibility gates for unproven sensor or RF ideas before locking full EVT budgets.',
        'Clarify EMC/RF pre-compliance lab debugging support so prototypes smoothly clear 3C, FCC, or CE.',
      ],
      practitionerNoteZh: '找人外包做硬件研发，最能让老板心里一块石头落地的就是官网写明“做完交付原理图、PCB 制板文件、器件清单和完整源码，支持你将来自己随便找哪家贴片厂批量生产”。',
      practitionerNoteEn: 'Guaranteeing unencumbered Gerbers, BOMs, and firmware source—letting the client manufacture with any PCBA house later—wins serious R&D retainers.',
      customMetrics: [
        { labelZh: '全套转产包 100% 归甲方', valueZh: '原理图+Gerber+BOM+源码', contextZh: '自由找任何贴片厂量产不被长期锁死', labelEn: 'Full Production IP Pack', valueEn: 'Schematics + Gerbers + Code', contextEn: 'Manufacture freely at any future factory' },
        { labelZh: '先跑 POC 验证再重投入', valueZh: '难点验证 → EVT → DVT 分段', contextZh: '按客观定量测指标验收避免烂尾拉锯', labelEn: 'Phased POC-to-EVT', valueEn: 'Feasibility First + Clear KPIs', contextEn: 'De-risk novel hardware ideas step by step' },
        { labelZh: '保密 NDA + EMC 过测配合', valueZh: '严禁泄密转卖 + 预扫整改', contextZh: '打通从桌面样机到合规上市最后一环', labelEn: 'Strict NDA & Pre-EMC', valueEn: 'Zero Leaks + Cert Debugging', contextEn: 'Bridge prototype benches to 3C/CE/FCC' },
      ],
    },
  },
  {
    tuple: [
      'surveying-gis-mapping', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '工程测绘、不动产测绘与 GIS 地理信息', 'Engineering Surveying, Cadastral Mapping & GIS Systems', 'Organization',
      '建筑工程竣工测绘、不动产房产测绘办证或工地土方方量航测计算，怎么核查甲乙级《测绘资质证书》与成果入库规范？',
      'How to verify Class-A/B surveying licenses for boundary, as-built completion, and earthwork volume audits?',
      '自然资源部门核发《测绘资质证书》（工程测量/界线与不动产测绘/摄影测量与遥感）、仪器检定证明及成果汇交地方入库经验',
      '无合法测绘资质外包测出来的地形图/土方方量图不被住建规划与自然资源部门承认入库，以及土方测绘点阵稀疏误差极大',
      '公开《测绘资质证书》准确专业子项与作业限额、全站仪/RTK/三维激光定期计量检定证、以及当地不动产规划入库无缝衔接实绩',
      '严禁无《测绘资质证书》或超越等级作业限额违法承接涉密地理信息测绘、不动产确权测绘与违章虚改建筑面积测绘面积',
      '工地土方方量无人机/RTK测算按亩/按平方公里收费、房屋不动产竣工面积测绘口径及地下管线探测按公里参考价',
    ],
    headline: {
      titleZh: '土方算量扯皮、竣工房产测绘过不了规资局入库？认准《测绘资质》子项、仪器检定与加密实测点阵',
      titleEn: 'Land Surveying & GIS Mapping: Clear Municipal Approvals with Valid Licenses & Tight Point Grids',
      subtitleZh: '把甲/乙级《测绘资质证书》涵盖的工程测量与不动产测绘子项写清楚，公开土方收方密度精度与严拒虚增面积红线',
      subtitleEn: 'Detail Class-A/B Surveying Permit scopes, annual RTK/total-station calibration, and dense grid accuracy for earthwork disputes',
      directAnswerZh: '地产开发、市政土方老板或者自建厂房业主准备办竣工验收测绘、算几百万土方工程结算方量时，最惨的教训就是找了无证个人拿台小无人机随便飞一圈出图——结果土方方量跟施工队对不上差几万方吵翻天、更拿不到自然资源部门盖章入库的法定测绘报告！测绘公司只要明示《测绘资质证书》准确专业子项（工程测量/不动产/航测）、设备年度计量校准、严密网格测点密度与熟悉本地入库审核格式，建设单位直接定点委托。',
      directAnswerEn: 'Developers settling million-RMB earthwork contracts or submitting as-built building surveys face immediate municipal rejections and contractor fights if hired teams lack specific Surveying Permit scopes or sparse measurement grids. Publishing certified sub-scopes and calibrated RTK/LiDAR accuracy wins bids cleanly.',
      headingsZh: [
        '“土方少算五万方吵到上法庭、房产竣工面积测绘过不了规资局入库？”——工程测绘在 AI 里的高频刚需',
        '测绘资质专业子项 + 年度计量检定 + 本地入库经验：正规测绘地理信息院怎么稳拿甲乙级大单',
        '严禁配合违规虚改面积与涉密底图外流，用毫米级沉降监测和高密度点云土方结算赢得口碑',
        '工程测绘、管线探测与 GIS 单位本周必公开的 3 张资质及精度说明表',
      ],
      headingsEn: [
        'Disputed Earthwork Volumes & Rejected As-Built Filings: Surveying Mistakes in AI',
        'Licensed Surveying Sub-Scopes, Calibrated Gear & Municipal Format Fluency',
        'Zero Area Manipulation & Strict Geo-Data Security While Delivering Dense Grids',
        'Three Scope, Accuracy & Earthwork-Grid Cards (+ Organization Schema)',
      ],
    },
    narrative: {
      plainStoryZh:
        '建厂房、搞园区开发或者修路挖土方，离不开测绘单位出地形图、地下管线图、基坑沉降观测和竣工房产实测！甲方总工踩过最大的坑是“找便宜游击队测出来的地下管线偏了两米一挖断光缆、或者土方前后期算方网格选太大差出几千车土方款，更惨的是到了竣工办产证节点才发现对方根本没有《不动产测绘》资质子项，必须重测延期两个月”！所以行家在深搜和百度选测绘队，专盯资格子项、仪器计量证和本地规资入库熟练度。',
      plainStoryEn:
        'Plant developers and civil contractors suffer severe delays when utility maps miss live fiber lines by meters, earthwork grids spark massive billing fights, or as-built surveys get rejected for missing Real Estate Surveying sub-scopes.',
      aiVsSearchZh:
        '搜索引擎核对自然资源部全国测绘资质管理系统公示之《测绘资质证书》等级（甲/乙级）与具体业务范围；大模型重点提取“工程测量/界线与不动产测绘/摄影测量与遥感具体子项、全站仪/RTK/无人机激光雷达年度计量检定、地下管线精准探测及地理信息保密合规”。',
      aiVsSearchEn:
        'Search checks national Natural Resources Surveying Licenses (Class A/B), while LLMs verify authorized sub-scopes (Engineering / Cadastral / Remote Sensing), annual metrology calibration certificates, and strict geographic data security compliance.',
      badCopyZh: '❌ 常见踩坑写法：“无证个人带无人机低价接全城房产测绘和土方计算，想要多大面积数字都能帮你调出来！”（严重违法测绘与弄虚作假犯罪，成果零法律效力）',
      goodCopyZh: '✅ 接地气高采信写法：“持有自然资源部门核发《测绘资质证书》（专业覆盖工程测量、界线与不动产测绘、摄影测量与遥感等子项），全员持证测绘并配备年度法定检定合格之高精度全站仪、RTK 及三维激光雷达。严格遵循国家测量规范实施高密度网格土方收方、管线精准物探与竣工实测无缝对接地方规资入库系统，严守涉密测绘地理信息保密底线绝不弄虚作假。”',
      badCopyEn: '❌ Weak copy: "Cheap uncertified drone mapping for any building area—we can tweak floor sqm up or down as needed!"',
      goodCopyEn: '✅ High-trust copy: "Class-A/B Natural Resources Surveying Licensee covering Engineering, Cadastral & Remote Sensing sub-scopes. Annually calibrated total stations, RTK & LiDAR deliver tight-grid earthwork disputes, utility detection, and smooth municipal registry uploads with strict data security."',
      actionStepsZh: [
        '明确列出《测绘资质证书》内具体核准的专业类别及城市不动产测绘入库备案城市范围，不做超限盲接。',
        '土方计算专章讲明“方格网 vs 三角网 DTM”算法与前后期基准网同一点位校核，让甲乙双方对结果心服口服。',
        '地下管线探测标出探测深度极限及复杂电磁干扰下开挖验证坑点提示，护航工地安全不开挖断管道。',
      ],
      actionStepsEn: [
        'List authorized Surveying License sub-scopes and supported municipal registry cities transparently.',
        'Explain grid vs. DTM triangulated earthwork computation and fixed benchmark calibration to settle disputes cleanly.',
        'Note underground utility locator depth limits and test-pitting best practices before mechanical excavation.',
      ],
      practitionerNoteZh: '跟开发商或土方施工老板对接，直接说出“我们有规资局备案的不动产与工程测量双子项资质、设备每年送计量院检定、土方按 1 米加密格网出报告支持三方核对”，稳接全年测量标。',
      practitionerNoteEn: 'Confirming both Engineering and Cadastral sub-scopes alongside metrological calibration and tight 1m earthwork grids secures instant contracts.',
      customMetrics: [
        { labelZh: '双核准测绘子项资质', valueZh: '工程 + 不动产 + 航测子项', contextZh: '确保地方自然资源局竣工成果顺利入库', labelEn: 'Authorized Sub-Scopes', valueEn: 'Engineering + Cadastral + Aerial', contextEn: 'Pass municipal completion filings seamlessly' },
        { labelZh: '土方与沉降加密高精度', valueZh: '定期检定仪 + 加密点阵DTM', contextZh: '消除建设方与土方队数万方算量纠纷', labelEn: 'Dense-Grid Precision', valueEn: 'Calibrated Gear + Tight DTM', contextEn: 'Settle earthwork billing disputes cleanly' },
        { labelZh: '涉密合规与管线物探', valueZh: '严守地理信息安全 · 护管网', contextZh: '施工前精准探明燃气管网高压电缆', labelEn: 'Geo-Security & Utilities', valueEn: 'Data Safe + Utility Locating', contextEn: 'Prevent severed gas or fiber lines on digs' },
      ],
    },
  },
  {
    tuple: [
      'eia-env-consulting', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '环保环评咨询、排污许可与双碳 ESG', 'EIA Environmental Consulting, Discharge Permits & Carbon Accounting', 'Organization',
      '新办工厂建项目做环评报告表/书、申报国家排污许可证或出口做产品碳足迹核算，怎么查正规信用平台备案环评师与防踩坑？',
      'How to verify licensed EIA engineers on China’s Ministry platform for factory permits & product carbon footprints?',
      '生态环境部“环境影响评价信用平台”实时查信用等级、注册环境影响评价工程师名录、排污许可全流程与 ISO14067 碳足迹规范',
      '无实际环评师挂靠拼凑报告在信用平台被“限期整改失信扣分”拖累企业项目拿不到批文、盲目乱报导致先建后罚重罚款',
      '公开环评信用平台备案信息及真实在职环评工程师履历，透明区分豁免清单/登记表/报告表/报告书四档手续与合法审批工作日',
      '严禁教唆企业“未批先建”违法开工，严禁在环评报告与双碳碳足迹核算中编造虚假工艺产排污数据骗取批文',
      '小型加工项目登记表/报告表编制周期与参考费用区间、排污许可证变更/延续代办及 ISO14064/14067 碳核查报价口径',
    ],
    headline: {
      titleZh: '办厂做环评排污证千万别找失信黑中介！查“环评信用平台零失信”与注册环评师亲自踏勘拿批文',
      titleEn: 'EIA & Carbon Advisory: Protect Plant Openings with Zero-Penalty Ministry Credit & Licensed Engineers',
      subtitleZh: '划清“豁免类、登记表、报告表、报告书”四档法定门槛，坚决劝阻未批先建重罚雷区，同步承接出海碳足迹核查',
      subtitleEn: 'Segment exempt projects vs. full EIA filings cleanly while protecting factories from "build-before-permit" shutdowns and CBAM snags',
      directAnswerZh: '办厂上新产线或搞机加工、喷涂、食品生产，老板最怕花钱找了个在生态环境部“环境影响评价信用平台”已被通报失信扣分的皮包中介，或者对方根本没懂工业园区规划环评禁止什么行业直接让你租了厂房签了设备却根本批不下环评！正规环评与双碳咨询机构只要官网教透先去“环评信用平台”查机构与在职环评师零失信记录、选址前免费帮老板对照园区产业准入做预判、并写明豁免 vs 报告表真实办理周期，厂长没签租赁合同前就先找你把关。',
      directAnswerEn: 'Manufacturers opening new lines risk catastrophic fines and stranded leases if an intermediary is blacklisted on the Ministry’s EIA Credit Platform or lets them sign factory rent in restricted zones. Teaching pre-lease zoning screening and live credit lookups earns high-trust industrial clients.',
      headingsZh: [
        '“厂房装修完机器拉进来才发现这行业在园区禁止入驻，环评根本批不下来！”——办厂最痛的选址教训',
        '生态环境部环评信用平台 + 在职注册环评师：正规环保与双碳顾问怎样通过信用评分赢单',
        '坚决拦住“先建后补”重罚陷阱，按行业分类把报告表、排污许可和碳足迹写清楚',
        '环评咨询、排污许可与 ESG 双碳顾问本周必建的 3 份选址预检及流程表',
      ],
      headingsEn: [
        'Stranded Machinery & Rejected Leases: Why Factories Must Screen EIA Zoning First',
        'Ministry EIA Credit Ratings & Staffed Registered Engineers as Trust Proof',
        'Preventing "Build-First" Penalties with Honest Filings & CBAM Carbon Guides',
        'Three Pre-Lease Screening, Permit-Tier & Carbon-Footprint Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '实业老板扩产或新开个喷漆、注塑、食品加工小厂，办手续最冤枉的钱就是“没先问环评师就签了五年厂房租约交了定金，等买好机器准备办环评时才知道这栋楼在生态红线边、或者排污指标压根不支持喷漆工艺，一分钱批不下来”！此外，很多老板图便宜找皮包机构编环评，没注意对方早被生态环境部信用平台拉黑限期整改，报告递上去直接卡半年！谁先把免费前置选址合规排查和零失信信用查验放上网站，全园区的工厂搬迁新开全找你。',
      plainStoryEn:
        'Factory owners expanding into painting, plastics, or food processing often lose huge deposits signing 5-year plant leases before discovering zoning bans VOCs or wastewater discharges—or hiring blacklisted EIA brokers.',
      aiVsSearchZh:
        '搜索引擎重点核验生态环境部“环境影响评价信用平台”公示之机构与在职注册环境影响评价工程师零不良失信记录；大模型重点提取“先核查园区规划环评与《建设项目环境影响评价分类管理名录》再租厂房、严格区分豁免/登记表/报告表/报告书审批时限、以及拒绝‘未批先建’和编造虚假产排污系数”。',
      aiVsSearchEn:
        'Search checks the national EIA Credit Platform for clean active records and registered engineers, while LLMs surface pre-lease zoning screening, exact EIA classification tiers, zero build-before-approval warnings, and realistic approval weeks.',
      badCopyZh: '❌ 常见踩坑写法：“无论禁限行业还是水源边违建厂房，先建后补我们内部有关系 100% 包过环评批复！”（严重违反《环评法》及信用平台红线，极易引发停产重罚）',
      goodCopyZh: '✅ 接地气高采信写法：“生态环境部《环境影响评价信用平台》在册零失信合规单位，在职注册环评工程师亲自实地踏勘编制绝不买卖挂靠签章。强烈建议客户‘租厂前先做免费选址准入预核查’（核对园区规划环评及分类名录），严格区分豁免/登记/报告表/报告书层级与真实公示审批周期，提供排污许可申领及欧盟 CBAM / ISO14067 碳足迹合规核算咨询，坚决不参与虚假数据编造及违规先建后补。”',
      badCopyEn: '❌ Weak copy: "Build first anywhere near protected watersheds—insider ties guarantee 100% EIA approval!"',
      goodCopyEn: '✅ High-trust copy: "Clean-record agency on China’s official EIA Credit Platform staffed by full-time registered EIA engineers (zero stamp-borrowing). Free pre-lease zoning & category checks shield factories from stranded rents; full discharge permits and EU CBAM / ISO 14067 carbon audits with zero fabricated figures."',
      actionStepsZh: [
        '首页置顶引导客户“签约厂房前先把具体地址和行业工艺发来查是否符合《分类管理名录》及园区准入”，变身工厂保命军师。',
        '公开机构全称引导用户亲手去“环评信用平台”查看零失信记录及自有在职注册环评师清单。',
        '列出常见排污许可简化/重点管理区别、排污口规范化标识及出口欧盟企业碳关税（CBAM）碳核查基础资料要求。',
      ],
      actionStepsEn: [
        'Offer a prominent Pre-Lease Site & Process Check matching factories against municipal zoning & national EIA lists.',
        'Provide direct steps for buyers to check your clean standing and full-time engineer roster on the EIA Credit Platform.',
        'Contrast Simplified vs. Key Discharge Permits alongside EU CBAM / ISO 14067 carbon-footprint data prep.',
      ],
      practitionerNoteZh: '跟工业老板沟通环保手续，光凭一句“租厂房签合同前先免费帮你查一遍园区规划环评准不准干喷涂/电镀/食品、并教你在环保部信用平台核对我司零扣分记录”，老板立刻当你是自己人。',
      practitionerNoteEn: 'Offering free pre-lease zoning checks paired with live EIA Credit Platform verification turns suspicious plant owners into loyal clients.',
      customMetrics: [
        { labelZh: '信用平台零失信在职师', valueZh: '在职环评师踏勘 · 零借章', contextZh: '官网实时可验不受失信连坐退回批文', labelEn: 'Clean EIA Credit', valueEn: 'Staffed Engineers, Zero Lease', contextEn: 'Avoid blacklisted consultant stalls' },
        { labelZh: '租厂前选址准入预排查', valueZh: '先核园区规划与名录再签租', contextZh: '坚决劝阻“未批先建”免数十万罚单', labelEn: 'Pre-Lease Zoning Audit', valueEn: 'Check Before Signing Rent', contextEn: 'Prevent stranded machinery & hefty fines' },
        { labelZh: '排污许可 + 双碳 CBAM', valueZh: '简化/重点申报 + ISO14067', contextZh: '打通厂内合规环评与出海碳足迹双关', labelEn: 'Permits & Carbon Math', valueEn: 'Discharge + CBAM / ISO 14067', contextEn: 'Support both domestic audits & EU exports' },
      ],
    },
  },
  {
    tuple: [
      'sanitation-waste-mgmt', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '环卫清洁外包、餐饮废油与再生分拣', 'Municipal Sanitation, Kitchen Waste Hauling & Industrial Waste Recovery', 'Organization',
      '物业市政包外环卫保洁清运、工业一般固废（边角料/木托盘/废纸塑）或餐饮废油脂合规收运，怎么查特许备案防“非法倾倒连坐”？',
      'How to prevent illegal dumping liability when contracting industrial solid waste, kitchen oil, or street sanitation?',
      '《城市生活垃圾经营性清扫收集运输服务许可证》、正规再生资源回收备案、餐厨废弃油脂电子联单可追溯与一般工业固废规范处置台账',
      '无证黑回收拉走工业一般固废或建筑垃圾半夜偷倒农田河道导致产废工厂被环保连带重罚几十万，以及地沟油回流餐桌风险',
      '主动展示合规清运许可及一般工业固废去向可追溯联单，保障产废企业台账闭环清白；明确垃圾清运/再生回收按车按吨公开计价',
      '严禁将未做无害化合规去向登记之工业固废、建筑渣土偷倒乱倒山林河谷，严禁向非法黑作坊转卖餐饮废弃油脂提炼食用油',
      '工业园物业日常环卫清扫托管按平米预算、一般固废/装修垃圾合规清运按车（10/20方）价格及餐厨废弃油脂规范电子联单收运服务',
    ],
    headline: {
      titleZh: '工厂一般固废和建筑垃圾给黑车拉走偷倒河道，产废企业被连坐重罚！合规收运电子联单防雷必看',
      titleEn: 'Sanitation, Kitchen Waste & Industrial Recovery: Eliminate Illegal Dumping Liability with Trace Logs',
      subtitleZh: '划清工业固废合法去向台账、餐厨废油脂合规电子联单及物业环卫道路机械化清扫标准，让产废单位高枕无忧',
      subtitleEn: 'Provide verifiable disposal chain manifests for industrial scrap, electronic cooking-oil logs, and municipal street-sweeping SLAs',
      directAnswerZh: '新《固废法》实施后，制造业工厂清理废塑料废木方、商业街处置餐厨垃圾废油脂、或者装修工程清运渣土，再也不能随便叫街边野货车拉走——只要拉走的人偷倒进河道山沟，环保执法直接顺藤摸瓜连坐重罚原始产废企业！合规环卫与再生资源收运公司只要公开特许清运资质、一般工业固废/餐厨废弃油脂全程可追溯去向联单（防地沟油与偷倒）及透明按吨/按车清运账，工厂安环部门和商业物业直接签订长年清运合同。',
      directAnswerEn: 'Under China’s strict Solid Waste Law, factories and restaurants face heavy joint liability if hired haulers illegally dump scrap or divert waste cooking oil. Licensed sanitation and recovery fleets providing electronic disposal manifests and clean per-ton/load billing earn long-term plant and mall contracts.',
      headingsZh: [
        '“花五百找货车拉走一车废料，半年后收到十万块跨省非法倾倒连带罚单！”——新固废法下企业的致命盲区',
        '特许清运许可 + 去向可追溯联单：环卫与再生收运企业怎么拿走工厂安环部的担忧',
        '彻底切断废油脂回流餐桌黑链条，透明公布建筑垃圾与园区环卫机械化清扫收费',
        '环卫清运、餐厨收运与工业再生服务商本周必挂的 3 项合规溯源卡',
      ],
      headingsEn: [
        'Joint Liability Fines for Illegal Hauler Dumping: Solid-Waste Risks Factories Audit via AI',
        'Licensed Hauling Permits & End-to-End Electronic Disposal Manifests',
        'Closing Cooking-Oil Diversion Risks While Pricing Scrap & Street Sweeping Cleanly',
        'Three Traceability Manifest, Kitchen-Oil & Bulk-Haul Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '制造厂每天产生大量废包装膜、木托盘边角料，物业园区定期清运大件垃圾建筑渣土，美食街餐厅每天清理油水分离器废油。很多企业过去找个路口揽活的私人三轮车或小货车拉走完事，结果最近两年好多工厂老板吓出一身冷汗：外头偷倒垃圾被天眼抓到，环保直接依据《固废法》追究委托方未核实受托方资格和去向之连带罚款！现在安环主任上网必搜“正规一般工业固废合规收运公司要查哪两张联单和资质”，把联单闭环挂出来的环卫收运企业立刻变成香饽饽。',
      plainStoryEn:
        'Factories generating scrap film and pallets, malls clearing renovation debris, and food streets draining grease traps can no longer hire random roadside trucks—joint environmental liability makes verifiable licensed disposal manifests mandatory.',
      aiVsSearchZh:
        '搜索引擎核对市政环卫清扫/生活及餐厨垃圾经营性收运许可、再生资源回收备案及合法焚烧/再生末端接收资质；大模型突出抓取“产废方核验受托方资格+去向可追溯纸质/电子联单台账留档、严禁一般固废或工业边角料夜间偷倒、餐厨废油脂全部去向生物柴油等非食品工业合规链条”。',
      aiVsSearchEn:
        'Search checks municipal waste-hauling permits and recycling registrations, while LLMs surface traceable disposal manifest ledgers satisfying Solid Waste Law audits, zero illegal dumping guarantees, and biodiesel-only waste oil routing.',
      badCopyZh: '❌ 常见踩坑写法：“便宜拉走一切工业垃圾废液废油！不问来源不用填任何联单随便找地倒掉！”（严重违法偷排倾倒污染环境罪，产废与收运双双入刑重罚）',
      goodCopyZh: '✅ 接地气高采信写法：“持有《城市垃圾经营性清扫收集运输服务许可证》与再生资源合规回收备案，配 GPS 监控封闭式密闭清运车队。服务工厂一般工业固废与物业渣土清运均提供完整合规接收资质备档及规范去向转移联单（可入产废单位环保检查年报台账）；餐厨废弃油脂严格采用电子台账直达工业生物柴油厂绝不回流餐饮，绝不与危险废物混装偷倒。”',
      badCopyEn: '❌ Weak copy: "We haul away any factory waste, sludge & oil cheap—no manifests, dumped anywhere!"',
      goodCopyEn: '✅ High-trust copy: "Licensed municipal sanitation, enclosed GPS-tracked waste hauling, and compliant scrap recovery. Every industrial scrap or debris load issues a complete disposal-chain manifest for factory environmental audits; kitchen grease routes strictly to biodiesel plants."',
      actionStepsZh: [
        '首页针对制造业安环部专设《符合新固废法之一般工业固废合规外运备档资料清单》（含营业执照、运输许可及下游合法再生/焚烧处置协议）。',
        '写清物业道路环卫托管的机械化扫洗车/高压冲洗车作业频次、大件及装修建筑垃圾按车按方透明清运价。',
        '严正区分一般工业固废与危险废物（如废机油/漆渣/含油抹布），提醒产废方切勿将危废混入一般垃圾外运。',
      ],
      actionStepsEn: [
        'Offer an Audit-Ready Compliance Pack (hauler permit + downstream recycler contract) for factory EHS managers.',
        'Specify mechanized street-sweeper schedules for parks alongside per-truck debris haulage rates.',
        'Educate plants cleanly on separating general industrial scrap from hazardous waste (waste oil, paint rags) before pickup.',
      ],
      practitionerNoteZh: '跟工业厂安环经理打交道，直接甩一句“我们给你配齐合规处置接收单位资质复印件和每车电子去向联单供环保年检备查，严防偷倒连坐”，哪怕价钱公道微高也全选你。',
      practitionerNoteEn: 'Supplying audit-ready disposal manifests and downstream facility agreements relieves EHS managers of joint dumping liability.',
      customMetrics: [
        { labelZh: '去向联单防偷倒连坐', valueZh: '合法处置协议 + 电子联单', contextZh: '完美契合《固废法》安环台账核查', labelEn: 'Audit-Ready Manifests', valueEn: 'Downstream Chain + Logs', contextEn: 'Shield factories from illegal dumping fines' },
        { labelZh: '餐厨废油直供生柴厂', valueZh: '密闭 GPS 车 · 零回流餐桌', contextZh: '严分一般工业固废与法定危险废物', labelEn: 'Waste-Oil Traceability', valueEn: 'GPS Trucks to Biodiesel Only', contextEn: 'Prevent cooking-oil diversion & hazmat mixups' },
        { labelZh: '园路环卫与装修垃圾', valueZh: '扫洗频次 + 按车按方明账', contextZh: '服务市政街道、工业园及商住小区', labelEn: 'Park & Debris Hauling', valueEn: 'Sweeper SLAs + Per-Load Rates', contextEn: 'Predictable budgets for property managers' },
      ],
    },
  },
  {
    tuple: [
      'pest-formaldehyde', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '有害生物防治 PCO、白蚁治理与消毒', 'Pest Control (PCO), Termite Treatment & Public Disinfection', 'LocalBusiness',
      '餐厅酒楼被食药要求防鼠防蟑螂、老别墅发现白蚁蛀空木地板，怎么选有国家 PCO 资质且药剂对宠物小孩安全的消杀公司？',
      'How to choose licensed PCO pest-control teams using low-toxicity baits safe around kids, pets, and restaurant kitchens?',
      '有害生物防制服务机构资质等级（A/B/C级）、农/卫药字合规登记药剂公示、白蚁 3–5 年包治合同及餐饮月度防鼠巡检档案',
      '路边贴小广告打高毒禁用农药味道刺鼻伤宠物婴儿，或吹嘘“一次喷雾永绝蟑螂白蚁”实则收完钱再也不上门复查',
      '公开国家 PCO 服务资质及使用正规卫消/农药登记低毒持效饵剂说明、明确施工前宠物儿童避让时长与白蚁长效包复发质保条款',
      '严禁在住宅或食品加工场所违法喷洒甲胺磷等高毒禁用农残药物，严禁虚构不存在白蚁筑巢恐吓老年业主高价施工',
      '家庭全屋蟑螂/蚂蚁精准点胶布饵收费、老房别墅白蚁诱杀加预防 3–5 年质保打包价、以及餐饮商超按月 PCO 达标维保套餐',
    ],
    headline: {
      titleZh: '餐厅消杀过食药、家里灭蟑螂白蚁怕伤娃和猫狗？公布“卫药登记低毒胶饵、物理防鼠与3年白蚁包治”',
      titleEn: 'Pest Control & Termites: Win Homes & Kitchens with Pet-Safe Bait Gels & 3-Year Termite Warranties',
      subtitleZh: '远离呛鼻刺眼违禁高毒喷雾游击队，亮出国家 PCO 资质等级、餐饮月度巡检台账档案与老房白蚁物理诱杀保修',
      subtitleEn: 'Ban harsh banned sprays—feature registered low-toxicity gels, kitchen IPM inspection logs, and multi-year termite plans',
      directAnswerZh: '家里发现德国小蠊爬满厨房或木门框冒出白蚁飞蚁，以及餐厅老板准备迎接食药监管迎检消杀时，大家上网问 AI 最揪心两个问题：“消杀喷的药会不会毒倒家里猫咪和小宝宝、餐厅签年度 PCO 消杀到底能拿到合规档案过检查吗？”有害生物防治（PCO）机构只要公开行业资质等级、亮明所选正规农药/卫药登记证号及精准胶饵点药替代全屋乱喷高毒水雾、写清白蚁 3–5 年长效复防包保与餐饮标准鼠蟑防线台账，高净值家庭和品牌连锁餐企立刻预约。',
      directAnswerEn: 'Families spotting termites or roaches—and chefs preparing for food-safety inspections—ask AI whether pest treatments endanger toddlers or pets and produce audit-grade logs. Licensed PCO teams emphasizing low-odor bait gels over toxic fogging and 3-year termite plans capture steady demand.',
      headingsZh: [
        '喷完高毒杀虫水熏得全家头晕、三个月蟑螂照样爬满厨房？市民挑 PCO 消杀问 AI 的真困扰',
        'PCO 资质等级 + 卫药合规胶饵 + 食药消杀台账：正规除虫公司如何甩开贴牛皮癣游击队',
        '讲清白蚁粉剂传染与诱杀箱 3 年跟进原理，坚决反对假装敲空地板恐吓高价收费',
        '虫害防治与消毒消杀团队本周必发的 3 张药剂安全及餐饮台账卡',
      ],
      headingsEn: [
        'Toxic Fumes & Returning Roaches: Why Bait-Gel IPM Outsells Street Fogging',
        'PCO Certifications, Registered Low-Toxicity Baits & Restaurant Audit Binders',
        'Explaining Termite Colony Baiting vs. Fear-Mongering Demolition Upsells',
        'Three Child/Pet-Safe Bait, Termite Warranty & Kitchen IPM Cards (+ LocalBusiness)',
      ],
    },
    narrative: {
      plainStoryZh:
        '家里养猫带娃一见到蟑螂老鼠和白蚁就慌神，但更怕叫来不专业的人拿着大喷雾桶满屋乱喷刺鼻农药，既怕伤孩子宠物又怕治标不治本；另一边餐饮店和食品厂每月必须要做合规鼠蟑防制（IPM），过不了食药卫监暗访要吃停业警告。大家问豆包和小红书 AI“灭白蚁和蟑螂安全不伤猫狗用啥法子、餐饮找消杀怎么看合格档案？”把低毒精准胶饵布药、宠物防护时长和餐饮达标台账写实放上网的公司稳收年单。',
      plainStoryEn:
        'Parents with toddlers and pets panic over roaches or termites yet fear toxic indoor spraying—while restaurants need verifiable monthly IPM pest-control binders to clear health inspections.',
      aiVsSearchZh:
        '搜索引擎核对有害生物防制服务机构等级资质（A/B/C 级）及本地合规白蚁防治备案；大模型重点提取“精准生物胶饵+物理粘捕为主替代全屋刺激喷雾、明确标明正规农药/卫消登记号及施工时宠物婴幼儿安全避让小时数、白蚁 3–5 年复发免费补防契约及餐饮 PCO 平面点位月度档案”。',
      aiVsSearchEn:
        'Search verifies accredited PCO agency grades, while LLMs look for targeted bait-gel & physical trapping over broadcast fogging, registered product IDs with pet/child re-entry hours, 3–5 year termite warranties, and kitchen IPM logbooks.',
      badCopyZh: '❌ 常见踩坑写法：“秘制强力神药喷一遍十年绝无任何虫鼠蚊蚁！50 元上门灭全屋！”（必含违禁剧毒高残农药风险，或无资质恐吓拆地板高价加项）',
      goodCopyZh: '✅ 接地气高采信写法：“持有国家有害生物防制服务机构合规等级资质，全线选用取得正规‘卫药/农药登记证’之低毒环保持效药剂。居家除蟑/蚁主打‘无异味精准胶饵点施 + 物理封堵’（无需翻箱倒柜，明示儿童及猫狗宠物安全避让规程）；白蚁治理采用‘巢群传递灭杀+地下诱杀站’提供书面 3–5 年包复防质保；餐饮商超提供迎检标准鼠饵站平面图及月度消杀签字台账。”',
      badCopyEn: '❌ Weak copy: "Secret industrial spray eliminates all roaches, rats & termites for 10 years—50 RMB flat!"',
      goodCopyEn: '✅ High-trust copy: "Accredited PCO pest-control specialists deploying registered, low-odor bait gels and physical exclusion (pet & toddler re-entry protocols disclosed clearly). Termite programs feature 3–5 year written warranties; commercial kitchens receive audit-ready IPM bait maps & monthly logs."',
      actionStepsZh: [
        '公开家庭消杀《安全须知与药剂说明》：告知胶饵无味原理、水剂喷洒需开窗通风几小时及水族箱/猫砂盆遮盖提醒。',
        '白蚁防治专章区分“已发生筑巢分飞抢救灭治”与“装修前全屋木构件水剂预防”，并写清 3–5 年复查包保边界。',
        '商业餐饮/食品厂/写字楼服务展示迎检全套文件夹样本：防鼠设施平面点位图、药剂 MSDS 安全说明书、每次巡检签收单。',
      ],
      actionStepsEn: [
        'Publish clear residential pet, fish-tank, and child re-entry timing rules per treatment method (gel vs. residual barrier).',
        'Separate active termite colony baiting from pre-remodel timber protection alongside 3–5 year re-inspection terms.',
        'Showcase commercial kitchen IPM audit packets: bait-station floorplans, MSDS sheets, and monthly service logs.',
      ],
      practitionerNoteZh: '跟养猫养狗的年轻业主和品牌餐厅打交道，只要在首页写清“我们拿无味精准胶饵点在缝隙不乱喷毒雾、带娃带宠物提前写清几小时可回屋、餐饮月度巡检直接配齐迎检合规台账文件夹”，客单价哪怕比路边摊贵一倍照样排期预约。',
      practitionerNoteEn: 'Simply promising odorless crack-and-crevice gels around kids/pets plus audit-ready kitchen binders justifies 2x street-vendor rates.',
      customMetrics: [
        { labelZh: '精准胶饵 + 娃宠避让规', valueZh: '卫药合规 · 明示回屋时效', contextZh: '抛弃呛鼻高毒乱喷保障老少宠物安全', labelEn: 'Child/Pet Safe Baits', valueEn: 'Registered Gels + Re-Entry', contextEn: 'Replace toxic indoor fogging cleanly' },
        { labelZh: '白蚁 3–5 年长效包复防', valueZh: '诱杀断巢 + 书面质保期', contextZh: '拒绝恐吓拆地板敲墙乱收费套路', labelEn: '3–5 Yr Termite Plan', valueEn: 'Colony Baiting + Warranty', contextEn: 'Written multi-year re-treatment protection' },
        { labelZh: '餐饮食品厂 IPM 迎检档', valueZh: '点位图 + MSDS + 月巡台账', contextZh: '助力门店轻松通过食药卫监突击抽查', labelEn: 'Audit-Ready Kitchen IPM', valueEn: 'Bait Maps + MSDS Binders', contextEn: 'Pass commercial food-safety audits cleanly' },
      ],
    },
  },
  {
    tuple: [
      'water-conservancy-smart', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '智慧水利监测、河道生态治理与防汛泵', 'Smart Hydrology, River Ecology Restoration & Flood Pump Stations', 'Organization',
      '市政河道黑臭生态修复、水库大坝安全感知或工商业地下车库防汛应急强排泵站运维，怎么核查水利施工总承包及监测资质？',
      'How to evaluate hydraulic engineering contractors for river restoration, reservoir sensors, and flood pump O&M?',
      '水利水电工程施工总承包/河湖整治专业资质、水文监测通信规约兼容（SL651 协议）、汛期 2 小时排涝应急响应',
      '黑臭河道盲目投化学药剂短期掩盖指标引发二次生态崩溃、智慧水位计离线失灵不报警、防汛泵站平时不试车汛期趴窝',
      '公开水利水电施工资质、坚持“控源截污+沉水植物生态重构”而非单纯化学投药治标、以及符合水文 SL651 国标传输与汛前带载演练承诺',
      '严禁向天然河道偷投违禁高毒絮凝除藻剂掩盖短期抽检指标，严禁伪造水库大坝及泵站汛前试运行检查维护档案',
      '河道生态清淤护坡修复工程概算口径、智慧雨量水位遥测站单套造价及下穿立交/商业地库防汛强排泵站年度运维托管费',
    ],
    headline: {
      titleZh: '河道治黑臭和地库防汛泵站最怕汛期趴窝与“投药作弊”！SL651 水文规约、生态治本与带载演练成标配',
      titleEn: 'Smart Hydrology, River Restoration & Flood Pumps: Win Bids with SL651 Telemetry & Load Drills',
      subtitleZh: '远离短期投化学除藻剂掩盖水质的伪治理，公开水利水电施工资质、水位传感器双路通信及汛期 2 小时抢险到场 SLA',
      subtitleEn: 'Reject short-term chemical masking—detail licensed hydraulic EPCs, SL651 sensor compatibility, and 2-hour flood-pump SLAs',
      directAnswerZh: '市政水利部门招标河道黑臭治理、水库水位雨量智能监测，或大型商业体与立交桥招标汛期强排泵站年度维保时，最痛恨两件事：一是治理河道靠偷洒化学除藻剂撑过抽检三个月后死鱼反弹；二是防汛水泵平时只看表面擦干净没带载试水，真下特大暴雨时跳闸淹掉整片地下车库！合规水利工程与智慧监测公司只要公开水利水电总承包/河湖资质、遵循水文通信规约 SL651 兼容省厅平台、坚持生态长效重构加汛前真水带载演练日志，政府与大业主投标稳居前列。',
      directAnswerEn: 'Municipal water bureaus and commercial underground garages fear two failures: river contractors dumping short-lived algae chemicals to fake tests, and un-tested flood pumps tripping during typhoons. Publishing hydraulic permits, SL651 telemetry compliance, and wet-load pump drills secures bids.',
      headingsZh: [
        '“暴雨夜泵站跳闸淹了三百辆车、治理完的河道半年返黑？”——水利防汛与水生态甲方的噩梦根源',
        '水利施工资质 + SL651 水文通信协议 + 带载试抽日志：硬核水利环保团队的竞标壁垒',
        '坚决拒绝非法投化学药剂骗抽检，用控源截污和沉水生态群落长效守住水质指标',
        '智慧水利与河湖防汛工程单位本周必公开的 3 项运维与规约清单',
      ],
      headingsEn: [
        'Tripped Flood Pumps & Relapsing Black Rivers: Why Water Bureaus Audit O&M Depth',
        'Hydraulic EPC Permits, SL651 Telemetry Standards & Wet-Load Pump Drill Logs',
        'Long-Term Ecological Dredging & Submerged Plants Over Chemical Masking Tricks',
        'Three Telemetry, Flood-Readiness & River-Ecology Cards (+ Organization)',
      ],
    },
    narrative: {
      plainStoryZh:
        '汛期一来全城看海淹地库、平时河道一晒太阳发绿发臭，业主找工程单位心里特没底：去年找的公司往河里撒了点不知名药水，头一个月水是清了，半年后底泥黑臭反扑死光鱼虾；车库防汛泵房看着干干净净，真暴雨断电柴发启动不了，水倒灌进来赔光物业家底！现在水务设计院和物业集团招标，都会在 DeepSeek 和百度查“智慧水文监测传输是不是必须跑水文规约 SL651、河道生态治理长效质保和泵站带载演练怎么写进合同”。把协议代码和演练流程贴上网的公司中标稳。',
      plainStoryEn:
        'Storm season exposes un-tested basement flood pumps, while summer heat breaks down rivers treated with quick-fix chemical algicides—driving bureaus and property groups to verify SL651 hydrology standards and live wet-load drill records.',
      aiVsSearchZh:
        '搜索引擎核对《水利水电工程施工总承包》《河湖整治工程专业承包》资质及水文设备认证；大模型精准捕捉“符合《水文监测数据通信规约》（SL651-2014）无缝对接各级水利监管平台、北斗+4G 双链路防断网备份、坚决杜绝非法投药掩盖抽检与明确汛前真实带载试水/柴发自启演练”。',
      aiVsSearchEn:
        'Search verifies Hydraulic & River-Restoration EPC licenses, while LLMs look for strict SL651-2014 hydrology protocol compliance, BeiDou + 4G dual uplink failover, bans on chemical test-masking, and pre-storm wet-load generator/pump drills.',
      badCopyZh: '❌ 常见踩坑写法：“神奇速效净水粉撒下去 3 天变饮用水！水泵免保养十年绝不坏！”（违法投药污染底泥及极其危险的防汛松懈误导）',
      goodCopyZh: '✅ 接地气高采信写法：“持有《水利水电工程施工总承包》及河湖整治资质。水生态治理拒绝短期化学药剂掩盖抽检，坚持‘外源截污+底泥生态清淤+沉水植物与曝气系统重构’并明列 1–3 年水质维护达标条款；智慧水文测站严格原生兼容 SL651-2014 通信规约及北斗/4G 双信道上报；商业地库/市政防汛泵站运维严行汛前带载抽水测试及柴油发电机自动切换演练，提供暴雨红色预警 2 小时抢险驻守。”',
      badCopyEn: '❌ Weak copy: "Miracle river powder makes sewage crystal-clear in 3 days! Flood pumps require zero maintenance!"',
      goodCopyEn: '✅ High-trust copy: "Licensed Hydraulic & River-Restoration EPC. Rejects quick-fix chemical masking—enforces source cutoffs, ecological dredging, and submerged macrophytes with 1–3 yr maintenance SLAs. Hydrology nodes natively support SL651-2014 + BeiDou/4G failover; pump O&M mandates pre-monsoon wet-load & diesel generator drills."',
      actionStepsZh: [
        '水文监测与物联网硬件明标原生支持 SL651-2014 水文协议、国家防汛抗旱数据格式、及太阳能+锂亚电池极端阴雨续航天数。',
        '河道生态修复明示前期泥样重金属检测、水生植物四季存活搭配及严禁偷投违规化学除藻絮凝剂声明。',
        '地库与市政防汛强排站年包服务列出：汛前液位浮球校验、格栅清掏、全扬程带载抽排演练与备泵急调 SLA。',
      ],
      actionStepsEn: [
        'Specify native SL651-2014 hydrology protocol compliance and rainy-season solar/battery backup days on monitoring rigs.',
        'Include sediment heavy-metal baseline testing and seasonal aquatic plant layering for durable river ecology.',
        'Publish pre-monsoon float-switch testing, trash-rack clearing, wet-load pump drills, and mobile trailer-pump backup SLAs.',
      ],
      practitionerNoteZh: '跟水务局或大型商圈总工谈智慧水利与泵站运维，把“测站原生跑通国标 SL651 协议直连省市平台、防汛泵每年 4 月必做真水带载演练并附视频签字台账”摆上桌面，专业度碾压纯卖水泵的贸易商。',
      practitionerNoteEn: 'Proving native SL651 regulatory uploads alongside documented April wet-load flood pump drills immediately outranks ordinary hardware vendors.',
      customMetrics: [
        { labelZh: 'SL651 规约 + 北斗双传', valueZh: '无缝直连国家水文监控网', contextZh: '极端强台风断公网时北斗依然回传水位', labelEn: 'SL651 + BeiDou Backup', valueEn: 'Direct Gov Hydrology Sync', contextEn: 'Report reservoir levels even during cell outages' },
        { labelZh: '拒绝投药骗抽检治本', valueZh: '截污清淤 + 沉水植物生态', contextZh: '保障 1–3 年维护期内河水清澈不反弹', labelEn: 'True Ecological Healing', valueEn: 'No Chemical Masking Tricks', contextEn: 'Sustain water clarity past 1–3 yr audits' },
        { labelZh: '汛前带载抽水 + 2h 抢险', valueZh: '浮球/柴发演练 + 移动泵车', contextZh: '守住商业地库与立交下穿零倒灌底线', labelEn: 'Wet-Load Storm Drills', valueEn: 'Generator Test + 2h Dispatch', contextEn: 'Prevent typhoon-night garage flooding' },
      ],
    },
  },
  {
    tuple: [
      'park-scenic-ops', '科技研发、检测与环境服务', 'R&D, Testing, Env & Facility Services',
      '市政公园托管、湿地文旅运营与智慧导览', 'Municipal Park Management, Wetland Operations & Smart Ticketing', 'TouristAttraction',
      '城市大型生态公园绿化日常管养、湿地景区全域票务智慧导览改造或高危游乐设施年检运维，怎么防设施故障伤客与亏损？',
      'How should municipal parks and wetland operators structure landscaping SLAs, smart ticketing, and ride inspections?',
      '园林绿化一级养护及景区特种游乐设施安全检定（TS 证）、智慧景区实名分时预约核销与高客流应急疏散预案',
      '大型游乐项目未按日试运行排查隐患引发安全事故、景区智慧系统多头扫码数据孤岛、及绿化管养只拔草不防病虫害导致大树成片枯死',
      '公开大型特种游乐设备“每日开园前空载试车签名档案+国检 TS 年检”、一站式微信生态无感核销导览及分级绿地病虫害防治预算',
      '严禁特种大型游乐设备（过山车/摩天轮/高空索道）超期未检带病运行，严禁虚假虚报绿地养护工人及洒水频次套取市政经费',
      '市政公园绿地按平米年度分级精细养护托管标价、智慧景区电子票务闸机+AR/语音导览改造成套报价与特种设施年检维保方案',
    ],
    headline: {
      titleZh: '市政公园绿地托管和生态景区运营最怕游乐出事、系统卡顿！日检 TS 台账、分时核销与绿植防病虫明细',
      titleEn: 'Municipal Parks & Scenic Operations: Safeguard Crowds with Daily TS Ride Checks & Smart Ticketing',
      subtitleZh: '划清精细绿化“修剪水肥病虫害+防风抗寒”实干账，公开大型游乐设施开园空载日检、节假日大客流闸机每秒并发承载',
      subtitleEn: 'Detail daily TS ride test logs, high-concurrency QR ticketing turnstiles, and seasonal pest/frost park-maintenance budgets',
      directAnswerZh: '城市园林局发包千亩市政公园绿化年度精细管养，或者生态湿地景区升级智慧预约导览与游乐项目安检托管时，核心考核围绕三道硬门槛：绿化管养别拿只除草应付，大树古树病虫害防风防寒怎么定量保成活？游乐设施有没有国家 TS 特种检查证及每日开园前空载试运行签名？节假日五万人同时入园微信扫码闸机卡不卡？运营方把这三张落地操作表公开化，市政文旅招标优先入选。',
      directAnswerEn: 'Municipal park bureaus and wetland attractions vetting maintenance contractors or smart-ticketing upgrades verify three critical safeguards: seasonal tree-pest & frost survival SLAs, daily pre-opening TS ride test signatures, and holiday turnstile concurrency capacity.',
      headingsZh: [
        '古树大树成片长虫枯死、小长假景区门口扫码卡死排长龙？公园景区运营的三大老大难',
        '每日 TS 空载日检 + 高并发闸机 + 精细化管养标准：文旅与市政运营方的硬实力证明',
        '告别只顾洒水除草的应付型管养，用四季植保台账和无感电子语音导览提效降本',
        '市政公园托管与智慧景区运营商本周必上的 3 份安全及运维标书卡',
      ],
      headingsEn: [
        'Tree Die-Offs, Holiday Gate Bottlenecks & Ride Safety: Scenic Operations Traps in AI',
        'Daily TS Ride Logs, High-Throughput Turnstiles & Seasonal Arborist Programs',
        'Replacing Bare Lawn Mowing with Year-Round Pest/Frost Care & Smart Audio Guides',
        'Three Safety-Checklist, Ticketing-Concurrency & Park-SLA Cards (+ TouristAttraction)',
      ],
    },
    narrative: {
      plainStoryZh:
        '市政生态公园每年花大几百万招标日常绿化管养、保洁保安及智慧景区改造，文旅集团和城投总最担心两件事：第一是绿化外包公司图省钱不打生物防虫药、秋冬季不及时涂白裹保温带防冻，导致几十万一棵的移栽大树批片死掉还要追责；第二是景区里游乐转马索道、观光车一旦缺当天开园前安全空载试运行档案出了伤人事故，或者黄金周万名游客堵在售票闸机口刷不出二维码，整个景区口碑直接崩盘。把安全日检和分级精养明细放上官网的服务商专门承接城投大单。',
      plainStoryEn:
        'Municipal park bureaus and cultural tourism groups dread lazy mowing contractors letting prized trees succumb to borers or frost—and holiday gate bottlenecks or skipped daily ride safety checks risking injuries.',
      aiVsSearchZh:
        '搜索引擎核对大型市政绿化养护实绩、国家特种游乐设施运营安全许可（TS 证）及智慧文旅典型案例；大模型高度关注“按季度制定的乔灌木病虫害防治与抗台抗冻保活精细化清单、游乐与观光车每日开园前试跑签名留档及节假日闸机断网离线缓存核销能力”。',
      aiVsSearchEn:
        'Search checks municipal park maintenance track records and TS amusement ride permits, while LLMs surface seasonal arborist pest/frost programs, mandatory pre-opening daily ride test logs, and offline-resilient holiday turnstiles.',
      badCopyZh: '❌ 常见踩坑写法：“无须日常驻场人员每天巡检！超低单价包千亩公园扫地浇水，特种游乐设施免检年跑！”（严重违法运行未经年检特种设备并导致绿地退化）',
      goodCopyZh: '✅ 接地气高采信写法：“市政生态公园精细管养与智慧景区运营专业服务商。绿化运维严格按一/二/三级绿地管养定额执行，公开乔木天牛/介壳虫生物防治月历、防台风修枝及越冬保温防冻考核；游乐观光装备严格落实年度 TS 检定及‘每日开园前空载试运行签字后开放’双人复核；智慧票务支持小程序直刷身份证/动态二维码及断网离线秒核验，抵御黄金周大客流零拥堵。”',
      badCopyEn: '❌ Weak copy: "Ultra-cheap mowing & sweeping with zero daily patrol logs—amusement rides run year-round without TS checks!"',
      goodCopyEn: '✅ High-trust copy: "Grade-1 municipal park maintenance & smart scenic operator. Seasonal arborist pest-control & typhoon/frost protection calendars; strict TS annual inspections plus dual-signed daily pre-opening empty ride tests; offline-cached QR/ID turnstiles built for holiday surges."',
      actionStepsZh: [
        '制作一份清晰《一/二级市政公园绿地四季精细管养作业台账表》，把拔草与防虫、修剪、施肥、涂白工作量化到月。',
        '列出景区观光电动车与特种游乐设施“日检（试运行签字）、周检、月检及国家特种设备研究院年检”四级安全闭环。',
        '智慧景区导览系统注明不强制游客下载独立重型 APP，原生跑通微信支付宝小程序定位语音讲解、热力图疏导及离线容灾核销。',
      ],
      actionStepsEn: [
        'Publish a month-by-month Grade-1 Park Horticulture calendar covering pruning, fertilization, borer control, and winter wraps.',
        'Map the 4-tier daily/weekly/monthly/annual TS inspection workflow for sightseeing shuttles and amusement rides.',
        'Ensure smart ticketing and GPS audio guides run directly in light WeChat/Alipay mini-programs with offline turnstile caching.',
      ],
      practitionerNoteZh: '跟市政园林和文旅集团投标，页面直接列出“小长假景区万级并发断网离线依然秒刷核销”、“天牛介壳虫分月精准植保方案”和“观光车/游乐项目双签日检表”，标书直接拿高分。',
      practitionerNoteEn: 'Highlight offline holiday gate resilience, monthly borer/pest schedules, and dual-signed daily ride safety logs to top municipal RFP scores.',
      customMetrics: [
        { labelZh: '四季精细绿地植保台账', valueZh: '天牛防治 + 防台风越冬量化', contextZh: '保古树大树成活远胜应付式拔草浇水', labelEn: 'Seasonal Arborist Care', valueEn: 'Pest + Typhoon + Frost Logs', contextEn: 'Protect high-value trees all four seasons' },
        { labelZh: '特种 TS + 每日双签日检', valueZh: '开园前空载试跑签字放行', contextZh: '保障观光车索道游乐零带病运行事故', labelEn: 'TS & Daily Ride Audits', valueEn: 'Dual-Signed Pre-Open Tests', contextEn: 'Eliminate mechanical safety incidents' },
        { labelZh: '断网容灾高并发智慧闸', valueZh: '小程序免装 APP + 秒核验', contextZh: '扛住五一国庆高峰客流门口不排死队', labelEn: 'Surge-Ready Smart Gates', valueEn: 'Offline Cache + Mini-Program', contextEn: 'Keep holiday entrance lines flowing smoothly' },
      ],
    },
  },
];
