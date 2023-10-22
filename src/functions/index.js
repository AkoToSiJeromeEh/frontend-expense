import { useQuery } from "react-query";
import { fetchExpenseList , fetchReminderList , fetchIncome } from '../service';




const useExpenses = () => {
  const {
    data: expensesData,
    isLoading: isExpensesLoading,
    isFetching: isExpensesFetching,
    refetch: refetchExpenses,
  } = useQuery("expenses", fetchExpenseList, {
    cacheTime: 5000,
    staleTime: 30000,
  });
  
  return { expensesData, isExpensesFetching, refetchExpenses, isExpensesLoading };
};

const useReminder = () => {

	const {
		isLoading: isRemindersLoading,
		data: remindersData,
		isFetching: isRemindersFetching,
		refetch: refetchReminders,
	  } = useQuery("reminders", fetchReminderList, {
		cacheTime: 5000,
		staleTime: 30000,
	  });

	  return {remindersData , isRemindersFetching , refetchReminders , isRemindersLoading}

}

const useIncome = () => {
	const {
		data: incomeData,
	  } = useQuery("incomes", fetchIncome, {
		cacheTime: 5000,
		staleTime: 30000,
	  });

	  return incomeData  
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
