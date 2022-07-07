export interface DataTypes {
  uniqueId: string;
  id: string;
  productId: string;
  productRefId: null;
  refId: null;
  ean: string;
  name: string;
  skuName: string;
  modalType: null;
  parentItemIndex: null;
  parentAssemblyBinding: null;
  assemblies: any[];
  priceValidUntil: string;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice: null;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: {
    brandName: string;
    brandId: string;
    offeringInfo: null;
    offeringType: null;
    offeringTypeId: null;
  };
  preSaleDate: null;
  productCategoryIds: string;
  productCategories: any;
  quantity: number;
  seller: string;
  sellerChain: string[];
  imageUrl: string;
  detailUrl: string;
  components: any[];
  bundleItems: any[];
  attachments: any[];
  attachmentOfferings: any[];
  offerings: any[];
  priceTags: {
    name: string;
    value: number;
    rawValue: number;
    isPercentual: boolean;
    identifier: string;
  }[];
}

export const valores_iniciais = {
  "uniqueId": "",
  "id": "",
  "productId": "",
  "productRefId": null,
  "refId": null,
  "ean": "",
  "name": "",
  "skuName": "",
  "modalType": null,
  "parentItemIndex": null,
  "parentAssemblyBinding": null,
  "assemblies": [],
  "priceValidUntil": "",
  "tax": 0,
  "price": 0,
  "listPrice": 0,
  "manualPrice": null,
  "sellingPrice": 0,
  "rewardValue": 0,
  "isGift": false,
  "additionalInfo": {
    "brandName": "",
    "brandId": "",
    "offeringInfo": null,
    "offeringType": null,
    "offeringTypeId": null
  },
  "preSaleDate": null,
  "productCategoryIds": "",
  "productCategories": {},
  "quantity": 1,
  "seller": "1",
  "sellerChain": ["1"],
  "imageUrl": "",
  "detailUrl": "",
  "components": [],
  "bundleItems": [],
  "attachments": [],
  "attachmentOfferings": [],
  "offerings": [],
  "priceTags": [
    {
      "name": "",
      "value": 0,
      "rawValue": 0,
      "isPercentual": false,
      "identifier": ""
    }
  ],
};