type ResponseUserData = {
  // TODO-YD: admin 계정의 auth 가 어떻게 내려오는지 확인 후 추가예정
  auth: 'USER' | 'SELLER' | '';
  exp: number;
  iat: number;
  sub: string;
};

export const parseJwt = (token: string): ResponseUserData => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};
