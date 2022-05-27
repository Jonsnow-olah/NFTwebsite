import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>                               {/*mx-4 means margin on horizontal axis*/}
            {title}
        </li>
    );

}

// Now let's create a function navbar, and we will copy it and paste in every file in our components folder.
const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);            {/* Navigation for mobile devices to toggle the nav. Also in the new version of react, you don't have to import react into jsx files. there was an error, so we chnaged React.useState(false); to useState(false); */}
    return (
        <nav className="w-full flex md:justify-center justify-between items-center items-center p-4"> {/* This md-justify-center means that on medium devices, the justify is going to be center and justify-between means on other devices, justify is going to be between */}
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />

            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className="flex relative">  {/* Navigation for mobile devices */} 
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (       //The code here will only show if the menu is toggled to true
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                        "
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                    ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;