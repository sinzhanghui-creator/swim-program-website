#!/bin/bash
cd "$(dirname "$0")"

echo "🚀 游泳公益网站快速部署"
echo "======================"

# 1. 检查并下载 ngrok
echo "1. 检查 ngrok..."
if [ ! -f "$HOME/Downloads/ngrok" ] && ! command -v ngrok &> /dev/null; then
    echo "   📥 下载 ngrok..."
    
    # 检测架构
    if [ "$(uname -m)" = "arm64" ]; then
        ARCH="arm64"
    else
        ARCH="amd64"
    fi
    
    curl -L "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-darwin-$ARCH.zip" \
         -o "$HOME/Downloads/ngrok.zip" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        unzip -o "$HOME/Downloads/ngrok.zip" -d "$HOME/Downloads/" 2>/dev/null
        chmod +x "$HOME/Downloads/ngrok"
        echo "   ✅ ngrok 下载完成"
    else
        echo "   ❌ 下载失败，请手动下载: https://ngrok.com/download"
        exit 1
    fi
fi

# 设置ngrok路径
if [ -f "$HOME/Downloads/ngrok" ]; then
    NGROK="$HOME/Downloads/ngrok"
elif command -v ngrok &> /dev/null; then
    NGROK="ngrok"
else
    echo "❌ 找不到 ngrok"
    exit 1
fi

echo "   ✅ 使用: $NGROK"

# 2. 启动本地服务器
echo ""
echo "2. 启动本地服务器..."
pkill -f "http.server 8000" 2>/dev/null
python3 -m http.server 8000 > server.log 2>&1 &
SERVER_PID=$!
sleep 3

if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000 | grep -q "200"; then
    echo "   ✅ 本地服务器运行正常"
    echo "   🔗 http://localhost:8000"
else
    echo "   ❌ 本地服务器启动失败"
    exit 1
fi

# 3. 检查ngrok配置
echo ""
echo "3. 检查 ngrok 配置..."
if ! $NGROK config check 2>/dev/null | grep -q "valid"; then
    echo "   ⚠️  ngrok 未配置"
    echo ""
    echo "   🔑 需要配置 Authtoken："
    echo "   1. 访问: https://dashboard.ngrok.com/login"
    echo "   2. 登录: sinzhanghui@gmail.com / Jack2026()"
    echo "   3. 获取token: https://dashboard.ngrok.com/get-started/your-authtoken"
    echo "   4. 运行: $NGROK config add-authtoken 你的token"
    echo ""
    echo "   ⏳ 等待配置完成..."
    echo "   配置完成后按 Enter 继续..."
    read
fi

# 4. 启动ngrok
echo ""
echo "4. 启动 ngrok 隧道..."
pkill -f "ngrok http" 2>/dev/null
$NGROK http 8000 --log stdout > ngrok.log 2>&1 &
NGROK_PID=$!
sleep 10

# 5. 获取公网链接
PUBLIC_URL=$(grep -o "https://[^ ]*\.ngrok\.io" ngrok.log 2>/dev/null | head -1)

echo ""
echo "📊 部署结果"
echo "=========="
if [ -n "$PUBLIC_URL" ]; then
    echo "🎉 部署成功！"
    echo "🌐 公网链接: $PUBLIC_URL"
else
    echo "⚠️  无法获取公网链接，可能原因："
    echo "   - ngrok 未配置 token"
    echo "   - 网络连接问题"
    echo "   - 查看日志: cat ngrok.log"
    echo ""
    echo "🔗 本地访问: http://localhost:8000"
fi

echo ""
echo "📝 日志文件:"
echo "   - 服务器: server.log"
echo "   - ngrok: ngrok.log"
echo ""
echo "🛑 停止服务:"
echo "   pkill -f 'http.server'; pkill -f 'ngrok'"