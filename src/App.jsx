import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Toaster position="top-left" />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
