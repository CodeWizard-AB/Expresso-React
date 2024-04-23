import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function BackHome() {
	return (
		<Link to="/">
			<h2 className="py-12 flex items-center font-rancho text-2xl gap-2 text-font1">
				<IoMdArrowBack />
				<span>Back to Home</span>
			</h2>
		</Link>
	);
}

export default BackHome;
