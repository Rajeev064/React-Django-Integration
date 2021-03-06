import React, { Component } from 'react';
import axios from "axios";
import '../Css/rpaper.css';

export default class Papers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : [],
    };
  }
    //   state = {
    //     papers : [],
    // }

    // componentDidMount() {
    //     let data ;
    //     axios.get('http://127.0.0.1:8000/api/researchpapers/')
    //     .then(res => {
    //         data = res.data;
    //         this.setState({
    //             papers : data    
    //         });
    //         console.log(papers)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/researchpapers/")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
              });
              console.log(this.state.items)
          })
  }

  render() {
    return (
      <>
      <div className='Container rp-container'>
        {/* <h1 className="head-line">Research Papers</h1> */}
      <div className="tabset">
        {/* <!-- Tab 1 --> */}
        <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/>
        <label htmlFor="tab1">All</label>
        {/* <!-- Tab 2 --> */}
        <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
        <label htmlFor="tab2">Saved</label>
        
        
        <div className="tab-panels">
          <section id="marzen" className="tab-panel">

      {/* Start Loop */}
      {
      this.state.items.map((item) => (
      <div className="blog-card alt">
          <div className="meta">
            <div className="photo" ></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>{item.title}
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>{item.abstract}
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
      ))
  }
        {/* End Loop */}

          {/* <div className="blog-card alt">
          <div className="meta">
            <div className="photo"></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Research Paper Name
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
        

      <div className="blog-card alt">
          <div className="meta">
            <div className="photo"></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Research Paper Name
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
      <div className="blog-card alt">
          <div className="meta">
            <div className="photo"></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Research Paper Name
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div> */}

        </section>
        <section id="rauchbier" className="tab-panel">

        {/* Start Loop */}
        <div className="blog-card">
          <div className="meta">
            <div className="photo"   ></div>
            <ul className="details">
              <li className="author"><a href="#"> Collaborator: Name</a></li>
              <li className="date">Mar. 10, 2019</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Saved Paper</h1>
            <h2>PUBLICATION NAME: SAMPLE</h2>
            <p> Telecommunications companies plying their trade in Nigeria, have cried out once again over what they described as, increasing tax burdens on their shrinking business.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
        {/* End Loop */}

          <div className="blog-card">
          <div className="meta">
            <div className="photo"   ></div>
            <ul className="details">
              <li className="author"><a href="#"> Collaborator: Name</a></li>
              <li className="date">Mar. 10, 2019</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Saved Paper</h1>
            <h2>PUBLICATION NAME: SAMPLE</h2>
            <p> Telecommunications companies plying their trade in Nigeria, have cried out once again over what they described as, increasing tax burdens on their shrinking business.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
              <div className="blog-card">
          <div className="meta">
            <div className="photo"   ></div>
            <ul className="details">
              <li className="author"><a href="#"> Collaborator: Name</a></li>
              <li className="date">Mar. 10, 2019</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Saved Paper</h1>
            <h2>PUBLICATION NAME: SAMPLE</h2>
            <p> Telecommunications companies plying their trade in Nigeria, have cried out once again over what they described as, increasing tax burdens on their shrinking business.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>

        <div className="blog-card">
          <div className="meta">
            <div className="photo"   ></div>
            <ul className="details">
              <li className="author"><a href="#"> Collaborator: Name</a></li>
              <li className="date">Mar. 10, 2019</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Saved Paper</h1>
            <h2>PUBLICATION NAME: SAMPLE</h2>
            <p> Telecommunications companies plying their trade in Nigeria, have cried out once again over what they described as, increasing tax burdens on their shrinking business.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>

          </section>
          {/* <section id="tab4" className="tab-panel">
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo"></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Apple Launches iPhone
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
              <div className="blog-card alt">
          <div className="meta">
            <div className="photo"></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Apple Launches iPhone
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
              <div className="blog-card alt">
          <div className="meta">
            <div className="photo" ></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Apple Launches iPhone
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>


        <div className="blog-card alt">
          <div className="meta">
            <div className="photo"></div>
            <ul className="details">
              <li className="author"><a href="#">Collaborator Name</a></li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li><a href="#">Domain</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Research Paper Name
      </h1>
            <h2>Publication Name: Sample

      </h2>
            <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
      </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
        </section>  */}
        </div>

      
      
      </div>
      </div>
      </>
      )
  }
}
