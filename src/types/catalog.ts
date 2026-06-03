export interface ProductColor {
  label: string;
  hex: string;
}
 
export interface ShippingOption {
  fee: number;
  total: number;
  days?: string;
}
 
export interface Variation {
  size: string;
  sku: string;
  weight: string;
  price: number;
  shipping: {
    fastUS?: ShippingOption;
    tiktokUK?: ShippingOption;
    shipByTiktokUS?: ShippingOption;
    nonShip?: ShippingOption;
    epacketUS?: ShippingOption;
    shippingOutsideUS?: ShippingOption;
    shippingToUK?: ShippingOption;
    shippingToCA?: ShippingOption;
    [key: string]: ShippingOption | undefined;
  };
}
 
export interface CatalogProduct {
  id: number;
  name: string;
  images: string[];
  imageAlbum?: string[];
  productCode: string;
  sku: string;
  material: string;
  category: string;
  printPositions: string[];
  sizes: string[];
  colors: ProductColor[];
  variations: Variation[];
  imageDescription?: string;
}