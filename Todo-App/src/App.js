import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Manager from "./components/Manager";
import ListTask from "./components/refactored/ListTask/ListTask";
import AddTask from "./components/refactored/AddTask/AddTask";
import NavBar from "./components/refactored/NavBar/NavBar";
import Footer from "./components/refactored/Footer/Footer";

function App() {
	return (
		<div>
			<NavBar />
			{/* <Manager /> */}
			{/* <AddTask /> */}
			<ListTask />
			<Footer />
		</div>
	);
}

export default App;
