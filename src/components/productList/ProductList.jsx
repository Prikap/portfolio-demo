import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Skill1 from "../../img/c++.jpg";
import Skill2 from "../../img/HTML.png";
import Skill3 from "../../img/react.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Skills</h1>
        <p className="pl-desc">
        </p>
      </div>
      <div className="pl-list">
        <div><img src={Skill1} alt="C++"/></div>
        <div><img src={Skill2} alt="HTML"/></div>
        <div><img src={Skill3} alt="React js"/></div>
      </div>
    </div>
  );
};

export default ProductList;
