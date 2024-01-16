import { createContext, useContext, useState } from 'react';

const LocaleContext = createContext({
  locale: 'ko',
  setLocale: () => {},
} as any);

export function LocaleContextProvider({ children }: any) {
  const [locale, setLocale] = useState('ko');

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: setLocale as any,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

const dict = {
  ko: {
    signin: '로그인',
    username: '아이디',
    'email or phone number': 'Email 또는 전화번호',
    password: '비밀번호',
    'forgot your password?': '비밀번호를 잊으셨나요?',
    'new user?': '회원이 아니신가요?',
    signup: '가입하기',
  },
  en: {
    signin: 'Signin',
    username: 'Username',
    'email or phone number': 'Email or phone number',
    password: 'Password',
    'forgot your password?': 'Forgot your password?',
    'new user?': 'New user?',
    signup: 'Signup',
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

export function useTranslate(): (key: string) => string {
  const locale = useLocale();
  // @ts-ignore
  const t = (key) => dict[locale][key];
  return t;
}
