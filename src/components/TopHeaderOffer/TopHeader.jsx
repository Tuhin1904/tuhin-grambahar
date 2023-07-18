import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <>
    {/* code for bigger devices */}
    <div className="topHeader">
      <div className="announcement-message">
        Get <span className="announcement-main">30%</span> off on your{" "}
        <span className="announcement-main">FIRST ORDER </span>
        use Coupon Code <span className="announcement-main">#FIRST30</span>
      </div>
    </div>




    {/* code for small screen devicces */}
    <div className="sm-top-header">
      <div className="sm-announcement-message">
        Flat 30% off on first Order
      </div>
    </div>
    </>
  );
};

export default TopHeader;
