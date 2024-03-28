import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="footer pt-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 bg-dark p-3 text-white customer-care">
							<h4>CUSTOMER CARE</h4>
							<div className="cc">
								<h5>TOLL FREE SA ONLY</h5>
								<p>0800 332 550</p>
							</div>
							<div className="cc">
								<h5>INTERNATIONAL</h5>
								<p>+27 (0) 87 365 4677</p>
							</div>
							<div className="cc">
								<h5>EMAIL</h5>
								<p>info@exclusivebooks.co.za</p>
							</div>
							<div className="cc">
								<h5>CONTACT HOURS</h5>
								<div className="week">
									<h6>Monday to Friday</h6>
									<p>7:30AM to 16:30PM</p>
								</div>
								<div className="week">
									<h6>Saturday</h6>
									<p>8:00AM to 13:00PM</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 footer-list">
							<h4>ABOUT US</h4>
							<ul>
								<li>Contact Us</li>
								<li>Eb News</li>
								<li>Store Locator</li>
								<li>Events</li>
								<li>Reward programme</li>
								<li>Loyalty Programme</li>
								<li>About Exclusive Books</li>
								<li>Gift Cards and Vouchers</li>
								<li>Help</li>
								<li>Reward Partners</li>
								<li>Cookie Policy</li>
								<li>T's and C's</li>
							</ul>
						</div>
						<div className="col-md-3 footer-list">
							<h4>CUSTOMER SERVICE</h4>
							<ul>
								<li>Track Order</li>
								<li>Delivery Information</li>
								<li>Guarantee & Returns</li>
								<li>Banking Details</li>
								<li>Corporate Details</li>
								<li>Vendor Registration</li>
								<li>Corporate Registration</li>
								<li>FAQs</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h4>SUBSCRIBE</h4>
							<p>
								Get exclusive deals, previews and updates when you subscribe
							</p>
							<input
								type="text"
								className="form-control mb-2"
								placeholder="Your First Name"
							/>
							<input
								type="email"
								className="form-control mb-2"
								placeholder="Your Email"
							/>

							<button type="submit" className="form-control btn btn-dark">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
