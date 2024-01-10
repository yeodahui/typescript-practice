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
