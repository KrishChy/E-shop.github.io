let product = document.getElementById("product");
let recentlyAdded = JSON.parse(localStorage.getItem("recentlyAdded")) || [];
let productItemsData = [
    {
        "id": 1,
        "name": "Casual Cotton T-Shirt",
        "price": 29.99,
        "oldPrice": 49.99,
        "image": "img/product-1-1.jpg",
        "imageAlt": "img/product-1-2.jpg",
        "category": "tshirts",
        "categoryDisplay": "T-Shirts",
        "description": "Comfortable casual t-shirt made from 100% organic cotton. Perfect for everyday wear.",
        "rating": 4,
        "reviews": [
            { "user": "John D.", "rating": 5, "comment": "Great quality!", "date": "2026-03-01" },
            { "user": "Sarah M.", "rating": 4, "comment": "Very comfortable.", "date": "2026-03-10" }
        ],
        "stock": 25,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 2,
        "name": "Slim Fit Jeans",
        "price": 59.99,
        "oldPrice": 79.99,
        "image": "img/product-2-1.jpg",
        "imageAlt": "img/product-2-2.jpg",
        "category": "jeans",
        "categoryDisplay": "Jeans",
        "description": "Modern slim fit jeans with stretch comfort. Classic style for any occasion.",
        "rating": 5,
        "reviews": [
            { "user": "Mike R.", "rating": 5, "comment": "Perfect fit!", "date": "2026-02-28" }
        ],
        "stock": 15,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 3,
        "name": "Formal Blazer",
        "price": 89.99,
        "oldPrice": 129.99,
        "image": "img/product-3-1.jpg",
        "imageAlt": "img/product-3-2.jpg",
        "category": "blazers",
        "categoryDisplay": "Blazers",
        "description": "Elegant formal blazer perfect for office wear or special occasions.",
        "rating": 4,
        "reviews": [],
        "stock": 8,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 4,
        "name": "Summer Floral Dress",
        "price": 45.99,
        "oldPrice": 65.99,
        "image": "img/product-4-1.jpg",
        "imageAlt": "img/product-4-2.jpg",
        "category": "dresses",
        "categoryDisplay": "Dresses",
        "description": "Light and breezy summer dress with floral pattern. Ideal for warm weather.",
        "rating": 5,
        "reviews": [
            { "user": "Emma L.", "rating": 5, "comment": "Beautiful dress!", "date": "2026-03-15" }
        ],
        "stock": 20,
        "isOffer": false,
        "isNew": true
    },
    {
        "id": 5,
        "name": "Classic Polo Shirt",
        "price": 34.99,
        "oldPrice": 44.99,
        "image": "img/product-5-1.jpg",
        "imageAlt": "img/product-5-2.jpg",
        "category": "tshirts",
        "categoryDisplay": "T-Shirts",
        "description": "Classic polo shirt for a smart casual look. Premium cotton blend.",
        "rating": 4,
        "reviews": [],
        "stock": 30,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 6,
        "name": "Leather Belt",
        "price": 24.99,
        "oldPrice": 34.99,
        "image": "img/product-6-1.jpg",
        "imageAlt": "img/product-6-2.jpg",
        "category": "accessories",
        "categoryDisplay": "Accessories",
        "description": "Premium genuine leather belt with stylish buckle. Durable and fashionable.",
        "rating": 3,
        "reviews": [],
        "stock": 30,
        "isOffer": false,
        "isNew": true
    },
    {
        "id": 7,
        "name": "Hooded Sweatshirt",
        "price": 49.99,
        "oldPrice": 69.99,
        "image": "img/product-7-1.jpg",
        "imageAlt": "img/product-7-2.jpg",
        "category": "sweatshirts",
        "categoryDisplay": "Sweatshirts",
        "description": "Cozy hooded sweatshirt perfect for casual outings. Soft fleece interior.",
        "rating": 5,
        "reviews": [
            { "user": "Alex K.", "rating": 5, "comment": "Super warm!", "date": "2026-03-05" }
        ],
        "stock": 18,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 8,
        "name": "Denim Jacket",
        "price": 69.99,
        "oldPrice": 89.99,
        "image": "img/product-8-1.jpg",
        "imageAlt": "img/product-8-2.jpg",
        "category": "jackets",
        "categoryDisplay": "Jackets",
        "description": "Classic denim jacket with vintage wash. Versatile layering piece.",
        "rating": 4,
        "reviews": [],
        "stock": 10,
        "isOffer": false,
        "isNew": true
    },
    {
        "id": 9,
        "name": "Winter Thermal Jacket",
        "price": 129.99,
        "oldPrice": 169.99,
        "image": "img/product-12-1.jpg",
        "imageAlt": "img/product-12-2.jpg",
        "category": "jackets",
        "categoryDisplay": "Jackets",
        "description": "Warm winter jacket with thermal insulation. Waterproof and windproof.",
        "rating": 5,
        "reviews": [
            { "user": "WinterLover", "rating": 5, "comment": "Keeps me warm!", "date": "2026-02-20" }
        ],
        "stock": 7,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 10,
        "name": "Striped Tank Top",
        "price": 19.99,
        "oldPrice": 29.99,
        "image": "img/product-1-1.jpg",
        "imageAlt": "img/product-1-2.jpg",
        "category": "tops",
        "categoryDisplay": "Tops",
        "description": "Trendy striped tank top perfect for summer. Light and breathable fabric.",
        "rating": 4,
        "reviews": [],
        "stock": 35,
        "isOffer": true,
        "isNew": true
    },
    {
        "id": 11,
        "name": "Cargo Shorts",
        "price": 39.99,
        "oldPrice": 49.99,
        "image": "img/product-2-1.jpg",
        "imageAlt": "img/product-2-2.jpg",
        "category": "shorts",
        "categoryDisplay": "Shorts",
        "description": "Comfortable cargo shorts with multiple pockets. Perfect for summer adventures.",
        "rating": 4,
        "reviews": [],
        "stock": 22,
        "isOffer": false,
        "isNew": true
    },
    {
        "id": 12,
        "name": "Wool Sweater",
        "price": 54.99,
        "oldPrice": 74.99,
        "image": "img/product-7-1.jpg",
        "imageAlt": "img/product-7-2.jpg",
        "category": "sweaters",
        "categoryDisplay": "Sweaters",
        "description": "Elegant wool sweater for cold weather. Soft and cozy material.",
        "rating": 5,
        "reviews": [],
        "stock": 15,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 13,
        "name": "Skinny Leggings",
        "price": 28.99,
        "oldPrice": 38.99,
        "image": "img/product-4-1.jpg",
        "imageAlt": "img/product-4-2.jpg",
        "category": "bottoms",
        "categoryDisplay": "Bottoms",
        "description": "Stretchy and comfortable skinny leggings. Perfect for workouts or casual wear.",
        "rating": 4,
        "reviews": [],
        "stock": 40,
        "isOffer": false,
        "isNew": true
    },
    {
        "id": 14,
        "name": "Printed Scarf",
        "price": 15.99,
        "oldPrice": 22.99,
        "image": "img/product-6-1.jpg",
        "imageAlt": "img/product-6-2.jpg",
        "category": "accessories",
        "categoryDisplay": "Accessories",
        "description": "Stylish printed scarf to complement any outfit. Lightweight fabric.",
        "rating": 3,
        "reviews": [],
        "stock": 50,
        "isOffer": true,
        "isNew": false
    },
    {
        "id": 15,
        "name": "Sports Running Shorts",
        "price": 25.99,
        "oldPrice": 35.99,
        "image": "img/product-2-1.jpg",
        "imageAlt": "img/product-2-2.jpg",
        "category": "shorts",
        "categoryDisplay": "Shorts",
        "description": "Lightweight sports shorts with moisture-wicking fabric. Ideal for workouts.",
        "rating": 4,
        "reviews": [],
        "stock": 28,
        "isOffer": false,
        "isNew": true
    },
    {
        "id": 16,
        "name": "V-Neck Cardigan",
        "price": 44.99,
        "oldPrice": 59.99,
        "image": "img/product-7-1.jpg",
        "imageAlt": "img/product-7-2.jpg",
        "category": "sweaters",
        "categoryDisplay": "Sweaters",
        "description": "Comfortable v-neck cardigan for layering. Soft knit material.",
        "rating": 4,
        "reviews": [],
        "stock": 12,
        "isOffer": true,
        "isNew": false
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
let appliedCoupons = JSON.parse(localStorage.getItem("appliedCoupons")) || [];

const COUPONS = {
    "FIRST20": { discount: 20, type: "percent", description: "20% off on first order" },
    "SAVE30": { discount: 30, type: "fixed", description: "$30 off on orders over $100" },
    "FLASH50": { discount: 50, type: "percent", description: "50% off - Limited time!" },
    "FREE99": { discount: 0, type: "freeshipping", description: "Free shipping" },
    "SAVE10": { discount: 10, type: "percent", description: "10% off" },
    "SAVE20": { discount: 20, type: "percent", description: "20% off" },
    "FLAT50": { discount: 50, type: "fixed", description: "$50 off" },
    "NEWUSER": { discount: 15, type: "percent", description: "15% off for new users" }
};

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    updateCartPreview();
}

function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoritesBadge();
}

