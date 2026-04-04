// Bilingual swimming program website language management
const LanguageManager = (() => {
    // Translation dictionary
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'Mission',
            'nav.whyus': 'Why Us',
            'nav.execution': 'Execution',
            'nav.funds': 'Funds',
            'nav.sponsor': 'Sponsor Value',
            'nav.contact': 'Take Action',
            
            // Hero section
            'hero.title': 'Learn to Swim for Lower-Income Families',
            'hero.subtitle': '低收入家庭儿童学游泳长期公益计划',
            'hero.desc': 'Turning a life-saving skill into a standard, not a luxury.',
            'hero.desc-zh': '让游泳这项保命技能成为标配，而非奢侈品。',
            'hero.btn1': 'Learn About Our Mission',
            'hero.btn2': 'Become a Sponsor',
            
            // About/Mission section
            'mission.title': 'Mission & Vision',
            'mission.subtitle': '使命与愿景',
            'mission.p1': 'To ensure every child possesses the fundamental ability to survive and thrive in water through continuous education.',
            'mission.p1-zh': '通过持续的教育，让每个孩子都拥有基本的水上生存能力与成长机会。',
            'mission.p2': 'Currently raising funds to support long-term community impact and water safety.',
            'mission.p2-zh': '正在为长期的社区影响力与水上安全筹集资金。',
            'mission.emotion.title': 'Why It Matters',
            'mission.emotion.subtitle': '情绪与愿景',
            'mission.emotion.p1': 'In Singapore, water is everywhere, making drowning a real threat to those without swimming skills.',
            'mission.emotion.p1-zh': '在新加坡，水域无处不在，缺乏基础技能意味着真实的溺水风险。',
            'mission.emotion.p2': 'We don\'t just teach strokes; we provide a "safety vest" that a child can never take off.',
            'mission.emotion.p2-zh': '我们不只是教泳姿，我们是在为孩子穿上一件"永远脱不掉的救生衣"。',
            'mission.emotion.p3': 'One child learns equals one family\'s peace of mind and reduces risk.',
            'mission.emotion.p3-zh': '一个孩子学会游泳等于一个家庭的终身安心与风险降低。',
            
            // Why Us section
            'whyus.title': 'Why Choose Us',
            'whyus.subtitle': '选择我们的理由',
            'whyus.item1.title': 'Professional Venues',
            'whyus.item1.desc': 'Managed by MAD/SHA Aquatic, operating in established locations such as Warren Golf & Country Club.',
            'whyus.item1.desc-zh': '由 MAD/SHA Aquatic 管理，在 Warren 高尔夫俱乐部等成熟地点运营。',
            'whyus.item2.title': 'Systematic Excellence',
            'whyus.item2.desc': 'We offer a structured pathway from water confidence to potential coaching or lifesaving careers.',
            'whyus.item2.desc-zh': '我们提供从水中自信到未来教练或救生职业潜力的系统化培养路径。',
            'whyus.item3.title': 'Safety First',
            'whyus.item3.desc': 'Our coaches are certified professionals dedicated to the highest standards of safety and youth development.',
            'whyus.item3.desc-zh': '我们的教练均为持证专业人士，致力于最高标准的教学安全与青少年成长。',
            
            // Execution section
            'execution.title': 'Execution Plan',
            'execution.subtitle': '项目运营：专业且透明',
            'execution.transparency.title': 'Full Transparency',
            'execution.transparency.desc': 'Recruitment → Screening → Training → Evaluation → Reporting',
            'execution.transparency.desc-zh': '招募（社区接洽）→ 筛选（资格审核）→ 训练（专业教练）→ 评估（成果展示）→ 报告（影响力回馈）',
            'execution.timeline.title': 'Operational Timeline',
            'execution.timeline.desc': 'To start in June 2026 during school holiday and will run every school holiday.',
            'execution.timeline.desc-zh': '12个月闭环运营，资金到位后第4个月正式开课。',
            
            // Funds section
            'funds.title': 'Use of Funds',
            'funds.subtitle': '预算分配与筹款用途',
            'funds.purpose.title': 'Fundraising Purpose',
            'funds.purpose.desc': 'Funds raised will be used to subsidize or fully support programme delivery and beneficiary support.',
            'funds.purpose.desc-zh': '筹得款项将用于资助课程执行及学员支持。',
            'funds.commitment.title': 'Financial Commitment',
            'funds.commitment.desc': 'Over 80% of funds go directly to coaching, pool rental, and student gear. All expenses will be accountable and recorded.',
            'funds.commitment.desc-zh': '80%以上的资金直接用于教练教学、场地租赁及学员物资。',
            'funds.breakdown.title': 'Budget Breakdown',
            'funds.breakdown.desc': 'Includes coaching fees, pool rentals, safety supervisors, and student equipment like swim caps and uniforms.',
            'funds.breakdown.desc-zh': '涵盖教练费、泳池租金、安全监督员及学员装备（泳帽/制服）。',
            
            // Sponsor Value section
            'sponsor.title': 'Sponsor Value',
            'sponsor.subtitle': '合作伙伴价值',
            'sponsor.legacy.title': 'Legacy Building',
            'sponsor.legacy.desc': 'Build a lasting brand reputation through direct community impact.',
            'sponsor.legacy.desc-zh': '通过直接的社区影响建立持久的品牌美誉度。',
            'sponsor.visibility.title': 'Visibility',
            'sponsor.visibility.desc': 'Long-term recognition as a "Community Impact Partner" across all events and materials.',
            'sponsor.visibility.desc-zh': '在所有活动和宣传物料中作为"社区影响力合作伙伴"获得长期鸣谢。',
            
            // Contact/Action section
            'action.title': 'Call to Action',
            'action.subtitle': '行动号召',
            'action.option1.title': 'Become a Sponsor',
            'action.option1.desc': 'Directly fund the swimming education of children in need.',
            'action.option1.desc-zh': '直接资助有需要儿童的游泳教育。',
            'action.option2.title': 'Long-term Partner',
            'action.option2.desc': 'Support the sustainable growth and safety of the community.',
            'action.option2.desc-zh': '支持社区的可持续成长与安全。',
            'action.option3.title': 'Co-initiate Projects',
            'action.option3.desc': 'Collaborate with us to launch new community impact initiatives.',
            'action.option3.desc-zh': '与我们合作发起新的社区影响力倡议。',
            'contact.info.title': 'Contact Information',
            'contact.info.org': 'MAD Aquatic / SHA Aquatic',
            'contact.info.reps': 'Project Representatives: Mark Alvin | Sha Sha',
            'contact.info.mobile': 'Mobile: 9388 5345 / 9489 0829 / 9369 6688',
            'contact.info.email': 'Email: marktan22@gmail.com | feihung1982@yahoo.com',
            'contact.info.office': 'Office: 60 Kaki Bukit Place #04-14 Suite 8, Singapore 415979',
            'contact.submit': 'Send Inquiry',
            
            // Footer
            'footer.desc': 'Making swimming a life skill for every child in Singapore.',
            'footer.links.title': 'Quick Links',
            'footer.links.home': 'Home',
            'footer.links.about': 'Mission',
            'footer.links.whyus': 'Why Us',
            'footer.links.execution': 'Execution',
            'footer.links.funds': 'Funds',
            'footer.links.sponsor': 'Sponsor Value',
            'footer.links.contact': 'Take Action',
            'footer.rights': 'All rights reserved.',
            'footer.note': 'This website is available in English and 中文.'
        },
        zh: {
            // Navigation
            'nav.home': '首页',
            'nav.about': '使命',
            'nav.whyus': '选择理由',
            'nav.execution': '执行计划',
            'nav.funds': '资金用途',
            'nav.sponsor': '赞助价值',
            'nav.contact': '行动号召',
            
            // Hero section
            'hero.title': '低收入家庭儿童学游泳长期公益计划',
            'hero.subtitle': 'Learn to Swim for Lower-Income Families',
            'hero.desc': '让游泳这项保命技能成为标配，而非奢侈品。',
            'hero.desc-zh': 'Turning a life-saving skill into a standard, not a luxury.',
            'hero.btn1': '了解我们的使命',
            'hero.btn2': '成为赞助商',
            
            // About/Mission section
            'mission.title': '使命与愿景',
            'mission.subtitle': 'Mission & Vision',
            'mission.p1': '通过持续的教育，让每个孩子都拥有基本的水上生存能力与成长机会。',
            'mission.p1-zh': 'To ensure every child possesses the fundamental ability to survive and thrive in water through continuous education.',
            'mission.p2': '正在为长期的社区影响力与水上安全筹集资金。',
            'mission.p2-zh': 'Currently raising funds to support long-term community impact and water safety.',
            'mission.emotion.title': '情绪与愿景',
            'mission.emotion.subtitle': 'Why It Matters',
            'mission.emotion.p1': '在新加坡，水域无处不在，缺乏基础技能意味着真实的溺水风险。',
            'mission.emotion.p1-zh': 'In Singapore, water is everywhere, making drowning a real threat to those without swimming skills.',
            'mission.emotion.p2': '我们不只是教泳姿，我们是在为孩子穿上一件"永远脱不掉的救生衣"。',
            'mission.emotion.p2-zh': 'We don\'t just teach strokes; we provide a "safety vest" that a child can never take off.',
            'mission.emotion.p3': '一个孩子学会游泳等于一个家庭的终身安心与风险降低。',
            'mission.emotion.p3-zh': 'One child learns equals one family\'s peace of mind and reduces risk.',
            
            // Why Us section
            'whyus.title': '选择我们的理由',
            'whyus.subtitle': 'Why Choose Us',
            'whyus.item1.title': '专业场馆',
            'whyus.item1.desc': '由 MAD/SHA Aquatic 管理，在 Warren 高尔夫俱乐部等成熟地点运营。',
            'whyus.item1.desc-zh': 'Managed by MAD/SHA Aquatic, operating in established locations such as Warren Golf & Country Club.',
            'whyus.item2.title': '系统化卓越',
            'whyus.item2.desc': '我们提供从水中自信到未来教练或救生职业潜力的系统化培养路径。',
            'whyus.item2.desc-zh': 'We offer a structured pathway from water confidence to potential coaching or lifesaving careers.',
            'whyus.item3.title': '安全第一',
            'whyus.item3.desc': '我们的教练均为持证专业人士，致力于最高标准的教学安全与青少年成长。',
            'whyus.item3.desc-zh': 'Our coaches are certified professionals dedicated to the highest standards of safety and youth development.',
            
            // Execution section
            'execution.title': '项目运营：专业且透明',
            'execution.subtitle': 'Execution Plan',
            'execution.transparency.title': '全透明流程',
            'execution.transparency.desc': '招募（社区接洽）→ 筛选（资格审核）→ 训练（专业教练）→ 评估（成果展示）→ 报告（影响力回馈）',
            'execution.transparency.desc-zh': 'Recruitment → Screening → Training → Evaluation → Reporting',
            'execution.timeline.title': '执行时间线',
            'execution.timeline.desc': '12个月闭环运营，资金到位后第4个月正式开课。',
            'execution.timeline.desc-zh': 'To start in June 2026 during school holiday and will run every school holiday.',
            
            // Funds section
            'funds.title': '预算分配与筹款用途',
            'funds.subtitle': 'Use of Funds',
            'funds.purpose.title': '筹款用途',
            'funds.purpose.desc': '筹得款项将用于资助课程执行及学员支持。',
            'funds.purpose.desc-zh': 'Funds raised will be used to subsidize or fully support programme delivery and beneficiary support.',
            'funds.commitment.title': '财务承诺',
            'funds.commitment.desc': '80%以上的资金直接用于教练教学、场地租赁及学员物资。',
            'funds.commitment.desc-zh': 'Over 80% of funds go directly to coaching, pool rental, and student gear. All expenses will be accountable and recorded.',
            'funds.breakdown.title': '预算明细',
            'funds.breakdown.desc': '涵盖教练费、泳池租金、安全监督员及学员装备（泳帽/制服）。',
            'funds.breakdown.desc-zh': 'Includes coaching fees, pool rentals, safety supervisors, and student equipment like swim caps and uniforms.',
            
            // Sponsor Value section
            'sponsor.title': '合作伙伴价值',
            'sponsor.subtitle': 'Sponsor Value',
            'sponsor.legacy.title': '品牌传承',
            'sponsor.legacy.desc': '通过直接的社区影响建立持久的品牌美誉度。',
            'sponsor.legacy.desc-zh': 'Build a lasting brand reputation through direct community impact.',
            'sponsor.visibility.title': '曝光度',
            'sponsor.visibility.desc': '在所有活动和宣传物料中作为"社区影响力合作伙伴"获得长期鸣谢。',
            'sponsor.visibility.desc-zh': 'Long-term recognition as a "Community Impact Partner" across all events and materials.',
            
            // Contact/Action section
            'action.title': '行动号召',
            'action.subtitle': 'Call to Action',
            'action.option1.title': '成为赞助方',
            'action.option1.desc': '直接资助有需要儿童的游泳教育。',
            'action.option1.desc-zh': 'Directly fund the swimming education of children in need.',
            'action.option2.title': '长期合作伙伴',
            'action.option2.desc': '支持社区的可持续成长与安全。',
            'action.option2.desc-zh': 'Support the sustainable growth and safety of the community.',
            'action.option3.title': '联合发起项目',
            'action.option3.desc': '与我们合作发起新的社区影响力倡议。',
            'action.option3.desc-zh': 'Collaborate with us to launch new community impact initiatives.',
            'contact.info.title': '联系信息',
            'contact.info.org': 'MAD Aquatic / SHA Aquatic',
            'contact.info.reps': '项目代表: Mark Alvin | Sha Sha',
            'contact.info.mobile': '手机: 9388 5345 / 9489 0829 / 9369 6688',
            'contact.info.email': '邮箱: marktan22@gmail.com | feihung1982@yahoo.com',
            'contact.info.office': '办公室: 60 Kaki Bukit Place #04-14 Suite 8, Singapore 415979',
            'contact.submit': '发送咨询',
            
            // Footer
            'footer.desc': '让游泳成为每个新加坡孩子的生活技能。',
            'footer.links.title': '快速链接',
            'footer.links.home': '首页',
            'footer.links.about': '使命',
            'footer.links.whyus': '选择理由',
            'footer.links.execution': '执行计划',
            'footer.links.funds': '资金用途',
            'footer.links.sponsor': '赞助价值',
            'footer.links.contact': '行动号召',
            'footer.rights': '保留所有权利。',
            'footer.note': '本网站提供英文和中文版本。'
        }
    };
    
    // Current language
    let currentLang = 'en';
    
    // Initialize language
    function init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('swim-program-lang');
        if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
            currentLang = savedLang;
        } else {
            // Detect browser language
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('zh')) {
                currentLang = 'zh';
            }
        }
        
        // Update UI
        updateLanguageButtons();
        applyTranslations();
        
        // Set up event listeners
        document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
        document.getElementById('lang-zh').addEventListener('click', () => setLanguage('zh'));
        
        console.log(`Language initialized: ${currentLang}`);
    }
    
    // Set language
    function setLanguage(lang) {
        if (lang === currentLang) return;
        
        currentLang = lang;
        localStorage.setItem('swim-program-lang', lang);
        
        updateLanguageButtons();
        applyTranslations();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        console.log(`Language changed to: ${lang}`);
    }
    
    // Update language toggle buttons
    function updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Apply translations to all elements with data-key
    function applyTranslations() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
                
                // Special handling for placeholders
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLang][key];
                }
            }
        });
    }
    
    // Get current language
    function getCurrentLanguage() {
        return currentLang;
    }
    
    // Public API
    return {
        init,
        setLanguage,
        getCurrentLanguage
    };
})();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', LanguageManager.init);