import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Manager from "./components/Manager";
import ListTask from "./components/refactored/ListTask/ListTask";
import AddTask from "./components/refactored/AddTask/AddTask";
import NavBar from "./components/refactored/NavBar/NavBar";
import Footer from "./components/refactored/Footer/Footer";
import SignUp from "./components/refactored/SignUp/SignUp";

function App() {
	return (
		<div>
			<NavBar />
			<SignUp />
			{/* <Manager /> */}
			{/* <AddTask /> */}
			<ListTask />
			<Footer />
		</div>
	);
}

export default App;
