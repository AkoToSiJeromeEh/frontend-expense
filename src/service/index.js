import Axios from "axios";
const fetchExpenseList = () => {
    return Axios.get("http://localhost:3000/api/expenses/expenses");
};

const fetchReminderList = () => {
    return Axios.get("http://localhost:3000/api/reminders");
};

const fetchIncome = () => {

     return Axios.get("http://localhost:3000/api/incomes")
}


export {fetchExpenseList , fetchReminderList , fetchIncome  }