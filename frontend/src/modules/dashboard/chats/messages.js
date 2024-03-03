import "../Profiles/scrollbar.css"

const Messages = ({ className = "" }) => {

    const mesg=[
        {
            "my":"Hi",
            "other":"Helo"
        },{
            "my":"How are you ?",
            "other":"I am good, what about you ?",
            "other":"Do you remeber something ?"
        },{
            "my":"Also good",
            "my":"Yeah, I remember",
            "other":"Can we meet today ?"
        },{
            "my":"yes, let's meet on Park tonight.",
            "other":"Alright, I will wait you at 7:00 PM."
        },{
            "my":"Ok, fine",
            "other":"Yeah"
        },{
            "my":"See you at park",
            "other":"Yeah"
        },
    ];
    return (
        <>
        <div className="messages-container flex flex-col" style={{ maxHeight: '440px', overflowY: 'auto' }}>
          {mesg.map((data, ind) => (
            <div className={`${className}  flex flex-col`} key={ind}>
              <div className={`flex justify-end`}>
                <div className="my-msg w-[400px] bg-blue-700 rounded-lg text-white mr-5 mb-5 mt-2">
                  <p className="text-white text-md overflow-hidden overflow-ellipsis break-words whitespace-pre-line ml-2 pt-2 pb-2">{data.my}</p>
                </div>
              </div>
              <div className={`flex justify-start`}>
                <div className="target-msg w-[400px] bg-green-700 rounded-lg text-white ml-3 mb-5">
                  <p className="text-white text-md overflow-hidden overflow-ellipsis break-words whitespace-pre-line ml-2 pt-2 pb-2">{data.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
      
    );
}

export default Messages;