function saveRecentlyViewed() {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
}

function updateCartBadge() {
    let cartBadges = document.querySelectorAll(".cart sup");
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadges.forEach(badge => {
        badge.textContent = totalItems;
    });
}

function updateFavoritesBadge() {
    let favBadges = document.querySelectorAll(".fav-badge");
    favBadges.forEach(badge => {
        badge.textContent = favorites.length;
    });
}

function isInCart(id) {
    return cart.some(item => item.id === id);
}

function isInFavorites(id) {
    return favorites.some(item => item.id === id);
}

function addToCart(id, qty = 1) {
    let product = productItemsData.find(p => p.id === id);
    if (!product) return;
    
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({...product, quantity: qty});
    }
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    if (typeof renderCart === 'function') renderCart();
    updateCartPreview();
}

function updateQuantity(id, quantity) {
    let item = cart.find(item => item.id === id);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(id);
        } else {
            item.quantity = parseInt(quantity);
            saveCart();
        }
        if (typeof renderCart === 'function') renderCart();
        updateCartPreview();
    }
}

function toggleFavorite(id) {
    let product = productItemsData.find(p => p.id === id);
    if (!product) return;
    
    let index = favorites.findIndex(item => item.id === id);
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification(`${product.name} removed from favorites`);
    } else {
        favorites.push(product);
        showNotification(`${product.name} added to favorites!`);
    }
    saveFavorites();
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
        let id = parseInt(btn.dataset.id);
        let icon = btn.querySelector('i');
        if (isInFavorites(id)) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
}

