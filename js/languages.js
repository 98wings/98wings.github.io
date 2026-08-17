/* ============================================================================
   TRANSLATIONS — Système multilingue
   Contient toutes les traductions en anglais, français et chinois
   ========================================================================== */

const translations = {
  en: {
    nav: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      research: 'Research',
      projects: 'Projects',
      news: 'News',
      contact: 'Contact'
    },
    hero: {
      eyebrow: "Hello, I'm",
      role: 'Computer Science Engineer · M.Sc. student at',
      quote: '“Build systems that earn their place in memory, and in people\'s lives.”',
      downloadCv: 'Download CV',
      myResearch: 'My research',
      getInTouch: 'Get in touch'
    },
    about: { title: 'About' },
    education: { title: 'Education' },
    experience: { title: 'Experience' },
    research: { title: 'Research' },
    awards: { title: 'Honors & Distinctions' },
    projects: { title: 'Projects' },
    news: { title: 'News' },
    contact: {
      title: 'Get in touch',
      academic: 'Academic',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'CV'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  fr: {
    nav: {
      about: 'À propos',
      education: 'Formation',
      experience: 'Expérience',
      research: 'Recherche',
      projects: 'Projets',
      news: 'Actualités',
      contact: 'Me contacter'
    },
    hero: {
      eyebrow: 'Bonjour, je suis',
      role: 'Ingénieur informatique · Étudiant en M.Sc. à',
      quote: '« Construire des systèmes qui méritent leur place dans la mémoire, et dans la vie des gens. »',
      downloadCv: 'Télécharger le CV',
      myResearch: 'Ma recherche',
      getInTouch: 'Me contacter'
    },
    about: { title: 'À propos' },
    education: { title: 'Formation' },
    experience: { title: 'Expérience' },
    research: { title: 'Recherche' },
    awards: { title: 'Distinctions & Réussites' },
    projects: { title: 'Projets' },
    news: { title: 'Actualités' },
    contact: {
      title: 'Me contacter',
      academic: 'Académique',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'CV'
    },
    footer: {
      rights: 'Tous droits réservés.'
    }
  },
  zh: {
    nav: {
      about: '关于',
      education: '教育',
      experience: '经历',
      research: '研究',
      projects: '项目',
      news: '新闻',
      contact: '联系'
    },
    hero: {
      eyebrow: '你好,我是',
      role: '计算机科学工程师 · 硕士研究生,就读于',
      quote: '"构建那些配得上留在记忆中,也配得上留在人们生活中的系统。"',
      downloadCv: '下载简历',
      myResearch: '我的研究',
      getInTouch: '联系我'
    },
    about: { title: '关于' },
    education: { title: '教育背景' },
    experience: { title: '经历' },
    research: { title: '研究' },
    awards: { title: '荣誉与成就' },
    projects: { title: '项目' },
    news: { title: '新闻' },
    contact: {
      title: '联系我',
      academic: '学术邮箱',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: '简历'
    },
    footer: {
      rights: '版权所有。'
    }
  }
};

// 初始化语言系统
function initLanguageSystem() {
  const htmlElement = document.documentElement;
  let savedLang = localStorage.getItem('language');
  if (!savedLang || !translations[savedLang]) {
    savedLang = 'en';
  }
  htmlElement.setAttribute('data-lang', savedLang);
  updateLanguageButtons(savedLang);
  updatePageLanguage(savedLang);
  return savedLang;
}

// 更新所有语言按钮的活跃状态
function updateLanguageButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('is-active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('is-active');
    }
  });
}

// Mettre à jour les stats
function updateStats(lang) {
  const stats = {
    en: ['UN missions', 'Teaching hours', 'Degrees', 'Papers in progress'],
    fr: ['Missions ONU', 'Heures d\'enseignement', 'Diplômes', 'Articles en cours'],
    zh: ['联合国任务', '教学小时', '学位', '进行中的论文']
  };
  const labels = stats[lang] || stats['en'];
  const statElements = document.querySelectorAll('.stat__label');
  statElements.forEach((el, i) => {
    if (labels[i]) el.textContent = labels[i];
  });
}

// Mettre à jour la section "About"
function updateAboutSection(lang) {
  const texts = {
    en: [
      'Computer science engineer and postgraduate researcher pursuing an M.Sc. in Computer Science and Technology at Dalian University of Technology, China, after a Master\'s in Computer Engineering from the University of Ngaoundéré, Cameroon. My research focuses on causal credit attribution for self-evolving AI agent memory, building on earlier work in missing-data imputation for public health time series. Originally from Chad, I have taught 200+ hours at a public university and completed several United Nations volunteer assignments with UNDP, WHO, ROWCA and UNECA. Open to research collaborations, internships and PhD opportunities in AI, data science and digital development; write to me, I answer every message.'
    ],
    fr: [
      'Ingénieur informatique et chercheur de troisième cycle, poursuivant un M.Sc. en Informatique et Technologie à l\'Université de Technologie de Dalian, Chine, après un Master en Génie Informatique de l\'Université de Ngaoundéré, Cameroun. Ma recherche porte sur l\'attribution causale du crédit pour la mémoire des agents IA auto-évolutifs, dans la continuité de mes travaux antérieurs sur l\'imputation de données manquantes en santé publique. Originaire du Tchad, j\'ai enseigné 200+ heures dans une université publique et réalisé plusieurs missions de volontariat des Nations unies avec le PNUD, l\'OMS, ROWCA et UNECA. Ouvert aux collaborations de recherche, stages et opportunités de doctorat en IA, science des données et développement numérique ; écrivez-moi, je réponds à chaque message.'
    ],
    zh: [
      '计算机科学工程师和研究生研究者,目前在大连理工大学攻读计算机科学与技术硕士学位,此前已获得喀麦隆恩高德雷大学计算机工程硕士学位。我的研究专注于自我演化人工智能代理记忆的因果信用归因,延续此前在公共卫生缺失数据填补方面的工作。我来自乍得,在一所公立大学教学超过200小时,并完成了多项联合国志愿者任务,包括联合国开发计划署、世界卫生组织、ROWCA和UNECA。开放接受人工智能、数据科学和数字发展领域的研究合作、实习和博士机会,请写信给我,我会回复每一条信息。'
    ]
  };
  const paras = document.querySelectorAll('.about__text > p');
  const data = texts[lang] || texts['en'];
  paras.forEach((p, i) => {
    if (data[i]) p.textContent = data[i];
  });
}

