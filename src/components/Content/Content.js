import React from 'react';
import Adam from './Adam.jpeg';
import './Content.css';
import LinkedIn from './LinkedIn.png';
import Github from './Github.png';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import ANW from "./ANW.png"
import ADV from "./ADV.png"
import WB from "./WB.png"


export default class Example extends React.Component {
  
  render() {

    
    let frontEnd = 
    ["React",
    "Angular",
    "Redux",
    "Styled Components (CSS in JS)",
    "Sass",
    "Progressive Web Apps",
    "HTML 5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "BootStrap"]

    let backEnd =
    [ "Node",
    "Express",
    "PostgreSQL",
    "Graphql",
    "NPM",
    "Git",
    "Jest/Sinon",
    "Postman",
    "Java",
    "Python(Flask)",
    "SOA",
    "DB2/Mainframe/Z/os"]

    let virtual =
    [ "Linux",
    "Unix",
    "Windows Server",
    "VMware",
    "Docker"
    ]

    let logging=
    [
    "Splunk",
    "Kibana",
    "Dynatrace",
    "Grafana"
    ]

  
    let mappedFront = frontEnd.map((skill,front)=>{
     return(
      <li key={front}>{skill}</li>
     )
    })

    let mappedBack = backEnd.map((skill,back)=>{
      return(
       <li key={back}>{skill}</li>
      )
     })

     let mappedVirtual= virtual.map((skill,virt)=>{
      return(
       <li key={virt}>{skill}</li>
      )
     })

     let mappedLog= logging.map((skill, log)=>{
      return(
       <li key={log}>{skill}</li>
      )
     })
  
    return (
      <Container>
        <Row>
          <div className="top">
          <Col xs="auto">
            <img className="photo" src={Adam}/>
          </Col>
          <Col xs="auto">
            <div className= "head">
                <div className="adam">Adam Dreier</div>
                <div className="title-dev"> Full Stack Developer </div>
                <a href="mailto:adamdreier1@gmail.com"> adamdreier1@gmail.com </a>
                <br/>
                <a href="tel:6317037453">631-703-7453</a>
            </div>
          </Col>
          <Col xs="auto">
          <Col  xs="auto">
                <a href="https://www.linkedin.com/in/adam-dreier/"><img className="icon"src={LinkedIn}/> </a>
          </Col>
          <Col xs="auto">
             <a href="https://github.com/Dreier14"> <img className="icon"src={Github}/></a>
          </Col>
          </Col>
          </div>
        </Row>
        <br/>
        <hr/>
        <Row>
           <div className="mobile">Technologies</div>
        </Row>
        <div className="format">
        <Row >
              <div className="assets" class="col-md-3"> 
              <div className="techs">Front-End Development</div>
                  <div className="skill">
                        {mappedFront}
                  </div>
              </div>
              <br/>
              <div className="assets" class="col-md-3"> 
                <div className="techs">Back-End Development</div>
                  <div className="skill">
                       {mappedBack}
                  </div>
              </div>
              <br/>
              <div className="assets" class="col-md-3">
                  <div className="techs">Virtualization/OS</div>
                  <div className="skill">
                    {mappedVirtual}
                  </div>
              </div>
               <br/>
              <div className="assets" class="col-md-3">
                  <div className="techs">Logging</div>
                  <div className="skill">
                    {mappedLog}
                  </div>
              </div>
        </Row>
        </div>
        <Row>
           <div className="mobile">Projects</div>
        </Row>
        <br/>
        <div className="flexed">
        <Card>
            <CardImg top width="50%" src={WB} alt="Card image cap" />
                <CardBody style={{background:"lightblue"}} >
                    <CardTitle> WB Explorer</CardTitle>
                        <CardText>A site dedicated to helping backpackers traveling.</CardText>
                        <Button><a className="tags" href="https://wb-explorer.now.sh/">WB Explorer</a></Button>
                </CardBody>
        </Card>
        <br/>
        <Card>
            <CardImg top width="50%" src={ADV} alt="Card image cap" />
                <CardBody style={{background:"lightblue"}} >
                    <CardTitle>Adventure Project</CardTitle>
                        <CardText>An application that provides hikers with trails and info.</CardText>
                        <Button><a className="tags" href="http://adventureproject.tk">Adventure Project</a></Button>
                </CardBody>
          </Card>
          <br/>
          <Card>
            <CardImg top width="50%" src={ANW} alt="Card image cap" />
                <CardBody style={{background:"lightblue"}} >
                    <CardTitle>Aquatic-N-Writing Rehab</CardTitle>
                        <CardText>An application for a children's rehab facility.</CardText>
                        <Button><a className="tags" href="https://www.anwrehab.com/">Aquatic-N-Writing Rehab</a></Button>
                </CardBody>
          </Card>
        </div>
        <br/>
        <Row>
           <div className="mobile">Experience</div>
        </Row>
        <br/>
        <div className="assets"> 
                <div className="techs"><b>Full Stack Developer</b></div>
                  <div className="skill">
                  <br/>
                    <p>
                    <b> DevMountain Student Developer, Phoenix, AZ 		APRIL 2018 - JULY 2018</b>
                    <br/>
                    <br/>
                    <ul className="listed">
                      <li>Created Interactive and reusable components using React.JS using presentational and container components. Implementing the separation of concerns methodology. </li>
                      <li> Managed state using Redux.JS, creating a single source of truth i.e. store to manage the whole application, enabling global state. </li>
                      <li>Great Experience in React.JS for creating interactive UIs using One-way data flow,via Virtual DOM. </li>
                      <li>Created Unit tests using Jest, end to end testing using CypressIO and Postman testing for the applications backend. </li>
                      <li>Implementing React-Router to turn the applications into Single Page Applications and using promises, primarily axios calls to the backend or Node JS. </li>
                      <li>Using CSS3 for personal and group projects along with bootstrap and Lottie.IO libraries. </li>
                      <li>Using GraphQL in React and Amazon API Gateway to interact with data dynamically. </li>
                      <li>Implemented C#(ASP.NET) with Angular 5 to build a RESTful backend. </li>
                      <li> Implemented AWS to build a serverless application in conjunction with React.	 </li>
                    </ul>
                      <br/>
                    <b>Technology Stack: Javascript, PostgreSQL, Express.JS, Node.JS, Redux, GraphQL, Webpack, Bootstrap, Amazon Web Services</b>
                    </p>
                  </div>
              </div>
              <hr/>
        <div className="assets"> 
                <div className="techs"><b>Full Stack Developer</b></div>
                  <div className="skill">
                  <br/>
                    <p>
                    <b>  Aquatic N Writing Rehab, Phoenix, AZ		August 2018 - Present</b>
                    <br/>
                    <br/>
                    <ul className="listed">
                      <li> Implementing bootstrap designs and semantic UI elements to make responsive web design.</li>
                      <li> Using Node.JS to communicate with the front end of my application so data can be easily passed from the backend.</li>
                      <li> Working the technologies such as nodemailer to allow form submission on client side to make UX intuitive.</li>
                      <li> Using functions like .map() to easily display an array of data that is being passed from endpoints on the backend.</li>
                    </ul>
                      <br/>
                    <b>Technology Stack: Javascript, PostgreSQL, Express.JS, Node.JS, Nodemailer</b>
                    </p>
                  </div>
              </div>
              <hr/>
        <div className="assets"> 
                <div className="techs"><b>Front End Engineer</b></div>
                  <div className="skill">
                  <br/>
                    <p>
                    <b>  Mission Disrupt, Westbury, NY   September 2018 - Worked Remotely on call.</b>
                    <br/>
                    <br/>
                    <ul className="listed">
                      <li>Implementing Agile Scrum practices to effectively modernize time for completion of MVP.</li>
                      <li>Writing unit tests in Jest that tested functions to make sure code was executing and compiling properly and data was being passed correctly.</li>
                      <li>Used build tools such as Gulp to minify libraries and stylesheets and to efficiently run unit tests.</li>	
                    </ul>
                    </p>
                  </div>
          </div>
          <hr/>
          <div className="assets"> 
                <div className="techs"><b>IT Project Manager</b></div>
                  <div className="skill">
                  <br/>
                    <p>
                    <b> Eastern CCTV, Plainview, NY		July 2017 - November 2017</b>
                    <br/>
                    <br/>
                    <ul className="listed">
                        <li> Working with a team to organize projects for large clients. While using Office Management System CRM to update reports and store and collect data for new projects.</li>
                        <li>Understanding  concepts like port forwarding and working with tools such as Network & Port tools along with Teamviewer and VPN’s.</li>
                        <li>Developing blueprints, layout and reading them for clients to construct their security needs for their projects/business.</li>
                    </ul>
                    </p>
                  </div>
          </div>
          <br/>
          <br/>
          <Row>

            <Row>
              <div className="mobile" style={{textDecoration:"underline"}}>Summary</div>
            </Row>
            <br/>
            <div className="assets">
            <p>
                A hard-working, enthusiastic nerd, who has a passion for learning regarding programming and Information Technologies. Working and having 5+ years in the IT industry, specializing in Javascript, React JS, HTML5, and CSS3 at a coding bootcamp. Utilizing new technologies everyday growing as a developer at school and outside of school.
      
                Creating Responsive Design (Mobile/Tablet/Desktop) using MediaQueries and Material-UI on group and personal projects, adapting Unidirectional data for managing state using ReactJS for having globally accessed state and One Way Data flow using Redux JS.
            
                Experienced with planning two-day sprints, and managing a team for group projects using trello. Following coding patterns, component are structures and efficient project planning management . Dealing with deadlines to present projects to create MVPs and completed applications.
            
                Experienced with Jest, Cypress, and Postman for unit, end-to-end and endpoint testing for applications. Using algorithms like recursion to solve advanced level code challenges.
           </p>
           </div>
        </Row>
        <Row>
          <div className="mobile" style={{textDecoration:"underline"}}>Education</div>
        </Row>
         <Row>
         <div className="ribbon" >
            <p class="col-md-4">
            <b>DevMountain, Phoenix, AZ </b>
            <br/>
            Web Dev Immersive
            <br/>
            April 2018 - July 2018

           </p>
          
           <p class="col-md-4">
            <b>Commack High School, Commack, NY </b>
           <br/>
            Advanced Regents Diploma
            <br/>
           September 2007 - June 2011

           </p>
           </div>
        </Row>
    </Container>
    );
  }
}