function showNotification(message) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function getStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function getStockStatus(stock) {
    if (stock === 0) return '<span class="out-of-stock">Out of Stock</span>';
    if (stock <= 5) return '<span class="low-stock">Only ' + stock + ' left!</span>';
    return '<span class="in-stock">In Stock</span>';
}

function generateProduct(filteredProducts = productItemsData, sortBy = 'default') {
    if (!product) return;
    
    let sortedProducts = [...filteredProducts];
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
    }
    
    product.innerHTML = sortedProducts.map((x) => {
        let { id, name, price, oldPrice, image, description, rating, stock } = x;
        let inCart = isInCart(id);
        let inFav = isInFavorites(id);
        return `<article class="product" data-id="${id}">
          <div class="img-container">
            <img src="${image}" alt="${name}" class="product-img" onclick="viewProduct(${id})" />
            <button class="fav-btn ${inFav ? 'active' : ''}" data-id="${id}" onclick="toggleFavorite(${id})">
              <i class="${inFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            ${oldPrice ? '<span class="sale-badge">SALE</span>' : ''}
            <button class="bag-btn" onclick="addToCart(${id})" ${inCart ? 'disabled' : ''}>
              <i class="fas fa-shopping-cart"></i>
              ${inCart ? 'In Cart' : 'Add to Bag'}
            </button>
          </div>
          <h3 onclick="viewProduct(${id})">${name}</h3>
          <p>${description}</p>
          <p class="rating">${getStars(rating)} <span class="review-count">(${getReviewCount(id)} reviews)</span></p>
          <p class="stock-status">${getStockStatus(stock)}</p>
          <h4>
            $${price.toFixed(2)} 
            ${oldPrice ? `<span class="old-price">$${oldPrice.toFixed(2)}</span>` : ''}
          </h4>
        </article>`;
    }).join("");
}

