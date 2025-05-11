const popupTrigger = document.getElementById('popup-trigger');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

popupTrigger.addEventListener('click', (e) => {
    e.preventDefault(); 
    popup.style.display = 'block'; 
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; 
});

let data = {};
const xhr = new XMLHttpRequest();
xhr.open('GET', 'products.json', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        data = JSON.parse(xhr.responseText);
        const grid = document.getElementById('category-grid');
        const dropdown = document.getElementById('catalog-dropdown'); 

        const categoryNames = Object.keys(data).filter(key => key !== 'categories');

        categoryNames.forEach(categoryName => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = categoryName;
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleCatalogMenuItemClick(categoryName); 
            });
            
            dropdown.appendChild(link);
        });

        const specialLink = document.createElement('a');
        specialLink.href = '#';
        specialLink.textContent = 'Special';
        specialLink.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryKeys = Object.keys(data); 
            const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
            handleCatalogMenuItemClick(randomCategory); 
        });
        dropdown.appendChild(specialLink);

        categoryNames.forEach(categoryName => {
            const div = document.createElement('div');
            div.className = 'category-item';
            div.innerHTML = `<h3>${categoryName}</h3>`;

            div.addEventListener('click', () => {
                showProducts(categoryName);
            });

            grid.appendChild(div);
        });

        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `<h3>Special</h3>`;
        grid.appendChild(div);

        div.addEventListener('click', () => {
            const categoryKeys = Object.keys(data); 
            const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
            showProducts(randomCategory);
        });

    } else {
        console.error('Failed to load JSON:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Network error while loading JSON');
};

xhr.send();

const showProducts = function(category) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; 

    const categoryNameHeader = document.getElementById('category-name');
    categoryNameHeader.innerHTML = `<h3 class="category-name">${category}</h3>`;

    const products = data[category];
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
        <div class="category-info">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.notes}</p>
            <span class="product-price">Price: $${product.price}</span>
        </div>
        `;
        productGrid.appendChild(productDiv);
    });
}

function handleCatalogMenuItemClick(categoryName) {
  document.getElementById('hero').innerHTML = '';
  document.getElementById('features')?.remove();
  document.getElementById('categories')?.remove();
  document.getElementById('newsletter').innerHTML = '';

  const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; 

    const categoryNameHeader = document.getElementById('category-name');
    categoryNameHeader.innerHTML = `<h3 class="category-name">${categoryName}</h3>`;

    const products = data[categoryName];
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
        <div class="category-info">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <h5>${product.brand}</h5>
            <p>${product.notes}</p>
            <span class="product-price">Price: $${product.price}</span>
        </div>
        `;
        productGrid.appendChild(productDiv);
    });
  
    const footer = document.getElementById('newsletter');
    footer.innerHTML = `
    <div class="footer-info">
        <h3>You can get all with delivery on order from 9800$</h3>
        <h4>We are waiting for you!</h4>
        <h4>Contact us: +1 234 567 890</h4>
    </div>
    `;
    footer.style.padding = '10px';
}