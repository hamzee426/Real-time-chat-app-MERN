import ChatProfiles from "./Profiles/chatProfiles";
import Header from "./Profiles/header";
import Navbar from "./navbar/navbar";
import OnlineList from "./sidePanelIcons/dashIcons";

const Dashboard = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-slate-200">
        <Navbar />
        <div className="body flex">
          <div className="nav-icons w-[90px] h-[100%] bg-white text-center">
            <OnlineList />
          </div>
          <div className="w-[100%] h-[100%] flex mt-2 ml-2">
            <div className="profiles w-[400px] h-screen bg-transparent">
                <Header/>
                <ChatProfiles/>
            </div>









            <div className="chat w-[100%] h-screen border border-slate-700 bg-white"></div>
            <div className="online-profiles  w-[100px] h-screen border border-slate-700 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
