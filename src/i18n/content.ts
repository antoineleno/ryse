export type Lang = 'en' | 'fr'

export type Content = {
  brand: { name: string; tagline: string; footer: string }
  nav: { id: string; label: string }[]
  contactCta: string
  explore: string
  footer: {
    blurb: string
    firm: string
    practice: string
    connect: string
    offices: string
    email: string
    rights: string
    region: string
    officeLines: string[]
  }
  home: {
    practiceLabel: string
    practiceTitle: string
    practiceBody: string
    practiceTags: string[]
    listeningLabel: string
    listeningTitle: string
    listeningBody: string
    listeningSteps: { num: string; title: string; body: string }[]
    listeningCta: string
    pillarsLabel: string
    pillarsTitle: string
    pillarsBody: string
    pillarsCta: string
    pillars: { num: string; title: string; body: string }[]
    projectLabel: string
    projectTitle: string
    projectBody: string
    projectCta: string
    boardLabel: string
    boardTitle: string
    boardBody: string
    boardCta: string
    placesLabel: string
    placesTitle: string
    placesBody: string
    whereLabel: string
    corridorWest: string
    sectorsLabel: string
    sectorsTitle: string
    sectorCards: { title: string; body: string; image: string }[]
    ctaTalk: string
    ctaExpertsTitle: string
    ctaExpertsAction: string
    ctaTitle: string
    ctaBody: string
    closeLabel: string
    closeTitle: string
    closeBody: string
    momentsLabel: string
    momentsTitle: string
    momentsBody: string
    moments: { num: string; title: string; image: string }[]
    insightsLabel: string
    insightsTitle: string
    insightsBody: string
    insights: { title: string; image: string; href: string }[]
    mapLabel: string
    mapTitle: string
    mapBody: string
    mapStats: { label: string; value: string }[]
  }
  hero: {
    eyebrow: string
    title: string
    titleLines: string[]
    body: string
    primary: string
    secondary: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    storyLabel: string
    storyTitle: string
    body: string
    body2: string
    purposeLabel: string
    purposeTitle: string
    missionLabel: string
    missionTitle: string
    missionBody: string
    visionLabel: string
    visionTitle: string
    visionBody: string
    networkLabel: string
    networkTitle: string
    networkBody: string
    networkCta: string
    valuesLabel: string
    valuesTitle: string
    values: { title: string; body: string }[]
    whyLabel: string
    whyTitle: string
    whyBody: string
    whyKeywords: string[]
  }
  expertise: {
    eyebrow: string
    title: string
    titleLines: string[]
    subtitle: string
    leadingLabel: string
    leadingTitle: string
    leadingBody: string
    govTitle: string
    govBody: string
    privateTitle: string
    privateBody: string
    whereHelpLabel: string
    whereHelp: { title: string; body: string }[]
    practicesLabel: string
    practicesTitle: string
    practices: { title: string; body: string }[]
    clientsLabel: string
    clientsTitle: string
    clientsBody: string
    clientTypes: string[]
  }
  sectors: {
    eyebrow: string
    title: string
    subtitle: string
    learnMore: string
    items: { title: string; body: string; image: string; prompt: string }[]
    enablersLabel: string
    enablersTitle: string
    technology: { title: string; body: string }
    finance: { title: string; body: string }
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    featured: {
      tag: string
      title: string
      body: string[]
      meta: { label: string; value: string }[]
    }
  }
  where: {
    eyebrow: string
    title: string
    subtitle: string
    locations: { name: string; meta: string; body: string; image: string }[]
  }
  board: {
    eyebrow: string
    title: string
    subtitle: string
    members: {
      name: string
      role: string
      image: string
      bio: string
      highlights: string[]
    }[]
  }
  experts: {
    eyebrow: string
    title: string
    subtitle: string
    fields: {
      fullName: string
      email: string
      phone: string
      linkedin: string
      mainField: string
      years: string
      countries: string
      cv: string
      consent: string
      submit: string
      choose: string
      cvHint: string
      countriesPlaceholder: string
      success: string
    }
    fieldOptions: string[]
    yearOptions: string[]
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    whereLabel: string
    whereValue: string
    officesLabel: string
    officesValue: string
    fields: {
      name: string
      organisation: string
      email: string
      phone: string
      industry: string
      subject: string
      objectives: string
      submit: string
      note: string
      choose: string
      success: string
    }
    industries: string[]
    subjects: string[]
  }
}

