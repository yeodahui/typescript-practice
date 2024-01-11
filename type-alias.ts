// 타입 별칭 type alias

type Cart = string[];
type CartResultCallback = (result: boolean) => void;

// 객체의 타입을 지정할 때는 interface를 사용하는 편이 좋다
// type Product = {
//     id: string;
//     name: string;
// }
interface Product {
  id: string;
  name: string;
}

const cart: Cart = ["c001", "c002", "c002"];

interface User {
  username: string;
  email: string;
  cart: Cart;
}

const user: User = {
  username: "codeit",
  email: "typescript@codtit.kr",
  cart,
};
