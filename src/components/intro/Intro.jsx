import "./intro.css";
import Art from "../../img/art1.png";
//import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"><b>Hi !!, I am</b></h2>
          <h1 className="i-name">Priyansh Kapadia</h1>
          <div className="i-title">
            <div className="in-right"><h2>Interests</h2></div>
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Development</div>
              <div className="i-title-item">Programming</div>
              <div className="i-title-item">Finance</div>
              <div className="i-title-item">Sports</div>
              <div className="i-title-item">Adventure</div>
            </div>
          </div>
          <p className="i-desc">
            I am a passionate programmer and trying to learn new things and develop new skills for my journey to become a good Software Developer
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Art} art="" className="i-img"/>
        </div>
      </div>
    </div>
  );
};

//<img src={Me} alt="" className="i-img" />
export default Intro;
