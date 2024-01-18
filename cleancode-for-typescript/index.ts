// 출처: https://github.com/738/clean-code-typescript

// 의도를 나타내는 변수를 사용하세요
// Bad:
declare const users: Map<string, User>;

for (const keyValue of users) {
  // users 맵을 순회
}

// Good:
declare const users: Map<string, User>;

for (const [id, user] of users) {
  // users 맵을 순회
}

// 클래스/타입/객체의 이름에 의미가 담겨있다면, 변수 이름에서 반복하지 마세요.
// Bad:
type Car = {
  carMake: string;
  carModel: string;
  carColor: string;
};

function print(car: Car): void {
  console.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
}

// Good:
type Car = {
  make: string;
  model: string;
  color: string;
};

function print(car: Car): void {
  console.log(`${car.make} ${car.model} (${car.color})`);
}

// short circuiting이나 조건문 대신 기본 매개변수를 사용하세요
// Bad:
function loadPages(count?: number) {
  const loadCount = count !== undefined ? count : 10;
  // ...
}

// Good:
function loadPages(count: number = 10) {
  // 기본값을 지정
  // ...
}

// 의도를 알려주기 위해 enum을 사용하세요
// 예를 들어 그것들의 값 자체보다 값이 구별되어야 할 때와 같이 코드의 의도를 알려주는데에 enum은 도움을 줄 수 있습니다.

// Bad:
const GENRE = {
  ROMANTIC: "romantic",
  DRAMA: "drama",
  COMEDY: "comedy",
  DOCUMENTARY: "documentary",
};

projector.configureFilm(GENRE.COMEDY);

class Projector {
  // Projector의 선언
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
      // 실행되어야 하는 로직
    }
  }
}

// Good:
enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY,
}

projector.configureFilm(GENRE.COMEDY);

class Projector {
  // Projector의 선언
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
      // 실행되어야 하는 로직
    }
  }
}

// 마지막으로 읽은 곳:
// https://github.com/738/clean-code-typescript?tab=readme-ov-file#%ED%95%A8%EC%88%98
