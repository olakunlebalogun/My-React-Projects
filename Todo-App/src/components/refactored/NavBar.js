import React from "react";
import {
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";

const NavBar = () => {
	return (
		<IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
			<div>
				<Navbar bg="dark" expand="lg" variant="dark">
					<Container fluid>
						<Navbar.Brand href="#">Organizer</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: "100px" }}
								navbarScroll
							>
								<Nav.Link href="#action1">Dashboard</Nav.Link>
								<NavDropdown title="Users" id="navbarScrollingDropdown">
									<NavDropdown.Item href="#action3">User one</NavDropdown.Item>
									<NavDropdown.Item href="#action4">User Two</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										User Three
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="#">Todo List</Nav.Link>
								<Nav.Link href="#action2">About us</Nav.Link>
							</Nav>
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search the list of Todos"
									className="me-2"
									aria-label="Search"
								/>

								<FaIcons.FaSearch variant="outline-success" />
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</IconContext.Provider>
	);
};

export default NavBar;
