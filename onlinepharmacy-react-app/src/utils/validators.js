export const isEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  export const isStrongPassword = (pw) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pw);
  // at least 8 chars, letters & numbers
  
  export const isNonEmpty = (str) => str && str.trim().length > 0;
  