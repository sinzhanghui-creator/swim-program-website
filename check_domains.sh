#!/bin/bash

# 域名列表
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

echo "🔍 查询域名可用性..."
echo "========================"

# 创建临时文件记录结果
RESULT_FILE="/tmp/domain_check_$(date +%s).txt"
echo "域名,状态,推荐度,备注" > "$RESULT_FILE"

for domain in "${DOMAINS[@]}"; do
    echo -n "检查 $domain ... "
    
    # 使用whois查询
    whois_output=$(whois "$domain" 2>&1)
    
    # 判断是否已注册
    if echo "$whois_output" | grep -qi "No match\|NOT FOUND\|not been registered\|Domain not found\|No entries found\|Status: AVAILABLE\|Domain Name: $domain not found"; then
        status="✅ 可注册"
    elif echo "$whois_output" | grep -qi "Domain Status: active\|Registrar:\|Creation Date:\|Registered"; then
        status="❌ 已注册"
    elif echo "$whois_output" | grep -qi "queries are exceeded\|rate limit\|too many requests"; then
        status="⚠️  查询限制"
    else
        status="❓ 未知"
    fi
    
    # 计算推荐度
    if [[ "$status" == "✅ 可注册" ]]; then
        # 根据域名长度和易记性评分
        length=${#domain}
        if [[ $length -le 12 ]]; then
            score="⭐⭐⭐⭐⭐"
        elif [[ $length -le 16 ]]; then
            score="⭐⭐⭐⭐"
        elif [[ $length -le 20 ]]; then
            score="⭐⭐⭐"
        else
            score="⭐⭐"
        fi
        
        # 调整包含foundation的域名评分
        if [[ "$domain" == *foundation* ]]; then
            score="${score}+"
        fi
    else
        score="N/A"
    fi
    
    # 添加备注
    remark=""
    if [[ "$domain" == *foundation* ]]; then
        remark="包含基金会标识"
    elif [[ "$domain" == *sg* ]]; then
        remark="新加坡地区"
    elif [[ "$domain" == *asia* ]]; then
        remark="亚洲地区"
    fi
    
    echo "$status $score"
    echo "$domain,$status,$score,$remark" >> "$RESULT_FILE"
    
    # 避免查询过快被限制
    sleep 2
done

echo ""
echo "📊 查询结果汇总"
echo "========================"
cat "$RESULT_FILE" | column -t -s ','

echo ""
echo "🎯 推荐注册顺序"
echo "========================"
echo "根据域名长度、易记性、品牌价值推荐："
echo ""
echo "1. 首选（短、易记）："
grep "✅ 可注册" "$RESULT_FILE" | grep -E "⭐⭐⭐⭐⭐|⭐⭐⭐⭐" | head -5
echo ""
echo "2. 次选（稍长但有含义）："
grep "✅ 可注册" "$RESULT_FILE" | grep "⭐⭐⭐" | head -5
echo ""
echo "3. 保护性注册（防止抢注）："
echo "   建议同时注册对应的.com域名"
echo ""
echo "📝 注：查询结果可能有延迟，建议在注册商网站确认"

# 清理临时文件
rm -f "$RESULT_FILE"