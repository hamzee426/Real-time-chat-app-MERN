import { useState } from "react";
import profile from "../../../assets/myacc.jpeg"

const ChatProfiles = () => {

    const [isSelected, setisSelected] = useState(false);
    const [isnewMessage, setnewMessage] = useState(false);

    return(
        <>
        <div className="card flex w-[95%] h-[80px] bg-white items-center">
           
        </div>
        </>
    );
}

export default ChatProfiles;

<img src={profile} alt="profile-img" className="size-[55px] rounded-[100%]"/>
            