import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const AddTask = () => {
	return (
		<Container className="my-4">
			<Row className="justify-content-lg-center">
				<Col lg={8}>
					<Form>
						<FloatingLabel
							controlId="floatingInput"
							label="Email address"
							className="mb-3"
						>
							<Form.Control type="email" placeholder="name@example.com" />
						</FloatingLabel>

						<FloatingLabel controlId="floatingTextarea2" label="Comments">
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{ height: "100px" }}
							/>
						</FloatingLabel>
						<Form.Check
							className="my-3"
							type="switch"
							id="custom-switch"
							label="Check if completed"
						/>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default AddTask;
