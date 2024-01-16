/* HTML 타입 */

// HTMLElement 타입
// HTML[태그이름]Element 이름으로 DOM 노드에 대한 타입을 사용할 수 있다.
const usernameInput = document.getElementById("username") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;

// 이벤트 타입
// 기본적으로 Event라는 타입을 쓸 수 있고, 구체적으로는 -Event로 끝나는 타입을 활용한다.
// 이벤트 객체의 타입에 제네릭을 사용해 target의 타입을 지정할 수 있다.
submitButton.addEventListener("click", handleClick);

function handleClick(e: MouseEvent) {
  e.preventDefault();
  const message = `${usernameInput.value}님 반갑습니다!`;
  alert(message);
}
