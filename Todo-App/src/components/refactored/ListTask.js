import React, { useState } from "react";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

const ListTask = () => {
	const [isTabView, setIsTabView] = useState(false);
	return (
		<Container className="my-4">
			<Row className="justify-content-lg-center">
				<Col lg={8}>
					<div className="px-4 listHeader d-flex justify-content-between">
						<h4>Olakunle, Here is your Todo List</h4>
						<div className="listHeaderButtons">
							<FaIcons.FaListOl
								className="mx-2"
								onClick={() => setIsTabView(false)}
							/>
							<FaIcons.FaThList
								className="mx-2"
								onClick={() => setIsTabView(true)}
							/>
						</div>
					</div>
					{isTabView ? (
						<div className="tabView my-3">
							<Tab.Container
								id="list-group-tabs-example"
								defaultActiveKey="#link1"
							>
								<Row>
									<Col sm={4}>
										<ListGroup>
											<ListGroup.Item action href="#link1">
												Link 1
											</ListGroup.Item>
											<ListGroup.Item action href="#link2">
												Link 2
											</ListGroup.Item>
										</ListGroup>
									</Col>
									<Col sm={8}>
										<Tab.Content>
											<Tab.Pane eventKey="#link1">
												{/* <Sonnet /> */}
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Culpa, odit quibusdam accusamus eos asperiores ex
												dolorem, maiores debitis magnam obcaecati iste eaque
												nemo. Repudiandae, dolore.
											</Tab.Pane>
											<Tab.Pane eventKey="#link2">
												{/* <Sonnet /> */}
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Culpa, odit quibusdam accusamus eos asperiores ex
												dolorem, maiores debitis magnam obcaecati iste eaque
												nemo. Repudiandae, dolore.
											</Tab.Pane>
										</Tab.Content>
									</Col>
								</Row>
							</Tab.Container>
						</div>
					) : (
						<div className="listView my-3">
							<ListGroup as="ol" numbered>
								<ListGroup.Item as="li">No style</ListGroup.Item>
								<ListGroup.Item as="li" variant="primary">
									<p>Primary</p>
									<div className="desc" style={{ backgroundColor: "green" }}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iure, ab officiis! Consequuntur quos neque expedita
										doloremque quae iure cupiditate quaerat!
									</div>
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="secondary">
									Secondary
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="success">
									Success
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="danger">
									Danger
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="warning">
									Warning
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="info">
									Info
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="light">
									Light
								</ListGroup.Item>
								<ListGroup.Item as="li" action variant="dark">
									Dark
								</ListGroup.Item>
							</ListGroup>
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default ListTask;