function getReviewCount(id) {
    let prod = productItemsData.find(p => p.id === id);
    return prod && prod.reviews ? prod.reviews.length : 0;
}

function viewProduct(id) {
    window.location.href = `productdetails.html?id=${id}`;
}

function getProductById(id) {
    return productItemsData.find(p => p.id === parseInt(id));
}

function addToRecentlyViewed(id) {
    let product = productItemsData.find(p => p.id === id);
    if (!product) return;
    
    recentlyViewed = recentlyViewed.filter(p => p.id !== id);
    recentlyViewed.unshift(product);
    if (recentlyViewed.length > 6) recentlyViewed.pop();
    saveRecentlyViewed();
}

function applyCoupon(code) {
    code = code.toUpperCase().trim();
    const coupon = COUPONS[code];
    
    if (!coupon) {
        showNotification('Invalid coupon code!');
        return false;
    }
    
    if (appliedCoupons.includes(code)) {
        showNotification('Coupon already applied!');
        return false;
    }
    
    appliedCoupons.push(code);
    localStorage.setItem("appliedCoupons", JSON.stringify(appliedCoupons));
    showNotification(`Coupon "${code}" applied: ${coupon.description}!`);
    return true;
}

function calculateDiscount() {
    let discount = 0;
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    appliedCoupons.forEach(code => {
        const coupon = COUPONS[code];
        if (coupon) {
            if (coupon.type === 'percent') {
                discount += subtotal * (coupon.discount / 100);
            } else {
                discount += coupon.discount;
            }
        }
    });
    
    return { subtotal, discount: Math.min(discount, subtotal) };
}

function clearAppliedCoupons() {
    appliedCoupons = [];
    localStorage.setItem("appliedCoupons", JSON.stringify(appliedCoupons));
}

generateProduct();

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    updateFavoritesBadge();
    updateFavoriteButtons();
    updateCartPreview();
});

