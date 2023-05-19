import companyLogo from "../utils/Images/company_logo.svg"
import '../components/header.css'
const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="company_logo">
                <img src={companyLogo} />
            </div>
        </div>
        </>
    )
}
export default Header