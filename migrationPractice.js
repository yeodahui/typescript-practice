const usernameInput = document.getElementById("username");
const submitButton = document.getElementById("submit");

usernameInput.focus();
submitButton.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  const message = `${usernameInput.value}님 반갑습니다.`;
  alert(message);
}
