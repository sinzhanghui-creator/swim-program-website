#!/bin/bash
cd "$(dirname "$0")"

echo "🚀 ngrok 一键安装配置脚本"
echo "=========================="

# 停止可能运行的服务
echo "🛑 清理现有服务..."
pkill -f "http.server 8000" 2>/dev/null
pkill -f "ngrok" 2>/dev/null
sleep 2

# 检查是否已安装
if [ -f "$HOME/Downloads/ngrok" ] && [ -x "$HOME/Downloads/ngrok" ]; then
    echo "✅ 发现已下载的 ngrok 文件"
    NGROK_PATH="$HOME/Downloads/ngrok"
elif command -v ngrok &> /dev/null; then
    echo "✅ ngrok 已在 PATH 中"
    NGROK_PATH="ngrok"
else
    echo "📥 下载 ngrok..."
    
    # 检测系统架构
    ARCH=$(uname -m)
    if [ "$ARCH" = "arm64" ]; then
        URL="https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-darwin-arm64.zip"
        echo "   检测到 Apple Silicon (arm64)"
    else
        URL="https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-darwin-amd64.zip"
        echo "   检测到 Intel (amd64)"
    fi
    
    # 下载
    curl -L "$URL" -o "$HOME/Downloads/ngrok.zip" 2>/dev/null
    
    if [ $? -ne 0 ]; then
        echo "❌ 下载失败，请检查网络"
        echo "   手动下载: https://ngrok.com/download"
        exit 1
    fi
    
    # 解压
    echo "📦 解压文件..."
    unzip -o "$HOME/Downloads/ngrok.zip" -d "$HOME/Downloads/" 2>/dev/null
    
    if [ $? -ne 0 ]; then
        echo "❌ 解压失败，请手动解压: $HOME/Downloads/ngrok.zip"
        exit 1
    fi
    
    # 设置权限
    chmod +x "$HOME/Downloads/ngrok"
    NGROK_PATH="$HOME/Downloads/ngrok"
    
    echo "✅ ngrok 下载完成: $NGROK_PATH"
fi

echo ""
echo "🔑 下一步：配置 Authtoken"
echo "=========================="
echo ""
echo "请登录 ngrok 获取 Authtoken："
echo "1. 访问：https://dashboard.ngrok.com/login"
echo "2. 登录信息："
echo "   - 邮箱：sinzhanghui@gmail.com"
echo "   - 密码：Jack2026()"
echo "3. 登录后访问：https://dashboard.ngrok.com/get-started/your-authtoken"
echo "4. 复制你的 Authtoken"
echo ""
read -p "请输入你的 Authtoken（或按 Enter 跳过）：" AUTH_TOKEN

if [ -n "$AUTH_TOKEN" ]; then
    echo ""
    echo "⚙️  配置 token..."
    $NGROK_PATH config add-authtoken "$AUTH_TOKEN"
    
    if [ $? -eq 0 ]; then
        echo "✅ token 配置成功"
    else
        echo "❌ token 配置失败"
        echo "   请手动运行: $NGROK_PATH config add-authtoken 你的token"
    fi
fi

echo ""
echo "🚀 启动部署"
echo "=========="
echo "1. 启动本地服务器..."
python3 -m http.server 8000 > server.log 2>&1 &
SERVER_PID=$!
echo "   服务器 PID: $SERVER_PID"

sleep 3

echo "2. 启动 ngrok 隧道..."
$NGROK_PATH http 8000 --log stdout > ngrok.log 2>&1 &
NGROK_PID=$!
echo "   ngrok PID: $NGROK_PID"

echo ""
echo "⏳ 等待 10 秒让隧道建立..."
sleep 10

echo ""
echo "🔍 检查状态..."
echo "本地服务器: $(curl -s -o /dev/null -w "%{http_code}" http://localhost:8000)"

# 提取公网URL
PUBLIC_URL=$(grep -o "https://[^ ]*\.ngrok\.io" ngrok.log 2>/dev/null | head -1)
if [ -z "$PUBLIC_URL" ]; then
    PUBLIC_URL=$(grep -o "Forwarding.*http" ngrok.log 2>/dev/null | sed 's/Forwarding //' | sed 's/ -> http//' | head -1)
fi

echo ""
echo "📊 部署结果"
echo "=========="
if [ -n "$PUBLIC_URL" ]; then
    echo "🎉 部署成功！"
    echo "🌐 公网链接: $PUBLIC_URL"
else
    echo "⚠️  无法获取公网链接"
    echo "   查看日志: cat ngrok.log"
    echo "   本地访问: http://localhost:8000"
fi

echo ""
echo "🔗 本地访问: http://localhost:8000"
echo "📝 日志文件: server.log, ngrok.log"
echo "🛑 停止服务: pkill -f 'http.server'; pkill -f 'ngrok'"

# 创建停止脚本
cat > stop_all.sh << 'EOF'
#!/bin/bash
echo "🛑 停止所有服务..."
pkill -f "http.server 8000" 2>/dev/null && echo "✅ 本地服务器已停止"
pkill -f "ngrok http 8000" 2>/dev/null && echo "✅ ngrok隧道已停止"
echo "✅ 所有服务已停止"
EOF
chmod +x stop_all.sh

echo ""
echo "✅ 脚本执行完成！"