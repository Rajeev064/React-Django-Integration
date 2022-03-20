import React, {useState,Component} from 'react';
import  Register from '../Images/register.svg';
import Log from '../Images/log.svg';
import '../Css/login.css';
// import ReactSession from 'react-client-session';
// ReactSession.setStoreType("localStorage");
export default class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = {signupmode: true};
      this.state = {
          lusername: props.lusername,
          lpassword: props.lpassword,
        };

      this.state = {
        user: {
          username: props.username,
          email: props.email,
          password: props.password
        }
      };


      this.handleSignInClick = this.handleSignInClick.bind(this);
      this.handleLogInClick = this.handleLogInClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }


    handleUsernameChanged(event) {
      var user        = this.state.user;
      user.username  = event.target.value;
      this.setState({ user: user });
    }
  
    handleEmailChanged(event) {
      var user      = this.state.user;
      user.email = event.target.value;
      this.setState({ user: user });
    }
    handlePasswordChanged(event) {
      var user      = this.state.user;
      user.password = event.target.value;
      this.setState({ user: user });
    }

    // LOGIN FORM FUNCTIONS
    handleLPasswordChanged(event) {
      this.setState({ lpassword: event.target.value });
    }
    handleLUsernameChanged(event) {
      this.setState({ lusername: event.target.value });
    }
    
    handleSignInClick() {
      this.setState({signupmode: true});
      console.log("set true")
    }
    handleLogInClick(){
        this.setState({signupmode: false});
      }
    
    handleSubmit(event){
    event.preventDefault();
    const username =  this.state.user.username
    const email = this.state.user.email
    const password = this.state.user.password
    const userdata = {username, email, password};


    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata)
    })

      // event.preventDefault()
      // fetch("http://127.0.0.1:8000/api/user/",{
      //   method:"POST",
      //   headers:{
      //     'Accept':'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     'data_options': {
      //       'username': this.state.user.username,
      //       'email': this.state.user.email,
      //       'password': this.state.user.password,
      //     }
      //   })
      // }).then(response => response.json())
      // .then(data => this.setState({ 'username': this.state.user.username,
      // 'email': this.state.user.email,
      // 'password': this.state.user.password}))
      // .catch(error=>{
      //   {console.error("Error",error)}
      // });
    }
    
    handleLoginSubmit(event){

      event.preventDefault();
      const lusername =  this.state.lusername
      const lpassword = this.state.lpassword
      const logindata = {lusername, lpassword};
      fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logindata)
    }).then(async response => {
      const data = await response.json();
      console.log(data)
      
      if(data['status'] == 200){
        console.log(data['username']);

      }
      else{
        console.log('Error do try again');
      }

      ;
    })
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
              <input type="text" placeholder="Username" value={this.state.lusername} 
              onChange={this.handleLUsernameChanged.bind(this)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={this.state.lpassword}
              onChange={this.handleLPasswordChanged.bind(this)} />
            </div>
            <input type="submit" value="Login" className="btn  sign-btn  solid"
            onClick={this.handleLoginSubmit}  />
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
              <input type="text"  value={this.state.user.username} onChange={this.handleUsernameChanged.bind(this)} placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" value={this.state.user.email} onChange={this.handleEmailChanged.bind(this)} placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" value={this.state.user.password} onChange={this.handlePasswordChanged.bind(this)} placeholder="Password" />
            </div>
            {/* register button */}
            <input type="submit" className="btn  sign-btn " value="Sign up" onClick={this.handleSubmit}
            />

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
