const BusinessConfig = {
    // 1. BRANDING & CONTACT
    businessName: "SwiftClean Laundry",
    tagline: "Free pick up and delivery in Thika and all areas around.",
    primaryColor: "#0ea5e9", // Sky Blue
    whatsappNumber: "254758811941",
    
    // 2. PAYMENT DETAILS (Used for the WhatsApp Message)
    paymentDetails: {
        type: "M-Pesa Buy Goods",
        tillNumber: "3305607",
        officialName: "BWIRI LAUNDRY SOLUTIONS"
    },

    // 3. THE ENGINE URL
    webAppUrl: "https://script.google.com/macros/s/AKfycbwM2MkRXmIgbSYv0KclszcC6o13quK4TlUMqfB5FTBLdMsTUuElRPiGCyaA5ZXTNe5Z/exec", 
    
    // 4. ALL SERVICE CATEGORIES
    categories: [
        {
            name: "🧺 Laundry (Wash, Dry, Fold)",
            items: [
                { id: "weight-std", name: "Standard Laundry", price: 70, type: "qty", unit: "kg", note: "Below 5kg @70/kg | Above 5kg @50/kg" },
                { id: "weight-exp", name: "Express/Instant", price: 90, type: "qty", unit: "kg", note: "Ready in hours" },
                { id: "single-cloth", name: "Single Item Wash", price: 50, type: "qty", unit: "clothe" }
            ]
        },
        {
            name: "🛌 Baskets & Bedding",
            items: [
                { id: "l-basket", name: "Large Laundry Basket", price: 460, type: "qty", unit: "basket" },
                { id: "s-basket", name: "Small Laundry Basket", price: 360, type: "qty", unit: "basket" },
                { id: "s-duvet", name: "Small Duvet (4x6)", price: 300, type: "qty", unit: "unit", note: "+ Free Bedsheet & pillowcase wash" },
                { id: "m-duvet", name: "Medium Duvet (5x6)", price: 350, type: "qty", unit: "unit", note: "+ Free Bedsheet & pillowcase wash" },
                { id: "l-duvet", name: "Large Duvet (6x6)", price: 450, type: "qty", unit: "unit", note: "+ Free Bedsheet & pillowcase wash" },
                { id: "blanket", name: "Normal Blanket", price: 200, type: "qty", unit: "unit" }
            ]
        },
        {
            name: "🧼 Deep Cleaning Services",
            items: [
                { id: "bed-deep", name: "Bed Cleaning", price: 800, type: "qty", unit: "unit", note: "Deep vacuum & steam sanitization" },
                { id: "sofa", name: "Sofa Cleaning", price: 450, type: "qty", unit: "seater", note: "Price per seater" },
                { id: "mattress", name: "Mattress Cleaning", price: 1000, type: "qty", unit: "unit", note: "Estimated: 1k - 1.5k" },
                { id: "carpet", name: "Carpet Cleaning", price: 500, type: "qty", unit: "unit", note: "+ Free Doormat wash" },
                { id: "shoes", name: "Shoes Cleaning", price: 90, type: "qty", unit: "pair", note: "3+ pairs @85/-" }
            ]
        },
        {
            name: "🏠 Home Cleaning & Others",
            items: [
                { id: "single-room", name: "Single Room", price: 1200, type: "flat" },
                { id: "bedsitter", name: "Bedsitter", price: 2000, type: "flat" },
                { id: "one-bed", name: "1 Bedroom", price: 3000, type: "flat" },
                { id: "two-bed", name: "2 Bedroom", price: 4000, type: "flat" },
                { id: "fumigation", name: "Fumigation", price: 0, type: "flat", note: "SERVICE COMING SOON" }
            ]
        }
    ]
};

// Protect the config from accidental browser changes
window.config = Object.freeze(BusinessConfig);
