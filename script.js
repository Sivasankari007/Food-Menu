const menuData = [
    {
        id: 1,
        title: "Wagyu Ribeye",
        price: "$85",
        category: "main",
        img: "steak.png",
        desc: "Grade A5 wagyu steak, perfectly seared with roasted heirloom carrots and red wine reduction."
    },
    {
        id: 2,
        title: "Truffle Carbonara",
        price: "$42",
        category: "main",
        img: "pasta.png",
        desc: "Handmade fettuccine tossed in a creamy duck egg yolk sauce with fresh black truffle shavings."
    },
    {
        id: 15,
        title: "Lobster Thermidor",
        price: "$95",
        category: "main",
        img: "lobster.jpg",
        desc: "Succulent Atlantic lobster tail in a rich, creamy brandy sauce, topped with Gruyere cheese."
    },
    {
        id: 17,
        title: "Wild Salmon en Croute",
        price: "$54",
        category: "main",
        img: "salmon.png",
        desc: "Fresh wild-caught salmon baked in flaky puff pastry with spinach and lemon butter sauce."
    },
    {
        id: 3,
        title: "Grand Garden Salad",
        price: "$28",
        category: "starters",
        img: "salad.png",
        desc: "Organic greens, edible flowers, and lime-ginger emulsion served in a chilled crystal bowl."
    },
    {
        id: 4,
        title: "Omakase Platter",
        price: "$65",
        category: "starters",
        img: "sushi.png",
        desc: "Chef's selection of premium sashimi and nigiri with aged soy and fresh wasabi."
    },
    {
        id: 5,
        title: "Molten Gold Fondant",
        price: "$22",
        category: "desserts",
        img: "dessert.png",
        desc: "Dark chocolate fondant with a molten center, gold leaf garnish, and Madagascar vanilla bean ice cream."
    },
    {
        id: 12,
        title: "Saffron Pistachio Panna Cotta",
        price: "$18",
        category: "desserts",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
        desc: "Silky smooth saffron-infused cream topped with crushed Iranian pistachios and honey."
    },
    {
        id: 13,
        title: "Berry Bliss Cheesecake",
        price: "$16",
        category: "desserts",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop",
        desc: "Creamy New York style cheesecake with a buttery graham cracker crust and wild berry compote."
    },
    {
        id: 14,
        title: "Gold Leaf Tiramisu",
        price: "$20",
        category: "desserts",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop",
        desc: "Traditional Italian tiramisu with espresso-soaked ladyfingers and a touch of edible gold leaf."
    },
    {
        id: 6,
        title: "Fresh Orange Sunshine",
        price: "$12",
        category: "drinks",
        img: "orange.png",
        desc: "Freshly squeezed seasonal oranges served chilled with a hint of mint."
    },
    {
        id: 7,
        title: "Watermelon Lime Chill",
        price: "$14",
        category: "drinks",
        img: "watermelon.png",
        desc: "Refreshing watermelon juice blended with a splash of lime and crushed ice."
    },
    {
        id: 8,
        title: "Pineapple Ginger Zest",
        price: "$15",
        category: "drinks",
        img: "pineapple.png",
        desc: "Exotic pineapple juice paired with spicy ginger for a revitalizing pick-me-up."
    },
    {
        id: 9,
        title: "Pomegranate Passion",
        price: "$18",
        category: "drinks",
        img: "pomegranate.png",
        desc: "Pure pomegranate juice with a splash of sparkling water and passionfruit seeds."
    },
    {
        id: 10,
        title: "Green Detox Elixir",
        price: "$16",
        category: "drinks",
        img: "green.png",
        desc: "A healthy blend of green apple, kale, cucumber, and a squeeze of fresh lemon."
    },
    {
        id: 11,
        title: "Velvet Mango Tango",
        price: "$14",
        category: "drinks",
        img: "mango.png",
        desc: "Creamy Alphonso mango nectar blended with a hint of coconut cream."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const header = document.getElementById('header');

    // Display all items initially
    displayMenuItems(menuData);

    // Filter Items
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.filter;

            // Toggle active class
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const menuCategory = category === 'all'
                ? menuData
                : menuData.filter(item => item.category === category);

            displayMenuItems(menuCategory);
        });
    });

    // Scroll effect for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    function displayMenuItems(items) {
        let displayMenu = items.map(item => {
            return `<article class="menu-card" data-category="${item.category}">
                <div class="card-img-wrapper">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${item.title}</h3>
                        <span class="price">${item.price}</span>
                    </div>
                    <p>${item.desc}</p>
                </div>
            </article>`;
        }).join('');

        menuGrid.innerHTML = displayMenu;
    }
});
