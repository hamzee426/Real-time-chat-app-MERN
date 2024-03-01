import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const onlineList = () => {
    return(
        <>
        <div className="online-icons mt-8 h-screen">
            <ul className="list-style-none">
                <li className="mt-0"><FontAwesomeIcon icon={faUser} className="text-blue-500 size-8 cursor-pointer"/></li>
                <li className="mt-7"><FontAwesomeIcon icon={faMessage} className="text-blue-500 size-8 cursor-pointer"/></li>
                <li className="mt-7"><FontAwesomeIcon icon={faGear} className="text-blue-500 size-8 cursor-pointer"/></li>
                <li className="mt-7"><FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 size-8 cursor-pointer"/></li>
                
                <li className="mt-[200px]"><FontAwesomeIcon icon={faSignOut} className="text-blue-500 size-8 cursor-pointer"/></li>
            </ul>
        
        
        </div>
        </>
    );
}

export default onlineList;