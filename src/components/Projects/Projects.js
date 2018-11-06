import React, { Component } from 'react';
import "../Global.css"
import { Container, Row, Col, CardImg, Card } from 'reactstrap';
import WB from './WB.png';
import AD from './AD.png';
import AW from './AW.png';

export default class Projects extends Component {
    render() {
        return (
            <div className="background-style">
                <div className="config">
                 <Row>
                     
                    <div className="projects" style={{textDecoration: "underline", fontSize:"3.5em"}}>Projects</div>
                </Row>
                <br/>
                <Row>
                    <Card>
                        <a className="tags" href="https://wb-explorer.now.sh/"><CardImg top width="50%" src={WB} alt="Card image cap" /></a>
                    </Card>
                </Row>
                <br/>
                <Row>
                    <div className="projects">WB Explorer</div>
                </Row>
                <br/>
                <div className="assets"> 
                    <ul className="listed" style={{padding: "0", fontSize:".75em"}}>
                        <li> Implemented the Rest methodology via Node JS, using axios calls to the database to update, delete, create and read data using PostgreSQL.</li>
                        <li>Used a two third party API’s, one for pulling weather data and the other to calculate currency conversions and used google chrome developer tools to access the props that were coming off the API’s data. Read documentation to see the requirements of what functionality such as filter with a query string that could be used with the API where the user can select a country and city or currency type to view the data they requested.</li> 
                        <li>Utilized Auth0 for client verification, where in which the user could use info from a third party to help create a profile.</li>
                        <li>Utilized PostgreSQL heroku database for managing data while along with using some intermediate to advanced SQL to have tables create one to many relationships along with referencing foreign keys.</li>
                        <li>Implementing advanced CSS3 principles like styling such as using grid, flex and media queries to make the application responsive. Using advanced HTML5 concepts such as semantic elements.</li>
                        <li>Using ifconfig | grep inet to test applications on IOs mobile devices before running a build.</li>
                        <li><b>Technology Stack: Javascript, PostgreSQL, Express.JS, Node.JS, Cloudinary, Zeit, Redux, Auth0</b></li>
                    </ul>  
                </div>
                <hr/>
                <Row>
                    <Card>
                        <a className="tags" href="http://adventureproject.tk"><CardImg top width="50%" src={AD} alt="Card image cap" /></a>
                    </Card>
                </Row>
                <br/>
                <Row>
                    <div className="projects">Adventure Project</div>
                </Row>
                <br/>
                <div className="assets"> 
                    <ul className="listed" style={{padding: "0", fontSize:".75em"}}>
                        <li>Implemented the REST methodology, via Node JS. Used axios to make calls to the database to update, delete, create,and read data using PostgreSQL.</li>
                        <li>Implemented third party API’s for pulling data such as trail info, google map info and weather data accessed via props. Creating filter functionality for the user to search by location. Testing the API using Postman to make sure the data was being received correctly through app.get, app.post, app.create, app.delete.</li>
                        <li>Enabled locating services via props using latitude and longitude so user can get access to trails that the API would respond with that are nearby.</li>
                        <li>Using git branches and git merges to manage our applications progress on the team. Creating a trello board to delegate and complete tasks with transparency, while working using agile scrum methodology of 2 day sprints.</li>
                        <li>Transformed and modernized software development methodology by advocating, establishing, implementing efficient planning processes and using agile scrum methodology.</li>
                        <li><b>Technology Stack: Javascript, PostgreSQL, Express.JS, Node.JS, Nodemailer, Bootstrap, Bcrypt, Redux</b></li>
                    </ul>  
                </div>
                <hr/>
                <Row>
                    <Card>
                        <a className="tags" href="https://www.anwrehab.com/"><CardImg top width="50%" src={AW} alt="Card image cap" /></a>
                    </Card>
                </Row>
                <br/>
                <Row>
                    <div className="projects">Aquatice-N-Writing Rehab</div>
                </Row>
                <br/>
                <div className="assets"> 
                    <ul className="listed" style={{padding: "0", fontSize:".75em"}}>
                    <li>Implementing bootstrap designs and semantic UI elements to make responsive web design.</li>
                    <li>Using Node.JS to communicate with the front end of my application so data can be easily passed from the backend.</li>
                    <li>Working the technologies such as nodemailer to allow form submission on client side to make UX intuitive.</li>
                    <li>Using functions like .map() to easily display an array of data that is being passed from endpoints on the backend.</li>
                    <li><b>Technology Stack: Javascript, PostgreSQL, Express.JS, Node.JS, Nodemailer</b></li>
                 </ul>  
                </div>
                </div>
                <br/>
            </div>
        );
    }
}