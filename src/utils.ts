const pwdRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegExp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

export const testPwd = (pwd?: string) => {
  if (pwd) {
    if (pwdRegExp.test(pwd)) return true;
    return false;
  }
  return false;
};

export const testEmail = (email?: string) => {
  if (email) {
    if (emailRegExp.test(email)) return true;
    return false;
  }
  return false;
};

export const testPhone = (phone?: string) => {
  if (phone) {
    if (phoneRegExp.test(phone)) return true;
    return false;
  }
  return false;
};
