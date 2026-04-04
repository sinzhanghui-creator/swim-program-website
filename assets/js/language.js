// Bilingual website language management
const LanguageManager = (() => {
    // Translation dictionary
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contact',
            
            // Hero section
            'hero.title': 'Where Creativity Meets Innovation',
            'hero.subtitle': '创意与创新的交汇点',
            'hero.desc': 'We craft digital experiences that blend aesthetic elegance with functional precision for global audiences.',
            'hero.desc-zh': '我们为全球受众打造融合美学优雅与功能精度的数字体验。',
            'hero.btn1': 'View Our Work',
            'hero.btn2': 'Get in Touch',
            
            // About section
            'about.title': 'About Our Studio',
            'about.subtitle': '关于我们',
            'about.p1': 'Horizon is a bilingual creative studio founded in 2020, dedicated to bridging cultural gaps through design and technology. Our team of designers, developers, and strategists work across time zones to deliver projects that resonate with both Eastern and Western sensibilities.',
            'about.p2': 'We believe that great design transcends language barriers, creating intuitive experiences that feel native to every user. Our process combines meticulous attention to detail with bold creative vision.',
            'about.stat1': 'Projects Delivered',
            'about.stat2': 'Countries Served',
            'about.stat3': 'Client Satisfaction',
            
            // Services section
            'services.title': 'Our Services',
            'services.subtitle': '我们的服务',
            'services.s1.title': 'Brand Design',
            'services.s1.desc': 'Complete visual identity systems, logo design, and brand guidelines that communicate your core values across cultures.',
            'services.s1.desc-zh': '完整的视觉识别系统、标志设计和品牌指南，跨文化传达您的核心价值。',
            'services.s2.title': 'Web Development',
            'services.s2.desc': 'Responsive, performant websites and web applications with bilingual support and international SEO optimization.',
            'services.s2.desc-zh': '响应式、高性能网站和Web应用，支持双语和国际SEO优化。',
            'services.s3.title': 'Digital Marketing',
            'services.s3.desc': 'Cross‑cultural campaign strategy, social media management, and content creation tailored for global audiences.',
            'services.s3.desc-zh': '针对全球受众的跨文化 campaign 策略、社交媒体管理和内容创作。',
            'services.s4.title': 'Motion & Video',
            'services.s4.desc': 'Animated explainers, product demos, and promotional videos with multilingual voice‑over and subtitles.',
            'services.s4.desc-zh': '带有多种语言配音和字幕的动画解说、产品演示和宣传视频。',
            
            // Portfolio section
            'portfolio.title': 'Selected Work',
            'portfolio.subtitle': '精选作品',
            'portfolio.p1.title': 'Global E‑commerce Platform',
            'portfolio.p1.desc': 'Multilingual platform serving customers in 12 countries with localized payment and logistics.',
            'portfolio.p2.title': 'Health & Wellness App',
            'portfolio.p2.desc': 'Bilingual meditation and fitness application with culturally‑adapted content.',
            'portfolio.p3.title': 'E‑learning Platform',
            'portfolio.p3.desc': 'Online education portal with courses available in both English and Mandarin.',
            
            // Contact section
            'contact.title': 'Get in Touch',
            'contact.subtitle': '联系我们',
            'contact.address.title': 'Our Office',
            'contact.address.text': '123 Creative District, Shanghai · 200000',
            'contact.address.text2': 'Innovation Hub, San Francisco · CA 94107',
            'contact.email.title': 'Email Us',
            'contact.phone.title': 'Call Us',
            'contact.submit': 'Send Message',
            
            // Footer
            'footer.desc': 'Bridging cultures through design and technology since 2020.',
            'footer.links.title': 'Quick Links',
            'footer.links.home': 'Home',
            'footer.links.about': 'About',
            'footer.links.services': 'Services',
            'footer.links.portfolio': 'Portfolio',
            'footer.links.contact': 'Contact',
            'footer.social.title': 'Follow Us',
            'footer.rights': 'All rights reserved.',
            'footer.note': 'This website is available in English and 中文.'
        },
        zh: {
            // Navigation
            'nav.home': '首页',
            'nav.about': '关于',
            'nav.services': '服务',
            'nav.portfolio': '作品',
            'nav.contact': '联系',
            
            // Hero section
            'hero.title': '创意与创新的交汇点',
            'hero.subtitle': 'Where Creativity Meets Innovation',
            'hero.desc': '我们为全球受众打造融合美学优雅与功能精度的数字体验。',
            'hero.desc-zh': 'We craft digital experiences that blend aesthetic elegance with functional precision for global audiences.',
            'hero.btn1': '查看作品',
            'hero.btn2': '联系我们',
            
            // About section
            'about.title': '关于我们',
            'about.subtitle': 'About Our Studio',
            'about.p1': '地平线创意工作室成立于2020年，致力于通过设计和技术弥合文化鸿沟。我们的设计师、开发人员和策略师团队跨越时区，提供能引起东西方共鸣的项目。',
            'about.p2': '我们相信伟大的设计能超越语言障碍，为每位用户创造直观的原生体验。我们的流程将 meticulous 的细节关注与大胆的创意愿景相结合。',
            'about.stat1': '完成项目',
            'about.stat2': '服务国家',
            'about.stat3': '客户满意度',
            
            // Services section
            'services.title': '我们的服务',
            'services.subtitle': 'Our Services',
            'services.s1.title': '品牌设计',
            'services.s1.desc': '完整的视觉识别系统、标志设计和品牌指南，跨文化传达您的核心价值。',
            'services.s1.desc-zh': 'Complete visual identity systems, logo design, and brand guidelines that communicate your core values across cultures.',
            'services.s2.title': '网站开发',
            'services.s2.desc': '响应式、高性能网站和Web应用，支持双语和国际SEO优化。',
            'services.s2.desc-zh': 'Responsive, performant websites and web applications with bilingual support and international SEO optimization.',
            'services.s3.title': '数字营销',
            'services.s3.desc': '针对全球受众的跨文化 campaign 策略、社交媒体管理和内容创作。',
            'services.s3.desc-zh': 'Cross‑cultural campaign strategy, social media management, and content creation tailored for global audiences.',
            'services.s4.title': '动态与视频',
            'services.s4.desc': '带有多种语言配音和字幕的动画解说、产品演示和宣传视频。',
            'services.s4.desc-zh': 'Animated explainers, product demos, and promotional videos with multilingual voice‑over and subtitles.',
            
            // Portfolio section
            'portfolio.title': '精选作品',
            'portfolio.subtitle': 'Selected Work',
            'portfolio.p1.title': '全球电商平台',
            'portfolio.p1.desc': '为12个国家客户服务的多语言平台，提供本地化支付和物流。',
            'portfolio.p2.title': '健康与 wellness 应用',
            'portfolio.p2.desc': '双语冥想和健身应用，内容经过文化适配。',
            'portfolio.p3.title': '在线教育平台',
            'portfolio.p3.desc': '提供中英文课程的在线教育门户。',
            
            // Contact section
            'contact.title': '联系我们',
            'contact.subtitle': 'Get in Touch',
            'contact.address.title': '我们的办公室',
            'contact.address.text': '上海市创意区123号 · 200000',
            'contact.address.text2': '旧金山创新中心 · CA 94107',
            'contact.email.title': '电子邮件',
            'contact.phone.title': '电话',
            'contact.submit': '发送消息',
            
            // Footer
            'footer.desc': '自2020年以来，通过设计和技术连接文化。',
            'footer.links.title': '快速链接',
            'footer.links.home': '首页',
            'footer.links.about': '关于',
            'footer.links.services': '服务',
            'footer.links.portfolio': '作品',
            'footer.links.contact': '联系',
            'footer.social.title': '关注我们',
            'footer.rights': '保留所有权利。',
            'footer.note': '本网站提供英文和中文版本。'
        }
    };
    
    // Current language
    let currentLang = 'en';
    
    // Initialize language
    function init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('horizon-lang');
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
        localStorage.setItem('horizon-lang', lang);
        
        updateLanguageButtons();
        applyTranslations();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
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
        
        // Update form select options based on language
        updateFormOptions();
    }
    
    // Update form select options
    function updateFormOptions() {
        const subjectSelect = document.getElementById('subject');
        if (!subjectSelect) return;
        
        const options = subjectSelect.querySelectorAll('option');
        if (currentLang === 'zh') {
            options[0].textContent = '选择主题';
            options[1].textContent = '设计咨询';
            options[2].textContent = '开发项目';
            options[3].textContent = '营销合作';
            options[4].textContent = '其他';
        } else {
            options[0].textContent = 'Select a subject';
            options[1].textContent = 'Design Inquiry';
            options[2].textContent = 'Development Project';
            options[3].textContent = 'Marketing Collaboration';
            options[4].textContent = 'Other';
        }
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