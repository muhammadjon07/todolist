import React from "react";
import "./CircleButton.css";

const CircleButton = ({ isMode, setisMode }) => {
  return (
    <div>
      <div className="position-fixed contact-button bg-success text-white border border-2 p-4  fs-4">
        <div className="wrapper">
          <input className="hidden-trigger" id="toogle" type="checkbox" />
          <label className="circle" htmlFor="toogle">
            <img
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
              alt=""
            />
          </label>

          <div className="subs">
            <button
              className="sub-circle"
              onClick={() => {
                setisMode(!isMode);
                console.log(isMode);
              }}
            >
              <input
                className="hidden-sub-trigger "
                type="radio"
                name="sub-circle"
                value="1"
              />
              <label className="bg-light text-dark">
                {isMode ? (
                  <i className="fa fa-sun"></i>
                ) : (
                  <i className="fa fa-moon"></i>
                )}
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleButton;
