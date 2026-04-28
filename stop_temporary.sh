#!/bin/bash
cd "$(dirname "$0")"

echo "🛑 停止临时部署服务..."

# 停止Python服务器
echo "停止Python服务器..."
pkill -f "http.server 8000" 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ Python服务器已停止"
else
    echo "⚠️  未找到运行的Python服务器"
fi

# 停止localtunnel
echo "停止localtunnel..."
pkill -f "localtunnel" 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ localtunnel已停止"
else
    echo "⚠️  未找到运行的localtunnel"
fi

# 清理日志文件
if [ "$1" = "--clean" ]; then
    echo "清理日志文件..."
    rm -f server.log tunnel.log 2>/dev/null
    echo "✅ 日志文件已清理"
fi

echo ""
echo "✅ 所有服务已停止"
echo "📝 如需完全清理，请运行: ./stop_temporary.sh --clean"