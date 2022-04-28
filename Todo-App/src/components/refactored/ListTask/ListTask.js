import React, { useState } from "react";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import { data } from "../../../redux/sampleData";
import "./ListTask.scss";

const ListTask = () => {
	const [listData, setListData] = useState(data);
	const [isTabView, setIsTabView] = useState(false);
	const [showDescription, setShowDescription] = useState(null);

	//  clickHappens = (id) => () => {
	// 		this.setState((prevState) => ({
	// 			clicked: prevState.clicked === id ? null : id, // <-- toggle back to null or to new id
	// 		}));
	// 	};

	// const toogleShowDescription = (id) => {
	// 	if (task.id === id) {
	// 		setShowDescription((prev) => {
	// 			showDescription = id ? null : id;
	// 		});
	// 	}
	// };
	return (
		<Container className="my-4">
			<Row className="justify-content-lg-center">
				<Col lg={8}>
					<div className="px-4 listHeader d-flex justify-content-between">
						<h4>Olakunle, Here is your Todo List</h4>
						<div className="listHeaderButtons">
							<div className="list" onClick={() => setIsTabView(false)}>
								<FaIcons.FaListOl className="mx-2" />
								<p style={{ display: "inline" }}>List View</p>
							</div>
							<div className="tab" onClick={() => setIsTabView(true)}>
								<FaIcons.FaThList className="mx-2" />
								<p style={{ display: "inline" }}>Tab View</p>
							</div>
						</div>
					</div>
					{isTabView ? (
						<div className="tabView my-3">
							<Tab.Container
								id="list-group-tabs-example"
								defaultActiveKey="#link1"
							>
								<Row>
									{listData.map((task) => {
										return (
											<>
												<Col sm={4}>
													<ListGroup>
														<ListGroup.Item action>{task.task}</ListGroup.Item>
													</ListGroup>
												</Col>
												<Col sm={6}>
													<Tab.Content>
														<Tab.Pane eventKey="#link1">
															{task.description}
														</Tab.Pane>
													</Tab.Content>
												</Col>
												<Col sm={2}>
													<FaIcons.FaRegEdit className="m-1" />
													<FaIcons.FaTrash className="m-1" />
												</Col>
											</>
										);
									})}
								</Row>
							</Tab.Container>
						</div>
					) : (
						<div className="listView my-3">
							<ListGroup as="ol" numbered>
								<div className="te">
									{listData.map((task) => {
										return (
											<ListGroup.Item
												as="li"
												variant="primary"
												onClick={() => setShowDescription()}
											>
												<p>{task.task}</p>
												{showDescription && (
													<section
														className="desc"
														style={{ backgroundColor: "green" }}
													>
														{task.description}
													</section>
												)}
											</ListGroup.Item>
										);
									})}
								</div>
							</ListGroup>
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default ListTask;
