import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <>
    {/* code for bigger devices */}
    {/* <div className="topHeader">
      <div className="announcement-message">
        Get <span className="announcement-main">30%</span> off on your{" "}
        <span className="announcement-main">FIRST ORDER </span>
        use Coupon Code <span className="announcement-main">#FIRST30</span>
      </div>
    </div> */}




    {/* code for small screen devicces */}
    {/* <div className="sm-top-header">
      <div className="sm-announcement-message">
        Flat 30% off on first Order
      </div>
    </div> */}
    <div className="top_nav">
    <div class="wrapper">
    
      <ul class="dynamic-txts">
        <li><span>Get 30% off on your first order</span></li>
        <li><span>Apply cupon code #GET30</span></li>
        <li><span>Get 30% off on your first order</span></li>
        <li><span>Apply cupon code #GET30</span></li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default TopHeader;
