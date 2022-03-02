import React, { Component } from 'react';
import '../Css/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className="footer-07">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading"><a href="#" className="logo">Research Panachea</a></h2>
						<p className="menu">
							<a href="#">Home</a>
							<a href="#">Agent</a>
							<a href="#">About</a>
							<a href="#">Listing</a>
							<a href="#">Blog</a>
							<a href="#">Contact</a>
						</p>
						<ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fab fa-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"><i className="fab fa-facebook"></i></span></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fab fa-instagram"></span></a></li>
            </ul>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-12 text-center">
						<p className="copyright">
					      Copyright &copy; Research Panachea
                      </p>
					</div>
				</div>
			</div>
		</footer>
      </>
    )
  }
}
