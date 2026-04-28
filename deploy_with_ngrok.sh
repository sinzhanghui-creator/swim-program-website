#!/bin/bash
cd "$(dirname "$0")"

echo "🚀 ngrok 临时部署脚本"
echo "========================"

# 检查参数
if [ "$1" = "--setup" ]; then
    echo ""
    echo "📋 设置步骤："
    echo "1. 访问 https://ngrok.com/download 下载ngrok"
    echo "2. 解压到 ~/Downloads/ngrok 或 PATH中的位置"
    echo "3. 访问 https://dashboard.ngrok.com/signup 注册"
    echo "4. 复制你的Authtoken"
    echo "5. 运行: ~/Downloads/ngrok config add-authtoken 你的token"
    echo ""
    echo "完成后运行本脚本（不带参数）启动部署"
    exit 0
fi

# 检查ngrok是否安装
NGROK_CMD=""
if command -v ngrok &> /dev/null; then
    NGROK_CMD="ngrok"
elif [ -f "$HOME/Downloads/ngrok" ]; then
    NGROK_CMD="$HOME/Downloads/ngrok"
elif [ -f "./ngrok" ]; then
    NGROK_CMD="./ngrok"
else
    echo "❌ ngrok 未找到。请先设置："
    echo "   运行: ./deploy_with_ngrok.sh --setup"
    echo "   或手动下载安装ngrok"
    exit 1
fi

echo "✅ 找到ngrok: $NGROK_CMD"
echo "📁 项目目录: $(pwd)"

# 停止可能正在运行的服务
echo "🛑 清理现有服务..."
pkill -f "http.server 8000" 2>/dev/null
pkill -f "$NGROK_CMD" 2>/dev/null
sleep 2

# 检查token配置
echo "🔑 检查ngrok配置..."
if ! $NGROK_CMD config check 2>/dev/null | grep -q "valid"; then
    echo "⚠️  ngrok未配置或token无效"
    echo "   请先运行: $NGROK_CMD config add-authtoken 你的token"
    echo "   需要token请访问: https://dashboard.ngrok.com/get-started/your-authtoken"
    exit 1
fi

# 启动本地服务器
echo "🌐 启动本地服务器 (端口 8000)..."
python3 -m http.server 8000 > server.log 2>&1 &
SERVER_PID=$!
echo "   服务器PID: $SERVER_PID"

sleep 3

# 测试本地访问
echo "🔍 测试本地访问..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000 | grep -q "200"; then
    echo "✅ 本地服务器运行正常"
    echo "   本地地址: http://localhost:8000"
else
    echo "❌ 本地服务器启动失败"
    echo "   查看日志: cat server.log"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# 启动ngrok
echo "🚇 启动ngrok隧道..."
$NGROK_CMD http 8000 --log stdout > ngrok.log 2>&1 &
NGROK_PID=$!
echo "   ngrok PID: $NGROK_PID"

echo "⏳ 等待ngrok启动（最多20秒）..."
for i in {1..20}; do
    sleep 1
    if grep -q "Forwarding" ngrok.log 2>/dev/null; then
        echo "✅ ngrok隧道建立成功"
        break
    fi
    if [ $i -eq 20 ]; then
        echo "❌ ngrok启动超时"
        echo "   查看日志: cat ngrok.log"
        kill $SERVER_PID $NGROK_PID 2>/dev/null
        exit 1
    fi
done

# 提取公网URL
PUBLIC_URL=$(grep -o "https://[^ ]*\.ngrok\.io" ngrok.log | head -1)
if [ -z "$PUBLIC_URL" ]; then
    PUBLIC_URL=$(grep -o "Forwarding.*http" ngrok.log | sed 's/Forwarding //' | sed 's/ -> http//')
fi

echo ""
echo "🎉 部署成功！"
echo "========================"
echo "🌐 公网访问链接："
echo "   $PUBLIC_URL"
echo ""
echo "🔗 本地访问链接："
echo "   http://localhost:8000"
echo ""
echo "📊 服务信息："
echo "   服务器PID: $SERVER_PID"
echo "   ngrok PID: $NGROK_PID"
echo "   日志文件: server.log, ngrok.log"
echo ""
echo "📝 ngrok免费版限制："
echo "   • 每次运行最长8小时"
echo "   • 需要稳定的网络连接"
echo "   • 适合临时演示和测试"
echo ""
echo "🛑 停止服务："
echo "   按 Ctrl+C 停止ngrok"
echo "   然后运行: kill $SERVER_PID"
echo "   或使用脚本: ./stop_ngrok.sh"
echo ""
echo "⚠️  注意："
echo "   1. 关闭终端不会自动停止服务"
echo "   2. 链接在ngrok运行期间有效"
echo "   3. 如需长期访问，请使用Netlify或GitHub Pages"
echo "========================"

# 创建停止脚本
cat > stop_ngrok.sh << 'EOF'
#!/bin/bash
echo "🛑 停止ngrok部署服务..."
pkill -f "http.server 8000" 2>/dev/null && echo "✅ 本地服务器已停止"
pkill -f "ngrok http 8000" 2>/dev/null && echo "✅ ngrok隧道已停止"
rm -f server.pid ngrok.pid 2>/dev/null
echo "✅ 所有服务已停止"
EOF
chmod +x stop_ngrok.sh

echo "📋 快速命令："
echo "   查看ngrok状态: $NGROK_CMD status"
echo "   查看实时日志: tail -f ngrok.log"
echo "   停止所有服务: ./stop_ngrok.sh"
echo ""
echo "✅ 现在可以分享公网链接给其他人了！"