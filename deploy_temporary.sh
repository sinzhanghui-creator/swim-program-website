#!/bin/bash
cd "$(dirname "$0")"

echo "🚀 启动游泳公益计划网站临时部署..."
echo "📁 当前目录: $(pwd)"

# 检查Python服务器是否已在运行
if pgrep -f "http.server 8000" > /dev/null; then
    echo "⚠️  检测到已有Python服务器在运行，先停止..."
    pkill -f "http.server 8000"
    sleep 2
fi

# 启动Python服务器
echo "🌐 启动本地服务器 (端口 8000)..."
python3 -m http.server 8000 > server.log 2>&1 &
SERVER_PID=$!
echo "  服务器PID: $SERVER_PID"

sleep 2

# 测试本地访问
echo "🔍 测试本地访问..."
if curl -s http://localhost:8000 > /dev/null; then
    echo "  本地服务器运行正常"
    echo "  本地访问: http://localhost:8000"
else
    echo "❌ 本地服务器启动失败，请检查server.log"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# 检查localtunnel是否安装，如未安装则安装
echo "🔗 设置公网隧道..."
if ! command -v npx &> /dev/null; then
    echo "❌ npx不可用，请安装Node.js"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# 尝试使用固定子域名，如果被占用则使用随机
SUBDOMAIN="swim-program-$(date +%s)"

echo "  尝试使用子域名: $SUBDOMAIN"
echo "  正在启动localtunnel（首次使用可能需要下载依赖）..."

# 运行localtunnel，捕获输出
npx localtunnel --port 8000 --subdomain $SUBDOMAIN > tunnel.log 2>&1 &
TUNNEL_PID=$!
echo "  隧道PID: $TUNNEL_PID"

# 等待隧道建立
echo "⏳ 等待隧道建立（最多30秒）..."
for i in {1..30}; do
    sleep 1
    if grep -q "your url is:" tunnel.log 2>/dev/null; then
        echo "✅ 隧道建立成功"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "❌ 隧道建立超时，请检查tunnel.log"
        kill $SERVER_PID $TUNNEL_PID 2>/dev/null
        exit 1
    fi
done

# 提取公网URL
PUBLIC_URL=$(grep "your url is:" tunnel.log | sed 's/.*your url is: //')
if [ -z "$PUBLIC_URL" ]; then
    # 尝试另一种格式
    PUBLIC_URL=$(grep -o "https://[^ ]*\.loca\.lt" tunnel.log | head -1)
fi

if [ -z "$PUBLIC_URL" ]; then
    echo "❌ 无法从日志提取公网URL"
    cat tunnel.log
    kill $SERVER_PID $TUNNEL_PID 2>/dev/null
    exit 1
fi

echo ""
echo "🎉 部署成功！"
echo "========================================"
echo "🌐 公网访问链接:"
echo "   $PUBLIC_URL"
echo ""
echo "🔗 本地测试链接:"
echo "   http://localhost:8000"
echo ""
echo "📊 进程信息:"
echo "   服务器PID: $SERVER_PID (端口 8000)"
echo "   隧道PID: $TUNNEL_PID"
echo ""
echo "📝 日志文件:"
echo "   服务器日志: server.log"
echo "   隧道日志: tunnel.log"
echo ""
echo "🛑 停止服务:"
echo "   ./stop_temporary.sh"
echo "   或手动: kill $SERVER_PID $TUNNEL_PID"
echo ""
echo "⚠️  注意:"
echo "   1. 此链接在当前终端运行期间有效"
echo "   2. 关闭终端或重启电脑会断开连接"
echo "   3. 如需长期访问，请考虑GitHub Pages或Netlify"
echo "========================================"
echo ""
echo "✅ 现在可以在浏览器中打开公网链接分享给其他人了！"