import React, { useState } from "react";
import SetTasks from "./Set-Tasks";
import TaskList from "./Task-List";
import data from "./data";

const URL = "http://localhost:5000";

const getData = () => {
	fetch(URL)
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.log(`There is this ${error} `);
		});
};

const myData = getData();
// console.log(myData);
const Manager = () => {
	const [tasks, setTasks] = useState(data);
	const [task, setTask] = useState("");

	const deleteTask = (id) => {
		let newTasks = tasks.filter((task) => {
			return task.id !== id;
		});
		setTasks(newTasks);
		console.log("Item deleted");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task) {
			const newTask = {
				id: new Date().getTime(),
				task,
			};
			let newTasks = [...tasks, newTask];
			setTasks(newTasks);
			console.log("Task added");
			setTask("");
		}
	};

	const editTask = (id, e) => {
		let edtTask = tasks.find((task) => {
			return task.id === id;
		});
		setTask(edtTask.task);

		if (task) {
			console.log(e.target.value);
			// edtTask.task = e.target.value;
		}
		// setTask("New Task");

		// edtTask.task = task;
		// setTasks(tasks);

		// if (task) {
		// 	const { id, tsk } = edtTask;
		// }
		// This is where the task is over-written not added below
		console.log(edtTask);
	};
	return (
		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6 p-3 my-3 bg-dark text-white">
				{/* <SetTasks tasks={tasks} setTasks={setTasks} /> */}
				<SetTasks task={task} setTask={setTask} handleSubmit={handleSubmit} />
				<TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
			</div>
			<div className="col-md-3"></div>
		</div>
	);
};

export default Manager;
