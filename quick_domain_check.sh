#!/bin/bash

echo "🌐 快速域名可用性检查"
echo "======================"
echo "使用DNS记录检查，仅供参考"
echo "（最终以注册商查询为准）"
echo ""

DOMAINS=(
    "swimsafe.org"
    "swimcare.org"
    "swimfuture.org"
    "swimlove.org"
    "swimhope.org"
    "swimcarefoundation.org"
    "swimsafetyfoundation.org"
    "aquafoundation.org"
    "swimsafesg.org"
    "aquasafesg.org"
    "swimsafetyasia.org"
)

AVAILABLE=()
REGISTERED=()
UNKNOWN=()

for domain in "${DOMAINS[@]}"; do
    echo -n "检查 $domain ... "
    
    # 使用host命令检查DNS记录
    if host "$domain" > /dev/null 2>&1; then
        # 如果能解析到IP，说明已注册
        echo "❌ 已注册"
        REGISTERED+=("$domain")
    else
        # 如果host失败，可能未注册（但也可能是网络问题）
        echo "✅ 可能可注册"
        AVAILABLE+=("$domain")
    fi
    
    sleep 1  # 避免请求过快
done

echo ""
echo "📊 结果汇总"
echo "=========="
echo ""
echo "✅ 可能可注册的域名 (${#AVAILABLE[@]}个):"
for domain in "${AVAILABLE[@]}"; do
    echo "   • $domain"
done

echo ""
echo "❌ 已注册的域名 (${#REGISTERED[@]}个):"
for domain in "${REGISTERED[@]}"; do
    echo "   • $domain"
done

echo ""
echo "🎯 推荐分析"
echo "=========="
echo ""
echo "1. 首选推荐（基于易记性和长度）:"
for domain in "${AVAILABLE[@]}"; do
    length=${#domain}
    if [[ $length -le 12 ]]; then
        echo "   ⭐⭐⭐⭐⭐ $domain (超短易记)"
    elif [[ $length -le 16 ]]; then
        echo "   ⭐⭐⭐⭐ $domain (适中易记)"
    elif [[ $length -le 20 ]]; then
        echo "   ⭐⭐⭐ $domain (稍长但清晰)"
    fi
done | sort | head -5

echo ""
echo "2. 包含基金会标识的推荐:"
for domain in "${AVAILABLE[@]}"; do
    if [[ "$domain" == *foundation* ]]; then
        echo "   • $domain (明确基金会身份)"
    fi
done

echo ""
echo "3. 地区性域名:"
for domain in "${AVAILABLE[@]}"; do
    if [[ "$domain" == *sg* ]] || [[ "$domain" == *asia* ]]; then
        echo "   • $domain (区域性定位)"
    fi
done

echo ""
echo "⚠️  注意事项"
echo "=========="
echo "1. 本检查基于DNS记录，不保证100%准确"
echo "2. 建议在Namecheap/Google Domains等注册商网站最终确认"
echo "3. 好域名可能很快被抢注，建议尽快行动"
echo "4. 考虑同时注册对应的.com域名保护品牌"
echo ""
echo "🔗 推荐注册商:"
echo "   • Namecheap (性价比高，隐私保护免费)"
echo "   • Google Domains (界面简洁)"
echo "   • Name.com (专业可靠)"