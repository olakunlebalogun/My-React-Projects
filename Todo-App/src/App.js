import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Manager from "./components/Manager";
import ListTask from "./components/refactored/ListTask";
import AddTask from "./components/refactored/AddTask";
import NavBar from "./components/refactored/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			{/* <Manager /> */}
			<AddTask />
			<ListTask />
		</div>
	);
}

export default App;
