import React from "react";
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
						<p>
							%40 -- OlakunleBalo -- Being and Building Software <br />{" "}
							Applications since 2019
						</p>
						<p>SiteMap | Terms | Privacy | Cookies | Advertisement</p>
					</div>
					<div className="second">
						<FaTwitter />
						<FaGithub />
						<FaLinkedin />
						<FaYoutube />
						<FaInstagram />
						<FaFacebookF />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
