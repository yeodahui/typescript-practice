enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  membersOnly?: boolean;
}

interface ClothingProduct extends Product {
  sizes: Size[];
}

const product1: ClothingProduct = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129000,
  membersOnly: true,
  sizes: [Size.M, Size.L],
};

const product2: ClothingProduct = {
  id: "c002",
  name: "코드잇 그레이 후드 집업",
  price: 129000,
  membersOnly: true,
  sizes: [Size.M, Size.L],
};

interface PrintProductFunction {
  (product: Product): void;
}

const printProduct: PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};

printProduct(product1);
printProduct(product2);
