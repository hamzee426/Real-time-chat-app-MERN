import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../assets/myacc.jpeg";
import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./pop.css"

const MiniNav = ({className=""}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleIconClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className={`mini-nav flex w-[100%] h-[64px] shadow-md border-gray-400 items-center ${className}`} >
        <img src={img} className="size-[47px] ml-5 rounded-[100%]" />
        <p className="ml-4 text-lg font-semibold">User Name</p>
        <div className="flex-grow"></div>
        <div className="icons flex items-center justify-end mr-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="size-[20px] text-blue-400 cursor-pointer"
            onClick={handleIconClick}
          />
          <FontAwesomeIcon
            icon={faVideo}
            className="size-[20px] text-blue-400 ml-[35px] mr-[30px] cursor-pointer"
            onClick={handleIconClick}
          />
        </div>
      </div>

      {isPopupOpen && <PopUp onClose={closePopup} />}
    </>
  );
};

const PopUp = ({ onClose }) => {
  const handleOKClick = () => {
    // Additional logic if needed
    onClose();
  };

  return (
    <div className="overlay">
      <div className="popup">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-lg font-semibold">Feature Coming Soon</h2>
        <p>We're working on exciting new features. Stay tuned!</p>
        <button className="ok-btn" onClick={handleOKClick}>
          OK
        </button>
      </div>
    </div>
  );
};

export default MiniNav;
