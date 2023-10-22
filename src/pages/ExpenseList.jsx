import Axios from "axios";
import React from 'react';
import { FaRegLightbulb } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import RemindList from "../components/RemindList";
import ToggleState from "../hooks/ToggleState";
import {useExpenses , useReminder} from '../functions'
import Expense from "../components/Expense";
import Successmess from '../components/Sucessmess'


const ExpenseList = () => {
  const [reminderDelete, setReminderDelete] = ToggleState();
  const [expenseDelete, setExpenseDelete] = ToggleState();

  const {
    expensesData,
    refetchExpenses,
  } = useExpenses();

  console.log(expensesData);

  const {
    remindersData,
    refetchReminders,
  } = useReminder();

  console.log(remindersData);

  const totalExpenses = expensesData?.data.reduce((totalexpense, expense) => totalexpense + expense.expense, 0)

  const deleteReminderList = async (id) => {
    await Axios.delete(
      `http://localhost:3000/api/reminders/deleteReminder/${id}`
    );
    setReminderDelete(true);
    setTimeout(() => {
      setReminderDelete(false);
      refetchReminders();
    }, 3000);
  };

  const deleteExpenseList = async (id) => {
    await Axios.delete(
      `http://localhost:3000/api/expenses/deleteExpense/${id}`
    );
    setExpenseDelete(true);
    refetchExpenses();
    setTimeout(() => {
      setExpenseDelete(false);
    }, 3000);
    console.log("Deleted");
  };


  return (
    <div className="text-white min-h-screen mb-[5rem]">
      
        <div>
          {expenseDelete && (
            <Successmess success={expenseDelete} sucessMessage='Sucessfully Deleted...'/>
          )}
          {reminderDelete && (
              <Successmess success={reminderDelete} sucessMessage='Sucessfully Deleted...'/>
          )
}

          <main className="p-5 flex flex-col gap-10 lg:w-4/5 m-auto md:w-3/4">
            <div className="grid grid-cols-1 gap-5 mt-5">
              <div>
                <BiMoneyWithdraw className="inline-block text-custom-yellow align-middle me-2 text-2xl" />
                <h2 className="text-2xl font-semibold inline-block align-middle">
                  List of Expenses
                </h2>
              </div>
              <div className="date-cont c-card p-5 rounded-md min-h-[50vh] overflow-y-scroll">
                <h2 className="text-lg mb-5 text-white font-bold">
                  ALL OF EXPENSES
                </h2>

                <div className="grid grid-cols-1 overflow-y-scroll h-[50vh] md:grid-cols-2 gap-20">
                  {expensesData?.data.map((expense) => {
                    return (
                      <div key={expense._id}>
                        <Expense
                          expense={expense.expense}
                          date={expense.date}
                          category={expense.category}
                          deleteExpense={() => deleteExpenseList(expense._id)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="fixed z-20 bottom-0 flex items-center justify-center left-0 right-0 mt-2 w-full">
                  <p className="bg-[#00000035] w-full p-5 text-white font-extrabold text-lg">
                    Total: ${totalExpenses}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <FaRegLightbulb className="inline-block text-custom-yellow align-middle me-2 text-2xl" />
                <h2 className="text-2xl font-semibold inline-block align-middle">
                  List of Reminders
                </h2>
              </div>

              <div className="c-card rounded-xl p-5 grid grid-flow-dense lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 h-[50vh] overflow-y-scroll">
                {remindersData?.data.map((reminder) => {
                  return (
                    <div key={reminder._id}>
                      <RemindList
                        title={reminder.title}
                        price={reminder.price}
                        date={reminder.date}
                        content={reminder.content}
                        deleteReminder={() => deleteReminderList(reminder._id)}
                        id={reminder._id}
                      />
                    </div>
                    
                  );
                })}
              </div>
            </div>
          </main>
        </div>
    </div>
  );

};

export default ExpenseList;
