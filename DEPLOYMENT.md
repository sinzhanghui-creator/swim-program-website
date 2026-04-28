# 部署到公网环境指南

本指南提供多种将网站部署到公网的方法。

## 方法1：GitHub Pages（推荐，永久免费）

### 要求
- GitHub 账户
- Git 已安装

### 步骤
1. **创建GitHub仓库**
   - 访问 https://github.com/new
   - 仓库名：`swim-program-website`（或其他名称）
   - 选择 "Public"（公开）
   - 不勾选 "Initialize this repository with a README"

2. **初始化Git仓库**
   ```bash
   cd /Users/jack/lobsterai/project/swim-program-website
   git init
   git add .
   git commit -m "Initial commit: Swim program bilingual website"
   ```

3. **连接到GitHub仓库并推送**
   ```bash
   git remote add origin https://github.com/你的用户名/swim-program-website.git
   git branch -M main
   git push -u origin main
   ```

4. **启用GitHub Pages**
   - 在GitHub仓库页面，点击 "Settings"
   - 左侧菜单找到 "Pages"
   - "Source" 选择 "Deploy from a branch"
   - "Branch" 选择 "main" 和 "/ (root)"
   - 点击 Save

5. **访问网站**
   - 稍等1-2分钟
   - 访问：https://你的用户名.github.io/swim-program-website/

## 方法2：Netlify（最简单，免费）

### 要求
- Netlify 账户（可通过GitHub、GitLab或邮箱注册）

### 步骤
1. **访问 Netlify**: https://app.netlify.com/
2. **注册/登录**
3. **拖放部署**:
   - 将整个 `swim-program-website` 文件夹拖到Netlify的 "Drag and drop your site folder here" 区域
4. **自动部署完成**
5. **访问网站**:
   - Netlify会自动分配一个域名，如：https://unique-name.netlify.app/
   - 可自定义域名（设置 > Domain management）

## 方法3：Vercel（快速，免费）

### 要求
- Vercel 账户（可通过GitHub注册）

### 步骤
1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```
2. **部署**
   ```bash
   cd /Users/jack/lobsterai/project/swim-program-website
   vercel
   ```
3. **按照提示操作**
4. **访问自动生成的域名**

## 方法4：ngrok（临时演示，无需账户）

### 步骤
1. **安装ngrok**
   ```bash
   # 通过Homebrew（如果已安装）
   brew install ngrok/ngrok/ngrok
   
   # 或下载二进制文件
   # 访问：https://ngrok.com/download
   ```
2. **注册ngrok账户获取token**
   - 访问 https://dashboard.ngrok.com/signup
   - 免费账户即可
   - 获取Authtoken
   
3. **设置token并启动**
   ```bash
   ngrok config add-authtoken 你的token
   
   # 在网站目录启动
   cd /Users/jack/lobsterai/project/swim-program-website
   python3 -m http.server 8000 &
   ngrok http 8000
   ```
4. **访问生成的URL**
   - ngrok会显示如：https://abc123.ngrok.io
   - 此URL在ngrok运行期间有效（最长8小时免费版）

## 方法5：Cloudflare Pages（快速，免费）

### 步骤
1. **访问**: https://pages.cloudflare.com/
2. **连接GitHub仓库**（参考方法1先创建仓库）
3. **选择仓库和设置**
   - Build command: （留空，静态网站）
   - Build output directory: `/`
4. **部署完成**
5. **访问**: https://项目名.pages.dev

## 本地测试确认

部署前，请确保本地网站正常工作：
```bash
# 在网站目录中
cd /Users/jack/lobsterai/project/swim-program-website
python3 -m http.server 8000
```
然后访问 http://localhost:8000 确认一切正常。

## 推荐选择

| 方法 | 优点 | 缺点 | 适合场景 |
|------|------|------|----------|
| GitHub Pages | 永久免费，集成Git | 需要GitHub账户 | 长期项目，技术用户 |
| Netlify | 最简单，自动HTTPS | 需要注册 | 快速演示，非技术用户 |
| ngrok | 无需注册，即时 | 临时（最长8小时） | 快速演示给客户看 |
| Vercel | 速度快，现代 | 需要注册 | 现代Web项目 |
| Cloudflare | 全球CDN，快速 | 需要注册 | 性能要求高的项目 |

## 自定义域名（可选）

所有平台都支持自定义域名：
1. 购买域名（如：swimsafesg.com）
2. 在部署平台设置DNS
3. 等待DNS传播（最多48小时）

## 技术支持

如有问题，请提供：
1. 选择的部署方法
2. 遇到的错误信息
3. 是否已有相关账户（GitHub等）

---

**立即行动建议**:
1. 如果有GitHub账户 → **方法1: GitHub Pages**
2. 如果只想快速演示 → **方法4: ngrok**（需要安装）
3. 如果想最简单 → **方法2: Netlify**

选择后告诉我，我可以提供具体指导！