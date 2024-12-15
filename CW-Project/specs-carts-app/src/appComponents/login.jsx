import { Button, Input, DialogActionTrigger, Link, Group, InputAddon, Stack } from "@chakra-ui/react"
import {
    PasswordInput,
    PasswordStrengthMeter,
  } from "@/components/ui/password-input"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState } from "react"

function Login(){
    let [showSignIn, setShowSignIn] = useState(false)
    function handleToggle(){
        setShowSignIn(!showSignIn)
    }
    return(
        <>
            {showSignIn ? (
                <DialogRoot
                placement={"center"}
                motionPreset="slide-in-bottom"
              >
                <DialogTrigger asChild>
                    <Link to={"/login"} className="login-link drawer-login-link">Sign In & Sign Up</Link>
                </DialogTrigger>
                <DialogContent maxWidth="500px" size="lg" className="signIn-dialog singIn-dialog" >
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt=""/>
                    </div>
                  <DialogHeader>
                    <DialogTitle className="dialog-title" >Sign In</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <form type="submit" onSubmit={(e) => e.preventDefault()}>
                        <Input className="input" placeholder="Email*" />
                        <PasswordInput className="input" placeholder="Password*"/>
                        <p className="referral">Got a Referral Code? ( Optional )</p>
                        <div className="whatsapp">
                        <input type="checkbox"/> <p>Get updates on Whatsapp</p>
                        </div>
                        <Button className="sign-in" borderRadius={"30px"} width={"100%"} type="submit">Sign In</Button>
                        <p className="create-account-option">New member?<strong onClick={handleToggle}>Create an Account</strong></p>
                    </form>
                  </DialogBody>
                  {/* <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Save</Button>
                  </DialogFooter> */}
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
            ) : (
                <DialogRoot
                placement={"center"}
                motionPreset="slide-in-bottom"
              >
                <DialogTrigger asChild>
                    <Link to={"/login"} className="login-link draewer-login-link">Sign In & Sign Up</Link>
                </DialogTrigger>
                <DialogContent maxWidth="500px" size="lg" className="login-dialog">
                  <DialogHeader>
                    <DialogTitle className="dialog-title" >Create an Account</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <form type="submit" onSubmit={(e) => e.preventDefault()}>
                        <Input className="input" placeholder="First Name*" />
                        <Input className="input" placeholder="Last Name*" />
                        <Group attached>
                            <InputAddon className="input-addon" borderRadius={"10px"}>+91</InputAddon>
                            <Input className="input" placeholder="Phone number..." />
                        </Group>
                        <Input className="input" placeholder="Email*" />
                        <Input className="input" placeholder="Passowrd*" />
                        <p className="referral">Got a Referral Code? ( Optional )</p>
                        <div className="whatsapp">
                        <input type="checkbox"/> <p>Get updates on Whatsapp</p>
                        </div>
                        <p className="privacy">By creating this account, you agree to our <strong>Privacy Policy</strong> </p>
                        <Button className="create-account" borderRadius={"30px"} width={"100%"} type="submit">Create Account</Button>
                        <div className="signin-option">
                            <p>Have an account? <strong onClick={handleToggle}>Sign In</strong></p>
                        </div>
                    </form>
                  </DialogBody>
                  {/* <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Save</Button>
                  </DialogFooter> */}
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
            )}
        </>
    )
}

export default Login