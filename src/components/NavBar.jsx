/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
	const { user, logOut } = useAuth();
	const [isOpen, setOpen] = useState(false);

	return (
		<nav className="flex justify-between items-center bg-[url(https://i.postimg.cc/jSg07Scm/15.jpg)] bg-cover bg-center lg:px-28 px-4">
			<Link to="/">
				<figure className="text-white font-rancho text-3xl lg:text-6xl flex items-center justify-center lg:gap-4 gap-1">
					<img
						src="https://i.postimg.cc/HL41S99c/logo1.png"
						alt="logo brand"
						className="h-16 lg:h-24"
					/>
					<figcaption>Espresso Emporium</figcaption>
				</figure>
			</Link>
			<div className="space-x-5 hidden md:flex md:items-center">
				{user ? (
					<Button event={logOut}>Sign out</Button>
				) : (
					<>
						<Button link="/login">Log in</Button>
						<Button link="/signup">Sign up</Button>
					</>
				)}
			</div>
			<button className="md:hidden text-white">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</button>
		</nav>
	);
}

function Button({ link, children, event }) {
	return (
		<Link to={link} onClick={event}>
			<button className="bg-[#e3b577] font-rancho text-font1 px-6 py-2 text-2xl">
				{children}
			</button>
		</Link>
	);
}

export default NavBar;
