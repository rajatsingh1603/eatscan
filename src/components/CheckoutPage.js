import Header from "./Header"
import "../components/checkoutpage.css"
import "../components/footer.css"
import Card from "./Card"
import { Link } from "react-router-dom"
const CheckoutFooter = ()=>{
    return <>
<div className="footer">
            <div className="total_price">
                <h2>Grand Total:&nbsp;</h2>
                <h2 className='actual_price'> &#8377;16</h2>
            </div>
            <div className="next">
                
                <button className='next-button-checkout'>
                    <Link to="order-recieved" className='link'>Order</Link>
                </button>  
                {/* <h2>Next</h2> */}
            </div>
        </div>
    </>
}
const CheckoutPage = ()=>{
    return (
        <>
        <Header />
        <div className="order-summary-text">
            <h2>Your Order has 4 Items</h2>
        </div>
        {[1,2,3,4].map(()=>{return (<Card />)})}
        <CheckoutFooter />
        </>
    )
}
export default CheckoutPage