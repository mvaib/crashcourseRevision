import { Input } from "@chakra-ui/react";
import Login from "./login";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "@/components/ui/input-group";
import { Link } from "react-router-dom"; // Correct import for Link
import Drawer from "./drawer";
import Logo from "./logo";
import PhoneIcon from "./phoneicon";

function Nav(){
    return (
        <header>

            <nav className="nav-bar">
                <Logo/>
                <div className="search">
                    <PhoneIcon/>
                    <div>
                        <InputGroup
                            flex="1"
                            startElement={<LuSearch />}
                            className="search-bar"
                        >
                            <Input placeholder="What are you looking for?" className="search-input" width={"100%"} marginInlineStart={"-10px"} />
                        </InputGroup>
                    </div>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/track-order"><i className="fa-solid fa-truck"></i><span>Track Order</span></Link></li> 
                        <li><Login/></li>
                        <li><Link to="/wishlist"><i className="fa-regular fa-heart"></i><span>Wishlist</span></Link></li> 
                        <li><Link to="/cart"><i className="fa-solid fa-bag-shopping"></i><span>Cart</span></Link></li>
                    </ul>
                </div>
                <Drawer/>
            </nav>
            <div>
                <InputGroup
                    flex="1"
                    startElement={<LuSearch />}
                    className="alternate-search-bar"
                    
                >
                    <Input placeholder="What are you looking for?" className="search-input" width={"100%"} marginInlineStart={"-10px"} />
                </InputGroup>
            </div>
            <div className="header-two-container">
                <div className="one">
                    <ul>
                        <li>Eyeglasses</li>
                        <li>Screen Glasses</li>
                        <li>Kids Glasses</li>
                        <li>Contact Lenses</li>
                        <li>Sunglasses</li>
                        <li>Home Eye-test</li>
                        <li>Store Locator</li>
                    </ul>
                </div>
                <div className="two">
                    <button><img src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="" /></button>
                    <button><img src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" /></button>
                    <button><img src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png" alt="" /></button>
                </div>
            </div>
        </header>
    );
}

export default Nav;
