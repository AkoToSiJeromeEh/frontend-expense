import Axios from "axios";
const fetchExpenseList = () => {
    return Axios.get("https://expensetracker-api-yy05.onrender.com/api/expenses/expenses");
};

const fetchReminderList = () => {
    return Axios.get("https://expensetracker-api-yy05.onrender.com/api/reminders");
};

const fetchIncome = () => {

     return Axios.get("https://expensetracker-api-yy05.onrender.com/api/incomes")
}


export {fetchExpenseList , fetchReminderList , fetchIncome  }
