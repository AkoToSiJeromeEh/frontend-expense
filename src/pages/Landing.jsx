
import cardImage from '../images/Rectangle 2.png';
const Landing = () => {
  return (
    <main className="main-container min-h-screen text-white grid grid-cols-1  p-5 text-start gap-8 relative overflow-hidden  place-content-start md:place-content-center place-items-start md:place-items-center md:text-center">
      <div className="circle1  rounded-full w-64 h-64 absolute -top-20 -left-6 z-10  md:-top-40	md:right-0 md:w-[30rem] md:h-[30rem]   "></div>
      <div
        className="circle2 rounded-full w-64 h-64  
    md:w-[20rem] md:h-[20rem] absolute -bottom-20 -right-20 z-0   "
      ></div>
  
        <div className="landing-card p-5 w-full rounded-3xl h-52 flex flex-col gap-6 z-20 order-first md:order-last lg:w-[40rem] lg:h-[20rem] text-start">
          <figure className="md:ms-10">
            <img src={cardImage} alt="" />
          </figure>
          <div className="flex flex-col gap-4 justify-between h-full">
            <div className="md:ms-10">
              <h2 className="text-2xl mb-2 font-bold ">My Wallet</h2>
              <p className="font-extrabold text-custom-yellow">Mr Nobody</p>
            </div>
            <div>
              <ul className="flex flex-row gap-6  tracking-[0.8rem] md:text-2xl md:justify-around">
                <li>****</li>
                <li>****</li>
                <li>402</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="landing-content flex flex-col gap-4 z-20 md:items-center md:text-center">
          <div>
            <h1 className=" text-4xl md:text-6xl leading-[3rem] tracking-wider mb-2">
              EXPENSE
            </h1>
            <h1 className="md:text-6xl leading-[3rem] tracking-wider text-4xl">TRACKER</h1>
          </div>
          <div className="md:text-center">
            <p className="w-96 md:text-2xl md:w-3/5 m-auto  md:leading-9 font-thin">
              Introducing our{" "}
              <strong className="text-custom-yellow font-bold">Expense Tracker</strong> : Your
              ultimate financial companion. Effortlessly manage expenses, track
              budgets, and gain financial control with ease. Try it today for a
              smarter, stress-free financial future.
            </p>
        </div>
      </div>
    </main>
  );
};

export default Landing;

