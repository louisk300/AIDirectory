// AI Tools Data
const aiTools = [
  {
    name: "ChatGPT",
    description: "Advanced conversational AI for content creation, coding, and problem-solving.",
    category: "Chat",
    pricing: "Freemium",
    image: "images/chatgpt_logo.png",
    url: "https://chat.openai.com",
    pros: ["Versatile and powerful", "Free tier available", "Excellent for brainstorming"],
    cons: ["Can generate outdated info", "Usage limits on free tier"]
  },
  {
    name: "Midjourney",
    description: "AI image generator creating stunning artwork from text descriptions.",
    category: "Image Generation",
    pricing: "Paid",
    image: "images/midjourney_logo.png",
    url: "https://www.midjourney.com",
    pros: ["Exceptional image quality", "Active community", "Regular updates"],
    cons: ["Discord-based interface", "No free tier"]
  },
  {
    name: "Runway ML",
    description: "AI-powered video editing and generation platform for creators.",
    category: "Video",
    pricing: "Freemium",
    image: "images/runwayml_logo.png",
    url: "https://runwayml.com",
    pros: ["Advanced video AI features", "User-friendly interface", "Professional results"],
    cons: ["Expensive for heavy use", "Learning curve"]
  },
  {
    name: "Notion AI",
    description: "AI-powered workspace for notes, docs, and project management.",
    category: "Productivity",
    pricing: "Freemium",
    image: "https://via.placeholder.com/100x100/4c6ef5/ffffff?text=N",
    url: "https://www.notion.so",
    pros: ["Integrated with Notion", "Great for writing", "Multiple AI features"],
    cons: ["Requires Notion knowledge", "Limited free usage"]
  },
  {
    name: "Jasper AI",
    description: "AI writing assistant for marketing copy, blogs, and content creation.",
    category: "Text Generation",
    pricing: "Paid",
    image: "https://via.placeholder.com/100x100/4c6ef5/ffffff?text=J",
    url: "https://www.jasper.ai",
    pros: ["High-quality content", "Multiple templates", "Brand voice training"],
    cons: ["Expensive pricing", "Learning curve for beginners"]
  },
  {
    name: "Zapier AI",
    description: "Automate workflows between apps with AI-powered automation.",
    category: "Automation",
    pricing: "Freemium",
    image: "https://via.placeholder.com/100x100/4c6ef5/ffffff?text=Z",
    url: "https://zapier.com",
    pros: ["Connects thousands of apps", "No-code automation", "AI-powered suggestions"],
    cons: ["Complex for beginners", "Limited free tier"]
  },
  {
    name: "Copy.ai",
    description: "AI copywriting tool for marketing content and social media posts.",
    category: "Text Generation",
    pricing: "Freemium",
    image: "https://via.placeholder.com/100x100/4c6ef5/ffffff?text=C",
    url: "https://www.copy.ai",
    pros: ["Easy to use", "Multiple content types", "Good free tier"],
    cons: ["Quality can vary", "Limited customization"]
  },
  {
    name: "Loom AI",
    description: "AI-powered video messaging and screen recording platform.",
    category: "Video",
    pricing: "Freemium",
    image: "https://via.placeholder.com/100x100/4c6ef5/ffffff?text=L",
    url: "https://www.loom.com",
    pros: ["Easy screen recording", "AI transcription", "Good sharing features"],
    cons: ["Limited editing features", "Storage limits on free plan"]
  }
];

let filteredTools = [...aiTools];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderTools(aiTools);
    setupEventListeners();
});

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterTools);
    
    // Filter selects
    const categoryFilter = document.getElementById('categoryFilter');
    const pricingFilter = document.getElementById('pricingFilter');
    
    categoryFilter.addEventListener('change', filterTools);
    pricingFilter.addEventListener('change', filterTools);
    
    // Newsletter subscription
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const emailInput = document.querySelector('.email-input');
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value;
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to Discover AI Directory updates!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

function filterTools() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const pricingFilter = document.getElementById('pricingFilter').value;
    
    filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm) ||
                            tool.category.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !categoryFilter || tool.category === categoryFilter;
        const matchesPricing = !pricingFilter || tool.pricing === pricingFilter;
        
        return matchesSearch && matchesCategory && matchesPricing;
    });
    
    renderTools(filteredTools);
}

function performSearch() {
    filterTools();
}

function renderTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = '<div class="no-results">No tools found matching your criteria.</div>';
        return;
    }
    
    toolsGrid.innerHTML = tools.map(tool => `
        <div class="tool-card">
            <div class="tool-header">
                <img src="${tool.image}" alt="${tool.name} logo" class="tool-logo" onerror="this.src='https://via.placeholder.com/100x100/4c6ef5/ffffff?text=${tool.name.charAt(0)}'">
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="tool-category">${tool.category}</span>
                    <span class="tool-pricing ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                </div>
            </div>
            
            <p class="tool-description">${tool.description}</p>
            
            <div class="pros-cons">
                <div class="pros">
                    <h4>Pros:</h4>
                    <ul>
                        ${tool.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons">
                    <h4>Cons:</h4>
                    <ul>
                        ${tool.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <button class="visit-btn" onclick="window.open('${tool.url}', '_blank')">Visit</button>
        </div>
    `).join('');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

