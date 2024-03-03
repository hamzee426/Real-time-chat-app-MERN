import ChatProfiles from "./Profiles/chatProfiles";
import Messages from "./chats/messages";
import SendMessage from "./chats/enterMessage";
import MiniNav from "./chats/miniNav";
import Header from "./Profiles/header";
import Navbar from "./navbar/navbar";
import OnlineList from "./sidePanelIcons/dashIcons";

const Dashboard = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-slate-200">
        <Navbar />
        <div className="body flex">
          <div className="nav-icons w-[82px] h-[88%] bg-white text-center">
            <OnlineList />
          </div>
          <div className="w-[100%] h-[100%] flex mt-2 ml-2">
            <div className="profiles w-[440px] h-[88%] bg-transparent">
                <Header/>
                <ChatProfiles/>
            </div>

            <div className="chat w-[100%] h-[88%]  bg-white ml-1">
              <MiniNav className="border-b-2"/>
              <Messages className="w-[100%] h-[440px] bg-white "/>
              <SendMessage className="w-[100%] h-[50px] bg-white"/>
            </div>
            <div className="online-profiles w-[100px] h-[570px] ml-2 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
