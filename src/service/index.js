import Axios from "axios";
const fetchExpenseList = () => {
    return Axios.get("https://expensetracker-api.onrender/expenses");
};

const fetchReminderList = () => {
    return Axios.get("https://expensetracker-api.onrender/api/reminders");
};

const fetchIncome = () => {

     return Axios.get("https://expensetracker-api.onrender/api/incomes")
}


export {fetchExpenseList , fetchReminderList , fetchIncome  }