import {TbCopyright} from 'react-icons/tb'
export const Footer = () => {

  const date = new Date()
  return (
	<div className="text-white flex flex-row p-5  items-center gap-2 w-full  md:justify-center justify-center">
    <TbCopyright className='text-lg' />
    <p className='font-bold text-sm '>
       Copyright All Rights Reserved {date.getFullYear()} | Darling.
    </p>
  </div>
  )
}

