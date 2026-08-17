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
    about: { title: 'About' },
    education: { title: 'Education' },
    experience: { title: 'Experience' },
    research: { title: 'Research' },
    projects: { title: 'Projects' },
    news: { title: 'News' },
    contact: { title: 'Get in touch' }
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
    about: { title: 'À propos' },
    education: { title: 'Formation' },
    experience: { title: 'Expérience' },
    research: { title: 'Recherche' },
    projects: { title: 'Projets' },
    news: { title: 'Actualités' },
    contact: { title: 'Me contacter' }
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
    about: { title: '关于' },
    education: { title: '教育背景' },
    experience: { title: '经历' },
    research: { title: '研究' },
    projects: { title: '项目' },
    news: { title: '新闻' },
    contact: { title: '联系我' }
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
      'I am a computer science engineer and postgraduate researcher, currently enrolled in a M.Sc. in Computer Science and Technology at the Dalian University of Technology, China. I already hold a Master\'s in Computer Engineering from the University of Ngaoundéré, Cameroon.',
      'My current research asks a simple question with awkward consequences: when an autonomous agent gets something right, which of its stored memories deserves the credit? I work on causal credit attribution for self-evolving AI agent memory: mechanisms that trace outcomes back to their contributing inputs, so an agent keeps only what demonstrably earns its place. Before that, I spent two years on missing-data imputation in public health time series, rebuilding incomplete national malaria records into series usable for actual decision-making.',
      'Originally from Chad, I have taught 200+ hours at a public university, supported operations in a member-owned microfinance network and a national public broadcaster, and completed several United Nations volunteer assignments with UNDP, WHO, ROWCA and UNECA. That mix of research rigour on one side and resource-constrained field reality on the other is what I bring to a team.',
      'I am open to research collaborations, internships and PhD opportunities in AI, data science and digital development. Write to me, I answer every message.'
    ],
    fr: [
      'Je suis ingénieur informatique et chercheur de troisième cycle, actuellement inscrit en M.Sc. en Informatique et Technologie à l\'Université de Technologie de Dalian, Chine. Je possède déjà un Master en Génie Informatique de l\'Université de Ngaoundéré, Cameroun.',
      'Ma recherche actuelle pose une question simple aux conséquences délicates : quand un agent autonome réussit quelque chose, laquelle de ses mémoires stockées mérite le crédit ? Je travaille sur l\'attribution causale du crédit pour la mémoire des agents IA auto-évolutifs : des mécanismes qui remontent les résultats à leurs entrées contributives, afin qu\'un agent ne conserve que ce qui le mérite démontrablement. Avant cela, j\'ai passé deux ans sur l\'imputation de données manquantes dans les séries chronologiques de santé publique, reconstruisant des dossiers nationaux incomplets de paludisme en séries utilisables pour les décisions réelles.',
      'Originaire du Tchad, j\'ai enseigné 200+ heures dans une université publique, soutenu les opérations d\'un réseau de microfinance mutuelle et d\'une chaîne de télévision publique nationale, et réalisé plusieurs missions de volontariat des Nations unies avec le PNUD, l\'OMS, ROWCA et UNECA. Ce mélange de rigueur scientifique d\'un côté et de réalité de terrain à ressources limitées de l\'autre est ce que j\'apporte à une équipe.',
      'Je suis ouvert aux collaborations de recherche, aux stages et aux opportunités de doctorat en IA, science des données et développement numérique. Écrivez-moi, je réponds à chaque message.'
    ],
    zh: [
      '我是计算机科学工程师和研究生研究者,目前在大连理工大学攻读计算机科学与技术硕士学位,中国。我已获得喀麦隆恩高德雷大学计算机工程硕士学位。',
      '我的研究提出了一个简单但令人尴尬的问题:当自主代理成功完成任务时,它存储的哪个记忆应该获得信用?我致力于自我演化人工智能代理记忆的因果信用归因:机制将结果追溯到其贡献的输入,以便代理只保留明确值得保留的内容。在此之前,我花了两年时间研究公共卫生时间序列中的缺失数据填补,将不完整的国家疟疾记录重建为可用于实际决策的序列。',
      '我来自乍得,在一所公立大学教授了200多小时,支持过互助微金融网络和国家公营广播的运营,并完成了多项联合国志愿者任务,包括联合国开发计划署、世界卫生组织、ROWCA和UNECA。我在研究严谨性和资源受限的实地工作之间融合了这些经验,这是我为团队带来的价值。',
      '我开放接纳人工智能、数据科学和数字发展领域的研究合作、实习和博士机会。请写信给我,我会回复每一条信息。'
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
  const chips = document.querySelectorAll('.chips li');
  chips.forEach((chip, i) => {
    if (list[i]) chip.textContent = list[i];
  });
}

