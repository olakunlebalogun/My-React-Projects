import React from "react";
import "./Footer.scss";
import { IconContext } from "react-icons";
import {
	FaFacebookF,
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="foot d-flex justify-content-around">
					<div className="first">
						<p className="name">
							@2022 -- OlakunleBalo -- Being and Building Software <br />{" "}
							Applications since 2019
						</p>
						<p>SiteMap | Terms | Privacy | Cookies | Advertisement</p>
					</div>
					<div className="second d-flex flex-column">
						<IconContext.Provider
							value={{
								color: "white",
								size: "1.5em",
								className: "global-class-name",
							}}
						>
							<div className="one d-flex">
								<FaTwitter className="flex-fill" />
								<FaGithub className="flex-fill" />
								<FaLinkedin className="flex-fill" />
							</div>
							<div className="two d-flex">
								<FaYoutube className="flex-fill" />
								<FaInstagram className="flex-fill" />
								<FaFacebookF className="flex-fill" />
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
