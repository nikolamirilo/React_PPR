export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const decrement = (number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};
export const logIn = () => {
  return {
    type: "LOGIN",
  };
};
export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
