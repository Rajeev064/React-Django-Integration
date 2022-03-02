import React, {useState,Component} from 'react';
import  Register from '../Images/register.svg';
import Log from '../Images/log.svg';
import '../Css/login.css';

export default class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = {signupmode: true};
      this.handleSignInClick = this.handleSignInClick.bind(this);
      this.handleLogInClick = this.handleLogInClick.bind(this);
    }
    handleSignInClick() {
      this.setState({signupmode: true});
      console.log("set true")
    }
    handleLogInClick(){
        this.setState({signupmode: false});
      }
  render() {
    const issignupclicked = this.state.signupmode    
    return (
      <>
      <div className={`container container-anime  ${issignupclicked === true  ? 'sign-up-mode' : 'null'}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Log in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn  sign-btn  solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn  sign-btn " value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Sign In and get started with your journey
            </p>
            <button className="btn sign-btn transparent"   onClick={this.handleSignInClick}  id="sign-up-btn">
              Sign In
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Log In Here
            </p>
            <button className="btn sign-btn transparent"  onClick={this.handleLogInClick} id="log-in-btn">
              Log In 
            </button>
          </div>
          <img src={Log} className="image" alt="" />
        </div>
      </div>
    </div>
      </>
    )
  }
}
