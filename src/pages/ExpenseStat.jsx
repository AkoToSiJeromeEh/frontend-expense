
import { LuGanttChart } from 'react-icons/lu'
import { useState, useEffect } from 'react';
import { PiPercentLight } from 'react-icons/pi'
import Card from '../components/Card';
import { useExpenses, useIncome, totalExpenses, totalIncome } from "../functions";

const ExpenseStat = () => {

  const { expensesData } = useExpenses();
  const incomeData = useIncome();

  let totalExpense = totalExpenses(expensesData)
  let totalIncomes = totalIncome(incomeData)

  const [progress, setProgress] = useState();
  const [currentBal, setCurrentBal] = useState();

  const progressBar = () => {


    let newProgress = ((totalExpense / totalIncomes) * 100).toFixed(0);
    let newCurrentBalance = totalIncomes - totalExpense;
    setCurrentBal(newCurrentBalance);
    setProgress(newProgress);

  }
  useEffect(() => {

    progressBar();
  }, [totalIncomes, totalExpense])




  return (
    <div className=" min-h-screen text-white mb-[5rem]">
      <main className="p-5 flex flex-col gap-2 md:w-4/5 md:m-auto">
        <div className="mb-3">
          <LuGanttChart className='inline-block text-custom-yellow text-2xl me-2' />
          <h2 className="text-2xl font-semibold text-start inline-block align-middle">Expense Statistics</h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="p-10 rounded-3xl text-white flex flex-col gap-8 lg:w-[100%] h-[50vh] w-ful bg-add-gradient-3">
            <div className="text-start leading-8 md:leading-10">
              <p className="font-extrabold md:text-2xl md:mb-4">
                Monthly Income Balance
              </p>
              <h2
                className="text-2xl font-extrabold md:text-4xl"
                id="total-bal"
              >${currentBal}  
              </h2>
            </div>
            <div className=" p-1 bg-stone-950 shadow-md shadow-white rounded-full overflow-hidden ">
              <div
                className="bg-add-grad p-1 rounded-full   "
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p id='warning-error' className='font-bold text-lg' style={{ color: progress >= 50 ? '#FF0000' : '#03C988' }}>{progress} <PiPercentLight className='text-2xl inline-block' /> of your balance is  deducted {progress >= 100 ? 'Poor guy' : ' '}</p>
            <div className="justify-self-center">

              <ul className="flex flex-row gap-6  tracking-[0.8rem] md:text-sm md:justify-around ">
                <li className="text-lg">****</li>
                <li className="text-lg">****</li>
                <li className="text-lg">402</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-4 md:grid-cols-1">
            <div className="flex flex-col gap-10 c-card   rounded-md p-5">
              <div>
                <h2 className="text-2xl font-semibold text-white ">Top Spending</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 h-[15vh] lg:w-full md:m-auto md:h-[25vh] w-full overflow-y-auto place-content-start">
                {
                  expensesData?.data.map((expenses) => {
                      
                    return ( 

                         expenses.expense > 500 ? <div key={expenses._id}>
                          <Card expense={expenses.expense} category={expenses.category} date={expenses.date} />
                         </div> : null
                    )
                  })
                }
              </div>
            </div>
          </div>
          </div>
      </main >
    </div >
  );
};

export default ExpenseStat;
