import { useEffect, useState } from 'react';

import { userInfoProps } from '@/hooks/useInputs';

const useValid = (changeValue: userInfoProps) => {
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
  });

  // 이메일 유효성 검사
  useEffect(() => {
    const timer = setTimeout(() => {
      const emailRegex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
      emailRegex.test(changeValue.email)
        ? setIsValid({ ...isValid, isEmail: true })
        : setIsValid({ ...isValid, isEmail: false });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [changeValue.email]);

  // 패스워드 유효성 검사
  useEffect(() => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
    passwordRegex.test(changeValue.password)
      ? setIsValid({ ...isValid, isPassword: true })
      : setIsValid({ ...isValid, isPassword: false });
  }, [changeValue.password]);

  return { isValid };
};

export default useValid;
