import React, { Component } from 'react';
import '../Css/UpcomingConferences.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Techfest from '../Images/techfest.png'
export default class UpcomingConferences extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
        this.state = { chatDetail: 'dontshow' };
        this.state = { chatlist: 'show' };
        this.state = { chatactive: 'null' };
        this.showChat = this.showChat.bind(this);
        this.goBack = this.goBack.bind(this);
      }
    
     handleResize = (e) => {
      this.setState({ windowWidth: window.innerWidth });
     };
    
     componentDidMount() {
      window.addEventListener("resize", this.handleResize);
     }
     
     componentWillUnmount() {
      window.addEventListener("resize", this.handleResize);
     }
    showChat() {
        this.setState({ chatDetail: 'show' });
        this.setState({ chatactive: 'active' });
        if (this.state.windowWidth<768){
            this.setState({chatlist: 'dontshow'})
        }
    }
    goBack(){
        this.setState({chatlist: 'show'});
        this.setState({ chatDetail: 'dontshow' });
    }
  render() {
    const { windowWidth } = this.state;
    const { activestatus } = this.state.chatactive;
    const isMobile = (windowWidth<768) ? 'true' : 'false';
    return (
      <>
      <div className="home-page__content messages-page">
        <div className="container-fluid h-100">
            <div className="row px-0 h-100">
            <div className="col-md-4 px-0 messages-page__list-scroll"  style={{display: (this.state.chatlist==='dontshow') ? 'none' : 'block' }}>

                <div className="messages-page__header mb-0 px-4 pt-3 pb-3">
                <span className="messages-page__title">Events</span>
                <div className="">    
                <Dropdown className="messages-page__sort">
                    <Dropdown.Toggle variant="light">
                    Sort By
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        Date
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Venue
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Time
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>
                <div className="messages-page__search mb-0 px-3 pb-3">
                <div className="custom-form__search-wrapper">
                    <input type="text" className="form-control custom-form" id="search" placeholder="Name of event…" autoComplete="off"/>
                    <button type="submit" className="custom-form__search-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--search" viewBox="0 0 46.6 46.6">
                        <path d="M46.1,43.2l-9-8.9a20.9,20.9,0,1,0-2.8,2.8l8.9,9a1.9,1.9,0,0,0,1.4.5,2,2,0,0,0,1.5-.5A2.3,2.3,0,0,0,46.1,43.2ZM4,21a17,17,0,1,1,33.9,0A17.1,17.1,0,0,1,33,32.9h-.1A17,17,0,0,1,4,21Z" fill="#f68b3c" />
                    </svg>
                    </button>
                </div>
                </div>

                <ul className="messages-page__list pb-5 px-1 px-md-3">
                <li className={`messaging-member messaging-member--new   ${this.state.chatactive === 'active'  ? 'messaging-member--active' : 'null'}`} onClick={this.showChat}>
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/74.jpg" alt="Bessie Cooper" loading="lazy"/>
                    </div>                    
                    <div className="date-time">
                    <div id="widget">
                    <span className="messaging-member__name">Event 1</span>
                    <div id="outline">
                        <div id="day">15</div>
                        <div id="month">Feb</div>
                    </div>
                    </div>
                    <span className='time-span'>4:00-6:00</span>
                    </div>  
                    </div>
                </li>
                <li className="messaging-member messaging-member--online ">
                <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/74.jpg" alt="Bessie Cooper" loading="lazy"/>
                    </div>
                    
                    <div className="date-time">
                    <div id="widget">
                    <span className="messaging-member__name">Event 2</span>
                    <div id="outline">
                        <div id="day">15</div>
                        <div id="month">Feb</div>
                    </div>
                    </div>
                    <span className='time-span'>4:00-6:00</span>
                    </div> 
                    </div>
                </li>
                <li className="messaging-member">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/74.jpg" alt="Bessie Cooper" loading="lazy"/>
                    </div>
                    
                    <div className="date-time">
                    <div id="widget">
                    <span className="messaging-member__name">Event 3</span>
                    
                    <div id="outline">
                        <div id="day">15</div>
                        <div id="month">Feb</div>
                    </div>
                    
                    </div>
                    <span className='time-span'>4:00-6:00</span>
                    </div> 
                    </div>
                </li>
                <li className="messaging-member messaging-member--online">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/women/39.jpg" alt="Martha Curtis" loading="lazy"/>
                    </div>
                    <div className="date-time">
                            <div id="widget">
                                <span className="messaging-member__name">Event 1</span>
                                <div id="outline">
                                    <div id="day">15</div>
                                    <div id="month">Feb</div>
                                </div>
                            </div>
                            <span className='time-span'>4:00-6:00</span>
                        </div> 
                    </div>
                </li>
                <li className="messaging-member messaging-member--online">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/27.jpg" alt="Rozie Tucker" loading="lazy"/>
                    </div>
                        <div className="date-time">
                            <div id="widget">
                                <span className="messaging-member__name">Event 1</span>
                                <div id="outline">
                                    <div id="day">15</div>
                                    <div id="month">Feb</div>
                                </div>
                            </div>
                            <span className='time-span'>4:00-6:00</span>
                        </div> 
                    </div>
                </li>
                <li className="messaging-member">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/17.jpg" alt="Jules Zimmermann" loading="lazy"/>
                    </div>
                    <div className="date-time">
                            <div id="widget">
                                <span className="messaging-member__name">Event 1</span>
                                <div id="outline">
                                    <div id="day">15</div>
                                    <div id="month">Feb</div>
                                </div>
                            </div>
                            <span className='time-span'>4:00-6:00</span>
                        </div> 
                    </div>
                </li>
                <li className="messaging-member">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/9.jpg" alt="Mark Reid" loading="lazy"/>
                    </div>
                    <div className="date-time">
                            <div id="widget">
                                <span className="messaging-member__name">Event 1</span>
                                <div id="outline">
                                    <div id="day">15</div>
                                    <div id="month">Feb</div>
                                </div>
                            </div>
                            <span className='time-span'>4:00-6:00</span>
                        </div> 
                    </div>
                </li>
                <li className="messaging-member  messaging-member--online">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/men/54.jpg" alt="Russell Williams" loading="lazy"/>
                    </div>
                    <div className="date-time">
                            <div id="widget">
                                <span className="messaging-member__name">Event 1</span>
                                <div id="outline">
                                    <div id="day">15</div>
                                    <div id="month">Feb</div>
                                </div>
                            </div>
                            <span className='time-span'>4:00-6:00</span>
                        </div> 
                    </div>
                </li>
                <li className="messaging-member">
                    <div className="messaging-member__wrapper">
                    <div className="messaging-member__avatar">
                        <img src="https://randomuser.me/api/portraits/thumb/women/85.jpg" alt="Savannah Nguyen" loading="lazy"/>
                    </div>
                    <div className="date-time">
                            <div id="widget">
                                <span className="messaging-member__name">Event 1</span>
                                <div id="outline">
                                    <div id="day">15</div>
                                    <div id="month">Feb</div>
                                </div>
                            </div>
                            <span className='time-span'>4:00-6:00</span>
                        </div> 
                    </div>
                </li>
                </ul>
            </div>
            <div className={`chat col-md-8  ${isMobile === 'true'  ? 'chat--show' : 'null'}`} style={{display: (this.state.chatDetail==='show') ? 'block' : 'none' }}>
                <div className="chat__container">
                <div className="chat__wrapper py-2 pt-mb-2 pb-md-3">
                <div className="chat__previous d-md-none" onClick={this.goBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--previous" viewBox="0 0 45.5 30.4">
                        <path d="M43.5,13.1H7l9.7-9.6A2.1,2.1,0,1,0,13.8.6L.9,13.5h0L.3,14v.6c0,.1-.1.1-.1.2v.4a2,2,0,0,0,.6,1.5l.3.3L13.8,29.8a2.1,2.1,0,1,0,2.9-2.9L7,17.2H43.5a2,2,0,0,0,2-2A2.1,2.1,0,0,0,43.5,13.1Z" fill="#f68b3c" />
                        </svg>
                    </div>
                    <div className="chat__messaging messaging-member--online pb-2 pb-md-2 pl-2 pl-md-4 pr-2">
                    
                    {/* <!-- Page Content --> */}
                <div className="container event-details">
                    {/* <!-- Portfolio Item Heading --> */}
                    <h1 className="my-4">Event Heading
                    <small>Organizer</small>
                    </h1>
                    <div className="row">
                
                    <div className="col-md-8">
                        <img className="img-fluid" src={Techfest} alt=""/>
                        <div className="button-link">Link</div>
                    </div>
                
                    <div className="col-md-4">                        
                        <h3 className="my-3">Event Details</h3>
                        <ul>
                        <li>Date:</li>
                        <li>Time:</li>
                        <li>Venue:</li>
                        <li>Mode:</li>
                        </ul>
                        <h3 className="my-3">Event Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                    </div>
                
                    </div>
                            {/* <!-- /.row -->
                        
                            <!-- Related Projects Row --> */}
                            <h3 className="my-4">Related Projects</h3>
                        
                            <div className="row">
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            </div>
                            {/* <!-- /.row --> */}
                        
                        </div>
                        {/* <!-- /.container --> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
      </>
    )
  }
}