// Mettre à jour les skills
function updateSkills(lang) {
  const skills = {
    en: ['AI Agent Memory', 'Machine Learning', 'Time Series & Imputation', 'Health Data Analytics', 'Python · R · SQL', 'Web Development', 'Digital Development'],
    fr: ['Mémoire des agents IA', 'Apprentissage automatique', 'Séries temporelles et imputation', 'Analyse de données de santé', 'Python · R · SQL', 'Développement web', 'Développement numérique'],
    zh: ['人工智能代理记忆', '机器学习', '时间序列和填补', '卫生数据分析', 'Python · R · SQL', '网络开发', '数字发展']
  };
  const list = skills[lang] || skills['en'];
  const chips = document.querySelectorAll('#about .chips li');
  chips.forEach((chip, i) => {
    if (list[i]) chip.textContent = list[i];
  });
}

// Mettre à jour la section About card
function updateAboutCard(lang) {
  const data = {
    en: { title: 'At a glance', position: 'M.Sc. student & researcher', institution: 'Dalian University of Technology', location: 'Dalian, Liaoning, China', origin: 'Chad 🇹🇩', languages: 'French (native) · English (professional) · Chinese (elementary)', status: 'Open to collaborations' },
    fr: { title: 'En bref', position: 'Étudiant M.Sc. et chercheur', institution: 'Université de Technologie de Dalian', location: 'Dalian, Liaoning, Chine', origin: 'Tchad 🇹🇩', languages: 'Français (natif) · Anglais (professionnel) · Chinois (élémentaire)', status: 'Ouvert aux collaborations' },
    zh: { title: '一览', position: '硕士学生和研究者', institution: '大连理工大学', location: '中国辽宁省大连市', origin: '乍得 🇹🇩', languages: '法语(母语) · 英语(专业) · 中文(初级)', status: '开放合作' }
  };
  const card = data[lang] || data['en'];
  const cardEl = document.querySelector('.about__card');
  if (!cardEl) return;

  const h3 = cardEl.querySelector('h3');
  if (h3) h3.textContent = card.title;

  const dds = cardEl.querySelectorAll('dd');
  if (dds[0]) dds[0].textContent = card.position;
  if (dds[1]) dds[1].textContent = card.institution;
  if (dds[2]) dds[2].textContent = card.location;
  if (dds[3]) dds[3].textContent = card.origin;
  if (dds[4]) dds[4].textContent = card.languages;
  if (dds[5]) dds[5].textContent = card.status;
}

