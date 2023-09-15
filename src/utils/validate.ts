const EMAIL_REGEX = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
const TELEPHONE_REGEX = /^01[016789]\d{7,8}$/;

export const validateEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const validatePassword = (value: string) => {
  return PASSWORD_REGEX.test(value);
};

export const validatePasswordConfirm = (password1: string, password2: string) => {
  return password1 === password2;
};

export const validateEmpty = (value: string) => {
  return value.trim() !== '';
};

export const validateTelePhone = (value: string) => {
  return TELEPHONE_REGEX.test(value);
};
