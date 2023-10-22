import { Outlet , NavLink } from "react-router-dom"
import { Footer as FooterLanding } from "./Footer"
import cardImage from '../images/Rectangle 2.png';
const LandingLayout = () => {
  return (
	<div className="flex flex-col  justify-between add-bg-radial min-h-screen">
		<nav className=" p-5 flex flex-row w-full items-center sticky md:bg-[#0000003f] backdrop-blur-md top-0 z-50">
			<div className="flex-1">
				<NavLink to='/'>
					<img src={cardImage} alt="" />
				</NavLink>
			</div>
			<div>
			<ul className="flex flex-row gap-4 text-white">
				<li className=" font-semibold">
					<NavLink to='login' className={({isActive}) => isActive ? 'add-bg' : null}>
						Login
					</NavLink>
				</li>
				<li>
					|
				</li>
				<li className="font-semibold">
					<NavLink to='signup'  className={({isActive}) => isActive ? 'add-bg ' : null}>
					Sign Up
					</NavLink>
				</li>
			</ul>
			</div>
		</nav>
		<Outlet/>
		<FooterLanding/>
	</div>
  )
}

export default LandingLayout