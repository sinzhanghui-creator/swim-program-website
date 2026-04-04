# 游泳公益计划网站 - Swim Program Website

基于"低收入家庭儿童学游泳长期公益计划"PDF提案创建的图文并茂双语网站。

## 网站特点

1. **完整双语支持** - 英文/中文一键切换
2. **响应式设计** - 适配手机、平板、电脑
3. **专业内容** - 基于PDF提案的7个核心部分：
   - 使命愿景 (Mission & Vision)
   - 选择理由 (Why Choose Us)
   - 执行计划 (Execution Plan)
   - 资金用途 (Use of Funds)
   - 赞助价值 (Sponsor Value)
   - 行动号召 (Call to Action)
4. **现代UI设计** - 优雅的视觉和交互动画

## 文件结构

```
swim-program-website/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css      # 样式文件
│   ├── js/
│   │   ├── language-swim.js # 双语翻译管理
│   │   └── main.js        # 交互功能
│   └── images/
│       └── favicon.svg    # 网站图标
├── index-original.html    # 原始模板备份
└── README.md             # 说明文档
```

## 访问方式

**本地访问:**
1. 确保在项目目录中运行：`cd /Users/jack/lobsterai/project/swim-program-website`
2. 启动服务器：`python3 -m http.server 8000`
3. 在浏览器中打开：http://localhost:8000

**或直接访问当前运行的服务器:**
- http://localhost:8000
- http://[您的本地IP]:8000

## 自定义与下一步

### 图片已更新
网站现已使用免费图库（Unsplash）的真实图片：

1. **img1** - Safe Swimming (安全游泳) - 儿童游泳池安全
2. **img2** - Children Learning (儿童学习) - 儿童学习游泳
3. **img3** - Community Impact (社区影响) - 水上安全教育
4. **img4** - Partnership (合作伙伴) - 社区伙伴关系
5. **img5** - Water Safety Education (水上安全教育) - 握手合作
6. **img6** - Program Timeline (项目时间线) - 教育材料
7. **img7** - Budget Allocation (预算分配) - 时间线图表
8. **img8** - Sponsor Recognition (赞助商认可) - 自定义预算饼图SVG

**图片源:** Unsplash免费图库，遵循其许可协议。
**位置:** `assets/images/photos/` 目录

如需替换图片，只需将新图片放入同一目录并更新`index.html`中的引用。

### 内容调整
如需修改文字内容，请编辑：
- `index.html` 中的文本内容（注意保留 `data-key` 属性）
- `assets/js/language-swim.js` 中的翻译词典

### 部署
可将整个文件夹上传到任何静态网站托管服务，如：
- GitHub Pages
- Netlify
- Vercel
- 阿里云/腾讯云对象存储

## 技术细节

- **框架**: 纯HTML/CSS/JavaScript，无外部依赖
- **字体**: Google Fonts (Playfair Display, Inter, Noto Sans SC)
- **图标**: Font Awesome 6.4.0
- **动画**: CSS transitions + Intersection Observer API
- **语言管理**: localStorage保存用户偏好

## 联系信息

基于PDF提案中的联系方式：
- **组织**: MAD Aquatic / SHA Aquatic
- **代表**: Mark Alvin | Sha Sha
- **手机**: 9388 5345 / 9489 0829 / 9369 6688
- **邮箱**: marktan22@gmail.com | feihung1982@yahoo.com
- **办公室**: 60 Kaki Bukit Place #04-14 Suite 8, Singapore 415979

---
*项目创建时间: 2026年3月31日*
*基于提案: "Learn to Swim for Lower-Income Families" (April 2026)*