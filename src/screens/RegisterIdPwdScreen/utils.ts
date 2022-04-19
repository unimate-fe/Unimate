const pwdRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const testPwd = (pwd?: string) => {
  if (pwd) {
    if (pwdRegExp.test(pwd)) return true;
    return false;
  }
  return false;
};
