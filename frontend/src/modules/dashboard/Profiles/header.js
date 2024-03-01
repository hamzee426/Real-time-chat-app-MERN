
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="header flex bg-slate-200 w-[100%] h-[55px]">
        <h1 className="text-2xl font-semibold mt-2 ml-2 text-slate-600">
          Chat
        </h1>
        <FontAwesomeIcon
          icon={faGear}
          className="size-5 ml-[60%] mt-4 text-slate-600"
        />
      </div>
    </>
  );
};

export default Header;
