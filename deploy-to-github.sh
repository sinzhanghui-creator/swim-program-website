#!/bin/bash
# 部署到GitHub Pages脚本

echo "===== 游泳公益网站部署到GitHub Pages ====="
echo ""

# 检查是否在正确目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在网站目录中运行此脚本"
    echo "    cd /Users/jack/lobsterai/project/swim-program-website"
    exit 1
fi

# 检查git
if ! command -v git &> /dev/null; then
    echo "❌ Git未安装。请先安装Git："
    echo "    https://git-scm.com/download/mac"
    exit 1
fi

echo "📁 当前目录：$(pwd)"
echo "📋 文件检查："
ls -la index.html assets/css/style.css

echo ""
echo "📝 请按照以下步骤操作："
echo ""
echo "1. 创建GitHub仓库（如果还没有）："
echo "   - 访问 https://github.com/new"
echo "   - 仓库名：swim-program-website（或其他名称）"
echo "   - 选择 Public（公开）"
echo "   - 不勾选 'Initialize this repository with a README'"
echo ""
echo "2. 获取仓库URL（格式如：https://github.com/你的用户名/swim-program-website.git）"
echo ""

read -p "请输入GitHub仓库URL（按Enter跳过，手动操作）：" repo_url

if [ -n "$repo_url" ]; then
    echo ""
    echo "🚀 开始部署..."
    
    # 初始化git
    if [ ! -d ".git" ]; then
        git init
        echo "✓ Git仓库初始化"
    fi
    
    # 添加文件
    git add .
    git commit -m "Deploy swim program bilingual website
    
    - Complete bilingual (English/Chinese) website
    - Based on 'Learn to Swim for Lower-Income Families' proposal
    - 7 core sections with images
    - Responsive design
    - Deployed on $(date)"
    
    echo "✓ 文件已提交"
    
    # 添加远程仓库
    if [ -n "$(git remote)" ]; then
        git remote remove origin 2>/dev/null
    fi
    git remote add origin "$repo_url"
    
    # 推送
    echo "⏳ 推送到GitHub..."
    git branch -M main
    if git push -u origin main; then
        echo "✓ 推送成功！"
    else
        echo "❌ 推送失败。请检查："
        echo "   - 仓库URL是否正确"
        echo "   - 是否有GitHub访问权限"
        echo "   - 网络连接"
        exit 1
    fi
    
    echo ""
    echo "✅ 代码已推送到GitHub！"
else
    echo ""
    echo "📋 手动操作步骤："
    echo ""
    echo "1. 初始化Git："
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo ""
    echo "2. 连接到GitHub仓库："
    echo "   git remote add origin https://github.com/你的用户名/swim-program-website.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "3. 启用GitHub Pages："
    echo "   - 访问 https://github.com/你的用户名/swim-program-website/settings/pages"
    echo "   - 'Source' 选择 'Deploy from a branch'"
    echo "   - 'Branch' 选择 'main' 和 '/ (root)'"
    echo "   - 点击 Save"
fi

echo ""
echo "🌐 启用GitHub Pages后，网站将发布在："
echo "   https://你的用户名.github.io/swim-program-website/"
echo ""
echo "⏱️  部署后需等待1-2分钟生效"
echo ""
echo "📞 如需帮助，请提供："
echo "   - GitHub用户名"
echo "   - 遇到的错误信息"