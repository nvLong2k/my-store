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
      { label: "Duck_camo",     hex: "#4a5240" },
      { label: "camo_maroon",   hex: "#6b3a3a" },
      { label: "Navy_Grey",     hex: "#2d3a5e" },
      { label: "Camo_white",    hex: "#c8c5b0" },
      { label: "Pink_White",    hex: "#e8a0b0" },
      { label: "camo_colorful", hex: "#5a7a4a" },
      { label: "Beige_black",   hex: "#c4ae8a" },
      { label: "Pink_white",    hex: "#d46080" },
      { label: "Navy",          hex: "#1a2a4e" },
    ],
    variations: [
      {
        size: "onesize",
        sku: "ESC_ONESIZE",
        weight: "210g",
        price: 6.5,
        shipping: {
          fastUS:         { fee: 8.86, total: 15.36, days: "4-9 business days" },
          tiktokUK:       { fee: 7.57, total: 14.07 },
          shipByTiktokUS: { fee: 5.1,  total: 11.6  },
          nonShip:        { fee: 0,    total: 6.5   },
          epacketUS:      { fee: 7.93, total: 14.43, days: "7-12 business days" },
          shippingOutsideUS: { fee: 14.31, total: 20.81 },
          shippingToUK: { fee: 10.55, total: 17.05 },
          shippingToCA: { fee: 12.75, total: 19.25 },
        },
      },
    ],
  },
];