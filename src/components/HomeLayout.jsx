import { Outlet } from "react-router-dom"
import {Navbar as NavbarRoutes} from './Navbar'
import {Footer as FooterRoutes} from './Footer'
const HomeLayout = () => {
  return (
	<div className="add-bg-2 min-h-screen flex flex-col justify-between ">
		<NavbarRoutes/>
		<Outlet/>
		<FooterRoutes/>
	</div>
  )
}

export default HomeLayout