// Mettre à jour la section Education
function updateEducationSection(lang) {
  const data = {
    en: [
      { date: 'Sep 2025 — Present', degree: 'M.Sc. in Computer Science and Technology', school: 'Dalian University of Technology', location: 'Dalian, R.P. China · currently enrolled', desc: 'Graduate research on causal credit attribution for self-evolving AI agent memory.', tags: ['AI Agents', 'Machine Learning', 'Research'] },
      { date: 'Oct 2021 — Oct 2023', degree: 'M.Sc. in Computer Engineering', school: 'University of Ngaoundéré', location: 'Ngaoundéré, Cameroon · Thesis written', desc: 'Thesis on missing-data imputation in public health time series, evaluated on incomplete national malaria records.', tags: ['Time Series', 'Imputation', 'Public Health'] },
      { date: 'Oct 2021 — Nov 2022', degree: 'B.Sc. in Software Engineering', school: 'University Institute of Technology', location: 'Ngaoundéré, Cameroon · Final project · taken concurrently with the M.Sc.', desc: 'Applied software engineering programme completed alongside the M.Sc.; final project deployed on the university portal.', tags: ['Software Engineering', 'Web'] },
      { date: 'Oct 2018 — Oct 2021', degree: 'B.Sc. in Computer Science', school: 'University of Ngaoundéré', location: 'Ngaoundéré, Cameroon', desc: 'Fundamental computer science: algorithms, systems, networks and mathematics.', tags: ['Algorithms', 'Systems', 'Networks'] }
    ],
    fr: [
      { date: 'Sep 2025 — Présent', degree: 'M.Sc. en Informatique et Technologie', school: 'Université de Technologie de Dalian', location: 'Dalian, R.P. Chine · actuellement inscrit', desc: 'Recherche de master sur l\'attribution causale du crédit pour la mémoire auto-évolutive des agents IA.', tags: ['Agents IA', 'Apprentissage Automatique', 'Recherche'] },
      { date: 'Oct 2021 — Oct 2023', degree: 'M.Sc. en Génie Informatique', school: 'Université de Ngaoundéré', location: 'Ngaoundéré, Cameroun · Thèse rédigée', desc: 'Thèse sur l\'imputation de données manquantes dans les séries chronologiques de santé publique, évaluée sur des dossiers nationaux incomplets de paludisme.', tags: ['Séries Temporelles', 'Imputation', 'Santé Publique'] },
      { date: 'Oct 2021 — Nov 2022', degree: 'B.Sc. en Génie Logiciel', school: 'Institut Universitaire de Technologie', location: 'Ngaoundéré, Cameroun · Projet final · suivi en parallèle du M.Sc.', desc: 'Programme de génie logiciel appliqué suivi en parallèle du M.Sc. ; projet final déployé sur le portail de l\'université.', tags: ['Génie Logiciel', 'Web'] },
      { date: 'Oct 2018 — Oct 2021', degree: 'B.Sc. en Informatique', school: 'Université de Ngaoundéré', location: 'Ngaoundéré, Cameroun', desc: 'Informatique fondamentale : algorithmes, systèmes, réseaux et mathématiques.', tags: ['Algorithmes', 'Systèmes', 'Réseaux'] }
    ],
    zh: [
      { date: '2025年9月 — 现在', degree: '计算机科学与技术硕士', school: '大连理工大学', location: '中国大连 · 在读', desc: '自我演化人工智能代理记忆因果信用归因的研究生研究。', tags: ['人工智能代理', '机器学习', '研究'] },
      { date: '2021年10月 — 2023年10月', degree: '计算机工程硕士', school: '恩高德雷大学', location: '喀麦隆恩高德雷 · 论文已完成', desc: '关于公共卫生时间序列缺失数据填补的论文,基于不完整的国家疟疾记录进行评估。', tags: ['时间序列', '数据填补', '公共卫生'] },
      { date: '2021年10月 — 2022年11月', degree: '软件工程学士', school: '大学技术学院', location: '喀麦隆恩高德雷 · 最终项目 · 与硕士课程同时进行', desc: '应用软件工程课程与硕士课程同步完成;最终项目部署在大学门户网站上。', tags: ['软件工程', '网络开发'] },
      { date: '2018年10月 — 2021年10月', degree: '计算机科学学士', school: '恩高德雷大学', location: '喀麦隆恩高德雷', desc: '基础计算机科学:算法、系统、网络和数学。', tags: ['算法', '系统', '网络'] }
    ]
  };
  const items = data[lang] || data['en'];
  const timeline = document.querySelectorAll('.timeline__item');
  timeline.forEach((item, idx) => {
    if (items[idx]) {
      const ed = items[idx];
      const dateEl = item.querySelector('.timeline__date');
      if (dateEl) dateEl.textContent = ed.date;
      const headingEl = item.querySelector('.timeline__heading');
      if (headingEl) {
        const headingText = Array.from(headingEl.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (headingText) headingText.textContent = ed.degree;
      }
      const schoolEl = item.querySelector('.timeline__org');
      if (schoolEl) schoolEl.textContent = ed.school;
      const metaEl = item.querySelector('.timeline__meta');
      if (metaEl) metaEl.textContent = ed.location;
      const descEl = item.querySelector('.timeline__body > p:not(.timeline__meta)');
      if (descEl) descEl.textContent = ed.desc;
      const tags = item.querySelectorAll('.tags li');
      tags.forEach((tag, i) => { if (ed.tags[i]) tag.textContent = ed.tags[i]; });
    }
  });
}

// Mettre à jour la section Experience
function updateExperienceSection(lang) {
  const data = {
    en: [
      { title: 'Online Volunteer | Research, Drafting & Communications', date: 'Jun 2024 — Present', org: '<a href="https://www.unv.org/" target="_blank" rel="noopener">United Nations Volunteers (UNV)</a> · Remote: UNDP, WHO, ROWCA, UNECA', desc: 'Supported SDG-aligned programmes in digital skills, AI awareness and public health across four UN agencies. Drafted knowledge products and bilingual French/English material for WHO and UNECA campaigns.', tags: ['Research', 'Drafting', 'Bilingual FR/EN', 'SDGs'] },
      { title: 'University Lecturer | Computer Science', date: 'Feb 2025 — Jul 2025', org: 'University of Pala (public university) · Pala, Chad', desc: 'Delivered 200+ teaching hours in one semester across four departments to cohorts of 100+ students. Designed syllabi and materials, and raised attendance with low-cost methods suited to local constraints.', tags: ['Teaching', 'Curriculum Design', 'EdTech'] },
      { title: 'Professional Intern | Production & IT', date: 'Dec 2024 — Feb 2025', org: 'National Television (ONAMA), public broadcaster · N\'Djamena, Chad', desc: 'Supported daily operations of Chad\'s national broadcaster: field reporting, live studio production, editing and IT systems. Prepared broadcast segments to on-air deadlines and resolved live technical incidents.', tags: ['Avid', 'Adobe CC', 'Live Production'] },
      { title: 'Professional Intern | Operations & IT', date: 'Jul 2024 — Sep 2024', org: 'Union of Savings and Credit Clubs (UCEC MK) · Pala, Chad', desc: 'Conducted credit-recovery field missions for a member-owned microfinance network, reconciling defaulted loan portfolios in the PERFECT banking system. Authored the functional specification for a member-services website.', tags: ['Microfinance', 'Data Reconciliation', 'IT Support'] },
      { title: 'Digital Inclusion Volunteer | University Outreach', date: 'Sep 2023 — Oct 2023', org: 'Orange Cameroon · Ngaoundéré, Cameroon', desc: 'Planned and delivered campus events for the Parcours Sup digital orientation platform, strengthening links between the private sector and higher education.', tags: ['Outreach', 'Digital Inclusion', 'Events'] },
      { title: 'Student Intern | Web Development', date: 'Jun 2022 — Sep 2022', org: 'ICT Development Center (CDTIC) · Ngaoundéré, Cameroon', desc: 'Designed and deployed the Student Association module of the University of Ngaoundéré\'s official portal, used by the entire student body. Documented and handed it over to the in-house IT team.', tags: ['PHP', 'JavaScript', 'Public Sector'] }
    ],
    fr: [
      { title: 'Bénévole en ligne | Recherche, Rédaction et Communications', date: 'Jun 2024 — Présent', org: '<a href="https://www.unv.org/" target="_blank" rel="noopener">Bénévoles des Nations unies (VNU)</a> · À distance : PNUD, OMS, ROWCA, UNECA', desc: 'Soutenu des programmes alignés sur les ODD en compétences numériques, sensibilisation à l\'IA et santé publique dans quatre agences de l\'ONU. Rédigé des produits de connaissance et du matériel bilingue français/anglais pour les campagnes de l\'OMS et de la UNECA.', tags: ['Recherche', 'Rédaction', 'Bilingue FR/EN', 'ODD'] },
      { title: 'Maître de conférences | Informatique', date: 'Fév 2025 — Juil 2025', org: 'Université de Pala (université publique) · Pala, Tchad', desc: 'Dispensé plus de 200 heures de cours en un semestre dans quatre départements, pour des groupes de plus de 100 étudiants. Conçu les programmes et le matériel, et amélioré l\'assiduité avec des méthodes économiques adaptées aux contraintes locales.', tags: ['Enseignement', 'Conception de programmes', 'EdTech'] },
      { title: 'Stagiaire professionnel | Production et Informatique', date: 'Déc 2024 — Fév 2025', org: 'Télévision Nationale (ONAMA), diffuseur public · N\'Djaména, Tchad', desc: 'Soutenu les opérations quotidiennes du diffuseur national tchadien : reportages terrain, production en studio, montage et systèmes informatiques. Préparé des segments diffusés dans les délais et résolu des incidents techniques en direct.', tags: ['Avid', 'Adobe CC', 'Production en direct'] },
      { title: 'Stagiaire professionnel | Opérations et Informatique', date: 'Jui 2024 — Sep 2024', org: 'Union des Clubs d\'Épargne et de Crédit (UCEC MK) · Pala, Tchad', desc: 'Réalisé des missions de recouvrement de crédit pour un réseau mutualiste de microfinance, en rapprochant les portefeuilles de prêts en défaut dans le système PERFECT. Rédigé le cahier des charges d\'un site web pour moderniser les services aux membres.', tags: ['Microfinance', 'Réconciliation de données', 'Support informatique'] },
      { title: 'Bénévole Inclusion Numérique | Sensibilisation Universitaire', date: 'Sep 2023 — Oct 2023', org: 'Orange Cameroun · Ngaoundéré, Cameroun', desc: 'Planifié et animé des événements sur le campus pour la plateforme d\'orientation numérique Parcours Sup, renforçant les liens entre le secteur privé et l\'enseignement supérieur.', tags: ['Sensibilisation', 'Inclusion numérique', 'Événements'] },
      { title: 'Stagiaire étudiant | Développement Web', date: 'Jun 2022 — Sep 2022', org: 'Centre de Développement des TIC (CDTIC) · Ngaoundéré, Cameroun', desc: 'Conçu et déployé le module Association des Étudiants du portail officiel de l\'Université de Ngaoundéré, utilisé par l\'ensemble des étudiants. Documenté et transmis à l\'équipe informatique interne.', tags: ['PHP', 'JavaScript', 'Secteur public'] }
    ],
    zh: [
      { title: '在线志愿者 | 研究、起草和通讯', date: '2024年6月 — 现在', org: '<a href="https://www.unv.org/" target="_blank" rel="noopener">联合国志愿者计划(UNV)</a> · 远程: 联合国开发计划署、世界卫生组织、ROWCA、UNECA', desc: '在四个联合国机构支持数字技能、人工智能意识和公共卫生方面符合可持续发展目标的项目。为世卫组织和UNECA活动起草知识产品和法英双语材料。', tags: ['研究', '起草', '法英双语', '可持续发展目标'] },
      { title: '大学讲师 | 计算机科学', date: '2025年2月 — 2025年7月', org: '帕拉大学(公立大学) · 乍得帕拉', desc: '一学期内在四个系为100多名学生授课超过200小时。设计教学大纲和材料,并采用适应当地条件的低成本方法提高出勤率。', tags: ['教学', '课程设计', '教育科技'] },
      { title: '专业实习生 | 制作与信息技术', date: '2024年12月 — 2025年2月', org: '国家电视台(ONAMA),公共广播机构 · 乍得恩贾梅纳', desc: '支持乍得国家广播机构的日常运营:实地报道、演播室直播制作、剪辑和IT系统。按播出时限准备广播片段,并处理直播中的技术故障。', tags: ['Avid', 'Adobe CC', '直播制作'] },
      { title: '专业实习生 | 运营与信息技术', date: '2024年7月 — 2024年9月', org: '储蓄信贷俱乐部联盟(UCEC MK) · 乍得帕拉', desc: '为互助微金融网络开展信贷催收实地任务,在PERFECT银行系统中核对逾期贷款组合。为会员服务网站编写功能规范文档。', tags: ['微金融', '数据核对', 'IT支持'] },
      { title: '数字包容志愿者 | 大学推广', date: '2023年9月 — 2023年10月', org: '橙色喀麦隆 · 喀麦隆恩高德雷', desc: '为Parcours Sup数字定向平台策划并开展校园活动,加强私营部门与高等教育之间的联系。', tags: ['推广', '数字包容', '活动'] },
      { title: '学生实习生 | 网络开发', date: '2022年6月 — 2022年9月', org: '信息技术发展中心(CDTIC) · 喀麦隆恩高德雷', desc: '设计并部署了恩高德雷大学官方门户网站的学生协会模块,供全体学生使用。完成文档编写并移交给内部IT团队。', tags: ['PHP', 'JavaScript', '公共部门'] }
    ]
  };
  const items = data[lang] || data['en'];
  const cards = document.querySelectorAll('#experience .card');
  cards.forEach((card, idx) => {
    if (items[idx]) {
      const exp = items[idx];
      const titleEl = card.querySelector('.card__head h3');
      if (titleEl) titleEl.textContent = exp.title;
      const dateEl = card.querySelector('.card__date');
      if (dateEl) dateEl.textContent = exp.date;
      const orgEl = card.querySelector('.card__org');
      if (orgEl) orgEl.innerHTML = exp.org;
      const descEl = card.querySelector(':scope > p:not(.card__org)');
      if (descEl) descEl.textContent = exp.desc;
      const tags = card.querySelectorAll('.tags li');
      tags.forEach((tag, i) => { if (exp.tags[i]) tag.textContent = exp.tags[i]; });
    }
  });
}

// Mettre à jour la section Contact
function updateContactSection(lang) {
  const data = {
    en: { nameLabel: 'Name', namePlaceholder: 'Your name', emailLabel: 'Email', emailPlaceholder: 'you@example.com', messageLabel: 'Message', messagePlaceholder: 'Your message', submitBtn: 'Send', lead: 'Email is the fastest way to reach me, about research collaborations, internships, PhD positions, or anything on this page.' },
    fr: { nameLabel: 'Nom', namePlaceholder: 'Votre nom', emailLabel: 'Email', emailPlaceholder: 'vous@example.com', messageLabel: 'Message', messagePlaceholder: 'Votre message', submitBtn: 'Envoyer', lead: 'L\'email est le moyen le plus rapide de me joindre, pour des collaborations de recherche, stages, postes de doctorat, ou tout autre sujet de cette page.' },
    zh: { nameLabel: '名字', namePlaceholder: '您的名字', emailLabel: '电子邮件', emailPlaceholder: 'you@example.com', messageLabel: '信息', messagePlaceholder: '您的消息', submitBtn: '发送', lead: '电子邮件是联系我最快的方式,可以聊研究合作、实习、博士职位或本页面上的任何内容。' }
  };
  const contact = data[lang] || data['en'];
  const form = document.querySelector('.form');
  if (form) {
    const labels = form.querySelectorAll('label span');
    const inputs = form.querySelectorAll('input, textarea');
    if (labels[0] && inputs[0]) { labels[0].textContent = contact.nameLabel; inputs[0].placeholder = contact.namePlaceholder; }
    if (labels[1] && inputs[1]) { labels[1].textContent = contact.emailLabel; inputs[1].placeholder = contact.emailPlaceholder; }
    if (labels[2] && inputs[2]) { labels[2].textContent = contact.messageLabel; inputs[2].placeholder = contact.messagePlaceholder; }
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = contact.submitBtn;
  }
  const lead = document.querySelector('.contact__lead');
  if (lead) lead.textContent = contact.lead;
}

// Mettre à jour la section Honors & Distinctions
function updateAwardsSection(lang) {
  const data = {
    en: [
      { title: 'Graduate admission, Dalian University of Technology', org: 'Double First-Class university, P.R. China', desc: 'Admitted to the M.Sc. programme in Computer Science and Technology.' },
      { title: "Master's thesis in health data imputation", org: 'University of Ngaoundéré', desc: 'Missing-data imputation in public health time series.' },
      { title: 'B.Sc. final project deployed in production', org: 'University Institute of Technology, Ngaoundéré', desc: 'Student Association module deployed on the official university portal.' }
    ],
    fr: [
      { title: 'Admission en master, Université de Technologie de Dalian', org: 'Université « Double First-Class », R.P. Chine', desc: 'Admis au programme de M.Sc. en Informatique et Technologie.' },
      { title: 'Mémoire de master sur l\'imputation de données de santé', org: 'Université de Ngaoundéré', desc: 'Imputation de données manquantes dans les séries chronologiques de santé publique.' },
      { title: 'Projet de fin d\'études déployé en production', org: 'Institut Universitaire de Technologie, Ngaoundéré', desc: 'Module Association des Étudiants déployé sur le portail officiel de l\'université.' }
    ],
    zh: [
      { title: '获录取大连理工大学研究生', org: '中国"双一流"高校', desc: '被计算机科学与技术硕士项目录取。' },
      { title: '健康数据填补硕士论文', org: '恩高德雷大学', desc: '公共卫生时间序列中的缺失数据填补。' },
      { title: '学士毕业项目部署上线', org: '大学技术学院,恩高德雷', desc: '学生协会模块部署在大学官方门户网站上。' }
    ]
  };
  const items = data[lang] || data.en;
  const title = document.querySelector('#awards .section__title');
  if (title) title.textContent = (translations[lang] && translations[lang].awards && translations[lang].awards.title) || translations.en.awards.title;

  const cards = document.querySelectorAll('#awards .card--award');
  cards.forEach((card, i) => {
    if (items[i]) {
      const h3 = card.querySelector('h3');
      const org = card.querySelector('.card__org');
      const desc = card.querySelector(':scope > p:not(.card__org)');
      if (h3) h3.textContent = items[i].title;
      if (org) org.textContent = items[i].org;
      if (desc) desc.textContent = items[i].desc;
    }
  });
}

// Mettre à jour les fiches de publications (recherche)
function updateResearchPublications(lang) {
  const data = {
    en: [
      { title: 'Causal credit attribution for self-evolving AI agent memory', authors: 'A. Bagmbaye · M.Sc. research, Dalian University of Technology', venue: 'In progress · 2025 — present', abstract: 'Mechanisms that trace an agent\'s outcomes back to the experiences that produced them, so memory keeps only what earns its place.', pills: ['Ongoing', 'Paper in preparation'] },
      { title: 'Missing-data imputation in public health time series', authors: "A. Bagmbaye · Master's thesis, University of Ngaoundéré", venue: "Master's thesis, 2023 · paper in preparation", abstract: 'Comparative evaluation of imputation methods on incomplete national malaria records (Adamaoua, Cameroon), for evidence-based decision-making.', pills: ["Master's thesis", 'Paper in preparation'] },
      { title: 'Energy-efficient routing in wireless sensor networks', authors: 'A. Bagmbaye and collaborators', venue: 'Paper in preparation', abstract: 'Work on routing strategies that extend network lifetime under the energy budgets typical of low-resource deployments.', pills: ['Paper in preparation'] },
      { title: 'Student Association module, University of Ngaoundéré portal', authors: 'A. Bagmbaye · B.Sc. final project, University Institute of Technology', venue: 'B.Sc. final project, 2022', abstract: 'Design, development and deployment of a public-sector digital service still in production on the official university portal.', pills: ['Live site'] }
    ],
    fr: [
      { title: 'Attribution causale du crédit pour la mémoire des agents IA auto-évolutifs', authors: 'A. Bagmbaye · Recherche de M.Sc., Université de Technologie de Dalian', venue: 'En cours · 2025 — présent', abstract: 'Mécanismes qui remontent les résultats d\'un agent jusqu\'aux expériences qui les ont produits, afin que la mémoire ne conserve que ce qui mérite sa place.', pills: ['En cours', 'Article en préparation'] },
      { title: 'Imputation de données manquantes dans les séries chronologiques de santé publique', authors: 'A. Bagmbaye · Mémoire de master, Université de Ngaoundéré', venue: 'Mémoire de master, 2023 · article en préparation', abstract: 'Évaluation comparative des méthodes d\'imputation sur des dossiers nationaux incomplets de paludisme (Adamaoua, Cameroun), pour une décision fondée sur des preuves.', pills: ['Mémoire de master', 'Article en préparation'] },
      { title: 'Routage économe en énergie dans les réseaux de capteurs sans fil', authors: 'A. Bagmbaye et collaborateurs', venue: 'Article en préparation', abstract: 'Travaux sur des stratégies de routage qui prolongent la durée de vie du réseau dans les budgets énergétiques typiques des déploiements à ressources limitées.', pills: ['Article en préparation'] },
      { title: 'Module Association des Étudiants, portail de l\'Université de Ngaoundéré', authors: 'A. Bagmbaye · Projet de fin d\'études, Institut Universitaire de Technologie', venue: 'Projet de fin d\'études, 2022', abstract: 'Conception, développement et déploiement d\'un service numérique du secteur public toujours en production sur le portail officiel de l\'université.', pills: ['Site en ligne'] }
    ],
    zh: [
      { title: '自我演化人工智能代理记忆的因果信用归因', authors: 'A. Bagmbaye · 硕士研究,大连理工大学', venue: '进行中 · 2025年至今', abstract: '追溯代理结果到产生它们的经验的机制,使记忆只保留值得保留的内容。', pills: ['进行中', '论文准备中'] },
      { title: '公共卫生时间序列中的缺失数据填补', authors: 'A. Bagmbaye · 硕士论文,恩高德雷大学', venue: '硕士论文,2023年 · 论文准备中', abstract: '对喀麦隆阿达马瓦地区不完整国家疟疾记录进行填补方法的比较评估,用于循证决策。', pills: ['硕士论文', '论文准备中'] },
      { title: '无线传感器网络中的节能路由', authors: 'A. Bagmbaye 及合作者', venue: '论文准备中', abstract: '研究在低资源部署典型的能源预算下延长网络寿命的路由策略。', pills: ['论文准备中'] },
      { title: '恩高德雷大学门户网站学生协会模块', authors: 'A. Bagmbaye · 学士毕业项目,大学技术学院', venue: '学士毕业项目,2022年', abstract: '设计、开发并部署一项公共部门数字服务,目前仍在大学官方门户网站上运行。', pills: ['访问网站'] }
    ]
  };
  const items = data[lang] || data.en;
  const cards = document.querySelectorAll('#pubList .pub');
  cards.forEach((card, i) => {
    if (items[i]) {
      const title = card.querySelector('.pub__title');
      const authors = card.querySelector('.pub__authors');
      const venue = card.querySelector('.pub__venue .venue');
      const abstract = card.querySelector('.pub__abstract');
      const pills = card.querySelectorAll('.pub__links .pill');
      if (title) title.textContent = items[i].title;
      if (authors) authors.innerHTML = '<strong>A. Bagmbaye</strong>' + items[i].authors.replace(/^A\. Bagmbaye/, '');
      if (venue) venue.textContent = items[i].venue;
      if (abstract) abstract.textContent = items[i].abstract;
      pills.forEach((pill, idx) => { if (items[i].pills[idx]) pill.textContent = items[i].pills[idx]; });
    }
  });
}

function updateResearchSection(lang) {
  const data = {
    en: {
      lead: 'Three papers currently in preparation. Titles and venues will be updated as they are submitted.',
      filters: ['All', 'AI & Agents', 'Data & Health', 'Networks'],
      more: 'Full CV (PDF) →'
    },
    fr: {
      lead: 'Trois articles sont actuellement en préparation. Les titres et les lieux seront mis à jour au moment de la soumission.',
      filters: ['Tous', 'IA & Agents', 'Données & Santé', 'Réseaux'],
      more: 'CV complet (PDF) →'
    },
    zh: {
      lead: '三篇论文目前正在准备中。标题和会议地点将在提交后更新。',
      filters: ['全部', 'AI 与代理', '数据与健康', '网络'],
      more: '完整简历 (PDF) →'
    }
  };
  const t = data[lang] || data.en;
  const lead = document.querySelector('#research .section__lead');
  if (lead) lead.textContent = t.lead;

  const filterButtons = document.querySelectorAll('#research .filter');
  filterButtons.forEach((btn, i) => {
    if (t.filters[i]) btn.textContent = t.filters[i];
  });

  const more = document.querySelector('#research .section__more a');
  if (more) more.textContent = t.more;
}

function updateNewsSection(lang) {
  const data = {
    en: [
      { time: 'Aug 2026', text: 'Launched this personal website, built from scratch with vanilla HTML/CSS/JS. <a href="https://github.com/98wings" target="_blank" rel="noopener">Source</a>', button: 'Show more' },
      { time: 'Sep 2025', text: 'Started the M.Sc. in Computer Science and Technology at Dalian University of Technology. 🇨🇳' },
      { time: 'Jul 2025', text: 'Completed a semester as University Lecturer at the University of Pala, with 200+ teaching hours.' },
      { time: 'Feb 2025', text: 'Finished the production & IT internship at ONAMA, Chad\'s national public broadcaster.' },
      { time: 'Jun 2024', text: 'Began volunteering with the United Nations Volunteers programme.' },
      { time: 'Oct 2023', text: 'Defended my Master\'s thesis on missing-data imputation in public health time series.' }
    ],
    fr: [
      { time: 'Août 2026', text: 'Lancé ce site personnel, construit de zéro en HTML/CSS/JS. <a href="https://github.com/98wings" target="_blank" rel="noopener">Source</a>', button: 'Afficher plus' },
      { time: 'Sep 2025', text: 'Démarré le M.Sc. en Informatique et Technologie à l\'Université de Technologie de Dalian. 🇨🇳' },
      { time: 'Juil 2025', text: 'Terminé un semestre en tant que Maître de conférences à l\'Université de Pala, avec 200+ heures d\'enseignement.' },
      { time: 'Fév 2025', text: 'Terminé le stage de production et informatique à ONAMA, radiodiffuseur public national du Tchad.' },
      { time: 'Juin 2024', text: 'Commencé le bénévolat avec le programme des Bénévoles des Nations unies.' },
      { time: 'Oct 2023', text: 'Soutenu ma thèse de Master sur l\'imputation de données manquantes dans les séries chronologiques de santé publique.' }
    ],
    zh: [
      { time: '2026年8月', text: '启动了这个个人网站,使用纯 HTML/CSS/JS 从头开始构建。<a href="https://github.com/98wings" target="_blank" rel="noopener">源代码</a>', button: '显示更多' },
      { time: '2025年9月', text: '开始攻读大连理工大学计算机科学与技术硕士学位。🇨🇳' },
      { time: '2025年7月', text: '在帕拉大学完成了一学期的大学讲师工作,教学时数超过 200 小时。' },
      { time: '2025年2月', text: '完成了在乍得国家公营广播电台 ONAMA 的制作和信息技术实习。' },
      { time: '2024年6月', text: '开始在联合国志愿者计划中担任志愿者。' },
      { time: '2023年10月', text: '为我的硕士论文(关于公共卫生时间序列中的缺失数据填补)进行答辩。' }
    ]
  };
  const items = data[lang] || data.en;
  const newsItems = document.querySelectorAll('#newsList .news__item');
  newsItems.forEach((item, i) => {
    if (items[i]) {
      const timeEl = item.querySelector('time');
      const pEl = item.querySelector('p');
      if (timeEl) timeEl.textContent = items[i].time;
      if (pEl) pEl.innerHTML = items[i].text;
    }
  });

  const btn = document.getElementById('newsToggle');
  if (btn) {
    btn.textContent = items[0] && items[0].button ? items[0].button : (lang === 'fr' ? 'Afficher plus' : lang === 'zh' ? '显示更多' : 'Show more');
  }
}

function updateProjectsSection(lang) {
  const data = {
    en: {
      filters: ['All', 'Research', 'Software', 'Social impact'],
      cards: [
        { title: 'University portal: Student Association module', text: 'Public-sector web service built, documented and handed over to the University of Ngaoundéré\'s IT team. Still in production.', tags: ['PHP', 'JavaScript', 'MySQL'], link: 'Visit the site' },
        { title: 'Health data imputation pipeline', text: 'Comparative benchmark of imputation methods on incomplete national malaria records, producing series usable for statistical analysis.', tags: ['Python', 'R', 'Time Series'], link: 'Read more' },
        { title: 'UN knowledge products & campaigns', text: 'Bilingual briefs, graphics and multimedia produced across UNV assignments for UNDP, WHO, ROWCA and UNECA.', tags: ['Adobe CC', 'Writing', 'FR/EN'], link: 'About UNV' }
      ]
    },
    fr: {
      filters: ['Tous', 'Recherche', 'Logiciel', 'Impact social'],
      cards: [
        { title: 'Portail universitaire : module de l\'Association des Étudiants', text: 'Service web du secteur public construit, documenté et remis à l\'équipe informatique de l\'Université de Ngaoundéré. Toujours en production.', tags: ['PHP', 'JavaScript', 'MySQL'], link: 'Voir le site' },
        { title: 'Pipeline d\'imputation des données de santé', text: 'Benchmark comparatif des méthodes d\'imputation sur des dossiers incomplets de paludisme national, produisant des séries utilisables pour l\'analyse statistique.', tags: ['Python', 'R', 'Séries temporelles'], link: 'En savoir plus' },
        { title: 'Produits et campagnes de l\'ONU', text: 'Notes bilingues, graphismes et éléments multimédias produits dans le cadre des missions VNU pour le PNUD, l\'OMS, ROWCA et l\'UNECA.', tags: ['Adobe CC', 'Écriture', 'FR/EN'], link: 'À propos de l\'UNV' }
      ]
    },
    zh: {
      filters: ['全部', '研究', '软件', '社会影响'],
      cards: [
        { title: '大学门户: 学生协会模块', text: '构建、文档化并交付给恩高德雷大学IT团队的公共部门网络服务。仍在生产中。', tags: ['PHP', 'JavaScript', 'MySQL'], link: '访问网站' },
        { title: '卫生数据填补流程', text: '对不完整国家疟疾记录进行填补方法的比较基准,生成可用于统计分析的时间序列。', tags: ['Python', 'R', '时间序列'], link: '了解更多' },
        { title: '联合国知识产品与活动', text: '在联合国志愿者项目中为联合国开发计划署、世卫组织、ROWCA 和 UNECA 生成的双语简报、图形和多媒体内容。', tags: ['Adobe CC', '写作', 'FR/EN'], link: '关于 UNV' }
      ]
    }
  };
  const t = data[lang] || data.en;

  const filterButtons = document.querySelectorAll('#projects .filter');
  filterButtons.forEach((btn, i) => {
    if (t.filters[i]) btn.textContent = t.filters[i];
  });

  const cards = document.querySelectorAll('#projectGrid .project');
  cards.forEach((card, i) => {
    if (t.cards[i]) {
      const title = card.querySelector('h3');
      const text = card.querySelector('p');
      const tags = card.querySelectorAll('.tags li');
      const link = card.querySelector('.link-arrow');
      if (title) title.textContent = t.cards[i].title;
      if (text) text.textContent = t.cards[i].text;
      tags.forEach((tag, idx) => { if (t.cards[i].tags[idx]) tag.textContent = t.cards[i].tags[idx]; });
      if (link) link.textContent = t.cards[i].link;
    }
  });
}

function updateServiceSection(lang) {
  const data = {
    en: {
      teachingTitle: 'Teaching',
      serviceTitle: 'Service & Volunteering',
      skillsTitle: 'Technical Skills',
      teaching: [
        { strong: 'University Lecturer', text: ' in Computer Science, four departments', meta: 'Feb–Jul 2025 · University of Pala, Chad · 200+ hours, 100+ students' },
        { strong: 'Tutorials & practical sessions', text: ' for large undergraduate cohorts', meta: '2025 · University of Pala' }
      ],
      service: [
        { strong: 'Online Volunteer', text: ' at United Nations Volunteers ', meta: '(2024 — present)' },
        { strong: 'Digital Inclusion Volunteer', text: ' at Orange Cameroon ', meta: '(2023)' },
        { strong: 'Community IT support', text: ' for students and local organisations ', meta: '(ongoing)' }
      ],
      skills: [
        { strong: 'Data & ML', text: ': Python, R, SQL, Power BI, time series, imputation' },
        { strong: 'Web', text: ': HTML5, CSS3, JavaScript, PHP, Git' },
        { strong: 'Media & Office', text: ': Adobe CC, Avid Media Composer, Microsoft Office' }
      ]
    },
    fr: {
      teachingTitle: 'Enseignement',
      serviceTitle: 'Service et Bénévolat',
      skillsTitle: 'Compétences Techniques',
      teaching: [
        { strong: 'Maître de conférences', text: ' en Informatique, quatre départements', meta: 'Fév–Juil 2025 · Université de Pala, Tchad · 200+ heures, 100+ étudiants' },
        { strong: 'Tutoriels et séances pratiques', text: ' pour de grands groupes d\'étudiants de premier cycle', meta: '2025 · Université de Pala' }
      ],
      service: [
        { strong: 'Bénévole en ligne', text: ' aux Bénévoles des Nations unies ', meta: '(2024 — présent)' },
        { strong: 'Bénévole Inclusion numérique', text: ' chez Orange Cameroun ', meta: '(2023)' },
        { strong: 'Support informatique communautaire', text: ' pour les étudiants et les organisations locales ', meta: '(en cours)' }
      ],
      skills: [
        { strong: 'Données & ML', text: ': Python, R, SQL, Power BI, séries temporelles, imputation' },
        { strong: 'Web', text: ': HTML5, CSS3, JavaScript, PHP, Git' },
        { strong: 'Médias & Bureau', text: ': Adobe CC, Avid Media Composer, Microsoft Office' }
      ]
    },
    zh: {
      teachingTitle: '教学',
      serviceTitle: '服务与志愿工作',
      skillsTitle: '技术技能',
      teaching: [
        { strong: '大学讲师', text: ' 计算机科学, 四个部门', meta: '2025年2月–7月 · 帕拉大学, 乍得 · 200+ 小时, 100+ 学生' },
        { strong: '教程与实践课', text: ' 面向大规模本科生群体', meta: '2025 · 帕拉大学' }
      ],
      service: [
        { strong: '在线志愿者', text: ' 联合国志愿者计划 ', meta: '(2024 — 现在)' },
        { strong: '数字包容志愿者', text: ' 负责 Orange Cameroon ', meta: '(2023)' },
        { strong: '社区 IT 支持', text: ' 为学生和当地组织提供支持 ', meta: '(持续中)' }
      ],
      skills: [
        { strong: '数据与 ML', text: ': Python, R, SQL, Power BI, 时间序列, 数据填补' },
        { strong: 'Web', text: ': HTML5, CSS3, JavaScript, PHP, Git' },
        { strong: '媒体与办公', text: ': Adobe CC, Avid Media Composer, Microsoft Office' }
      ]
    }
  };
  const t = data[lang] || data.en;
  const groups = document.querySelectorAll('#service .tri > div');

  if (groups[0]) {
    const h2 = groups[0].querySelector('.section__title--sm');
    if (h2) h2.textContent = t.teachingTitle;
    const items = groups[0].querySelectorAll('.plain li');
    items.forEach((li, i) => {
      if (t.teaching[i]) {
        const strong = li.querySelector('strong');
        const span = li.querySelector('span');
        if (strong) strong.textContent = t.teaching[i].strong;
        if (span) span.textContent = t.teaching[i].meta;
        const textNode = Array.from(li.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.textContent = t.teaching[i].text;
      }
    });
  }

  if (groups[1]) {
    const h2 = groups[1].querySelector('.section__title--sm');
    if (h2) h2.textContent = t.serviceTitle;
    const items = groups[1].querySelectorAll('.plain li');
    items.forEach((li, i) => {
      if (t.service[i]) {
        const strong = li.querySelector('strong');
        const span = li.querySelector('span');
        if (strong) strong.textContent = t.service[i].strong;
        if (span) span.textContent = t.service[i].meta;
        const textNode = Array.from(li.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.textContent = t.service[i].text;
      }
    });
  }

  if (groups[2]) {
    const h2 = groups[2].querySelector('.section__title--sm');
    if (h2) h2.textContent = t.skillsTitle;
    const items = groups[2].querySelectorAll('.plain li');
    items.forEach((li, i) => {
      if (t.skills[i]) {
        const strong = li.querySelector('strong');
        if (strong) strong.textContent = t.skills[i].strong;
        const textNode = Array.from(li.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.textContent = t.skills[i].text;
      }
    });
  }
}

function updateMiscSection(lang) {
  const data = {
    en: {
      title: 'Beyond research',
      text: 'Grew up in Chad, studied in Cameroon, now live in Dalian: three places that agree on little except good food. Outside the lab I read, follow football, cook for friends, and I\'m learning to photograph the sea in a Dalian winter.',
      chips: ['Reading', 'Football', 'Photography', 'Cooking', 'Languages', 'Volunteering']
    },
    fr: {
      title: 'Au-delà de la recherche',
      text: 'Grandi au Tchad, étudié au Cameroun, je vis maintenant à Dalian : trois endroits qui s\'accordent sur peu de choses sauf la bonne cuisine. En dehors du labo, je lis, suis le football, cuisine pour mes amis, et j\'apprends à photographier la mer en hiver à Dalian.',
      chips: ['Lecture', 'Football', 'Photographie', 'Cuisine', 'Langues', 'Bénévolat']
    },
    zh: {
      title: '研究之外',
      text: '在乍得长大,在喀麦隆求学,现居大连:三个地方几乎在所有事情上都意见不合,除了对美食的看法。工作之余我阅读、关注足球、为朋友下厨,并正在学习拍摄大连冬天的海景。',
      chips: ['阅读', '足球', '摄影', '烹饪', '语言', '志愿服务']
    }
  };
  const t = data[lang] || data.en;
  const title = document.querySelector('#misc .section__title');
  if (title) title.textContent = t.title;
  const text = document.querySelector('#misc .misc p');
  if (text) text.textContent = t.text;
  const chips = document.querySelectorAll('#misc .chips li span');
  chips.forEach((span, i) => { if (t.chips[i]) span.textContent = t.chips[i]; });
}

// 获取翻译
function getTranslation(key, lang) {
  const keys = key.split('.');
  let value = translations[lang];
  for (let k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  return value;
}

// 切换语言
function switchLanguage(lang) {
  if (!translations[lang]) return;
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('language', lang);
  updateLanguageButtons(lang);
  updatePageLanguage(lang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// 更新页面内容
function updatePageLanguage(lang) {
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(key, lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', text);
      }
    } else {
      el.textContent = text;
    }
  });
  
  updateStats(lang);
  updateAboutSection(lang);
  updateSkills(lang);
  updateAboutCard(lang);
  updateEducationSection(lang);
  updateExperienceSection(lang);
  updateResearchSection(lang);
  updateResearchPublications(lang);
  updateAwardsSection(lang);
  updateNewsSection(lang);
  updateProjectsSection(lang);
  updateServiceSection(lang);
  updateMiscSection(lang);
  updateContactSection(lang);
}

// 获取翻译文本
function t(path) {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  return getTranslation(path, lang);
}

// 初始化
document.addEventListener('DOMContentLoaded', initLanguageSystem);
