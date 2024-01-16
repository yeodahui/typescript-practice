import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import { useSetLocale, useTranslate } from "./translate";

function App() {
  // useState에서는 기본적으로 초깃값으로 타입 추론이 잘 되지만,
  // 타입 추론이 잘 안 될때는 제네릭으로 타입을 지정해줄 수 있다.
  // 예) const [value, setValues] = useState<string[]>([])
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // useRef는 대상이 되는 DOM 노드를 제네릭으로 타입 지정을 해 준다.
  // 초기값이 undefined이면 HTML의 ref로 사용하기엔 타입이 맞지 않기 때문에,
  // 초기값으로 null을 할당한다.
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslate();
  const setLocale = useSetLocale();

  useEffect(() => {
    const form: any = formRef.current;
    if (form) form["username"].focus();
  }, []);

  // 이벤트 타입을 지정해주지 않으면 이벤트 객체의 속성에 접근할 때 에러가 발생한다.
  // 주의: 타입 지정하며 자동완성을 사용할 때 React가 제공하는 타입이 맞는지 확인한다.
  // 제네릭으로 target의 타입을 지정해줄 수 있다.
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const nextValues = {
      ...values,
      [name]: value,
    };
    setValues(nextValues);
  }

  // 딱히 이벤트 target을 사용하고 있지 않아서 제네릭 타입을 구체적으로 지정하지 않아도 된다면,
  // 제네릭을 사용하지 않고 이벤트 타입만 정해주어도 된다.
  function handleClick(e: MouseEvent) {
    e.preventDefault();

    const message = `${values.username}님 환영합니다`;
    alert(message);
  }

  return (
    <form className="login" ref={formRef as any}>
      <h1 className="login-title">{t("signin")}</h1>
      <Label>{t("username")}</Label>
      <Input
        id="username"
        name="username"
        type="text"
        placeholder={t("email or phone number")}
        value={values.username}
        onChange={handleChange}
      />
      <Label>{t("password")}</Label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder={t("password")}
        value={values.password}
        onChange={handleChange}
      />
      <div className="login-forgot">
        <a className="login-forgot-link" href="#login">
          {t("forgot your password?")}
        </a>
      </div>
      <Button id="submit" onClick={handleClick}>
        {t("signin")}
      </Button>
      <div className="login-signup">
        {t("new user?")}{" "}
        <a className="login-signup-link" href="#signup">
          {t("signup")}
        </a>
      </div>
      <div className="locale">
        <span onClick={() => setLocale("ko")}>한국어</span> |{" "}
        <span onClick={() => setLocale("en")}>English</span>
      </div>
    </form>
  );
}

export default App;
