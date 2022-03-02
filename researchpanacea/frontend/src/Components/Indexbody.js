import React, { Component } from 'react';
import '../Css/index-body.css';
import Collab from '../Images/collab.svg'
import {Link} from "react-router-dom";

export default class Indexbody extends Component {
  render() {
	return (
	  <div className='container full-body-container'>
		<div className="box-1">
		  <div className="row">
			  <div className="col-md-5">
				<p className="ad-line">
        <a className="portal-name" href="#">Research Panachea</a><br></br>
					Ideas Evolve <br></br>
					When You Are Involved<br></br>
          <button type="button" className="btn btn-outline-dark navbar-btn"><Link className='get-started' to={'/login'}>Get Started</Link></button>
				</p>
			  </div>
			  <div className="col-md-7 constrained-height">
				<img
					className='svg-img img-fluid'
					src={Collab}
					alt='collab'
				/>
			  </div>
		  </div>
		</div>
		<div className="third-box">
			<div className="row">
				<a className="portal-name-feature" href="#">Features</a><br></br>
					<div className="col-md-4">					
						<div className="card  feature-card">
							<div className="card-body">
							<header className="header-orange">
								
							</header>
							<h2 className="direct-custom-text">Collaborate</h2>
								<p className="card-text black-para">
									Collaborate with your peers for research papers in the domain of your choice
								</p>                                            
							</div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card  feature-card">
							<div className="card-body">
							<header className="header-pink">							
							</header>
							<h2 className="direct-custom-text">Upcoming Conferences</h2>
								<p className="card-text black-para">
									Never miss the next big Conference.Stay Updated always!
								</p> 
							</div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card  feature-card">
							<div className="card-body">
							<header className="header-purple">							
							</header>
							<h2 className="direct-custom-text">Network = Networth</h2>
								<p className="card-text black-para">
									Grow your network and meet some like minded people all over the globe!
								</p> 
							</div>
						</div>
					</div>
			</div>
			<div className="row">
					<div className="col-md-4">					
						<div className="card  feature-card">
							<div className="card-body">
							<header className="header-orange">
								
							</header>
							<h2 className="direct-custom-text">Reasearch Papers</h2>
								<p className="card-text black-para">
									You can browse through various research papers and gain knowledge
								</p>                                            
							</div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card  feature-card">
							<div className="card-body">
							<header className="header-pink">							
							</header>
							<h2 className="direct-custom-text">Academic Activities</h2>
								<p className="card-text black-para">
									Stay updated with academic activities all over the country
								</p> 
							</div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card  feature-card">
							<div className="card-body">
							<header className="header-purple">							
							</header>
							<h2 className="direct-custom-text">Connect</h2>
								<p className="card-text black-para">
									You can have real time chats with like minded peeps
								</p> 
							</div>
						</div>
					</div>
			</div>
		</div>
	  </div>
	)
  }
}