// Mettre à jour la section About card
function updateAboutCard(lang) {
  const data = {
    en: { title: 'At a glance', position: 'M.Sc. student & researcher', institution: 'Dalian University of Technology', location: 'Dalian, Liaoning, China', languages: 'French (native) · English (professional) · Chinese (elementary)', status: 'Open to collaborations' },
    fr: { title: 'En bref', position: 'Étudiant M.Sc. et chercheur', institution: 'Université de Technologie de Dalian', location: 'Dalian, Liaoning, Chine', languages: 'Français (natif) · Anglais (professionnel) · Chinois (élémentaire)', status: 'Ouvert aux collaborations' },
    zh: { title: '一览', position: '硕士学生和研究者', institution: '大连理工大学', location: '中国辽宁省大连市', languages: '法语(母语) · 英语(专业) · 中文(初级)', status: '开放合作' }
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
  if (dds[4]) dds[4].textContent = card.languages;
  if (dds[5]) dds[5].textContent = card.status;
}

// Mettre à jour la section Education
function updateEducationSection(lang) {
  const data = {
    en: [
      { date: 'Sep 2025 — Present', degree: 'M.Sc. in Computer Science and Technology', school: 'Dalian University of Technology', location: 'Dalian, R.P. China · currently enrolled', desc: 'Graduate research on causal credit attribution for self-evolving AI agent memory, alongside coursework in machine learning and advanced computing.', tags: ['AI Agents', 'Machine Learning', 'Research'] },
      { date: 'Oct 2021 — Oct 2023', degree: 'M.Sc. in Computer Engineering', school: 'University of Ngaoundéré', location: 'Ngaoundéré, Cameroon · Thesis written', desc: 'Thesis on missing-data imputation in public health time series: comparative evaluation of imputation methods on incomplete national malaria records.', tags: ['Time Series', 'Imputation', 'Public Health'] },
      { date: 'Oct 2021 — Nov 2022', degree: 'B.Sc. in Software Engineering', school: 'University Institute of Technology', location: 'Ngaoundéré, Cameroon · Final project · taken concurrently with the M.Sc.', desc: 'Applied software engineering programme completed in parallel with graduate study; final project deployed on the official university portal.', tags: ['Software Engineering', 'Web'] },
      { date: 'Oct 2018 — Oct 2021', degree: 'B.Sc. in Computer Science', school: 'University of Ngaoundéré', location: 'Ngaoundéré, Cameroon', desc: 'Fundamental computer science: algorithms, systems, networks and mathematics.', tags: ['Algorithms', 'Systems', 'Networks'] }
    ],
    fr: [
      { date: 'Sep 2025 — Présent', degree: 'M.Sc. en Informatique et Technologie', school: 'Université de Technologie de Dalian', location: 'Dalian, R.P. Chine · actuellement inscrit', desc: 'Recherche d\'études supérieures sur l\'attribution causale du crédit pour la mémoire auto-évolutive des agents IA, parallèlement à des cours en apprentissage automatique et informatique avancée.', tags: ['Agents IA', 'Apprentissage Automatique', 'Recherche'] },
      { date: 'Oct 2021 — Oct 2023', degree: 'M.Sc. en Génie Informatique', school: 'Université de Ngaoundéré', location: 'Ngaoundéré, Cameroun · Thèse rédigée', desc: 'Thèse sur l\'imputation de données manquantes dans les séries chronologiques de santé publique : évaluation comparative des méthodes d\'imputation sur des dossiers nationaux incomplets de paludisme.', tags: ['Séries Temporelles', 'Imputation', 'Santé Publique'] },
      { date: 'Oct 2021 — Nov 2022', degree: 'B.Sc. en Génie Logiciel', school: 'Institut Universitaire de Technologie', location: 'Ngaoundéré, Cameroun · Projet final · suivi en parallèle du M.Sc.', desc: 'Programme de génie logiciel appliqué complété en parallèle avec les études supérieures ; projet final déployé sur le portail officiel de l\'université.', tags: ['Génie Logiciel', 'Web'] },
      { date: 'Oct 2018 — Oct 2021', degree: 'B.Sc. en Informatique', school: 'Université de Ngaoundéré', location: 'Ngaoundéré, Cameroun', desc: 'Informatique fondamentale : algorithmes, systèmes, réseaux et mathématiques.', tags: ['Algorithmes', 'Systèmes', 'Réseaux'] }
    ],
    zh: [
      { date: '2025年9月 — 现在', degree: '计算机科学与技术硕士', school: '大连理工大学', location: '中国大连 · 在读', desc: '自我演化人工智能代理记忆因果信用归因的研究生研究,同时修读机器学习和高级计算课程。', tags: ['人工智能代理', '机器学习', '研究'] },
      { date: '2021年10月 — 2023年10月', degree: '计算机工程硕士', school: '恩高德雷大学', location: '喀麦隆恩高德雷 · 论文已完成', desc: '关于公共卫生时间序列缺失数据填补的论文:对不完整国家疟疾记录进行填补方法的比较评估。', tags: ['时间序列', '数据填补', '公共卫生'] },
      { date: '2021年10月 — 2022年11月', degree: '软件工程学士', school: '大学技术学院', location: '喀麦隆恩高德雷 · 最终项目 · 与硕士课程同时进行', desc: '应用软件工程课程与研究生课程并行完成;最终项目部署在大学官方门户网站上。', tags: ['软件工程', '网络开发'] },
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
      if (headingEl) headingEl.childNodes.forEach(n => n.nodeType === Node.TEXT_NODE && (n.textContent = ed.degree));
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
      { title: 'Online Volunteer | Research, Drafting & Communications', date: 'Jun 2024 — Present', org: 'United Nations Volunteers (UNV) · Remote: UNDP, WHO, ROWCA, UNECA', desc: 'Completed several UN volunteer assignments across four agencies, supporting SDG-aligned programmes in digital skills, AI awareness and public health. Drafted knowledge products and programme briefs, translating technical content into clear summaries for non-specialist audiences, and produced bilingual French/English material extending the reach of WHO and UNECA campaigns.', tags: ['Research', 'Drafting', 'Bilingual FR/EN', 'SDGs'] },
      { title: 'University Lecturer | Computer Science', date: 'Nov 2021 — Oct 2023', org: 'University of Ngaoundéré · Ngaoundéré, Cameroon', desc: 'Taught 200+ hours across four semesters: Data Structures & Algorithms (first-year), Web Development (third-year). Prepared course materials, graded assignments, and participated in exam supervision and academic committee work.', tags: ['Teaching', 'Curriculum', '200+ hours'] },
      { title: 'Credit & Operations Analyst | Microfinance Network', date: 'Apr 2021 — Aug 2021', org: 'Union of Savings and Credit Clubs (UCEC MK) · Pala, Chad', desc: 'Conducted credit-recovery field missions for a member-owned microfinance network, tracking and reconciling defaulted loan portfolios in the PERFECT banking system. Collected and cleaned operational data across branches, and authored the functional specification for a website modernizing member services.', tags: ['Microfinance', 'Data Reconciliation', 'IT Support'] },
      { title: 'Digital Inclusion Volunteer | University Outreach', date: 'Sep 2023 — Oct 2023', org: 'Orange Cameroon · Ngaoundéré, Cameroon', desc: 'Planned and delivered campus awareness events for the Parcours Sup digital orientation platform: logistics, materials and on-site facilitation, strengthening links between the private sector and higher education.', tags: ['Outreach', 'Digital Inclusion', 'Events'] },
      { title: 'Student Intern | Web Development', date: 'Jun 2022 — Sep 2022', org: 'ICT Development Center (CDTIC) · Ngaoundéré, Cameroon', desc: 'Designed, developed and deployed the Student Association module of the official portal of the University of Ngaoundéré (univ-ndere.cm), a public-sector digital service used by the entire student body. I documented it and handed it over to the in-house IT team, which still operates it.', tags: ['PHP', 'JavaScript', 'Public Sector'] }
    ],
    fr: [
      { title: 'Bénévole en ligne | Recherche, Rédaction et Communications', date: 'Jun 2024 — Présent', org: 'Bénévoles des Nations unies (VNU) · À distance : PNUD, OMS, ROWCA, UNECA', desc: 'Réalisé plusieurs missions de bénévolat de l\'ONU dans quatre agences, soutenant des programmes alignés sur les ODD dans les domaines des compétences numériques, de la sensibilisation à l\'IA et de la santé publique. Rédigé des produits de connaissance et des brèves programmatiques, traduisant le contenu technique en résumés clairs pour les non-spécialistes, et produit des matériels bilingues français/anglais élargissant la portée des campagnes de l\'OMS et de la UNECA.', tags: ['Recherche', 'Rédaction', 'Bilingue FR/EN', 'ODD'] },
      { title: 'Maître de conférences | Informatique', date: 'Nov 2021 — Oct 2023', org: 'Université de Ngaoundéré · Ngaoundéré, Cameroun', desc: 'Enseigné 200+ heures sur quatre semestres : Structures de données et algorithmes (première année), Développement web (troisième année). Préparé les matériels de cours, évalué les travaux, et participé à la surveillance des examens et aux travaux des comités académiques.', tags: ['Enseignement', 'Curriculum', '200+ heures'] },
      { title: 'Analyste Crédit et Opérations | Réseau de Microfinance', date: 'Apr 2021 — Aug 2021', org: 'Union des Clubs d\'Épargne et de Crédit (UCEC MK) · Pala, Tchad', desc: 'Réalisé des missions de recouvrement de crédit pour un réseau mutualiste de microfinance, suivi et rapprochement des portefeuilles de prêts en défaut dans le système bancaire PERFECT. Collecté et nettoyé les données opérationnelles dans les succursales, et rédigé le cahier des charges fonctionnelles pour moderniser les services aux membres.', tags: ['Microfinance', 'Réconciliation de données', 'Support informatique'] },
      { title: 'Bénévole Inclusion Numérique | Sensibilisation Universitaire', date: 'Sep 2023 — Oct 2023', org: 'Orange Cameroun · Ngaoundéré, Cameroun', desc: 'Planifié et dirigé des événements de sensibilisation sur le campus pour la plateforme d\'orientation numérique Parcours Sup : logistique, matériels et facilitation sur place, renforçant les liens entre le secteur privé et l\'enseignement supérieur.', tags: ['Sensibilisation', 'Inclusion numérique', 'Événements'] },
      { title: 'Stagiaire | Développement Web', date: 'Jun 2022 — Sep 2022', org: 'Centre de Développement des TIC (CDTIC) · Ngaoundéré, Cameroun', desc: 'Conçu, développé et déployé le module Association des Étudiants du portail officiel de l\'Université de Ngaoundéré (univ-ndere.cm), un service numérique du secteur public utilisé par l\'ensemble des étudiants. L\'ai documenté et confié à l\'équipe informatique interne, qui l\'exploite toujours.', tags: ['PHP', 'JavaScript', 'Secteur public'] }
    ],
    zh: [
      { title: '在线志愿者 | 研究、起草和通讯', date: '2024年6月 — 现在', org: '联合国志愿者计划(UNV) · 远程: 联合国开发计划署、世界卫生组织、ROWCA、UNECA', desc: '在四个机构完成多项联合国志愿者任务,支持可持续发展目标相关的数字技能、人工智能意识和公共卫生计划。起草知识产品和方案摘要,将技术内容转化为非专业受众的清晰摘要,并制作法文/英文双语材料,扩大世界卫生组织和UNECA活动的影响。', tags: ['研究', '起草', '双语法语/英语', '可持续发展目标'] },
      { title: '大学讲师 | 计算机科学', date: '2021年11月 — 2023年10月', org: '恩高德雷大学 · 喀麦隆恩高德雷', desc: '四个学期授课200多小时:数据结构与算法(一年级)、网络开发(三年级)。准备课程材料、批改作业,并参与考试监督和学术委员会工作。', tags: ['教学', '课程开发', '200+小时'] },
      { title: '信用和运营分析师 | 微金融网络', date: '2021年4月 — 2021年8月', org: '储蓄和信贷俱乐部联盟(UCEC MK) · 乍得帕拉', desc: '为互助微金融网络完成信用回收实地任务,在PERFECT银行系统中追踪和协调逾期贷款组合。收集并清理各分支的运营数据,并为现代化成员服务的网站编写功能规范。', tags: ['微金融', '数据协调', '信息技术支持'] },
      { title: '数字融资志愿者 | 大学推广', date: '2023年9月 — 2023年10月', org: '橙色喀麦隆 · 喀麦隆恩高德雷', desc: '为Parcours Sup数字定向平台规划和组织校园意识活动:物流、材料和现场协助,加强私营部门与高等教育之间的联系。', tags: ['推广', '数字融资', '活动'] },
      { title: '学生实习生 | 网络开发', date: '2022年6月 — 2022年9月', org: '信息技术发展中心(CDTIC) · 喀麦隆恩高德雷', desc: '设计、开发并部署恩高德雷大学官方门户网站(univ-ndere.cm)的学生协会模块,这是整个学生群体使用的公共部门数字服务。我记录了它并移交给了内部IT团队,该团队至今仍在操作它。', tags: ['PHP', 'JavaScript', '公共部门'] }
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
      if (orgEl) orgEl.textContent = exp.org;
      const descEl = card.querySelector('.card__org + p');
      if (descEl) descEl.textContent = exp.desc;
      const tags = card.querySelectorAll('.tags li');
      tags.forEach((tag, i) => { if (exp.tags[i]) tag.textContent = exp.tags[i]; });
    }
  });
}

