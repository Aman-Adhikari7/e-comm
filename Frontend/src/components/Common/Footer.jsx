import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12  md:px-16 ">
      <form className="flex mx-4 mb-4 lg:hidden sm:mx-16">
                <input type="email"
                 placeholder="Enter your email"
                 className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md
                 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                 required
                 />
                 <button type="submit" className="bg-black text-white px-4 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">
                    Subscribe
                 </button>
             </form>
        <div className="container  mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 lg:px-0 ">
          <div >
            <h3 className="text-lg text-gray-800 mb-4"> Newsletter</h3>
            <p className="text-gray-500 mb-4">
                Be the first to hear about new products, exclusive events, and 
                online offers.
            </p>
            <p className="font-medium text-sm text-gray-600 mb-6">Sign up and get 10% off your first order</p>
            {/* Newsletter form */}
             <form className="lg:flex hidden ">
                <input type="email"
                 placeholder="Enter your email"
                 className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md
                 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                 required
                 />
                 <button type="submit" className="bg-black text-white px-4 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">
                    Subscribe
                 </button>
             </form>
          </div>

           {/* Shop Links */}
           <div>
            <h3 className="text-lg text-gray-800 mb-4  ">Shop</h3>
            <ul className="space-y-2 text-gray-600">
                <li>
                    <Link to="#" className="hover:text-gray-400 transition-colors">
                        Men's Top Wear
                    </Link>
                 </li>
                 <li>
                    <Link to="#" className="hover:text-gray-400 transition-colors">
                     Women's Top Wear
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400 transition-colors">
                        Men's Bottom Wear
                    </Link>

                  </li>
                  <li>

                    <Link to="#" className="hover:text-gray-400 transition-colors">
                        Women's Bottom Wear
                    </Link>
                  </li>
               
            </ul>
           </div>  

            {/* Support Links */}
              <div>
            <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
            <ul className="space-y-2 text-gray-600">
                <li>
                    <Link to="#" className="hover:text-gray-800 transition-colors">
                        Contact Us
                    </Link>
                 </li>
                 <li>
                    <Link to="#" className="hover:text-gray-800 transition-colors">
                     About Us
                    </Link>
                 </li>
                 <li>

                    <Link to="#" className="hover:text-gray-800 transition-colors">
                      FAQs
                    </Link>
                 </li>
                 <li>
                    <Link to="#" className="hover:text-gray-800 transition-colors">
                        Features
                    </Link>

                 </li>
               
            </ul>
           </div>  
             
             {/* Foloow us  */}
             <div>
                <h3 className="text-lg text-gray-800 mb-4"> Follow Us</h3>
                <div className="flex items-center space-x-4 mb-6 ">
                   <a 
                   href="https://www.facebook.com" 
                   target="_blank"
                   rel="noopeaner noreferrer"
                   className="hover:text-gray-300"
                    >
                    
                     <TbBrandMeta className="h-5 w-5"/> 
                   </a>
                   <a 
                   href="" 
                   target="_blank"
                   rel="noopeaner noreferrer"
                   className="hover:text-gray-300"
                    >
                    <IoLogoInstagram className="h-5 w-5"/> 
                    
                   </a>
                   <a 
                   href="" 
                   target="_blank"
                   rel="noopeaner noreferrer"
                   className="hover:text-gray-300"
                    >
                   <RiTwitterXLine className="h-4 w-4"/> 
                   </a>
                </div>
                <p className="text-gray-500">Call Us</p>
                <p>
                    <FiPhoneCall className="inline-block mr-2"/>
                    0124-864-934
                </p>
             </div>
               
        </div>
            {/*Footer bottom   */}
             <div className="container mx-auto mt-12 px-4 lg:px-0 border-t bprder-gray-200 pt-6">
                <p className="text-gray-500 text-sm tracting-tighter text-center"> @ 2025, AmansLab. All Rights Reserved </p>
             </div>
    </footer>
  );
};

export default Footer;