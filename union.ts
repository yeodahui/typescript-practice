/**
 * 유니온 타입
 * 값이 정확히 어떤 타입인지 모르지만 두 개 이상의 옵션 중 하나라는 것을 알고 있는 경우 사용한다.
 * |(수직선) 연산자를 사용해 나타낸다.
 */

let admiral: number | string;

admiral = "Grace Hoper";

// 타입 추론:
// physicist는 유니온 타입으로 추론된다.
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

// 값이 유니언 타입일 때, 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있다.
// number 타입과 stirng 타입 모두 .toString()메소드를 가지고 있으므로 다음과 같이 toString 메소드에 접근이 가능하다.
physicist.toString(); // OK

// string 타입은 toUpperCase() 메소드를 가지고 있으나 number는 가지고 있지 않으므로 다음과 같은 코드는 에러가 발생한다.
physicist.toUpperCase(); // Error

/**
 * 내로잉
 * 유니언 타입으로 정의된 여러 타입 중 하나의 타입으로 된 값의 속성을 사용하려면 코드에서 값이 보다 구체적인 타입(specific type) 중 하나라는 것을 타입스크립트에 알려야 한다.
 */

/* 타입 가드: 타입을 좁히는 데 사용할 수 있는 논리적 검사 */
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
