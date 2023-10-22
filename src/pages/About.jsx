
const About = () => {
  return (
    <div className="min-h-screen  ">
      <main className="flex flex-col w-full md:w-[75%] lg:w-4/5 m-auto overscroll-y-auto h-[80vh] ">
        <div className="  bg-[#0000002b] h-[50vh] relative z-0 bg-no-repeat bg-cover ">
          <div className="p-5">
            <h2 className=" text-2xl md:text-4xl text-white font-semibold text-end">
              About Expense Tracker
            </h2>
          </div>
          <div className=" absolute top-0">

          </div>
        </div>
        <div className=" bg-[#0000002b] text-white  z-0 rounded-sm overflow-y-auto grid grid-cols-1 md:gap-10 place-content-between lg:grid-cols-2  ">
          <div className="p-5 mb-40 md:mb-0 ">
            <h2 className="mb-5 text-lg font-semibold align-middle  ">   Basic Functionalities Can Do</h2>
            <div className=" grid-cols-1 lg:grid-cols-2 grid gap-5 md:grid-cols-2 ">
              <div className="p-5 bg-orange-500 text-center text-white rounded-sm ">
                <p className="font-extrabold">Can Add | Delete Reminders</p>
              </div>
              <div className="p-5 bg-blue-500 text-center text-white rounded-sm ">
                <p className="font-extrabold">Can Add | Delete Expenses</p>
              </div>
              <div className="p-5 bg-yellow-500 text-center text-white rounded-sm ">
                <p className="font-extrabold">Calculate  Expenses</p>
              </div>
              <div className="p-5 bg-blue-700 text-center text-white rounded-sm ">
                <p className="font-extrabold">Calculate  Income</p>
              </div>
              <div className="p-5 bg-pink-400 text-center text-white rounded-sm ">
                <p className="font-extrabold">Calculate Your Total Balance</p>
              </div>
              <div className="p-5 bg-blue-400 text-center text-white rounded-sm ">
                <p className="font-extrabold">Update if Your Balance is 0</p>
              </div>
              <div className="p-5 bg-blue-300 text-center text-white rounded-sm ">
                <p className="font-extrabold">Update</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly md:gap-6 p-5 gap-0 order-first mb-44 md:mb-0 h-full">
            <div>
              <h2 className="text-2xl text-custom-yellow font-semibold">
                Expense Tracker V1
              </h2>
              <p className="font-semibold">
                Fast | Amazing UI | Secured
              </p>
            </div>
            <div>
              <p className="font-normal leading-6">
              Introducing our cutting-edge Expense Tracker web app! Empower yourself with effortless financial management. Track, categorize, and analyze your expenses seamlessly, ensuring a crystal-clear overview of your spending habits. Take control of your finances with our user-friendly platform, designed to simplify your budgeting and help you achieve your financial goals.
              </p>
            </div>
            <div>
              <button className="rgb-add text-white rounded-md p-3 w-full">
                Read More
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default About;
