// 商品資料 (專屬狗狗服服飾特寫與穿搭照)
const products = [
  // --- 狗狗衣服 ---
  {
    id: 1,
    name: "法式條紋親膚棉T",
    category: "clothes",
    price: 490,
    desc: "100% 純棉高彈力，經典法式條紋風格",
    image: "條紋背心.png",
    colors: ["經典藍", "燕麥黃", "櫻花粉"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "華夫格棉質小恐龍保暖套裝",
    category: "clothes",
    price: 680,
    desc: "就恐龍裝，我掰不出介紹了啦",
    image: "黃色恐龍.png",
    colors: ["奶油黃", "莫蘭迪綠"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 3,
    name: "莫蘭迪綠奶油防水斗篷",
    category: "clothes",
    price: 590,
    desc: "輕巧防微雨，穿脫極速，適合戶外散步穿著",
    image: "綠色斗篷.png",
    colors: ["抹茶綠", "芥末黃"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 4,
    name: "碎花小清新家居服",
    category: "clothes",
    price: 420,
    desc: "透氣不黏毛，室內防掉毛的質感居家必備",
    image: "小碎花.png",
    colors: ["薄荷綠", "柔粉色"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 5,
    name: "學院風針織馬甲",
    category: "clothes",
    price: 550,
    desc: "掰不出來sorry",
    image: "咖色背心",
    colors: ["藏青色", "栗子棕"],
    sizes: ["S", "M", "L"]
  },

  // --- 寵物帽子 ---
  {
    id: 6,
    name: "手作手工編織草帽",
    category: "hats",
    price: 320,
    desc: "遮陽透氣，附調節防風繩，夏日野餐必備。",
    image: "草帽.png",
    colors: ["原木色"],
    sizes: ["單一尺寸"]
  },
  {
    id: 7,
    name: "復古棒球帽",
    category: "hats",
    price: 380,
    desc: "留耳孔設計不壓耳朵，帥氣潮流風。",
    image: "牛仔帽.png",
    colors: ["丹寧藍", "卡其色"],
    sizes: ["S", "M"]
  },
  {
    id: 8,
    name: "可愛青蛙造型毛線帽",
    category: "hats",
    price: 290,
    desc: "手工鉤針編織，搞怪又吸睛的冬天拍照配件。",
    image: "青蛙.png",
    colors: ["鮮綠色"],
    sizes: ["通用款"]
  },
  {
    id: 9,
    name: "生日派對迷你皇冠帽",
    category: "hats",
    price: 250,
    desc: "毛孩過生日專屬！軟布材質不傷頭皮。",
    image: "皇冠.png",
    colors: ["閃亮金", "夢幻粉"],
    sizes: ["單一尺寸"]
  },

  // --- 配件飾品 ---
  {
    id: 10,
    name: "手作印花圍巾脖圍",
    category: "acc",
    price: 280,
    desc: "雙面可戴，隨性打結即有型。",
    image: " ",
    colors: ["黃色黃橘", "小紅花"],
    sizes: ["S", "M"]
  },
  {
    id: 11,
    name: "紳士領結項圈",
    category: "acc",
    price: 350,
    desc: "可調整長度安全扣，正式場合優雅亮相。",
    image: " ",
    colors: ["經典黑", "酒紅色"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 12,
    name: "可愛小花刺繡領巾",
    category: "acc",
    price: 310,
    desc: "韓系小花風格，棉麻質感溫柔滿分。",
    image: " ",
    colors: ["奶油黃", "薰衣草紫"],
    sizes: ["通用款"]
  },
  {
    id: 13,
    name: "防遺失質感皮革名牌 collar",
    category: "acc",
    price: 450,
    desc: "可客製化雕刻名字，輕巧無負擔。",
    image: " ",
    colors: ["原皮棕", "橄欖綠"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 14,
    name: "夜間發光安全項圈",
    category: "acc",
    price: 290,
    desc: "高亮反射光條，夜間散步安全感加倍。",
    image: " ",
    colors: ["螢光橙", "螢光綠"],
    sizes: ["M", "L"]
  },

  // --- 外出背包 ---
  {
    id: 15,
    name: "毛孩自背防撿食小背包",
    category: "bags",
    price: 480,
    desc: "可裝撿便袋與小零食，狗狗自己背玩具！",
    image: " ",
    colors: ["黃色小鴨", "牛巧棕"],
    sizes: ["S", "M"]
  },
  {
    id: 16,
    name: "透氣人體工學寵物胸前背包",
    category: "bags",
    price: 1180,
    desc: "解放雙手！透氣網布加寬肩帶，飼主減壓設計。",
    image: " ",
    colors: ["星空灰", "燕麥米"],
    sizes: ["M", "L"]
  },
  {
    id: 17,
    name: "日系帆布單肩斜挎外出包",
    category: "bags",
    price: 890,
    desc: "探頭防脫逃扣環，極簡美觀的大容量帆布包。",
    image: " ",
    colors: ["原色帆布", "軍綠色"],
    sizes: ["L"]
  },
  {
    id: 18,
    name: "馬卡龍色防撞硬殼寵物背包",
    category: "bags",
    price: 1350,
    desc: "大視野透明面罩，外出搭公車捷運最方便。",
    image: " ",
    colors: ["櫻花粉", "薄荷綠"],
    sizes: ["標準尺寸"]
  },
  {
    id: 19,
    name: "輕量摺疊旅行拉桿背包",
    category: "bags",
    price: 1680,
    desc: "可背可拉，適合長途旅行與高齡犬使用。",
    image: " ",
    colors: ["質感黑"],
    sizes: ["大容量"]
  },
  {
    id: 20,
    name: "胸背帶一體式小鞍包",
    category: "bags",
    price: 520,
    desc: "胸背帶結合側包，工裝戶外風格帥氣實用。",
    image: " ",
    colors: ["沙漠卡其", "戰術黑"],
    sizes: ["S", "M", "L"]
  }
];

let cart = [];
const selectedOptions = {};

// ⚡ 核心初始化邏輯：確保頁面載入後自動渲染商品
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  setupCategoryTabs();
  setupCartModal();
});

function renderProducts(filterCategory) {
  const grid = document.getElementById("product-grid");
  if (!grid) return; // 防呆機制
  
  grid.innerHTML = "";

  const filtered = filterCategory === "all" 
    ? products 
    : products.filter(p => p.category === filterCategory);

  filtered.forEach(p => {
    if (!selectedOptions[p.id]) {
      selectedOptions[p.id] = {
        color: p.colors[0],
        size: p.sizes[0]
      };
    }

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        
        <div class="options-group">
          <span class="option-label">顏色:</span>
          <div class="option-selector">
            ${p.colors.map(c => `
              <span class="chip ${selectedOptions[p.id].color === c ? 'active' : ''}" 
                    onclick="selectOption(${p.id}, 'color', '${c}')">${c}</span>
            `).join('')}
          </div>
        </div>

        <div class="options-group">
          <span class="option-label">尺寸:</span>
          <div class="option-selector">
            ${p.sizes.map(s => `
              <span class="chip ${selectedOptions[p.id].size === s ? 'active' : ''}" 
                    onclick="selectOption(${p.id}, 'size', '${s}')">${s}</span>
            `).join('')}
          </div>
        </div>

        <div class="product-bottom">
          <span class="price">NT$ ${p.price}</span>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">加入購物車</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function selectOption(productId, type, value) {
  selectedOptions[productId][type] = value;
  const activeTab = document.querySelector(".tab-btn.active")?.dataset.category || "all";
  renderProducts(activeTab);
}

function setupCategoryTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      renderProducts(e.target.dataset.category);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const opt = selectedOptions[productId];

  const cartItem = {
    ...product,
    selectedColor: opt.color,
    selectedSize: opt.size,
    cartId: `${productId}-${opt.color}-${opt.size}`
  };

  cart.push(cartItem);
  updateCartUI();
  alert(`已將「${product.name} (${opt.color} / ${opt.size})」加入購物車！🐾`);
}

function updateCartUI() {
  document.getElementById("cart-count").innerText = cart.length;

  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("cart-total-price");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-msg">購物車目前是空的喔！快去幫毛孩挑選好物吧 🐾</p>';
    totalPriceEl.innerText = "NT$ 0";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">${item.selectedColor} / ${item.selectedSize} - NT$ ${item.price}</div>
        </div>
        <button class="close-btn" style="font-size: 1rem;" onclick="removeFromCart(${index})">&times;</button>
      </div>
    `;
  }).join('');

  totalPriceEl.innerText = `NT$ ${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function setupCartModal() {
  const modal = document.getElementById("cart-modal");
  const btn = document.getElementById("cart-toggle");
  const closeBtn = document.getElementById("cart-close");

  if (btn && modal) btn.onclick = () => modal.classList.add("open");
  if (closeBtn && modal) closeBtn.onclick = () => modal.classList.remove("open");
  window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("open");
  };
}
