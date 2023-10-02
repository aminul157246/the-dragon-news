import { FcGoogle} from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'



const RightSideNav = () => {
    return (

   <div>
         <div className="space-y-3">
            <h2 className="text-2xl "> Log in with </h2>
            <button className="btn btn-outline w-full">
                <FcGoogle></FcGoogle>
                Google
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
            </button>
        </div>




        <div >
            <h2 className="text-2xl "> Find us on  </h2>
            <a href="" className="flex pl-3 items-center gap-2 border py-2 rounded-t-lg">
                <FaFacebook></FaFacebook>
                Facebook
            </a>
            <a href="" className="flex pl-3 items-center gap-2 border py-2 ">
                <FaTwitter></FaTwitter>
                Twitter
            </a>
            <a href="" className="flex pl-3 items-center gap-2 border py-2 rounded-b-lg">
                <FaInstagram></FaInstagram>
                InsFaInstagram
            </a>
        </div>



        {/* Zone  */}
        <div>
            <h2 className="text-2xl">Q-Zone</h2>
            <div>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
                
            </div>
            
        </div>

    </div>
    );
};

export default RightSideNav;