import { ReactNode, createContext, useContext, useState } from "react";

type Locale = "ko" | "en";

// createContext 할 때 초기값으로 타입이 제대로 추론되지 않는다면
// context의 값에 맞는 interface를 만들어준다.
interface LocaleContextValue {
  locale: Locale;
  setLocale: (value: Locale) => void;
}

// 제네릭을 사용하지 않으면 setLocale의 타입 추론이 원하는대로 나오지 않는다.
const LocaleContext = createContext<LocaleContextValue>({
  locale: "ko",
  setLocale: () => {},
});

export function LocaleContextProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ko");

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

const dict = {
  ko: {
    signin: "로그인",
    username: "아이디",
    "email or phone number": "Email 또는 전화번호",
    password: "비밀번호",
    "forgot your password?": "비밀번호를 잊으셨나요?",
    "new user?": "회원이 아니신가요?",
    signup: "가입하기",
  },
  en: {
    signin: "Signin",
    username: "Username",
    "email or phone number": "Email or phone number",
    password: "Password",
    "forgot your password?": "Forgot your password?",
    "new user?": "New user?",
    signup: "Signup",
  },
};

function useLocale() {
  const { locale } = useContext(LocaleContext);
  return locale;
}

export function useSetLocale() {
  const { setLocale } = useContext(LocaleContext);
  return setLocale;
}

export function useTranslate() {
  const locale = useLocale();
  // key는 dict[Locale]의 타입에서 key를 유니온 타입으로 가져온다.
  const t = (key: keyof (typeof dict)[Locale]) => dict[locale][key];
  return t;
}
