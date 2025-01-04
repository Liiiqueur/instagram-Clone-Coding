import {AiFillHome, AiFillCompass, AiFillHeart, AiFillMessage, AiOutlineHome, AiOutlineCompass, AiOutlineHeart, AiOutlinePlusCircle, AiOutlineMessage, AiOutlineSearch, AiFillPlusCircle} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const mainu=[
    {
        title:"Home", icon:<AiOutlineHome className='text-zxl mr-5'/>, activeIcon:<AiFillHome className='text-zxl mr-5'/>
    },
    {
        title:"Search", icon:<AiOutlineSearch className='text-zxl mr-5'/>, activeIcon:<AiOutlineSearch className='text-zxl mr-5'/>
    },
    {
        title:"Explore", icon:<AiOutlineCompass className='text-zxl mr-5'/>, activeIcon:<AiFillCompass className='text-zxl mr-5'/>
    },
    {
        title:"Rells", icon:<RiVideoLine className='text-zxl mr-5'/>, activeIcon:<RiVideoFill className='text-zxl mr-5'/>
    },
    {
        title:"Message", icon:<AiOutlineMessage className='text-zxl mr-5'/>, activeIcon:<AiFillMessage className='text-zxl mr-5'/>
    },
    {
        title:"Notification", icon:<AiOutlineHeart className='text-zxl mr-5'/>, activeIcon:<AiFillHeart className='text-zxl mr-5'/>
    },
    {
        title:"Create", icon:<AiOutlinePlusCircle className='text-zxl mr-5'/>, activeIcon:<AiFillPlusCircle className='text-zxl mr-5'/>
    },
    {
        title:"Profile", icon:<CgProfile className='text-zxl mr-5'/>, activeIcon:<CgProfile className='text-zxl mr-5'/>
    },
]