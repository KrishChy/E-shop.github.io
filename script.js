document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    const top = document.getElementById("top");
    const nav = document.getElementById("navbar");
    const aside = document.getElementById("menu");
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Top bar - hide on mobile (handled by CSS)
    if (top) {
        if (currentUser) {
            top.innerHTML = `<p>| <a href="tel:+0012345678"><i class="fa-solid fa-phone"></i> +00 1234 5678</a> | <a href="#"><i class="fa-solid fa-location-dot"></i> Location</a> |</p>
            <div class="discription">
                | Super value Deal- Save more with coupons |
            </div>
            <div class="login user-info">
                | <span style="color: var(--main-color);"><i class="fa-solid fa-user"></i> Hi, ${currentUser.name}</span> |
                <a class="logout-btn" href="#" onclick="handleLogout()" style="color: #e74c3c; margin-left: 10px;"><i class="fa-solid fa-sign-out-alt"></i> Logout</a> |
            </div>`;
        } else {
            top.innerHTML = `<p>| <a href="tel:+0012345678"><i class="fa-solid fa-phone"></i> +00 1234 5678</a> | <a href="#"><i class="fa-solid fa-location-dot"></i> Location</a> |</p>
            <div class="discription">
                | Super value Deal- Save more with coupons |
            </div>
            <div class="login">
                | <a class="login1" href="login.html"><i class="fa-solid fa-user"></i> Log in</a> / <a class="login2" href="login.html"><i class="fa-solid fa-user-plus"></i> Sign up</a> |
            </div>`;
        }
    }

    // Navbar
    if (nav) {
        nav.innerHTML = `
         <a href="index.html">
            <h1><i class="fa-solid fa-bag-shopping"></i> E-shop</h1>
        </a>
        <ul class="nav-links">
            <li class="nav-item nav-home"><a href="index.html" class="active"><i class="fa-solid fa-home"></i> Home</a></li>
            <li class="nav-item nav-shop"><a href="index.html#products"><i class="fa-solid fa-store"></i> Shop</a></li>
            <li class="nav-item nav-about"><a href="about.html"><i class="fa-solid fa-info-circle"></i> About</a></li>
            <li class="nav-item nav-contact"><a href="contact.html"><i class="fa-solid fa-envelope"></i> Contact</a></li>
            ${currentUser ? '<li class="nav-item nav-profile"><a href="profile.html"><i class="fa-solid fa-user-cog"></i> Profile</a></li>' : ''}
        </ul>
        <div class="nav-right">
            <div class="search">
                <input type="search" id="search-input" placeholder="search products" />
                <button id="search-btn"><i class="fa-solid fa-search"></i></button>
            </div>
            <div class="cart">
                <a href="fav.html" title="Wishlist"><i class="fa-regular fa-heart"></i></a>
                <a href="cart.html" title="Cart"><i class="fas fa-shopping-cart"></i></a>
                ${currentUser ? '<a href="profile.html" title="Profile" class="user-profile-btn"><i class="fa-solid fa-user-circle"></i></a>' : ''}
            </div>
            <button class="hamburger" id="menu-toggle" aria-label="Toggle menu" onclick="toggleSidebar()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>`;
        
        // Add hamburger event listener after DOM is updated
        const hamburger = document.getElementById("menu-toggle");
        if (hamburger) {
            hamburger.addEventListener("click", function(e) {
                e.preventDefault();
                toggleSidebar();
            });
        }
        
        // Search functionality
        const searchInput = document.getElementById("search-input");
        const searchBtn = document.getElementById("search-btn");
        
        if (searchInput && searchBtn) {
            searchBtn.addEventListener("click", performSearch);
            searchInput.addEventListener("keypress", (e) => {
                if (e.key === "Enter") performSearch();
            });
        }
    }
     
    // Hamburger event listener
    const hamburger = document.getElementById("menu-toggle");
    if (hamburger) {
        hamburger.addEventListener("click", toggleSidebar);
    }
  
    // Sidebar menu (hamburger)
    if (aside) {
        aside.innerHTML = `
        <div class="sidebar-header">
            <h2><i class="fa-solid fa-bars"></i> Menu</h2>
            <button class="close-btn" onclick="closeSidebar()">
                <i class="fa-solid fa-times"></i>
            </button>
        </div>
        
        <!-- Search in Sidebar -->
        <div class="sidebar-search">
            <input type="search" id="sidebar-search-input" placeholder="Search products..." />
            <button onclick="performSidebarSearch()"><i class="fa-solid fa-search"></i></button>
        </div>
        
        <div class="sidebar-user">
            ${currentUser ? `
                <div class="user-avatar-lg">
                    <i class="fa-solid fa-user-circle"></i>
                </div>
                <div class="user-details">
                    <p class="user-name">${currentUser.name}</p>
                    <p class="user-email">${currentUser.email}</p>
                    <div class="user-quick-actions">
                        <a href="cart.html"><i class="fa-solid fa-shopping-cart"></i> Cart</a>
                        <a href="fav.html"><i class="fa-solid fa-heart"></i> Wishlist</a>
                        <a href="profile.html"><i class="fa-solid fa-user-cog"></i> Profile</a>
                    </div>
                    <a href="#" class="logout-link" onclick="handleLogout(); closeSidebar();"><i class="fa-solid fa-sign-out-alt"></i> Logout</a>
                </div>
            ` : `
                <div class="guest-user">
                    <div class="guest-avatar">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <p>Welcome, Guest!</p>
                    <a href="login.html" class="btn sidebar-login-btn"><i class="fa-solid fa-sign-in-alt"></i> Login / Sign Up</a>
                </div>
            `}
        </div>
        
        <!-- Sidebar Info (Top Bar Content) -->
        <div class="sidebar-info">
            <a href="tel:+0012345678" class="sidebar-info-item">
                <i class="fa-solid fa-phone"></i>
                <span>+00 1234 5678</span>
            </a>
            <a href="#" class="sidebar-info-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>Location</span>
            </a>
        </div>
        <div class="sidebar-deal">
            <i class="fa-solid fa-tag"></i>
            <span>Super value Deal- Save more with coupons</span>
        </div>
        
        <ul class="sidebar-menu">
            <li class="menu-header"><i class="fa-solid fa-home"></i> Main Menu</li>
            <li><a href="index.html"><i class="fa-solid fa-home"></i> Home</a></li>
            <li><a href="index.html#products"><i class="fa-solid fa-store"></i> Shop</a></li>
            <li><a href="index.html#hot-selling"><i class="fa-solid fa-fire"></i> Hot Selling</a></li>
            <li><a href="cart.html"><i class="fa-solid fa-shopping-cart"></i> Cart <sup class="sidebar-cart-badge">0</sup></a></li>
            <li><a href="fav.html"><i class="fa-solid fa-heart"></i> Wishlist <sup class="sidebar-fav-badge">0</sup></a></li>
            ${currentUser ? `<li><a href="profile.html"><i class="fa-solid fa-user"></i> My Profile</a></li>` : ''}
            <li class="menu-header"><i class="fa-solid fa-th-large"></i> Categories</li>
            <li><a href="tshirts.html"><i class="fa-solid fa-shirt"></i> T-Shirts</a></li>
            <li><a href="jeans.html"><i class="fa-solid fa-person"></i> Jeans</a></li>
            <li><a href="dresses.html"><i class="fa-solid fa-person-dress"></i> Dresses</a></li>
            <li><a href="jackets.html"><i class="fa-solid fa-vest-patches"></i> Jackets</a></li>
            <li><a href="sweaters.html"><i class="fa-solid fa-mitten"></i> Sweaters</a></li>
            <li><a href="accessories.html"><i class="fa-solid fa-gem"></i> Accessories</a></li>
            <li class="menu-header"><i class="fa-solid fa-link"></i> Quick Links</li>
            <li><a href="about.html"><i class="fa-solid fa-info-circle"></i> About Us</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-headset"></i> Contact Us</a></li>
            <li><a href="#"><i class="fa-solid fa-question-circle"></i> FAQ</a></li>
            <li><a href="#"><i class="fa-solid fa-shield-alt"></i> Privacy Policy</a></li>
            <li class="menu-header"><i class="fa-solid fa-share-alt"></i> Follow Us</li>
            <li class="social-links">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </li>
        </ul>`;
        
        // Update sidebar badges
        updateSidebarBadges();
    }
    
    // Hamburger toggles sidebar
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            toggleSidebar();
        });
    }

    // Footer
    if (footer) {
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-brand">
                    <h2><i class="fa-solid fa-bag-shopping"></i> E-shop</h2>
                    <p>Your one-stop online shopping destination for quality products at affordable prices.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact Us</a>
                    <a href="#">FAQ</a>
                    <a href="#">Size Guide</a>
                </div>
                <div class="footer-links">
                    <h3>Categories</h3>
                    <a href="tshirts.html">T-Shirts</a>
                    <a href="jeans.html">Jeans</a>
                    <a href="dresses.html">Dresses</a>
                    <a href="jackets.html">Jackets</a>
                    <a href="sweaters.html">Sweaters</a>
                </div>
                <div class="footer-contact">
                    <h3>Contact Us</h3>
                    <p><i class="fa-solid fa-phone"></i> +00 1234 5678</p>
                    <p><i class="fa-solid fa-envelope"></i> E-shop@admin.com</p>
                    <p><i class="fa-solid fa-clock"></i> Mon-Fri: 9AM - 6PM</p>
                    <p><i class="fa-solid fa-map-marker-alt"></i> 123 Main Street, City</p>
                </div>
                <div class="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Subscribe for exclusive deals!</p>
                    <form onsubmit="event.preventDefault(); showNotification('Subscribed!');">
                        <input type="email" placeholder="Your email" required>
                        <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 E-Shop. All rights reserved.</p>
                <div class="payment-methods">
                    <img src="img/payment-method.png" alt="Payment Methods">
                </div>
            </div>
        `;
    }

    // Cookie consent
    handleCookieConsent();

    // Shop now button
    const shopNowBtn = document.getElementById("shop-now-btn");
    if (shopNowBtn) {
        shopNowBtn.addEventListener("click", () => {
            document.querySelector(".products").scrollIntoView({ behavior: "smooth" });
        });
    }
});

function performSearch() {
    const searchInput = document.getElementById("search-input");
    const productContainer = document.getElementById("product");
    if (!searchInput || !productContainer) return;
    
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    
    const productItemsData = window.productItemsData || [];
    const filtered = productItemsData.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        productContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 2rem;">No products found!</p>';
        return;
    }
    
    productContainer.innerHTML = filtered.map((x) => {
        let { id, name, price, oldPrice, image, description, rating } = x;
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
        }
        return `<article class="product" data-id="${id}">
          <div class="img-container">
            <img src="${image}" alt="${name}" class="product-img" onclick="viewProduct(${id})" />
            <button class="fav-btn" data-id="${id}" onclick="toggleFavorite(${id})">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="bag-btn" onclick="addToCart(${id})">
              <i class="fas fa-shopping-cart"></i>
              Add to Bag
            </button>
          </div>
          <h3 onclick="viewProduct(${id})">${name}</h3>
          <p>${description}</p>
          <p class="rating">${stars}</p>
          <h4>$${price.toFixed(2)} ${oldPrice ? `<span class="old-price">$${oldPrice.toFixed(2)}</span>` : ''}</h4>
        </article>`;
    }).join("");
}

function handleCookieConsent() {
    const cookieBar = document.querySelector(".cookie-bar");
    if (!cookieBar) return;
    
    const accepted = localStorage.getItem("cookiesAccepted");
    if (accepted) {
        cookieBar.style.display = "none";
        return;
    }
    
    const acceptBtn = cookieBar.querySelector(".accept-btn");
    if (acceptBtn) {
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBar.style.display = "none";
        });
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        showNotification('Logged out successfully!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Mobile sidebar toggle (for hamburger icon on mobile)
function toggleSidebar() {
    const aside = document.getElementById("menu");
    const overlay = document.getElementById("sidebar-overlay");
    const hamburger = document.getElementById("menu-toggle");
    
    if (aside) {
        aside.classList.toggle("show");
        if (aside.classList.contains("show")) {
            document.body.classList.add("sidebar-open");
            if (hamburger) hamburger.classList.add("active");
        } else {
            document.body.classList.remove("sidebar-open");
            if (hamburger) hamburger.classList.remove("active");
        }
        if (overlay) overlay.classList.toggle("show");
    }
}

function closeSidebar() {
    const aside = document.getElementById("menu");
    const overlay = document.getElementById("sidebar-overlay");
    const hamburger = document.getElementById("menu-toggle");
    if (aside) aside.classList.remove("show");
    if (overlay) overlay.classList.remove("show");
    if (hamburger) hamburger.classList.remove("active");
    document.body.classList.remove("sidebar-open");
}

function updateSidebarBadges() {
    const cartBadge = document.querySelector('.sidebar-cart-badge');
    const favBadge = document.querySelector('.sidebar-fav-badge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
    }
    if (favBadge) {
        favBadge.textContent = favorites.length;
    }
}

function performSidebarSearch() {
    const input = document.getElementById('sidebar-search-input');
    const searchInput = document.getElementById('search-input');
    if (input && input.value.trim()) {
        if (searchInput) searchInput.value = input.value;
        closeSidebar();
        performSearch();
    }
}

// Close sidebar when clicking overlay
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("sidebar-overlay");
    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }
    
    // Remove body margin-top after scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            document.body.style.marginTop = '0';
        }
        lastScroll = currentScroll;
    });
});

// Loader
window.addEventListener("load", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.classList.add("hidden");
        }
        showPopup();
    }, 1500);
});

// Popup Functions
function showPopup() {
    const popup = document.getElementById("popup-overlay");
    if (popup) {
        popup.classList.add("active");
    }
}

function closePopup() {
    const popup = document.getElementById("popup-overlay");
    if (popup) {
        popup.classList.remove("active");
    }
}

// Close popup when clicking outside
document.addEventListener("click", function(e) {
    const popup = document.getElementById("popup-overlay");
    if (popup && e.target === popup) {
        closePopup();
    }
});

// Hamburger click event delegation (backup)
document.addEventListener("click", function(e) {
    const hamburger = e.target.closest("#menu-toggle");
    if (hamburger) {
        e.preventDefault();
        toggleSidebar();
    }
});
