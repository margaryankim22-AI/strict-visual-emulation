// Bilingual dictionary. Brand "Citadel" is ALWAYS kept in Latin script in both languages.
export type Lang = "en" | "hy";

export const translations = {
  // Navigation
  "nav.about": { en: "About", hy: "Մեր մասին" },
  "nav.programs": { en: "Programs", hy: "Ծրագրեր" },
  "nav.vision": { en: "Vision", hy: "Տեսլական" },
  "nav.youth": { en: "Youth", hy: "Երիտասարդություն" },
  "nav.transparency": { en: "Volunteering", hy: "Կամավորություն" },
  "nav.getInvolved": { en: "Get Involved", hy: "Միացե՛ք մեզ" },

  // Brand / tagline
  "brand.tagline": { en: "Together for justice", hy: "Միասին՝ հանուն արդարության" },
  "brand.wordmark": { en: "Citadel", hy: "Ցիտադել" },

  // Home — hero
  "home.heroEyebrow": { en: "CITADEL — HUMAN RIGHTS DEFENDER NGO, SYUNIK", hy: "CITADEL — ԻՐԱՎԱՊԱՇՏՊԱՆ ՀԿ, ՍՅՈՒՆԻՔ" },
  "home.heroTitle": { en: "Protecting civil and labor rights in Armenia.", hy: "Քաղաքացիական և աշխատանքային իրավունքների պաշտպանություն Հայաստանում" },
  "home.heroLead": {
    en: "Citadel is an independent legal defense organization protecting the rights of every citizen and community in Armenia's Syunik region.",
    hy: "Citadel-ը անկախ իրավապաշտպան կազմակերպություն է, որը պաշտպանում է Հայաստանի Սյունիքի մարզի յուրաքանչյուր քաղաքացու և համայնքի իրավունքները։",
  },
  "home.heroCtaPrimary": { en: "Explore Our Programs", hy: "Տեսնել մեր ծրագրերը" },
  "home.heroCtaSecondary": { en: "Read Our Story", hy: "Կարդալ մեր պատմությունը" },

  // Stats
  "stats.citizens.value": { en: "2,600+", hy: "2,600+" },
  "stats.citizens.label": { en: "Citizens Supported", hy: "Աջակցված քաղաքացիներ" },
  "stats.budget.value": { en: "14M AMD", hy: "14մլն ֏" },
  "stats.budget.label": { en: "Legal Aid Fund", hy: "Իրավական աջակցության ֆոնդ" },
  "stats.reach.value": { en: "200,000+", hy: "200,000+" },
  "stats.reach.label": { en: "Civic Awareness Goal", hy: "Իրազեկման նպատակ" },
  "stats.reg.value": { en: "211.171.1446066", hy: "211.171.1446066" },
  "stats.reg.label": { en: "State Registration", hy: "Պետական գրանցում" },

  // Pillars (5 — one per accent color, link to a section)
  "pillar.about.title": { en: "Community foundation & resilience", hy: "Համայնքային հենք և կայունություն" },
  "pillar.about.desc": { en: "At the core of our work is the empowerment of local communities and workers — for lasting, sustainable change.", hy: "Մեր գործունեության հիմքում տեղական համայնքների և աշխատավորների հզորացումն է՝ հանուն տևական ու կայուն փոփոխությունների։" },
  "pillar.programs.title": { en: "Path of Law", hy: "Իրավունքի ճանապարհ" },
  "pillar.programs.desc": { en: "Consistent legal support, defense against unfounded (SLAPP) lawsuits, and restoration of labor rights.", hy: "Հետևողական իրավական աջակցություն, պաշտպանություն անհիմն (SLAPP) դատական հայցերից և աշխատանքային իրավունքների վերականգնում։" },
  "pillar.vision.title": { en: "Strategic Vision 2030", hy: "Ռազմավարական տեսլական 2030" },
  "pillar.vision.desc": { en: "Long-term programs and systemic solutions aimed at strengthening civic protection institutions in Armenia.", hy: "Երկարաժամկետ ծրագրեր և համակարգային լուծումներ՝ ուղղված Հայաստանում քաղաքացիական պաշտպանության ինստիտուտների ուժեղացմանը։" },
  "pillar.youth.title": { en: "Rights Ambassadors", hy: "Իրավունքի դեսպաններ" },
  "pillar.youth.desc": { en: "Educating civic and community activists, raising legal literacy, and building a strong network of rights defenders.", hy: "Քաղաքացիական և համայնքային ակտիվիստների կրթում, իրավագիտության բարձրացում և իրավապաշտպանների հզոր ցանցի ձևավորում։" },
  "pillar.transparency.title": { en: "Accountability & Impact", hy: "Հաշվետվողականություն և Ազդեցություն" },
  "pillar.transparency.desc": { en: "Transparent program management, accountability to partners, and real evaluation of the impact of our work.", hy: "Ծրագրերի թափանցիկ կառավարում, հաշվետվողականություն գործընկերներին և իրականացված աշխատանքների իրական ազդեցության գնահատում։" },

  // Path of Law featured
  "feature.eyebrow": { en: "Flagship Program", hy: "Հիմնական ծրագիր" },
  "feature.title": { en: "The Path of Law", hy: "Իրավունքի ուղի" },
  "feature.body": {
    en: "A comprehensive framework providing legal defense, civic education, and media advocacy. We translate everyday grievances into structured legal outcomes — so no community stands alone.",
    hy: "Համապարփակ հարթակ, որն ապահովում է իրավական պաշտպանություն, քաղաքացիական կրթություն և մեդիա ջատագովություն։ Մենք առօրյա բողոքները վերածում ենք կառուցվածքային իրավական լուծումների՝ որպեսզի ոչ մի համայնք միայնակ չմնա։",
  },
  "feature.point1": { en: "24/7 legal hotline and individual aid", hy: "24/7 իրավական թեժ գիծ և անհատական աջակցություն" },
  "feature.point2": { en: "10 intensive Rights Ambassador seminars", hy: "10 ինտենսիվ «Իրավունքի դեսպան» սեմինար" },
  "feature.point3": { en: "Caravan media series reaching 200,000+ citizens", hy: "«Քարավան» մեդիաշարք՝ 200,000+ քաղաքացիների հասանելի" },
  "feature.cta": { en: "See full program", hy: "Տեսնել ամբողջ ծրագիրը" },

  // Origin teaser
  "origin.eyebrow": { en: "Our Story", hy: "Մեր պատմությունը" },
  "origin.title": { en: "Forged in solidarity. Built for everyone.", hy: "Կոփված համերաշխությամբ։ Կառուցված բոլորի համար։" },
  "origin.body": {
    en: "Citadel was founded by Shavarsh Margaryan in the wake of the 2025 Kajaran labor movement — but our mandate extends to every resident, family, and community in Syunik. We exist to make legal protection ordinary, not exceptional.",
    hy: "Citadel-ը հիմնադրվել է Շավարշ Մարգարյանի կողմից՝ 2025 թվականի Քաջարանի աշխատավորական շարժման հետևանքով, սակայն մեր առաքելությունը տարածվում է Սյունիքի յուրաքանչյուր բնակչի, ընտանիքի և համայնքի վրա։ Մենք գոյություն ունենք, որպեսզի իրավական պաշտպանությունը դառնա սովորական, ոչ թե բացառիկ։",
  },
  "origin.cta": { en: "Read our full story", hy: "Կարդալ մեր ամբողջ պատմությունը" },

  // About page
  "about.title": { en: "Roots & Resilience", hy: "Արմատներ և կայունություն" },
  "about.lead": {
    en: "From a single act of solidarity to a permanent legal institution for the people of Syunik.",
    hy: "Մեկ համերաշխության ակտից մինչև Սյունիքի ժողովրդի համար մշտական իրավական ինստիտուտ։",
  },
  "about.originTitle": { en: "Where it began", hy: "Որտեղից սկսվեց" },
  "about.originBody": {
    en: "In February 2025, 2,600 workers at the Zangezur Copper Molybdenum Combine in Kajaran stood together for eleven days to demand dignity, safety, and fair wages. The strike exposed something larger than a single workplace: an entire region without an organized legal shield. Citadel was founded in direct response — not only for miners, but for every citizen of Syunik whose rights had nowhere to turn.",
    hy: "2025 թվականի փետրվարին Քաջարանի Զանգեզուրի Պղնձամոլիբդենային Կոմբինատի 2,600 աշխատողներ տասնմեկ օր կանգնեցին միասին՝ պահանջելու արժանապատվություն, անվտանգություն և արդար աշխատավարձ։ Գործադուլը բացահայտեց մի բան, որն ավելի մեծ էր, քան մեկ աշխատավայր՝ ամբողջ մարզ՝ առանց կազմակերպված իրավական վահանի։ Citadel-ը հիմնադրվեց որպես ուղղակի պատասխան՝ ոչ միայն հանքափորների, այլ Սյունիքի յուրաքանչյուր քաղաքացու համար, ում իրավունքները պաշտպանող չկար։",
  },
  "about.missionTitle": { en: "Our mission", hy: "Մեր առաքելությունը" },
  "about.missionBody": {
    en: "To make professional legal protection an everyday right for the people of Syunik — through advocacy, education, and transparent institutional practice.",
    hy: "Սյունիքի ժողովրդի համար մասնագիտական իրավական պաշտպանությունը դարձնել առօրյա իրավունք՝ ջատագովության, կրթության և թափանցիկ ինստիտուցիոնալ պրակտիկայի միջոցով։",
  },
  "about.valuesTitle": { en: "What we stand for", hy: "Ինչի համար ենք կանգնած" },
  "about.value1.title": { en: "Dignity", hy: "Արժանապատվություն" },
  "about.value1.body": { en: "Every person deserves to be treated as a full participant in the rule of law.", hy: "Յուրաքանչյուր մարդ արժանի է դիտվել որպես իրավունքի լիիրավ մասնակից։" },
  "about.value2.title": { en: "Evidence", hy: "Փաստ" },
  "about.value2.body": { en: "Our work is grounded in data, documentation, and verified outcomes.", hy: "Մեր աշխատանքը հիմնված է տվյալների, փաստաթղթերի և ստուգված արդյունքների վրա։" },
  "about.value3.title": { en: "Independence", hy: "Անկախություն" },
  "about.value3.body": { en: "We are accountable to the communities we serve — not to any single donor or interest.", hy: "Մենք հաշվետու ենք այն համայնքներին, որոնց ծառայում ենք՝ ոչ թե որևէ դոնորի կամ շահի։" },
  "about.teamTitle": { en: "Leadership", hy: "Ղեկավարություն" },
  "about.founder.name": { en: "Shavarsh Margaryan", hy: "Շավարշ Մարգարյան" },
  "about.founder.role": { en: "Founder & Director", hy: "Հիմնադիր և տնօրեն" },
  "about.founder.bio": { en: "MA in International Relations. Led the 2025 Kajaran labor movement before founding Citadel.", hy: "Միջազգային հարաբերությունների մագիստրոս։ Ղեկավարել է 2025թ. Քաջարանի աշխատավորական շարժումը մինչև Citadel-ի հիմնադրումը։" },
  "about.team.pm.name": { en: "Project Manager", hy: "Ծրագրի ղեկավար" },
  "about.team.pm.role": { en: "Path of Law", hy: "Իրավունքի ուղի" },
  "about.team.coord.name": { en: "Kajaran Coordinator", hy: "Քաջարանի համակարգող" },
  "about.team.coord.role": { en: "Field Operations", hy: "Դաշտային գործողություններ" },
  "about.team.media.name": { en: "Media Lead", hy: "Մեդիա ղեկավար" },
  "about.team.media.role": { en: "Caravan Series", hy: "«Քարավան» շարք" },

  // Programs
  "programs.title": { en: "Path of Law", hy: "Իրավունքի ուղի" },
  "programs.lead": {
    en: "Citadel's flagship program: a comprehensive legal infrastructure for the people of Syunik.",
    hy: "Citadel-ի հիմնական ծրագիրը՝ համապարփակ իրավական ենթակառուցվածք Սյունիքի ժողովրդի համար։",
  },
  "programs.s1.title": { en: "Legal Hotline & Support Hub", hy: "Իրավական թեժ գիծ և աջակցության կենտրոն" },
  "programs.s1.body": { en: "A virtual ATS system providing uninterrupted access to legal experts for real-time crisis response.", hy: "Վիրտուալ ATS համակարգ, որն ապահովում է անխափան հասանելիություն իրավաբան-փորձագետներին։" },
  "programs.s2.title": { en: "Individual Legal Aid", hy: "Անհատական իրավական աջակցություն" },
  "programs.s2.body": { en: "Technical support in drafting complaints and lawsuits — tangible outcomes, not just awareness.", hy: "Տեխնիկական աջակցություն բողոքների և հայցադիմումների կազմման հարցում՝ իրական արդյունքներ, ոչ թե միայն իրազեկում։" },
  "programs.s3.title": { en: "Rights Ambassador Seminars", hy: "«Իրավունքի դեսպան» սեմինարներ" },
  "programs.s3.body": { en: "Ten intensive two-day trainings building civil resilience and mastery of labor and civic law.", hy: "Տասը ինտենսիվ երկօրյա ուսուցում քաղաքացիական կայունության և իրավունքի տիրապետման համար։" },
  "programs.s4.title": { en: "Caravan Media Series", hy: "«Քարավան» մեդիաշարք" },
  "programs.s4.body": { en: "24 awareness clips reaching 200,000+ citizens — shifting the public narrative on dignity and rights.", hy: "24 իրազեկման տեսանյութեր՝ 200,000+ քաղաքացիների հասանելի, փոխելով հանրային պատումը։" },
  "programs.budgetTitle": { en: "How the 14M AMD budget is allocated", hy: "Ինչպես է բաշխվում 14մլն ֏ բյուջեն" },
  "programs.budget.legal": { en: "Legal aid & hotline", hy: "Իրավական աջակցություն և թեժ գիծ" },
  "programs.budget.edu": { en: "Education & seminars", hy: "Կրթություն և սեմինարներ" },
  "programs.budget.media": { en: "Media & advocacy", hy: "Մեդիա և ջատագովություն" },
  "programs.budget.ops": { en: "Operations & governance", hy: "Գործառնություններ և կառավարում" },
  "programs.lawNoteTitle": { en: "Ready for the 2026 Labor Law transition", hy: "Պատրաստ 2026թ. աշխատանքային օրենքի անցմանը" },
  "programs.lawNoteBody": {
    en: "As Armenia moves to digital labor procedures, Citadel ensures that the end of paper acts does not become the exploitation of digitally marginalized workers.",
    hy: "Քանի որ Հայաստանն անցում է կատարում թվային աշխատանքային ընթացակարգերի, Citadel-ն ապահովում է, որ թղթային ակտերի վերացումը չդառնա թվային առումով խոցելի աշխատողների շահագործում։",
  },

  // Vision
  "vision.title": { en: "Vision 2030", hy: "Տեսլական 2030" },
  "vision.lead": {
    en: "A three-to-five year roadmap to make Syunik a model for human rights protection in the Caucasus.",
    hy: "Երեք-հինգ տարվա ճանապարհային քարտեզ՝ Սյունիքը դարձնելու Կովկասում մարդու իրավունքների պաշտպանության օրինակ։",
  },
  "vision.r1.title": { en: "Digital Rights & Privacy", hy: "Թվային իրավունքներ և գաղտնիություն" },
  "vision.r1.body": { en: "Acting as a data-privacy watchdog through Armenia's 2026 digital labor transition.", hy: "Հանդես գալ որպես տվյալների գաղտնիության դիտորդ՝ 2026թ. թվային անցման ընթացքում։" },
  "vision.r2.title": { en: "Advocacy & Policy Reform", hy: "Ջատագովություն և քաղաքականության բարեփոխում" },
  "vision.r2.body": { en: "Moving from individual aid to shaping the next generation of legislation on safety and rights.", hy: "Անհատական աջակցությունից անցում՝ իրավունքի և անվտանգության նոր սերնդի օրենսդրության ձևավորմանը։" },
  "vision.r3.title": { en: "The Syunik Model", hy: "Սյունիքյան մոդելը" },
  "vision.r3.body": { en: "Scaling our framework to Kapan, Sotk, and every community in the Lesser Caucasus.", hy: "Մեր հարթակի ընդլայնում Կապանում, Սոթքում և Փոքր Կովկասի յուրաքանչյուր համայնքում։" },

  // Youth
  "youth.title": { en: "Become a Rights Ambassador", hy: "Դարձե՛ք իրավունքի դեսպան" },
  "youth.lead": {
    en: "Citadel trains young people across Syunik as the next generation of civic leaders — aligned with European Solidarity Corps standards.",
    hy: "Citadel-ը Սյունիքում պատրաստում է երիտասարդներին որպես քաղաքացիական առաջնորդների նոր սերունդ՝ համահունչ Եվրոպական համերաշխության կորպուսի չափանիշներին։",
  },
  "youth.what.title": { en: "What you'll do", hy: "Ինչ կանեք" },
  "youth.what.b1": { en: "Help neighbors navigate digital labor and civic platforms.", hy: "Օգնել հարևաններին կողմնորոշվել թվային աշխատանքային և քաղաքացիական հարթակներում։" },
  "youth.what.b2": { en: "Monitor compliance with safety and rights standards in your community.", hy: "Վերահսկել անվտանգության և իրավունքի չափանիշների պահպանումը ձեր համայնքում։" },
  "youth.what.b3": { en: "Earn a certified credential in labor law and digital advocacy.", hy: "Ձեռք բերել հավաստագրված որակավորում աշխատանքային իրավունքի և թվային ջատագովության մեջ։" },
  "youth.cta": { en: "Apply to join", hy: "Դիմել միանալու համար" },

  // Transparency
  "transparency.title": { en: "Transparency Hub", hy: "Թափանցիկության հարթակ" },
  "transparency.lead": {
    en: "Citadel publishes its registration, finances, and impact data because trust is a public good.",
    hy: "Citadel-ը հրապարակում է իր գրանցումը, ֆինանսները և ազդեցության տվյալները, քանի որ վստահությունը հանրային բարիք է։",
  },
  "transparency.regTitle": { en: "Institutional Registration", hy: "Ինստիտուցիոնալ գրանցում" },
  "transparency.regBody": { en: "Citadel is a registered non-governmental organization under the laws of the Republic of Armenia.", hy: "Citadel-ը Հայաստանի Հանրապետության օրենքներով գրանցված հասարակական կազմակերպություն է։" },
  "transparency.regNumber": { en: "Reg. 211.171.1446066", hy: "Գրանցում 211.171.1446066" },
  "transparency.financialsTitle": { en: "2025 Financial Summary", hy: "2025թ. ֆինանսական ամփոփ" },
  "transparency.financials.col1": { en: "Allocation", hy: "Բաշխում" },
  "transparency.financials.col2": { en: "Amount", hy: "Գումար" },
  "transparency.financials.col3": { en: "Share", hy: "Մասնաբաժին" },
  "transparency.reportsTitle": { en: "Published reports", hy: "Հրապարակված հաշվետվություններ" },
  "transparency.reports.annual": { en: "Annual Report 2025", hy: "Տարեկան հաշվետվություն 2025" },
  "transparency.reports.audit": { en: "Independent Audit 2025", hy: "Անկախ աուդիտ 2025" },
  "transparency.reports.esc": { en: "ESC Compliance Statement", hy: "ESC համապատասխանության հայտարարություն" },
  "transparency.reports.coming": { en: "Available on request", hy: "Հասանելի հարցման դեպքում" },

  // Get involved
  "involved.title": { en: "Stand with Citadel", hy: "Կանգնեք Citadel-ի կողքին" },
  "involved.lead": {
    en: "Three ways to defend rights and advance justice in Syunik — choose where you fit.",
    hy: "Սյունիքում իրավունքները պաշտպանելու և արդարությունն առաջ մղելու երեք ճանապարհ՝ ընտրեք ձերը։",
  },
  "involved.volunteer.title": { en: "Volunteer", hy: "Կամավորել" },
  "involved.volunteer.body": { en: "Join the Rights Ambassadors and serve your community.", hy: "Միանալ իրավունքի դեսպաններին և ծառայել ձեր համայնքին։" },
  "involved.partner.title": { en: "Partner", hy: "Համագործակցել" },
  "involved.partner.body": { en: "For NGOs, universities, embassies, and grantmakers.", hy: "ՀԿ-ների, համալսարանների, դեսպանատների և դոնորների համար։" },
  "involved.support.title": { en: "Support", hy: "Աջակցել" },
  "involved.support.body": { en: "Fund a hotline shift, a seminar, or a Caravan episode.", hy: "Ֆինանսավորեք թեժ գծի հերթափոխը, սեմինարը կամ «Քարավան»-ի դրվագը։" },
  "involved.cta": { en: "Contact us", hy: "Կապ մեզ հետ" },

  // Footer
  "footer.about": { en: "About", hy: "Մեր մասին" },
  "footer.contactTitle": { en: "Contact", hy: "Կապ" },
  "footer.address": { en: "Kajaran · Syunik Province · Republic of Armenia", hy: "Քաջարան · Սյունիքի մարզ · Հայաստանի Հանրապետություն" },
  "footer.email": { en: "citadellhk@gmail.com", hy: "citadellhk@gmail.com" },
  "footer.linksTitle": { en: "Explore", hy: "Բացահայտել" },
  "footer.rights": { en: "© 2025 Citadel. All rights reserved.", hy: "© 2025 Citadel։ Բոլոր իրավունքները պաշտպանված են։" },
  "footer.regLine": { en: "Reg. 211.171.1446066", hy: "Գրանցում 211.171.1446066" },

  // Common
  "common.skipToContent": { en: "Skip to main content", hy: "Անցնել հիմնական բովանդակությանը" },
  "common.languageLabel": { en: "Language", hy: "Լեզու" },
} as const satisfies Record<string, { en: string; hy: string }>;

export type TKey = keyof typeof translations;
