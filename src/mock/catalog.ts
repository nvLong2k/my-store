// data/catalogProducts.ts
import { CatalogProduct } from "../types/catalog";

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    name: "Embroidery Snapback Cap",
    images: ["/images/1779728252673_pasted-image-1779703053088.png"],
    imageAlbum: [
      "/images/1779788448596_pasted-image-1779763248668.png",
    ],
    productCode: "P162",
    sku: "ESC",
    material: "kaki",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: ["onesize"],
    colors: [
      { label: "Duck_camo", hex: "#4a5240" },
      { label: "camo_maroon", hex: "#6b3a3a" },
      { label: "Navy_Grey", hex: "#2d3a5e" },
      { label: "Camo_white", hex: "#c8c5b0" },
      { label: "Pink_White", hex: "#e8a0b0" },
      { label: "camo_colorful", hex: "#5a7a4a" },
      { label: "Beige_black", hex: "#c4ae8a" },
      { label: "Pink_white", hex: "#d46080" },
      { label: "Navy", hex: "#1a2a4e" },
    ],
    variations: [
      {
        size: "onesize",
        sku: "ESC_ONESIZE",
        weight: "210g",
        price: 6.5,
        shipping: {
          fastUS: { fee: 8.86, total: 15.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 14.07 },
          shipByTiktokUS: { fee: 5.1, total: 11.6 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 7.93, total: 14.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 20.81 },
          shippingToUK: { fee: 10.55, total: 17.05 },
          shippingToCA: { fee: 12.75, total: 19.25 },
        },
      },
    ],
  },
  {
    id: 2,
    name: "Embroidery Snapback Cap",
    images: ["/images/1779727338252_pasted-image-1779702138636.png"],
    productCode: "P161",
    sku: "ETC",
    material: "cotton zip",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: ["onesize"],
    colors: [
      { label: "Black", hex: "black" },
    ],
    variations: [
      {
        size: "onesize",
        sku: "ESC_ONESIZE",
        weight: "210g",
        price: 6.5,
        shipping: {
          fastUS: { fee: 8.86, total: 15.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 14.07 },
          shipByTiktokUS: { fee: 5.1, total: 11.6 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 7.93, total: 14.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 20.81 },
          shippingToUK: { fee: 10.55, total: 17.05 },
          shippingToCA: { fee: 12.75, total: 19.25 },
        },
      },
    ],
  },
  {
    id: 3,
    name: "EMBROIDERY BABE BODY SUIT",
    images: ["/images/1779725741021_pasted-image-1779700541382.png"],
    productCode: "P158",
    sku: "EGH",
    material: "caro",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Left", "Right"],
    sizes: ["3m", "6m", "12m", "18m", "24m"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Navy", hex: "#1a2a4e" },
      { label: "Sand", hex: "#d4b7a2" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_Blue", hex: "#45a0ff" },
      { label: "MARRON", hex: "#ff0000" },
      { label: "sport_gray", hex: "#6c8486" },
      { label: "pink", hex: "#cc5cb3" },
    ],
    variations: [
      {
        size: "3m",
        sku: "EBBS_3M",
        weight: "125g",
        price: 8,
        shipping: {
          fastUS: { fee: 7.14, total: 15.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 14.19 },
          shipByTiktokUS: { fee: 3.93, total: 11.93 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 6.38, total: 11.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 21.25 },
          shippingToUK: { fee: 8.82, total: 16.82 },
          shippingToCA: { fee: 11.73, total: 19.73 },
        },
      },
      {
        size: "6m",
        sku: "EBBS_6M",
        weight: "135g",
        price: 8,
        shipping: {
          fastUS: { fee: 7.14, total: 15.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 14.19 },
          shipByTiktokUS: { fee: 3.93, total: 11.93 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 6.38, total: 11.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 21.25 },
          shippingToUK: { fee: 8.82, total: 16.82 },
          shippingToCA: { fee: 11.73, total: 19.73 },
        },
      },
      {
        size: "12m",
        sku: "EBBS_12M",
        weight: "145g",
        price: 8,
        shipping: {
          fastUS: { fee: 7.14, total: 15.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 14.19 },
          shipByTiktokUS: { fee: 3.93, total: 11.93 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 6.38, total: 11.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 21.25 },
          shippingToUK: { fee: 8.82, total: 16.82 },
          shippingToCA: { fee: 11.73, total: 19.73 },
        },
      },
      {
        size: "18m",
        sku: "EBBS_18M",
        weight: "155g",
        price: 8,
        shipping: {
          fastUS: { fee: 7.69, total: 15.69, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.61 },
          shipByTiktokUS: { fee: 4.69, total: 12.69 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 7.1, total: 15.1, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.61 },
          shippingToUK: { fee: 9.76, total: 17.76 },
          shippingToCA: { fee: 12.04, total: 20.04 },
        },
      },
      {
        size: "24m",
        sku: "EBBS_24M",
        weight: "165g",
        price: 8,
        shipping: {
          fastUS: { fee: 7.69, total: 15.69, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.61 },
          shipByTiktokUS: { fee: 4.69, total: 12.69 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 7.1, total: 15.1, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.61 },
          shippingToUK: { fee: 9.76, total: 17.76 },
          shippingToCA: { fee: 12.04, total: 20.04 },
        },
      },
    ],
    imageDescription: "/images/1779725452214_image.png",
  },
  {
    id: 4,
    name: "EMBROIDERY GINGHAM SHORT",
    images: ["/images/1779721155141_pasted-image-1779695955031.png"],
    imageAlbum: [
      "/images/1779721168249_pasted-image-1779695968358.png",
    ],
    productCode: "P159",
    sku: "EBBS",
    material: "cotton zip",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { label: "Lavender_Gingham", hex: "#7a7fff" },
      { label: "Brown_Gingham", hex: "#866329" },
      { label: "Green_Gingham", hex: "#0daf84" },
      { label: "Pink_gingham", hex: "#ff47d7" },
      { label: "Mustar_Gingham", hex: "#e89402" },
      { label: "Light_Blue_Gingham", hex: "#45a0ff" },
      { label: "Red_Gingham", hex: "#ff0000" },
      { label: "Black_Gingham", hex: "#2e3b4a" },
    ],
    variations: [
      {
        size: "XS",
        sku: "EGH_XS",
        weight: "136g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 7.14, total: 15.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 14.19 },
          shipByTiktokUS: { fee: 3.93, total: 11.93 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 6.38, total: 11.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 21.25 },
          shippingToUK: { fee: 8.82, total: 16.82 },
          shippingToCA: { fee: 11.73, total: 19.73 },
        },
      },
      {
        size: "S",
        sku: "EGH_S",
        weight: "156g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.69, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.61 },
          shipByTiktokUS: { fee: 4.69, total: 12.69 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 7.1, total: 15.1, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.61 },
          shippingToUK: { fee: 9.76, total: 17.76 },
          shippingToCA: { fee: 12.04, total: 20.04 },
        },
      },
      {
        size: "M",
        sku: "EGH_M",
        weight: "176g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.69, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.61 },
          shipByTiktokUS: { fee: 4.69, total: 12.69 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 7.1, total: 15.1, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.61 },
          shippingToUK: { fee: 9.76, total: 17.76 },
          shippingToCA: { fee: 12.04, total: 20.04 },
        },
      },
      {
        size: "L",
        sku: "EGH_L",
        weight: "196g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.69, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.61 },
          shipByTiktokUS: { fee: 4.69, total: 12.69 },
          nonShip: { fee: 0.00, total: 8.0 },
          epacketUS: { fee: 7.1, total: 15.1, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.61 },
          shippingToUK: { fee: 9.76, total: 17.76 },
          shippingToCA: { fee: 12.04, total: 20.04 },
        },
      },
      {
        size: "XL",
        sku: "EGH_XL",
        weight: "216g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 8.86, total: 17.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 16.07 },
          shipByTiktokUS: { fee: 5.1, total: 13.6 },
          nonShip: { fee: 0, total: 8.5 },
          epacketUS: { fee: 7.93, total: 16.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 22.81 },
          shippingToUK: { fee: 10.55, total: 19.05 },
          shippingToCA: { fee: 12.75, total: 21.25 },
        },
      },
      {
        size: "2XL",
        sku: "EGH_2XL",
        weight: "236g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 8.86, total: 17.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 16.07 },
          shipByTiktokUS: { fee: 5.1, total: 13.6 },
          nonShip: { fee: 0, total: 8.5 },
          epacketUS: { fee: 7.93, total: 16.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 22.81 },
          shippingToUK: { fee: 10.55, total: 19.05 },
          shippingToCA: { fee: 12.75, total: 21.25 },
        },
      },
    ],
    imageDescription: "/images/1779721252425_image.png",
  },
  {
    id: 5,
    name: "Embroidery Snapback Cap",
    images: ["/images/1779729322378_pasted-image-1779704122941.png"],
    imageAlbum: [
      "/images/1779729334682_pasted-image-1779704135271.png",
    ],
    productCode: "P157",
    sku: "EBC",
    material: "kaki",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: ["onesize"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Navy", hex: "#1a2a4e" },
      { label: "Sand", hex: "#d4b7a2" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_Blue", hex: "#45a0ff" },
      { label: "Red", hex: "#ff0000" },
    ],
    variations: [
      {
        size: "onesize",
        sku: "ESC_ONESIZE",
        weight: "210g",
        price: 6.5,
        shipping: {
          fastUS: { fee: 8.86, total: 15.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 14.07 },
          shipByTiktokUS: { fee: 5.1, total: 11.6 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 7.93, total: 14.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 20.81 },
          shippingToUK: { fee: 10.55, total: 17.05 },
          shippingToCA: { fee: 12.75, total: 19.25 },
        },
      },
    ],
  },
  {
    id: 6,
    name: "EMBROIDERY TRUCKER FOAM CAP",
    images: ["/images/1779447073022_pasted-image-1779421873328.png"],
    imageAlbum: [
      "/images/1779894131772_pasted-image-1779868931662.png",
    ],
    productCode: "P155",
    sku: "ETFC",
    material: "FOAM",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: ["onesize"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Red", hex: "#ff0000" },
      { label: "white_black", hex: "#f5f5f4" },
      { label: "White_red", hex: "#2e3b4a" },
      { label: "Royal_blue", hex: "#866329" },
      { label: "white_royal_blue", hex: "#45a0ff" },
      { label: "white_red_royal_blue", hex: "#ff0000" },
    ],
    variations: [
      {
        size: "onesize",
        sku: "ETFC_ONE SIZE",
        weight: "210g",
        price: 6.5,
        shipping: {
          fastUS: { fee: 8.86, total: 15.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 14.07 },
          shipByTiktokUS: { fee: 5.1, total: 11.6 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 7.93, total: 14.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 20.81 },
          shippingToUK: { fee: 10.55, total: 17.05 },
          shippingToCA: { fee: 12.75, total: 19.25 },
        },
      },
    ],
  },
  {
    id: 7,
    name: "EMBROIDERY TOTE BAG",
    images: ["/images/1779439632218_pasted-image-1779414429006.png"],
    imageAlbum: [
      "/images/1779439650105_pasted-image-1779414447039.png",
    ],
    productCode: "P154",
    sku: "ETFC",
    material: "FOAM",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: ["19 x 12.5 x 5.5"],
    colors: [
      { label: "Coral_sorbet", hex: "#e995de" },
      { label: "Powder_Blue", hex: "#3cd3a5" },
      { label: "Purple", hex: "#98329a" },
      { label: "Green_pink", hex: "#0daf84" },
      { label: "Red_natural", hex: "#931a1a" },
      { label: "Green_white", hex: "#319b72" },
      { label: "Pink_Red", hex: "#d80eb3" },
      { label: "Dark_Green_Pink", hex: "#0b2217" },
      { label: "Pink_off_white", hex: "#c785be" },
      { label: "Orange_pink", hex: "#d43811" },
      { label: "Blue_pink", hex: "#da4310" },
      { label: "Dark_pink_bright_pink", hex: "#ac0c24" },
      { label: "Black_grey", hex: "#19191a" },
      { label: "Yellow_white", hex: "#f0b400" },
      { label: "Purple_white", hex: "#7a7fff" },
      { label: "Multi_pastel_ligh_blue", hex: "#7a7fff" },
      { label: "Light_bue", hex: "#45a0ff" },
    ],
    variations: [
      {
        size: "19 x 12.5 x 5.5",
        sku: "ETFC_19 x 12.5 x 5.5",
        weight: "250g",
        price: 8.5,
        shipping: {
          fastUS: { fee: 9.41, total: 17.41, days: "4-9 business days" },
          tiktokUK: { fee: 8.19, total: 16.69 },
          shipByTiktokUS: { fee: 5.32, total: 13.82 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 8.49, total: 16.99, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.59, total: 23.09 },
          shippingToUK: { fee: 11.49, total: 19.99 },
          shippingToCA: { fee: 12.99, total: 21.49 },
        },
      },
    ],
    description: `
        ✨ Details:
        Durable canvas tote
        Lightweight yet sturdy for daily use
        Perfect size for books, beach essentials, and more
        Neutral aesthetic with a soft coastal vibe

        Product Features
        • 100% heavy-weight canvas for durability
        • Flat-corner construction for a slim, structured profile
        • Self-fabric carrying handles with reinforced stitching

        📐 SIZE & PRODUCT DETAILS
        • Size: 19 inches × 12.5 inches × 5.5 inches
        • Handle drop: Approx. 10 inches

        • Color: 16 colors as mockup
        • Material: Durable tote bag, suitable for daily use
        • Design: High-quality embroidery
        • Lightweight, reusable, and easy to carry for shopping or travel

        ✧ PERSONALIZATION REQUIRED ✧
        ⚠️ This item is personalized and made to order.
        Personalization details are required to complete your order.
          `,
  },
  {
    id: 8,
    name: "Embroidered Name Hoop",
    images: ["/images/1779294290929_pasted-image-1779269091058.png"],
    productCode: "P152",
    sku: "ENH",
    material: "FOAM",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: [" 4.7 x 6.0 ( oval) ", " 6.7 x 7.5  ( oval) ", " 7.1 x 9.8 ( oval) ", " 8.7 x 11.4 ( oval) ", "6\" (circle)", "8\" (circle)", "10\" (circle)",],
    variations: [
      {
        size: "4.7 x 6.0 ( oval)",
        sku: "ENH_4.7 X 6.0 ( OVAL)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
      {
        size: "6.7 x 7.5 ( oval)",
        sku: "ENH_6.7 X 7.5 ( OVAL)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
      {
        size: "7.1 x 9.8 ( oval)",
        sku: "ENH_7.1 X 9.8 ( OVAL)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
      {
        size: "8.7 x 11.4 ( oval)",
        sku: "ENH_8.7 X 11.4 ( OVAL)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
      {
        size: "6\" ( circle)",
        sku: "ENH_6\" ( CIRCLE)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
      {
        size: "8\" ( circle)",
        sku: "ENH_8\" ( CIRCLE)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
      {
        size: "10\" ( circle)",
        sku: "ENH_10\" ( CIRCLE)",
        weight: "0g",
        price: 0,
        shipping: {
          fastUS: { fee: 5.86, total: 5.86, days: "4-9 business days" },
          tiktokUK: { fee: 4.62, total: 4.62 },
          shipByTiktokUS: { fee: 2.78, total: 2.78 },
          nonShip: { fee: 0, total: 0 },
          epacketUS: { fee: 5.07, total: 5.07, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 12.94 },
          shippingToUK: { fee: 7.25, total: 7.25 },
          shippingToCA: { fee: 11.42, total: 11.42 },
        },
      },
    ],
    description: `
        Personalized Baby Name Sign, Whale Nursery Decor, Custom Embroidery Hoop, Baby Gift, Newborn Name Sign, Baby Shower Gift, Nursery Wall Art.
      🌟 What’s Included
      ✔ Custom embroidered name
      ✔canvas fabric + high-quality embroidery thread
      ✔ Oval wood-look hoop: 4,7 x 6,0". 6,0 x 7,5", 7,1 x 9,8", 8,7 x 11,4"

      ✔ circle wood-look hoop: 6", 8", 10".
      ✔ Ready to hang with wood-look hoop frame
      ✔ Perfect gift for baby rooms, newborn keepsakes or photo props

      🎀 Gift Ideas
      • Baby birth announcement
      • Nursery wall decoration
      • First birthday or baptism keepsake
      • Baby shower gift for parents-to-be
      • Heirloom décor for a storybook-style room
          `,
  },
  {
    id: 9,
    name: "Embroidered Apron",
    images: ["/images/1778324460321_pasted-image-1778299260470.png"],
    productCode: "P143",
    sku: "EMA",
    material: "kaki",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Center", "Left", "Right"],
    sizes: ["70 x 90 cm"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Pink", hex: "#cc5cb3" },
      { label: "Blue", hex: "#45a0ff" },
    ],
    variations: [
      {
        size: "70 x 90 cm",
        sku: "EMA_70X90CM",
        weight: "70g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 8.86, total: 15.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 14.07 },
          shipByTiktokUS: { fee: 5.1, total: 11.6 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 7.93, total: 14.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 20.81 },
          shippingToUK: { fee: 10.55, total: 17.05 },
          shippingToCA: { fee: 12.75, total: 19.25 },
        },
      },
    ],
  },
  {
    id: 10,
    name: "EMBROIDERY BABY BANER",
    images: ["/images/1777456434347_z7771236803380_99129e7c414269583302fdb6544b5ba0.jpg"],
    productCode: "P141",
    sku: "EBB",
    material: "COTTON",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["None"],
    sizes: ["27x30"],
    variations: [
      {
        size: "27x30",
        sku: "EBB_27X30",
        weight: "95g",
        price: 6.5,
        shipping: {
          fastUS: { fee: 6.42, total: 12.92, days: "4-9 business days" },
          tiktokUK: { fee: 5.03, total: 11.53 },
          shipByTiktokUS: { fee: 3.23, total: 9.73 },
          nonShip: { fee: 0, total: 6.5 },
          epacketUS: { fee: 5.77, total: 12.27, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 19.44 },
          shippingToUK: { fee: 7.69, total: 14.19 },
          shippingToCA: { fee: 14.42, total: 17.92 },
        },
      },
    ],
    description: `
      Custom Baby Banner, Bows Baby Banner, Welcome Banner with Floral Crest, Hospital Door Sign, Baby Shower Gift, Nursery,Newborn Gift,Baby Girl'.
      Size:
      Approx. 30cm (height) x 27cm (width), includes a 30cm wooden hanging stick – ready to display right out of the box

      Custom Embroidery:
      Personalize with your baby’s name or a classic 3-letter monogram. Simply provide the full name, and we’ll arrange the initials in traditional order (First – Last – Middle).

      Ready to Hang:
      Comes fully assembled with a wooden dowel – no extra setup needed.
    `
  },
  {
    id: 11,
    name: "Embroidery Wreath Sash",
    images: ["/images/1777455720037_z7773920343051_b70bff25da6e6df81426ad0d4e4a18e5.jpg"],
    imageAlbum: [
      "/images/1777455728158_z7771856079878_7a22645dda80dd299ad5bba5bcd74cbf.jpg",
    ],
    productCode: "P140",
    sku: "EWS",
    material: "caro",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["All Over Print"],
    sizes: ["5x50"],
    colors: [
      { label: "Red", hex: "#ff0000" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_bue", hex: "#45a0ff" },
      { label: "Cream_yellow", hex: "#0daf84" },
      { label: "Light_Green", hex: "#81932f" },
      { label: "Ivory", hex: "#ecdcd0" },
      { label: "Mint_green", hex: "#0daf84" },
      { label: "baby_blue", hex: "#69a8cd" },
      { label: "Pastel_Purple", hex: "#7d80d4" },
      { label: "Dark_navy", hex: "#2e3b4a" },
      { label: "Dark_Orange", hex: "#f19c09" },
      { label: "black_white", hex: "#2e3b4a" },
      { label: "Blush_pink", hex: "#d392ca" },
      { label: "Mustard_yellow", hex: "#f0b400" },
      { label: "pink", hex: "#cc5cb3" },
    ],
    variations: [
      {
        size: "5x50",
        sku: "EWS_5X50",
        weight: "125g",
        price: 7,
        shipping: {
          fastUS: { fee: 7.14, total: 14.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 13.19 },
          shipByTiktokUS: { fee: 3.93, total: 10.93 },
          nonShip: { fee: 0.00, total: 7.0 },
          epacketUS: { fee: 6.38, total: 13.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 20.25 },
          shippingToUK: { fee: 8.82, total: 15.82 },
          shippingToCA: { fee: 11.73, total: 18.73 },
        },
      },
    ],
    description: `
      Premium Pearl Sheen Satin Polyester, linen
      Sizes Available: 5x50 in
      Double-Layer Satin Construction
      Multi-Use: Hair Tie, Bracelet, or Bag Accessory
      High-Quality Sublimation Print
      MOQ: 1
      Made in Vietnam
    `
  },
  {
    id: 12,
    name: "EMBROIDERY SHORT",
    images: ["/images/1777393621324_pasted-image-1777368419623.jpg"],
    productCode: "P139",
    sku: "ES",
    material: "cotton zip",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["Left", "Right"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "White", hex: "#ffffff" },
    ],
    variations: [
      {
        size: "XS",
        sku: "ES_XS",
        weight: "175g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "S",
        sku: "ES_S",
        weight: "185g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "M",
        sku: "ES_M",
        weight: "195g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "L",
        sku: "ES_L",
        weight: "210g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 8.86, total: 16.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 15.07 },
          shipByTiktokUS: { fee: 5.1, total: 12.6 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.93, total: 15.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 21.81 },
          shippingToUK: { fee: 10.55, total: 18.05 },
          shippingToCA: { fee: 12.75, total: 20.25 },
        },
      },
      {
        size: "XL",
        sku: "ES_XL",
        weight: "225g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 8.86, total: 16.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 15.07 },
          shipByTiktokUS: { fee: 5.1, total: 12.6 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.93, total: 15.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 21.81 },
          shippingToUK: { fee: 10.55, total: 18.05 },
          shippingToCA: { fee: 12.75, total: 20.25 },
        },
      },
      {
        size: "2XL",
        sku: "ES_2XL",
        weight: "250g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 9.41, total: 16.91, days: "4-9 business days" },
          tiktokUK: { fee: 8.19, total: 15.69 },
          shipByTiktokUS: { fee: 5.32, total: 12.82 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 8.49, total: 15.99, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.59, total: 22.09 },
          shippingToUK: { fee: 11.49, total: 18.99 },
          shippingToCA: { fee: 12.99, total: 20.49 },
        },
      },
    ],
    imageDescription: "/images/1777390185330_image.png",
  },
  {
    id: 13,
    name: "EMBROIDERY SPAGHETTI STRAP",
    images: ["/images/1777387599405_z7771416264856_51d171221ff52541df738ce9d88bd30c.jpg"],
    imageAlbum: [
      "/images/1779534593390_pasted-image-1779509393817.png",
    ],
    productCode: "P138",
    sku: "ESS",
    material: "cotton zip",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Red", hex: "#ff0000" },
      { label: "Navy", hex: "#0d487c" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_bue", hex: "#45a0ff" },
      { label: "Light_pink", hex: "#e890ea" },
      { label: "Sport_Grey", hex: "#6c8486" },
    ],
    variations: [
      {
        size: "XS",
        sku: "ESS_XS",
        weight: "130g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.14, total: 14.64, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 13.69 },
          shipByTiktokUS: { fee: 3.93, total: 11.43 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 6.38, total: 13.88, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 20.75 },
          shippingToUK: { fee: 8.82, total: 16.32 },
          shippingToCA: { fee: 11.73, total: 19.23 },
        },
      },
      {
        size: "S",
        sku: "ESS_S",
        weight: "140g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.14, total: 14.64, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 13.69 },
          shipByTiktokUS: { fee: 3.93, total: 11.43 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 6.38, total: 13.88, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 20.75 },
          shippingToUK: { fee: 8.82, total: 16.32 },
          shippingToCA: { fee: 11.73, total: 19.23 },
        },
      },
      {
        size: "M",
        sku: "ESS_M",
        weight: "145g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.14, total: 14.64, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 13.69 },
          shipByTiktokUS: { fee: 3.93, total: 11.43 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 6.38, total: 13.88, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 20.75 },
          shippingToUK: { fee: 8.82, total: 16.32 },
          shippingToCA: { fee: 11.73, total: 19.23 },
        },
      },
      {
        size: "L",
        sku: "ESS_L",
        weight: "155g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "XL",
        sku: "ESS_XL",
        weight: "165g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "2XL",
        sku: "ESS_2XL",
        weight: "180g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
    ],
    imageDescription: "/images/1777385295730_image.png",
  },
  {
    id: 14,
    name: "EMBROIDERY TANK TOP WOMEN",
    images: ["/images/1777384661027_z7751575311655_8abfa47e3562ddd88ca9746cc250e416.jpg"],
    imageAlbum: [
      "/images/1779801849944_pasted-image-1779776648672.png",
    ],
    productCode: "P137",
    sku: "ETTW",
    material: "cotton zip",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Red", hex: "#ff0000" },
      { label: "Navy", hex: "#0d487c" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_bue", hex: "#45a0ff" },
      { label: "Light_pink", hex: "#e890ea" },
      { label: "Sport_Grey", hex: "#6c8486" },
    ],
    variations: [
      {
        size: "XS",
        sku: "ETTW_XS",
        weight: "160g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "S",
        sku: "ETTW_S",
        weight: "165g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "M",
        sku: "ETTW_M",
        weight: "175g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "L",
        sku: "ETTW_L",
        weight: "185g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "XL",
        sku: "ETTW_XL",
        weight: "195g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "2XL",
        sku: "ETTW_2XL",
        weight: "205g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 8.86, total: 16.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 15.07 },
          shipByTiktokUS: { fee: 5.1, total: 12.6 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.93, total: 15.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 21.81 },
          shippingToUK: { fee: 10.55, total: 18.05 },
          shippingToCA: { fee: 12.75, total: 20.25 },
        },
      },
    ],
    imageDescription: "/images/1778692255457_image.png",
  },
  {
    id: 15,
    name: "EMBROIDERY BABE TEE",
    images: ["/images/1776520134167_z7738277803840_82fd0bfb5b79cf599687808dc1f7c4f7.jpg"],
    imageAlbum: [
      "/images/1776520158524_z7738232604745_feff8e66868c839f5de9463a24c83b07.jpg",
    ],
    productCode: "P136",
    sku: "EBT",
    material: "cotton zip",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Navy", hex: "#0d487c" },
      { label: "Sand", hex: "#d4b7a2" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_pink", hex: "#e890ea" },
      { label: "Sport_Grey", hex: "#6c8486" },
      { label: "begi", hex: "#e8d0bf" },
      { label: "forest_green", hex: "#09975f" },
    ],
    variations: [
      {
        size: "XS",
        sku: "ETTW_XS",
        weight: "160g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "S",
        sku: "ETTW_S",
        weight: "165g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "M",
        sku: "ETTW_M",
        weight: "175g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "L",
        sku: "ETTW_L",
        weight: "185g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "XL",
        sku: "ETTW_XL",
        weight: "195g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 7.69, total: 15.19, days: "4-9 business days" },
          tiktokUK: { fee: 6.61, total: 14.11 },
          shipByTiktokUS: { fee: 4.69, total: 12.19 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.1, total: 14.6, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.61, total: 21.11 },
          shippingToUK: { fee: 9.76, total: 17.26 },
          shippingToCA: { fee: 12.04, total: 19.54 },
        },
      },
      {
        size: "2XL",
        sku: "ETTW_2XL",
        weight: "205g",
        price: 7.5,
        shipping: {
          fastUS: { fee: 8.86, total: 16.36, days: "4-9 business days" },
          tiktokUK: { fee: 7.57, total: 15.07 },
          shipByTiktokUS: { fee: 5.1, total: 12.6 },
          nonShip: { fee: 0, total: 7.5 },
          epacketUS: { fee: 7.93, total: 15.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 21.81 },
          shippingToUK: { fee: 10.55, total: 18.05 },
          shippingToCA: { fee: 12.75, total: 20.25 },
        },
      },
    ],
    imageDescription: "/images/1778692255457_image.png",
  },
  {
    id: 16,
    name: "Embroidery Graduation Stole KID",
    images: ["/images/1775667734106_Beige And Teal Modern T-Shirt Size Chart Instagram Post (7).jpg"],
    imageAlbum: [
      "/images/1775667740922_Gemini_Generated_Image_rg75tqrg75tqrg75.png",
      "/images/1775667750900_z7704368281018_28d0cac14281c4dceae6b42862dfbd33.jpg",
      "/images/1775667751550_z7704368278850_f52e894eaf86afd9ec08de953ccaa8ad (1).jpg",
    ],
    productCode: "P133",
    sku: "GSEKID",
    material: "Polyester",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["All Over Print"],
    sizes: ["4x50inch", "4x50inch-pointed"],
    colors: [
      { label: "AS DESIGN", hex: "black" },
    ],
    variations: [
      {
        size: "4x50inch",
        sku: "GSEKID_4X50INCH",
        weight: "95g",
        price: 5.5,
        shipping: {
          fastUS: { fee: 6.42, total: 11.92, days: "4-9 business days" },
          tiktokUK: { fee: 5.03, total: 10.53 },
          shipByTiktokUS: { fee: 3.23, total: 8.73 },
          nonShip: { fee: 0, total: 5.5 },
          epacketUS: { fee: 5.77, total: 11.27, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 18.44 },
          shippingToUK: { fee: 7.69, total: 13.19 },
          shippingToCA: { fee: 11.42, total: 16.92 },
        },
      },
      {
        size: "4x50inch-pointed",
        sku: "GSEKID_4X50INCH-POINTED",
        weight: "95g",
        price: 5.5,
        shipping: {
          fastUS: { fee: 6.42, total: 11.92, days: "4-9 business days" },
          tiktokUK: { fee: 5.03, total: 10.53 },
          shipByTiktokUS: { fee: 3.23, total: 8.73 },
          nonShip: { fee: 0, total: 5.5 },
          epacketUS: { fee: 5.77, total: 11.27, days: "7-12 business days" },
          shippingOutsideUS: { fee: 12.94, total: 18.44 },
          shippingToUK: { fee: 7.69, total: 13.19 },
          shippingToCA: { fee: 11.42, total: 16.92 },
        },
      },
    ],
    imageDescription: "/images/1773840471687_z7605270361958_1904f262f4dffbbbd1b90728815325ae.jpg",
    description: `
      Celebrate young graduates with the Kid Graduation Stole, a specially designed accessory tailored for children’s graduation ceremonies. Whether for kindergarten, preschool, or elementary milestones, this stole adds a meaningful and personalized touch to every achievement.

      Material:
      Crafted from 100% premium polyester fabric satin, offering a smooth, lightweight, and comfortable feel—perfect for kids to wear throughout ceremonies and photos.

      Size & Fit:

      Size: 4 x 50 inch
      Specifically designed to fit children proportionally, ensuring a neat drape without overwhelming their frame.

      Design Features:

      Kid-Friendly Proportions: Shorter length and narrower width for a comfortable and secure fit

      Flat Ends & Pointed Ends Options: Flexible styling to match different school preferences or event themes

      Double-Sided Printing: Customize both sides for names, school logos, class years, or fun designs

      All-Over Sublimation Printing: Bright, high-resolution prints that remain vibrant without cracking or fading

      Soft & Lightweight Fabric: Gentle on skin, ensuring comfort for extended wear

      Personalization Ready:

      Perfect for preschool, kindergarten, and elementary graduations. Customize with names, mascots, class years, or colorful designs to create memorable keepsakes for students and parents.

      Style Tip:
      Pair with mini graduation gowns and caps for adorable ceremony looks and unforgettable graduation photos.
      Care Instructions:

      Machine wash cold with similar colors on gentle cycle.
      Do not bleach.
      Hang to dry.
      Cool iron on reverse if needed.
      Do not dry clean.
    `
  },
  {
    id: 17,
    name: "Embroidery Graduation Stole",
    images: ["/images/1775668039632_Beige And Teal Modern T-Shirt Size Chart Instagram Post (8).jpg"],
    imageAlbum: [
      "/images/1775667750900_z7704368281018_28d0cac14281c4dceae6b42862dfbd33.jpg",
      "/images/1775667751550_z7704368278850_f52e894eaf86afd9ec08de953ccaa8ad (1).jpg",
      "/images/1775667431796_z7704368275228_af35781415535731095fd00c4fa7b544.jpg",
      "/images/1775667431915_Gemini_Generated_Image_7jflcw7jflcw7jfl.png",
    ],
    productCode: "P132",
    sku: "GSEMST",
    material: "Polyester",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["All Over Print"],
    sizes: ["5x78inch", "5x78inch-pointed"],
    colors: [
      { label: "AS DESIGN", hex: "black" },
    ],
    variations: [
      {
        size: "5x78inch",
        sku: "GSEMST_5X78INCH",
        weight: "125g",
        price: 7,
        shipping: {
          fastUS: { fee: 7.14, total: 14.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 13.19 },
          shipByTiktokUS: { fee: 3.93, total: 10.93 },
          nonShip: { fee: 0, total: 7 },
          epacketUS: { fee: 6.38, total: 13.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 20.25 },
          shippingToUK: { fee: 8.82, total: 15.82 },
          shippingToCA: { fee: 11.73, total: 18.73 },
        },
      },
      {
        size: "5x78inch-pointed",
        sku: "GSEMST_5X78INCH-POINTED",
        weight: "125g",
        price: 7,
        shipping: {
          fastUS: { fee: 7.14, total: 14.14, days: "4-9 business days" },
          tiktokUK: { fee: 6.19, total: 13.19 },
          shipByTiktokUS: { fee: 3.93, total: 10.93 },
          nonShip: { fee: 0, total: 7 },
          epacketUS: { fee: 6.38, total: 13.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 13.25, total: 20.25 },
          shippingToUK: { fee: 8.82, total: 15.82 },
          shippingToCA: { fee: 11.73, total: 18.73 },
        },
      },
    ],
    imageDescription: "/images/1775667388754_Beige And Teal Modern T-Shirt Size Chart Instagram Post (4).jpg",
    description: `
      Celebrate academic achievements in style with the Graduation Stole, a meaningful and customizable accessory designed to honor special milestones. Perfect for schools, graduates, organizations, and commemorative events, this stole offers a premium look with vibrant, full-coverage personalization.

      Material:

      Made from 100% premium polyester fabric satin, delivering a smooth surface with a soft, lightweight feel—ideal for comfortable wear throughout graduation ceremonies.

      Size & Fit:

      Standard size: 5 x 78 inches

      Designed to drape neatly over graduation gowns with a balanced and elegant silhouette.

      Design Features:

      Flat Ends & Pointed Ends Options: Choose between classic flat-cut or traditional pointed finishes to match different styles and preferences

      Double-Sided Printing: Full customization on both sides for maximum visibility and design flexibility

      All-Over Sublimation Printing: High-definition, vibrant prints that won’t crack, peel, or fade over time

      Smooth Finish: Clean, polished look suitable for formal ceremonies and keepsake use

      Personalization Ready:

      Ideal for custom school stoles, honor cords alternatives, club or organization recognition, and personalized graduation gifts. Add names, logos, class years, or meaningful designs to create a unique and memorable piece.

      Style Tip:

      Pair with graduation gowns for ceremonies or keep as a cherished keepsake to commemorate academic achievements.

      Care Instructions:

      Machine wash cold with similar colors on gentle cycle.

      Do not bleach.

      Hang to dry.

      Cool iron on reverse if needed.

      Do not dry clean.
    `
  },
  {
    id: 18,
    name: "HOODIE YOUTH EMBROIDERY",
    images: ["/images/1773937617054_z7636736558371_a55ca89a25ddfb042822994cdb728059.jpg"],
    productCode: "P089",
    sku: "HD_Y_EMBROIDERY",
    material: "COTTON",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST", "None", "ALL OVER PRINT", "Left Chest", "Right Chest", "Left side bowl", "Right side bowl", "Back", "Neck", "Left Sleeve", "Right Sleeve", "Right Sleeve"],
    sizes: ["XS", "S", "M", "L", "XL",],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Navy", hex: "#0d487c" },
      { label: "Sand", hex: "#d4b7a2" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_bue", hex: "#45a0ff" },
      { label: "Sport_Grey", hex: "#6c8486" },
      { label: "begi", hex: "#e8d0bf" },
      { label: "forest_green", hex: "#09975f" },
      { label: "MARRON", hex: "#ff0000" },
      { label: "chocolate", hex: "#866329" },
      { label: "miltary_green", hex: "#0daf84" },
      { label: "ASH", hex: "#53672d" },
      { label: "pink", hex: "#cc5cb3" },
      { label: "Grey", hex: "#6c8486" },
      { label: "carolia_blue", hex: "#45a0ff" },
      { label: "brown", hex: "#9d553d" },
      { label: "orange", hex: "#e89402" },
    ],
    variations: [
      {
        size: "XS",
        sku: "HD_Y_EMBROIDERY_XS",
        weight: "420g",
        price: 10.5,
        shipping: {
          fastUS: { fee: 11.81, total: 22.31, days: "4-9 business days" },
          tiktokUK: { fee: 10.81, total: 21.31 },
          shipByTiktokUS: { fee: 7.37, total: 17.87 },
          nonShip: { fee: 0, total: 10.5 },
          epacketUS: { fee: 10.44, total: 20.94, days: "7-12 business days" },
          shippingOutsideUS: { fee: 17.25, total: 27.75 },
          shippingToUK: { fee: 13.84, total: 24.34 },
          shippingToCA: { fee: 15.53, total: 26.03 },
        },
      },
      {
        size: "S",
        sku: "HD_Y_EMBROIDERY_S",
        weight: "450g",
        price: 10.5,
        shipping: {
          fastUS: { fee: 14.3, total: 24.8, days: "4-9 business days" },
          tiktokUK: { fee: 11.36, total: 21.86 },
          shipByTiktokUS: { fee: 7.82, total: 18.32 },
          nonShip: { fee: 0, total: 10.5 },
          epacketUS: { fee: 12.19, total: 22.69, days: "7-12 business days" },
          shippingOutsideUS: { fee: 18.31, total: 28.81 },
          shippingToUK: { fee: 14.2, total: 24.7 },
          shippingToCA: { fee: 16.55, total: 27.05 },
        },
      },
      {
        size: "M",
        sku: "HD_Y_EMBROIDERY_M",
        weight: "480g",
        price: 10.5,
        shipping: {
          fastUS: { fee: 14.3, total: 24.8, days: "4-9 business days" },
          tiktokUK: { fee: 11.36, total: 21.86 },
          shipByTiktokUS: { fee: 7.82, total: 18.32 },
          nonShip: { fee: 0, total: 10.5 },
          epacketUS: { fee: 12.19, total: 22.69, days: "7-12 business days" },
          shippingOutsideUS: { fee: 18.31, total: 28.81 },
          shippingToUK: { fee: 14.2, total: 24.7 },
          shippingToCA: { fee: 16.55, total: 27.05 },
        },
      },
      {
        size: "L",
        sku: "HD_Y_EMBROIDERY_L",
        weight: "505g",
        price: 10.5,
        shipping: {
          fastUS: { fee: 14.83, total: 25.33, days: "4-9 business days" },
          tiktokUK: { fee: 12.26, total: 22.76 },
          shipByTiktokUS: { fee: 8.52, total: 19.02 },
          nonShip: { fee: 0, total: 10.5 },
          epacketUS: { fee: 12.73, total: 23.23, days: "7-12 business days" },
          shippingOutsideUS: { fee: 21.96, total: 32.46 },
          shippingToUK: { fee: 15.18, total: 25.68 },
          shippingToCA: { fee: 20.99, total: 31.49 },
        },
      },
      {
        size: "XL",
        sku: "HD_Y_EMBROIDERY_XL",
        weight: "540g",
        price: 10.5,
        shipping: {
          fastUS: { fee: 14.83, total: 25.33, days: "4-9 business days" },
          tiktokUK: { fee: 12.26, total: 22.76 },
          shipByTiktokUS: { fee: 8.52, total: 19.02 },
          nonShip: { fee: 0, total: 10.5 },
          epacketUS: { fee: 12.73, total: 23.23, days: "7-12 business days" },
          shippingOutsideUS: { fee: 21.96, total: 32.46 },
          shippingToUK: { fee: 15.18, total: 25.68 },
          shippingToCA: { fee: 20.99, total: 31.49 },
        },
      },
    ],
    imageDescription: "/images/1773937640764_01 HOODIE YOUHT.jpg",
  },
  {
    id: 19,
    name: "SWEASHIRT YOUTH EMBROIDERY",
    images: ["/images/1773937467987_z7636720739675_195f627018456f44dc169762405339f5.jpg"],
    productCode: "P088",
    sku: "SW_Y_EMBROIDERY",
    material: "COTTON",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST", "None", "ALL OVER PRINT", "Left Chest", "Right Chest", "Left side bowl", "Right side bowl", "Back", "Neck", "Left Sleeve", "Right Sleeve", "Right Sleeve"],
    sizes: ["XS", "S", "M", "L", "XL",],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Navy", hex: "#0d487c" },
      { label: "Sand", hex: "#d4b7a2" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_bue", hex: "#45a0ff" },
      { label: "Sport_Grey", hex: "#6c8486" },
      { label: "begi", hex: "#e8d0bf" },
      { label: "forest_green", hex: "#09975f" },
      { label: "MARRON", hex: "#ff0000" },
      { label: "chocolate", hex: "#866329" },
      { label: "miltary_green", hex: "#0daf84" },
      { label: "carolia_blue", hex: "#0daf84" },
      { label: "ASH", hex: "#53672d" },
      { label: "pink", hex: "#cc5cb3" },
      { label: "Grey", hex: "#6c8486" },
      { label: "brown", hex: "#9d553d" },
      { label: "orange", hex: "#e89402" },
    ],
    variations: [
      {
        size: "XS",
        sku: "SW_Y_EMBROIDERY_XS",
        weight: "320g",
        price: 10,
        shipping: {
          fastUS: { fee: 10.76, total: 20.76, days: "4-9 business days" },
          tiktokUK: { fee: 9.27, total: 19.27 },
          shipByTiktokUS: { fee: 5.84, total: 15.84 },
          nonShip: { fee: 0, total: 10 },
          epacketUS: { fee: 9.36, total: 19.36, days: "7-12 business days" },
          shippingOutsideUS: { fee: 15.1, total: 25.1 },
          shippingToUK: { fee: 12.75, total: 22.75 },
          shippingToCA: { fee: 13.5, total: 23.5 },
        },
      },
      {
        size: "S",
        sku: "SW_Y_EMBROIDERY_S",
        weight: "350g",
        price: 10,
        shipping: {
          fastUS: { fee: 11.29, total: 21.29, days: "4-9 business days" },
          tiktokUK: { fee: 9.78, total: 19.78 },
          shipByTiktokUS: { fee: 6.57, total: 16.57 },
          nonShip: { fee: 0, total: 10 },
          epacketUS: { fee: 9.9, total: 19.9, days: "7-12 business days" },
          shippingOutsideUS: { fee: 15.53, total: 25.53 },
          shippingToUK: { fee: 13.37, total: 23.37 },
          shippingToCA: { fee: 13.89, total: 23.89 },
        },
      },
      {
        size: "M",
        sku: "SW_Y_EMBROIDERY_M",
        weight: "370g",
        price: 10,
        shipping: {
          fastUS: { fee: 11.29, total: 21.29, days: "4-9 business days" },
          tiktokUK: { fee: 9.78, total: 19.78 },
          shipByTiktokUS: { fee: 6.57, total: 16.57 },
          nonShip: { fee: 0, total: 10 },
          epacketUS: { fee: 9.9, total: 19.9, days: "7-12 business days" },
          shippingOutsideUS: { fee: 15.53, total: 25.53 },
          shippingToUK: { fee: 13.37, total: 23.37 },
          shippingToCA: { fee: 13.89, total: 23.89 },
        },
      },
      {
        size: "L",
        sku: "SW_Y_EMBROIDERY_L",
        weight: "395g",
        price: 10,
        shipping: {
          fastUS: { fee: 11.29, total: 21.29, days: "4-9 business days" },
          tiktokUK: { fee: 9.78, total: 19.78 },
          shipByTiktokUS: { fee: 6.57, total: 16.57 },
          nonShip: { fee: 0, total: 10 },
          epacketUS: { fee: 9.9, total: 19.9, days: "7-12 business days" },
          shippingOutsideUS: { fee: 15.53, total: 25.53 },
          shippingToUK: { fee: 13.37, total: 23.37 },
          shippingToCA: { fee: 13.89, total: 23.89 },
        },
      },
      {
        size: "XL",
        sku: "SW_Y_EMBROIDERY_XL",
        weight: "420g",
        price: 10,
        shipping: {
          fastUS: { fee: 11.81, total: 21.81, days: "4-9 business days" },
          tiktokUK: { fee: 10.81, total: 20.81 },
          shipByTiktokUS: { fee: 7.37, total: 17.37 },
          nonShip: { fee: 0, total: 10 },
          epacketUS: { fee: 10.44, total: 20.44, days: "7-12 business days" },
          shippingOutsideUS: { fee: 17.25, total: 27.25 },
          shippingToUK: { fee: 13.84, total: 23.84 },
          shippingToCA: { fee: 15.53, total: 25.53 },
        },
      },
    ],
    imageDescription: "/images/1773937640764_01 HOODIE YOUHT.jpg",
  },
  {
    id: 20,
    name: "Quarter zip Embroidery",
    images: ["/images/1773937393137_z7636720731729_213c7965c4d1882236c6505e91009dde.jpg"],
    productCode: "P087",
    sku: "Qua_zip_Embroidery",
    material: "COTTON",
    category: "SẢN PHẨM THÊU (EMBROIDERY)",
    printPositions: ["CENTER CHEST", "None", "ALL OVER PRINT", "Left Chest", "Right Chest", "Left side bowl", "Right side bowl", "Back", "Neck", "Left Sleeve", "Right Sleeve", "Right Sleeve"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    colors: [
      { label: "Black", hex: "#2e3b4a" },
      { label: "Navy", hex: "#0d487c" },
      { label: "Sand", hex: "#d4b7a2" },
      { label: "White", hex: "#ffffff" },
      { label: "Light_bue", hex: "#45a0ff" },
      { label: "Sport_Grey", hex: "#6c8486" },
      { label: "begi", hex: "#e8d0bf" },
      { label: "forest_green", hex: "#09975f" },
      { label: "carolia_blue", hex: "#45a0ff" },
      { label: "MARRON", hex: "#ff0000" },
      { label: "chocolate", hex: "#866329" },
      { label: "miltary_green", hex: "#0daf84" },
      { label: "ASH", hex: "#53672d" },
      { label: "pink", hex: "#cc5cb3" },
      { label: "Grey", hex: "#6c8486" },
      { label: "brown", hex: "#9d553d" },
      { label: "orange", hex: "#e89402" },
    ],
    variations: [
      {
        size: "S",
        sku: "Qua_zip_Embroidery_S",
        weight: "510g",
        price: 11.5,
        shipping: {
          fastUS: { fee: 14.83, total: 26.33, days: "4-9 business days" },
          tiktokUK: { fee: 12.26, total: 23.76 },
          shipByTiktokUS: { fee: 8.52, total: 20.02 },
          nonShip: { fee: 0, total: 11.5 },
          epacketUS: { fee: 12.73, total: 24.23, days: "7-12 business days" },
          shippingOutsideUS: { fee: 21.96, total: 33.46 },
          shippingToUK: { fee: 15.18, total: 26.68 },
          shippingToCA: { fee: 20.99, total: 32.49 },
        },
      },
      {
        size: "M",
        sku: "Qua_zip_Embroidery_M",
        weight: "560g",
        price: 11.5,
        shipping: {
          fastUS: { fee: 15.36, total: 26.86, days: "4-9 business days" },
          tiktokUK: { fee: 12.77, total: 24.27 },
          shipByTiktokUS: { fee: 9.08, total: 20.58 },
          nonShip: { fee: 0, total: 11.5 },
          epacketUS: { fee: 13.26, total: 24.76, days: "7-12 business days" },
          shippingOutsideUS: { fee: 22.49, total: 33.99 },
          shippingToUK: { fee: 15.73, total: 27.23 },
          shippingToCA: { fee: 25.46, total: 36.96 },
        },
      },
      {
        size: "L",
        sku: "Qua_zip_Embroidery_L",
        weight: "595g",
        price: 11.5,
        shipping: {
          fastUS: { fee: 15.36, total: 26.86, days: "4-9 business days" },
          tiktokUK: { fee: 12.77, total: 24.27 },
          shipByTiktokUS: { fee: 9.08, total: 20.58 },
          nonShip: { fee: 0, total: 11.5 },
          epacketUS: { fee: 13.26, total: 24.76, days: "7-12 business days" },
          shippingOutsideUS: { fee: 22.49, total: 33.99 },
          shippingToUK: { fee: 15.73, total: 27.23 },
          shippingToCA: { fee: 25.46, total: 36.96 },
        },
      },
      {
        size: "XL",
        sku: "Qua_zip_Embroidery_XL",
        weight: "630g",
        price: 11.5,
        shipping: {
          fastUS: { fee: 15.89, total: 27.39, days: "4-9 business days" },
          tiktokUK: { fee: 13.74, total: 25.24 },
          shipByTiktokUS: { fee: 9.67, total: 21.17 },
          nonShip: { fee: 0, total: 11.5 },
          epacketUS: { fee: 13.8, total: 25.3, days: "7-12 business days" },
          shippingOutsideUS: { fee: 26.67, total: 38.17 },
          shippingToUK: { fee: 16.27, total: 27.77 },
          shippingToCA: { fee: 25.46, total: 36.96 },
        },
      },
      {
        size: "2XL",
        sku: "Qua_zip_Embroidery_2XL",
        weight: "685g",
        price: 12.5,
        shipping: {
          fastUS: { fee: 16.4, total: 28.9, days: "4-9 business days" },
          tiktokUK: { fee: 14.33, total: 26.83 },
          shipByTiktokUS: { fee: 10.33, total: 22.83 },
          nonShip: { fee: 0, total: 12.5 },
          epacketUS: { fee: 14.34, total: 26.84, days: "7-12 business days" },
          shippingOutsideUS: { fee: 27.84, total: 40.34 },
          shippingToUK: { fee: 16.67, total: 29.17 },
          shippingToCA: { fee: 26.59, total: 39.09 },
        },
      },
      {
        size: "3XL",
        sku: "Qua_zip_Embroidery_3XL",
        weight: "695g",
        price: 12.5,
        shipping: {
          fastUS: { fee: 16.4, total: 28.9, days: "4-9 business days" },
          tiktokUK: { fee: 14.33, total: 26.83 },
          shipByTiktokUS: { fee: 10.33, total: 22.83 },
          nonShip: { fee: 0, total: 12.5 },
          epacketUS: { fee: 14.34, total: 26.84, days: "7-12 business days" },
          shippingOutsideUS: { fee: 27.84, total: 40.34 },
          shippingToUK: { fee: 16.67, total: 29.17 },
          shippingToCA: { fee: 26.59, total: 39.09 },
        },
      },
      {
        size: "4XL",
        sku: "Qua_zip_Embroidery_4XL",
        weight: "736g",
        price: 12.5,
        shipping: {
          fastUS: { fee: 16.92, total: 29.42, days: "4-9 business days" },
          tiktokUK: { fee: 15.11, total: 27.61 },
          shipByTiktokUS: { fee: 10.81, total: 23.31 },
          nonShip: { fee: 0, total: 12.5 },
          epacketUS: { fee: 14.89, total: 27.38, days: "7-12 business days" },
          shippingOutsideUS: { fee: 28.63, total: 41.13 },
          shippingToUK: { fee: 16.98, total: 29.48 },
          shippingToCA: { fee: 27.34, total: 39.84 },
        },
      },
      {
        size: "5XL",
        sku: "Qua_zip_Embroidery_5XL",
        weight: "774g",
        price: 12.5,
        shipping: {
          fastUS: { fee: 17.46, total: 29.96, days: "4-9 business days" },
          tiktokUK: { fee: 15.89, total: 28.39 },
          shipByTiktokUS: { fee: 11.58, total: 24.08 },
          nonShip: { fee: 0, total: 12.5 },
          epacketUS: { fee: 15.43, total: 27.93, days: "7-12 business days" },
          shippingOutsideUS: { fee: 29.22, total: 41.72 },
          shippingToUK: { fee: 17.76, total: 30.26 },
          shippingToCA: { fee: 27.89, total: 40.39 },
        },
      },
    ],
    imageDescription: "/images/1773937405252_01 Quarter Zip.jpg",
  },
];