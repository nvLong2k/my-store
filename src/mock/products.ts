export type ColorOption = {
    label: string;
    hex: string;
};

export type BulkTier = {
    minQty: number;
    maxQty?: number;
    price: number;
    realPrice?: number;
};

export type SizeOption = {
    label: string;
    width?: string;
    height?: string;
    capacity?: string;
    diameter?: string;
    long?: string;
    capGirth?: string;
    brimOfHat?: string;
    hatHeight?: string;
    waist?: string;
    [key: string]: string | undefined;
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
            price: "$5.78 ~ $13.44",
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
            price: "$5.78 ~ $13.44",
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
            price: "$5.78 ~ $13.44",
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
            price: "$10.62",
            description: "Global shipping (US rates shown by default)"
        },
        bulkPricing: [
            { minQty: 1, maxQty: 9, price: 8.72, realPrice: 10.90 },
            { minQty: 10, maxQty: 49, price: 8.27, realPrice: 10.35 },
            { minQty: 50, price: 7.84, realPrice: 9.81 },
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
            "All pictures are for reference only. Slight differences between actual products and renderings including size, position and color deviation caused by objective production factors are within the normal range",],
        shipping: {
            price: "$3.74~$6.78",
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
            "All pictures are for reference only. Slight differences between actual products and renderings including size, position and color deviation caused by objective production factors are within the normal range",],
        shipping: {
            price: "$3.74~$6.78",
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
            price: "$3.29~$5.81",
            description: "Shipping to the US only"
        },
    },
    {
        id: 8,
        name: "Mesh Sponge Cap | Polyester (Made in USA)",
        price: 3.76,
        originalPrice: 4.70,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/YNR4AF_315_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
            { label: "Black", hex: "black" },
            { label: "ffa200", hex: "#ffa200" },
            { label: "007aff", hex: "#007aff" },
            { label: "2eb40f", hex: "#2eb40f" },
        ],
        sizes: [
            { label: "One Size", capGirth: "22.8inch/58cm", brimOfHat: "3.34inch/8.5cm", hatHeight: "3.93inch/10cm" },
        ],
        meta: {
            material: "Terylene",
            weight: "126 g",
        },
        description: [
            "Detailed Address: 17950 Ajax Cir, City: City of Industry, State: CA, Post Code: 91748",
            "Recommended Pixels",
            "Design Description: Full full-width printing on front and brim",
            "Material Description: 100% Polyester",
            "Product Performance: Adopts premium twill fabric with proper softness. The hat is well-shaped and stylish for comfy wearing. Reinforced hat top matched with oxford inner lining. Mesh fabric on the rear ensures excellent breathability, light weight and dry touch. Built-in sweatband realizes sweat absorption and moisture wicking, fitting head circumference closely. Adjustable buckle design on the back allows free adjustment of hat circumference with strong practicality. Ideal for all seasons, equipped with air holes to prevent stuffiness. Lightweight, deformation-resistant and easy to carry. Trendy hat style keeps permanent outline and presents nice wearing look.",
            "Application Scenarios: Daily wear, outing, sports, outdoor activities, travel and other occasions",
            "Applicable Crowd: Unisex for men and women",
            "Washing Instructions: Hand wash is recommended and reduce washing times. Avoid vigorous kneading and machine washing, do not bleach.",
            "Special Note: Size deviation of 1-2cm due to different measuring methods is regarded as normal situation.",
        ],
        shipping: {
            price: "$3.33~$6.88",
            description: "Shipping to the US only"
        },
    },
    {
        id: 9,
        name: "Washed Baseball Cap (DTF) | Cotton (Made in USA）",
        price: 3.74,
        originalPrice: 4.34,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/J7MZ2K_5_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "Gray", hex: "gray" },
            { label: "Black", hex: "black" },
        ],
        sizes: [
            { label: "One Size", capGirth: "22-23in/55-59cm", brimOfHat: "2.8in/7cm", hatHeight: "5.1in/13cm" },
        ],
        meta: {
            material: "Cotton",
            weight: "125 g",
        },
        description: [
            "Place of shipment: 216 S. 5th Ave,City of industry,CA,91746",
            "Recommended Image Pixel ：1000*600 px",
            "Design Description ：Single-sided printing",
            "Material Description ：Cotton (denim)",
            "Product Performance ： Wear this hat during all outdoor activities to protect your skin from harmful UV rays and keep your hair away from your face and eyes. The cowboy hat is made of 100% cotton, lightweight/durable. Adjustable metal button sun hat, suitable for most head shapes.",
            "Applicable Scenarios ： Suitable for more sports scenes, such as it is also very suitable for fitness, camping, beach, mountaineering, golf, baseball, outdoor hats, suitable for any outdoor sports and activities.",
            "Washing Instructions ： It is recommended to wash by hand, wash less, do not press or machine wash.",
            "Special Instructions ： Due to different measurement methods, the error of this size data within 1-2cm is normal.",
            "Warm Reminder： The picture display effect is for reference only. Affected by objective factors such as production batches, equipment parameters, shooting light, etc., there may be slight differences between the actual object and the picture, including but not limited to size, position, color difference, etc. The above is a normal phenomenon.",
        ],
        shipping: {
            price: "$3.33~$6.88",
            description: "Shipping to the US only"
        },
    },
    {
        id: 10,
        name: "100% Pure Cotton Denim Heat Transfer Short Sleeve T-Shirt (230g) | Cotton",
        price: 7.36,
        originalPrice: 9.20,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/SQ7W74_5_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "Gray", hex: "gray" },
            { label: "Black", hex: "black" },
        ],
        sizes: [
            { label: "S", shoulderWidth: "19.7inch/50cm", length: "26.8inch/68cm", sleeveLength: "7.87inch/20.0cm", bust: "20.8inch/53cm", recommendedHeight: "150-160cm", recommendedWeight: "40~50KG" },
            { label: "M", shoulderWidth: "20.8inch/53cm", length: "27.9inch/71cm", sleeveLength: "8.46inch/21.5cm", bust: "22.0inch/56cm", recommendedHeight: "155-165cm", recommendedWeight: "45~55KG" },
            { label: "L", shoulderWidth: "22.0inch/56cm", length: "29.1inch/74cm", sleeveLength: "9.05inch/23cm", bust: "23.2inch/59cm", recommendedHeight: "160-170cm", recommendedWeight: "60~70KG" },
            { label: "XL", shoulderWidth: "23.2inch/59cm", length: "30.3inch/77cm", sleeveLength: "9.64inch/24.5cm", bust: "24.4inch/62cm", recommendedHeight: "165-175cm", recommendedWeight: "75~85KG" },
            { label: "XXL", shoulderWidth: "24.4inch/62cm", length: "31.5inch/80cm", sleeveLength: "10.2inch/26cm", bust: "25.6inch/65cm", recommendedHeight: "170-175cm", recommendedWeight: "90~100KG" },
            { label: "3XL", shoulderWidth: "25.6inch/65cm", length: "32.7inch/83cm", sleeveLength: "10.8inch/27.5cm", bust: "26.8inch/68cm", recommendedHeight: "175-185cm", recommendedWeight: "100~110KG" },
            { label: "4XL", shoulderWidth: "26.8inch/68cm", length: "33.8inch/86cm", sleeveLength: "11.4inch/29cm", bust: "27.9inch/71cm", recommendedHeight: "180-190cm", recommendedWeight: "110~120KG" },
            { label: "5XL", shoulderWidth: "27.9inch/71cm", length: "35.0inch/89cm", sleeveLength: "12.0inch/30.5cm", bust: "29.1inch/74cm", recommendedHeight: "185-195cm", recommendedWeight: "120~130KG" },
        ],
        meta: {
            material: "Cotton",
            weight: "210 g",
        },
        description: [
            "Place of shipment: 216 S. 5th Ave,City of industry,CA,91746",
            "Recommended Image Pixel ：1000*600 px",
            "Design Description ：Single-sided printing",
            "Material Description ：Cotton (denim)",
            "Product Performance ： Wear this hat during all outdoor activities to protect your skin from harmful UV rays and keep your hair away from your face and eyes. The cowboy hat is made of 100% cotton, lightweight/durable. Adjustable metal button sun hat, suitable for most head shapes.",
            "Applicable Scenarios ： Suitable for more sports scenes, such as it is also very suitable for fitness, camping, beach, mountaineering, golf, baseball, outdoor hats, suitable for any outdoor sports and activities.",
            "Washing Instructions ： It is recommended to wash by hand, wash less, do not press or machine wash.",
            "Special Instructions ： Due to different measurement methods, the error of this size data within 1-2cm is normal.",
            "Warm Reminder： The picture display effect is for reference only. Affected by objective factors such as production batches, equipment parameters, shooting light, etc., there may be slight differences between the actual object and the picture, including but not limited to size, position, color difference, etc. The above is a normal phenomenon.",
        ],
        shipping: {
            price: "$6.32",
            description: "Global shipping (US rates shown by default)"
        },
        bulkPricing: [
            { minQty: 1, maxQty: 9, price: 7.36, realPrice: 9.20 },
            { minQty: 10, maxQty: 49, price: 7.00, realPrice: 9.75 },
            { minQty: 50, price: 6.63, realPrice: 8.29 },
        ],
    },
    {
        id: 11,
        name: "180g Single-sided Printed Men's T-shirt (Heat Transfer Print) | Cotton (Made in USA)",
        price: 4.48,
        originalPrice: 5.60,
        discount: 20,
        avgProductionDays: 2.5,
        images: ["/images/6I3AEU_315_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "003bff", hex: "#003bff" },
            { label: "Black", hex: "black" },
            { label: "White", hex: "white" },
            { label: "Red", hex: "red" },
            { label: "1d364a", hex: "#1d364a" },
            { label: "dcdcdd", hex: "#dcdcdd" },
        ],
        sizes: [
            { label: "S", shoulderWidth: "17.3inch/44cm", length: "27.4inch/69.5cm", sleeveLength: "6.7inch/17cm", bust: "18.1inch/46cm" },
            { label: "M", shoulderWidth: "18.9inch/48cm", length: "28.3inch/72cm", sleeveLength: "7.3inch/18.5cm", bust: "20.1inch/51cm" },
            { label: "L", shoulderWidth: "20.5inch/52cm", length: "29.3inch/74.5cm", sleeveLength: "7.9inch/20cm", bust: "22inch/56cm" },
            { label: "XL", shoulderWidth: "22inch/56cm", length: "30.3inch/77cm", sleeveLength: "8.5inch/21.5cm", bust: "24inch/61cm" },
            { label: "XXL", shoulderWidth: "23.6inch/60cm", length: "31.5inch/80cm", sleeveLength: "9.1inch/23cm", bust: "26inch/66cm" },
            { label: "3XL", shoulderWidth: "25.2inch/64cm", length: "32.7inch/83cm", sleeveLength: "9.6inch/24.5cm", bust: "28inch/71cm" },
            { label: "4XL", shoulderWidth: "25.5inch/65cm", length: "33inch/84cm", sleeveLength: "10.4inch/26.5cm", bust: "28.7inch/73cm" },
            { label: "5XL", shoulderWidth: "25.9inch/66cm", length: "33.4inch/85cm", sleeveLength: "11.2inch/28.5cm", bust: "29.5inch/75cm" },
        ],
        meta: {
            material: "Cotton",
            weight: "180 g",
        },
        description: [
            "Detailed Address: 17950 Ajax Cir，City: City of Industry，State: CA，Postal Code: 91748",
            "Recommended Image Pixels: 1500×2000px",
            "Material Description: Made of cotton material, the fabric is soft and comfortable with moderate elasticity and excellent air permeability.",
            "Product Performance",
            "Comfortable to Wear: This fitted T-shirt can well show your figure and bring great comfort, suitable for various occasions.",
            "Fashionable and Versatile: It fits all body types with multiple size options, and matches perfectly with jeans, casual pants and beach shorts.",
            "Durable in Use: Easy to care and clean, it will not deform after repeated washing and features great durability.",
            "Applicable Scenarios: Perfect for team activities, proposal scenes, anniversary photos, family gatherings, business events, customized Christmas styles, gifts for lovers, as well as DIY design and company logo printing. Suitable for daily life, home leisure, office, shopping and other occasions.",
            "Washing Instructions: Hand wash or machine wash is recommended. Avoid long-time soaking and bleaching. The washing water temperature shall not exceed 45℃.",
            "Special Instructions: There may be 1-3cm error in size data due to different measurement methods, which is a normal phenomenon.",
            "Warm Tips: The pictures are only for display reference. Slight differences including size, position and color difference between the actual product and pictures caused by production batches, equipment parameters, shooting light and other objective factors are all normal situations."
        ],
        shipping: {
            price: "$3.33~$6.88",
            description: "Shipping to the US only"
        },
    },
    {
        id: 12,
        name: "Canadian Men's Jersey | Polyester",
        price: 3.68,
        originalPrice: 4.60,
        discount: 20,
        avgProductionDays: 3,
        images: ["/images/DO53SV_6_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "XXS", shoulderWidth: "15.0in/38cm", length: "26.5in/67.5cm", sleeveLength: "7.5in/19cm", bust: "18.5in/47cm" },
            { label: "XS", shoulderWidth: "16.5in/42cm", length: "27.5in/70.0cm", sleeveLength: "7.9in/20cm", bust: "19.7in/50cm" },
            { label: "S", shoulderWidth: "17.3in/44cm", length: "28.5in/72.5cm", sleeveLength: "8.3in/21cm", bust: "20.9in/53cm" },
            { label: "M", shoulderWidth: "18.1in/46cm", length: "29.5in/75.0cm", sleeveLength: "8.7in/22cm", bust: "22.0in/56cm" },
            { label: "L", shoulderWidth: "19.3in/49cm", length: "30.5in/77.5cm", sleeveLength: "9.1in/23cm", bust: "23.2in/59cm" },
            { label: "XL", shoulderWidth: "20.5in/52cm", length: "31.5in/80.0cm", sleeveLength: "9.4in/24cm", bust: "24.4in/62cm" },
            { label: "XXL", shoulderWidth: "21.7in/55cm", length: "32.5in/82.5cm", sleeveLength: "9.8in/25cm", bust: "25.6in/65cm" },
            { label: "3XL", shoulderWidth: "22.8in/58cm", length: "33.5in/85.0cm", sleeveLength: "10.2in/26cm", bust: "26.8in/68cm" },
            { label: "4XL", shoulderWidth: "24.0in/61cm", length: "34.4in/87.5cm", sleeveLength: "10.6in/27cm", bust: "27.9in/71cm" },
            { label: "5XL", shoulderWidth: "25.2in/64cm", length: "35.4in/90.0cm", sleeveLength: "11.0in/28cm", bust: "29.1in/74cm" },
            { label: "6XL", shoulderWidth: "26.3in/67cm", length: "36.5in/92.5cm", sleeveLength: "11.4in/29cm", bust: "30.3in/77cm" },
            { label: "7XL", shoulderWidth: "27.5in/70cm", length: "37.4in/95.0cm", sleeveLength: "11.8in/30cm", bust: "31.5in/80cm" },
        ],
        meta: {
            material: "Cotton",
            weight: "232 g",
        },
        description: [
            "Recommended image resolution: 3000×3000px or higher",
            "Design Description: Features a men's V-neck design with smooth, natural lines that conform to the neck's curve. The overall silhouette is simple and clean, balancing athletic agility with casual everyday wear, showcasing a sharp masculine style.",
            "Material Description: Made from high-quality fabric, soft and skin-friendly, with excellent elasticity, breathability, and moisture-wicking properties. It quickly wicks away sweat, keeping the body dry and comfortable in all situations.",
            "Product Performance:",
            "Comfortable Fit: The jersey's design conforms to the male physique, avoiding both excessive tightness that restricts movement and excessive looseness that appears bulky. It offers comfortable wear for extended periods.",
            "Fashionable and Versatile: The V-neck design accommodates various body types. Available in multiple colors and sizes, it can be easily paired with athletic pants, casual pants, jeans, etc., creating diverse styles.",
            "Durability: High-quality fabric combined with excellent workmanship makes the jersey durable and abrasion-resistant. It is resistant to fading and deformation even after multiple washes, maintaining its shape and texture for a long time.",
            "Sports Suitability: The fabric has good stretch, meeting the needs of various ranges of motion and providing comfortable support, making it an ideal choice for sports.",
            "Suitable Scenarios: Suitable for everyday sports (such as basketball, running, fitness, etc.), team activities, sporting events, as well as home leisure, walks, and gatherings with friends. It is also suitable as team uniforms or corporate event T-shirts, printed with custom designs or logos to showcase team spirit and personality.",
            "Washing Instructions: Hand washing or machine washing (in a laundry bag) is recommended. Avoid vigorous rubbing of the collar and cuffs. Do not soak for extended periods. Do not bleach. Washing liquid temperature should not exceed 40℃ to avoid damaging the fabric and affecting the fit.",
            "Special Note: Due to different measurement methods, a 1–2cm error in jersey sizing is normal. Please choose the appropriate size based on your own measurements.",
            "Friendly Reminder: The image shown is for reference only. Due to objective factors such as production batch, fabric batch, and shooting light, there may be slight differences between the actual product and the image, including but not limited to color depth and fabric texture. This is a normal phenomenon."
        ],
        shipping: {
            price: "$3.33~$6.88",
            description: "Shipping to the US only"
        },
    },
    {
        id: 13,
        name: "Women's Cropped T-Shirt | Polyester (Made in USA)",
        price: 4.64,
        originalPrice: 5.80,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/MHM9CG_5_1_1.jpg"],
        isNew: true,
        origin: "CN",
        exclusiveRegion: "US",
        colors: [
            { label: "White", hex: "white" },
            { label: "Black", hex: "black" },
        ],
        sizes: [
            { label: "XS", shoulderWidth: "13.8in/35.0cm", length: "16.1in/41cm", sleeveLength: "5.1in/13cm", bust: "15.0in/38cm", waist: "13.0in/33cm" },
            { label: "S", shoulderWidth: "14.4in/36.5cm", length: "16.5in/42cm", sleeveLength: "5.5in/14cm", bust: "15.7in/40cm", waist: "13.8in/35cm" },
            { label: "M", shoulderWidth: "15.0in/38.0cm", length: "16.9in/43cm", sleeveLength: "5.9in/15cm", bust: "16.5in/42cm", waist: "14.6in/37cm" },
            { label: "L", shoulderWidth: "15.6in/39.5cm", length: "17.3in/44cm", sleeveLength: "6.3in/16cm", bust: "17.3in/44cm", waist: "15.3in/39cm" },
            { label: "XL", shoulderWidth: "16.1in/41.0cm", length: "17.7in/45cm", sleeveLength: "6.7in/17cm", bust: "18.1in/46cm", waist: "16.1in/41cm" },
            { label: "XXL", shoulderWidth: "16.7in/42.5cm", length: "18.1in/46cm", sleeveLength: "7.1in/18cm", bust: "18.9in/48cm", waist: "16.9in/43cm" },
        ],
        meta: {
            material: "Terylene",
            weight: "170 g",
        },
        description: [
            "Detailed Address: 10271 Iron Rock Way, City: Elk Grove, State: CA, Postal Code: 95624",
            "Design Description：Single-sided printing",
            "Material Description：Polyester",
            "Product Performance：Classic V-neck T-shirt with a simple and minimalist style, easily creating looks from casual to fashionable. Made of soft fabric with good moisture absorption and sweat wicking performance, great elasticity, lightweight and highly breathable.",
            "Applicable Scenarios：The simple design fits all casual occasions. Suitable for work, daily wear, office, travel, running and home leisure.",
            "Target Crowd：Most adult women.",
            "Structure & Accessories：V-neck, short sleeve.",
            "Matching Style：Perfect to match with jeans, shorts, sweatpants or skirts. Suitable for spring, summer and autumn.",
            "Washing Instructions：Hand wash or machine wash available; tumble dry at low temperature, do not bleach.",
            "Special Note：A size deviation within 1-3cm is normal due to different measurement methods.",
        ],
        shipping: {
            price: "$3.33~$6.88",
            description: "Shipping to the US only"
        },
    },
    {
        id: 14,
        name: "11oz Mug | Ceramic (Made in USA)",
        price: 5.44,
        originalPrice: 6.80,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/LHXX6C_5_1.jpg"],
        isNew: true,
        origin: "CN",
        colors: [
            { label: "Black", hex: "black" },
        ],
        sizes: [
            { label: "One Size", width: "3.2inch/8.3cm", height: "3.7inch/9.6cm", capacity: "11oz", long: "3.2inch/8.3cm" },
        ],
        meta: {
            material: "Ceramics",
            weight: "435 g",
        },
        description: [
            "Detailed Address: 2503 Strozier Ave South El Monte, City: South El Monte, State: CA, Postal Code: 91733",
            "Design Area: Partial Printing",
            "Recommended Image Pixels: 2598*1122PX",
            "Eco-friendly ceramic craftsmanship with bright color, smooth and delicate texture",
            "Neat, round and smooth cup rim, safe and mouth-friendly",
            "Seamlessly connected handle, firm and durable with fine joints and sleek elegant curves",
            "Sturdy high-temperature resistant cup base to prevent cracking; non-slip bottom design protects desktop surfaces",
            "Hand washing recommended for daily use",
            "Microwave safe",
            "Size data measured flat laid. A margin of error within 0.5 is normal due to different measurement methods",
            "Product images are for reference only. Slight differences between the actual product and renderings including size, position and color deviation are inevitable during production and deemed normal",
            "Due to the special firing process and pure handmade production, minor surface imperfections may occur under high temperature firing, which shall not be regarded as valid grounds for after-sales claims"
        ],
        shipping: {
            price: "$4.01~$8.20",
            description: "Shipping to the US only"
        },
    },
    {
        id: 15,
        name: "Two-Tone Mug (15oz) (Multiple Colors) | Ceramic",
        price: 4.00,
        originalPrice: 5.00,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/6GM9U8_90_1_1.jpg"],
        isNew: true,
        origin: "CN",
        colors: [
            { label: "Black", hex: "black" },
            { label: "f8c2cf", hex: "#f8c2cf" },
            { label: "White", hex: "white" },
            { label: "red", hex: "red" },
            { label: "f8c2cf", hex: "#f8c2cf" },
            { label: "ffff00", hex: "#ffff00" },
            { label: "ed6434", hex: "#ed6434" },
        ],
        sizes: [
            { label: "One Size", width: "3.3inch/8.5cm", height: "4.5inch/11.5cm", capacity: "11oz" },
        ],
        meta: {
            material: "Ceramics",
            weight: "583 g",
        },
        description: [
            "Suggested image resolution: 2728*1287",
            "Material：Ceramic",
            "Product Performance：Humanized design, safe and reliable use, beautiful and practical, environmentally friendly material. Thickened, non-slip bottom. Convenient to use, easy to store, and easy to handle. Thick body, simple and elegant design, healthy and odorless, smooth rim for a more lingering taste experience. Unique handle design for comfortable grip. The ceramic cup is of moderate weight, sturdy and durable, bringing a healthier life to you and your family.",
            "Suitable Scenarios：Coffee shops, offices, home use, etc.",
            "Neat, round and smooth cup rim, safe and mouth-friendly",
            "Washing Instructions：Dishwasher and microwave not allowed.",
            "Special Note：Due to the special nature of clay firing and the handmade nature of the product, minor imperfections such as small black spots, burrs, bumps, and uneven glazing may occur during the high-temperature firing process. These are unavoidable with current processes and fall within international and national standards. These are considered normal. Please consider carefully before purchasing if you are concerned about these imperfections! Special Note：Due to different measurement methods, an error within 0.5cm is considered normal for this size data.",
            "Friendly Reminder：The image shown is for reference only. Certain objective factors during the production process may cause slight differences between the actual product and the image, including but not limited to the size, position, color difference, and missing stitching. These are considered normal.",
        ],
        shipping: {
            price: "$14.25",
            description: "Global shipping (US rates shown by default)"
        },
        bulkPricing: [
            { minQty: 1, maxQty: 9, price: 4.00, realPrice: 5.00 },
            { minQty: 10, maxQty: 49, price: 3.80, realPrice: 4.75 },
            { minQty: 50, price: 3.60, realPrice: 4.50 },
        ],
    },
    {
        id: 16,
        name: "Classic White Mug (325ml/11oz) | Ceramic",
        price: 2.08,
        originalPrice: 2.61,
        discount: 20,
        avgProductionDays: 1.5,
        images: ["/images/B63UXC_6_1.jpg"],
        isNew: true,
        origin: "CN",
        colors: [
            { label: "White", hex: "white" },
        ],
        sizes: [
            { label: "One Size", width: "3.26inch/8.3cm", height: "3.7inch/9.6cm", capacity: "11 OZ" },
        ],
        meta: {
            material: "Ceramics",
            weight: "440 g",
        },
        description: [
            "【Type】Healthy ceramic, C-shaped handle, fully printed",
            "【Product Description】Capacity: 11 oz. Classic white mug, solid color is easy to mix and match with a variety of designs and other colors. Durable ceramic material, safe and healthy to drink.",
            "【Application】Designed for daily use, perfect for coffee, tea, hot cocoa, soup, etc.",
            "【[Washing Instructions】 Wash with warm water and wipe clean. Please do not bleach",
            "【Special Note】 Due to the special nature of porcelain firing, for pure handmade, so in the high-temperature firing process may appear defects in the ceramic surface, not as a basis for after-sales. This size data due to different measurement methods, the error within 1cm is normal.",
            "【Designer Tips】 To ensure the highest quality printing, please note the recommended image size (width x height) for this product upload",
            "【Note】This product is made on demand, One piece can also be shipped, multiple shipping routes are provided, and the cost varies depending on time efficiency.",
        ],
        shipping: {
            price: "$11.22",
            description: "Global shipping (US rates shown by default)"
        },
        bulkPricing: [
            { minQty: 1, maxQty: 9, price: 2.08, realPrice: 2.61 },
            { minQty: 10, maxQty: 49, price: 1.97, realPrice: 2.47 },
            { minQty: 50, price: 1.87, realPrice: 2.34 },
        ],
    },
];