import facepic from '../images/facepic.png';
import desk from '../images/desk.jpg';

const About = () => {

    return(
        <div className="About">


            <div className="AboutHeadingBox">
                <h1 className="AboutHeadingBox-h1">About Me</h1>
                <img className="AboutHeadingBox-img" src={facepic} alt="facepic" />
            </div>
            
            <div className="AboutTextBox">
                <p className="AboutTextBox-p">
                    I am a self taught web developer who is confident in Javascript, front-end and back-end server side programming looking for a complete career change into programming as I currently work full time in payroll HR for a London based pathology company, and am looking for an opportunity to work full time in web development.  I have been programming for 3.5 years, both on personal projects as well as private clients on evenings and over weekends.  I have learnt all the fundamentals of Javascript such as API fetch requests, handling response data structures and rendering to the browser as necessary, creating and dealing with objects either by function constructors or the newer class based syntax.  I have programmed in vanilla Javascript, as well as frameworks such as React, as well as using NPM packages along with React, such as express, ejs, mongoose, react-router-dom, and others.  
                    <br /> <br />

                    I am happy to join the company on a junior to intermediate level as this would be my first full time permanent developer role.
                    I am very familiar with GIT version control, push and pull requests, and programming in a methodical precise clean way, with regular commits in order for the code to be reviewed before for any main branch merges.
                    I am familiar with all ES6 syntax, as well as older syntax.  I understand closure, scope, the call stack as well as synchronous vs asynchronous code.
                    I would very much appreciate the opportunity to work for a organisation who is willing to guide me into a full time programming role. 
                </p>

                <div className="AboutTextBox-imgDiv">
                    <img className="AboutBox-imgDiv-img" src={desk} alt="desk with laptop" />
                </div>
            </div>



        </div>
    )
};

export default About;