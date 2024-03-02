import { useEffect, useState } from "react";
import image from "../../../assets/myacc.jpeg";
import "./scrollbar.css"

const ChatProfiles = () => {
    const [selectProfile, setisSelectedProfile] = useState(null);
    const obj = [
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "John",
            "message": "Hello",
            "count" : 4
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Emily",
            "message": "Hi there",
            "count" : 0
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Michael",
            "message": "How are you?",
            "count" : 1
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Sophia",
            "message": "Nice to meet you",
            "count" : 5
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Daniel",
            "message": "What's up?",
            "count" : 11
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Olivia",
            "message": "Good morning",
            "count" : 0
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "David",
            "message": "Have a great day",
            "count" : 0
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Emma",
            "message": "Take care",
            "count" : 0
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "James",
            "message": "See you later",
            "count" : 0
        },
        {
            "img": "../../../assets/myacc.jpeg",
            "name": "Ava",
            "message": "Best regards",
            "count" : 0
        }
    ];

    const [profile,setProfile] = useState(obj);


    const handleClick = (index) => {
        setisSelectedProfile(index);
    
        const updatedProfiles = [...profile];
    
        if (updatedProfiles[index].count > 0) {
            updatedProfiles[index] = { ...updatedProfiles[index], count: 0 };
        }
    
        setProfile(updatedProfiles);
    };
    


    return (
        <>
        <div className="w-[100%] h-[500px] overflow-y-auto max-h-[90%] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {profile.map((md,index) => (
            <>
                <div key={md.name} className="card flex relative w-[99%] h-[80px] border-b-2 border-gray-300 bg-white items-center cursor-pointer " onClick={()=>handleClick(index)}>
                    {index === selectProfile ? (
                        <>
                            <div className="absolute h-full w-1.5 bg-blue-400 left-0"></div>
                        </>
                    ) : (
                        <></>
                    )}

                    <img src={image} className="size-[53px] ml-3 rounded-[100%]" />
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold">{md.name}</p>
                        <p className="text-sm">
                            {md.message.length >= 28 ? (
                                <span>
                                    {md.message.substring(0, 26)}
                                    <span className="text-green-700 text-md"> ...</span>
                                </span>
                            ) : (
                                md.message
                            )}
                        </p>
                    </div>

                    {md.count > 0  ? (
                        <>
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                                {
                                    md.count >10 ? 
                                    <>
                                    <p className="text-white text-[0.785rem]">10+</p>
                                    </>
                                    :
                                    <>
                                    <p className="text-white text-[0.785rem]">{md.count}</p>
                                    </>
                                }
                                
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                
                </>
    ))}
    </div>
    </>
    );
};

export default ChatProfiles;
