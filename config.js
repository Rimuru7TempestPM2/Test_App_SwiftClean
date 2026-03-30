const BusinessConfig = {
    // 1. BRANDING & CONTACT
    businessName: "SwiftClean Laundry",
    tagline: "Free pick up and delivery in Thika and all areas around.",
    businessLocation: "Near Thika Main Hospital", // For your info
    primaryColor: "#0ea5e9", // Sky Blue
    whatsappNumber: "254758811941",
    
    // 2. PAYMENT DETAILS (Used for the WhatsApp Message)
    paymentDetails: {
        type: "M-Pesa Buy Goods",
        tillNumber: "3305607",
        officialName: "BWIRI LAUNDRY SOLUTIONS"
    },

    // 3. THE ENGINE URL
    webAppUrl: "https://script.google.com/macros/s/AKfycbxszMN_s9Z-3wfqhsrwoN5gvjwxMA5YsWuZln7y2QtYlq_odz5pRkDlcZYf7XRs8aAmJg/exec", 
    
    // 4. ALL SERVICE CATEGORIES
    categories: [
        {
            name: "🧺 Laundry Services",
            items: [
                { id: "weight-std", name: "Standard Laundry", price: 70, type: "qty", note: "Below 5kg @70/- | Above 5kg @50/-" },
                { id: "weight-exp", name: "Express Laundry", price: 90, type: "qty", unit: "kg", note: "Ready same day" },
                { id: "single-cloth", name: "Single Cloth Wash", price: 50, type: "qty" }
            ]
        },
        {
            name: "🛌 Duvets & Bedding",
            items: [
                { id: "blanket", name: "Normal Blanket", price: 200, type: "qty" },
                { id: "s-duvet", name: "Small Duvet (4x6)", price: 300, type: "qty", unit: "unit", note: "+ Free Bedsheet & Pillowcase" },
                { id: "m-duvet", name: "Medium Duvet (5x6)", price: 350, type: "qty", unit: "unit", note: "+ Free Bedsheet & Pillowcase" },
                { id: "l-duvet", name: "Large Duvet (6x6)", price: 450, type: "qty", unit: "unit", note: "+ Free Bedsheet & Pillowcase" },
                { id: "l-basket", name: "Laundry Basket (Large)", price: 460, type: "qty" },
                { id: "s-basket", name: "Laundry Basket (Small)", price: 360, type: "qty" }
            ]
        },
        {
            name: "🧼 Professional Cleaning",
            items: [
                { id: "shoes", name: "Shoes Cleaning", price: 90, type: "qty", note: "3+ pairs @85/-" },
                { id: "sofa", name: "Sofa Cleaning", price: 450, type: "qty", note: "Price per seater" },
                { id: "carpet", name: "Carpet/Matt Cleaning", price: 500, type: "qty", note: "+ Free Doormat" },
                { id: "mattress", name: "Mattress Cleaning", price: 0, type: "qty", note: "Estimated 1000/- - 1500/-" },
                { id: "bed-deep", name: "Bed Deep Cleaning", price: 800, type: "qty", note: "Vacuum & Sanitization" }
            ]
        },
        {
            name: "🏠 House Cleaning & Others",
            items: [
                { id: "bedsitter", name: "Bedsitter Cleaning", price: 2000, type: "flat" },
                { id: "one-bed", name: "1 Bedroom Cleaning", price: 3000, type: "flat" },
                { id: "two-bed", name: "2 Bedroom Cleaning", price: 4000, type: "flat" },
                { id: "fumigation", name: "Fumigation", price: 0, type: "flat", note: "COMING SOON" }
            ]
        }
    ]
};

// Protect the config from accidental browser changes
window.config = Object.freeze(BusinessConfig);
