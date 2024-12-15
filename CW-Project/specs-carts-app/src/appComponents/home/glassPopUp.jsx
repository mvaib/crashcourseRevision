
import { Box, Container, HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger, Strong, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";



function GlassPopUp({img,type}) {
    const [open, setOpen] = useState(false); // State to manage popover visibility

    return (
        <> 
            <div className="glassPopUp-card-container">
                <Link to={"/product"}>
                <HoverCardRoot open={open} onOpenChange={(e) => setOpen(e.open)} openDelay={0} closeDelay={0} >
                        <HoverCardTrigger asChild
                        >
                        <div className="glassPopUp-card">
                            <div>
                                <img src={img} alt="" />
                            </div>
                            {type}
                        </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="glassPopUp-content">
                                <HoverCardArrow/>
                                <div>
                                        <ul>
                                            <li><strong>Air lightweight</strong></li>
                                            <li>Powered Lenses</li>
                                        </ul>
                                        <ul>
                                            <li>starting</li>
                                            <li><strong>2000</strong></li>
                                        </ul>
                                </div>
                                <hr />
                                <div>
                                    <ul>
                                        <li><strong>Air lightweight</strong></li>
                                        <li>Powered Lenses</li>
                                    </ul>
                                    <ul>
                                        <li>starting</li>
                                        <li><strong>2000</strong></li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <ul>
                                        <li><strong>Air lightweight</strong></li>
                                        <li>Powered Lenses</li>
                                    </ul>
                                    <ul>
                                        <li>starting</li>
                                        <li><strong>2000</strong></li>
                                    </ul>
                                </div>
                        </HoverCardContent>
                    </HoverCardRoot>
                </Link>
            </div>
            
        </>
    );
}

export default GlassPopUp;
