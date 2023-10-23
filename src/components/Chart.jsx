import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types';
const Chart = (props) => {
  
  const  {ChartData , ChartOption , isOpen} = props

  ChartJS.defaults.color = 'white';
  ChartJS.defaults.font.size = 15;
  return (
    <>
      <section
        className={ `chart-section lg:w-[24em] c-card   p-5 md:rounded-2xl row-span-1 lg:row-span-2 self-start h-full  fixed top-0 left-0 right-0 z-20 bottom-0  md:static ${isOpen ? 'block' : 'hidden'} md:block` }
     
      >
        <div className='h-full'> 
          <div className="border-b-2 border-custom-yellow pb-2">
            <h2 className="font-bold ">
              <i className="fa-solid fa-chart-simple  fa-lg"></i>
              Chart Expenses
            </h2>
          </div>
          <div className=' mt-5  h-[450px] '>
              <Bar className='h-full' data={ChartData} options={ChartOption}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chart;
Chart.propTypes = {
  ChartData: PropTypes.object.isRequired,
  ChartOption: PropTypes.object.isRequired,
  isOpen : PropTypes.bool

}
