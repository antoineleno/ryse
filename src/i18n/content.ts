export type Lang = 'en' | 'fr'

export type Content = {
  brand: { name: string; tagline: string; footer: string }
  nav: { id: string; label: string }[]
  contactCta: string
  explore: string
  home: {
    practiceLabel: string
    practiceTitle: string
    practiceBody: string
    practiceTags: string[]
    sectorsLabel: string
    sectorsTitle: string
    sectorCards: { title: string; body: string; image: string }[]
    projectLabel: string
    whereLabel: string
    ctaTitle: string
    ctaBody: string
  }
  hero: {
    eyebrow: string
    title: string
    body: string
    primary: string
    secondary: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    body: string
    missionLabel: string
    missionTitle: string
    missionBody: string
    visionLabel: string
    visionTitle: string
    visionBody: string
    valuesLabel: string
    values: { title: string; body: string }[]
    whyLabel: string
    whyTitle: string
    whyBody: string
    whyKeywords: string[]
  }
  expertise: {
    eyebrow: string
    title: string
    subtitle: string
    leadingLabel: string
    leadingTitle: string
    leadingBody: string
    govTitle: string
    govBody: string
    privateTitle: string
    privateBody: string
    whereHelpLabel: string
    whereHelp: string[]
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
    items: { title: string; body: string; image: string }[]
    enablersLabel: string
    enablersTitle: string
    technology: { title: string; body: string }
    finance: { title: string; body: string }
  }
  approach: {
    eyebrow: string
    title: string
    subtitle: string
    steps: { title: string; body: string }[]
    networkLabel: string
    networkTitle: string
    networkBody: string
    networkCta: string
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
      { id: 'about', label: 'About' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'sectors', label: 'Sectors' },
      { id: 'approach', label: 'Approach' },
      { id: 'projects', label: 'Projects' },
      { id: 'where', label: 'Where We Work' },
      { id: 'board', label: 'Our Board' },
      { id: 'experts', label: 'Expert Network' },
    ],
    contactCta: 'Contact',
    explore: 'Explore',
    home: {
      practiceLabel: 'Leading practice',
      practiceTitle: 'Political advisory & policy making.',
      practiceBody:
        'Our advice is shaped from inside government. Our leadership has served at the Presidency, in ministries, in Parliament and alongside international institutions.',
      practiceTags: ['Political strategy', 'Public policy', 'Reform'],
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
      projectLabel: 'Featured partnership',
      whereLabel: 'Offices',
      ctaTitle: 'Ready to shape your next move in West Africa?',
      ctaBody:
        'From political strategy to partnerships and investment, let’s discuss what you want to achieve.',
    },
    hero: {
      eyebrow: 'West Africa',
      title: 'Strategic vision. Meaningful connections. Lasting impact.',
      body: 'We advise governments, institutions and investors across West Africa, from political strategy and policy making to partnerships and investment.',
      primary: 'Our expertise',
      secondary: 'Start a conversation',
    },
    about: {
      eyebrow: 'About RYSE',
      title: 'A strategic partner for a changing world.',
      intro:
        'RYSE is a strategic advisory and international cooperation firm operating in Guinea and Togo, with a regional outlook across West Africa.',
      body: 'Africa offers significant opportunities. Realising them takes strategic clarity, trusted relationships, a real understanding of context and the ability to execute. We work where political decision-making, international cooperation, institutional engagement and delivery meet, helping our clients move forward with confidence.',
      missionLabel: 'Our Mission',
      missionTitle: 'Connect international ambition with local opportunity.',
      missionBody:
        'Through the strategic guidance, partnerships and operational support needed to develop African markets.',
      visionLabel: 'Our Vision',
      visionTitle: "A trusted partner in Africa's transformation.",
      visionBody:
        'For those who want to contribute through strategic cooperation, responsible investment and lasting partnerships.',
      valuesLabel: 'Our Values',
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
        'Entering a market or launching a cross-border initiative takes more than information. It takes the ability to interpret it, to understand the people and institutions involved, and to choose the right way forward. Our aim is to make complex environments readable and opportunities actionable.',
      whyKeywords: ['Context', 'Connections', 'Clarity', 'Coordination'],
    },
    expertise: {
      eyebrow: 'Our Expertise',
      title: 'From policy to delivery.',
      subtitle:
        'Integrated advice, from the highest level of decision-making to delivery on the ground.',
      leadingLabel: 'Our Leading Practice',
      leadingTitle: 'Political advisory & policy making',
      leadingBody:
        'We work on both sides of the table: with those who design and deliver public policy, and with the companies and investors who need to understand it and engage with it.',
      govTitle: 'For governments & institutions',
      govBody:
        'We support leaders in designing and delivering public policy, reform and political strategy, and facilitate cooperation between States and with regional organisations. Our leadership has served at the Presidency, in ministries and in Parliament: we know how a decision is prepared, negotiated and carried through.',
      privateTitle: 'For companies & investors',
      privateBody:
        'We help the private sector understand how public action works, read the political context and engage with the right institutions. We support the structuring of public-private partnerships, so that private projects move forward in step with the State.',
      whereHelpLabel: 'Where we help',
      whereHelp: [
        'Political & institutional strategy',
        'Policy design',
        'Reform delivery',
        'Government & parliamentary relations',
        'State-to-State & State–region cooperation',
        'Public-private partnerships (PPPs)',
        'Private-sector advisory',
      ],
      practices: [
        {
          title: 'Strategic advisory & foresight',
          body: 'Before acting, you need to see clearly. We help clients assess where they stand, read the political and economic shifts in the region, and choose a path to growth that will hold over time.',
        },
        {
          title: 'Market entry & operational support',
          body: 'Establishing a presence takes more than a good strategy. We stay with clients from first exploration to being fully up and running, coordinating local partners, formalities and follow-through.',
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
      eyebrow: 'Our Sectors',
      title: 'Where transformation happens.',
      subtitle:
        'Three strategic sectors for West Africa, carried by two levers: technology and finance.',
      items: [
        {
          title: 'Extractive industries',
          body: 'Guinea and the wider region hold some of the world’s most sought-after resources. Yet in mining and hydrocarbons, a project depends less on the deposit than on the relationship between investors, the State and communities. We help build that relationship, from dialogue with the authorities to local content and social performance.',
          image: '/media/sector-extractive.jpg',
        },
        {
          title: 'Energy & climate',
          body: 'Access to energy shapes everything else: industry, jobs and public services. We support the projects and public-private partnerships that extend sustainable energy, and help clients mobilise climate finance in support of resilience.',
          image: '/media/sector-energy.jpg',
        },
        {
          title: 'Security & defence',
          body: 'There is no lasting investment without stability. We facilitate institutional cooperation between States, dialogue on security-sector governance, and the protection of the critical infrastructure the region’s economies depend on.',
          image: '/media/sector-security.jpg',
        },
      ],
      enablersLabel: 'Cross-Cutting Enablers',
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
    approach: {
      eyebrow: 'Our Approach',
      title: 'From insight to implementation.',
      subtitle:
        'Every mandate begins with a question that matters: a reform to deliver, a market to open, a partnership to secure. We start there, and stay until the answer is in place.',
      steps: [
        {
          title: 'Define the need',
          body: 'We never start with a solution. We start with the sticking point: what is holding things back, what is really at stake, and what success will look like. That question, framed with you, guides everything that follows.',
        },
        {
          title: 'Understand',
          body: 'We take the time to step into the client’s world: their objectives, constraints, priorities and the people who matter.',
        },
        {
          title: 'Assess',
          body: 'We read the political, institutional and economic landscape to separate real opportunities from false leads, and make the options clear.',
        },
        {
          title: 'Connect',
          body: 'We open the right doors and build the relationships and partnerships that serve the goal.',
        },
        {
          title: 'Execute',
          body: 'We stay alongside the client to turn strategy into decisions, coordinated action and results.',
        },
      ],
      networkLabel: 'Our Expert Network',
      networkTitle: 'The right expertise on every mandate.',
      networkBody:
        'RYSE draws on a network of consultants and sector specialists. On every project, we bring in the team the question calls for: political and institutional advisers, and experts in mining, energy, security, technology and finance.',
      networkCta: 'Join our expert network',
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
          image: '/media/guinea.jpg',
        },
        {
          name: 'Togo',
          meta: 'Lomé · 6.13° N 1.22° E',
          body: 'A strategic base for regional engagement and cross-border relationships. We help clients read the local context and build their partnerships.',
          image: '/media/togo.jpg',
        },
      ],
    },
    board: {
      eyebrow: 'Meet Our Board',
      title: 'Experienced governance.',
      subtitle:
        'The RYSE board brings experience gained at the heart of government, Parliament, industry and international institutions.',
      members: [
        {
          name: 'Zeinab Camara',
          role: 'Non-Executive Board Member',
          image: '/media/zeinab-camara.jpg',
          bio: 'A senior executive and political strategist, Zeinab Camara has built her career where public decision-making, international business and institutional transformation in Africa meet. She has worked alongside two Presidents, a Prime Minister and a President of the National Assembly.',
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
          bio: 'A Lomé-based lawyer and entrepreneur, David S. Edoh has more than twenty years of experience in management and the delivery of energy infrastructure. He founded and has led three companies in Togo and Benin, carrying out electrical works and engineering services for the national utilities CEET and SBEE, alongside contractors such as SDEL-ELEXA (VINCI Energies) and AEE Power, on programmes financed by the World Bank, the AFD, the European Union and KfW.',
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
        email: 'E-mail',
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
      yearOptions: ['1–3', '4–7', '8–12', '13–20', '20+'],
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
        email: 'E-mail',
        phone: 'Phone',
        industry: 'Industry',
        subject: 'Subject',
        objectives: 'Your Objectives',
        submit: 'Send',
        note: 'Enquiries are handled in confidence.',
        choose: 'Choose',
        success: 'Thank you. Your message is ready — we will respond shortly.',
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
      { id: 'about', label: 'À propos' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'sectors', label: 'Secteurs' },
      { id: 'approach', label: 'Approche' },
      { id: 'projects', label: 'Projets' },
      { id: 'where', label: 'Où nous travaillons' },
      { id: 'board', label: 'Notre conseil' },
      { id: 'experts', label: 'Réseau d’experts' },
    ],
    contactCta: 'Contact',
    explore: 'Découvrir',
    home: {
      practiceLabel: 'Pratique phare',
      practiceTitle: 'Conseil politique & élaboration des politiques.',
      practiceBody:
        'Notre conseil est façonné de l’intérieur de l’État. Notre direction a servi à la Présidence, dans les ministères, au Parlement et aux côtés d’institutions internationales.',
      practiceTags: ['Stratégie politique', 'Politiques publiques', 'Réforme'],
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
      projectLabel: 'Partenariat phare',
      whereLabel: 'Bureaux',
      ctaTitle: 'Prêt à façonner votre prochaine étape en Afrique de l’Ouest ?',
      ctaBody:
        'De la stratégie politique aux partenariats et à l’investissement, parlons de ce que vous voulez accomplir.',
    },
    hero: {
      eyebrow: 'Afrique de l’Ouest',
      title: 'Vision stratégique. Connexions utiles. Impact durable.',
      body: 'Nous conseillons gouvernements, institutions et investisseurs en Afrique de l’Ouest, de la stratégie politique et de l’élaboration des politiques aux partenariats et à l’investissement.',
      primary: 'Notre expertise',
      secondary: 'Engager la conversation',
    },
    about: {
      eyebrow: 'À propos de RYSE',
      title: 'Un partenaire stratégique pour un monde en mutation.',
      intro:
        'RYSE est un cabinet de conseil stratégique et de coopération internationale présent en Guinée et au Togo, avec une vision régionale sur l’Afrique de l’Ouest.',
      body: 'L’Afrique offre d’importantes opportunités. Les saisir exige clarté stratégique, relations de confiance, compréhension réelle du contexte et capacité d’exécution. Nous intervenons là où se rejoignent décision politique, coopération internationale, engagement institutionnel et mise en œuvre, pour aider nos clients à avancer avec assurance.',
      missionLabel: 'Notre mission',
      missionTitle:
        'Relier l’ambition internationale à l’opportunité locale.',
      missionBody:
        'Par l’accompagnement stratégique, les partenariats et le soutien opérationnel nécessaires au développement des marchés africains.',
      visionLabel: 'Notre vision',
      visionTitle: 'Un partenaire de confiance dans la transformation africaine.',
      visionBody:
        'Pour ceux qui souhaitent contribuer par la coopération stratégique, l’investissement responsable et des partenariats durables.',
      valuesLabel: 'Nos valeurs',
      values: [
        {
          title: 'Prospective',
          body: 'Anticiper le changement et regarder au-delà de l’horizon immédiat.',
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
      title: 'De la politique à la mise en œuvre.',
      subtitle:
        'Un conseil intégré, du plus haut niveau de décision jusqu’à la livraison sur le terrain.',
      leadingLabel: 'Notre pratique phare',
      leadingTitle: 'Conseil politique & élaboration des politiques',
      leadingBody:
        'Nous travaillons des deux côtés de la table : avec ceux qui conçoivent et mettent en œuvre l’action publique, et avec les entreprises et investisseurs qui doivent la comprendre et s’y engager.',
      govTitle: 'Pour les gouvernements & institutions',
      govBody:
        'Nous accompagnons les dirigeants dans la conception et la mise en œuvre des politiques publiques, des réformes et de la stratégie politique, et facilitons la coopération entre États et avec les organisations régionales. Notre direction a servi à la Présidence, dans les ministères et au Parlement : nous savons comment une décision se prépare, se négocie et se conduit.',
      privateTitle: 'Pour les entreprises & investisseurs',
      privateBody:
        'Nous aidons le secteur privé à comprendre le fonctionnement de l’action publique, à lire le contexte politique et à engager les bonnes institutions. Nous accompagnons la structuration de partenariats public-privé, pour que les projets privés avancent au rythme de l’État.',
      whereHelpLabel: 'Où nous intervenons',
      whereHelp: [
        'Stratégie politique & institutionnelle',
        'Conception des politiques',
        'Conduite des réformes',
        'Relations gouvernementales & parlementaires',
        'Coopération État–État et État–région',
        'Partenariats public-privé (PPP)',
        'Conseil au secteur privé',
      ],
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
      eyebrow: 'Nos secteurs',
      title: 'Là où se joue la transformation.',
      subtitle:
        'Trois secteurs stratégiques pour l’Afrique de l’Ouest, portés par deux leviers : la technologie et la finance.',
      items: [
        {
          title: 'Industries extractives',
          body: 'La Guinée et la région détiennent certaines des ressources les plus recherchées au monde. Pourtant, dans les mines et les hydrocarbures, un projet dépend moins du gisement que de la relation entre investisseurs, État et communautés. Nous aidons à construire cette relation, du dialogue avec les autorités au contenu local et à la performance sociale.',
          image: '/media/sector-extractive.jpg',
        },
        {
          title: 'Énergie & climat',
          body: 'L’accès à l’énergie conditionne tout le reste : industrie, emplois et services publics. Nous soutenons les projets et partenariats public-privé qui étendent l’énergie durable, et aidons nos clients à mobiliser la finance climat au service de la résilience.',
          image: '/media/sector-energy.jpg',
        },
        {
          title: 'Sécurité & défense',
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
    approach: {
      eyebrow: 'Notre approche',
      title: 'De l’insight à la mise en œuvre.',
      subtitle:
        'Chaque mandat commence par une question qui compte : une réforme à conduire, un marché à ouvrir, un partenariat à sécuriser. Nous partons de là, et restons jusqu’à ce que la réponse soit en place.',
      steps: [
        {
          title: 'Définir le besoin',
          body: 'Nous ne partons jamais d’une solution. Nous partons du point de blocage : ce qui retient, ce qui est vraiment en jeu, et à quoi ressemble le succès. Cette question, formulée avec vous, oriente tout ce qui suit.',
        },
        {
          title: 'Comprendre',
          body: 'Nous prenons le temps d’entrer dans le monde du client : objectifs, contraintes, priorités et personnes qui comptent.',
        },
        {
          title: 'Évaluer',
          body: 'Nous lisons le paysage politique, institutionnel et économique pour séparer les vraies opportunités des fausses pistes, et clarifier les options.',
        },
        {
          title: 'Connecter',
          body: 'Nous ouvrons les bonnes portes et construisons les relations et partenariats au service de l’objectif.',
        },
        {
          title: 'Exécuter',
          body: 'Nous restons aux côtés du client pour transformer la stratégie en décisions, en action coordonnée et en résultats.',
        },
      ],
      networkLabel: 'Notre réseau d’experts',
      networkTitle: 'La bonne expertise sur chaque mandat.',
      networkBody:
        'RYSE s’appuie sur un réseau de consultants et de spécialistes sectoriels. Sur chaque projet, nous constituons l’équipe que la question appelle : conseillers politiques et institutionnels, et experts en mines, énergie, sécurité, technologie et finance.',
      networkCta: 'Rejoindre notre réseau d’experts',
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
          image: '/media/guinea.jpg',
        },
        {
          name: 'Togo',
          meta: 'Lomé · 6.13° N 1.22° E',
          body: 'Une base stratégique pour l’engagement régional et les relations transfrontalières. Nous aidons nos clients à lire le contexte local et à construire leurs partenariats.',
          image: '/media/togo.jpg',
        },
      ],
    },
    board: {
      eyebrow: 'Notre conseil',
      title: 'Une gouvernance expérimentée.',
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
          bio: 'Avocat et entrepreneur basé à Lomé, David S. Edoh compte plus de vingt ans d’expérience dans le management et la livraison d’infrastructures énergétiques. Il a fondé et dirigé trois sociétés au Togo et au Bénin, réalisant des travaux électriques et des services d’ingénierie pour les sociétés nationales CEET et SBEE, aux côtés d’entreprises comme SDEL-ELEXA (VINCI Energies) et AEE Power, sur des programmes financés par la Banque mondiale, l’AFD, l’Union européenne et la KfW.',
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
        email: 'E-mail',
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
      yearOptions: ['1–3', '4–7', '8–12', '13–20', '20+'],
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
        email: 'E-mail',
        phone: 'Téléphone',
        industry: 'Secteur',
        subject: 'Objet',
        objectives: 'Vos objectifs',
        submit: 'Envoyer',
        note: 'Les demandes sont traitées en toute confidentialité.',
        choose: 'Choisir',
        success: 'Merci. Votre message est prêt — nous vous répondrons rapidement.',
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
