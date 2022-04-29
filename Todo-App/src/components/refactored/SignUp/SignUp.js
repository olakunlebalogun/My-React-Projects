import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SignUp = () => {
	return (
		<div className="mt-4">
			<Row className="justify-content-lg-center">
				<Col lg={6}>
					<Form className="justify-content-md-center">
						<Form.Group className="" controlId="formBasicFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Enter firstname" />
							<Form.Text className="text-muted">
								Your information is safe
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Enter lastname" />
							<Form.Text className="text-muted">
								Your information is safe
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Col lg={4} className="">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Col>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default SignUp;
