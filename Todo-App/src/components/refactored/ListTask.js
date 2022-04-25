import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const ListTask = () => {
	return (
		<Container className="my-4">
			<Row className="justify-content-lg-center">
				<Col lg={8}>
					<div className="">
						<ListGroup as="ol" numbered>
							<ListGroup.Item as="li">No style</ListGroup.Item>
							<ListGroup.Item as="li" variant="primary">
								Primary
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
				</Col>
			</Row>
		</Container>
	);
};

export default ListTask;
