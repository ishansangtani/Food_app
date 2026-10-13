const restaurants = [
    {
        info: {
            id: "123456",
            name: "Pizza Paradise",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
            locality: "MG Road",
            areaName: "Central District",
            costForTwo: "₹400 for two",
            cuisines: ["Pizza", "Italian", "Fast Food"],
            avgRating: 4.3,
            sla: { deliveryTime: 30 }
        },
        menu: [
            { name: "Margherita Pizza", price: 200 },
            { name: "Pepperoni Pizza", price: 350 },
            { name: "Garlic Bread", price: 80 },
        ]
    },
    {
        info: {
            id: "234567",
            name: "Burger Hub",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
            locality: "Park Street",
            areaName: "Downtown",
            costForTwo: "₹300 for two",
            cuisines: ["Burgers", "American", "Fast Food"],
            avgRating: 4.5,
            sla: { deliveryTime: 25 }
        },
        menu: [
            { name: "Classic Burger", price: 150 },
            { name: "Cheese Burger", price: 200 },
            { name: "Fries", price: 80 },
        ]
    },
    {
        info: {
            id: "345678",
            name: "Green Bites",
            cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
            locality: "Residency Road",
            areaName: "South Zone",
            costForTwo: "₹250 for two",
            cuisines: ["Healthy Food", "Salads", "Vegan"],
            avgRating: 4.7,
            sla: { deliveryTime: 20 }
        },
        menu: [
            { name: "Caesar Salad", price: 180 },
            { name: "Grilled Veggie Bowl", price: 220 },
            { name: "Smoothie", price: 120 },
        ]
    },
    {
        info: {
            id: "456789",
            name: "Spice Kingdom",
            cloudinaryImageId: "rng/md/carousel/production/indian101",
            locality: "Brigade Road",
            areaName: "City Center",
            costForTwo: "₹500 for two",
            cuisines: ["Indian", "North Indian", "Biryani"],
            avgRating: 4.2,
            sla: { deliveryTime: 35 }
        },
        menu: [
            { name: "Butter Chicken", price: 300 },
            { name: "Chicken Biryani", price: 250 },
            { name: "Garlic Naan", price: 60 },
        ]
    },
    {
        info: {
            id: "567890",
            name: "Chinese Dragon",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
            locality: "Commercial Street",
            areaName: "East District",
            costForTwo: "₹350 for two",
            cuisines: ["Chinese", "Asian", "Thai"],
            avgRating: 4.4,
            sla: { deliveryTime: 28 }
        },
        menu: [
            { name: "Fried Rice", price: 180 },
            { name: "Manchurian", price: 220 },
            { name: "Spring Rolls", price: 100 },
        ]
    },
    {
        info: {
            id: "678901",
            name: "Dessert Delight",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
            locality: "Lavelle Road",
            areaName: "West End",
            costForTwo: "₹200 for two",
            cuisines: ["Desserts", "Ice Cream", "Bakery"],
            avgRating: 4.6,
            sla: { deliveryTime: 22 }
        },
        menu: [
            { name: "Chocolate Cake", price: 150 },
            { name: "Ice Cream", price: 80 },
            { name: "Cheesecake", price: 200 },
        ]
    },
    {
        info: {
            id: "789012",
            name: "Sushi Station",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
            locality: "Indiranagar",
            areaName: "Uptown",
            costForTwo: "₹800 for two",
            cuisines: ["Japanese", "Sushi", "Asian"],
            avgRating: 4.8,
            sla: { deliveryTime: 40 }
        },
        menu: [
            { name: "Salmon Sushi", price: 400 },
            { name: "Ramen", price: 350 },
            { name: "Miso Soup", price: 150 },
        ]
    },
    {
        info: {
            id: "890123",
            name: "South Spice",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
            locality: "Jayanagar",
            areaName: "South Bangalore",
            costForTwo: "₹300 for two",
            cuisines: ["South Indian", "Dosa", "Idli"],
            avgRating: 4.5,
            sla: { deliveryTime: 25 }
        },
        menu: [
            { name: "Masala Dosa", price: 120 },
            { name: "Idli Vada", price: 80 },
            { name: "Filter Coffee", price: 50 },
        ]
    },
    {
        info: {
            id: "901234",
            name: "Pasta Palace",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
            locality: "Koramangala",
            areaName: "Tech Hub",
            costForTwo: "₹450 for two",
            cuisines: ["Italian", "Pasta", "Continental"],
            avgRating: 4.1,
            sla: { deliveryTime: 32 }
        },
        menu: [
            { name: "Spaghetti Carbonara", price: 300 },
            { name: "Fettuccine Alfredo", price: 350 },
            { name: "Garlic Bread", price: 80 },
        ]
    }
];

export default restaurants;