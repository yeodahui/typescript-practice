// 보편적으로 사용되는 타입: HTMLElement
const usernameInput = document.getElementById("username") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;

usernameInput.focus();
submitButton.addEventListener("click", handleClick);
// addEventListener 안에서 인라인으로 핸들러를 만들면 매개변수 e에 자동으로 타입이 추론된다.
// submitButton.addEventListener("click", function (e) {
//     ...
// });

// 보편적으로 사용되는 타입: Event
function handleClick(e: MouseEvent) {
  e.preventDefault();
  const message = `${usernameInput.value}님 반갑습니다.`;
  alert(message);
}
