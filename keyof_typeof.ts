/******************* keyof *******************/

interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// Product interface의 프로퍼티 이름을 유니온타입으로 만듦
// type ProductProperty = "id" | "name" | "price" | "membersOnly";
type ProductProperty = keyof Product;

// 사용자에게 노출시킬 프로퍼티
const productTableKeys: ProductProperty[] = ["name", "price", "membersOnly"];
// 이 변수의 타입에 keyof를 바로 사용할 수도 있음
// const productTableKeys: (keyof Product)[] = ["name", "price", "membersOnly"];

const product: Product = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129000,
  salePrice: 98000,
  membersOnly: true,
};

/******************* typeof *******************/

// javascript에서는 타입을 문자열로 리턴
console.log(typeof product); // object

// : 뒤에 사용하면 typescript 문법으로 해석, 타입을 리턴(vsc hover로 확인 가능)
let product2: typeof product;
