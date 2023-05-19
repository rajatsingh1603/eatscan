import '../components/order.css'
import check from "../utils/Images/check.png"
const OrderRecieved = ()=>{
    return(
        <>
        <div className='check-container'>
        <div className="tick"><img src={check} className='check' /></div>
        <div className='recieved'>
            <h2>Order Recieved</h2>
        </div>
        </div>
        
        </>
    )
}
export default OrderRecieved