export const content: Record<Lang, Content> = {
  en: {
    brand: {
      name: 'RYSE',
      tagline: 'Strategy & Foresight',
      footer:
        '© 2026 RYSE & Co. All rights reserved. · West Africa · Offices in Conakry and Lomé',
    },
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'sectors', label: 'Sectors' },
      { id: 'projects', label: 'Projects' },
      { id: 'experts', label: 'Experts' },
    ],
    contactCta: 'Contact',
    explore: 'Explore',
    footer: {
      blurb:
        'Strategic advisory and international cooperation across West Africa, from political decision making to delivery on the ground.',
      firm: 'The firm',
      practice: 'Our work',
      connect: 'Connect',
      offices: 'Offices',
      email: 'Email',
      rights: '© 2026 RYSE & Co. All rights reserved.',
      region: 'West Africa · Conakry · Lomé',
      officeLines: ['Conakry, Guinea', 'Lomé, Togo'],
    },
    home: {
      practiceLabel: 'Leading practice',
      practiceTitle: 'Political advisory & policy making.',
      practiceBody:
        'Our advice is shaped from inside government. Our leadership has served at the Presidency, in ministries, in Parliament and alongside international institutions.',
      practiceTags: ['Political strategy', 'Public policy', 'Reform'],
      listeningLabel: 'Our approach',
      listeningTitle: 'Advice that begins with understanding.',
      listeningBody:
        'Every mandate starts with a question that matters. We listen first, read the context carefully, then stay until decisions become delivery.',
      listeningSteps: [
        {
          num: '01',
          title: 'Understand',
          body: 'Your goals, constraints and what success must look like.',
        },
        {
          num: '02',
          title: 'Assess',
          body: 'A clear reading of the political and institutional landscape.',
        },
        {
          num: '03',
          title: 'Execute',
          body: 'Relationships and delivery that hold as conditions change.',
        },
      ],
      listeningCta: 'Explore our approach',
      pillarsLabel: 'Our focus',
      pillarsTitle: 'Impact is more than a mandate.',
      pillarsBody:
        'We concentrate on the arenas where political judgment, institutional access and delivery on the ground decide whether a project advances.',
      pillarsCta: 'Explore our sectors',
      pillars: [
        {
          num: '01',
          title: 'Political advisory',
          body: 'Policy, reform and institutional strategy at the highest level.',
        },
        {
          num: '02',
          title: 'Extractive industries',
          body: 'Align investors, the State and communities around durable outcomes.',
        },
        {
          num: '03',
          title: 'Energy & climate',
          body: 'Access, transition and partnerships for sustainable power.',
        },
        {
          num: '04',
          title: 'Security & defence',
          body: 'Institutional cooperation that underpins lasting investment.',
        },
        {
          num: '05',
          title: 'Technology & finance',
          body: 'The levers that turn ambition into workable programmes.',
        },
      ],
      mapLabel: 'On the ground',
      mapTitle: 'Real mandates. Lasting impact.',
      mapBody:
        'From Conakry to Lomé, we structure the relationships and decisions that move projects forward.',
      mapStats: [
        { label: 'Offices', value: 'Conakry · Lomé' },
        { label: 'Reach', value: 'West Africa' },
        { label: 'Focus', value: 'Policy to delivery' },
      ],
      projectLabel: 'Featured partnership',
      projectTitle: 'Partnerships that build.',
      projectBody:
        'Our mandates take shape on the ground, alongside partners who share our ambition for West Africa.',
      projectCta: 'View the project',
      boardLabel: 'Our Board',
      boardTitle: 'Governance shaped by the field.',
      boardBody:
        'Experience at the heart of government, Parliament, industry and international institutions, brought to every mandate.',
      boardCta: 'Meet the board',
      placesLabel: 'Presence',
      placesTitle: 'Present where the decisions are made.',
      placesBody:
        'From Conakry and Lomé, we support clients across West Africa with local grounding and regional reach.',
      whereLabel: 'Offices',
      corridorWest: 'West Africa',
      sectorsLabel: 'Sectors',
      sectorsTitle: 'Where transformation happens.',
      sectorCards: [
        {
          title: 'Extractive industries',
          body: 'Mining and hydrocarbons, between investors, the State and communities.',
          image: '/media/sector-extractive.jpg',
        },
        {
          title: 'Energy & climate',
          body: 'Energy access, the transition and climate resilience.',
          image: '/media/sector-energy.jpg',
        },
        {
          title: 'Security & defence',
          body: 'Institutional cooperation in support of stability.',
          image: '/media/sector-security.jpg',
        },
        {
          title: 'Technology & finance',
          body: 'The levers that make each project possible.',
          image: '/media/expertise-policy.jpg',
        },
      ],
      ctaTalk: 'Talk to our team',
      ctaExpertsTitle: 'Join our network of experts.',
      ctaExpertsAction: 'Apply to join',
      ctaTitle: 'Ready to shape your next move in West Africa?',
      ctaBody:
        'From political strategy to partnerships and investment, let’s discuss what you want to achieve.',
      closeLabel: 'Next step',
      closeTitle: 'Plan with the region in mind.',
      closeBody: 'Start with a conversation. Build from there.',
      momentsLabel: 'Outcomes',
      momentsTitle: 'More than strategy. Real regional progress.',
      momentsBody:
        'Each mandate leaves a trace: a market opened, a partnership secured, a dialogue that holds when conditions shift.',
      moments: [
        {
          num: '01',
          title: 'Market entry',
          image: '/media/guinea.jpg',
        },
        {
          num: '02',
          title: 'Energy partnerships',
          image: '/media/sector-energy.jpg',
        },
        {
          num: '03',
          title: 'Institutional dialogue',
          image: '/media/expertise-policy.jpg',
        },
        {
          num: '04',
          title: 'Cross border cooperation',
          image: '/media/togo.jpg',
        },
      ],
      insightsLabel: 'Perspectives',
      insightsTitle: 'Clarity for complex environments.',
      insightsBody:
        'Short readings from our practice, for clients navigating political, sector and partnership questions across West Africa.',
      insights: [
        {
          title: 'From policy to delivery',
          image: '/media/expertise-policy.jpg',
          href: '/expertise',
        },
        {
          title: 'Where transformation happens',
          image: '/media/sector-extractive.jpg',
          href: '/sectors',
        },
        {
          title: 'Partnerships that build',
          image: '/media/project-energy.jpg',
          href: '/projects',
        },
      ],
    },
    hero: {
      eyebrow: 'Political advisory · International cooperation',
      title: 'Strategic Vision. Meaningful Connections. Lasting Impact.',
      titleLines: [
        'Strategic Vision.',
        'Meaningful Connections.',
        'Lasting Impact.',
      ],
      body: 'Thoughtful strategic advice for the decisions that shape West Africa’s next decade, and the partnerships that endure beyond it.',
      primary: 'Book a conversation',
      secondary: 'Explore our approach',
    },
    about: {
      eyebrow: 'About RYSE',
      title: 'A strategic partner for a changing world.',
      intro:
        'RYSE is a strategic advisory and international cooperation firm operating in Guinea and Togo, with a regional outlook across West Africa.',
      storyLabel: 'Our Story',
      storyTitle: 'Clarity before action.',
      body: 'Africa offers significant opportunities. Realising them takes strategic clarity, trusted relationships, a real understanding of context and the ability to execute.',
      body2:
        'We work where political decision making, international cooperation, institutional engagement and delivery meet, helping our clients move forward with confidence.',
      purposeLabel: 'Purpose',
      purposeTitle: 'Mission and vision.',
      missionLabel: 'Mission',
      missionTitle: 'Connect international ambition with local opportunity.',
      missionBody:
        'Through the strategic guidance, partnerships and operational support needed to develop African markets.',
      visionLabel: 'Vision',
      visionTitle: "A trusted partner in Africa's transformation.",
      visionBody:
        'For those who want to contribute through strategic cooperation, responsible investment and lasting partnerships.',
      networkLabel: 'Our Expert Network',
      networkTitle: 'The right expertise on every mandate.',
      networkBody:
        'RYSE draws on a network of consultants and sector specialists. On every project, we bring in the team the question calls for: political and institutional advisers, and experts in mining, energy, security, technology and finance.',
      networkCta: 'Join our expert network',
      valuesLabel: 'Our Values',
      valuesTitle: 'Principles that shape every mandate.',
      values: [
        {
          title: 'Foresight',
          body: 'Anticipating change and looking beyond the immediate horizon.',
        },
        {
          title: 'Rigour',
          body: 'Sound judgement and high standards in every engagement.',
        },
        {
          title: 'Trust',
          body: 'Discretion, integrity and consistent delivery.',
        },
        {
          title: 'Impact',
          body: 'Lasting value for our clients and the region.',
        },
      ],
      whyLabel: 'Why RYSE',
      whyTitle:
        'Local understanding. International perspective. Strategic execution.',
      whyBody:
        'Entering a market or launching a cross border initiative takes more than information. It takes the ability to interpret it, to understand the people and institutions involved, and to choose the right way forward. Our aim is to make complex environments readable and opportunities actionable.',
      whyKeywords: ['Context', 'Connections', 'Clarity', 'Coordination'],
    },
    expertise: {
      eyebrow: 'Our Expertise',
      title: 'From policy to delivery.',
      titleLines: ['From policy.', 'To delivery.', 'On the ground.'],
      subtitle:
        'Integrated advice, from the highest level of decision making to delivery on the ground.',
      leadingLabel: 'Our Leading Practice',
      leadingTitle: 'Political advisory & policy making',
      leadingBody:
        'We work on both sides of the table: with those who design and deliver public policy, and with the companies and investors who need to understand it and engage with it.',
      govTitle: 'For governments & institutions',
      govBody:
        'We support leaders in designing and delivering public policy, reform and political strategy, and facilitate cooperation between States and with regional organisations. Our leadership has served at the Presidency, in ministries and in Parliament: we know how a decision is prepared, negotiated and carried through.',
      privateTitle: 'For companies & investors',
      privateBody:
        'We help the private sector understand how public action works, read the political context and engage with the right institutions. We support the structuring of public private partnerships, so that private projects move forward in step with the State.',
      whereHelpLabel: 'Where we help',
      whereHelp: [
        {
          title: 'Political & institutional strategy',
          body: 'We help leaders define political priorities, map institutional actors and choose a course of action that holds under pressure, from agenda setting to the alliances needed to deliver it.',
        },
        {
          title: 'Policy design',
          body: 'We turn political intent into workable policy: clarifying objectives, testing options against the local context, and drafting frameworks that can be owned and implemented by the institutions responsible.',
        },
        {
          title: 'Reform delivery',
          body: 'Reform fails in execution more often than in design. We support the sequencing, coordination and follow through that turn announced reforms into results on the ground.',
        },
        {
          title: 'Government & parliamentary relations',
          body: 'We help clients read how decisions actually move through government and parliament, identify the right counterparts, and engage them with a clear, constructive brief.',
        },
        {
          title: 'State to State and State to region cooperation',
          body: 'We facilitate dialogue and structured cooperation between States and with regional organisations, aligning interests so partnerships are practical and durable.',
        },
        {
          title: 'Public private partnerships (PPPs)',
          body: 'We support the structuring of PPPs from both sides of the table, clarifying roles, risk and process so public goals and private investment can move forward together.',
        },
        {
          title: 'Private sector advisory',
          body: 'We help private companies and investors understand how the public sector works, find the right entry points, and engage institutions in a way that opens access without missteps.',
        },
      ],
      practicesLabel: 'Our other practices',
      practicesTitle: 'Advice across the full arc of decision.',
      practices: [
        {
          title: 'Strategic advisory & foresight',
          body: 'Before acting, you need to see clearly. We help clients assess where they stand, read the political and economic shifts in the region, and choose a path to growth that will hold over time.',
        },
        {
          title: 'Market entry & operational support',
          body: 'Establishing a presence takes more than a good strategy. We stay with clients from first exploration to being fully up and running, coordinating local partners, formalities and follow through.',
        },
        {
          title: 'International cooperation & partnerships',
          body: 'Projects that last rest on the right partners. We bring together organisations, institutions and investors whose objectives align, then structure how they work together so the partnership delivers.',
        },
        {
          title: 'Institutional & stakeholder engagement',
          body: 'Every institution has its own codes and decision paths. We help clients understand them, find the right counterparts and build a constructive dialogue with them, public and private alike.',
        },
      ],
      clientsLabel: 'Who We Work With',
      clientsTitle: 'Those shaping West Africa.',
      clientsBody:
        'Governments and public institutions, international organisations, investors and companies looking for informed, structured and locally grounded engagement.',
      clientTypes: ['Governments', 'Institutions', 'Investors', 'Companies'],
    },
    sectors: {
      eyebrow: 'Our sectors of expertise',
      title: 'Where transformation happens.',
      subtitle:
        'Three strategic sectors for West Africa, carried by two levers: technology and finance.',
      learnMore: 'Learn more',
      items: [
        {
          title: 'Extractive industries',
          prompt: 'Your first step in extractive industries',
          body: 'Guinea and the wider region hold some of the world’s most sought after resources. Yet in mining and hydrocarbons, a project depends less on the deposit than on the relationship between investors, the State and communities. We help build that relationship, from dialogue with the authorities to local content and social performance.',
          image: '/media/sector-extractive.jpg',
        },
        {
          title: 'Energy & climate',
          prompt: 'Your first step in energy & climate',
          body: 'Access to energy shapes everything else: industry, jobs and public services. We support the projects and public private partnerships that extend sustainable energy, and help clients mobilise climate finance in support of resilience.',
          image: '/media/sector-energy.jpg',
        },
        {
          title: 'Security & defence',
          prompt: 'Your first step in security & defence',
          body: 'There is no lasting investment without stability. We facilitate institutional cooperation between States, dialogue on security sector governance, and the protection of the critical infrastructure the region’s economies depend on.',
          image: '/media/sector-security.jpg',
        },
      ],
      enablersLabel: 'Cross cutting enablers',
      enablersTitle: 'Enabled by technology & finance',
      technology: {
        title: 'Technology',
        body: 'Digital public services, data and tools that help institutions and projects work better.',
      },
      finance: {
        title: 'Finance',
        body: 'Investment structuring, development finance and blended finance that turn projects into reality.',
      },
    },
    projects: {
      eyebrow: 'Our Projects',
      title: 'Partnerships that build.',
      subtitle:
        'Our mandates take shape on the ground, alongside partners who share our ambition for the region.',
      featured: {
        tag: 'Energy · Togo',
        title: 'RYSE × Rensource',
        body: [
          'RYSE is partnering with Rensource Distributed Energy to set up a project company in Togo dedicated to distributed renewable energy across Francophone Africa.',
          'Rensource brings its experience as an operator; RYSE brings local grounding, the structuring of the partnership and the governance of the project company. Together, we aim to bring reliable, sustainable power closer to the region’s businesses and communities.',
        ],
        meta: [
          { label: 'Partner', value: 'Rensource Distributed Energy' },
          { label: 'Vehicle', value: 'Project company, Togo' },
          { label: 'Sector', value: 'Distributed renewable energy' },
          { label: 'Reach', value: 'Francophone Africa' },
        ],
      },
    },
    where: {
      eyebrow: 'Where We Work',
      title: 'Working across West Africa.',
      subtitle:
        'From our offices in Conakry and Lomé, we support clients across the region. Each market has its own institutions and dynamics; we help clients approach each one with the right strategy.',
      locations: [
        {
          name: 'Guinea',
          meta: 'Conakry · 9.64° N 13.58° W',
          body: 'A major market for strategic investment and institutional engagement. We help clients understand the environment and find the right counterparts.',
          image: '/media/guinea.jpg?v=5',
        },
        {
          name: 'Togo',
          meta: 'Lomé · 6.13° N 1.22° E',
          body: 'A strategic base for regional engagement and cross border relationships. We help clients read the local context and build their partnerships.',
          image: '/media/togo.jpg?v=5',
        },
      ],
    },
    board: {
      eyebrow: 'Our Board',
      title: 'Governance shaped by the field.',
      subtitle:
        'The RYSE board brings experience gained at the heart of government, Parliament, industry and international institutions.',
      members: [
        {
          name: 'Zeinab Camara',
          role: 'Non Executive Board Member',
          image: '/media/zeinab-camara.jpg',
          bio: 'A senior executive and political strategist, Zeinab Camara has built her career where public decision making, international business and institutional transformation in Africa meet. She has worked alongside two Presidents, a Prime Minister and a President of the National Assembly.',
          highlights: [
            'Country Director, Tony Blair Institute for Global Change, Togo',
            'Senior Manager, Communities & Social Performance, Rio Tinto (Simandou)',
            'Presidency of Guinea, Ministry of Higher Education, and Member of Parliament for Boffa',
            'Founder and First President, Women in Mining Guinea',
          ],
        },
        {
          name: 'David S. Edoh',
          role: 'Board Member',
          image: '/media/david-edoh.jpg',
          bio: 'A lawyer and entrepreneur based in Lomé, David S. Edoh has more than twenty years of experience in management and the delivery of energy infrastructure. He founded and has led three companies in Togo and Benin, carrying out electrical works and engineering services for the national utilities CEET and SBEE, alongside contractors such as SDEL ELEXA (VINCI Energies) and AEE Power, on programmes financed by the World Bank, the AFD, the European Union and KfW.',
          highlights: [
            'Founder and CEO, ETS (Energies Technologies & Solutions) and AXELEC (Axe Electrique), Togo',
            'Founder, ENERTECH, electrical works, Benin',
            'Board Member, Togo renewable energy project company with Rensource',
            '20+ years in management and infrastructure delivery',
          ],
        },
      ],
    },
    experts: {
      eyebrow: 'Join Our Expert Network',
      title: 'Bring your expertise to our mandates.',
      subtitle:
        'RYSE draws on a network of recognised consultants and specialists. Share your profile and we will contact you when an assignment matches your expertise.',
      fields: {
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn Profile',
        mainField: 'Main Field',
        years: 'Years of Experience',
        countries: 'Countries of Experience',
        cv: 'CV',
        consent:
          'I agree that RYSE may keep my details and CV to contact me about assignments.',
        submit: 'Send my application',
        choose: 'Choose',
        cvHint: 'PDF or Word, 8 MB maximum',
        countriesPlaceholder: 'e.g. Guinea, Togo, Senegal',
        success: 'Thank you. Your application has been sent.',
      },
      fieldOptions: [
        'Political advisory',
        'Mining & extractives',
        'Energy & climate',
        'Security & defence',
        'Technology',
        'Finance',
        'Other',
      ],
      yearOptions: ['1 to 3', '4 to 7', '8 to 12', '13 to 20', '20+'],
    },
    contact: {
      eyebrow: "Let's start a conversation",
      title: 'Your next opportunity begins with the right perspective.',
      subtitle:
        'Whether you are exploring a new market, preparing a reform or looking for a partner, let’s talk about your objectives in West Africa.',
      whereLabel: 'Where we work',
      whereValue: 'West Africa',
      officesLabel: 'Offices',
      officesValue: 'Conakry, Guinea · Lomé, Togo',
      fields: {
        name: 'Name',
        organisation: 'Organisation',
        email: 'Email',
        phone: 'Phone',
        industry: 'Industry',
        subject: 'Subject',
        objectives: 'Your Objectives',
        submit: 'Send',
        note: 'Enquiries are handled in confidence.',
        choose: 'Choose',
        success: 'Thank you. Your message is ready. We will respond shortly.',
      },
      industries: [
        'Government / Public sector',
        'Extractive industries',
        'Energy & climate',
        'Security & defence',
        'Finance & investment',
        'Technology',
        'Other',
      ],
      subjects: [
        'Market entry',
        'Political advisory',
        'Partnership structuring',
        'Project support',
        'General enquiry',
      ],
    },
  },
  fr: {
    brand: {
      name: 'RYSE',
      tagline: 'Stratégie & Prospective',
      footer:
        '© 2026 RYSE & Co. Tous droits réservés. · Afrique de l’Ouest · Bureaux à Conakry et Lomé',
    },
    nav: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'sectors', label: 'Secteurs' },
      { id: 'projects', label: 'Projets' },
      { id: 'experts', label: 'Experts' },
    ],
    contactCta: 'Contact',
    explore: 'Découvrir',
    footer: {
      blurb:
        'Conseil stratégique et coopération internationale en Afrique de l’Ouest, de la décision politique à la mise en œuvre sur le terrain.',
      firm: 'Le cabinet',
      practice: 'Notre métier',
      connect: 'Nous écrire',
      offices: 'Bureaux',
      email: 'Email',
      rights: '© 2026 RYSE & Co. Tous droits réservés.',
      region: 'Afrique de l’Ouest · Conakry · Lomé',
      officeLines: ['Conakry, Guinée', 'Lomé, Togo'],
    },
    home: {
      practiceLabel: 'Pratique phare',
      practiceTitle: 'Conseil politique & élaboration des politiques.',
      practiceBody:
        'Notre conseil est façonné de l’intérieur de l’État. Notre direction a servi à la Présidence, dans les ministères, au Parlement et aux côtés d’institutions internationales.',
      practiceTags: ['Stratégie politique', 'Politiques publiques', 'Réforme'],
      listeningLabel: 'Notre approche',
      listeningTitle: 'Un conseil qui commence par comprendre.',
      listeningBody:
        'Chaque mandat commence par une question qui compte. Nous écoutons d’abord, lisons le contexte avec rigueur, puis restons jusqu’à ce que la décision se traduise en résultats.',
      listeningSteps: [
        {
          num: '01',
          title: 'Comprendre',
          body: 'Vos objectifs, vos contraintes et ce à quoi ressemble la réussite.',
        },
        {
          num: '02',
          title: 'Évaluer',
          body: 'Une lecture claire du paysage politique et institutionnel.',
        },
        {
          num: '03',
          title: 'Exécuter',
          body: 'Des relations et une mise en œuvre qui tiennent dans la durée.',
        },
      ],
      listeningCta: 'Découvrir notre approche',
      pillarsLabel: 'Notre focus',
      pillarsTitle: 'L’impact dépasse le mandat.',
      pillarsBody:
        'Nous nous concentrons sur les domaines où le jugement politique, l’accès institutionnel et la mise en œuvre sur le terrain décident si un projet avance.',
      pillarsCta: 'Découvrir nos secteurs',
      pillars: [
        {
          num: '01',
          title: 'Conseil politique',
          body: 'Politiques, réformes et stratégie institutionnelle au plus haut niveau.',
        },
        {
          num: '02',
          title: 'Industries extractives',
          body: 'Aligner investisseurs, État et communautés autour de résultats durables.',
        },
        {
          num: '03',
          title: 'Énergie et climat',
          body: 'Accès, transition et partenariats pour une énergie durable.',
        },
        {
          num: '04',
          title: 'Sécurité et défense',
          body: 'Une coopération institutionnelle qui soutient l’investissement.',
        },
        {
          num: '05',
          title: 'Technologie et finance',
          body: 'Les leviers qui transforment l’ambition en programmes concrets.',
        },
      ],
      mapLabel: 'Sur le terrain',
      mapTitle: 'Des mandats concrets. Un impact durable.',
      mapBody:
        'De Conakry à Lomé, nous structurons les relations et les décisions qui font avancer les projets.',
      mapStats: [
        { label: 'Bureaux', value: 'Conakry · Lomé' },
        { label: 'Portée', value: 'Afrique de l’Ouest' },
        { label: 'Focus', value: 'De la politique à l’exécution' },
      ],
      projectLabel: 'Partenariat phare',
      projectTitle: 'Des partenariats qui construisent.',
      projectBody:
        'Nos mandats prennent forme sur le terrain, aux côtés de partenaires qui partagent notre ambition pour l’Afrique de l’Ouest.',
      projectCta: 'Voir le projet',
      boardLabel: 'Notre conseil',
      boardTitle: 'Une gouvernance forgée sur le terrain.',
      boardBody:
        'Une expérience acquise au cœur de l’État, du Parlement, de l’industrie et des institutions internationales, au service de chaque mandat.',
      boardCta: 'Rencontrer le conseil',
      placesLabel: 'Présence',
      placesTitle: 'Présents là où se prennent les décisions.',
      placesBody:
        'Depuis Conakry et Lomé, nous accompagnons nos clients dans toute l’Afrique de l’Ouest, avec ancrage local et portée régionale.',
      whereLabel: 'Bureaux',
      corridorWest: 'Afrique de l’Ouest',
      sectorsLabel: 'Secteurs',
      sectorsTitle: 'Là où se joue la transformation.',
      sectorCards: [
        {
          title: 'Industries extractives',
          body: 'Mines et hydrocarbures, entre investisseurs, État et communautés.',
          image: '/media/sector-extractive.jpg',
        },
        {
          title: 'Énergie & climat',
          body: 'Accès à l’énergie, transition et résilience climatique.',
          image: '/media/sector-energy.jpg',
        },
        {
          title: 'Sécurité & défense',
          body: 'Coopération institutionnelle au service de la stabilité.',
          image: '/media/sector-security.jpg',
        },
        {
          title: 'Technologie & finance',
          body: 'Les leviers qui rendent chaque projet possible.',
          image: '/media/expertise-policy.jpg',
        },
      ],
      ctaTalk: 'Échanger avec notre équipe',
      ctaExpertsTitle: 'Rejoignez notre réseau d’experts.',
      ctaExpertsAction: 'Proposer ma candidature',
      ctaTitle: 'Prêt à façonner votre prochaine étape en Afrique de l’Ouest ?',
      ctaBody:
        'De la stratégie politique aux partenariats et à l’investissement, parlons de ce que vous voulez accomplir.',
      closeLabel: 'Prochaine étape',
      closeTitle: 'Penser la région dans la durée.',
      closeBody: 'Tout commence par une conversation. Construisons à partir de là.',
      momentsLabel: 'Résultats',
      momentsTitle: 'Plus que de la stratégie. Des avancées concrètes.',
      momentsBody:
        'Chaque mandat laisse une trace : un marché ouvert, un partenariat sécurisé, un dialogue qui tient lorsque le contexte change.',
      moments: [
        {
          num: '01',
          title: 'Entrée sur le marché',
          image: '/media/guinea.jpg',
        },
        {
          num: '02',
          title: 'Partenariats énergétiques',
          image: '/media/sector-energy.jpg',
        },
        {
          num: '03',
          title: 'Dialogue institutionnel',
          image: '/media/expertise-policy.jpg',
        },
        {
          num: '04',
          title: 'Coopération transfrontalière',
          image: '/media/togo.jpg',
        },
      ],
      insightsLabel: 'Perspectives',
      insightsTitle: 'De la clarté dans des environnements complexes.',
      insightsBody:
        'De courtes lectures issues de notre pratique, pour les clients qui naviguent des questions politiques, sectorielles et de partenariat en Afrique de l’Ouest.',
      insights: [
        {
          title: 'De la décision publique à l’exécution',
          image: '/media/expertise-policy.jpg',
          href: '/expertise',
        },
        {
          title: 'Là où se joue la transformation',
          image: '/media/sector-extractive.jpg',
          href: '/sectors',
        },
        {
          title: 'Des partenariats qui construisent',
          image: '/media/project-energy.jpg',
          href: '/projects',
        },
      ],
    },
    hero: {
      eyebrow: 'Conseil politique · Coopération internationale',
      title: 'Vision stratégique. Liens durables. Impact réel.',
      titleLines: [
        'Vision stratégique.',
        'Liens durables.',
        'Impact réel.',
      ],
      body: 'Un conseil stratégique pensé pour les décisions qui façonnent la prochaine décennie en Afrique de l’Ouest, et les partenariats qui durent au delà.',
      primary: 'Réserver un échange',
      secondary: 'Découvrir notre approche',
    },
    about: {
      eyebrow: 'À propos de RYSE',
      title: 'Un partenaire stratégique dans un monde qui change.',
      intro:
        'RYSE est un cabinet de conseil stratégique et de coopération internationale implanté en Guinée et au Togo, avec une perspective régionale sur l’Afrique de l’Ouest.',
      storyLabel: 'Notre histoire',
      storyTitle: 'La clarté avant l’action.',
      body: 'L’Afrique offre des opportunités considérables. Les saisir demande une vision claire, des relations de confiance, une compréhension fine du contexte et la capacité d’exécuter.',
      body2:
        'Nous intervenons là où se rencontrent la décision politique, la coopération internationale, le dialogue institutionnel et la mise en œuvre, pour aider nos clients à avancer avec assurance.',
      purposeLabel: 'Raison d’être',
      purposeTitle: 'Mission et vision.',
      missionLabel: 'Mission',
      missionTitle:
        'Relier l’ambition internationale à l’opportunité locale.',
      missionBody:
        'Par l’accompagnement stratégique, les partenariats et le soutien opérationnel nécessaires au développement des marchés africains.',
      visionLabel: 'Vision',
      visionTitle: 'Un partenaire de confiance dans la transformation africaine.',
      visionBody:
        'Pour ceux qui souhaitent contribuer par la coopération stratégique, l’investissement responsable et des partenariats durables.',
      networkLabel: 'Notre réseau d’experts',
      networkTitle: 'La bonne expertise sur chaque mandat.',
      networkBody:
        'RYSE s’appuie sur un réseau de consultants et de spécialistes sectoriels. Sur chaque projet, nous constituons l’équipe que la question appelle : conseillers politiques et institutionnels, et experts en mines, énergie, sécurité, technologie et finance.',
      networkCta: 'Rejoindre notre réseau d’experts',
      valuesLabel: 'Nos valeurs',
      valuesTitle: 'Des principes qui guident chaque mandat.',
      values: [
        {
          title: 'Prospective',
          body: 'Anticiper le changement et regarder au delà de l’horizon immédiat.',
        },
        {
          title: 'Rigueur',
          body: 'Jugement sûr et exigences élevées à chaque mission.',
        },
        {
          title: 'Confiance',
          body: 'Discrétion, intégrité et constance dans la livraison.',
        },
        {
          title: 'Impact',
          body: 'Une valeur durable pour nos clients et pour la région.',
        },
      ],
      whyLabel: 'Pourquoi RYSE',
      whyTitle:
        'Compréhension locale. Perspective internationale. Exécution stratégique.',
      whyBody:
        'Entrer sur un marché ou lancer une initiative transfrontalière demande plus que de l’information. Il faut savoir l’interpréter, comprendre les acteurs et les institutions concernés, et choisir la bonne voie. Notre objectif : rendre lisibles les environnements complexes et actionnables les opportunités.',
      whyKeywords: ['Contexte', 'Connexions', 'Clarté', 'Coordination'],
    },
    expertise: {
      eyebrow: 'Notre expertise',
      title: 'De la décision publique à l’exécution.',
      titleLines: ['De la décision.', 'À l’exécution.', 'Sur le terrain.'],
      subtitle:
        'Un conseil intégré, du plus haut niveau de la décision jusqu’à la mise en œuvre sur le terrain.',
      leadingLabel: 'Notre premier atout',
      leadingTitle: 'Conseil politique et élaboration des politiques publiques',
      leadingBody:
        'Nous travaillons des deux côtés de la table : avec ceux qui conçoivent et mettent en œuvre l’action publique, et avec les entreprises et investisseurs qui doivent la comprendre et s’y engager.',
      govTitle: 'Pour les gouvernements & institutions',
      govBody:
        'Nous accompagnons les dirigeants dans la conception et la mise en œuvre des politiques publiques, des réformes et de la stratégie politique, et facilitons la coopération entre États et avec les organisations régionales. Notre direction a servi à la Présidence, dans les ministères et au Parlement : nous savons comment une décision se prépare, se négocie et se conduit.',
      privateTitle: 'Pour les entreprises & investisseurs',
      privateBody:
        'Nous aidons le secteur privé à comprendre le fonctionnement de l’action publique, à lire le contexte politique et à engager les bonnes institutions. Nous accompagnons la structuration de partenariats public privé, pour que les projets privés avancent au rythme de l’État.',
      whereHelpLabel: 'Où nous intervenons',
      whereHelp: [
        {
          title: 'Stratégie politique et institutionnelle',
          body: 'Nous aidons les dirigeants à fixer des priorités politiques, cartographier les acteurs institutionnels et choisir une ligne d’action qui tient sous pression, de la fixation de l’agenda aux alliances nécessaires pour la délivrer.',
        },
        {
          title: 'Conception des politiques publiques',
          body: 'Nous transformons l’intention politique en politique opérationnelle : clarifier les objectifs, tester les options dans le contexte local, et rédiger des cadres que les institutions responsables peuvent s’approprier et mettre en œuvre.',
        },
        {
          title: 'Conduite des réformes',
          body: 'Les réformes échouent plus souvent dans l’exécution que dans la conception. Nous accompagnons le séquençage, la coordination et le suivi qui transforment les annonces en résultats concrets.',
        },
        {
          title: 'Relations gouvernementales et parlementaires',
          body: 'Nous aidons nos clients à comprendre comment les décisions avancent réellement au sein du gouvernement et du parlement, à identifier les bons interlocuteurs, et à les engager avec un dossier clair et constructif.',
        },
        {
          title: 'Coopération État à État et État à région',
          body: 'Nous facilitons le dialogue et une coopération structurée entre États et avec les organisations régionales, en alignant les intérêts pour des partenariats pratiques et durables.',
        },
        {
          title: 'Partenariats public privé (PPP)',
          body: 'Nous accompagnons la structuration des PPP des deux côtés de la table, en clarifiant rôles, risques et process pour que les objectifs publics et l’investissement privé avancent ensemble.',
        },
        {
          title: 'Conseil au secteur privé',
          body: 'Nous aidons les entreprises et les investisseurs à comprendre le fonctionnement du secteur public, à trouver les bons points d’entrée, et à engager les institutions sans faux pas.',
        },
      ],
      practicesLabel: 'Nos autres pratiques',
      practicesTitle: 'Un conseil sur tout l’arc de la décision.',
      practices: [
        {
          title: 'Conseil stratégique & prospective',
          body: 'Avant d’agir, il faut voir clair. Nous aidons nos clients à évaluer leur position, à lire les évolutions politiques et économiques de la région, et à choisir une trajectoire de croissance durable.',
        },
        {
          title: 'Entrée sur le marché & soutien opérationnel',
          body: 'S’implanter demande plus qu’une bonne stratégie. Nous accompagnons nos clients de la première exploration jusqu’à la pleine opérationnalité, en coordonnant partenaires locaux, formalités et suivi.',
        },
        {
          title: 'Coopération internationale & partenariats',
          body: 'Les projets durables reposent sur les bons partenaires. Nous réunissons organisations, institutions et investisseurs aux objectifs alignés, puis structurons leur collaboration pour que le partenariat produise.',
        },
        {
          title: 'Engagement institutionnel & parties prenantes',
          body: 'Chaque institution a ses codes et ses chemins de décision. Nous aidons nos clients à les comprendre, à trouver les bons interlocuteurs et à construire un dialogue constructif, public comme privé.',
        },
      ],
      clientsLabel: 'Avec qui nous travaillons',
      clientsTitle: 'Ceux qui façonnent l’Afrique de l’Ouest.',
      clientsBody:
        'Gouvernements et institutions publiques, organisations internationales, investisseurs et entreprises en quête d’un engagement informé, structuré et ancré localement.',
      clientTypes: ['Gouvernements', 'Institutions', 'Investisseurs', 'Entreprises'],
    },
    sectors: {
      eyebrow: 'Nos secteurs d’expertise',
      title: 'Là où se joue la transformation.',
      subtitle:
        'Trois secteurs stratégiques pour l’Afrique de l’Ouest, portés par deux leviers : la technologie et la finance.',
      learnMore: 'En savoir plus',
      items: [
        {
          title: 'Industries extractives',
          prompt: 'Votre premier pas dans les industries extractives',
          body: 'La Guinée et la région détiennent certaines des ressources les plus recherchées au monde. Pourtant, dans les mines et les hydrocarbures, un projet dépend moins du gisement que de la relation entre investisseurs, État et communautés. Nous aidons à construire cette relation, du dialogue avec les autorités au contenu local et à la performance sociale.',
          image: '/media/sector-extractive.jpg',
        },
        {
          title: 'Énergie & climat',
          prompt: 'Votre premier pas dans l’énergie & le climat',
          body: 'L’accès à l’énergie conditionne tout le reste : industrie, emplois et services publics. Nous soutenons les projets et partenariats public privé qui étendent l’énergie durable, et aidons nos clients à mobiliser la finance climat au service de la résilience.',
          image: '/media/sector-energy.jpg',
        },
        {
          title: 'Sécurité & défense',
          prompt: 'Votre premier pas dans la sécurité & la défense',
          body: 'Il n’y a pas d’investissement durable sans stabilité. Nous facilitons la coopération institutionnelle entre États, le dialogue sur la gouvernance du secteur de la sécurité, et la protection des infrastructures critiques dont dépendent les économies de la région.',
          image: '/media/sector-security.jpg',
        },
      ],
      enablersLabel: 'Leviers transverses',
      enablersTitle: 'Portés par la technologie & la finance',
      technology: {
        title: 'Technologie',
        body: 'Services publics numériques, données et outils qui aident institutions et projets à mieux fonctionner.',
      },
      finance: {
        title: 'Finance',
        body: 'Structuration d’investissements, finance du développement et blended finance qui transforment les projets en réalité.',
      },
    },
    projects: {
      eyebrow: 'Nos projets',
      title: 'Des partenariats qui construisent.',
      subtitle:
        'Nos mandats prennent forme sur le terrain, aux côtés de partenaires qui partagent notre ambition pour la région.',
      featured: {
        tag: 'Énergie · Togo',
        title: 'RYSE × Rensource',
        body: [
          'RYSE s’associe à Rensource Distributed Energy pour créer une société de projet au Togo dédiée à l’énergie renouvelable distribuée en Afrique francophone.',
          'Rensource apporte son expérience d’opérateur ; RYSE apporte l’ancrage local, la structuration du partenariat et la gouvernance de la société de projet. Ensemble, nous visons à rapprocher une énergie fiable et durable des entreprises et communautés de la région.',
        ],
        meta: [
          { label: 'Partenaire', value: 'Rensource Distributed Energy' },
          { label: 'Véhicule', value: 'Société de projet, Togo' },
          { label: 'Secteur', value: 'Énergie renouvelable distribuée' },
          { label: 'Portée', value: 'Afrique francophone' },
        ],
      },
    },
    where: {
      eyebrow: 'Où nous travaillons',
      title: 'Présents en Afrique de l’Ouest.',
      subtitle:
        'Depuis nos bureaux à Conakry et Lomé, nous accompagnons des clients dans toute la région. Chaque marché a ses institutions et sa dynamique ; nous aidons à l’aborder avec la bonne stratégie.',
      locations: [
        {
          name: 'Guinée',
          meta: 'Conakry · 9.64° N 13.58° W',
          body: 'Un marché majeur pour l’investissement stratégique et l’engagement institutionnel. Nous aidons nos clients à comprendre l’environnement et à trouver les bons interlocuteurs.',
          image: '/media/guinea.jpg?v=5',
        },
        {
          name: 'Togo',
          meta: 'Lomé · 6.13° N 1.22° E',
          body: 'Une base stratégique pour l’engagement régional et les relations transfrontalières. Nous aidons nos clients à lire le contexte local et à construire leurs partenariats.',
          image: '/media/togo.jpg?v=5',
        },
      ],
    },
    board: {
      eyebrow: 'Notre conseil',
      title: 'Une gouvernance forgée sur le terrain.',
      subtitle:
        'Le conseil de RYSE réunit une expérience acquise au cœur de l’État, du Parlement, de l’industrie et des institutions internationales.',
      members: [
        {
          name: 'Zeinab Camara',
          role: 'Administratrice non exécutive',
          image: '/media/zeinab-camara.jpg',
          bio: 'Dirigeante et stratège politique, Zeinab Camara a construit sa carrière à la croisée de la décision publique, des affaires internationales et de la transformation institutionnelle en Afrique. Elle a travaillé aux côtés de deux Présidents, d’un Premier ministre et d’un Président de l’Assemblée nationale.',
          highlights: [
            'Country Director, Tony Blair Institute for Global Change, Togo',
            'Senior Manager, Communities & Social Performance, Rio Tinto (Simandou)',
            'Présidence de Guinée, ministère de l’Enseignement supérieur, et députée de Boffa',
            'Fondatrice et première présidente, Women in Mining Guinea',
          ],
        },
        {
          name: 'David S. Edoh',
          role: 'Administrateur',
          image: '/media/david-edoh.jpg',
          bio: 'Avocat et entrepreneur basé à Lomé, David S. Edoh compte plus de vingt ans d’expérience dans le management et la livraison d’infrastructures énergétiques. Il a fondé et dirigé trois sociétés au Togo et au Bénin, réalisant des travaux électriques et des services d’ingénierie pour les sociétés nationales CEET et SBEE, aux côtés d’entreprises comme SDEL ELEXA (VINCI Energies) et AEE Power, sur des programmes financés par la Banque mondiale, l’AFD, l’Union européenne et la KfW.',
          highlights: [
            'Fondateur et CEO, ETS (Energies Technologies & Solutions) et AXELEC (Axe Electrique), Togo',
            'Fondateur, ENERTECH, travaux électriques, Bénin',
            'Administrateur, société de projet énergie renouvelable au Togo avec Rensource',
            'Plus de 20 ans en management et livraison d’infrastructures',
          ],
        },
      ],
    },
    experts: {
      eyebrow: 'Rejoindre notre réseau d’experts',
      title: 'Apportez votre expertise à nos mandats.',
      subtitle:
        'RYSE s’appuie sur un réseau de consultants et de spécialistes reconnus. Partagez votre profil ; nous vous contacterons lorsqu’une mission correspondra à votre expertise.',
      fields: {
        fullName: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        linkedin: 'Profil LinkedIn',
        mainField: 'Domaine principal',
        years: 'Années d’expérience',
        countries: 'Pays d’expérience',
        cv: 'CV',
        consent:
          'J’accepte que RYSE conserve mes informations et mon CV pour me contacter au sujet de missions.',
        submit: 'Envoyer ma candidature',
        choose: 'Choisir',
        cvHint: 'PDF ou Word, 8 Mo maximum',
        countriesPlaceholder: 'ex. Guinée, Togo, Sénégal',
        success: 'Merci. Votre candidature a été envoyée.',
      },
      fieldOptions: [
        'Conseil politique',
        'Mines & extractives',
        'Énergie & climat',
        'Sécurité & défense',
        'Technologie',
        'Finance',
        'Autre',
      ],
      yearOptions: ['1 to 3', '4 to 7', '8 to 12', '13 to 20', '20+'],
    },
    contact: {
      eyebrow: 'Engager la conversation',
      title: 'Votre prochaine opportunité commence par la bonne perspective.',
      subtitle:
        'Que vous exploriez un nouveau marché, prépariez une réforme ou cherchiez un partenaire, parlons de vos objectifs en Afrique de l’Ouest.',
      whereLabel: 'Où nous travaillons',
      whereValue: 'Afrique de l’Ouest',
      officesLabel: 'Bureaux',
      officesValue: 'Conakry, Guinée · Lomé, Togo',
      fields: {
        name: 'Nom',
        organisation: 'Organisation',
        email: 'Email',
        phone: 'Téléphone',
        industry: 'Secteur',
        subject: 'Objet',
        objectives: 'Vos objectifs',
        submit: 'Envoyer',
        note: 'Les demandes sont traitées en toute confidentialité.',
        choose: 'Choisir',
        success: 'Merci. Votre message est prêt. Nous vous répondrons rapidement.',
      },
      industries: [
        'Gouvernement / Secteur public',
        'Industries extractives',
        'Énergie & climat',
        'Sécurité & défense',
        'Finance & investissement',
        'Technologie',
        'Autre',
      ],
      subjects: [
        'Entrée sur le marché',
        'Conseil politique',
        'Structuration de partenariat',
        'Soutien de projet',
        'Demande générale',
      ],
    },
  },
}
