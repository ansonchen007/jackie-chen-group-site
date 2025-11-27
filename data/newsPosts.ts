export type PostCategoryKey = 'fnb' | 'brand' | 'group' | 'advertising' | 'technology' | 'investment';
export type PostTypeKey = 'group' | 'insights';

export interface NewsPost {
  slug: string;
  translationKey: 'fnbConcept' | 'brandPositioning' | 'groupUpdate' | 'performanceNotes' | 'techOutsourcing';
  categoryKey: PostCategoryKey;
  typeKey: PostTypeKey;
  publishedDate: string;
  excerptEn: string;
  excerptZh: string;
  contentEn: string[];
  contentZh: string[];
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'fnb-concept-notes',
    translationKey: 'fnbConcept',
    categoryKey: 'fnb',
    typeKey: 'insights',
    publishedDate: '2024-11-15',
    excerptEn: 'Building a successful café brand requires more than good coffee. It demands careful positioning, consistent execution and a clear understanding of your target customer.',
    excerptZh: '打造一个成功的咖啡品牌不仅仅需要好咖啡，还需要清晰的定位、持续的执行以及对目标客户的深入理解。',
    contentEn: [
      "When we work with F&B clients, particularly in the café and restaurant space, we often observe a common pattern: the concept starts with passion for the product (great coffee, interesting food) but lacks a clear positioning strategy.",
      "A strong F&B brand needs to answer: Who is this for? What occasion or need does it serve? How is it different from the dozens of similar venues nearby?",
      "From our experience, successful café brands usually nail down a few things: a clear target demographic, a consistent experience across touchpoints (space, service, product, packaging), and a story or philosophy that people can connect with.",
      "For Jackie Chen Group, our role in F&B projects goes beyond investment or consulting. We participate in concept development, positioning, visual identity, operational planning and launch marketing — ensuring each element aligns with the brand's long-term vision.",
      "Whether it's a specialty coffee brand or a lifestyle-focused restaurant, our approach is hands-on: we work closely with founders and operators to refine positioning, test concepts and build sustainable operations."
    ],
    contentZh: [
      '在与餐饮客户合作时（尤其是咖啡馆与餐厅领域），我们经常观察到一个共同模式：项目往往从对产品的热情（好咖啡、有趣的食物）开始，但缺乏清晰的定位策略。',
      '一个强大的餐饮品牌需要回答：这是为谁做的？它服务于什么场景或需求？它与附近几十家类似场所有什么不同？',
      '根据我们的经验，成功的咖啡品牌通常做好几件事：明确的目标人群、跨触点的一致体验（空间、服务、产品、包装），以及一个人们可以产生共鸣的故事或理念。',
      '对于 Jackie Chen 集团，我们在餐饮项目中的角色不仅限于投资或咨询。我们参与概念开发、定位、视觉识别、运营规划和开业营销——确保每个元素都与品牌的长期愿景保持一致。',
      '无论是精品咖啡品牌还是生活方式导向的餐厅，我们的方法都是实践性的：我们与创始人和运营者密切合作，优化定位、测试概念并建立可持续的运营。'
    ],
  },
  {
    slug: 'brand-positioning-cross-market',
    translationKey: 'brandPositioning',
    categoryKey: 'brand',
    typeKey: 'insights',
    publishedDate: '2024-10-28',
    excerptEn: 'When brands expand across markets, maintaining a consistent core while adapting to local contexts becomes critical.',
    excerptZh: '当品牌跨市场扩张时，在保持核心一致性的同时适应当地环境变得至关重要。',
    contentEn: [
      "Brand positioning is often seen as a one-time exercise — define it once, and you're done. But when brands expand into new markets, the positioning often needs refinement.",
      "We've worked with brands entering multiple Asian markets, and one key lesson is this: your core brand values and promise should remain stable, but the way you communicate them may need to shift based on local culture, consumer behavior and competitive landscape.",
      "Some brands make the mistake of creating entirely different identities for each market. This fragments the brand and makes it hard to build long-term equity. Others go too rigid and fail to resonate locally.",
      "The sweet spot is maintaining a recognizable core (visual identity, tone, key messaging) while allowing flexibility in execution — adapting campaign themes, channels, partnerships and product emphasis based on what works in each market.",
      "At Jackie Chen Group, we help brands think through this balance. Our cross-market experience in Hong Kong and other regions allows us to guide positioning decisions that respect local nuances while protecting global brand consistency."
    ],
    contentZh: [
      '品牌定位常被视为一次性工作——定义一次就完成了。但当品牌进入新市场时，定位往往需要优化。',
      '我们与进入多个亚洲市场的品牌合作，一个关键教训是：核心品牌价值和承诺应保持稳定，但传达方式可能需要根据当地文化、消费者行为和竞争格局进行调整。',
      '一些品牌犯的错误是为每个市场创建完全不同的身份。这会分裂品牌并使建立长期资产变得困难。另一些品牌过于僵化，无法在当地引起共鸣。',
      '最佳平衡点是维持可识别的核心（视觉识别、语调、关键信息），同时允许执行灵活性——根据每个市场的有效方法调整活动主题、渠道、合作伙伴和产品重点。',
      '在 Jackie Chen 集团，我们帮助品牌思考这种平衡。我们在香港和其他地区的跨市场经验使我们能够指导定位决策，既尊重当地差异又保护全球品牌一致性。'
    ],
  },
  {
    slug: 'jackie-chen-group-platform',
    translationKey: 'groupUpdate',
    categoryKey: 'group',
    typeKey: 'group',
    publishedDate: '2024-10-10',
    excerptEn: "An overview of Jackie Chen Group's platform model and our current focus areas across investment, brand, F&B, advertising, technology and consulting.",
    excerptZh: 'Jackie Chen 集团平台模式概述，以及我们在投资、品牌、餐饮、广告、技术和咨询方面的当前重点领域。',
    contentEn: [
      "Jackie Chen Group operates as an integrated platform combining investment discipline, brand thinking, F&B operational experience and digital growth capabilities.",
      "Our model is built on the idea that many projects — whether they are early-stage startups, established brands or cross-border businesses — benefit from partners who can think across multiple dimensions: capital, brand strategy, operations, marketing and technology.",
      "Today, our focus is concentrated in six key areas: Investment (project and equity investments with strategic support), Brand Management (positioning, identity and ongoing brand building), F&B Ventures (café, restaurant and lifestyle concepts), Advertising & Performance Marketing (digital campaigns and user acquisition), Technology Outsourcing (app/web development via external teams), and Consulting (business planning and market entry strategies).",
      "We're based in Hong Kong, which gives us access to regional markets and a strong foundation in compliance and cross-border execution. Our approach is hands-on: we work closely with founders, operators and brand teams to design strategies and support day-to-day execution.",
      "This platform approach allows us to support projects at different stages — from early concept development to scaling and expansion — by bringing the right mix of capital, expertise and operational support."
    ],
    contentZh: [
      'Jackie Chen 集团作为一个综合平台运营，结合投资纪律、品牌思维、餐饮运营经验和数字增长能力。',
      '我们的模式建立在这样的理念上：许多项目——无论是早期创业公司、成熟品牌还是跨境业务——都受益于能够从多个维度思考的合作伙伴：资本、品牌策略、运营、营销和技术。',
      '今天，我们的重点集中在六个关键领域：投资（项目和股权投资并提供战略支持）、品牌管理（定位、识别和持续的品牌建设）、餐饮项目（咖啡馆、餐厅和生活方式概念）、广告与效果营销（数字活动和用户获取）、技术外包（通过外部团队进行应用/网络开发）和咨询（商业规划和市场进入策略）。',
      '我们总部位于香港，这使我们能够接触区域市场，并在合规和跨境执行方面拥有坚实的基础。我们的方法是实践性的：我们与创始人、运营者和品牌团队密切合作，设计策略并支持日常执行。',
      '这种平台方法使我们能够支持处于不同阶段的项目——从早期概念开发到扩展和扩张——通过提供正确的资本、专业知识和运营支持组合。'
    ],
  },
  {
    slug: 'performance-marketing-long-term',
    translationKey: 'performanceNotes',
    categoryKey: 'advertising',
    typeKey: 'insights',
    publishedDate: '2024-09-20',
    excerptEn: 'Performance marketing is often judged by short-term metrics, but sustainable growth requires a longer view and a focus on customer lifetime value.',
    excerptZh: '效果营销通常根据短期指标来评判，但可持续增长需要更长远的视角和对客户生命周期价值的关注。',
    contentEn: [
      "In performance marketing, there's constant pressure to optimize for immediate results: lower CPA, higher CTR, faster conversions. These metrics matter, but focusing only on short-term numbers can lead to poor long-term outcomes.",
      "We've seen brands chase cheap clicks and low-cost acquisitions, only to realize that these users don't stick around. The real question isn't \"how much does it cost to acquire a user?\" but \"what is the lifetime value of that user, and how do we maximize it?\"",
      "A more sustainable approach balances short-term performance with longer-term brand building. This means investing in channels and creative that may not convert immediately but build awareness and trust over time.",
      "It also means paying attention to retention, engagement and repeat behavior — not just first-time conversions. For many businesses, especially in F&B, e-commerce and subscription models, the second and third purchase are far more valuable than the first.",
      "At Jackie Chen Group, our advertising and growth work emphasizes this balance. We help clients set up performance campaigns (Meta, Google, TikTok) with clear acquisition targets, but we also encourage them to think about content, community and customer experience as part of the growth equation."
    ],
    contentZh: [
      '在效果营销中，始终存在优化即时结果的压力：降低 CPA、提高 CTR、加快转化。这些指标很重要，但只关注短期数字可能导致糟糕的长期结果。',
      '我们见过品牌追逐便宜的点击和低成本获客，却发现这些用户不会留下来。真正的问题不是"获取一个用户的成本是多少？"而是"该用户的生命周期价值是多少，我们如何最大化它？"',
      '更可持续的方法是平衡短期表现与长期品牌建设。这意味着投资于可能不会立即转化但随时间建立认知和信任的渠道和创意。',
      '这也意味着关注留存、参与度和重复行为——而不仅仅是首次转化。对于许多业务，尤其是餐饮、电商和订阅模式，第二次和第三次购买远比第一次更有价值。',
      '在 Jackie Chen 集团，我们的广告和增长工作强调这种平衡。我们帮助客户设置具有明确获客目标的效果广告（Meta、Google、TikTok），但我们也鼓励他们将内容、社区和客户体验作为增长方程的一部分来思考。'
    ],
  },
  {
    slug: 'when-to-use-tech-outsourcing',
    translationKey: 'techOutsourcing',
    categoryKey: 'technology',
    typeKey: 'insights',
    publishedDate: '2024-08-30',
    excerptEn: "Technology outsourcing can be a smart choice when done right. Here's when it makes sense and how to approach it effectively.",
    excerptZh: '如果做得好，技术外包可以是一个明智的选择。以下是何时有意义以及如何有效地进行。',
    contentEn: [
      "Many businesses face a common question: should we build an in-house technical team, or work with external development partners? The answer depends on your stage, resources and strategic priorities.",
      "Outsourcing makes sense when: you need to move fast and don't have time to hire and train a full team; your technical needs are well-defined and project-based; you want to focus internal resources on core business operations rather than managing developers; or you need specialized skills for a limited period.",
      "However, outsourcing requires careful management. You need clear specifications, regular check-ins and someone on your side who understands both the business requirements and technical feasibility.",
      "At Jackie Chen Group, we help clients navigate this decision. When outsourcing is the right choice, we connect them with reliable external teams and provide oversight to ensure quality, timelines and alignment with business goals.",
      "The key is not to see outsourcing as \"handing off the problem.\" It's about strategic resource allocation — using external expertise where it makes sense, while keeping control of the overall product vision and roadmap."
    ],
    contentZh: [
      '许多企业面临一个共同问题：我们应该建立内部技术团队，还是与外部开发合作伙伴合作？答案取决于你的阶段、资源和战略优先事项。',
      '外包在以下情况下有意义：你需要快速行动，没有时间招聘和培训完整团队；你的技术需求明确且基于项目；你想将内部资源集中在核心业务运营而不是管理开发人员；或者你需要有限时期的专业技能。',
      '然而，外包需要仔细管理。你需要明确的规格、定期检查以及你方理解业务需求和技术可行性的人员。',
      '在 Jackie Chen 集团，我们帮助客户应对这一决策。当外包是正确选择时，我们将他们与可靠的外部团队联系起来，并提供监督以确保质量、时间表和与业务目标的一致性。',
      '关键是不要将外包视为"交出问题"。这是关于战略资源配置——在有意义的地方使用外部专业知识，同时保持对整体产品愿景和路线图的控制。'
    ],
  },
];
