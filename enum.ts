// enum Size {
//   S = "S",
//   M = "M",
//   L = "L",
//   XL = "XL",
// }

console.log(Size.S); // S
console.log(Size.M); // M
console.log(Size.L); // L
console.log(Size.XL); // XL

function findProduct(size?: Size) {
  if (!size) {
    console.log("전체 사이즈로 검색");
    return;
  }

  console.log("특정 사이즈로 검색");
  return;
}

findProduct(); // "전체 사이즈로 검색"
findProduct(Size.S); // "전체 사이즈로 검색"
