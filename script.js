// 已全數替換為專屬「狗狗服裝、帽子、飾品、後背包」特寫與穿搭照
const products = [
  // --- 狗狗衣服 (Focus on Dog Apparel) ---
  {
    id: 1,
    name: "法式條紋親膚棉T",
    category: "clothes",
    price: 490,
    desc: "100% 純棉高彈力，經典法式條紋風格，四季皆宜。",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    colors: ["經典藍", "燕麥黃", "櫻花粉"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "熊熊耳朵絨毛衛衣",
    category: "clothes",
    price: 680,
    desc: "連帽帶可愛熊耳朵，保暖刷毛，冬天保暖必備。",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    colors: ["焦糖棕", "奶油白"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 3,
    name: "日系柴犬防風斗篷",
    category: "clothes",
    price: 590,
    desc: "輕巧防微雨，穿脫極速，適合戶外散步穿著。",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80",
    colors: ["抹茶綠", "芥末黃"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 4,
    name: "碎花小清新家居服",
    category: "clothes",
    price: 420,
    desc: "透氣不黏毛，室內防掉毛的質感居家必備款。",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    colors: ["薄荷綠", "柔粉色"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 5,
    name: "學院風針織馬甲",
    category: "clothes",
    price: 550,
    desc: "英倫學院V領設計，軟綿不刺癢，拍照超出片。",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
    colors: ["藏青色", "栗子棕"],
    sizes: ["S", "M", "L"]
  },

  // --- 寵物帽子 (Focus on Dog Hats) ---
  {
    id: 6,
    name: "手作手工編織草帽",
    category: "hats",
    price: 320,
    desc: "遮陽透氣，附調節防風繩，夏日野餐必備。",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80",
    colors: ["原木色"],
    sizes: ["單一尺寸"]
  },
  {
    id: 7,
    name: "復古棒球帽",
    category: "hats",
    price: 380,
    desc: "留耳孔設計不壓耳朵，帥氣潮流風。",
    image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=600&q=80",
    colors: ["丹寧藍", "卡其色"],
    sizes: ["S", "M"]
  },
  {
    id: 8,
    name: "可愛青蛙造型毛線帽",
    category: "hats",
    price: 290,
    desc: "手工鉤針編織，搞怪又吸睛的冬天拍照配件。",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80",
    colors: ["鮮綠色"],
    sizes: ["通用款"]
  },
  {
    id: 9,
    name: "生日派對迷你皇冠帽",
    category: "hats",
    price: 250,
    desc: "毛孩過生日專屬！軟布材質不傷頭皮。",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
    colors: ["閃亮金", "夢幻粉"],
    sizes: ["單一尺寸"]
  },

  // --- 配件飾品 (Focus on Dog Bandana / Collars / Accessories) ---
  {
    id: 10,
    name: "手作印花圍巾脖圍",
    category: "acc",
    price: 280,
    desc: "雙面可戴，隨性打結即有型。",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    colors: ["黃色黃橘", "小紅花"],
    sizes: ["S", "M"]
  },
  {
    id: 11,
    name: "紳士領結項圈",
    category: "acc",
    price: 350,
    desc: "可調整長度安全扣，正式場合優雅亮相。",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    colors: ["經典黑", "酒紅色"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 12,
    name: "可愛小花刺繡領巾",
    category: "acc",
    price: 310,
    desc: "韓系小花風格，棉麻質感溫柔滿分。",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80",
    colors: ["奶油黃", "薰衣草紫"],
    sizes: ["通用款"]
  },
  {
    id: 13,
    name: "防遺失質感皮革名牌 collar",
    category: "acc",
    price: 450,
    desc: "可客製化雕刻名字，輕巧無負擔。",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80",
    colors: ["原皮棕", "橄欖綠"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 14,
    name: "夜間發光安全項圈",
    category: "acc",
    price: 290,
    desc: "高亮反射光條，夜間散步安全感加倍。",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
    colors: ["螢光橙", "螢光綠"],
    sizes: ["M", "L"]
  },

  // --- 外出背包 (Focus on Dog Carrier / Backpack) ---
  {
    id: 15,
    name: "毛孩自背防撿食小背包",
    category: "bags",
    price: 480,
    desc: "可裝撿便袋與小零食，狗狗自己背玩具！",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
    colors: ["黃色小鴨", "牛巧棕"],
    sizes: ["S", "M"]
  },
  {
    id: 16,
    name: "透氣人體工學寵物胸前背包",
    category: "bags",
    price: 1180,
    desc: "解放雙手！透氣網布加寬肩帶，飼主減壓設計。",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    colors: ["星空灰", "燕麥米"],
    sizes: ["M", "L"]
  },
  {
    id: 17,
    name: "日系帆布單肩斜挎外出包",
    category: "bags",
    price: 890,
    desc: "探頭防脫逃扣環，極簡美觀的大容量帆布包。",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    colors: ["原色帆布", "軍綠色"],
    sizes: ["L"]
  },
  {
    id: 18,
    name: "馬卡龍色防撞硬殼寵物背包",
    category: "bags",
    price: 1350,
    desc: "大視野透明面罩，外出搭公車捷運最方便。",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80",
    colors: ["櫻花粉", "薄荷綠"],
    sizes: ["標準尺寸"]
  },
  {
    id: 19,
    name: "輕量摺疊旅行拉桿背包",
    category: "bags",
    price: 1680,
    desc: "可背可拉，適合長途旅行與高齡犬使用。",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    colors: ["質感黑"],
    sizes: ["大容量"]
  },
  {
    id: 20,
    name: "胸背帶一體式小鞍包",
    category: "bags",
    price: 520,
    desc: "胸背帶結合側包，工裝戶外風格帥氣實用。",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    colors: ["沙漠卡其", "戰術黑"],
    sizes: ["S", "M", "L"]
  }
];
