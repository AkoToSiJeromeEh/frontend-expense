import axios from "axios";
const token = localStorage.getItem("accessToken");
const fetchExpenseList = () => {
  return axios.get("https://expensetracker-api-yy05.onrender.com/api/expenses/expenses", {
    headers: { Authorization: `Bearer ${token ? token : null}` }
  });
};

const fetchReminderList = () => {
  return axios.get("https://expensetracker-api-yy05.onrender.com/api/reminders", {
    headers: { Authorization: `Bearer ${token ? token : null}` }
  });
};

const fetchIncome = () => {
  return axios.get("https://expensetracker-api-yy05.onrender.com/api/incomes", {
    headers: { Authorization: `Bearer ${token ? token : null}` }
  });
};

export { fetchExpenseList, fetchReminderList, fetchIncome };