// Mettre à jour la section Contact
function updateContactSection(lang) {
  const data = {
    en: { nameLabel: 'Name', namePlaceholder: 'Your name', emailLabel: 'Email', emailPlaceholder: 'you@example.com', messageLabel: 'Message', messagePlaceholder: 'Your message', submitBtn: 'Send', lead: 'The fastest way to reach me is by email. I am happy to talk about research collaborations, internships, PhD positions, or anything on this page.' },
    fr: { nameLabel: 'Nom', namePlaceholder: 'Votre nom', emailLabel: 'Email', emailPlaceholder: 'vous@example.com', messageLabel: 'Message', messagePlaceholder: 'Votre message', submitBtn: 'Envoyer', lead: 'Le moyen le plus rapide de me joindre est par email. Je suis heureux de discuter de collaborations de recherche, de stages, de positions de doctorat, ou de n\'importe quel sujet sur cette page.' },
    zh: { nameLabel: '名字', namePlaceholder: '您的名字', emailLabel: '电子邮件', emailPlaceholder: 'you@example.com', messageLabel: '信息', messagePlaceholder: '您的消息', submitBtn: '发送', lead: '最快联系我的方式是通过电子邮件。我很乐意讨论研究合作、实习、博士职位或此页面上的任何内容。' }
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
        li.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0) {
            node.textContent = t.teaching[i].text;
          }
        });
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
      text: 'I grew up in Chad, studied in Cameroon and now live in Dalian. Three places that disagree about almost everything except the value of a good meal. Outside the lab I read non-fiction, follow football, cook dishes from home for friends, and I am slowly learning to photograph the sea in a Dalian winter. I also spend more time than I should adjusting CSS.',
      chips: ['📚 Reading', '⚽ Football', '📷 Photography', '🍲 Cooking', '🌐 Languages', '🤝 Volunteering']
    },
    fr: {
      title: 'Au-delà de la recherche',
      text: 'J\'ai grandi au Tchad, étudié au Cameroun et vis maintenant à Dalian. Trois endroits qui ne sont pas d\'accord sur presque tout, sauf la valeur d\'un bon repas. En dehors du labo, je lis des ouvrages de non-fiction, regarde le football, cuisine des plats de chez moi pour mes amis, et j\'apprends lentement à photographier la mer en hiver à Dalian. Je passe aussi plus de temps que je ne devrais à ajuster le CSS.',
      chips: ['📚 Lecture', '⚽ Football', '📷 Photographie', '🍲 Cuisine', '🌐 Langues', '🤝 Bénévolat']
    },
    zh: {
      title: '研究之外',
      text: '我出生在乍得,曾在喀麦隆求学,现在生活在大连。三个地方几乎对所有事都有分歧,只有一件事除外:一顿好饭的价值。在实验室之外,我阅读非小说类书籍、关注足球、为朋友做家乡菜,并且正在慢慢学习在大连冬天拍摄海景。我也花了比我想象中更多的时间来调整 CSS。',
      chips: ['📚 阅读', '⚽ 足球', '📷 摄影', '🍲 烹饪', '🌐 语言', '🤝 志愿服务']
    }
  };
  const t = data[lang] || data.en;
  const title = document.querySelector('#misc .section__title');
  if (title) title.textContent = t.title;
  const text = document.querySelector('#misc .misc p');
  if (text) text.textContent = t.text;
  const chips = document.querySelectorAll('#misc .chips li');
  chips.forEach((li, i) => { if (t.chips[i]) li.textContent = t.chips[i]; });
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
