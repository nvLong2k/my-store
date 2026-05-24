export type ColorOption = {
    label: string;
    hex: string;
};

export type BulkTier = {
    minQty: number;
    maxQty?: number;
    price: number;
};

export type SizeOption = {
    label: string;
    width?: string;
    height?: string;
    capacity?: string;
    diameter?: string;
    long?: string;
};

export type ProductMeta = {
    material?: string;
    weight?: string;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    avgProductionDays: number;
    images: string[];
    isNew?: boolean;
    origin?: string;
    colors?: ColorOption[];
    sizes?: SizeOption[];
    meta?: ProductMeta;
    description?: string[];
    printGuide?: string[];
    shipping?: {
        price: string;
        description: string;
    };
    exclusiveRegion?: string;
    bulkPricing?: BulkTier[];
};

export const products: Product[] = [
    {
        id: 1,
        name: "1st Gen 40oz Colorful Car Cup | 304 Stainless Steel（Made in USA）",
        price: 14.00,
        originalPrice: 17.50,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/87HU8L_90_1_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "Pink", hex: "#f4a7b9" },
            { label: "Teal", hex: "#4dd0b8" },
            { label: "Purple", hex: "#7c3db8" },
            { label: "Blue", hex: "#7dd3e8" },
        ],
        sizes: [
            { label: "One Size", width: "3.74inch/9.5cm", height: "9.76inch/24.8cm", capacity: "40oz" },
        ],
        meta: {
            material: "Stainless steel 304",
            weight: "540 g",
        },
        description: [
            "Detailed Address: 2503 Strozier Ave South El Monte, City: South El Monte, State: CA, Post Code: 91733",
            "Design Area: Full-surface Printing",
            "Recommended Image Pixels: 3064×2440PX",
            "Made of high-quality non-toxic stainless steel, odorless and harmless, safe for daily use.",
            "Adopts double-layer vacuum insulation technology to maintain the temperature of hot and cold drinks.",
            "Equipped with leak-proof lid to prevent liquid leakage and keep the car interior tidy.",
            "Detachable structure design for easy cleaning and better hygiene maintenance.",
            "Hand wash recommended.",
        ],
        shipping: {
            price: "$7.78 ~ $15.44",
            description: "Shipping to the US only"
        },
    },
    {
        id: 2,
        name: "40oz Car Insulated Cup（Black） | Stainless Steel (Made in USA)",
        price: 12.48,
        originalPrice: 15.60,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/BDJ6QF_5_1_6.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "Black", hex: "black" },
        ],
        sizes: [
            { label: "One Size", width: "3.74inch/9.5cm", height: "9.76inch/24.8cm", capacity: "40oz" },
        ],
        meta: {
            material: "Stainless steel 304",
            weight: "540 g",
        },
        description: [
            "Detailed Address：2503 Strozier Avenue, South El Monte，City：South El Monte，State：CA，Zip Code：91733",
            "Design Area: Full PrintRecommended Image Pixel: 3064*2440PX",
            "Made of high-quality non-toxic stainless steel, odorless and harmless, safe for daily use.",
            "Adopts double-layer vacuum insulation technology to effectively maintain the temperature of hot and cold drinks with excellent heat preservation performance.",
            "Equipped with a leak-proof lid to prevent liquid leakage and keep the inside of the car clean and tidy.",
            "Removable and washable design for easy cleaning and hygiene maintenance.",
            "Suitable for hot drinks, cold drinks, tea, juice and more to meet various daily drinking needs.",
            "Hand washing is recommended.",
            "Size measured when laid flat. A measurement error within 0.5-1cm is considered normal due to different measuring methods.",
            "The picture is for reference only. Slight differences between the actual product and the renderings caused by objective production factors, including but not limited to size, position and color difference, are regarded as normal phenomena."
        ],
        shipping: {
            price: "$7.78 ~ $15.44",
            description: "Shipping to the US only"
        },
    },
    {
        id: 3,
        name: "40oz Car Insulated Cup（White） | Stainless Steel (Made in USA)",
        price: 12.48,
        originalPrice: 15.60,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/8MZ793_6_1_7.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "One Size", width: "3.74inch/9.5cm", height: "9.76inch/24.8cm", capacity: "40oz" },
        ],
        meta: {
            material: "Stainless steel 304",
            weight: "540 g",
        },
        description: [
            "Detailed Address：2503 Strozier Avenue, South El Monte，City：South El Monte，State：CA，Zip Code：91733",
            "Design Area: Full Surround Print",
            "Recommended Image Pixel: 3064*2440PX",
            "Made of premium non-toxic stainless steel, odorless and safe for use.",
            "Features double-layer vacuum insulation technology, which effectively maintains the temperature of hot and cold beverages with outstanding thermal insulation performance.",
            "Comes with a leak-proof lid to prevent liquid spillage and keep the interior of your car clean.",
            "Detachable and washable design for easy cleaning and better hygiene.",
            "Ideal for hot drinks, cold beverages, tea, juice and more to meet diverse daily drinking needs.",
            "Hand washing is recommended.",
            "Dimensions are measured when laid flat. A size error within 0.5-1cm is normal due to different measurement methods.",
            "Product images are for reference only. Slight differences between the actual item and the picture in size, position, color shade and other aspects caused by production factors are considered normal."
        ],
        shipping: {
            price: "$7.78 ~ $15.44",
            description: "Shipping to the US only"
        },
    },
    {
        id: 4,
        name: "Outdoor Travel Carry Tumbler (600ml/20oz) | Stainless Steel 304",
        price: 8.72,
        originalPrice: 10.90,
        discount: 20,
        avgProductionDays: 3.5,
        images: ["/images/9HS9MB_6_1.jpg"],
        isNew: true,
        origin: "CN",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "One Size", diameter: "3.45inch/8.8cm", height: "6.9inch/17.5cm", capacity: "20oz/600ml" },
        ],
        meta: {
            material: "Stainless steel 304",
            weight: "410 g",
        },
        shipping: {
            price: "$12.62",
            description: "Global shipping (US rates shown by default)"
        },
        bulkPricing: [
            { minQty: 1, maxQty: 9, price: 14.00 },
            { minQty: 10, maxQty: 49, price: 13.30 },
            { minQty: 50, price: 12.60 },
        ],
        description: [
            "Suggested image pixel: 3319*2079PX",
            "· Material description: Stainless steel 304, capacity is 20oz/600ml.",
            "· Product performance: Made of food-grade stainless steel, it is safe and non-toxic, high temperature resistant, not easy to rust, and ensures the hygiene and quality of the beverage. It can keep the temperature of the beverage for a long time, whether it is to keep the warmth of hot coffee for you in the cold winter, or to keep cold drinks cool in the hot summer.",
            "· The large-caliber cup mouth is convenient for cleaning and adding drinks, and it is also convenient for drinking. There is a straw hole design on the cup lid to meet different drinking needs. The ergonomic grip is comfortable and non-slip, and it can be easily held even if the hands are sweating.",
            "· Applicable scenarios: Not only suitable for car travel, but also can be used in outdoor, office, sports and other scenes, with strong practicality. It can be given as a gift to relatives and friends, especially for car owners, and is a thoughtful and practical gift choice.",
            "· Washing instructions: It is recommended to clean regularly, and the cup lid can be washed in a dishwasher.",
            "· Special note: Due to different measurement methods, the size data has an error of 4-8mm, which is normal. The measurement method is based on the measurement without the lid!",
            "· Note: The image display effect is for reference only. There are certain objective factors in the production process that lead to slight differences between the actual product and the effect picture, including but not limited to size, position, color difference, etc. The above are normal phenomena!"
        ]
    },
    {
        id: 5,
        name: "Vertical Single Layer Flag - Seamless Edge (120x180cm/4x6ft) | Polyester （Made in USA ）",
        price: 7.68,
        originalPrice: 9.60,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/XIEFC8_6_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "4x6FT- Single layer", width: "122cm/4FT", long: "183cm/6FT", },
        ],
        meta: {
            material: "Terylene",
            weight: "265 g",
        },
        description: [
            "Detailed Address: 550 N Pioneer Ave, Suite 400，City: Woodland，State: CA，Post Code: 95776",
            "Design Area: Single-sided Printing",
            "Recommended Image Pixels: 7400*5000PX",
            "Made of premium non-toxic stainless steel, odorless and safe for use.",
            "Stitched hem prevents thread loosening with neat and fine stitching",
            "Neat cutting without rough edges, not easy to deform",
            "Equipped with rust-proof metal grommets for easy installation and removal",
            "Hand wash recommended; avoid long-time soaking and bleaching",
            "Size data measured when fully flattened. A 1-3cm measurement error is normal due to different measuring methods",
            "All pictures are for reference only. Slight differences between actual products and renderings including size, position and color deviation caused by objective production factors are within the normal range",        ],
        shipping: {
            price: "$5.74~$8.78",
            description: "Shipping to the US only"
        },
    },
    {
        id: 6,
        name: "Horizontal Single Layer Flag - Seamless Edge (120x180cm/4x6ft) | Polyester（ Made in USA）",
        price: 7.68,
        originalPrice: 9.60,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/IGUJLU_6_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "4x6FT- Single layer", width: "122cm/4FT", long: "183cm/6FT", },
        ],
        meta: {
            material: "Terylene",
            weight: "265 g",
        },
        description: [
            "Detailed Address: 550 N Pioneer Ave, Suite 400，City: Woodland，State: CA，Post Code: 95776",
            "Design Area: Single-sided Printing",
            "Recommended Image Pixels: 7400*5000PX",
            "Made of premium non-toxic stainless steel, odorless and safe for use.",
            "Stitched hem prevents thread loosening with neat and fine stitching",
            "Neat cutting without rough edges, not easy to deform",
            "Equipped with rust-proof metal grommets for easy installation and removal",
            "Hand wash recommended; avoid long-time soaking and bleaching",
            "Size data measured when fully flattened. A 1-3cm measurement error is normal due to different measuring methods",
            "All pictures are for reference only. Slight differences between actual products and renderings including size, position and color deviation caused by objective production factors are within the normal range",        ],
        shipping: {
            price: "$5.74~$8.78",
            description: "Shipping to the US only"
        },
    },
    {
        id: 7,
        name: "Half-Round Flag | Polyester (Made in USA)",
        price: 5.20,
        originalPrice: 6.51,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/FNFTRM_6_1_6.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "18x36 Inch", width: "18inch/45.7cm", long: "36inch/91.4cm", },
            { label: "36x72 Inch", width: "36inch/91.4cm", long: "72inch/182.9cm", },
        ],
        meta: {
            material: "Terylene",
            weight: "99 g",
        },
        description: [
            "Detailed Address：550 N Pioneer Ave, Ste 400，City：Woodland，State：CA，Postal Code：95776",
            "Recommended Image Resolution： 7087 x 3537 px or higher",
            "Design Description： Full-coverage, high-definition printing",
            "Material Description： Crafted from high-quality polyester fabric, featuring vibrant and rich colors. The material is lightweight yet crisp, resistant to wrinkling and deformation, offering a perfect blend of durability and aesthetic appeal.",
            "Product Features：",
            "**Aesthetically Pleasing Display:** The semi-circular design is simple yet grand, while the high-definition printing process faithfully reproduces intricate pattern details. The visual effect is crisp and striking, creating a more atmospheric ambiance when displayed.",
            "**Sturdy and Durable:** The polyester material is robust and wear-resistant, boasting high tear strength. It withstands prolonged outdoor or indoor use without easily sustaining damage and is suitable for repeated use.",
            "**Secure Mounting Points:** Features 3 pre-set mounting holes with reinforced edging. This ensures even stress distribution when hung, preventing tearing, and allows for quick, stable installation without wobbling.",
            "Applicable Scenarios： Ideal for a wide range of settings, including holiday decorations, event setups, storefront signage, party backdrops, trade show promotions, and home decor. Easy to hang and beautifully shaped, it quickly enhances the atmosphere and visual impact of any space.",
            "Washing Instructions： Gentle hand washing is recommended; allow to air dry naturally. Do not iron at high temperatures, do not bleach, and avoid contact with sharp objects that may cause scratches.",
            "Special Note： Due to variations in measurement methods, a size discrepancy of 1–3 cm is considered within the normal range for this product.",
            "Friendly Reminder： The product images shown are for illustrative purposes only. Due to objective factors such as production batches, equipment parameters, and lighting conditions during photography, the actual product may exhibit slight differences compared to the images—including, but not limited to, variations in size, positioning, and color tone. Such variations are considered normal phenomena."
        ],
        shipping: {
            price: "$5.29~$7.81",
            description: "Shipping to the US only"
        },
    },
];