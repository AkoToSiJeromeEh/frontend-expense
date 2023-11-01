import { useQuery } from "react-query";
import { fetchExpenseList , fetchReminderList , fetchIncome } from '../service';

const useExpenses = () => {
	const {
	  data: expensesData,
	  isLoading: isExpensesLoading,
	  isFetching: isExpensesFetching,
	  refetch: refetchExpenses,
	} = useQuery(["expenses"], fetchExpenseList, {
		
	});

	
	return { expensesData, isExpensesFetching, refetchExpenses, isExpensesLoading };
  };
  
  const useReminder = () => {
	const {
	  isLoading: isRemindersLoading,
	  data: remindersData,
	  isFetching: isRemindersFetching,
	  refetch: refetchReminders,
	} = useQuery(["reminders"], fetchReminderList, {

	});

	return {remindersData , isRemindersFetching , refetchReminders , isRemindersLoading}
  }
  
  const useIncome = () => {
	const {
	  data: incomeData,
	  refetch: refetchIncome
	} = useQuery(["incomes"], fetchIncome, {

	});

  
	return {incomeData , refetchIncome}  
  }
  



  const totalExpenses = (expensesData) => {

		const totalExpenses = expensesData?.data.reduce(
		(totalexpense, expense) => totalexpense + expense.expense,
		0
	  );
	  return totalExpenses
  }
  const totalIncome = (incomeData) => {

	const totalIncome = incomeData?.data.reduce((totalIncome , income) => totalIncome + income.income , 0);

  return totalIncome
}


export { useExpenses , useReminder , useIncome , totalExpenses , totalIncome };
