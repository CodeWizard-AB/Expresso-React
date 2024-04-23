import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Swal from "sweetalert2";

function App() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
