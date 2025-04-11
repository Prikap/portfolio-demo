import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/mee.jpeg";
import College from "../../img/Chandigarh_University.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"><b>About Me</b></h1>
        <p className="a-sub"><h3>Hi !!</h3>i am <b>Priyansh kapadia</b>, i am pursuing my undergraduation in computer science and engineering.
        </p>
        <p className="a-desc">
          currently i am passionate about Competitive programming and learning new concepts. 
          It's not easy and i struggle a lot but i try to keep consistency which is another task because of extra workload.
           
        </p>
        <div className="a-award">
          <div className="a-award-texts">
          <div className="a-edu"><h2>EDUCATION</h2></div>
            <h4 className="a-award-title">CHANDIGARH UNIVERSITY</h4>
            <img src={College} alt="" className="a-award-img" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
