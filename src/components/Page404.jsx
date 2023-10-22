import { FaRedditAlien } from 'react-icons/fa';
import { Link  } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div className='text-white add-bg-radial-2 min-h-screen flex flex-col items-center justify-center'>
      <div className='c-card p-5 w-[80%] rounded-md h-96 text-center flex flex-col gap-6 items-center justify-center'>
        <FaRedditAlien className='text-5xl text-custom-yellow' />
        <p className='font-semibold text-4xl'>404 Page Not Found!</p>
        <Link to='/' className='rgb-add p-5 w-96 rounded-md font-bold'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};