// Cart page functions
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return;
    
    cartItems.innerHTML = "";
    let { subtotal, discount } = calculateDiscount();
    let grandTotal = subtotal - discount;

    if (cart.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:2rem;">Your cart is empty!</td></tr>';
        document.getElementById("grand-total").textContent = "$0.00";
        document.getElementById("subtotal").textContent = "$0.00";
        document.getElementById("discount").textContent = "$0.00";
        return;
    }

    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="width:50px;"> ${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="qty-control">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" max="99" 
                        onchange="updateQuantity(${item.id}, this.value)" class="qty-input">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})" class="remove-btn"><i class="fas fa-trash"></i></button></td>
        `;
        cartItems.appendChild(row);
    });

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("discount").textContent = "$" + discount.toFixed(2);
    document.getElementById("grand-total").textContent = "$" + grandTotal.toFixed(2);
    
    if (appliedCoupons.length > 0) {
        document.getElementById("coupon-applied").textContent = appliedCoupons.join(", ");
    }
}

function checkout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        if (confirm("Please login to checkout. Go to login page?")) {
            window.location.href = 'login.html';
        }
        return;
    }
    
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let { subtotal, discount } = calculateDiscount();
    let grandTotal = subtotal - discount;
    
    if (confirm(`Proceed to checkout?\n\nItems: ${cart.length}\nSubtotal: $${subtotal.toFixed(2)}\nDiscount: -$${discount.toFixed(2)}\nTotal: $${grandTotal.toFixed(2)}\n\nThank you for your order!`)) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.unshift({
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...cart],
            subtotal,
            discount,
            total: grandTotal,
            status: 'Processing'
        });
        localStorage.setItem('orders', JSON.stringify(orders));
        
        cart = [];
        clearAppliedCoupons();
        saveCart();
        renderCart();
        showNotification("Order placed successfully!");
    }
}

// Favorites page functions
function renderFavorites() {
    const favItems = document.getElementById("fav-items");
    if (!favItems) return;
    
    favItems.innerHTML = "";

    if (favorites.length === 0) {
        favItems.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:2rem;">No favorites yet!</td></tr>';
        return;
    }

    favorites.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="width:50px;"> ${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.category}</td>
            <td><button onclick="addToCart(${item.id}); removeFromFavorites(${item.id});" class="add-btn"><i class="fas fa-cart-plus"></i> Add</button></td>
            <td><button onclick="removeFromFavorites(${item.id})" class="remove-btn"><i class="fas fa-trash"></i></button></td>
        `;
        favItems.appendChild(row);
    });
}

function removeFromFavorites(id) {
    favorites = favorites.filter(item => item.id !== id);
    saveFavorites();
    renderFavorites();
    updateFavoriteButtons();
}

// Recently viewed
function renderRecentlyViewed() {
    const container = document.getElementById("recently-viewed");
    if (!container || recentlyViewed.length === 0) {
        if (container) container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    container.innerHTML = `
        <div class="section-title">
            <h2><i class="fa-solid fa-clock-rotate-left"></i> Recently Viewed</h2>
        </div>
        <div class="products-center">
            ${recentlyViewed.map(x => `
                <article class="product" data-id="${x.id}">
                  <div class="img-container">
                    <img src="${x.image}" alt="${x.name}" class="product-img" onclick="viewProduct(${x.id})" />
                    <button class="fav-btn" data-id="${x.id}" onclick="toggleFavorite(${x.id})">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="bag-btn" onclick="addToCart(${x.id})">
                      <i class="fas fa-shopping-cart"></i>
                      Add to Bag
                    </button>
                  </div>
                  <h3 onclick="viewProduct(${x.id})">${x.name}</h3>
                  <h4>$${x.price.toFixed(2)}</h4>
                </article>
            `).join('')}
        </div>
    `;
}

// Cart mini preview
function updateCartPreview() {
    const preview = document.getElementById("cart-preview");
    if (!preview) return;
    
    if (cart.length === 0) {
        preview.innerHTML = '<p style="text-align:center; padding:1rem;">Your cart is empty</p>';
        return;
    }
    
    preview.innerHTML = cart.slice(0, 3).map(item => `
        <div class="cart-preview-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-preview-info">
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></button>
        </div>
    `).join('') + (cart.length > 3 ? `<p style="text-align:center; padding:0.5rem;">+${cart.length - 3} more items</p>` : '');
}

// Initialize badges on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    updateFavoritesBadge();
    updateFavoriteButtons();
    updateCartPreview();
    if (document.getElementById("cart-items")) renderCart();
    if (document.getElementById("fav-items")) renderFavorites();
    renderRecentlyViewed();
});

// Search and filter
function searchProducts(query) {
    query = query.toLowerCase();
    return productItemsData.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
}

function filterByCategory(category) {
    if (category === 'all') return productItemsData;
    return productItemsData.filter(p => p.category === category);
}

function filterByPrice(min, max) {
    return productItemsData.filter(p => p.price >= min && p.price <= max);
}

function filterByRating(minRating) {
    return productItemsData.filter(p => p.rating >= minRating);
}
