export type Language = 'en' | 'zhCN';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    news: string;
    contact: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
    home: {
      heroTitle: string;
      heroSubtitle: string;
      heroCtaPrimary: string;
      heroCtaSecondary: string;
      heroBullets: string[];
      sectionIntroTitle: string;
      sectionIntroBody: string;
      sectionPillarsTitle: string;
      pillars: {
        investment: { title: string; description: string };
        brand: { title: string; description: string };
        fnb: { title: string; description: string };
        advertising: { title: string; description: string };
        technology: { title: string; description: string };
        consulting: { title: string; description: string };
      };
      sectionWhyTitle: string;
      sectionWhySubtitle: string;
      sectionWhyCategories: string[];
      sectionWhyItems: string[];
      sectionCtaTitle: string;
      sectionCtaBody: string;
      sectionCtaButton: string;
    };
  services: {
    title: string;
    introTitle: string;
    introBody: string;
    items: {
      investment: { title: string; content: string };
      brand: { title: string; content: string };
      fnb: { title: string; content: string };
      ads: { title: string; content: string };
      tech: { title: string; content: string };
      consulting: { title: string; content: string };
    };
    whyTitle: string;
    why1: string;
    why2: string;
    why3: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  cases: {
    title: string;
    subtitle: string;
    filter: {
      all: string;
      investment: string;
      brand: string;
      fnb: string;
      ads: string;
      tech: string;
      consulting: string;
    };
    items: {
      fnbCafe: {
        title: string;
        category: string;
        industry: string;
        summary: string;
        result: string;
      };
      brandRefresh: {
        title: string;
        category: string;
        industry: string;
        summary: string;
        result: string;
      };
      adsCampaign: {
        title: string;
        category: string;
        industry: string;
        summary: string;
        result: string;
      };
      techApp: {
        title: string;
        category: string;
        industry: string;
        summary: string;
        result: string;
      };
      investmentProject: {
        title: string;
        category: string;
        industry: string;
        summary: string;
        result: string;
      };
      consultingEntry: {
        title: string;
        category: string;
        industry: string;
        summary: string;
        result: string;
      };
    };
    moreNote: string;
    contactButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      companyLabel: string;
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      budgetLabel: string;
      budgetPlaceholder: string;
      budgetOptions: {
        small: string;
        medium: string;
        large: string;
        custom: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      companyName: string;
      region: string;
      email: string;
      emailLabel: string;
      addressLabel: string;
      addressPlaceholder: string;
      channelsTitle: string;
      channelsDesc: string;
      qrPlaceholder: string;
      mapPlaceholder: string;
    };
    more: {
      ctaTitle: string;
      ctaBody: string;
    };
  };
  about: {
    title: string;
    heroTitle: string;
    heroSubtitle: string;
    sectionWhoTitle: string;
    sectionWhoBody: string;
    sectionMissionTitle: string;
    sectionMissionBody: string;
    sectionVisionTitle: string;
    sectionVisionBody: string;
    sectionApproachTitle: string;
    sectionApproachItems: Array<{
      title: string;
      body: string;
    }>;
    sectionFocusTitle: string;
    sectionFocusIntro: string;
    sectionFocusItems: {
      investment: string;
      brand: string;
      fnb: string;
      ads: string;
      tech: string;
      consulting: string;
    };
    sectionStatsTitle: string;
    sectionStatsMarkets: string;
    sectionStatsDomains: string;
    sectionStatsBase: string;
    sectionCtaTitle: string;
    sectionCtaBody: string;
    sectionCtaButton: string;
  };
  news: {
    title: string;
    subtitle: string;
    filter: {
      all: string;
      group: string;
      insights: string;
      fnb: string;
      investment: string;
    };
    moreNote: string;
    posts: {
      fnbConcept: {
        title: string;
        category: string;
        type: string;
      };
      brandPositioning: {
        title: string;
        category: string;
        type: string;
      };
      groupUpdate: {
        title: string;
        category: string;
        type: string;
      };
      performanceNotes: {
        title: string;
        category: string;
        type: string;
      };
      techOutsourcing: {
        title: string;
        category: string;
        type: string;
      };
    };
    post: {
      readMore: string;
      backToList: string;
      publishedOn: string;
      categoryLabel: string;
      typeLabel: string;
    };
  };
  pages: {
    home: {
      title: string;
      placeholder: string;
    };
    about: {
      title: string;
      placeholder: string;
    };
    services: {
      title: string;
      placeholder: string;
    };
    cases: {
      title: string;
      placeholder: string;
    };
    news: {
      title: string;
      placeholder: string;
    };
    contact: {
      title: string;
      placeholder: string;
    };
    privacy: {
      title: string;
      placeholder: string;
    };
    terms: {
      title: string;
      placeholder: string;
    };
  };
  companyName: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      cases: 'Cases',
      news: 'News',
      contact: 'Contact',
    },
    footer: {
      copyright: '© Jackie Chen Group Limited',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    home: {
      heroTitle: 'Integrated Investment, Brand and Growth Partner',
      heroSubtitle: 'Jackie Chen Group Limited is a Hong Kong–based platform that brings together investment, brand management, F&B concepts, advertising, technology outsourcing, and consulting to support long-term growth for our partners.',
      heroCtaPrimary: 'Talk to Us',
      heroCtaSecondary: 'View Our Services',
      heroBullets: [
        'Integrated platform across investment, brand, F&B, and digital growth',
        'Covering project collaboration, operations planning, external tech and market support',
        'Long-term partnership approach with rhythm and path design',
      ],
      sectionIntroTitle: 'About Jackie Chen Group',
      sectionIntroBody: 'We combine steady investment principles with hands-on brand building, F&B operations, digital advertising, and technology services. Based in Hong Kong, we connect capital, creativity and execution across multiple markets to create sustainable value.',
      sectionPillarsTitle: 'What We Do',
      pillars: {
        investment: {
          title: 'Investment',
          description: 'Equity and project investments with a focus on sustainable growth, risk control and long-term value creation.',
        },
        brand: {
          title: 'Brand Management',
          description: 'Strategy, positioning and ongoing management to help brands stand out and stay consistent across channels and markets.',
        },
        fnb: {
          title: 'F&B Ventures',
          description: 'Concept creation, store operation and branding for food & beverage projects, from cafés and restaurants to lifestyle concepts.',
        },
        advertising: {
          title: 'Advertising & Performance Marketing',
          description: 'Data-driven media buying and performance marketing across major digital platforms to acquire and retain users effectively.',
        },
        technology: {
          title: 'Technology Outsourcing',
          description: 'App and web development, system integration and technical support delivered by reliable external teams.',
        },
        consulting: {
          title: 'Consulting & Solutions',
          description: 'Tailored business, go-to-market and growth consulting for companies expanding across regions and industries.',
        },
      },
      sectionWhyTitle: 'Why Work With Us',
      sectionWhySubtitle: 'Our Core Advantages',
      sectionWhyCategories: ['Integrated Perspective', 'Long-term Partner', 'Professional Support'],
      sectionWhyItems: [
        'Cross-domain capabilities: investment, brand, F&B, marketing and technology under one roof.',
        'Based in Hong Kong with a regional and global mindset.',
        'Execution-focused: from strategy and planning to on-the-ground operations.',
      ],
      sectionCtaTitle: 'Ready to Discuss Your Next Project?',
      sectionCtaBody: 'Whether you are planning a new F&B concept, a brand refresh, an overseas campaign or a technology build, our team can help you design and execute the right plan.',
      sectionCtaButton: 'Contact Jackie Chen Group',
    },
    services: {
      title: 'Our Services',
      introTitle: 'What We Provide',
      introBody: 'Jackie Chen Group offers a multi-disciplinary service system covering investment, brand management, food & beverage ventures, digital advertising, technology outsourcing, and business consulting. Our team supports clients from strategy to execution.',
      items: {
        investment: {
          title: 'Investment',
          content: 'Equity investments, project investments, and long-term value strategies. We focus on steady returns, risk control, and scalable opportunities.',
        },
        brand: {
          title: 'Brand Management',
          content: 'Brand strategy, positioning, identity systems, tone of voice, content guidance and ongoing brand consistency across markets.',
        },
        fnb: {
          title: 'F&B Ventures',
          content: 'Creation and development of F&B concepts, store operations, menu planning, environmental design, and lifestyle branding.',
        },
        ads: {
          title: 'Advertising & Performance Marketing',
          content: 'Performance-driven digital advertising through Meta, Google, TikTok and other channels. We help clients acquire users with optimized cost efficiency.',
        },
        tech: {
          title: 'Technology Outsourcing',
          content: 'App & Web development, system integration, maintenance, updates and technical support delivered through reliable external teams.',
        },
        consulting: {
          title: 'Consulting & Solutions',
          content: 'Tailored business planning, go-to-market strategy, growth models and multi-market expansion support.',
        },
      },
      whyTitle: 'Why Choose Jackie Chen Group',
      why1: 'Cross-domain capabilities across investment, brand, F&B, marketing and technology.',
      why2: 'Based in Hong Kong, combining compliance, international access and execution strength.',
      why3: 'From planning to operations — we support the full life cycle.',
      ctaTitle: 'Ready to work with Jackie Chen Group?',
      ctaSubtitle: 'Contact our team to discuss your needs.',
      ctaButton: 'Contact Us',
    },
    cases: {
      title: 'Case Studies',
      subtitle: 'Here are some representative cases across investment, brand, F&B, advertising, technology and consulting. These examples illustrate how we think, execute and create value together with our partners.',
      filter: {
        all: 'All',
        investment: 'Investment',
        brand: 'Brand',
        fnb: 'F&B',
        ads: 'Advertising',
        tech: 'Technology',
        consulting: 'Consulting',
      },
      items: {
        fnbCafe: {
          title: 'F&B Concept: Specialty Café Brand',
          category: 'F&B',
          industry: 'Café / Lifestyle',
          summary: 'From concept to opening: positioning, brand identity, store experience and launch marketing for a specialty café brand.',
          result: 'Successful opening with strong first-month foot traffic and social media engagement.',
        },
        brandRefresh: {
          title: 'Brand Refresh for Consumer Product',
          category: 'Brand',
          industry: 'Consumer Goods',
          summary: 'Repositioning and visual refresh for a mature consumer brand to reach younger audiences.',
          result: 'Improved brand awareness and better performance of digital campaigns.',
        },
        adsCampaign: {
          title: 'Performance Campaign for Online Service',
          category: 'Advertising',
          industry: 'Online Services',
          summary: 'Full-funnel performance marketing using Meta, Google and TikTok to acquire users for an online platform.',
          result: 'Acquisition cost optimized and campaign scaled with stable return on ad spend.',
        },
        techApp: {
          title: 'App Development & Tech Support',
          category: 'Technology',
          industry: 'Mobile Application',
          summary: 'External development team building and maintaining a mobile application with continuous feature iterations.',
          result: 'Stable releases, reduced in-house workload and faster time-to-market.',
        },
        investmentProject: {
          title: 'Strategic Investment & Support',
          category: 'Investment',
          industry: 'Early-stage Project',
          summary: 'Combining capital injection with strategic support in branding, operations and growth planning.',
          result: 'Aligned roadmap and clearer path towards scalable growth.',
        },
        consultingEntry: {
          title: 'Consulting: Market Entry Planning',
          category: 'Consulting',
          industry: 'Cross-border Business',
          summary: 'Helping a client evaluate and plan market entry, including business model, positioning and go-to-market approach.',
          result: 'Structured plan, phased execution and reduced trial-and-error cost.',
        },
      },
      moreNote: 'More case studies can be shared in private upon request.',
      contactButton: 'Contact us for more details',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Tell us briefly about your project, and our team will get back to you.',
      form: {
        title: 'Send us a message',
        companyLabel: 'Company Name',
        nameLabel: 'Contact Name',
        emailLabel: 'Email',
        phoneLabel: 'WhatsApp / Phone (optional)',
        budgetLabel: 'Estimated Budget',
        budgetPlaceholder: 'Select a range',
        budgetOptions: {
          small: 'Below USD 10,000',
          medium: 'USD 10,000 – 50,000',
          large: 'USD 50,000 – 200,000',
          custom: 'To be discussed',
        },
        messageLabel: 'Project / Request Overview',
        messagePlaceholder: 'Please briefly describe your project, timeline and key goals.',
        submit: 'Submit',
        success: 'Thank you. We have received your message and will get back to you soon.',
        error: 'Something went wrong. Please try again later.',
      },
      info: {
        title: 'Company Information',
        companyName: 'Jackie Chen Group Limited',
        region: 'Based in Hong Kong',
        email: 'Jackie.chen.hk@outlook.com',
        emailLabel: 'Email',
        addressLabel: 'Address',
        addressPlaceholder: 'Room A7, 12/F, Star House, 34 Ashley Road, Tsim Sha Tsui, Hong Kong',
        channelsTitle: 'Other contact channels',
        channelsDesc: 'We can also be reached via messaging apps. You can add us using the QR code or ID below.',
        qrPlaceholder: 'QR code placeholder',
        mapPlaceholder: 'Map / location placeholder',
      },
      more: {
        ctaTitle: 'Prefer a direct conversation?',
        ctaBody: 'You can also reach out to us with more details about your project, and we can arrange a call or meeting.',
      },
    },
    about: {
      title: 'About Us',
      heroTitle: 'About Jackie Chen Group',
      heroSubtitle: 'Jackie Chen Group Limited is a Hong Kong–based platform that combines investment, brand management, F&B ventures, advertising, technology outsourcing and consulting to support long-term, sustainable growth.',
      sectionWhoTitle: 'Who We Are',
      sectionWhoBody: 'We are an integrated group that connects capital, brands, operations and digital capabilities. Our work covers early-stage projects, established brands and cross-border businesses looking for a stable partner who can think strategically and execute in detail.',
      sectionMissionTitle: 'Our Mission',
      sectionMissionBody: 'To be a long-term partner for entrepreneurs, operators and brands by combining investment discipline, brand thinking, F&B experience and digital growth capabilities.',
      sectionVisionTitle: 'Our Vision',
      sectionVisionBody: 'To build a flexible, multi-market platform that can continuously incubate, upgrade and support projects across different industries and regions.',
      sectionApproachTitle: 'How We Work',
      sectionApproachItems: [
        {
          title: 'Cross-domain thinking',
          body: 'We look at projects from multiple angles: capital, brand, product, operations and marketing, rather than in isolation.',
        },
        {
          title: 'Strategy + execution',
          body: 'We help design the plan, but we also care deeply about day-to-day execution, data and feedback.',
        },
        {
          title: 'Long-term mindset',
          body: 'We focus on building assets and brands that can grow and improve over time, not just short-term spikes.',
        },
      ],
      sectionFocusTitle: 'Our Focus Areas',
      sectionFocusIntro: 'Today, Jackie Chen Group focuses on a few key directions where our experience and resources are most concentrated.',
      sectionFocusItems: {
        investment: 'Investment: project and equity investments with hands-on strategic support.',
        brand: 'Brand management: positioning, identity, content and long-term brand assets.',
        fnb: 'F&B ventures: creating and operating F&B concepts such as cafés, restaurants and lifestyle spaces.',
        ads: 'Advertising & growth: performance marketing and campaign planning for digital channels.',
        tech: 'Technology outsourcing: development, integration and technical support via external teams.',
        consulting: 'Consulting: structured thinking, planning and roadmaps for cross-market projects.',
      },
      sectionStatsTitle: 'At a Glance',
      sectionStatsMarkets: 'Markets covered',
      sectionStatsDomains: 'Business domains',
      sectionStatsBase: 'Based in Hong Kong',
      sectionCtaTitle: 'Looking for a long-term partner?',
      sectionCtaBody: 'If you are building a brand, a F&B concept, a digital platform or a cross-border project, we are open to exploring how we can work together.',
      sectionCtaButton: 'Talk to Jackie Chen Group',
    },
    news: {
      title: 'News & Insights',
      subtitle: 'Updates, observations and brief notes from Jackie Chen Group across investment, brand, F&B and digital growth.',
      filter: {
        all: 'All',
        group: 'Group News',
        insights: 'Insights',
        fnb: 'F&B',
        investment: 'Investment',
      },
      moreNote: 'This section contains selected public updates. More detailed information can be shared in direct conversations.',
      posts: {
        fnbConcept: {
          title: 'F&B Concept Notes: Building a Café Brand',
          category: 'F&B',
          type: 'Insights',
        },
        brandPositioning: {
          title: 'Brand Positioning for Cross-market Projects',
          category: 'Brand',
          type: 'Insights',
        },
        groupUpdate: {
          title: 'Jackie Chen Group: Platform & Focus Areas',
          category: 'Group',
          type: 'Group News',
        },
        performanceNotes: {
          title: 'Performance Marketing: Thinking Beyond Short-term Metrics',
          category: 'Advertising',
          type: 'Insights',
        },
        techOutsourcing: {
          title: 'When to Use Technology Outsourcing',
          category: 'Technology',
          type: 'Insights',
        },
      },
      post: {
        readMore: 'Read more',
        backToList: 'Back to News',
        publishedOn: 'Published on',
        categoryLabel: 'Category',
        typeLabel: 'Type',
      },
    },
    pages: {
      home: {
        title: 'Welcome to Jackie Chen Group',
        placeholder: 'This is the Home page placeholder.',
      },
      about: {
        title: 'About Us',
        placeholder: 'This is the About page placeholder.',
      },
      services: {
        title: 'Our Services',
        placeholder: 'This is the Services page placeholder.',
      },
      cases: {
        title: 'Case Studies',
        placeholder: 'This is the Case Studies page placeholder.',
      },
      news: {
        title: 'News & Blog',
        placeholder: 'This is the News page placeholder.',
      },
      contact: {
        title: 'Contact Us',
        placeholder: 'This is the Contact page placeholder.',
      },
      privacy: {
        title: 'Privacy Policy',
        placeholder: 'This is the Privacy Policy page placeholder.',
      },
      terms: {
        title: 'Terms of Service',
        placeholder: 'This is the Terms of Service page placeholder.',
      },
    },
    companyName: 'Jackie Chen Group Limited',
  },
  zhCN: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务',
      cases: '案例',
      news: '新闻',
      contact: '联系我们',
    },
    footer: {
      copyright: '© Jackie Chen Group Limited',
      privacy: '隐私政策',
      terms: '服务条款',
    },
    home: {
      heroTitle: '投资 · 品牌 · 餐饮 · 增长的一体化合作伙伴',
      heroSubtitle: 'Jackie Chen 集团是一家立足香港的综合平台，业务覆盖投资、品牌管理、餐饮项目、广告投放、技术外包与商业咨询，为合作伙伴提供长期稳定的增长支持。',
      heroCtaPrimary: '预约洽谈',
      heroCtaSecondary: '了解我们的服务',
      heroBullets: [
        '跨投资 / 品牌 / 餐饮 / 数字增长的整合平台',
        '覆盖项目协作、运营规划、外部技术与市场支持',
        '以长期合作视角做节奏和路径设计',
      ],
      sectionIntroTitle: '关于 Jackie Chen 集团',
      sectionIntroBody: '我们以稳健投资为基础，以品牌与餐饮为载体，以数字广告与技术服务为增长引擎。依托香港的区位与合规优势，连接资本、创意与落地执行，为不同阶段的项目持续赋能。',
      sectionPillarsTitle: '我们的业务板块',
      pillars: {
        investment: {
          title: '投资',
          description: '聚焦长期成长与风险控制的股权与项目投资，注重可持续价值回报。',
        },
        brand: {
          title: '品牌管理',
          description: '从策略定位到日常运营，帮助品牌在不同市场与渠道中保持清晰形象与统一声音。',
        },
        fnb: {
          title: '餐饮项目',
          description: '围绕咖啡馆、餐厅与生活方式场景，进行餐饮概念孵化、门店运营与品牌打造。',
        },
        advertising: {
          title: '广告投放与效果营销',
          description: '基于数据的投放策略，覆盖主流数字平台，提升获客与留存效率。',
        },
        technology: {
          title: '技术外包服务',
          description: '提供 App / Web 开发、系统集成与技术支持，由可靠的外部团队执行交付。',
        },
        consulting: {
          title: '咨询与解决方案',
          description: '为跨区域、跨行业的项目提供商业规划、市场路径与增长方案咨询。',
        },
      },
      sectionWhyTitle: '为什么选择我们',
      sectionWhySubtitle: '我们的核心优势',
      sectionWhyCategories: ['整合视角', '长期伙伴', '专业支持'],
      sectionWhyItems: [
        '多板块协同：投资、品牌、餐饮、营销与技术一体化协同。',
        '立足香港，兼具本地合规优势与全球视野。',
        '重视落地执行，从策略设计到实际运营全程跟进。',
      ],
      sectionCtaTitle: '欢迎与我们聊一聊你的下一个项目',
      sectionCtaBody: '无论是筹备新的餐饮品牌、升级现有品牌形象，还是规划出海投放与技术搭建，我们都可以一起讨论合适的路径与节奏。',
      sectionCtaButton: '联系 Jackie Chen 集团',
    },
    services: {
      title: '我们的服务',
      introTitle: '我们能为您做什么',
      introBody: 'Jackie Chen 集团提供覆盖投资、品牌管理、餐饮项目、数字广告投放、技术外包与商业咨询的多板块综合服务体系，从策略设计到落地执行全程支持。',
      items: {
        investment: {
          title: '投资',
          content: '股权投资、项目投资与长期价值策略，注重稳健回报、风险控制与可扩展性的商业机会。',
        },
        brand: {
          title: '品牌管理',
          content: '品牌策略、定位、视觉体系、内容体系与品牌日常管理，帮助品牌在不同区域保持一致形象。',
        },
        fnb: {
          title: '餐饮项目',
          content: '餐饮概念打造、门店运营、菜单设计、空间体验与生活方式类品牌打造。',
        },
        ads: {
          title: '广告投放与效果营销',
          content: '覆盖 Meta、Google、TikTok 等平台的效果广告投放，以更优成本获取用户并提升留存。',
        },
        tech: {
          title: '技术外包服务',
          content: 'App / Web 开发、系统集成、运维更新、技术支持，由可靠的外包团队交付执行。',
        },
        consulting: {
          title: '咨询与解决方案',
          content: '商业规划、市场路径、增长模型与多区域扩张咨询，为不同阶段的企业制定可落地方案。',
        },
      },
      whyTitle: '为什么选择我们',
      why1: '多板块协同：投资、品牌、餐饮、营销与技术一体化能力。',
      why2: '立足香港，具备合规优势与全球视野。',
      why3: '从策略到落地执行，全周期支持。',
      ctaTitle: '准备好与 Jackie Chen 集团合作了吗？',
      ctaSubtitle: '联系我们的团队讨论您的需求。',
      ctaButton: '联系我们',
    },
    cases: {
      title: '案例与项目',
      subtitle: '以下案例涵盖投资、品牌、餐饮、广告、技术与咨询等不同板块，用于展示我们如何与合作伙伴一起思考、执行并创造长期价值。',
      filter: {
        all: '全部',
        investment: '投资',
        brand: '品牌',
        fnb: '餐饮',
        ads: '广告',
        tech: '技术',
        consulting: '咨询',
      },
      items: {
        fnbCafe: {
          title: '餐饮概念：精品咖啡品牌',
          category: '餐饮',
          industry: '咖啡 / 生活方式',
          summary: '从概念到落地：定位、品牌形象、门店体验到开业营销的一体化支持。',
          result: '顺利开业，首月客流与社交媒体曝光表现良好。',
        },
        brandRefresh: {
          title: '消费品牌升级与焕新',
          category: '品牌',
          industry: '消费品',
          summary: '为成熟品牌进行重新定位与视觉升级，以更好触达年轻客群。',
          result: '品牌认知度提升，数字广告投放表现改善。',
        },
        adsCampaign: {
          title: '线上服务的效果广告投放',
          category: '广告',
          industry: '线上服务',
          summary: '基于 Meta、Google 与 TikTok 等平台的全链路投放，帮助线上平台持续获取新用户。',
          result: '获客成本优化，在稳定回报基础上逐步放量。',
        },
        techApp: {
          title: 'App 开发与技术支持',
          category: '技术',
          industry: '移动应用',
          summary: '由外部团队负责移动应用开发与维护，持续功能迭代与技术支持。',
          result: '版本稳定迭代，减轻内部团队压力，加快产品上线节奏。',
        },
        investmentProject: {
          title: '战略投资与综合支持',
          category: '投资',
          industry: '早期项目',
          summary: '在提供资金支持的同时，配合品牌、运营与增长节奏的综合辅导。',
          result: '明确发展路径与节奏，提升项目可扩展性。',
        },
        consultingEntry: {
          title: '咨询项目：市场进入规划',
          category: '咨询',
          industry: '跨境业务',
          summary: '协助客户评估并规划目标市场进入路径，包括商业模式、定位与营销策略。',
          result: '形成结构化方案，分阶段执行，降低试错成本。',
        },
      },
      moreNote: '更多详细案例可在一对一沟通中进一步分享。',
      contactButton: '联系我们了解更多',
    },
    contact: {
      title: '联系我们',
      subtitle: '简单介绍一下您的项目，我们会尽快与您取得联系。',
      form: {
        title: '在线留言',
        companyLabel: '公司名称',
        nameLabel: '联系人姓名',
        emailLabel: '邮箱',
        phoneLabel: 'WhatsApp / 电话（可选）',
        budgetLabel: '预估预算',
        budgetPlaceholder: '请选择预算范围',
        budgetOptions: {
          small: '1万美金以下',
          medium: '1万–5万美金',
          large: '5万–20万美金',
          custom: '待沟通',
        },
        messageLabel: '项目 / 需求简要说明',
        messagePlaceholder: '请简单描述您的项目背景、时间规划以及希望达成的目标。',
        submit: '提交',
        success: '感谢您的留言，我们已收到信息，会尽快与您取得联系。',
        error: '提交出现问题，请稍后再试。',
      },
      info: {
        title: '公司信息',
        companyName: 'Jackie Chen Group Limited',
        region: '公司注册地：香港',
        email: 'Jackie.chen.hk@outlook.com',
        emailLabel: '邮箱',
        addressLabel: '地址',
        addressPlaceholder: '香港尖沙咀亚士厘道 34 號天星大厦 12 樓 A 7 室',
        channelsTitle: '其他联系方式',
        channelsDesc: '您也可以通过聊天工具与我们联系，后续可在此展示二维码或联系方式。',
        qrPlaceholder: '二维码占位',
        mapPlaceholder: '地图 / 位置占位',
      },
      more: {
        ctaTitle: '想直接沟通项目？',
        ctaBody: '欢迎在留言中提供更多项目信息，我们可以安排电话或线上会议进一步沟通。',
      },
    },
    about: {
      title: '关于我们',
      heroTitle: '关于 Jackie Chen 集团',
      heroSubtitle: 'Jackie Chen 集团是一家立足香港的综合平台，结合投资、品牌管理、餐饮项目、广告投放、技术外包与商业咨询，为项目提供长期、可持续的成长支持。',
      sectionWhoTitle: '我们是谁',
      sectionWhoBody: '我们连接资本、品牌、运营与数字能力，服务对象涵盖早期项目、成熟品牌以及希望寻找长期合作伙伴的跨境业务。我们既关注顶层策略，也重视细节落地。',
      sectionMissionTitle: '我们的使命',
      sectionMissionBody: '通过兼顾投资纪律、品牌思维、餐饮经验与数字增长能力，成为创业者、运营者与品牌方值得长期信任的合作伙伴。',
      sectionVisionTitle: '我们的愿景',
      sectionVisionBody: '搭建一个灵活的多市场平台，持续孵化、升级与支持不同阶段、不同赛道的项目。',
      sectionApproachTitle: '我们的工作方式',
      sectionApproachItems: [
        {
          title: '多维度思考',
          body: '从资本、品牌、产品、运营与营销等多个维度综合评估项目，而不是只看单一指标。',
        },
        {
          title: '策略 + 执行',
          body: '不仅参与方案设计，也深入关注日常执行、数据反馈与节奏把控。',
        },
        {
          title: '长期视角',
          body: '更重视品牌与资产在时间维度上的累积，而不是一次性的短期冲刺。',
        },
      ],
      sectionFocusTitle: '重点关注领域',
      sectionFocusIntro: '目前，Jackie Chen 集团主要聚焦于我们更具经验与资源优势的几个方向：',
      sectionFocusItems: {
        investment: '投资：项目投资与股权投资，并提供策略与运营层面的综合支持。',
        brand: '品牌管理：定位、视觉、内容与品牌资产的中长期建设。',
        fnb: '餐饮项目：围绕咖啡馆、餐厅与生活方式空间进行打造与运营。',
        ads: '广告与增长：为数字渠道提供效果广告投放与整体 Campaign 规划。',
        tech: '技术外包：由外部团队完成开发、集成与技术支持。',
        consulting: '咨询：为跨市场项目提供结构化思考、规划与路径设计。',
      },
      sectionStatsTitle: '关键信息',
      sectionStatsMarkets: '覆盖市场',
      sectionStatsDomains: '业务板块',
      sectionStatsBase: '立足香港',
      sectionCtaTitle: '寻找长期合作伙伴？',
      sectionCtaBody: '如果你正在打造品牌、筹备餐饮项目、搭建数字平台或规划跨境业务，欢迎与我们交流如何协同合作。',
      sectionCtaButton: '与 Jackie Chen 集团洽谈',
    },
    news: {
      title: '新闻与洞察',
      subtitle: '围绕投资、品牌、餐饮与数字增长，分享 Jackie Chen 集团的一些动态与思考片段。',
      filter: {
        all: '全部',
        group: '集团动态',
        insights: '观点洞察',
        fnb: '餐饮相关',
        investment: '投资相关',
      },
      moreNote: '此处仅展示部分可公开的信息，更具体的内容可以在一对一沟通中进一步交流。',
      posts: {
        fnbConcept: {
          title: '餐饮笔记：如何打磨一家咖啡品牌',
          category: '餐饮',
          type: '观点洞察',
        },
        brandPositioning: {
          title: '跨市场项目的品牌定位思路',
          category: '品牌',
          type: '观点洞察',
        },
        groupUpdate: {
          title: 'Jackie Chen 集团的平台与聚焦方向',
          category: '集团动态',
          type: '集团动态',
        },
        performanceNotes: {
          title: '效果广告：不要只看短期数据',
          category: '广告',
          type: '观点洞察',
        },
        techOutsourcing: {
          title: '什么时候适合采用技术外包？',
          category: '技术',
          type: '观点洞察',
        },
      },
      post: {
        readMore: '阅读全文',
        backToList: '返回新闻列表',
        publishedOn: '发布时间',
        categoryLabel: '分类',
        typeLabel: '类型',
      },
    },
    pages: {
      home: {
        title: '欢迎来到 Jackie Chen 集团',
        placeholder: '这是首页占位内容。',
      },
      about: {
        title: '关于我们',
        placeholder: '这是关于我们页面的占位内容。',
      },
      services: {
        title: '我们的服务',
        placeholder: '这是服务页面的占位内容。',
      },
      cases: {
        title: '案例研究',
        placeholder: '这是案例研究页面的占位内容。',
      },
      news: {
        title: '新闻与博客',
        placeholder: '这是新闻页面的占位内容。',
      },
      contact: {
        title: '联系我们',
        placeholder: '这是联系我们页面的占位内容。',
      },
      privacy: {
        title: '隐私政策',
        placeholder: '这是隐私政策页面的占位内容。',
      },
      terms: {
        title: '服务条款',
        placeholder: '这是服务条款页面的占位内容。',
      },
    },
    companyName: 'Jackie Chen Group Limited',
  },
};
