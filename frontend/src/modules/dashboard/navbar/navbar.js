import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/logo.png';
import myimg from '../../../assets/myacc.jpeg';


const Navbar = () =>{
    return(
        <>
        <div className='Navbar w-[100%] h-[60px] bg-white flex items-center'>
            <img src={logo} alt='logo' className='w-[8%] mix-blend-multiply bg-none'/>
            <SearchBar/>
            <div className='flex items-center text-end justify-end ml-[330px]'>
                <FontAwesomeIcon icon={faBell} className='mr-[17px] ml-[-10px] w-[4%] h-[4%] cursor-pointer text-slate-600'/>
                <Account/>
            </div>
        </div>
        </>
    );
}

const Account = () => {
    return(
        <>
            <div className='account flex items-center'>
                
                <img src={myimg} alt='profile-img' className='w-[40px] h-[40px] rounded-[20px]' />
                <div className='acc-name flex ml-[7px]'>
                    <p className='text-sm '>Hamza Hussain</p>
                    <select className='w-[18px] ml-[3px] cursor-pointer border-none rounded-lg outline-none hover:bg-slate-200'>
                        <option value="logout" style={{backgroundColor:"#ffff", width:"200px"}}>Logout</option>
                    </select>
                </div>
            </div>
        </>
    );
}

const SearchBar = () => {
    return(
        <>
        <input
            className='h-[35px] w-[400px] pl-3 border-2 outline-neutral-500'
            placeholder="Search"
        />
        </>
    );
}

export default Navbar;