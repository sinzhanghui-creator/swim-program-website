# ngrok 快速部署指南

## 🔑 获取 Authtoken

使用提供的账号登录 ngrok 获取 token：

1. **打开浏览器**访问：https://dashboard.ngrok.com/login
2. **登录信息**：
   - 邮箱：sinzhanghui@gmail.com
   - 密码：Jack2026()
3. **登录后访问**：https://dashboard.ngrok.com/get-started/your-authtoken
4. **复制你的 Authtoken**（一串类似 `2abcdef123456...` 的字符）

## 📁 找到 ngrok 文件

ngrok 可能下载到以下位置：

```bash
# 检查常见位置
ls ~/Downloads/ngrok
ls ~/ngrok
ls ./ngrok
ls /tmp/ngrok

# 查找文件
find ~ -name "ngrok" -type f 2>/dev/null
```

## ⚙️ 配置 Token

找到 ngrok 文件后，配置 token：

```bash
# 替换为你的实际路径
/path/to/ngrok config add-authtoken 你的token

# 示例：
~/Downloads/ngrok config add-authtoken 2abc123def456...
```

## 🚀 启动部署

```bash
cd /Users/jack/lobsterai/project/swim-program-website
./deploy_with_ngrok.sh
```

## 🆘 备选方案

如果找不到 ngrok 文件或配置失败：

### 方案A：重新下载
```bash
# 重新下载 ngrok
curl -L https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-darwin-arm64.zip -o ~/Downloads/ngrok.zip
unzip ~/Downloads/ngrok.zip -d ~/Downloads/
chmod +x ~/Downloads/ngrok
```

### 方案B：使用 Netlify（5分钟永久部署）
1. 访问 https://app.netlify.com/drop
2. 拖放整个 `swim-program-website` 文件夹
3. 立即获得永久链接

### 方案C：同一网络分享
```bash
# 获取本地IP
ifconfig | grep "inet " | grep -v 127.0.0.1

# 分享链接：http://[你的IP]:8000
# 示例：http://192.168.1.100:8000
```

## 📞 需要帮助？

提供以下信息：
1. ngrok 文件位置
2. Authtoken（可私信发送）
3. 错误信息截图

---
*本地服务器已在运行：http://localhost:8000*
*服务器PID：91083*