"use client"

import { Button } from "@/components/ui/button"
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"
import Login from "./login"
import Logo from "./logo"
import User from "./user"
import PhoneIcon from "./phoneicon"
import DrawerAccordion from "./drawerAccordion"

const Drawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="lg">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" className="drawer-bars-btn">
        <i className="fa-solid fa-bars"></i>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="drawer-content">
        <DrawerHeader>
          <DrawerTitle><Logo/></DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="drawer-body">
            <hr />
            <div className="drawer-login">
                <User/>
                <div>
                    <h3><strong>Hi specsy!</strong></h3>
                    <p>Login or SignUp to track orders and get access to exclusive deals</p>
                </div>
            </div>
            <Button variant="outline" className="drawer-login-btn"><Login/></Button>
            <div className="drawer-contact">
                <p>Talk to us</p>
                <PhoneIcon/>
            </div>
            <DrawerAccordion/>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}

export default Drawer