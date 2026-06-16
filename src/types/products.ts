export type ColorOption = {
    label: string;
    hex: string;
};

export type BulkTier = {
    minQty: number;
    maxQty?: number;
    price?: number;
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
    headCircumference?: string;
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
    type?: string;
    imagesDesign?: string[];
};