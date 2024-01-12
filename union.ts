// 유니온 타입 추론
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

// number.toString() OK
// string.toString() OK
physicist.toString(); // OK

// number.toUpperCase() X
// string.toUpperCase() OK
// physicist.toUpperCase(); // Error

// 내로잉: 유니언 타입 중 더 구체적인 타입으로 좁히는 것
let admiral: number | string;

admiral = "Grace Hoper";

admiral.toUpperCase(); // OK
// admiral.toFixed(); // Error

/* 타입 가드 */
// 1. 값 할당을 통한 내로잉
let inventor: number | string = "Hedy Lamarr";

inventor.toUpperCase(); // Ok
// inventor.toFixed(); // Error

// 2. 조건 검사를 통한 내로잉
let scientist = Math.random() > 0.5 ? "Roasalind Franklin" : 51;

if (scientist == "Rosalind Franklin") {
  scientist.toUpperCase(); // Ok
}

// scientist.toUpperCase(); // Error

// 3. typeof 검사를 통한 내로잉
let researcher = Math.random() > 0.5 ? "Roasalind Franklin" : 51;

if (typeof researcher == "string") {
  researcher.toUpperCase();
} else {
  researcher.toFixed();
}

// 삼항 연산자 활용도 가능
typeof researcher === "string"
  ? researcher.toUpperCase()
  : researcher.toFixed();

enum ClothingSize {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

// type ClothingSize = "S" | "M" | "L" | "XL";

interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface ClothingProduct extends Product {
  sizes: ClothingSize[];
  color: string;
}

type ShoeSize = 220 | 225 | 230 | 235 | 240 | 245 | 250 | 255;

interface ShoeProduct extends Product {
  sizes: number[];
  handmade: boolean;
}

function printSizes(product: ClothingProduct | ShoeProduct) {
  const availableSizes = product.sizes.join(", ");
  console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);

  // 조건 연산에서 in을 활용해 객체 내에 속성이 있는지 확인 후 접근할 수도 있다.
  if ("color" in product) {
    console.log(`색상: ${product.color}`);
  }
  if ("handmade" in product) {
    console.log(
      product.handmade === true
        ? "이 상품은 장인이 직접 만듭니다."
        : "이 상품은 공장에서 만들어졌습니다."
    );
  }
}
