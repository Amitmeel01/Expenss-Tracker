// const host = "https://expense-tracker-and-budget-management.netlify.app/";
// const host = "http://localhost:8080
// ";
// const host=window.location.origin;
const host="https://expenss-tracker-kvre.vercel.app";
export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;