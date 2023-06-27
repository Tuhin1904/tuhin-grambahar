import React from "react";
import "./TopHeader.css";
const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className="announcement-message">
        Get <span className="announcement-main">30%</span> off on your{" "}
        <span className="announcement-main">FIRST ORDER</span>
        use Coupon Code <span className="announcement-main">#FIRST30</span>
      </div>
    </div>
  );
};

export default TopHeader;
