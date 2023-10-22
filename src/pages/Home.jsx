import cardImage from "../images/Rectangle 2.png";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { HiMiniHomeModern } from "react-icons/hi2";
import { FaMoneyBill } from "react-icons/fa";
import { useState } from "react";
import Chart from "../components/Chart";
import { useAuth } from "../hooks/auth/auth";
import {
  useExpenses,
  useIncome,
  totalExpenses,
  totalIncome,
} from "../functions";
const Home = () => {

  const {username , logout} = useAuth()
  const { expensesData } = useExpenses();
  const incomeData = useIncome();


  const navigate = useNavigate();

  let totalExpense = totalExpenses(expensesData);
  let totalIncomes = totalIncome(incomeData);
  const totalBal = totalIncomes - totalExpense;

  const Logout = () => {
    auth.logout();
    navigate("/");
  };

  const expenseDatas = expensesData?.data.map((expense) => {
    return (
      <div
        className=" shadow-custom-gray shadow-sm p-5 rounded-2xl  md:w-[90%] w-full  flex flex-row justify-between items-center h-fit "
        key={expense._id}
      >
        <div>
          <div className="rgb-add rounded-full p-3 w-12 inline-block align-middle">
            {expense.category == "Food" ? (
              <FaHamburger className="w-10 text-2xl" />
            ) : expense.category == "Travel" ? (
              <PiAirplaneTiltFill className="w-10 text-2xl" />
            ) : expense.category == "School" ? (
              <FaSchool className="w-10 text-2xl" />
            ) : expense.category == "Home" ? (
              <HiMiniHomeModern className="w-10 text-2xl" />
            ) : expense.category == "Bills" ? (
              <FaMoneyBill className="w-10 text-2xl" />
            ) : expense.category == " Entertainment" ? (
              <BiSolidCameraMovie className="w-10 text-2xl" />
            ) : (
              ""
            )}
          </div>
          <div className="inline-block align-middle ms-2">
            <p className="font-extrabold" id="category">
              {expense.category}
            </p>
          </div>
        </div>
        <div className="text-end">
          <p className="font-semibold">-{expense.expense}</p>
          <span className="text-end font-normal text-sm text-secondary">
            {new Date(expense.date).toLocaleDateString()}
          </span>
        </div>
      </div>
    );
  });

  const [userData, setUserData] = useState({
    labels: expensesData?.data
      ? expensesData.data.map((expense) => expense.category)
      : [],
    datasets: [
      {
        label: "Expenses",
        data: expensesData?.data.map((expense) => expense.expense),
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgb(227, 131, 60)");
          gradient.addColorStop(0.8, "rgb(227, 60, 60)");
          gradient.addColorStop(0.5, "rgb(227, 131, 60)");
          return gradient;
        },
        barThickness: 10,
        borderRadius: 5,
        borderWidth: 0,
        borderSkipped: false,
        hoverBackgroundColor: "hsla(186, 34%, 60%, 1)",
        hoverBorderColor: "white",
      },
    ],
  });

  const options = {
    type: "bar",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "Quicksand",
          },
        },
        border: {
          color: "transparent",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          font: {
            family: "Quicksand",
          },
        },
        border: {
          color: `transparent`,
        },
        borderWidth: 0,
      },
    },
    plugins: {
      tooltip: {
        bodyFont: {
          family: "Quicksand",
        },
      },
    },
  };

  return (
    <div className="min-h-screen  text-white mb-[5rem]">
      <main className="flex flex-col gap-4 md:w-[75%] lg:w-[90%] m-auto">
        <section className="mt-5 p-5 md:p-0">
          <div className="flex flex-row justify-between md:w-4/5 md:m-auto">
            <div>
              <img
                className="inline-block align-middle me-2"
                src={cardImage}
                alt=""
              />

              <div className="inline-block align-middle">
                <p className="text-sm text-custom-yellow font-extrabold">
                  Welcome!
                </p>
                <h2 className="inline-block font-bold">{username}</h2>
              </div>
            </div>
            <button
              className="bg-add-linear-2 px-3 py-1 text-white rounded-full"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </section>
        <div className="p-8 grid lg:grid-cols-4 grid-flow-dense gap-8 grid-cols-1 place-content-center place-items-center">
          <section className="profile-section grid grid-cols-1   gap-4 lg:col-span-3 w-full lg:w-[80%]">
            <div className="c-card p-5 rounded-3xl text-white flex flex-col gap-5 h-52 lg:w-[100%] lg:h-[40vh] w-full">
              <div className="text-center leading-8 md:leading-10">
                <p className="font-extrabold md:text-2xl md:mb-4">
                  Total Balance
                </p>
                <h2 className="text-2xl font-extrabold md:text-4xl">
                  ${totalBal}
                </h2>
              </div>
              <div className="flex flex- justify-between w-[90%] m-auto">
                <div>
                  <MdKeyboardArrowUp className="text-[2rem] text-green-400 bg-[#00000041]  h-10 inline-block rounded-md" />
                  <div className="inline-block align-middle ms-2">
                    <p className="text-sm text-white font-semibold md:text-lg">
                      Income
                    </p>
                    <h2 className="inline-block font-bold" id="monthly-income">
                      ${totalIncomes}
                    </h2>
                  </div>
                </div>
                <div>
                  <MdKeyboardArrowDown className="text-[2rem] text-red-400 bg-[#00000041]  h-10 inline-block rounded-md" />

                  <div className="inline-block align-middle ms-2">
                    <p className="text-sm text-white font-semibold md:text-lg">
                      Expenses
                    </p>
                    <h2 className="inline-block font-bold" id="expenses">
                      {totalExpense !== " " ? `$${totalExpense}` : 0}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Chart ChartData={userData} ChartOption={options} />

          <section className="transaction-section  min-h-[40vh] overflow-y-auto lg:row-start-2  lg:col-span-3  row-start-2 col-span-1 c-card   rounded-2xl w-full lg:w-[80%] p-5">
            <div className="flex flex-row justify-between mb-3 md:mb-5  md:m-auto w-full ">
              <div>
                <h2 className="text-lg font-extrabold">
                  <i className="fa-solid fa-receipt text-violet-500 fa-lg"></i>
                  Transaction
                </h2>
              </div>
              <div>
                <Link
                  className="text-custom-yellow font-semibold "
                  to="expenseList"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 h-[15vh] lg:w-[50rem] md:m-auto md:h-[25vh] w-full">
              {expenseDatas}
            </div>
          </section>
        </div>
      </main>
      <div className="fixed bottom-0 bg-black p-3 left-0 right-0 text-center text-custom-yellow block md:hidden z-50">
        <i className="fa-regular fa-chart-bar"></i>
        <button id="chart-btn-toggler">Open Expense Chart</button>
      </div>
    </div>
  );
};

export default Home;
