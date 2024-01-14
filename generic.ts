/**
 * 제네릭은 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미하며, 재사용성이 높은 컴포넌트를 만들 때 자주 활용된다.
 * 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용된다.
 */

function getText<T>(text: T): T {
  return text;
}

getText<string>("hi");
getText<number>(10);
getText<boolean>(true);

/**
 * getText<string>("hi")를 호출했을 때 함수에서 제네릭은 다음과 같이 동작한다.
 *
 * function getText<string>(text: string): string {
 *      return text;
 * }
 */

/** number를 담는 배열, string을 담는 배열 두 가지가 있을 때 배열의 map 메소드를 사용하게 되면
 * number 배열의 map 메소드 파라미터는 number, string 배열의 map 메소드 파라미터는 string이다.
 * (vsc에서 map, num, name 위에 마우스를 호버 하면 확인 가능)
 **/
const shoeSizes: number[] = [230, 250, 280];
shoeSizes.map((num) => {});

const clothingSizes: string[] = ["M", "L", "XL"];
clothingSizes.map((name) => {});

/**
 * 특정한 타입으로 고정시키는 것이 아니라,
 * 꺾쇠 안에 임의의 타입을 정의해 두고 그때그때 다른 타입을 넣어 사용할 수 있는 것을 제네릭이라고 한다.
 */

function printArray<T>(items: T[]) {
  // <T>가 타입을 받아오는 매개변수로 동작한다.
  for (const item of items) {
    console.log(item);
  }
}

// 함수를 사용할 때 인자로 전달하는 값이 무엇인지에 따라 <T>가 추론된다.
printArray(shoeSizes); // T === number
printArray(clothingSizes); // T === string

// 꺾쇠를 이용해 직접 타입파라미터를 정의해줄 수 있다.
printArray<boolean>(shoeSizes);

/**
 * interface에서도 타입파라미터를 사용할 수 있다.
 */
interface SizeProduct<T> extends Product {
  sizes: T[];
}

enum ClothingSize {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

type ClothingProduct = SizeProduct<ClothingSize>;

/**
 * Type 별칭에서도 타입파라미터를 사용할 수 있다.
 */
type Pair<T> = [T, T];
const point: Pair<number> = [1, 2];
const fullname: Pair<string> = ["김", "코드잇"];

// map 자료구조
const map = new Map<string, Product>();
map.get();

/**
 * 타입파라미터는 대문자 T, V, U를 사용하는 것이 일반적이지만 어떤 이름이던지 사용할 수 있다.
 * 긴 이름을 적을 수도 있지만, 임의의 타입을 뜻하는 타입파라미터인지 어딘가에 정의되어있는 타입인지 알 수 없다.
 * 따라서 구분을 위해서 TItem와 같이 T 접두사를 사용해준다.
 */
