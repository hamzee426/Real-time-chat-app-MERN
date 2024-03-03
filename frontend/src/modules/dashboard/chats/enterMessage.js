import {Input} from "../../../components/inputs/label"
import { useState } from "react";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SendMessage = ({className=""}) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [message,setMessage] = useState("");

    const handleMessage = () => {
        console.log(message);
        setMessage("")
    }

    return(
        <>
        <div className={`${className} justify-center flex items-center text-center`}>
            <div className="border-[1.5px] border-black rounded-[50px] w-[90%] h-[45px] mb-5 flex ">
                <input className={`rounded-[50px] w-[90%] h-[43px] mb-5 flex pl-4 focus:outline-none`} placeholder="Enter Message"  value={message} onChange={(e)=> setMessage(e.target.value)}/>
                <div className="flex w-[35px] h-[35px] rounded-[100%] border-blue-400 border-0 justify-center items-center text-center mt-1 ml-7 cursor-pointer">
                    <FontAwesomeIcon icon={faLocationArrow} className="text-blue-400 size-7 hover:text-blue-500" style={{ transform: 'rotate(45deg)' }} onClick={handleMessage}/>
                </div>
            </div>
        </div>
    </>
    
    );
}
export default SendMessage;