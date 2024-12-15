import { Link } from "react-router-dom"

function Logo(){
    return(
        <>
            <div className="logo">
                <Link to="/">
                    <div>
                        <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="Logo" />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Logo